
import AboutSection from '@/components/AboutSection';
import AboutTeamSection from '@/components/AboutTeamSection';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';

export const metadata = {
  title: 'About Us | Golden Scales Family Therapy',
  description:
    'Learn more about Golden Scales Family Therapy and our mission to support individuals and families through compassionate, effective therapy.',
};

export default function AboutPage() {
  return (<>
  <BreadcrumbBanner
  crumbs={[
    { label: "Home", href: "/" },
    { label: "About"},
  ]}
/>
  <AboutSection />
  <AboutTeamSection/>
  </>);
}
