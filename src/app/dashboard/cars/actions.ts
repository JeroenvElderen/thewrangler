"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";

export type CreateCarState = {
  ok?: boolean;
  message: string;
};

type CarInsert = {
  slug: string;
  title: string;
  make: string;
  model: string;
  trim: string | null;
  year: number;
  price_amount: number;
  currency: "SEK";
  status: "draft";
  image_url: string;
  mileage_km: number | null;
  fuel_type: string | null;
  transmission: string | null;
  drivetrain: string | null;
  exterior_color: string | null;
  interior_color: string | null;
  location: string | null;
  badge: string | null;
  views: number;
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}

export async function createCar(
  _previousState: CreateCarState,
  formData: FormData,
): Promise<CreateCarState> {
  const make = stringValue(formData, "make");
  const model = stringValue(formData, "model");
  const trim = nullableStringValue(formData, "trim");
  const year = numberValue(formData, "year");
  const priceAmount = numberValue(formData, "price_amount");

  if (!make || !model || !year || !priceAmount) {
    return { ok: false, message: "Make, model, year, and SEK price are required." };
  }

  const title = [make, model, trim, year].filter(Boolean).join(" ");
  const slug = slugify(title);

  const car: CarInsert = {
    slug,
    title,
    make,
    model,
    trim,
    year,
    price_amount: priceAmount,
    currency: "SEK",
    status: "draft",
    image_url: stringValue(formData, "image_url") || "/car1.png",
    mileage_km: numberValue(formData, "mileage_km"),
    fuel_type: nullableStringValue(formData, "fuel_type"),
    transmission: nullableStringValue(formData, "transmission"),
    drivetrain: nullableStringValue(formData, "drivetrain"),
    exterior_color: nullableStringValue(formData, "exterior_color"),
    interior_color: nullableStringValue(formData, "interior_color"),
    location: nullableStringValue(formData, "location"),
    badge: nullableStringValue(formData, "badge"),
    views: 0,
    is_featured: formData.get("is_featured") === "true",
  };

  const supabase = getSupabaseClient();

  if (!supabase) {
    return { ok: false, message: "Supabase environment variables are not configured." };
  }

  const { error } = await supabase.from("cars").insert(car);

  if (error) {
    return { ok: false, message: `Failed to save car: ${error.message}` };
  }

  revalidatePath("/dashboard/cars");

  return { ok: true, message: `${title} saved as a draft in SEK.` };
}