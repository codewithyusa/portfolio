import ResumePreview from "../components/resume/ResumePreview";

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">My Resume.</h1>

      <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-muted">
        Take a look at my qualifications and experience. You can also download a copy for your
        records.
      </p>

      <a
        href="/Yusuf_Umer_Resume.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-8 py-4 text-base font-medium text-bg transition hover:-translate-y-0.5 hover:opacity-90"
      >
        Download PDF
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>

      <div className="mt-12">
        <ResumePreview />
      </div>

      <p className="mt-6 text-muted">Last updated: October 2026</p>
    </section>
  );
}