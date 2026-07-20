import { createClient } from "@supabase/supabase-js";
import { cars as fallbackCars, type Car, type CarStatus } from "@/data/cars";

type SupabaseCarRow = {
  id: string;
  slug: string;
  title: string;
  make: string;
  model: string;
  trim: string | null;
  year: number;
  price_amount: number;
  currency: "EUR" | "SEK" | "USD";
  status: "draft" | "published" | "archived";
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

const statusLabels: Record<SupabaseCarRow["status"], CarStatus> = {
  draft: "Draft",
  published: "Published",
  archived: "Archived",
};

function formatPrice(amount: number, currency: SupabaseCarRow["currency"]) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function mapCarRow(row: SupabaseCarRow): Car {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    make: row.make,
    model: row.model,
    year: row.year,
    price: formatPrice(row.price_amount, row.currency),
    priceAmount: row.price_amount,
    currency: row.currency,
    status: statusLabels[row.status],
    image: row.image_url,
    trim: row.trim ?? undefined,
    mileageKm: row.mileage_km ?? undefined,
    fuelType: row.fuel_type ?? undefined,
    transmission: row.transmission ?? undefined,
    drivetrain: row.drivetrain ?? undefined,
    exteriorColor: row.exterior_color ?? undefined,
    interiorColor: row.interior_color ?? undefined,
    location: row.location ?? undefined,
    badge: row.badge ?? undefined,
    views: row.views,
    isFeatured: row.is_featured,
  };
}

export function getSupabaseClient() {
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

export async function getCars() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return fallbackCars;
  }

  const { data, error } = await supabase
    .from("cars")
    .select(
      "id, slug, title, make, model, trim, year, price_amount, currency, status, image_url, mileage_km, fuel_type, transmission, drivetrain, exterior_color, interior_color, location, badge, views, is_featured",
    )
    .order("is_featured", { ascending: false })
    .order("year", { ascending: false });

  if (error) {
    console.error("Failed to fetch cars from Supabase", error);
    return fallbackCars;
  }

  return (data as SupabaseCarRow[]).map(mapCarRow);
}