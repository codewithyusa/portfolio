import SectionTitle from "../components/ui/SectionTitle";
import SkillsGrid from "../components/about/SkillsGrid";
import Timeline from "../components/about/Timeline";

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="mb-12 text-5xl font-extrabold tracking-tight md:text-6xl">About Me.</h1>

      <div className="grid gap-12 md:grid-cols-[380px_1fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <img
            src="/yusuf.jpg"
            alt="Yusuf Umer"
            className="aspect-[3/4] w-full max-w-sm rounded-3xl border-4 border-border object-cover shadow-xl"
          />
        </div>

        <div className="space-y-12">
          <div>
            <SectionTitle>My Journey</SectionTitle>
            <div className="space-y-5 leading-7 text-muted">
              <p>
                I am a recent Computer Science graduate from Hope Enterprise University College. I
                build full-stack web and mobile applications across both the JavaScript and .NET
                ecosystems, including REST APIs with JWT authentication and role-based access
                control.
              </p>
              <p>
                I completed an internship at the Ethiopian Chamber of Commerce and Sectoral
                Association, and I am now in the Qiyas software development training. I am
                available immediately for freelance, remote and internship work.
              </p>
            </div>
          </div>

          <div>
            <SectionTitle>Skills</SectionTitle>
            <SkillsGrid />
          </div>

          <div>
            <SectionTitle>Experience &amp; Education</SectionTitle>
            <Timeline />
            <p className="mt-8 text-muted">Languages: Amharic (native), English (basic).</p>
          </div>
        </div>
      </div>
    </section>
  );
}