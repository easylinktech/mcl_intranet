"use client";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { events } from "@/app/data/content";
import { useLocalRecords } from "@/hooks/use-local-records";
import { PageHeading } from "@/components/layout/page-heading";
export function EventsCalendar() {
  const [month, setMonth] = useState(1);
  const { records, save, ready, error } = useLocalRecords<string>("mcl-rsvps");
  return (
    <div className="portal-page">
      <PageHeading
        title="Events & calendar"
        description="Make time to connect, learn and grow together."
      />
      <div className="event-page-banner">
        <img src="/team.jpg" alt="A team connecting at work" />
        <div>
          <span>MAKE ROOM FOR CONNECTION</span>
          <h2>
            Good things happen
            <br />
            when we come together.
          </h2>
        </div>
      </div>
      <div className="calendar-toolbar">
        <h2>{["October", "November", "December"][month]} 2026</h2>
        <div>
          <button
            className="icon-button"
            aria-label="Previous month"
            disabled={month === 0}
            onClick={() => setMonth(month - 1)}
          >
            <ChevronLeft />
          </button>
          <button
            className="icon-button"
            aria-label="Next month"
            disabled={month === 2}
            onClick={() => setMonth(month + 1)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="event-list">
        {month === 1 ? (
          events.map((e) => (
            <article className="event-full" key={e.title}>
              <span className="event-date">
                <strong>{e.day}</strong>
                <small>{e.month}</small>
              </span>
              <div>
                <span className="resource-label">{e.category}</span>
                <h3>{e.title}</h3>
                <p>
                  {e.time} · {e.place}
                </p>
              </div>
              <button
                disabled={!ready}
                className={
                  records.includes(e.title)
                    ? "secondary-button attending"
                    : "primary-button"
                }
                onClick={() =>
                  save(
                    records.includes(e.title)
                      ? records.filter((t) => t !== e.title)
                      : [...records, e.title],
                  )
                }
              >
                {records.includes(e.title) ? (
                  <>
                    <Check size={18} />
                    Attending · Cancel
                  </>
                ) : (
                  "Count me in"
                )}
              </button>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <CalendarDays size={40} />
            <h3>No scheduled events</h3>
            <p>Browse November for upcoming team activities.</p>
          </div>
        )}
      </div>
      <p className="local-storage-note">
        Your attendance choices are saved in this browser.
      </p>
      {error && <p role="alert">{error}</p>}
    </div>
  );
}
