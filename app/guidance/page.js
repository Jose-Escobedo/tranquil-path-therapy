import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import GuidanceSection from '@/components/GuidanceSection';

export const metadata = {
  title: 'Guidance | Golden Scales Family Therapy',
  description:
    'Explore helpful articles and resources on individual and family therapy, mental health guidance, and answers to your therapy questions.',
};

export default function GuidancePage() {
  return (
    <>
      <BreadcrumbBanner
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Guidance' },
        ]}
      />
      <GuidanceSection />
    </>
  );
}
