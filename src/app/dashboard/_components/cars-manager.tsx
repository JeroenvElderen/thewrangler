
"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { Plus, X } from "lucide-react";

import type { Car } from "@/data/cars";
import styles from "../dashboard.module.css";
import { getCars, getSupabaseClient } from "@/lib/supabase/cars";
import { createCar, type CreateCarState } from "../cars/actions";
import CarsSection from "./cars-section";

type CarsManagerProps = {
  cars: Car[];
};

const initialState: CreateCarState = { message: "" };

function createPreviewTitle(make: string, model: string, trim: string, year: string) {
  return [make, model, trim, year].map((part) => part.trim()).filter(Boolean).join(" ");
}

export default function CarsManager({ cars }: CarsManagerProps) {
  const [liveCars, setLiveCars] = useState(cars);
  const [isRealtimeConnected, setIsRealtimeConnected] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [trim, setTrim] = useState("");
  const [year, setYear] = useState("");
  const [state, formAction, isPending] = useActionState(createCar, initialState);
  const previewTitle = useMemo(
    () => createPreviewTitle(make, model, trim, year),
    [make, model, trim, year],
  );

  useEffect(() => {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return;
    }

    const refreshCars = async () => {
      const nextCars = await getCars();
      setLiveCars(nextCars);
    };

    const channel = supabase
      .channel("dashboard-cars-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cars" },
        refreshCars,
      )
      .subscribe((status) => {
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
          <p className={styles.eyebrow}>Inventory CMS</p>
          <h1>Cars</h1>
          <p>Manage all cars, add new listings, or edit existing vehicles.</p>
        </div>
        <button
          className={styles.primary}
          type="button"
          onClick={() => setIsFormOpen((current) => !current)}
        >
          {isFormOpen ? <X size={15} /> : <Plus size={15} />}
          {isFormOpen ? "Close Form" : "Add New Car"}
        </button>
      </div>

      {isFormOpen ? (
        <article className={styles.editorCard}>
          <div className={styles.cardHeader}>
            <div>
              <h2>Add new car</h2>
              <p className={styles.formHint}>
                Fill the essentials. Title, slug, currency, status, and views are handled automatically.
              </p>
            </div>
            <div className={styles.headerBadges}>
              <span className={styles.currencyNote}>SEK default</span>
              <span className={isRealtimeConnected ? styles.liveBadge : styles.offlineBadge}>
                {isRealtimeConnected ? "Live data" : "Realtime connecting"}
              </span>
            </div>
          </div>
          <form action={formAction} className={styles.carForm}>
            <label>
              Make
              <input name="make" required placeholder="Jeep" value={make} onChange={(event) => setMake(event.target.value)} />
            </label>
            <label>
              Model
              <input name="model" required placeholder="Wrangler" value={model} onChange={(event) => setModel(event.target.value)} />
            </label>
            <label>
              Trim
              <input name="trim" placeholder="Rubicon 4x4" value={trim} onChange={(event) => setTrim(event.target.value)} />
            </label>
            <label>
              Year
              <input name="year" type="number" min="1900" max="2100" required placeholder="2024" value={year} onChange={(event) => setYear(event.target.value)} />
            </label>
            <label>
              Price (SEK)
              <input name="price_amount" type="number" min="0" step="1" required placeholder="649000" />
            </label>
            <label>
              Mileage (km)
              <input name="mileage_km" type="number" min="0" step="1" placeholder="42000" />
            </label>
            <label>
              Fuel type
              <input name="fuel_type" defaultValue="Bensin" />
            </label>
            <label>
              Transmission
              <input name="transmission" defaultValue="Automatic" />
            </label>
            <label>
              Drivetrain
              <input name="drivetrain" defaultValue="4x4" />
            </label>
            <label>
              Location
              <input name="location" defaultValue="Stockholm" />
            </label>
            <details className={styles.optionalFields}>
              <summary>Optional details</summary>
              <div>
                <label>
                  Image URL
                  <input name="image_url" placeholder="/car1.png or https://..." />
                </label>
                <label>
                  Exterior color
                  <input name="exterior_color" placeholder="Black" />
                </label>
                <label>
                  Interior color
                  <input name="interior_color" placeholder="Black leather" />
                </label>
                <label>
                  Badge
                  <input name="badge" placeholder="Premium-spec" />
                </label>
                <label className={styles.checkboxLabel}>
                  <input name="is_featured" type="checkbox" value="true" />
                  Featured car
                </label>
              </div>
            </details>
            <div className={styles.generatedSummary}>
              <strong>Generated listing:</strong> {previewTitle || "Add make, model, and year to preview the title."}
              <span>Saved as Draft · 0 views · SEK</span>
            </div>
            <div className={styles.formActions}>
              <button className={styles.primary} type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save car"}
              </button>
              {state.message ? <p className={state.ok ? styles.successMessage : styles.errorMessage}>{state.message}</p> : null}
            </div>
          </form>
        </article>
      ) : null}

      <CarsSection cars={liveCars} />
    </>
  );
}