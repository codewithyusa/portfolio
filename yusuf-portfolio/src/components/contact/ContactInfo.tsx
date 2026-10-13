import type { ReactNode } from "react";

interface InfoItem {
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
}

const svg = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const items: InfoItem[] = [
  {
    label: "Email",
    value: "yusufumer26@gmail.com",
    href: "mailto:yusufumer26@gmail.com",
    icon: (
      <svg {...svg}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/yusuf-umer-868b0735a",
    icon: (
      <svg {...svg}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="8" y1="11" x2="8" y2="17" />
        <line x1="8" y1="7.5" x2="8" y2="7.5" />
        <path d="M12 17v-6m0 3c0-2 4-3 4 0v3" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    icon: (
      <svg {...svg}>
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

const cardClass =
  "group flex items-center gap-5 rounded-2xl border border-border bg-surface p-6 transition hover:border-accent hover:shadow-lg";

function Card({ label, value, href, icon }: InfoItem) {
  const content = (
    <>
      <span className="grid size-14 shrink-0 place-items-center rounded-full bg-border text-accent transition group-hover:bg-accent group-hover:text-white">
        {icon}
      </span>
      <span>
        <span className="block font-semibold">{label}</span>
        <span className="text-sm text-muted">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cardClass}>
      {content}
    </a>
  ) : (
    <div className={cardClass}>{content}</div>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <Card key={item.label} {...item} />
      ))}
    </div>
  );
}