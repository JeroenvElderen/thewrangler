"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Car, ChevronDown, Eye, Mail, Power, TrendingUp, Users } from "lucide-react";

import { getDashboardInsights, type DashboardInsights } from "@/lib/supabase/dashboard-insights";
import { getSupabaseClient } from "@/lib/supabase/cars";
import CarsSection from "./cars-section";
import styles from "../dashboard.module.css";

const statIcons = [Car, Eye, CalendarDays, Mail];
const realtimeTables = ["cars", "users", "test_drive_requests", "contact_messages", "page_views"];

type InsightsDashboardProps = {
  insights: DashboardInsights;
};

export default function InsightsDashboard({ insights }: InsightsDashboardProps) {
  const [liveInsights, setLiveInsights] = useState(insights);
  const [isRealtimeConnected, setIsRealtimeConnected] = useState(false);

  useEffect(() => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return;
    }

    const refreshInsights = async () => {
      const nextInsights = await getDashboardInsights();
      setLiveInsights(nextInsights);
    };

    const channel = realtimeTables.reduce(
      (currentChannel, table) =>
        currentChannel.on(
          "postgres_changes",
          { event: "*", schema: "public", table },
          refreshInsights,
        ),
      supabase.channel("dashboard-insights-realtime"),
    );

    channel.subscribe((status) => {
      setIsRealtimeConnected(status === "SUBSCRIBED");
    });

    return () => {
      setIsRealtimeConnected(false);
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <>
      <div className={styles.heroPanel}>
        <div>
          <p className={styles.eyebrow}>Analytics</p>
          <h1>Insights</h1>
          <p>Detailed analytics and realtime insights about website performance.</p>
        </div>
        <div className={styles.headerBadges}>
          <span className={isRealtimeConnected ? styles.liveBadge : styles.offlineBadge}>
            {isRealtimeConnected ? "Live data" : "Realtime connecting"}
          </span>
          <button className={styles.cardButton}>Realtime <ChevronDown size={12} /></button>
        </div>
      </div>

      <section className={styles.statsGrid}>
        {liveInsights.stats.map(({ label, value, delta }, index) => {
          const Icon = statIcons[index] ?? TrendingUp;

          return (
            <article className={styles.statCard} key={label}>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
                <em>{delta}</em>
              </div>
              <Icon size={22} />
            </article>
          );
        })}
      </section>

      <section className={styles.mainGrid}>
        <article className={styles.chartCard}>
          <div className={styles.cardHeader}><h2>Website Traffic</h2><button>Live</button></div>
          <div className={styles.chart}><svg viewBox="0 0 640 220" role="img" aria-label="Website traffic chart"><path className={styles.gridLine} d="M20 40H620M20 90H620M20 140H620M20 190H620" /><path className={styles.area} d="M20 160L115 135L210 65L305 148L400 110L495 132L590 44L620 55V220H20Z" /><path className={styles.line} d="M20 160L115 135L210 65L305 148L400 110L495 132L590 44L620 55" /></svg></div>
        </article>
        <article className={styles.card}>
          <div className={styles.cardHeader}><h2>Traffic Sources</h2><Power size={17} /></div>
          <div className={styles.donut}>{liveInsights.trafficTotal.toLocaleString()}<br /><span>Total</span></div>
          {liveInsights.trafficSources.map((source) => <p className={styles.sourceRow} key={source.label}>{source.label}<b>{source.value}%</b></p>)}
        </article>
      </section>

      <section className={styles.mainGrid}>
        <article className={styles.card}>
          <div className={styles.cardHeader}><h2>Top Pages</h2><TrendingUp size={17} /></div>
          {liveInsights.topPages.map((page) => <p className={styles.sourceRow} key={page.path}>{page.path}<b>{page.views.toLocaleString()}</b></p>)}
        </article>
        <article className={styles.card}>
          <div className={styles.cardHeader}><h2>Tracked Users</h2><Users size={17} /></div>
          {liveInsights.users.map((user) => <p className={styles.sourceRow} key={user.id}>{user.name}<b>{user.role} · {user.status}</b></p>)}
        </article>
      </section>

      <section className={styles.mainGrid}>
        <CarsSection cars={liveInsights.cars} variant="top-performing" title="Top Cars by Views" limit={5} />
      </section>
    </>
  );
}