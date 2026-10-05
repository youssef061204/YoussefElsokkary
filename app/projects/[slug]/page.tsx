import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery, ProjectVisual } from "../../components/ProjectMedia";
import { projectBySlug, projects } from "../../lib/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name + " — Youssef Elsokkary", description: project.intro, openGraph: { title: project.name + " — Youssef Elsokkary", description: project.intro, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  return <>
    <header className="site-header"><div className="wrap header-inner"><Link className="wordmark" href="/" aria-label="Youssef Elsokkary, home">YE<span className="wordmark__dot">.</span></Link><nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav><a className="header-resume" href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></header>
    <main className={"case case--" + project.accent}>
      <section className="case-hero wrap"><Link className="back-link" href="/#work">← All projects</Link><div className="case-hero__heading"><div><span className="eyebrow">Case study / {project.category}</span><h1>{project.name}<span className="period">.</span></h1><p>{project.intro}</p></div><div className="case-hero__actions">{project.live && <a className="button button--dark" href={project.live} target="_blank" rel="noreferrer">Launch live demo &#8599;</a>}<a className="button button--dark" href={project.github} target="_blank" rel="noreferrer">View repository ↗</a>{project.docs.map((item) => <a key={item.label} className="button button--outline" href={item.url} target="_blank" rel="noreferrer">{item.label} ↗</a>)}</div></div><div className="case-hero__visual"><ProjectVisual project={project} priority /></div><p className="scope-note"><strong>Evidence boundary</strong> {project.scope}</p></section>
      <div className="case-content wrap">
        <section className="case-section case-overview"><div className="section-heading"><span className="eyebrow">01 / Context</span><h2>What it solves.</h2></div><div className="case-overview__text"><h3>The problem</h3><p>{project.problem}</p><h3>The system</h3><p>{project.system}</p></div></section>
        {project.metrics.length > 0 && <section className="case-section"><div className="section-heading"><span className="eyebrow">02 / Measured evidence</span><h2>Results, with scope.</h2></div><div className="metric-grid">{project.metrics.map((metric) => <div className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span><p>{metric.detail}</p></div>)}</div></section>}
        <section className="case-section"><div className="section-heading"><span className="eyebrow">03 / Engineering</span><h2>Decisions that matter.</h2></div><div className="decision-list">{project.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{decision.title}</h3><p>{decision.body}</p></div></article>)}</div></section>
        <ProjectGallery project={project} />
        <section className="case-section case-stack"><div className="section-heading"><span className="eyebrow">05 / Implementation</span><h2>Built with.</h2></div><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <div className="case-next"><span className="eyebrow">Next case study</span><Link href={"/projects/" + next.slug}>{next.name}<span aria-hidden="true">↗</span></Link></div>
      </div>
    </main>
    <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Youssef Elsokkary</span><Link href="/#work">All work ↑</Link></footer>
  </>;
}
