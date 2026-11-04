import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Github,
  X,
} from "lucide-react";
import { projects, type Project } from "./siteContent";
import "./ProjectReader.css";

interface ProjectReaderProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectReader({
  project,
  onClose,
}: ProjectReaderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
      previousFocusRef.current?.focus({ preventScroll: true });
    }
  }, [project]);

  useEffect(() => {
    setImageIndex(0);
    dialogRef.current?.scrollTo({ top: 0 });
  }, [project?.id]);

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => {
      if (dialog?.open) dialog.close();
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, []);

  const imageCount = project?.images.length ?? 0;
  const visibleIndex = imageIndex < imageCount ? imageIndex : 0;
  const projectNumber = project
    ? String(
        projects.findIndex((entry) => entry.id === project.id) + 1,
      ).padStart(2, "0")
    : "";

  function moveImage(direction: number) {
    if (imageCount < 2) return;
    setImageIndex((current) => (current + direction + imageCount) % imageCount);
  }

  function handleGalleryKey(event: KeyboardEvent<HTMLElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey)
      return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      moveImage(event.key === "ArrowLeft" ? -1 : 1);
    }
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-reader"
      aria-labelledby="project-reader-title"
      onClick={handleBackdropClick}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      {project && (
        <article className="project-reader__document">
          <header className="project-reader__topbar">
            <span>PROJECT FILE / {projectNumber}</span>
            <button
              className="project-reader__close"
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <span>Close</span>
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          <div className="project-reader__intro">
            <p className="project-reader__category">
              <span aria-hidden="true" />
              {project.category === "personal"
                ? "Personal build"
                : "Professional work"}
            </p>
            <h2 id="project-reader-title">{project.title}</h2>
            <p className="project-reader__summary">{project.summary}</p>
            {(project.liveUrl || project.sourceUrl) && (
              <div className="project-reader__links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live site <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={17} aria-hidden="true" /> View source
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          {imageCount > 0 && (
            <section
              className="project-reader__gallery"
              aria-label={`${project.title} ${project.imageLabel?.toLowerCase() || (project.imageKind === "diagram" ? "workflow illustration" : "screenshots")}`}
              onKeyDown={handleGalleryKey}
            >
              <div className="project-reader__image-stage">
                <img
                  src={project.images[visibleIndex]}
                  alt={
                    project.imageKind === "diagram"
                      ? project.imageCaption || `${project.title} workflow map`
                      : `${project.title}, application screenshot ${visibleIndex + 1} of ${imageCount}`
                  }
                  className="project-reader__image"
                />
              </div>
              <div className="project-reader__gallery-toolbar">
                <p aria-live="polite" aria-atomic="true">
                  <span>
                    {project.imageLabel ||
                      (project.imageKind === "diagram"
                        ? "WORKFLOW"
                        : "INTERFACE")}
                  </span>
                  {String(visibleIndex + 1).padStart(2, "0")}
                  <span className="project-reader__count-divider">/</span>
                  {String(imageCount).padStart(2, "0")}
                </p>
                {imageCount > 1 && (
                  <div className="project-reader__gallery-controls">
                    <button
                      type="button"
                      onClick={() => moveImage(-1)}
                      aria-label="Previous screenshot"
                    >
                      <ArrowLeft size={19} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveImage(1)}
                      aria-label="Next screenshot"
                    >
                      <ArrowRight size={19} aria-hidden="true" />
                    </button>
                  </div>
                )}
              </div>
              {imageCount > 1 && (
                <div
                  className="project-reader__thumbnails"
                  aria-label="Choose a screenshot"
                >
                  {project.images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      className={
                        index === visibleIndex
                          ? "project-reader__thumbnail is-current"
                          : "project-reader__thumbnail"
                      }
                      onClick={() => setImageIndex(index)}
                      aria-label={`Show screenshot ${index + 1} of ${imageCount}`}
                      aria-pressed={index === visibleIndex}
                    >
                      <img src={image} alt="" loading="lazy" />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          <div className="project-reader__body">
            <div className="project-reader__main">
              <section
                className="project-reader__section"
                aria-labelledby="project-reader-overview"
              >
                <p className="project-reader__section-label">01 / OVERVIEW</p>
                <h3 id="project-reader-overview">What it does.</h3>
                <p>{project.overview}</p>
              </section>
              <section
                className="project-reader__section"
                aria-labelledby="project-reader-implementation"
              >
                <p className="project-reader__section-label">
                  02 / IMPLEMENTATION
                </p>
                <h3 id="project-reader-implementation">Under the hood.</h3>
                {project.implementation.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
              <section
                className="project-reader__section"
                aria-labelledby="project-reader-features"
              >
                <p className="project-reader__section-label">03 / DETAILS</p>
                <h3 id="project-reader-features">A closer look.</h3>
                <ul className="project-reader__features">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <ArrowDownRight size={16} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <aside
              className="project-reader__tools"
              aria-label="Tools used in this project"
            >
              <p className="project-reader__section-label">BUILT WITH</p>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.category === "professional" && (
                <p className="project-reader__work-note">
                  Documented professional work. Explore the product flow,
                  technical scope, and implementation notes.
                </p>
              )}
            </aside>
          </div>

          <footer className="project-reader__footer">
            <span>END OF FILE / {projectNumber}</span>
            <button type="button" onClick={onClose}>
              Back to the work <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </footer>
        </article>
      )}
    </dialog>
  );
}
