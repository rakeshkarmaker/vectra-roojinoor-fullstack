import { CompaniesHero } from "@/components/features/companies/CompaniesHero";
import { ValueProps } from "@/components/features/companies/ValueProps";
import { CompanyRegistrationForm } from "@/components/features/companies/CompanyRegistrationForm";
import { TrustBadges } from "@/components/features/companies/TrustBadges";

export default function CompaniesPage() {
  return (
    <div className="w-full pt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-6 pb-24">
        <CompaniesHero />
        <ValueProps />
        <CompanyRegistrationForm />
        <TrustBadges />
      </div>
    </div>
  );
}
