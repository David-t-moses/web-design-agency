import Hero from "@/components/Hero";
import OurAgency from "@/components/OurAgency";
import Services from "@/components/Services";
import WhatClientsSay from "@/components/WhatClientsSay";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen ">
      <Hero />
      <Services />
      <OurAgency />
      <WhatClientsSay />
    </div>
  );
}
