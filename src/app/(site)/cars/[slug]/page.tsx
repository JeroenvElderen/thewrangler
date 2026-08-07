import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Ram1500InfoPage from "@/components/ram-1500-info-page";
import { carInfoPages, getCarInfoPage } from "@/data/car-info-pages";

export function generateStaticParams() {
  return carInfoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cars/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getCarInfoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.model} ${page.trim} | Nordic American Motors`,
    description: page.intro,
  };
}

export default async function CarSlugPage({
  params,
}: PageProps<"/cars/[slug]">) {
  const { slug } = await params;
  const page = getCarInfoPage(slug);

  if (!page) {
    notFound();
  }

  return <Ram1500InfoPage page={page} />;
}