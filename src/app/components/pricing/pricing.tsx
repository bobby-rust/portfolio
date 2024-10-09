import React from "react";
import PricingCard from "./pricing-card";

export default function Pricing() {
    const basicTemplatePlan = {
        name: "Basic Template Plan",
        description:
            "Ideal for individuals or small businesses needing a simple, professional website without complex features.",
        price: "1000",
        hourlyRate: 75,
        features: [
            "Up to 3-page website using a professional pre-designed template",
            "Mobile-friendly and responsive design",
            "Basic on-page SEO for better search visibility",
            "Simple contact form (with spam protection)",
            "Customization of template with your branding (logo, colors, content)",
            "Integration of social media links",
            "1 week of post-launch support for minor tweaks",
            "Fast delivery time: 1-2 weeks",
        ],
        platforms: ["WordPress", "Shopify", "HTML & CSS"],
    };

    const standardTemplatePlan = {
        name: "Standard Template Plan",
        description:
            "Perfect for small businesses looking to expand their online presence with up to 5 pages or a simple e-commerce setup.",
        price: "2500",
        hourlyRate: 100,
        features: [
            "Up to 5-page website using a customizable template",
            "Fully mobile-responsive and optimized for all devices",
            "Enhanced on-page SEO and Google Analytics integration",
            "E-commerce functionality (up to 10 products) with payment integration",
            "Customization of WooCommerce/Shopify store (basic product setup and category organization)",
            "Blog setup (if WordPress), optimized for SEO",
            "Newsletter signup form and email marketing integration",
            "1 month of post-launch support with up to 5 hours of updates/maintenance",
            "Delivery time: 3-4 weeks",
        ],
        platforms: ["WordPress", "WooCommerce", "Shopify"],
    };

    const customStandardPlan = {
        name: "Custom Standard Plan",
        description:
            "Ideal for businesses needing a custom-built website with advanced features, external API integrations, and scalability.",
        price: "4000+",
        hourlyRate: 125,
        features: [
            "Up to 7 custom-built pages tailored to your business needs",
            "Fully mobile-optimized design and cross-browser compatibility",
            "Advanced on-page SEO with keyword research and optimization",
            "Custom e-commerce functionality (up to 20 products) with enhanced features (e.g. discounts, filters)",
            "Integration with external APIs (e.g. CRM, payment processors, marketing tools)",
            "CMS integration (Headless or Traditional) for flexible content management",
            "Advanced analytics and tracking setup (Google Analytics, Facebook Pixel)",
            "1 month of post-launch support with 10 hours of updates/maintenance",
            "Flexible delivery time: 3-5 weeks, depending on complexity",
        ],
        platforms: ["Next.js", "React", "Custom RESTful APIs"],
    };
    return (
        <section>
            <div className="flex flex-col items-center gap-4">
                <h2 className="lg++:text-left text-center">Pricing</h2>
                <div className="flex flex-col lg++:flex-row gap-4">
                    <PricingCard
                        name={basicTemplatePlan.name}
                        description={basicTemplatePlan.description}
                        price={basicTemplatePlan.price}
                        hourlyRate={basicTemplatePlan.hourlyRate}
                        features={basicTemplatePlan.features}
                        platforms={basicTemplatePlan.platforms}
                    />
                    <PricingCard
                        name={standardTemplatePlan.name}
                        description={standardTemplatePlan.description}
                        price={standardTemplatePlan.price}
                        hourlyRate={standardTemplatePlan.hourlyRate}
                        features={standardTemplatePlan.features}
                        platforms={standardTemplatePlan.platforms}
                    />
                    <PricingCard
                        name={customStandardPlan.name}
                        description={customStandardPlan.description}
                        price={customStandardPlan.price}
                        hourlyRate={customStandardPlan.hourlyRate}
                        features={customStandardPlan.features}
                        platforms={customStandardPlan.platforms}
                    />
                </div>
                <p className="text-center font-semibold">
                    Not what you&apos;re looking for?{" "}
                    <a href="#contact" className="underline">
                        Send me an email
                    </a>{" "}
                    to discuss custom options.
                </p>
            </div>
        </section>
    );
}
