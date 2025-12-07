"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitLarge from '@/components/sections/hero/HeroSplitLarge';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactParallax from '@/components/sections/contact/ContactParallax';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Shield, Users, Linkedin, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="mediumSizeExtraSmallSpacing"
      background="dotGrid"
      cardStyle="floating"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Sofia di Bella"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122545550-sgra2hi1.jpg"
          logoAlt="Sofia di Bella Insurance"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitLarge
          title="Premium Insurance Solutions for Your Future"
          description="Sofia di Bella brings international expertise and multilingual excellence to comprehensive insurance planning. Protecting what matters most with personalized strategies tailored to your unique needs."
          tag="Expert Insurance Planning"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122546565-o5yurpe8.jpg"
          imageAlt="Professional insurance consultant meeting with clients"
          buttons={[
            {
              text: "Schedule Consultation",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "services"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Sofia di Bella"
          description="An accomplished insurance professional with a passion for financial security and risk management. Sofia combines her economics education from LUISS Guido Carli University in Rome with extensive international experience from the American Overseas School of Rome. Her multilingual capabilities enable her to serve a diverse, global clientele with personalized attention and strategic expertise. Sofia's vision is to establish a leading insurance office that prioritizes client success and long-term financial well-being."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122547097-sgyaiivt.jpg"
          imageAlt="Sofia di Bella, Insurance Professional"
          imagePosition="right"
          useInvertedBackground="noInvert"
          buttons={[
            {
              text: "Connect With Sofia",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive insurance solutions designed to protect your assets and secure your future"
          tag="Premium Services"
          tagIcon={Shield}
          features={[
            {
              id: "01",
              title: "Life Insurance",
              description: "Comprehensive coverage protecting your family's financial future with flexible plans and competitive rates.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122547962-wmgivk7v.jpg",
              imageAlt: "Life insurance protection for families"
            },
            {
              id: "02",
              title: "Financial Planning",
              description: "Strategic wealth management and investment guidance aligned with your long-term goals and aspirations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122548665-qnj1qikd.jpg",
              imageAlt: "Financial planning and wealth management"
            },
            {
              id: "03",
              title: "Business Protection",
              description: "Enterprise-level insurance solutions safeguarding your business operations and continuity.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122549845-lch7exb8.jpg",
              imageAlt: "Business security and protection services"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Team"
          description="Expert professionals committed to your financial security and success"
          tag="Our Experts"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sofia di Bella",
              role: "Founder & Principal Advisor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122547097-sgyaiivt.jpg",
              imageAlt: "Sofia di Bella, Founder & Principal Advisor"
            },
            {
              id: "2",
              name: "Marco Rossi",
              role: "Senior Insurance Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122551356-gx57p9nb.jpg",
              imageAlt: "Marco Rossi, Senior Insurance Specialist"
            },
            {
              id: "3",
              name: "Elena Conti",
              role: "Financial Planning Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122552161-51pr7mdo.jpg",
              imageAlt: "Elena Conti, Financial Planning Director"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Trusted by Clients Worldwide"
          description="Hear from satisfied clients who have benefited from Sofia's expert guidance and personalized service"
          testimonials={[
            {
              id: "1",
              quote: "Sofia's multilingual expertise and attention to detail transformed how I approach financial planning. Her personalized strategies have given me complete peace of mind.",
              name: "Margherita Russo",
              role: "Business Owner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122552751-9goz26bm.jpg",
              imageAlt: "Margherita Russo"
            },
            {
              id: "2",
              quote: "Working with Sofia has been exceptional. Her international background brings a unique perspective to insurance planning that truly makes a difference.",
              name: "Alessandro Moretti",
              role: "Executive",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122553510-8erxr0z0.jpg",
              imageAlt: "Alessandro Moretti"
            },
            {
              id: "3",
              quote: "Sofia understands the complexities of international finance. Her expertise has been invaluable in protecting my family's assets.",
              name: "Francesca Marchetti",
              role: "Entrepreneur",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122554085-5rx6v7th.jpg",
              imageAlt: "Francesca Marchetti"
            },
            {
              id: "4",
              quote: "Exceptional service from start to finish. Sofia's commitment to understanding my needs resulted in the perfect insurance solution.",
              name: "Giovanni Ferretti",
              role: "Investor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122554807-iudqw40w.jpg",
              imageAlt: "Giovanni Ferretti"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our insurance services and planning approach"
          tag="FAQ"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122555674-3oy8iq08.jpg"
          imageAlt="Customer support and FAQ illustration"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What makes your insurance approach unique?",
              content: "Our multilingual, internationally-trained team brings personalized expertise to every client relationship. We focus on understanding your unique needs and creating customized solutions rather than one-size-fits-all approaches."
            },
            {
              id: "2",
              title: "How do you serve international clients?",
              content: "With fluency in multiple languages and experience working with clients across different countries, we navigate international regulations and provide seamless service regardless of location."
            },
            {
              id: "3",
              title: "What is your consultation process like?",
              content: "We begin with a comprehensive assessment of your financial situation and goals. Our team then develops a detailed strategy tailored to your specific circumstances and risk profile."
            },
            {
              id: "4",
              title: "How often should I review my insurance plan?",
              content: "We recommend annual reviews to ensure your coverage remains aligned with your evolving life circumstances, financial goals, and market conditions."
            },
            {
              id: "5",
              title: "Do you work with businesses as well as individuals?",
              content: "Yes, we provide comprehensive insurance and financial planning solutions for both individuals and businesses, including enterprise-level protection plans."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactParallax
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765122546565-o5yurpe8.jpg"
          imageAlt="Contact us for your insurance consultation"
          buttons={[
            {
              text: "Schedule Your Consultation",
              href: "https://example.com/contact"
            },
            {
              text: "Send Message",
              href: "https://example.com/contact"
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Sofia di Bella"
          copyrightText="© 2025 Sofia di Bella Insurance. All rights reserved."
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Mail,
              href: "mailto:contact@sofiadibella.com",
              ariaLabel: "Email"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}