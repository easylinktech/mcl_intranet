import type { Metadata } from "next";
import { ArrowUpRight, ArrowDown, Lightbulb, Leaf, Globe2 } from "lucide-react";
import { PageHeading } from "@/components/layout/page-heading";

export const metadata: Metadata = {
  title: "Guala Closures | MCL Connect",
  description: "Discover Guala Closures, Metal Crowns' connection to the Group, and its closure solutions.",
};

const products = [
  ["Spirits", "Tamper-evident and non-refillable closures that protect spirits and support brand identity.", "above-spirits"],
  ["Wine", "Screw caps combining reliable sealing with distinctive bottle presentation.", "above-wine"],
  ["Beverages", "Crown corks and aluminium roll-on closures for beer and soft drinks.", "above-beverages"],
  ["Water", "Closures designed to make opening a water bottle part of the brand experience.", "above-water"],
  ["Condiments", "Functional closures designed to protect bottled condiments and their quality.", "above-condiments"],
];

export default function GualaClosuresPage() {
  return (
    <main className="portal-page guala-page">
      <PageHeading title="Guala Closures" section="Knowledge Hub" description="Global expertise. Shared innovation. A closer look at the Group." />
      <section className="guala-intro" aria-labelledby="guala-intro-title">
        <div className="guala-intro-copy">
          <span className="section-kicker">GET TO KNOW THE GROUP</span>
          <h2 id="guala-intro-title">Creating the closure <em>of tomorrow.</em></h2>
          <p>Guala Closures develops closure solutions for beverage, food and pharmaceutical packaging. The Group works with customers and packaging designers to bring together product protection, functionality and brand expression.</p>
          <a className="guala-button" href="https://www.gualaclosures.com/group/about-us" target="_blank" rel="noopener noreferrer">About the Group <ArrowUpRight size={18} /></a>
          <a className="guala-text-link" href="#guala-products-title">Explore the portfolio <ArrowDown size={17} /></a>
        </div>
        <div className="guala-intro-visual">
          <img className="guala-hero-image" src="/images/guala/group-hero.webp" alt="A selection of Guala Closures' decorated screw caps and crown corks" width="680" height="680" />
          <div className="guala-logo-panel"><img src="/images/guala_logo.svg" alt="Guala Closures" width="318" height="55" /></div>
          <span className="guala-visual-caption">PRODUCT PROTECTION. BRAND EXPRESSION.</span>
        </div>
      </section>
      <div className="guala-highlights" aria-label="Group focus areas">
        <span><Globe2 size={21} /> Global closure expertise</span>
        <span><Lightbulb size={21} /> Customer-led innovation</span>
        <span><Leaf size={21} /> Sustainability in focus</span>
      </div>
      <section className="guala-connection" aria-labelledby="guala-mcl-title">
        <div className="guala-connection-image"><img src="/images/guala/crown-division.webp" alt="Astir crown corks featured on Guala Closures' beverage solutions page" width="680" height="680" loading="lazy" /><span>CROWN DIVISION<span>Global beverage closure expertise</span></span></div>
        <div className="guala-connection-copy">
        <span className="section-kicker">METAL CROWNS & GUALA CLOSURES</span>
        <h2 id="guala-mcl-title">Our place in the Crown Division.</h2>
        <p>Guala Closures identifies Metal Crowns in Kenya as one of the acquisitions that strengthened its Crown Division, alongside Astir in Greece and Oricon Enterprises' metal closures division in India. This brings Metal Crowns into a wider network of beverage closure expertise.</p>
        <a href="https://www.gualaclosures.com/products/above-beverages" target="_blank" rel="noopener noreferrer">Explore the Crown Division's beverage solutions <ArrowUpRight size={18} /></a>
        </div>
      </section>
      <section className="guala-products" aria-labelledby="guala-products-title">
        <span className="section-kicker">PRODUCT PORTFOLIO</span>
        <h2 id="guala-products-title">Closure solutions across everyday markets.</h2>
        <div className="guala-grid">
          {products.map(([title, description, slug], index) => {
            return (
            <article className="guala-card" key={slug}>
              <img className="guala-product-image" src={`/images/guala/${slug.replace("above-", "")}.webp`} alt={`Guala Closures' ${title.toLowerCase()} closure range`} loading="lazy" />
              <div className="guala-card-top"><span className="section-kicker">ABOVE {title.toUpperCase()}</span><span className="guala-number">0{index + 1}</span></div>
              <h3>{title}</h3><p>{description}</p>
              <a href={`https://www.gualaclosures.com/products/${slug}`} target="_blank" rel="noopener noreferrer">Explore {title.toLowerCase()} <ArrowUpRight size={17} /></a>
            </article>
          ); })}
        </div>
      </section>
      <div className="guala-grid guala-topics">
        <section className="guala-card">
          <img className="guala-topic-image" src="/images/guala/innovation.webp" alt="Detail of a decorative closure on a spirits bottle, from Guala Closures" width="680" height="680" loading="lazy" />
          <span className="section-kicker">INNOVATION</span><h2>From idea to production.</h2>
          <p>Customer collaboration and packaging design help the Group turn new ideas into manufacturable closure solutions, with attention to performance and sustainability.</p>
          <a href="https://www.gualaclosures.com/group/about-us" target="_blank" rel="noopener noreferrer">Discover the Group's approach <ArrowUpRight size={17} /></a>
        </section>
        <section className="guala-card">
          <img className="guala-topic-image" src="/images/guala/sustainability.webp" alt="Rooftop solar panels featured in Guala Closures' sustainability imagery" width="680" height="680" loading="lazy" />
          <span className="section-kicker">SUSTAINABILITY</span><h2>A long-term commitment.</h2>
          <p>Sustainability has been a Group priority since 2011. Its published approach includes environmental responsibility, inclusion and stakeholder wellbeing.</p>
          <a href="https://www.gualaclosures.com/sustainability/approach" target="_blank" rel="noopener noreferrer">Read the sustainability approach <ArrowUpRight size={17} /></a>
        </section>
      </div>
      <aside className="guala-source"><p>Information and photography: Guala Closures' official website. Images belong to their respective owners. Reviewed 2 November 2026. Follow the official links for current information.</p><a href="https://www.gualaclosures.com/" target="_blank" rel="noopener noreferrer">Visit Guala Closures <ArrowUpRight size={17} /></a></aside>
    </main>
  );
}
