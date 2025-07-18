import RatesInsuranceContent from '@/components/RatesInsuranceContent';
import BreadcrumbBanner from '@/components/BreadcrumbBanner'; 

export default function RatesInsurancePage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Rates & Insurance' },
  ];

  return (
    <>
      <BreadcrumbBanner crumbs={crumbs} />
      <RatesInsuranceContent />
    </>
  );
}
