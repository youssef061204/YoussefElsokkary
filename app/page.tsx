import Link from "next/link";
import { ProjectVisual } from "./components/ProjectMedia";
import { projects } from "./lib/projects";

export default function Home() {
  return (
    <>
      <header className="site-header" id="top">
        <div className="wrap header-inner">
          <Link className="wordmark" href="/" aria-label="Youssef Elsokkary, home">YE<span className="wordmark__dot">.</span></Link>
          <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
          <a className="header-resume" href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">Resume <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <main>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero__top"><span className="eyebrow"><span className="status-dot" /> Software engineering × applied ML</span><span className="hero__index">01 / PORTFOLIO</span></div>
          <div className="hero__content">
            <h1 id="hero-title">I build systems<br />that have to <em>earn</em><br />your trust<span className="period">.</span></h1>
            <div className="hero__aside"><p>I&apos;m Youssef Elsokkary. I work across machine learning, product engineering, and the systems that make both measurable and reliable.</p><a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↘</span></a></div>
          </div>
          <div className="hero__bottom"><span>Four working systems. Each with a technical story and evidence to inspect.</span><span>Toronto, Canada</span></div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="wrap"><div className="section-intro"><span className="eyebrow">01 / Selected work</span><h2 id="work-title">Built, tested,<br /><em>examined.</em></h2><p>Behavioral ML, financial reconciliation, a controlled coding agent, and a verification-first agent market. Select a project for the architecture, decisions, and source evidence.</p></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={"project-row project-row--" + project.accent} key={project.slug}>
                  <div className="project-row__copy">
                    <div className="project-row__meta"><span>{String(index + 1).padStart(2, "0")} / 04</span><span>{project.category}</span></div>
                    <h3><Link href={"/projects/" + project.slug}>{project.name}<span aria-hidden="true">↗</span></Link></h3>
                    <p className="project-row__intro">{project.intro}</p>
                    {project.metrics.length > 0 ? <div className="project-row__stat"><strong>{project.metrics[0].value}</strong><span>{project.metrics[0].label}<small>{project.metrics[0].detail}</small></span></div> : <div className="project-row__stat project-row__stat--text"><strong>Policy → proof</strong><span>Structured tasks, bounded routing, verification, settlement</span></div>}
                    <div className="project-row__actions"><Link className="button button--dark" href={"/projects/" + project.slug}>Read case study <span aria-hidden="true">↗</span></Link><a className="button button--outline" href={project.github} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a></div>
                  </div>
                  <Link className="project-row__visual" href={"/projects/" + project.slug} aria-label={"View " + project.name + " case study"}><ProjectVisual project={project} priority={index === 0} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section wrap" aria-labelledby="about-title"><span className="eyebrow">02 / Approach</span><div className="about-grid"><h2 id="about-title">A model is only as useful as the system around it.</h2><div><p>I care about what happens after the impressive demo: whether data leaks into a benchmark, whether an uncertain result can be withheld, whether a background job can recover, and whether a person can understand and reverse a decision.</p><p>These projects span Python and TypeScript, ML pipelines and web products, durable workers and constrained agent execution. Their case studies show the tradeoffs alongside the results.</p><a className="text-link" href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a></div></div></section>

        <section id="contact" className="contact-section"><div className="wrap contact-grid"><div><span className="eyebrow">03 / Contact</span><h2>Let&apos;s build<br /><em>something real.</em></h2></div><div><p>Open to software engineering and AI/ML internship conversations.</p><a className="contact-email" href="mailto:joe.sokkary@gmail.com">joe.sokkary@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/youssef061204" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/youssef-elsokkary-2135422aa/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div></div></section>
      </main>
      <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Youssef Elsokkary</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
