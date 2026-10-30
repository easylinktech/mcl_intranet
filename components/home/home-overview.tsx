import Link from "next/link";
import { ProductHero } from "./product-hero";
import { ClosureArtwork } from "./closure-artwork";
import { ScrollMotion } from "@/components/ui/scroll-motion";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  CalendarDays,
  Wrench,
  FileText,
  BookOpen,
  Clock3,
  Heart,
  Lightbulb,
  Handshake,
} from "lucide-react";
import { SearchCentre } from "./search-centre";
import { NewsFeed } from "@/components/news/news-feed";
import { events } from "@/app/data/content";

export function HomeOverview() {
  return (
    <ScrollMotion>
      <section
        className="home-content hero-opening"
        aria-label="Welcome to MCL Connect"
      >
        <div className="welcome-column">
          <ProductHero />
        </div>
        <div className="resource-column">
          <span className="brand-hashtag">#TogetherWeMakeMCL</span>
          <SearchCentre />
        </div>
      </section>
      <div className="updates-band">
        <section
          className="home-content home-updates"
          id="workplace"
          aria-label="News and workplace updates"
        >
          <div className="welcome-column">
            {" "}
            <section className="home-news">
              <div className="home-section-title">
                <h2>
                  Top news at <em>MCL</em>
                </h2>
                <Link href="/news">
                  All news <ArrowRight size={18} />
                </Link>
              </div>
              <p className="section-description">
                Stories and updates from around our workplace.
              </p>
              <NewsFeed compact />
            </section>
            <Link
              className="home-product-tile"
              href="/knowledge-hub/product-knowledge"
            >
              <img
                src="/images/plastic-closures.png"
                alt="Detailed blue and white plastic beverage closures showing their threads and tamper-evident rings"
              />
              <div>
                <span>OUR PRODUCTS, EVERYDAY MOMENTS</span>
                <h3>
                  A small detail.
                  <br />A world of difference.
                </h3>
                <p>
                  Discover the crowns and closures that bring our expertise to
                  life.
                </p>
                <strong>
                  Take a closer look <ArrowRight size={18} />
                </strong>
              </div>
            </Link>
          </div>
          <div className="resource-column">
            {" "}
            <section className="important-links">
              <div className="home-section-title">
                <h2>Important links</h2>
              </div>
              <div className="important-links-grid">
                {[
                  {
                    title: "Staff directory",
                    sub: "Find your people",
                    icon: Users,
                    url: "/people/staff-directory",
                  },
                  {
                    title: "Learning Centre",
                    sub: "Build your knowledge",
                    icon: BookOpen,
                    url: "/learning",
                  },
                  {
                    title: "Policies & documents",
                    sub: "Work with confidence",
                    icon: ShieldCheck,
                    url: "/resources/policies",
                  },
                  {
                    title: "Request leave",
                    sub: "Plan your time away",
                    icon: CalendarDays,
                    url: "/requests?type=leave",
                  },
                  {
                    title: "IT help desk",
                    sub: "A helping hand",
                    icon: Wrench,
                    url: "/requests?type=it",
                  },
                  {
                    title: "My requests",
                    sub: "Your saved submissions",
                    icon: FileText,
                    url: "/requests",
                  },
                ].map((l) => (
                  <Link key={l.title} href={l.url}>
                    <l.icon size={25} />
                    <span>
                      <strong>{l.title}</strong>
                      <small>{l.sub}</small>
                    </span>
                    <ArrowRight size={18} />
                  </Link>
                ))}
              </div>
            </section>
            <section className="home-events">
              <div className="home-section-title">
                <h2>On the calendar</h2>
                <Link href="/events">
                  All events <ArrowRight size={18} />
                </Link>
              </div>
              {events.slice(0, 2).map((e) => (
                <Link href="/events" key={e.title} className="dark-event">
                  <span className="event-date">
                    <strong>{e.day}</strong>
                    <small>{e.month}</small>
                  </span>
                  <span>
                    <strong>{e.title}</strong>
                    <small>
                      <Clock3 size={14} />
                      {e.time} · {e.place}
                    </small>
                  </span>
                  <ArrowRight size={19} />
                </Link>
              ))}
            </section>
            <ClosureArtwork />
          </div>
        </section>
      </div>
      <section className="product-story">
        <div>
          <span className="section-kicker">THIS IS WHAT WE MAKE</span>
          <h2>
            A perfect finish.
            <br />A fresh beginning.
          </h2>
          <p>
            From the familiar crown on a soda bottle to a precision plastic
            closure, our products are part of everyday moments. Behind each one
            is the expertise, care and collaboration of the MCL team.
          </p>
          <Link href="/knowledge-hub/product-knowledge">
            Discover our products <ArrowRight size={19} />
          </Link>
        </div>
        <img
          src="/images/bottles-light.png"
          alt="Glass beverage bottles sealed with metal crown caps alongside plastic closures"
        />
      </section>
      <div className="home-more">
        <div className="leadership-band">
          <section className="ceo-section">
            <div className="ceo-image">
              <img
                src="/images/crown-production.png"
                alt="Illustrative crown-cap production line with blue and silver closures on a stainless steel conveyor"
              />
              <span>OUR PEOPLE. OUR SHARED FUTURE.</span>
            </div>
            <div className="ceo-copy">
              <span className="section-kicker">MESSAGE FROM THE CEO</span>
              <h2>
                Progress begins
                <br />
                with our people.
              </h2>
              <span className="editorial-status">
                Prepared for leadership approval
              </span>
              <p>
                Every closure we make reflects the care, skill and commitment of
                the people behind it. Our shared ambition is to keep improving:
                in the quality of our products, the safety of our workplace and
                the way we support one another.
              </p>
              <p>
                Let us keep listening, learning and sharing ideas across
                departments. When we work together with purpose, we build a
                stronger MCL for our customers, our colleagues and the future.
              </p>
              <div className="ceo-signoff">
                <span className="signature-line" />
                Office of the CEO
                <span>Leadership message · awaiting approval</span>
              </div>
            </div>
          </section>
        </div>
        <section className="culture-section">
          <div className="wide-section-heading">
            <div>
              <span className="section-kicker">LIFE AT METAL CROWNS</span>
              <h2>Our culture. Our everyday choices.</h2>
            </div>
            <p>It’s how we work together that makes the difference.</p>
          </div>
          <div className="culture-grid">
            <div className="culture-photo">
              <img
                src="/team.jpg"
                alt="Colleagues sharing ideas around a table"
              />
              <div>
                <span>TOGETHER, WE GO FURTHER</span>
                <h3>
                  Many roles.
                  <br />
                  One shared purpose.
                </h3>
              </div>
            </div>
            <div className="culture-values">
              {[
                {
                  icon: ShieldCheck,
                  title: "Care in every action",
                  text: "Look out for one another, take safety seriously and create a workplace where people feel supported.",
                },
                {
                  icon: Handshake,
                  title: "Strength in collaboration",
                  text: "Share what you know. Listen to different perspectives. Make every handover and conversation count.",
                },
                {
                  icon: Lightbulb,
                  title: "Room for better ideas",
                  text: "Ask questions, learn from experience and find practical ways to improve quality and the way we work.",
                },
                {
                  icon: Heart,
                  title: "Pride in our people",
                  text: "Recognise effort, celebrate progress and appreciate the colleagues who make your workday better.",
                },
              ].map((v) => (
                <article key={v.title}>
                  <v.icon size={26} />
                  <div>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </article>
              ))}
              <Link className="culture-cta" href="/requests?type=appreciation">
                Recognise a colleague <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        <div className="help-band">
          <section className="home-help-section">
            <div className="help-photo">
              <img src="/safety.jpg" alt="Skilled work and equipment support" />
            </div>
            <div className="home-help-copy">
              <span className="section-kicker">MCL HELP CENTRE</span>
              <h2>
                A little support.
                <br />A better workday.
              </h2>
              <p>
                From access issues to HR questions, find the right people and a
                clear next step.
              </p>
              <div className="help-link-grid">
                <Link href="/requests?type=it">
                  <Wrench size={21} />
                  Get IT support
                  <ArrowRight size={18} />
                </Link>
                <Link href="/people/staff-directory?q=Human%20Resources">
                  <Users size={21} />
                  Talk to HR
                  <ArrowRight size={18} />
                </Link>
                <Link href="/resources/hr-forms">
                  <FileText size={21} />
                  Find a form
                  <ArrowRight size={18} />
                </Link>
                <Link href="/help">
                  <BookOpen size={21} />
                  Browse help topics
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ScrollMotion>
  );
}
