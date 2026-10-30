"use client";
import { useEffect, useRef } from "react";
import "./closure-artwork.css";

const crownEdge = Array.from({ length: 84 }, (_, i) => {
  const a = (i * Math.PI) / 42;
  const r = i % 4 === 1 || i % 4 === 2 ? 112 : 104;
  return `${Math.cos(a) * r},${Math.sin(a) * r}`;
}).join(" ");

/** Decorative product-inspired artwork; no additional information or controls. */
export function ClosureArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        ref.current?.classList.toggle("is-in-view", entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="closure-artwork" aria-hidden="true">
      <svg viewBox="0 0 640 560" fill="none" focusable="false">
        <defs>
          <radialGradient id="closure-halo">
            <stop stopColor="#225e9a" stopOpacity=".3" />
            <stop offset="1" stopColor="#173e70" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="closure-gold"
            x1="-100"
            y1="-110"
            x2="100"
            y2="110"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f3dcad" />
            <stop offset=".3" stopColor="#a18453" />
            <stop offset=".55" stopColor="#edcf93" />
            <stop offset="1" stopColor="#6a5433" />
          </linearGradient>
          <linearGradient
            id="closure-blue"
            x1="-80"
            y1="-90"
            x2="80"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5790c6" />
            <stop offset=".32" stopColor="#235e9a" />
            <stop offset=".7" stopColor="#143e76" />
            <stop offset="1" stopColor="#0a254c" />
          </linearGradient>
          <linearGradient
            id="closure-plastic"
            x1="-60"
            y1="-50"
            x2="60"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#eef4f8" />
            <stop offset=".5" stopColor="#b9cbdc" />
            <stop offset="1" stopColor="#6688aa" />
          </linearGradient>
          <linearGradient
            id="closure-ribbed"
            x1="-60"
            y1="0"
            x2="60"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0a284f" />
            <stop offset=".4" stopColor="#2c6ba6" />
            <stop offset=".7" stopColor="#17477d" />
            <stop offset="1" stopColor="#0a2446" />
          </linearGradient>
          <pattern
            id="closure-dots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".8" fill="#7ca3cc" fillOpacity=".17" />
          </pattern>
        </defs>
        <rect
          x="45"
          y="35"
          width="550"
          height="490"
          fill="url(#closure-dots)"
        />
        <ellipse
          cx="320"
          cy="280"
          rx="300"
          ry="250"
          fill="url(#closure-halo)"
        />
        <g stroke="#7397c1" strokeOpacity=".17">
          <path d="M58 280H582M320 47V513" strokeDasharray="3 9" />
          <circle cx="320" cy="280" r="228" />
          <ellipse
            cx="320"
            cy="280"
            rx="262"
            ry="147"
            transform="rotate(-30 320 280)"
          />
          <ellipse
            cx="320"
            cy="280"
            rx="230"
            ry="156"
            transform="rotate(38 320 280)"
          />
        </g>
        <g className="closure-orbit" style={{ transformOrigin: "320px 280px" }}>
          <circle
            cx="320"
            cy="280"
            r="183"
            stroke="#6f9dcd"
            strokeOpacity=".32"
            strokeDasharray="2 12"
          />
          <path
            d="M320 97A183 183 0 0 1 493 220"
            stroke="#c9ac78"
            strokeOpacity=".6"
          />
          <circle cx="320" cy="97" r="4" fill="#d2b788" />
          <circle cx="320" cy="463" r="3" fill="#7ba9d7" />
        </g>
        <g stroke="#668bb7" strokeOpacity=".35">
          <path d="M71 177V145H103M537 383H569V415M98 465H130M114 449V481M526 100H552M539 87V113" />
          <path
            d="M114 145H173L210 181M436 392L478 429H535"
            strokeDasharray="3 6"
          />
        </g>
        <g transform="translate(320 280)">
          <g className="closure-main-float">
            <ellipse
              cy="35"
              rx="121"
              ry="113"
              fill="#000b19"
              fillOpacity=".4"
            />
            <polygon
              points={crownEdge}
              fill="url(#closure-gold)"
              stroke="#b59b6a"
              strokeWidth=".7"
            />
            {Array.from({ length: 21 }, (_, i) => (
              <path
                key={i}
                d="M100 -3L109 -3L109 3L100 3Z"
                transform={`rotate(${(i * 360) / 21})`}
                fill={i % 3 === 0 ? "#f4dfb3" : "#6b5639"}
                opacity=".55"
              />
            ))}
            <circle
              r="96"
              fill="url(#closure-blue)"
              stroke="#6597c4"
              strokeWidth="1.2"
            />
            <circle r="85" stroke="#78a6d1" strokeOpacity=".35" />
            <circle r="80" stroke="#071d3b" strokeOpacity=".5" />
            <path
              d="M-72 -28A78 78 0 0 1 43 -65"
              stroke="#c2dcf1"
              strokeOpacity=".32"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle r="34" stroke="#8eadd1" strokeOpacity=".28" />
            <path
              d="M-20 3L-24 -13L-8 -3L0 -20L8 -3L24 -13L20 3ZM-17 12H17"
              stroke="#b6cde4"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g transform="translate(491 139) rotate(-18)">
          <g className="closure-small-float">
            <ellipse cy="30" rx="66" ry="30" fill="#001225" opacity=".5" />
            <path
              d="M-56 -15V27C-56 61 56 61 56 27V-15Z"
              fill="url(#closure-ribbed)"
              stroke="#487aab"
              strokeOpacity=".45"
            />
            {Array.from({ length: 15 }, (_, i) => (
              <path
                key={i}
                d={`M${-49 + i * 7} -8V34`}
                stroke="#9eb8d4"
                strokeOpacity={i % 2 === 0 ? ".23" : ".1"}
              />
            ))}
            <ellipse cy="-15" rx="56" ry="27" fill="#245992" stroke="#6994be" />
            <ellipse
              cy="-15"
              rx="48"
              ry="20"
              fill="#1b477b"
              stroke="#6d96bf"
              strokeOpacity=".45"
            />
            <path
              d="M-35 -21Q-7 -38 26 -27"
              stroke="#a8c5e0"
              strokeOpacity=".35"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g transform="translate(145 422) rotate(17)">
          <g className="closure-small-float closure-white-float">
            <ellipse cy="20" rx="61" ry="34" fill="#001225" opacity=".4" />
            <path
              d="M-51 -11V17C-51 48 51 48 51 17V-11Z"
              fill="url(#closure-plastic)"
              stroke="#b1c5d8"
              strokeOpacity=".5"
            />
            {Array.from({ length: 13 }, (_, i) => (
              <path
                key={i}
                d={`M${-44 + i * 7.3} -5V23`}
                stroke="#486989"
                strokeOpacity=".25"
              />
            ))}
            <ellipse cy="-11" rx="51" ry="25" fill="#d3e0eb" stroke="#e8f1f8" />
            <ellipse cy="-11" rx="42" ry="17" fill="#829db7" />
            <ellipse cy="-8" rx="33" ry="10" fill="#9fb7cd" />
            <path
              d="M-34 -13Q0 -32 35 -13"
              stroke="#eef5fa"
              strokeOpacity=".65"
              strokeWidth="2"
            />
          </g>
        </g>
        <g className="closure-spark" fill="#d8bf91">
          <circle cx="163" cy="125" r="2.5" />
          <circle cx="543" cy="320" r="2" />
          <circle cx="390" cy="472" r="2.5" />
        </g>
        <g fill="#91b2d5" fillOpacity=".6">
          <circle cx="77" cy="318" r="2" />
          <circle cx="412" cy="69" r="1.5" />
          <circle cx="262" cy="501" r="1.5" />
        </g>
      </svg>
    </div>
  );
}
