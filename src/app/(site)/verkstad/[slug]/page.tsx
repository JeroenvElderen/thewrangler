import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkshopServicePage from "@/components/workshop-service-page";
import {
    getWorkshopService,
    workshopServiceSlugs,
} from "@/data/workshop-services";

type VerkstadServicePageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return workshopServiceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: VerkstadServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getWorkshopService(slug);

    if (!service) {
        return {
            title: "Workshop Service | Nordic American Motors",
        };
    }

    return {
        title: `${service.title} | Workshop | Nordic American Motors`,
        description: service.intro,
    };
}

export default async function VerstadService({ params }: VerkstadServicePageProps) {
    const { slug } = await params;
    const service = getWorkshopService(slug);

    if (!service) {
        notFound();
    }

    return <WorkshopServicePage service={service} />;
}