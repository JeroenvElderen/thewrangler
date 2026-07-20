"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { getSupabaseClient } from "@/lib/supabase/cars";

function getTrafficSource() {
  if (typeof document === "undefined") {
    return "Direct";
  }

  const referrer = document.referrer;

  if (!referrer) {
    return "Direct";
  }

  const referrerUrl = new URL(referrer);

  if (referrerUrl.hostname === window.location.hostname) {
    return "Direct";
  }

  const hostname = referrerUrl.hostname.toLowerCase();

  if (hostname.includes("google") || hostname.includes("bing") || hostname.includes("duckduckgo")) {
    return "Organic Search";
  }

  if (hostname.includes("facebook") || hostname.includes("instagram") || hostname.includes("linkedin") || hostname.includes("tiktok")) {
    return "Social Media";
  }

  return "Referral";
}

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || lastTrackedPath.current === pathname) {
      return;
    }

    const supabase = getSupabaseClient();

    if (!supabase) {
      return;
    }

    lastTrackedPath.current = pathname;

    const recordPageView = async () => {
      const { error } = await supabase.from("page_views").insert({
        path: pathname,
        source: getTrafficSource(),
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
      });

      if (error) {
        lastTrackedPath.current = null;
        console.error("Failed to track page view", error);
      }
    };

    recordPageView();
  }, [pathname]);

  return null;
}