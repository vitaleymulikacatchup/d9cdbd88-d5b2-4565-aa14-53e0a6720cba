"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero-image", url: "https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "High-End Gaming PC Interior with Colorful RGB Lights" },
  { id: "team-image", url: "https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Business team having a casual meeting on a rooftop terrace with a cityscape view." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Realdevs"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Unlock Your Tech Potential"
            description="Empowering Developers with Cutting-edge Tools"
            imagePosition="left"
            imageSrc="https://images.pexels.com/photos/34301930/pexels-photo-34301930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Learn More", href: "features" },
              { text: "Get Started", href: "pricing" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Innovation", description: "We push boundaries", icon: "Lightbulb" },
              { title: "Quality", description: "Excellence in every detail", icon: "CheckCircle" },
            ]}
            imageSrc="https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Advanced Analytics", description: "Get detailed insights into your business performance", icon: "TrendingUp" },
              { title: "Seamless Integration", description: "Connect effortlessly with countless applications", icon: "Zap" },
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo
            plans={[
              { id: "basic", price: "$29/mo", subtitle: "Perfect for individuals", features: ["5 Projects", "Community Support"], badge: "Starter" },
              { id: "premium", badge: "Popular", price: "$59/mo", subtitle: "Ideal for growing teams", features: ["Unlimited Projects", "Priority Support"] },
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardThree
            members={[
              { id: "1", name: "Alex Johnson", role: "CEO", imageSrc: "https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Chris Lee", role: "CTO", imageSrc: "https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940" },
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardThree
            testimonials={[
              { id: "1", name: "Jamie", handle: "@jamie_dev", testimonial: "Realdevs transformed my workflow. It's a game-changer!" },
              { id: "2", name: "Emma", handle: "@emma_code", testimonial: "The tools Realdevs offer are simply unbeatable in the industry." },
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get In Touch"
            title="Contact Us Today"
            description="Reach out and let us help you achieve your tech goals."
            imageSrc="https://images.pexels.com/photos/34234336/pexels-photo-34234336.png?auto=compress&cs=tinysrgb&h=650&w=940"
            mediaPosition="right"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Services", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] },
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
