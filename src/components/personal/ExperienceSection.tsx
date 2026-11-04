import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BookOpen, Plus } from "lucide-react";
import { experienceStories } from "./experienceStories";
import { projects, workHistory, type Project } from "./siteContent";
import "./ExperienceSection.css";

interface ExperienceSectionProps {
  onProject: (project: Project) => void;
}

export default function ExperienceSection({
  onProject,
}: ExperienceSectionProps) {
  const [activeChapter, setActiveChapter] = useState(workHistory[0]?.id ?? "");
  const chapterRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    let pendingFrame = 0;

    function updateActiveChapter() {
      pendingFrame = 0;
      const chapters = Array.from(chapterRefs.current.values());
      const readingLine = Math.min(window.innerHeight * 0.3, 260);
      const reached = chapters.filter(
        (chapter) => chapter.getBoundingClientRect().top <= readingLine,
      );
      const current = reached[reached.length - 1] ?? chapters[0];
      const id = current?.dataset.chapter;
      if (id) setActiveChapter(id);
    }

    function scheduleChapterUpdate() {
      if (!pendingFrame)
        pendingFrame = window.requestAnimationFrame(updateActiveChapter);
    }

    updateActiveChapter();
    window.addEventListener("scroll", scheduleChapterUpdate, { passive: true });
    window.addEventListener("resize", scheduleChapterUpdate);
    return () => {
      window.cancelAnimationFrame(pendingFrame);
      window.removeEventListener("scroll", scheduleChapterUpdate);
      window.removeEventListener("resize", scheduleChapterUpdate);
    };
  }, []);

  return (
    <section
      className="career-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <div className="section-topline">
          <span className="eyebrow">04 / WORK JOURNAL</span>
          <span className="eyebrow career-topline-note">2023 TO PRESENT</span>
        </div>
        <div className="career-heading-row">
          <h2 id="experience-heading">
            Where I’ve been
            <br />
            <span>building.</span>
          </h2>
          <p>
            From securing files to shaping AI products. A few chapters of what I
            have been building, and where.
          </p>
        </div>
        <div className="career-journal-layout">
          <aside className="career-contents">
            <p className="eyebrow">THREE CHAPTERS, STILL BUILDING</p>
            <nav aria-label="Work journal chapters">
              {workHistory.map((job, index) => {
                const story = experienceStories[job.id];
                return (
                  <a
                    key={job.id}
                    href={`#career-${job.id}`}
                    className="career-chapter-link"
                    aria-current={
                      activeChapter === job.id ? "location" : undefined
                    }
                    onClick={() => setActiveChapter(job.id)}
                  >
                    <span className="career-link-number">
                      {String(workHistory.length - index).padStart(2, "0")}
                    </span>
                    <span className="career-link-copy">
                      <strong>{story.companyLabel}</strong>
                      <span>{story.years}</span>
                    </span>
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
            <p className="career-contents-note">
              The stories here connect to the builds above. Open a project to
              look around, or unfold the engineering notes for the details.
            </p>
          </aside>
          <div className="career-chapters">
            {workHistory.map((job, index) => {
              const story = experienceStories[job.id];
              const relatedProjects = story.projectIds.flatMap((id) =>
                projects.filter((project) => project.id === id),
              );
              return (
                <article
                  key={job.id}
                  id={`career-${job.id}`}
                  className="career-chapter"
                  data-chapter={job.id}
                  aria-labelledby={`career-${job.id}-title`}
                  ref={(node) => {
                    if (node) chapterRefs.current.set(job.id, node);
                    else chapterRefs.current.delete(job.id);
                  }}
                >
                  <div className="career-chapter-label">
                    <span>
                      {String(workHistory.length - index).padStart(2, "0")} /{" "}
                      {story.chapter}
                    </span>
                    {index === 0 && (
                      <span className="career-current-marker">In progress</span>
                    )}
                  </div>
                  <h3
                    id={`career-${job.id}-title`}
                    className="career-story-title"
                  >
                    {story.title}
                  </h3>
                  <div className="career-byline">
                    <strong>{job.company}</strong>
                    <div className="career-role-line">
                      <span>{job.role}</span>
                      <span className="career-role-dot" aria-hidden="true" />
                      <span>{job.period}</span>
                      {job.location && (
                        <>
                          <span
                            className="career-role-dot"
                            aria-hidden="true"
                          />
                          <span>{job.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="career-story-copy">
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {relatedProjects.length > 0 && (
                    <div className="career-project-links">
                      <p className="eyebrow">FROM THIS CHAPTER</p>
                      {relatedProjects.map((project) => (
                        <button
                          type="button"
                          className="career-project-link"
                          key={project.id}
                          onClick={() => onProject(project)}
                          aria-haspopup="dialog"
                        >
                          <span>
                            <strong>{project.title}</strong>
                            <small>
                              {project.id === "expensia"
                                ? "Full application"
                                : "Project build notes"}
                            </small>
                          </span>
                          <ArrowUpRight aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  )}
                  <details className="career-notes">
                    <summary className="career-notes-toggle">
                      <BookOpen aria-hidden="true" />
                      <span className="career-notes-closed">
                        Open engineering notes
                      </span>
                      <span className="career-notes-open">
                        Close engineering notes
                      </span>
                      <span className="career-notes-count">
                        {job.contributions.length}{" "}
                        {job.contributions.length === 1 ? "entry" : "entries"}
                      </span>
                      <Plus className="career-notes-plus" aria-hidden="true" />
                    </summary>
                    <div className="career-notes-body">
                      <p className="career-note-intro">{job.description}</p>
                      <div className="career-contributions">
                        {job.contributions.map(
                          (contribution, contributionIndex) => (
                            <section
                              className="career-contribution"
                              key={contribution.title}
                              aria-labelledby={`career-note-${job.id}-${contributionIndex}`}
                            >
                              <div className="career-contribution-heading">
                                <span>
                                  {String(contributionIndex + 1).padStart(
                                    2,
                                    "0",
                                  )}
                                </span>
                                <h4
                                  id={`career-note-${job.id}-${contributionIndex}`}
                                >
                                  {contribution.title}
                                </h4>
                              </div>
                              <div className="career-note-paragraphs">
                                {contribution.details.map((detail) => (
                                  <p key={detail}>{detail}</p>
                                ))}
                              </div>
                            </section>
                          ),
                        )}
                      </div>
                      <div className="career-technology-index">
                        <span className="eyebrow">BUILT WITH</span>
                        <p>{job.technologies.join(" / ")}</p>
                      </div>
                      <div className="career-additional">
                        {job.practices.length > 0 && (
                          <div>
                            <span className="eyebrow">WAYS OF WORKING</span>
                            <p>{job.practices.join(" / ")}</p>
                          </div>
                        )}
                        {Boolean(job.libraries?.length) && (
                          <div>
                            <span className="eyebrow">LIBRARIES & TOOLS</span>
                            <p>{job.libraries?.join(" / ")}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
