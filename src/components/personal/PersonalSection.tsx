import { useCallback, useState } from "react";
import InterestOrbit from "./InterestOrbit";
import { interestProfiles, type InterestId } from "./interestProfiles";
import { personalFacts } from "./siteContent";
import "./PersonalSection.css";

export default function PersonalSection() {
  const [selection, setSelection] = useState<{
    id: InterestId;
    manual: boolean;
  }>({ id: "tech", manual: false });
  const onInterestChange = useCallback((id: InterestId, manual: boolean) => {
    setSelection((current) =>
      current.id === id && current.manual === manual ? current : { id, manual },
    );
  }, []);
  const active =
    interestProfiles.find((profile) => profile.id === selection.id) ??
    interestProfiles[0];
  const index = interestProfiles.indexOf(active);

  return (
    <section
      className="personal-section section-shell"
      id="about"
      aria-labelledby="about-heading"
      data-interest={active.id}
    >
      <div className="section-topline">
        <span className="eyebrow">01 / WHO I AM</span>
        <span className="eyebrow personal-topline-note">
          THERE IS MORE TO THE STORY
        </span>
      </div>
      <div className="personal-headingline">
        <h2 id="about-heading">
          What makes <span>me, me.</span>
        </h2>
        <p>A few things I enjoy, on and off the screen.</p>
      </div>
      <div className="personal-orbit-layout">
        <div className="personal-orbit-stage">
          <InterestOrbit
            onInterestChange={onInterestChange}
            descriptionId="personal-interest-copy"
          />
        </div>
        <article
          className="personal-interest-detail"
          id="personal-interest-copy"
          key={active.id}
          aria-labelledby="personal-interest-title"
          aria-live={selection.manual ? "polite" : "off"}
          aria-atomic="true"
        >
          <p className="personal-interest-kicker">
            {String(index + 1).padStart(2, "0")} / {active.label}
          </p>
          <h3 className="personal-interest-title" id="personal-interest-title">
            {active.title}
          </h3>
          <p className="personal-interest-lead">{active.lead}</p>
          <p className="personal-interest-body">{active.body}</p>
          <ul
            className="personal-interest-notes"
            aria-label={`${active.label} interests`}
          >
            {active.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="personal-interest-footer">
            <span>IN CONVERSATION</span>
            <p>
              {personalFacts.languages
                .map((language) => language.name)
                .join(" / ")}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
