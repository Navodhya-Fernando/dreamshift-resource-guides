import ItGuide from "./guides/it.jsx";
import ConstructionGuide from "./guides/construction.jsx";
import AccountingFinanceGuide from "./guides/accounting-finance.jsx";
import EngineeringGuide from "./guides/engineering.jsx";
import LogisticsGuide from "./guides/logistics.jsx";
import SalesMarketingGuide from "./guides/sales-marketing.jsx";
import HrAdminGuide from "./guides/hr-admin.jsx";
import HealthcareGuide from "./guides/healthcare.jsx";
import ScienceTechGuide from "./guides/science-tech.jsx";

export const guides = {
  it: { slug: "it", name: "IT", Component: ItGuide },
  construction: { slug: "construction", name: "Construction", Component: ConstructionGuide },
  "accounting-finance": { slug: "accounting-finance", name: "Accounting & Finance", Component: AccountingFinanceGuide },
  engineering: { slug: "engineering", name: "Engineering", Component: EngineeringGuide },
  logistics: { slug: "logistics", name: "Logistics", Component: LogisticsGuide },
  "sales-marketing": { slug: "sales-marketing", name: "Sales & Marketing", Component: SalesMarketingGuide },
  "hr-admin": { slug: "hr-admin", name: "HR & Admin", Component: HrAdminGuide },
  healthcare: { slug: "healthcare", name: "Healthcare", Component: HealthcareGuide },
  "science-tech": { slug: "science-tech", name: "Science & Tech", Component: ScienceTechGuide },
};

export const guideSlugs = Object.keys(guides);

export function getGuideForPath(pathname = "/") {
  const slug = pathname.split("/").filter(Boolean)[0]?.toLowerCase() || "it";
  return guides[slug] || guides.it;
}
