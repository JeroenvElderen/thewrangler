"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";

export type CarActionState = {
  ok?: boolean;
  message: string;
};

type CarStatusValue = "draft" | "published" | "archived";

type CarPayload = {
  slug: string;
  title: string;
  make: string;
  model: string;
  trim: string | null;
  year: number;
  price_amount: number;
  currency: "SEK";
  status: CarStatusValue;
  image_url: string;
  mileage_km: number | null;
  fuel_type: string | null;
  transmission: string | null;
  drivetrain: string | null;
  exterior_color: string | null;
  interior_color: string | null;
  location: string | null;
  badge: string | null;
  is_featured: boolean;
};

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function nullableStringValue(formData: FormData, key: string) {
  const value = stringValue(formData, key);
  return value.length > 0 ? value : null;
}

function numberValue(formData: FormData, key: string) {
  const rawValue = stringValue(formData, key);
  if (!rawValue) return null;
  const value = Number(rawValue);
  return Number.isFinite(value) ? value : null;
}

function statusValue(formData: FormData) {
  const status = stringValue(formData, "status");
  return ["draft", "published", "archived"].includes(status) ? (status as CarStatusValue) : "draft";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSupabaseAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

function carPayloadFromFormData(formData: FormData): CarActionState | CarPayload {
  const make = stringValue(formData, "make");
  const model = stringValue(formData, "model");
  const trim = nullableStringValue(formData, "trim");
  const year = numberValue(formData, "year");
  const priceAmount = numberValue(formData, "price_amount");

  if (!make || !model || !year || !priceAmount) {
    return { ok: false, message: "Make, model, year, and SEK price are required." };
  }

  const title = [make, model, trim, year].filter(Boolean).join(" ");

  return {
    slug: slugify(title),
    title,
    make,
    model,
    trim,
    year,
    price_amount: priceAmount,
    currency: "SEK",
    status: statusValue(formData),
    image_url: stringValue(formData, "image_url") || "/car1.png",
    mileage_km: numberValue(formData, "mileage_km"),
    fuel_type: nullableStringValue(formData, "fuel_type"),
    transmission: nullableStringValue(formData, "transmission"),
    drivetrain: nullableStringValue(formData, "drivetrain"),
    exterior_color: nullableStringValue(formData, "exterior_color"),
    interior_color: nullableStringValue(formData, "interior_color"),
    location: nullableStringValue(formData, "location"),
    badge: nullableStringValue(formData, "badge"),
    is_featured: formData.get("is_featured") === "true",
  };
}

export async function createCar(
  _previousState: CarActionState,
  formData: FormData,
): Promise<CarActionState> {
  const car = carPayloadFromFormData(formData);

  if ("message" in car) {
    return car;
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { error } = await supabase.from("cars").insert({ ...car, views: 0 });

  if (error) {
    return { ok: false, message: `Failed to save car: ${error.message}` };
  }

  revalidatePath("/dashboard/cars");
  revalidatePath("/(site)/cars", "page");

  return { ok: true, message: `${car.title} saved.` };
}

export async function updateCar(
  _previousState: CarActionState,
  formData: FormData,
): Promise<CarActionState> {
  const id = stringValue(formData, "id");

  if (!id) {
    return { ok: false, message: "Select a car before updating." };
  }

  const car = carPayloadFromFormData(formData);

  if ("message" in car) {
    return car;
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { error } = await supabase.from("cars").update(car).eq("id", id);

  if (error) {
    return { ok: false, message: `Failed to update car: ${error.message}` };
  }

  revalidatePath("/dashboard/cars");
  revalidatePath("/(site)/cars", "page");
  revalidatePath("/(site)/cars/[slug]", "page");

  return { ok: true, message: `${car.title} updated.` };
}

export async function deleteCar(id: string): Promise<CarActionState> {
  if (!id) {
    return { ok: false, message: "Select a car before deleting." };
  }

  const supabase = getSupabaseAdminClient();

  if (!supabase) {
    return { ok: false, message: "Supabase admin environment variables are not configured." };
  }

  const { error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    return { ok: false, message: `Failed to delete car: ${error.message}` };
  }

  revalidatePath("/dashboard/cars");
  revalidatePath("/(site)/cars", "page");
  revalidatePath("/(site)/cars/[slug]", "page");

  return { ok: true, message: "Car deleted." };
}