import { ArrowUpRight, Award } from "lucide-react";
import { certificates, toolGroups } from "./siteContent";
import "./SkillsSection.css";

const skillChapters = [
  {
    id: "intelligence",
    label: "AI SYSTEMS",
    title: "AI & agents.",
    description: "Retrieval, model integration, evaluation, and safeguards.",
    domainIds: ["gen-ai", "llm-platforms"],
  },
  {
    id: "applications",
    label: "APPLICATION ENGINEERING",
    title: "Application engineering.",
    description: "Interfaces, services, and data that make the product work.",
    domainIds: ["frontend", "backend", "data", "languages"],
  },
  {
    id: "delivery",
    label: "CLOUD & DELIVERY",
    title: "Cloud & delivery.",
    description: "Hosting, automation, and the tools around a release.",
    domainIds: ["cloud", "ci-cd", "tools-process"],
  },
];

export default function SkillsSection() {
  return (
    <section
      className="skills-section section-shell"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="section-topline">
        <span className="eyebrow">03 / SKILLS</span>
        <span className="eyebrow skills-topline-note">
          FROM THE MODEL TO THE INTERFACE TO THE CLOUD
        </span>
      </div>
      <div className="skills-intro">
        <div>
          <h2 id="skills-heading">
            What I build <span>with.</span>
          </h2>
          <p>
            The technologies I work with, grouped by where they fit in a system.
          </p>
        </div>
        <span className="skills-intro-note">AI / APPLICATIONS / CLOUD</span>
      </div>

      <div className="skill-chapters">
        {skillChapters.map((chapter, chapterIndex) => (
          <section
            className={`skill-chapter skill-chapter--${chapter.id}`}
            id={`skill-layer-${chapter.id}`}
            key={chapter.id}
            aria-labelledby={`skill-layer-${chapter.id}-heading`}
          >
            <div className="skill-chapter-intro">
              <p className="skill-chapter-number">
                {String(chapterIndex + 1).padStart(2, "0")} / {chapter.label}
              </p>
              <h3 id={`skill-layer-${chapter.id}-heading`}>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
            <div className={`skill-domains skill-domains--${chapter.id}`}>
              {chapter.domainIds
                .flatMap((id) => toolGroups.filter((group) => group.id === id))
                .map((group) => (
                  <article
                    className="skill-domain"
                    id={`skill-${group.id}`}
                    key={group.id}
                    data-domain={group.id}
                    aria-labelledby={`skill-${group.id}-heading`}
                  >
                    <header className="skill-domain-heading">
                      <h4 id={`skill-${group.id}-heading`}>{group.name}</h4>
                    </header>
                    <p className="skill-domain-description">
                      {group.description}
                    </p>
                    <ul
                      className="skill-domain-tools"
                      aria-label={`${group.name} skills`}
                    >
                      {group.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </section>
        ))}
      </div>

      <section
        className="certifications-section"
        id="certifications"
        aria-labelledby="certifications-heading"
      >
        <div className="certifications-heading">
          <div>
            <p className="eyebrow">CERTIFICATIONS</p>
            <h3 id="certifications-heading">Certified in AI &amp; cloud.</h3>
          </div>
          <p>Three credentials, with verification from the providers.</p>
        </div>
        <div className="certification-list">
          {certificates.map((certificate) => (
            <article
              className="certification-entry"
              id={`certificate-${certificate.id}`}
              key={certificate.id}
              aria-labelledby={`certificate-${certificate.id}-title`}
            >
              <div className="certification-meta">
                <span>{certificate.domain}</span>
                <span className="certification-mark">
                  <Award aria-hidden="true" />
                </span>
              </div>
              <p className="certification-provider">{certificate.provider}</p>
              <h4
                className="certification-title"
                id={`certificate-${certificate.id}-title`}
              >
                {certificate.title}
              </h4>
              <a
                className="certification-link"
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certificate.title} with ${certificate.provider}`}
              >
                <span>Verify certification</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
