import type { Metadata } from "next";
import ContactPage from "@/components/contact-page";

export const metadata: Metadata = {
    title: "Kontakt | Nordic American Motors",
    description:
        "Kontakta Nordic American Motors för provkörning, import, finansiering och frågor om amerikanska trucks."
};

export default function Page() {
    return <ContactPage />
}