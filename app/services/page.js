import ServicesSection from '@/components/ServicesSection';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import ServicesDetailTabs from '@/components/ServicesTabs';
import CallToBook from '@/components/CallToBook';

export const metadata = {
  title: 'Services | Tranquil Path Therapy',
  description:
    'Explore the full range of therapeutic services offered by Tranquil Path Therapy to support your mental health and well-being.',
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbBanner
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Therapy Services' },
        ]}
      />
      <ServicesSection />
      <ServicesDetailTabs/>
      <CallToBook/>
    </>
  );
}
