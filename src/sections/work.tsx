import { WORKS } from "@/constants";
import { RiArrowRightUpLine } from "@remixicon/react";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="flex flex-col items-center">
        <h2 className="heading">My Work</h2>
        <div className="w-[92vw] max-w-270">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKS.map((work, index) => (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="border-[#27272A] border rounded-xl p-4 flex flex-col gap-2 bg-black-secondary"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="rounded-lg mb-2"
                />
                <p className="text-[#A1A1AA] capitalize">{work.category}</p>
                <p className="flex items-center">
                  {work.title}
                  <RiArrowRightUpLine className="ml-1" color="#A1A1AA" />
                </p>
                <p className="text-[#A1A1AA] text-sm">{work.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
