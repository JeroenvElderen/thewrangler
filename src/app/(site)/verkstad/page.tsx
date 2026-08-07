import type { Metadata } from "next";
import WorkshopPage from "@/components/workshop-page";

export const metadata: Metadata = {
  title: "Verkstad | Nordic American Motors",
  description:
    "Boka service, reparationer, diagnostik och customarbete för amerikanska trucks hos Nordic American Motors.",
};

export default function Verkstad() {
  return <WorkshopPage />;
}