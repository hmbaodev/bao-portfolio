import Hero from "./sections/hero";
import Service from "./sections/service";
import Work from "./sections/work";

export default function App() {
  return (
    <div className="bg-brand text-white-primary">
      <Hero />
      <Work />
      <Service />
    </div>
  );
}
