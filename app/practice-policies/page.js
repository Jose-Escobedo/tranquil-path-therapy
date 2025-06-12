import PracticePoliciesContent from '@/components/PracticePoliciesContent';
import BreadcrumbBanner from '@/components/BreadcrumbBanner'; 

export default function PracticePoliciesPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Practice Policies' },
  ];

  return (
    <>
      <BreadcrumbBanner crumbs={crumbs} />
      <PracticePoliciesContent />
    </>
  );
}
