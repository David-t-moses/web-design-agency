import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/projectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "../../../components/Testimonials";
import ConsultationSection from "@/components/ConsultationSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
