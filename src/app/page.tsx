import Box from "@mui/material/Box";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Problems from "@/components/sections/Problems";
import SolutionWorkflow from "@/components/sections/SolutionWorkflow";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import RevenueCalculator from "@/components/sections/RevenueCalculator";
import Specialties from "@/components/sections/Specialties";
import Technology from "@/components/sections/Technology";
import Transformation from "@/components/sections/Transformation";
import Results from "@/components/sections/Results";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Security from "@/components/sections/Security";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CareTrack RCM",
  description:
    "Revenue cycle management for healthcare — reduce denials, recover aging A/R, and get paid faster.",
  areaServed: "US",
  knowsAbout: [
    "Medical billing",
    "Revenue cycle management",
    "Denial management",
    "Medical coding",
    "Accounts receivable recovery",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box
        component="a"
        href="#main"
        sx={{
          position: "absolute",
          left: -9999,
          top: 0,
          zIndex: 2000,
          bgcolor: "#fff",
          color: "primary.main",
          px: 2,
          py: 1,
          borderRadius: 1,
          fontWeight: 700,
          "&:focus": { left: 12, top: 12 },
        }}
      >
        Skip to content
      </Box>

      <Navbar />
      <Box component="main" id="main">
        <Hero />
        <TrustStrip />
        <Problems />
        <SolutionWorkflow />
        <Services />
        <Process />
        <RevenueCalculator />
        <Specialties />
        <Technology />
        <Transformation />
        <Results />
        <CaseStudies />
        <Testimonials />
        <Security />
        <FinalCTA />
      </Box>
      <Footer />
    </>
  );
}
