
import AppointmentForm from "@/components/AppointmentForm";
import GeneralBreakdown from "@/components/GeneralBreakdown";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import YouAreNotAlone from "@/components/YouAreNotAlone";

export default function HomePage() {
  return (
    <>
      <Hero />
      <YouAreNotAlone/>
      <GeneralBreakdown/>
      <ServicesPreview/>
      <AppointmentForm/>
    </>
  );
}
