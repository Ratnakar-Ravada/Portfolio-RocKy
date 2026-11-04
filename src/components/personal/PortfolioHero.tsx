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
          <div className="portfolio-hero__intro">
            <h1 id="hero-heading">
              <span>Ravada</span>{" "}
              <span>
                Ratnakar<span className="portfolio-hero__period">.</span>
              </span>
            </h1>
            <p className="portfolio-hero__role">
              Coder by Craft • Curious by Character • Chaotic by Choice
            </p>
            <p className="portfolio-hero__synopsis">
              I like making things, understanding how things work, and trying
              stuff just because it seems interesting. Coding happens to be one
              of the ways I do that, and of course it helps me pay my bills.
              Still figuring things out, trying new things, and enjoying the
              ride. So far, so very good...
            </p>
          </div>
          <div className="portfolio-hero__meta">
            <div className="portfolio-hero__location">
              <MapPin aria-hidden="true" />
              <p>{personalFacts.location}</p>
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
        </div>
        <HeroPortrait />
      </div>
    </section>
  );
}
