import { Button } from "@/components/ui/button";
import { TrustedUsers } from "@/src/components/trusted-users";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Memoized sub-components to prevent unnecessary re-renders
const SpeechBubble = ({ text }: { text: string }) => (
  <div className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-lg max-w-[200px]">
    <span className="text-sm font-medium text-black leading-tight">{text}</span>
    {/* Speech bubble tail */}
    <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
  </div>
);

const UserAvatars = () => (
  <div className="absolute bottom-24 left-8 flex -space-x-3">
    {[
      "from-amber-400 to-orange-500",
      "from-green-400 to-blue-500",
      "from-blue-400 to-pink-500",
      "from-blue-400 to-blue-500",
    ].map((gradient, index) => (
      <div
        key={index}
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border-3 border-white shadow-lg`}
      />
    ))}
  </div>
);

const StatsCard = () => (
  <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-5 flex items-center space-x-4 shadow-xl min-w-[280px]">
    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
      <ArrowRight className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-2xl font-bold text-black">98%</div>
      <div className="text-sm text-gray-600 leading-tight">
        Client satisfaction with
        <br />
        custom solutions delivered
      </div>
    </div>
  </div>
);

const ImageCard = ({
  width,
  height,
  imageSrc,
  alt,
  className,
  children,
  bgOverlay = "bg-black/20",
}: {
  width: string;
  height: string;
  imageSrc: string;
  alt: string;
  className: string;
  children?: React.ReactNode;
  bgOverlay?: string;
}) => (
  <div
    className={`${width} ${height} rounded-3xl overflow-hidden shadow-2xl ${className}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className={`absolute inset-0 ${bgOverlay}`} />
      {children}
    </div>
  </div>
);

const VideoCard = ({
  width,
  height,
  videoSrc,
  imageSrc,
  alt,
  className,
  children,
  bgOverlay = "bg-black/20",
  autoPlay = true,
  muted = true,
  loop = true,
}: {
  width: string;
  height: string;
  videoSrc?: string;
  imageSrc?: string;
  alt: string;
  className: string;
  children?: React.ReactNode;
  bgOverlay?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}) => (
  <div
    className={`${width} ${height} rounded-3xl overflow-hidden shadow-2xl ${className}`}
  >
    <div className="relative w-full h-full">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-label={alt}
        />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      ) : null}
      <div className={`absolute inset-0 ${bgOverlay}`} />
      {children}
    </div>
  </div>
);

const ScheduleCallButton = () => (
  <div className="flex items-center justify-center md:justify-start">
    <Link
      href="https://calendly.com/todriflo/30min?month=2025-08"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-gray-900 bg-transparent rounded-xl border-2 border-transparent transition-all duration-300 hover:border-gray-900 hover:shadow-lg w-fit"
    >
      {/* Button text */}
      <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        Schedule Call
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </Link>
  </div>
);

const CallToActionButtons = () => (
  <div className="flex items-center justify-center md:justify-start">
    <Link
      href="/work"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/25 "
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-700 skew-x-12"></div>

      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        View Our Work
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>

      {/* Border glow */}
      <div className="absolute inset-0 rounded-xl bg-brand-blue opacity-75 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
    </Link>
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 pt-20 sm:pt-24 lg:mb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-8 pt-10 text-center sm:text-left">
            <div className="space-y-4 sm:space-y-6 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight px-2 sm:px-0">
                TRANSFORM YOUR BUSINESS
                <br />
                WITH CUSTOM DEVELOPMENT.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto sm:mx-0 px-2 sm:px-0">
                Headless Commerce. Custom Websites. Mobile Apps. We build
                cutting-edge digital solutions that take your business online
                with tailored Shopify storefronts and bespoke development.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <CallToActionButtons />
              <ScheduleCallButton />
              <TrustedUsers
                avatars={[
                  "/avatars/user1.jpg",
                  "/avatars/user2.jpg",
                  "/avatars/user3.jpg",
                  "/avatars/user4.jpg",
                ]}
                rating={5}
                totalUsersText={500}
                caption="Loved by"
                starColorClass="text-yellow-400"
                ringColors={[
                  "ring-pink-500",
                  "ring-green-500",
                  "ring-blue-500",
                  "ring-purple-500",
                ]}
              />
            </div>
          </div>

          {/* Mobile Image Grid */}
          <div className="mt-12 space-y-8">
            {/* First Image */}
            <div className="relative mx-auto w-full max-w-sm">
              <ImageCard
                width="w-full"
                height="h-48 sm:h-56"
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&crop=center"
                alt="Digital agency workspace with analytics dashboard"
                className="z-20"
              >
                <SpeechBubble text="Launch your headless Shopify store with lightning speed" />
              </ImageCard>
            </div>

            {/* Second Image with overlays */}
            <div className="relative  mx-auto w-full max-w-md">
              <ImageCard
                width="w-full"
                height="h-64 sm:h-80"
                imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=320&fit=crop&crop=center"
                alt="Development team working on digital solutions"
                className="bg-gray-900 z-10"
                bgOverlay="bg-black/30"
              >
                {/* Development Projects Badge */}
                <div className="absolute top-4 right-4 bg-brand-blue text-white rounded-full px-3 py-2 sm:px-4 sm:py-2 flex items-center space-x-2 shadow-lg">
                  <span className="font-semibold text-xs sm:text-sm">
                    10+ Stores Built
                  </span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3" />
                  </div>
                </div>

                <UserAvatars />
                <StatsCard />
              </ImageCard>
            </div>

            {/* Third Image */}
            <div className="relative mx-auto w-full max-w-sm">
              <ImageCard
                width="w-full"
                height="h-48 sm:h-56"
                imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=240&fit=crop&crop=center"
                alt="Modern office workspace with development team"
                className="z-20"
              >
                <SpeechBubble text="Custom development solutions" />
              </ImageCard>
            </div>

            {/* Bottom text */}
            <div className="flex items-center justify-center space-x-2 text-black font-medium pt-4">
              <span className="text-sm sm:text-base">
                Your Digital Future Starts Here
              </span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 pt-8 mt-16 ">
            <div className="space-y-6 ">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                TRANSFORM YOUR BUSINESS
                <br />
                WITH CUSTOM DEVELOPMENT.
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Headless Commerce. Custom Websites. Mobile Apps. We build
                cutting-edge digital solutions that take your business online
                with tailored Shopify storefronts and bespoke development.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col"></div>
              <CallToActionButtons />
              <ScheduleCallButton />
            </div>
            <div className="mr-10">
              <TrustedUsers
                avatars={[
                  "/avatars/user1.jpg",
                  "/avatars/user2.jpg",
                  "/avatars/user3.jpg",
                  "/avatars/user4.jpg",
                ]}
                rating={5}
                totalUsersText={500}
                caption="Loved by"
                starColorClass="text-yellow-400"
                ringColors={[
                  "ring-pink-500",
                  "ring-green-500",
                  "ring-blue-500",
                  "ring-purple-500",
                ]}
              />
            </div>
          </div>

          {/* Right Content - Image Cards */}
          <div className="flex items-center justify-between w-full h-[600px] relative">
            {/* Small Card - positioned in left center */}
            <ImageCard
              width="w-80"
              height="h-48"
              imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&h=192&fit=crop&crop=center"
              alt="Digital agency workspace with analytics dashboard"
              className="z-20 transform -translate-y-8"
            >
              <SpeechBubble text="Launch your headless Shopify store with lightning speed" />
            </ImageCard>

            {/* Large Card - positioned to the right and slightly overlapping */}
            <VideoCard
              width="w-[500px]"
              height="h-[450px]"
              videoSrc="/background.mp4"
              alt="Development team working on digital solutions"
              className="bg-gray-900 z-10 transform translate-y-4 -ml-20"
              bgOverlay="bg-black/30"
              autoPlay={true}
              muted={true}
              loop={true}
            >
              {/* Development Projects Badge */}
              <div className="absolute top-8 right-8 bg-brand-blue text-white rounded-full px-6 py-3 flex items-center space-x-2 shadow-lg">
                <span className="font-semibold text-sm">10+ Stores Built</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <UserAvatars />
              <StatsCard />
              {/* Floating indicator in top right corner */}
              <div className="absolute top-6 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
            </VideoCard>
          </div>
        </div>

        {/* Small Card Second - positioned in left center */}
        <div className="hidden xl:block relative mt-16">
          <ImageCard
            width="w-80"
            height="h-48"
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=320&h=192&fit=crop&crop=center"
            alt="Modern office workspace with development team"
            className="z-20 transform absolute left-1/2 bottom-0 -translate-x-36 -translate-y-8"
          >
            <SpeechBubble text="Custom development solutions tailored to your business needs" />
          </ImageCard>

          <div className="flex items-center space-x-2 text-black font-medium pt-8 absolute left-1/2 bottom-6 translate-x-52 -translate-y-12">
            <span>Your Digital Future Starts Here</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
