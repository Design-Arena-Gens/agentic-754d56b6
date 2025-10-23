import { ApproachCard } from "@/components/ApproachCard";
import { ContactCard } from "@/components/ContactCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionIntro } from "@/components/SectionIntro";
import { SkillCard } from "@/components/SkillCard";
import {
  approachPrinciples,
  contactLinks,
  experience,
  projects,
  skills
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <SectionIntro
            eyebrow="Profile"
            title="Reliability is a product, not a project."
            description="I partner with engineering and product teams to embed reliability practices throughout the software lifecycle. From platform foundations to observability strategies, I focus on outcomes that keep customer experiences fast, available, and secure."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/70">
              <p>
                I specialise in building resilient platforms that evolve with
                business needs. My work balances reliability, velocity, and
                cost—enabling product teams to move quickly without sacrificing
                customer trust.
              </p>
              <p className="mt-4">
                I lead through partnership: aligning SLOs with business goals,
                mentoring on-call teams, and codifying best practices into the
                platforms we ship.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-midnight-900/50 p-6 text-sm leading-relaxed text-white/70">
              <p>
                I enjoy diagnosing complex systems, reducing toil through
                automation, and creating clarity with actionable observability
                data. Whether it’s multi-cloud migrations or scaling Kubernetes
                estates, I thrive on delivering reliable customer outcomes.
              </p>
              <p className="mt-4">
                Outside of work you’ll find me exploring distributed systems
                research, contributing to open-source tooling, or coaching teams
                on incident response.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <SectionIntro
            eyebrow="Expertise"
            title="A toolkit built for modern reliability challenges."
            description="Depth across cloud platforms, automation, observability, and operational excellence lets me partner with teams end-to-end."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.title} title={skill.title} items={skill.items} />
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionIntro
            eyebrow="Experience"
            title="Leading reliability outcomes across high-stakes platforms."
            description="From greenfield platforms to large-scale migrations, I build sustainable systems and teams."
          />
          <div className="mt-10 space-y-8">
            {experience.map((item) => (
              <ExperienceCard key={`${item.company}-${item.period}`} {...item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <SectionIntro
            eyebrow="Case Studies"
            title="Solving reliability at scale."
            description="Selected platform initiatives that moved the needle for uptime, speed, and confidence."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-6xl px-6 py-20">
          <SectionIntro
            eyebrow="Working Style"
            title="How I partner with teams"
            description="Reliability is a team sport. Here’s how I help organisations scale sustainably."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {approachPrinciples.map((principle) => (
              <ApproachCard key={principle.title} {...principle} />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
          <SectionIntro
            eyebrow="Connect"
            title="Let’s collaborate"
            description="Whether you need platform advisory, interim leadership, or hands-on scaling support, reach out to discuss how I can help."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contactLinks.map((contact) => (
              <ContactCard key={contact.label} {...contact} />
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-accent-500/30 bg-accent-500/10 p-8 text-center text-sm text-white/70">
            <p>
              Prefer email? Drop a note at
              <a
                href="mailto:hello@aftab.dev"
                className="ml-2 font-semibold text-accent-200"
              >
                hello@aftab.dev
              </a>
              with your context and I’ll follow up within 2 business days.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
