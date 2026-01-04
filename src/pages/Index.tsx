import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Tools from "@/components/Tools";
import Strategy from "@/components/Strategy";
import SEOProjects from "@/components/SEOProjects";
import WebProjects from "@/components/WebProjects";
import SocialProjects from "@/components/SocialProjects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alex Mitchell | Marketing Specialist & Digital Growth Strategist</title>
        <meta 
          name="description" 
          content="Professional Marketing Specialist with 2+ years of experience in digital marketing, paid advertising, SEO, and social media management. Helping brands grow through data-driven strategies." 
        />
        <meta name="keywords" content="marketing specialist, digital marketing, SEO, social media marketing, paid advertising, Meta Ads, Google Ads, growth strategist" />
        <meta property="og:title" content="Alex Mitchell | Marketing Specialist & Digital Growth Strategist" />
        <meta property="og:description" content="Helping brands grow through data-driven digital marketing strategies that deliver measurable results." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://alexmitchell.com" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Tools />
        <Strategy />
        <SEOProjects />
        <WebProjects />
        <SocialProjects />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
