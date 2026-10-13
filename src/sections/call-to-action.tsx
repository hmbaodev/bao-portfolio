import { InlineWidget } from "react-calendly";

const CallToAction = () => {
  return (
    <section className="section" id="cta">
      <div className="flex flex-col items-center">
        <h2 className="heading">
          Ready to discuss your <span className="text-primary">funnel</span>?
        </h2>
        <p className="max-w-200 text-center mb-10">
          Share your requirements and timeline to receive a tailored proposal
          for your funnel.
        </p>
        <InlineWidget url="https://calendly.com/huaminhbao74/30min" styles={{
          width: "100%",
          maxWidth: "500px"
        }} />
      </div>
    </section>
  );
};

export default CallToAction;
