"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Gauge,
  Mountain,
  Sparkles,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { CarModelFamily } from "@/data/car-models";
import { carBrandFilters } from "@/data/car-models";
import SiteHeader from "./site-header";
import styles from "./car-models-page.module.css";

const brandIcons: Record<string, LucideIcon> = {
  RAM: Truck,
  Chevrolet: Gauge,
  Jeep: Mountain,
};

type CarModelsPageProps = {
  families: CarModelFamily[];
  initialBrand?: string;
};

export default function CarModelsPage({
  families,
  initialBrand = "All",
}: CarModelsPageProps) {
  const [activeBrand, setActiveBrand] = useState(initialBrand);

  const visibleFamilies = useMemo(() => {
    if (activeBrand === "All") {
      return families;
    }

    return families.filter((family) => family.brand === activeBrand);
  }, [activeBrand, families]);

  const totalGuides = families.reduce(
    (total, family) => total + family.pages.length,
    0,
  );

  return (
    <main className={styles.site}>
      <SiteHeader />

      <section className={styles.hero}>
        <Image
          src="/gmc-header.png"
          alt="Amerikansk pickup utanför The Wrangler"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.breadcrumb}>/ Cars / Model guides</p>
          <h1>
            American cars
            <span>choose your model</span>
          </h1>
          <p className={styles.heroText}>
            Explore every informative trim page we have prepared. Use the brand
            pills to narrow the list, then open the model guide that matches
            your pickup or 4x4 needs.
          </p>
          <div className={styles.heroStats}>
            <span>{families.length} brands</span>
            <span>{totalGuides} trim guides</span>
            <span>Informative pages</span>
          </div>
        </div>
      </section>

      <section className={styles.modelSection} aria-labelledby="models-heading">
        <div className={styles.sectionIntro}>
          <div>
            <p className={styles.sectionLabel}>Filter by brand</p>
            <h2 id="models-heading">Choose your model</h2>
            <p>
              Each brand is grouped like a model showroom, with individual cards
              linking to the detailed trim pages.
            </p>
          </div>
          <div className={styles.pillFilters} aria-label="Filter models by brand">
            {carBrandFilters.map((brand) => (
              <button
                key={brand}
                type="button"
                className={brand === activeBrand ? styles.activePill : styles.pill}
                aria-pressed={brand === activeBrand}
                onClick={() => setActiveBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.brandStack}>
          {visibleFamilies.map((family) => {
            const BrandIcon = brandIcons[family.brand] ?? BadgeCheck;

            return (
              <section key={family.model} className={styles.brandGroup}>
                <div className={styles.brandHeader}>
                  <div className={styles.brandMark}>
                    <BrandIcon aria-hidden="true" />
                  </div>
                  <div>
                    <p>{family.brand}</p>
                    <h3>{family.headline}</h3>
                  </div>
                  <span>{family.pages.length} models</span>
                </div>

                <div className={styles.cardGrid}>
                  {family.pages.map((page) => (
                    <article key={page.slug} className={styles.modelCard}>
                      <Link href={`/cars/${page.slug}`} aria-label={`View ${page.model} ${page.trim}`}>
                        <Image
                          src={page.images.gallery}
                          alt={`${page.model} ${page.trim}`}
                          fill
                          sizes="(max-width: 760px) 100vw, (max-width: 1160px) 50vw, 25vw"
                          className={styles.cardImage}
                        />
                        <div className={styles.cardImageShade} />
                        <div className={styles.cardBody}>
                          <div className={styles.cardCopy}>
                            <h4>{page.trim}</h4>
                            <p>/ {page.model}</p>
                            <span>{page.headline}</span>
                          </div>
                          <strong aria-hidden="true">
                            <ArrowRight />
                          </strong>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className={styles.guideCta}>
        <Image src="/dodge2.png" alt="Mörk amerikansk pickup" fill sizes="100vw" />
        <div className={styles.ctaOverlay} />
        <div>
          <Sparkles aria-hidden="true" />
          <h2>Need help choosing the right trim?</h2>
          <p>
            Start with a brand pill, compare the trims and contact us when you
            want guidance on import, inventory or which specification fits
            Swedish roads.
          </p>
        </div>
        <Link href="/stock" className={styles.ctaButton}>
          View inventory <ArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}