import { users as fallbackUsers } from "@/app/dashboard/_components/data";
import { cars as fallbackCars, type Car } from "@/data/cars";
import { getCars, getSupabaseClient } from "./cars";

export type DashboardUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
};

export type InsightStat = {
  label: string;
  value: string;
  delta: string;
};

export type TrafficSource = {
  label: string;
  value: number;
};

export type TopPage = {
  path: string;
  views: number;
};

export type DashboardInsights = {
  stats: InsightStat[];
  trafficTotal: number;
  trafficSources: TrafficSource[];
  topPages: TopPage[];
  users: DashboardUser[];
  cars: Car[];
};

type UserRow = {
  id?: string | number;
  full_name?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  status?: string | null;
  is_active?: boolean | null;
};

type CountableTable = "test_drive_requests" | "contact_messages" | "page_views";

type PageViewRow = {
  path: string | null;
  source: string | null;
};

const fallbackTopPages: TopPage[] = [
  { path: "/", views: 3245 },
  { path: "/inventory", views: 2946 },
  { path: "/about-us", views: 2647 },
  { path: "/contact", views: 2348 },
];

const fallbackTrafficSources: TrafficSource[] = [
  { label: "Direct", value: 48.3 },
  { label: "Organic Search", value: 28.7 },
  { label: "Social Media", value: 12.7 },
  { label: "Referral", value: 7.7 },
];

const fallbackDashboardUsers: DashboardUser[] = fallbackUsers.map((user) => ({
  id: user[1],
  name: user[0],
  email: user[1],
  role: user[2],
  status: user[3] === "Inactive" ? "Inactive" : "Active",
}));

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function mapUser(row: UserRow): DashboardUser {
  const email = row.email ?? "unknown@thewrangler.com";

  return {
    id: String(row.id ?? email),
    name: row.full_name ?? row.name ?? email.split("@")[0] ?? "Unknown user",
    email,
    role: row.role ?? "Viewer",
    status: row.status === "Inactive" || row.is_active === false ? "Inactive" : "Active",
  };
}

async function getTableCount(table: CountableTable) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return null;
  }

  const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true });

  if (error) {
    return null;
  }

  return count ?? 0;
}

async function getPageViews() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from("page_views")
    .select("path, source")
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) {
    return null;
  }

  return (data as PageViewRow[]) ?? [];
}

function getTopPagesFromViews(pageViews: PageViewRow[] | null) {
  if (!pageViews?.length) {
    return null;
  }

  const counts = pageViews.reduce<Record<string, number>>((accumulator, view) => {
    const path = view.path ?? "/";
    accumulator[path] = (accumulator[path] ?? 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(counts)
    .map(([path, views]) => ({ path, views }))
    .sort((first, second) => second.views - first.views)
    .slice(0, 4);
}

function getTrafficSourcesFromViews(pageViews: PageViewRow[] | null) {
  if (!pageViews?.length) {
    return fallbackTrafficSources;
  }

  const counts = pageViews.reduce<Record<string, number>>((accumulator, view) => {
    const source = view.source ?? "Direct";
    accumulator[source] = (accumulator[source] ?? 0) + 1;
    return accumulator;
  }, {});

  return Object.entries(counts)
    .map(([label, count]) => ({
      label,
      value: Number(((count / pageViews.length) * 100).toFixed(1)),
    }))
    .sort((first, second) => second.value - first.value);
}

export async function getDashboardUsers() {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return fallbackDashboardUsers;
  }

  const { data, error } = await supabase
    .from("users")
    .select("id, full_name, name, email, role, status, is_active")
    .order("full_name", { ascending: true });

  if (error || !data?.length) {
    return fallbackDashboardUsers;
  }

  return (data as UserRow[]).map(mapUser);
}

export async function getDashboardInsights(): Promise<DashboardInsights> {
  const [cars, users, testDriveRequests, contactMessages, pageViewCount, pageViewRows] = await Promise.all([
    getCars(),
    getDashboardUsers(),
    getTableCount("test_drive_requests"),
    getTableCount("contact_messages"),
    getTableCount("page_views"),
    getPageViews(),
  ]);

  const carViews = cars.reduce((sum, car) => sum + (car.views ?? 0), 0);
  const totalViews = pageViewCount ?? (carViews || 12842);
  const totalCars = cars.length || fallbackCars.length;
  const topCars = [...cars].sort((first, second) => (second.views ?? 0) - (first.views ?? 0));
  const topPages = getTopPagesFromViews(pageViewRows) ?? (topCars.length
    ? topCars.slice(0, 4).map((car) => ({ path: `/cars/${car.slug}`, views: car.views ?? 0 }))
    : fallbackTopPages);
  const trafficSources = getTrafficSourcesFromViews(pageViewRows);

  return {
    stats: [
      { label: "Total Cars", value: formatNumber(totalCars), delta: "Live inventory count" },
      { label: "Total Views", value: formatNumber(totalViews), delta: "Live car view total" },
      { label: "Test Drive Requests", value: formatNumber(testDriveRequests ?? 128), delta: testDriveRequests === null ? "Static fallback" : "Live request count" },
      { label: "Contact Messages", value: formatNumber(contactMessages ?? 32), delta: contactMessages === null ? "Static fallback" : "Live inbox count" },
    ],
    trafficTotal: totalViews,
    trafficSources,
    topPages,
    users,
    cars,
  };
}