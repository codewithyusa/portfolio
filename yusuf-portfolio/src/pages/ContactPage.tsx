import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import SectionTitle from "../components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">Let's Talk.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
        Have a question or want to work together? Leave your details and I'll get back to you as
        soon as possible.
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-2">
        <div>
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="mb-10 max-w-md leading-8 text-muted">
            Whether you're looking for a developer, have a project in mind, or just want to
            connect, feel free to reach out. I'm always open to discussing new opportunities.
          </p>
          <ContactInfo />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}