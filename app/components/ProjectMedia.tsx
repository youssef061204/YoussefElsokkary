import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { Project } from "../lib/projects";

const fileExists = (slug: string, file: string) =>
  /^[a-z0-9][a-z0-9.-]*$/i.test(file) &&
  existsSync(join(process.cwd(), "public", "projects", slug, file));

function Architecture({ project }: { project: Project }) {
  return (
    <div className={`architecture architecture--${project.accent}`} role="img" aria-label={`${project.name} system flow: ${project.flow.join(" to ")}`}>
      <div className="architecture__top"><span>System flow</span><span>{project.name} / architecture</span></div>
      <ol className="architecture__steps">
        {project.flow.map((step, index) => (
          <li key={step}>
            <span className="architecture__number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      <p className="architecture__foot">Based on repository implementation <span aria-hidden="true">↗</span></p>
    </div>
  );
}

function OperatorBenchmark() {
  const rows = [
    ["Algorithms", 5], ["API", 4], ["Async", 3], ["Cross-file", 4], ["Data", 5],
    ["Features", 3], ["Parsing", 4], ["TypeScript", 0], ["UI state", 4], ["Validation", 1],
  ] as const;
  return <div className="benchmark-panel" role="img" aria-label="AI Operator live Gemini benchmark: 33 of 50 coding tasks passed; category results are shown as bars out of five">
    <div className="benchmark-panel__top"><span>LIVE MODEL EVALUATION</span><span>FROZEN RUN / 50 TASKS</span></div>
    <div className="benchmark-panel__summary"><strong>33<span>/50</span></strong><div><b>tasks passed</b><p>Gemini 3.8 Flash · independently graded in Docker</p></div></div>
    <div className="benchmark-panel__rows">{rows.map(([label, count]) => <div className="benchmark-panel__row" key={label}><span>{label}</span><div className="benchmark-panel__track"><i style={{ width: (count * 20) + "%" }} /></div><b>{count}/5</b></div>)}</div>
    <p>One live run · 10 categories · benchmark integrity verified separately</p>
  </div>;
}

export function ProjectVisual({ project, priority = false }: { project: Project; priority?: boolean }) {
  const hero = project.media.hero;
  if (hero && fileExists(project.slug, hero)) {
    return (
      <div className="project-screenshot">
        <Image src={`/projects/${project.slug}/${hero}`} alt={`${project.name} product interface`} fill sizes="(max-width: 900px) 100vw, 52vw" priority={priority} className="project-screenshot__image" />
        <div className="project-screenshot__label">Actual product interface <span>↗</span></div>
      </div>
    );
  }
  if (project.slug === "ai-operator") return <OperatorBenchmark />;
  return <Architecture project={project} />;
}

export function ProjectGallery({ project }: { project: Project }) {
  const video = fileExists(project.slug, project.media.video);
  const images = project.media.gallery.filter(({ file }) => fileExists(project.slug, file));
  const extraHero = project.media.hero && fileExists(project.slug, project.media.hero) && !images.some((item) => item.file === project.media.hero)
    ? [{ file: project.media.hero, caption: project.slug === "zentro" ? "Marketplace console captured from a local demo instance. Displayed activity is prototype state, not external usage." : "Product interface from the repository.", alt: `${project.name} interface` }]
    : [];
  const allImages = [...extraHero, ...images];
  return (
    <section className="case-section" aria-labelledby="proof-heading">
      <div className="section-heading"><span className="eyebrow">04 / Visual evidence</span><h2 id="proof-heading">See the system.</h2></div>
      {video && (
        <figure className="gallery-item gallery-item--video">
          <video controls preload="none" playsInline poster={project.media.hero && fileExists(project.slug, project.media.hero) ? `/projects/${project.slug}/${project.media.hero}` : undefined} aria-label={`${project.name} product demonstration`}>
            <source src={`/projects/${project.slug}/${project.media.video}`} type="video/mp4" />
            Your browser does not support video. <a href={`/projects/${project.slug}/${project.media.video}`}>Download the demonstration.</a>
          </video>
          <figcaption>{project.slug === "zentro" ? "Local prototype walkthrough with demo task data." : project.slug === "ai-operator" ? "Local coding-agent workflow." : "Workflow using the project's included synthetic sample data."}</figcaption>
        </figure>
      )}
      <div className="gallery-grid">
        {project.slug === "ai-operator" && <figure className="gallery-item gallery-item--benchmark"><OperatorBenchmark /><figcaption>Category results from the frozen live model artifact. All ten categories include five independently graded coding tasks.</figcaption></figure>}
        {allImages.map((item) => (
          <figure className="gallery-item" key={item.file}>
            <a href={`/projects/${project.slug}/${item.file}`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${item.alt}`}>
              <Image src={`/projects/${project.slug}/${item.file}`} alt={item.alt} width={1280} height={720} sizes="(max-width: 900px) 100vw, 48vw" />
            </a>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
        <figure className="gallery-item gallery-item--flow"><Architecture project={project} /><figcaption>The core data and decision path, condensed from the repository architecture.</figcaption></figure>
      </div>
    </section>
  );
}
