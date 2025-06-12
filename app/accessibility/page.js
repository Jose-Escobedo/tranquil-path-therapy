import AccessibilityContent from '@/components/AccessibilitySection';
import BreadcrumbBanner from '@/components/BreadcrumbBanner'; 

export default function AccessibilityPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Accessibility' },
  ];

  return (
    <>
      <BreadcrumbBanner crumbs={crumbs} />
      <AccessibilityContent />
    </>
  );
}
