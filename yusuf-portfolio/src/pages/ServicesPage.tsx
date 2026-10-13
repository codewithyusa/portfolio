import { services } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import ProcessSteps from "../components/services/ProcessSteps";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Services.</h1>

      <p className="mt-10 max-w-2xl text-lg leading-8 text-muted">
        I work with clients remotely and take on freelance projects of any size. Here is what I
        can build for you.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <div className="mt-20">
        <SectionTitle>How we work together</SectionTitle>
        <ProcessSteps />
      </div>

      <p className="mt-10 text-lg text-muted">
        Rates depend on the project, so message me for a quote.
      </p>
      <div className="mt-6">
        <Button to="/contact">Start a project</Button>
      </div>
    </section>
  );
}