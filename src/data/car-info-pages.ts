import { jeepWranglerPages } from "./jeep-wrangler-pages";
import { ram1500Pages, type RamInfoPage } from "./ram-1500-pages";
import { silveradoPages } from "./silverado-pages";
import { fordF150Pages } from "./ford-f150-pages";
import { gmcSierra1500Pages } from "./gmc-sierra-1500-pages";

export const carInfoPages: RamInfoPage[] = [
  ...ram1500Pages,
  ...silveradoPages,
  ...jeepWranglerPages,
  ...fordF150Pages,
  ...gmcSierra1500Pages,
];

export function getCarInfoPage(slug: string) {
  return carInfoPages.find((page) => page.slug === slug);
}