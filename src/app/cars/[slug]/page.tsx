import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Ram1500InfoPage from "@/components/ram-1500-info-page";
import { getRam1500Page, ram1500Pages } from "@/data/ram-1500-pages";

export function generateStaticParams() {
  return ram1500Pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cars/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getRam1500Page(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.model} ${page.trim} | The Wrangler`,
    description: page.intro,
  };
}

export default async function Ram1500SlugPage({ params }: PageProps<"/cars/[slug]">) {
  const { slug } = await params;
  const page = getRam1500Page(slug);

  if (!page) {
    notFound();
  }

  return <Ram1500InfoPage page={page} />;
}