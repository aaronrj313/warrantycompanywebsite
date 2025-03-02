"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FollowerPointerCard } from "./following-pointer";
import AIWebsite from "../images/AIWebsite.png";
import ECommerce from "../images/ecommerceWebsite.png";
import HealthCareApp from "../images/HealthCareApp.png";
import MobileApp from "../images/MobileApp.png";
import StockApp from "../images/stockapp.jpeg";
import JobFinderApp from "../images/JobFinderApp.png";


type CardContent = {
  title: string;
  description: string;
  date: string;
  author: string;
  authorAvatar: string;
  image: StaticImageData; // Add this line
};

const IMAGES = [
  AIWebsite,
  ECommerce,
  HealthCareApp,
  MobileApp,
  StockApp,
  JobFinderApp
] as const;

const Titles = [
  "AI Solutions & Integration",
  "E-Commerce Platform",
  "Health Care Management App",
  "Mobile App Solution",
  "Stocks Market App",
  "Job Finder Portal"
]

const Description = [
  "We revolutionized businesses by seamlessly integrating AI-driven automation, predictive analytics, and machine learning solutions. From optimizing workflows to enhancing customer interactions, our AI solutions empower companies to make smarter, data-driven decisions. Whether it’s chatbot automation, AI-powered recommendations, or intelligent data processing, we build systems that work smarter, not harder.",
  "We built a cutting-edge e-commerce platform designed for seamless user experience, fast transactions, and high conversion rates. With AI-powered recommendations, secure payment gateways, and an intuitive UI, we enabled businesses to scale effortlessly. Our solution integrates real-time inventory management, multi-vendor support, and marketing automation, turning online stores into revenue powerhouses.",
  "Healthcare, simplified. We developed an all-in-one health management app that connects patients with doctors, streamlines appointment scheduling, and digitizes medical records for easy access. With AI-driven diagnostics and telehealth integration, we bridge the gap between healthcare providers and patients, making medical services faster, smarter, and more accessible.",
  "From idea to execution, we crafted powerful mobile solutions that drive engagement and enhance business operations. Whether it's an on-demand service, a social platform, or a logistics app, we built high-performance mobile applications with intuitive design, real-time tracking, and seamless API integrations. Our apps don’t just work—they captivate users.",
  "We created a feature-rich stocks trading platform that gives users real-time market insights, AI-driven predictions, and a seamless trading experience. With an intuitive dashboard, risk management tools, and live stock data, we empower traders and investors to make informed financial decisions. Whether you're a beginner or a pro, our app makes trading effortless.",
  "Landing the perfect job has never been easier. We developed an intelligent job-matching platform that connects job seekers with their ideal employers through AI-powered recommendations and skill-based filtering. With real-time job alerts, application tracking, and interview scheduling, we’ve made job hunting a seamless, stress-free experience."
];

export function FollowingPointerDemo() {
  const getCardContent = (idx: number): CardContent => { // Specify return type
    return {
      title: Titles[idx],
      description: Description[idx],
      date: `${['Jan', 'Mar', 'Feb', 'Apr', 'May', 'Jun'][idx]} 2024`,
      author: ['AI Solution', 'Website Development', 'Mobile App', 'Mobile App', 'Mobile App', 'Website Development'][idx],
      authorAvatar: IMAGES[idx].src,
      image: IMAGES[idx] // Now properly typed
    };
  };

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="text-center mb-36">
        <h2 className="font-sans-bold bg-clip-text text-transparent text-center text-6xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
          Our Success Story
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Discover how we've helped businesses transform their digital presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {IMAGES.map((_, idx) => {
          const content = getCardContent(idx);
          
          return (
            <div key={`card-${idx}`} className="w-full mx-auto group">
              <div className="pointer-follower-wrapper h-full">
                <FollowerPointerCard
                  title={
                    <TitleComponent
                      title={content.author}
                      avatar={content.authorAvatar}
                    />
                  }
                >
                  <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 bg-white hover:shadow-xl border border-zinc-100">
                    {/* Image Container */}
                    <div className="w-full aspect-video bg-gray-100 relative overflow-hidden">
                      <Image
                        src={content.image}
                        alt={`Case study ${idx + 1} - ${content.title}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="pointer-follower-content p-4 relative bg-white">
                      <h2 className="font-bold text-lg text-zinc-700 mb-2">
                        {content.title}
                      </h2>
                      <p className="text-sm text-zinc-500 mb-4">
                        {content.description}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-gray-500">
                          {content.date}
                        </span>
                        <Link
                          href={`/cases/${idx + 1}`}
                          className="px-4 py-2 bg-black text-white text-xs font-bold rounded-lg hover:bg-gray-800 transition-colors z-20 relative"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </FollowerPointerCard>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="avatar"
      className="rounded-full border-2 border-white"
    />
    <p className="text-sm font-medium text-zinc-700">{title}</p>
  </div>
);