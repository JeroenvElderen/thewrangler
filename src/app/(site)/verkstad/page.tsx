import type { Metadata } from "next";
import WorkshopPage from "@/components/workshop-page";

export const metadata: Metadata = {
  title: "Verkstad | The Wrangler",
  description:
    "Boka service, reparationer, diagnostik och customarbete för amerikanska trucks hos The Wrangler.",
};

export default function Verkstad() {
  return <WorkshopPage />;
}