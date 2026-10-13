import { RiArrowDownLine } from "@remixicon/react";

const Hero = () => {
  return (
    <section className="section" id="hero">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 py-2 px-4 bg-black-secondary rounded-full shadow-lg border border-[#27272A] mb-6">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary motion-reduce:animate-none"></span>
            <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
          </span>
          <span>For eCom founder and agency owners</span>
        </div>
        <h1 className="heading">
          Turn your copy & design into{" "}
          <span className="text-primary">
            mobile-friendly and high-performance
          </span>{" "}
          funnels
        </h1>
        <p className="max-w-200 text-center mb-10">
          Advertorials, landing pages and checkout flows, built mobile-first,
          tracked correctly and tested before launch, on the platform your team
          already uses.
        </p>
        <button className="btn primary-btn">
          <span className="mr-2">Check My Work</span>
          <RiArrowDownLine />
        </button>
      </div>
    </section>
  );
};

export default Hero;
