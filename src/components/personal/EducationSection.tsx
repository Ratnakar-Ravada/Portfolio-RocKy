import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education } from "./siteContent";
import "./EducationSection.css";

export default function EducationSection() {
  return (
    <section
      className="education-section"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="section-shell education-inner">
        <div className="education-label">
          <GraduationCap aria-hidden="true" />
          <h2 id="education-heading">Where I studied.</h2>
          <span>EDUCATION</span>
        </div>
        <div className="education-record">
          <div className="education-period" aria-label={education.period}>
            <span>{education.start}</span>
            <span className="education-period-line" aria-hidden="true" />
            <span>{education.end}</span>
          </div>
          <div className="education-qualification">
            <p className="education-status">GRADUATED</p>
            <h3>{education.institution}</h3>
            <p className="education-degree">{education.degree}</p>
            <p className="education-field">{education.field}</p>
          </div>
          <a
            className="education-certificate"
            href={education.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View degree certificate</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
