import {
  Activity,
  BarChart3,
  CalendarDays,
  Car,
  Eye,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Mail,
  Settings,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Cars", href: "/dashboard/cars", icon: Car },
  { label: "Insights", href: "/dashboard/insights", icon: BarChart3 },
  { label: "Page Texts", href: "/dashboard/page-texts", icon: FileText },
  { label: "Media", href: "/dashboard/media", icon: ImageIcon },
  { label: "Users", href: "/dashboard/users", icon: Users },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Activity Log", href: "/dashboard/activity-log", icon: Activity },
];

export const stats = [
  { icon: Car, label: "Total Cars", value: "42", delta: "+5 this week" },
  { icon: Eye, label: "Total Views", value: "12,842", delta: "+18.2% this week" },
  { icon: CalendarDays, label: "Test Drive Requests", value: "128", delta: "+12.4% this week" },
  { icon: Mail, label: "Contact Messages", value: "32", delta: "-3.1% this week" },
];

export { cars } from "@/data/cars";

export const activity = [
  ["Admin", "Updated car", "Jeep Wrangler Rubicon 2021", "May 18, 2024 10:34 AM"],
  ["Jane Smith", "Changed page text", "Homepage · Hero Section", "May 18, 2024 09:15 AM"],
  ["Admin", "Added car", "Jeep Gladiator 2023", "May 17, 2024 04:22 PM"],
  ["Mika Johnson", "Updated page text", "About Us Page", "May 17, 2024 11:03 AM"],
  ["Sarah Williams", "Uploaded media", "wrangler-3.jpg", "May 16, 2024 03:22 PM"],
];

export const mediaAssets = ["/car1.png", "/car2.png", "/car3.png", "/car4.png", "/car5.png", "/Wrangler_MasterLogo.png"];

export const users = [
  ["Admin", "admin@thewrangler.com", "Administrator", "Active"],
  ["Jane Smith", "jane@thewrangler.com", "Editor", "Active"],
  ["Mika Johnson", "mika@thewrangler.com", "Editor", "Active"],
  ["Sarah Williams", "sarah@thewrangler.com", "Viewer", "Active"],
  ["Tom Brown", "tom@thewrangler.com", "Viewer", "Inactive"],
];
