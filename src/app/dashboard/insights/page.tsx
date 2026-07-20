import { getDashboardInsights } from "@/lib/supabase/dashboard-insights";
import InsightsDashboard from "../_components/insights-dashboard";

export default async function InsightsPage() {
  const insights = await getDashboardInsights();

  return <InsightsDashboard insights={insights} />;
}
