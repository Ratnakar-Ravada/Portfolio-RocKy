import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  Search,
  Send,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import PortfolioHero from "./PortfolioHero";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import PersonalSection from "./PersonalSection";
import ProjectReader from "./ProjectReader";
import { contact, projects, type Project } from "./siteContent";
import "./Workbench.css";
import "./RevisionTheme.css";

type WorkFilter = "all" | "personal" | "professional";

const sections = [
  { id: "home", name: "Back to the beginning", hint: "Home" },
  { id: "about", name: "What makes me, me", hint: "Who I am" },
  { id: "work", name: "Explore the project archive", hint: "Projects" },
  { id: "skills", name: "Technical skills and certifications", hint: "Skills" },
  { id: "experience", name: "Read my work experience", hint: "Experience" },
  { id: "education", name: "Education at IIIT Bhubaneswar", hint: "Education" },
  { id: "contact", name: "Send me a message", hint: "Contact" },
];

function ContactPanel() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  const mailConfigured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_USER_ID,
  );

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    if (!mailConfigured) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_USER_ID,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-grid">
      <div className="contact-intro">
        <span className="eyebrow">05 / OPEN A CONVERSATION</span>
        <h2>
          Good things start
          <br />
          with a <span>hello.</span>
        </h2>
        <p>
          A project idea, a tech rabbit hole, or a game recommendation. I’m
          happy to talk.
        </p>
        <div className="email-line">
          <a href={`mailto:${contact.email}`}>
            {contact.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="icon-button"
            onClick={copyEmail}
            aria-label={copied ? "Email address copied" : "Copy email address"}
          >
            {copied ? <Check /> : <Copy />}
          </button>
        </div>
        <span className="copy-feedback" role="status">
          {copied ? "Copied to clipboard." : "\u00a0"}
        </span>
        <div className="contact-socials">
          <a href={contact.github} target="_blank" rel="noreferrer">
            <Github />
            GitHub
            <ArrowUpRight />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            LinkedIn
            <ArrowUpRight />
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={submitMessage}>
        <div className="form-heading">
          <span className="eyebrow">A NOTE TO RATNAKAR</span>
          <Mail aria-hidden="true" />
        </div>
        <div className="form-pair">
          <label>
            Your name
            <input
              name="name"
              autoComplete="name"
              required
              disabled={status === "sending"}
              maxLength={120}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="What should I call you?"
            />
          </label>
          <label>
            Your email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              disabled={status === "sending"}
              maxLength={254}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label>
          What’s on your mind?
          <input
            name="subject"
            required
            disabled={status === "sending"}
            maxLength={200}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="An idea, a question, a hello..."
          />
        </label>
        <label>
          Your message
          <textarea
            name="message"
            required
            disabled={status === "sending"}
            maxLength={5000}
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell me a little about it."
          />
        </label>
        <div className="form-bottom">
          <p>Sent directly to my inbox.</p>
          <button
            className="button button-dark"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            <Send aria-hidden="true" />
          </button>
        </div>
        <p className="form-status" role="status">
          {status === "success"
            ? "Message sent. Thanks for saying hello!"
            : status === "error"
              ? "Your message could not be sent. Please try again in a moment."
              : ""}
        </p>
      </form>
    </div>
  );
}

function QuickFind({
  open,
  onClose,
  onProject,
}: {
  open: boolean;
  onClose: () => void;
  onProject: (project: Project) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const restoreFocusRef = useRef(true);
  const [query, setQuery] = useState("");
  const matchedSections = sections.filter((section) =>
    `${section.name} ${section.hint}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  const matchedProjects = projects.filter((project) =>
    `${project.title} ${project.tags.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      const previous =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setQuery("");
      restoreFocusRef.current = true;
      dialog.showModal();
      inputRef.current?.focus();
      return () => {
        dialog.close();
        if (restoreFocusRef.current) previous?.focus({ preventScroll: true });
      };
    }
  }, [open]);

  function navigateToSection(sectionId: string) {
    restoreFocusRef.current = false;
    closeFind();
    requestAnimationFrame(() => {
      const heading = document
        .getElementById(sectionId)
        ?.querySelector("h1, h2");
      if (heading instanceof HTMLElement) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    });
  }

  function closeFind() {
    dialogRef.current?.close();
    onClose();
  }

  return (
    <dialog
      className="quick-find"
      ref={dialogRef}
      aria-label="Find a section or project"
      onCancel={(event) => {
        event.preventDefault();
        closeFind();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeFind();
      }}
    >
      <div className="quick-find-inner">
        <div className="quick-find-search">
          <Search aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a project or a place..."
            aria-label="Search projects and sections"
          />
          <button
            className="icon-button"
            onClick={closeFind}
            aria-label="Close search"
          >
            <X />
          </button>
        </div>
        <div className="quick-find-results">
          {matchedSections.length > 0 && (
            <p className="eyebrow">GO SOMEWHERE</p>
          )}
          {matchedSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => navigateToSection(section.id)}
            >
              <span>{section.name}</span>
              <span className="quick-find-hint">
                {section.hint}
                <ArrowUpRight />
              </span>
            </a>
          ))}
          {matchedProjects.length > 0 && (
            <p className="eyebrow">OPEN A PROJECT</p>
          )}
          {matchedProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => {
                restoreFocusRef.current = false;
                closeFind();
                onProject(project);
              }}
            >
              <span>{project.title}</span>
              <ArrowUpRight />
            </button>
          ))}
          {matchedSections.length + matchedProjects.length === 0 && (
            <p className="search-empty">
              No matches. Try “React”, “Meet”, or “about”.
            </p>
          )}
        </div>
        <div className="quick-find-footer">
          <span>A SHORTCUT THROUGH THE SITE</span>
          <span>
            <kbd>esc</kbd> to close
          </span>
        </div>
      </div>
    </dialog>
  );
}

function Workbench() {
  const [filter, setFilter] = useState<WorkFilter>("all");
  const menuRef = useRef<HTMLButtonElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [findOpen, setFindOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const work =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    function handleKeys(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setFindOpen((value) => !value);
      }
      if (event.key === "Escape") {
        if (
          document
            .getElementById("main-navigation")
            ?.contains(document.activeElement)
        )
          menuRef.current?.focus();
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeys);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });
    return () => {
      document.removeEventListener("keydown", handleKeys);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="personal-site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a
            className="wordmark"
            href="#home"
            aria-label="Ratnakar Ravada home"
          >
            <img
              className="wordmark-symbol"
              src="/signature-r.svg?v=reference-r"
              width="56"
              height="44"
              alt=""
              aria-hidden="true"
            />
            <span className="wordmark-name">
              RATNAKAR RAVADA<span>DEVELOPER & CURIOUS HUMAN</span>
            </span>
          </a>
          <nav
            className={mobileOpen ? "site-nav is-open" : "site-nav"}
            aria-label="Main navigation"
            id="main-navigation"
          >
            {[
              ["about", "Who I am"],
              ["work", "Projects"],
              ["skills", "Skills"],
              ["experience", "Experience"],
            ].map(([id, name], index) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                <span className="nav-index">0{index + 1}</span>
                {name}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="find-trigger"
              onClick={() => setFindOpen(true)}
              aria-label="Search site, Control K"
            >
              <Search />
              <kbd>Ctrl K</kbd>
            </button>
            <a className="header-contact" href="#contact">
              Say hello
              <ArrowUpRight />
            </a>
            <button
              ref={menuRef}
              className="menu-toggle icon-button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="main-navigation"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <PortfolioHero />

        <PersonalSection />

        <section
          className="work-section section-shell"
          id="work"
          aria-labelledby="work-heading"
        >
          <div className="section-topline">
            <span className="eyebrow">02 / THE PROJECT ARCHIVE</span>
            <span className="eyebrow section-side-note">
              IDEAS, IMPLEMENTED.
            </span>
          </div>
          <div className="section-heading-row">
            <div>
              <h2 id="work-heading">
                Things I’ve <span>built.</span>
              </h2>
              <p>
                Personal experiments and professional work, with the details
                left in.
              </p>
            </div>
            <span className="project-tally">
              <strong>{String(projects.length).padStart(2, "0")}</strong>{" "}
              DOCUMENTED BUILDS
            </span>
          </div>
          <div className="work-filter-row">
            <div
              className="work-filters"
              role="group"
              aria-label="Filter projects"
            >
              {(
                [
                  ["all", "All work"],
                  ["personal", "Personal builds"],
                  ["professional", "Professional work"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  className={filter === value ? "is-active" : ""}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                  <span>
                    {value === "all"
                      ? projects.length
                      : projects.filter((project) => project.category === value)
                          .length}
                  </span>
                </button>
              ))}
            </div>
            <span className="archive-label" aria-live="polite">
              SHOWING {String(work.length).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="featured-projects">
            {work.slice(0, 2).map((project) => (
              <article
                className={`project-card project-card-${project.id}`}
                key={project.id}
              >
                <div className="project-preview">
                  <div className="preview-topbar">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>{project.id}</span>
                    <ArrowUpRight />
                  </div>
                  <div className="project-image-wrap">
                    <img
                      src={project.images[0]}
                      alt={
                        project.imageKind === "diagram"
                          ? project.imageCaption ||
                            `${project.title} workflow map`
                          : `${project.title} interface preview`
                      }
                      loading="lazy"
                      width="1440"
                      height="900"
                    />
                  </div>
                  <span className="preview-open">
                    OPEN BUILD NOTES
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="project-card-meta">
                  <span className="eyebrow">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")} /{" "}
                    {project.category === "personal"
                      ? "PERSONAL BUILD"
                      : "PROFESSIONAL WORK"}
                  </span>
                  <span>{project.tags.slice(0, 3).join(" / ")}</span>
                </div>
                <div className="project-card-title">
                  <h3>
                    <button
                      className="project-title-button"
                      onClick={() => setSelectedProject(project)}
                      aria-haspopup="dialog"
                    >
                      {project.title}
                    </button>
                  </h3>
                  <span className="project-card-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
          {work.length > 2 && (
            <div className="project-index">
              <div className="project-index-heading eyebrow">
                <span>MORE FROM THE ARCHIVE</span>
                <span>OPEN TO EXPLORE ↗</span>
              </div>
              {work.slice(2).map((project) => (
                <button
                  className="project-row"
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <span className="project-row-number">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <span className="project-row-name">
                    <strong>{project.title}</strong>
                    <span>{project.summary}</span>
                  </span>
                  <span className="project-row-tools">
                    {project.tags.slice(0, 2).join(" / ")}
                  </span>
                  <ArrowUpRight />
                </button>
              ))}
            </div>
          )}
          <div className="work-endnote">
            <Code2 />
            <span>
              The screenshots, the stack, and how the pieces fit together.
              <br className="mobile-break" /> Every build has a story.
            </span>
            <a
              className="text-link"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <SkillsSection />

        <ExperienceSection onProject={setSelectedProject} />

        <EducationSection />

        <section
          className="contact-section"
          id="contact"
          aria-label="Contact Ratnakar"
        >
          <div className="section-shell">
            <ContactPanel />
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div>
          <a
            className="footer-mark"
            href="#home"
            aria-label="Ravada Ratnakar home"
          >
            <img
              src="/signature-r.svg?v=reference-r"
              width="56"
              height="44"
              alt=""
              aria-hidden="true"
            />
          </a>
          <p>
            A personal space by Ratnakar Ravada.
            <br />
            <span>Built with curiosity. Best explored at your own pace.</span>
          </p>
        </div>
        <a className="back-top" href="#home">
          BACK TO TOP
          <ArrowUpRight />
        </a>
        <span className="footer-colophon">
          END OF FILE<span className="footer-cursor">▮</span>
        </span>
      </footer>
      <QuickFind
        open={findOpen}
        onClose={() => setFindOpen(false)}
        onProject={setSelectedProject}
      />
      <ProjectReader
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Workbench;
