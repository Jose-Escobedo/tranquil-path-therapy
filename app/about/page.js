
import AboutSection from '@/components/AboutSection';
import AboutTeamSection from '@/components/AboutTeamSection';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';

export const metadata = {
  title: 'About Us | Tranquil Path Therapy',
  description:
    'Learn more about Tranquil Path Therapy and our mission to support individuals and families through compassionate, effective therapy.',
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
