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
          <div className="hero__top"><span className="eyebrow">Software engineering / applied machine learning</span><span className="hero__index">PORTFOLIO / 2026</span></div>
          <div className="hero__content">
            <h1 id="hero-title">Youssef<br /><em>Elsokkary</em><span className="period">.</span></h1>
            <div className="hero__aside"><p>I&apos;m a software engineer working across web applications and machine learning. Here are {projects.length} projects, with the code, results, and decisions behind them.</p><a className="text-link" href="#work">View projects <span aria-hidden="true">↘</span></a></div>
          </div>
          <div className="hero__bottom"><span>{projects.length} projects / Code, demos, and measured results</span><span>Toronto, Canada</span></div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="wrap"><div className="section-intro"><span className="eyebrow">01 / Projects</span><h2 id="work-title">Selected <em>work.</em></h2><p>Traffic intelligence, trading-history analysis, payment reconciliation, and agent systems. Each case study covers the implementation, evaluation, and limits.</p></div>
            <div className="project-list">
              {projects.map((project, index) => (
                <article className={"project-row project-row--" + project.accent} key={project.slug}>
                  <div className="project-row__copy">
                    <div className="project-row__meta"><span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2,"0")}</span><span>{project.category}</span></div>
                    <h3><Link href={"/projects/" + project.slug}>{project.name}<span aria-hidden="true">↗</span></Link></h3>
                    <p className="project-row__intro">{project.intro}</p>
                    {project.metrics.length > 0 ? <div className="project-row__stat"><strong>{project.metrics[0].value}</strong><span>{project.metrics[0].label}<small>{project.metrics[0].detail}</small></span></div> : <div className="project-row__stat project-row__stat--text"><strong>Prototype</strong><span>Task routing, result checks, and settlement records</span></div>}
                    {project.slug === "atlas" && <div className="project-mini-metrics">{project.metrics.slice(1).map(metric=><div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
                    <div className="project-row__actions">{project.live && <a className="button button--dark" href={project.live} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>}<Link className={"button "+(project.live?"button--outline":"button--dark")} href={"/projects/" + project.slug}>Read case study <span aria-hidden="true">↗</span></Link><a className="button button--outline" href={project.github} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a></div>
                  </div>
                  <Link className="project-row__visual" href={"/projects/" + project.slug} aria-label={"View " + project.name + " case study"}><ProjectVisual project={project} priority={index === 0} /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section wrap" aria-labelledby="about-title"><span className="eyebrow">02 / About</span><div className="about-grid"><h2 id="about-title">How I <em>work.</em></h2><div><p>I build the application around the model as carefully as the model itself. That includes checking for data leakage, measuring uncertainty, handling failed jobs, and making decisions reviewable.</p><p>My work spans Python, TypeScript, web interfaces, databases, and machine learning. The project pages show what I built, how I tested it, and where the results stop.</p><a className="text-link" href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">View resume <span aria-hidden="true">↗</span></a></div></div></section>

        <section id="contact" className="contact-section"><div className="wrap contact-grid"><div><span className="eyebrow">03 / Contact</span><h2>Get in <em>touch.</em></h2></div><div><p>Seeking software engineering and applied machine learning internships.</p><a className="contact-email" href="mailto:joe.sokkary@gmail.com">joe.sokkary@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/youssef061204" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/youssef-elsokkary-2135422aa/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/YoussefsResume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div></div></section>
      </main>
      <footer className="site-footer wrap"><span>© {new Date().getFullYear()} Youssef Elsokkary</span><a href="#top">Back to top ↑</a></footer>
    </>
  );
}
