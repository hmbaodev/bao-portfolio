import { SERVICES } from "@/constants";
import { RiArrowDownLine } from "@remixicon/react";

const Service = () => {
  return (
    <section className="section" id="service">
      <div className="flex flex-col items-center">
        <h2 className="heading">
          Every step of your funnel,{" "}
          <span className="text-primary">built and tested</span>
        </h2>
        <div className="w-[92vw] max-w-270 mb-10 sm:mb-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="border-[#27272A] border rounded-xl p-5 flex flex-col gap-2 bg-black-secondary"
              >
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                  <div className="flex items-center justify-center p-2 rounded-md bg-[#161616]">
                    <service.Icon size={20} />
                  </div>
                  <div className=" border  aspect-square flex items-center justify-center rounded-full bg-white-secondary text-black-secondary p-2">
                    <span className="font-heading font-semibold text-[16px] leading-none">
                      0{index + 1}
                    </span>
                  </div>
                </div>
                <p className="font-heading font-medium text-xl">
                  {service.title}
                </p>
                <p className="text-[#A1A1AA] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <a href="#cta" className="btn primary-btn">
          <span className="mr-2">Work With Me</span>
          <RiArrowDownLine />
        </a>
      </div>
    </section>
  );
};

export default Service;
