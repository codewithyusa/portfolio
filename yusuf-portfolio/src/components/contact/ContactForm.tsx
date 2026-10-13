import { useContactForm, type Field } from "../../hooks/useContactForm";
import { cn } from "../../utils/cn";

const inputClass =
  "w-full rounded-2xl border bg-bg px-5 py-4 text-base outline-none transition placeholder:text-muted/70 focus:border-accent";

export default function ContactForm() {
  const { values, errors, sent, handleChange, handleBlur, handleSubmit } = useContactForm();

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": Boolean(errors[field]),
    className: cn(inputClass, errors[field] ? "border-red-500" : "border-border"),
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-border bg-surface p-8 md:p-10"
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Send a Message</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label>
          <input type="text" placeholder="What's your name?" {...fieldProps("name")} />
          {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label>
          <input type="email" placeholder="Where can I reach you?" {...fieldProps("email")} />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label>
          <textarea rows={6} placeholder="What would you like to discuss?" {...fieldProps("message")} />
          {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-fg py-4 text-sm font-medium text-bg transition hover:-translate-y-0.5 hover:opacity-90"
      >
        Send Message
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>

      {sent && (
        <p role="status" className="mt-4 text-center text-sm text-green-600">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
  );
}