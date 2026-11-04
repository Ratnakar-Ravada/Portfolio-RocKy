import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { personalFacts } from "./siteContent";
import HeroPortrait from "./HeroPortrait";
import "./PortfolioHero.css";

export default function PortfolioHero() {
  return (
    <section
      className="portfolio-hero"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="portfolio-hero__inner">
        <div className="portfolio-hero__copy">
          <p className="portfolio-hero__eyebrow">Software engineer</p>
          <h1 id="hero-heading">
            <span>Ravada</span>{" "}
            <span>
              Ratnakar<span className="portfolio-hero__period">.</span>
            </span>
          </h1>
          <p className="portfolio-hero__role">Full stack. Gen AI. Cloud.</p>
          <p className="portfolio-hero__synopsis">
            I build apps, websites, and tools with AI. Currently at Evernorth
            Health Services, The Cigna Group. Always exploring what I can make
            next.
          </p>
          <div className="portfolio-hero__location">
            <MapPin aria-hidden="true" />
            <div>
              <span className="portfolio-hero__location-label">Based in</span>
              <p>{personalFacts.location}</p>
            </div>
          </div>
          <div className="portfolio-hero__actions">
            <a className="portfolio-hero__primary" href="#work">
              Explore work <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="portfolio-hero__secondary" href="#about">
              Meet the person <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <HeroPortrait />
      </div>
    </section>
  );
}
