import ContactSection from '@/components/ContactSection';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import AppointmentForm from '@/components/AppointmentForm';

export default function ContactPage() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact' }
  ];

  return (
    <>
      <BreadcrumbBanner crumbs={crumbs} />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <ContactSection />
        
      </main>
      <AppointmentForm contact={true}/>
    </>
  );
}
