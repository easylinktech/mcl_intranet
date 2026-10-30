"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, Send, ShieldCheck } from "lucide-react";
import { directory } from "@/app/data/directory";
import { useLocalRecords } from "@/hooks/use-local-records";
import { PageHeading } from "@/components/layout/page-heading";
import { Dialog } from "@/components/ui/dialog";
type RequestRecord = { id: string; type: string; detail: string; date: string };
export function RequestCentre() {
  const params = useSearchParams();
  const [type, setType] = useState("");
  const [saved, setSaved] = useState(false);
  const { records, save, ready, error } =
    useLocalRecords<RequestRecord>("mcl-requests");
  useEffect(() => {
    setType(
      (
        {
          leave: "Leave request",
          it: "IT support",
          appreciation: "Appreciation",
        } as Record<string, string>
      )[params.get("type") || ""] || "",
    );
  }, [params]);
  return (
    <div className="portal-page">
      <PageHeading
        title="My requests"
        description="Prepare requests, plan handovers and recognise the people who make a difference."
      />
      <div className="information-note">
        <ShieldCheck size={21} />
        <span>
          Requests are saved on this device. Share them through your approved
          internal channel when you need action or approval.
        </span>
      </div>
      <div className="request-actions">
        {["Leave request", "IT support", "Appreciation"].map((t) => (
          <button
            className="secondary-button"
            key={t}
            disabled={!ready}
            onClick={() => {
              setType(t);
              setSaved(false);
            }}
          >
            + {t}
          </button>
        ))}
      </div>
      {saved && (
        <p role="status" className="success-message">
          Saved. Your request is listed below.
        </p>
      )}
      {error && <p role="alert">{error}</p>}
      <section className="requests-panel">
        <h2>Your saved requests</h2>
        {records.length ? (
          records.map((r) => (
            <article className="request-row" key={r.id}>
              <span className="library-icon">
                <FileText size={24} />
              </span>
              <div>
                <h3>{r.type}</h3>
                <p>{r.detail}</p>
                <small>
                  {r.id} · {r.date}
                </small>
              </div>
              <span className="request-status">Saved locally</span>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <FileText size={40} />
            <h3>A fresh start</h3>
            <p>Your requests will appear here after you save one.</p>
          </div>
        )}
      </section>
      {type && (
        <Dialog title={type} onClose={() => setType("")}>
          <form
            className="modal-content request-form"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const detail =
                type === "Leave request"
                  ? `${f.get("leaveType")}: ${f.get("start")} to ${f.get("end")} — ${f.get("detail")}`
                  : type === "Appreciation"
                    ? `${f.get("colleague")} — ${f.get("detail")}`
                    : `${f.get("category")} — ${f.get("detail")}`;
              if (
                save([
                  {
                    id: "MCL-" + Date.now(),
                    type,
                    detail,
                    date: new Date().toLocaleDateString("en-GB", {
                      timeZone: "Africa/Nairobi",
                    }),
                  },
                  ...records,
                ])
              ) {
                setType("");
                setSaved(true);
              }
            }}
          >
            <span className="resource-label">MCL WORKSPACE</span>
            <h2>{type === "Appreciation" ? "Make someone’s day" : type}</h2>
            <p>
              {type === "Appreciation"
                ? "Recognise a colleague who went the extra mile."
                : "Complete the details to prepare your request."}
            </p>
            {type === "Leave request" && (
              <>
                <label>
                  Leave type
                  <select name="leaveType">
                    <option>Annual leave</option>
                    <option>Personal leave</option>
                    <option>Study leave</option>
                  </select>
                </label>
                <div className="date-inputs">
                  <label>
                    Start date
                    <input
                      name="start"
                      type="date"
                      required
                      onChange={(e) => {
                        const end = e.currentTarget.form?.elements.namedItem(
                          "end",
                        ) as HTMLInputElement;
                        end.min = e.target.value;
                        if (end.value < e.target.value) end.value = "";
                      }}
                    />
                  </label>
                  <label>
                    End date
                    <input name="end" type="date" required />
                  </label>
                </div>
              </>
            )}
            {type === "IT support" && (
              <label>
                Category
                <select name="category">
                  <option>Computer or device</option>
                  <option>Network access</option>
                  <option>Software support</option>
                  <option>Other</option>
                </select>
              </label>
            )}
            {type === "Appreciation" && (
              <label>
                Colleague
                <select name="colleague">
                  {directory
                    .filter((p) => p.kind === "Person")
                    .map((p) => (
                      <option key={p.name}>{p.name}</option>
                    ))}
                </select>
              </label>
            )}
            <label>
              {type === "Appreciation" ? "Your message" : "Details"}
              <textarea
                name="detail"
                required
                maxLength={1000}
                rows={4}
                placeholder="Tell us a little more…"
              />
            </label>
            <p className="form-note">
              <ShieldCheck size={17} />
              Saved in this browser. Nothing is sent automatically.
            </p>
            {error && <p role="alert">{error}</p>}
            <button className="primary-button" type="submit" disabled={!ready}>
              Save {type === "Appreciation" ? "shout-out" : "request"}{" "}
              <Send size={18} />
            </button>
          </form>
        </Dialog>
      )}
    </div>
  );
}
