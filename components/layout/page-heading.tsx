import Link from "next/link";
import { ChevronRight } from "lucide-react";
export function PageHeading({
  title,
  description,
  section,
}: {
  title: string;
  description: string;
  section?: string;
}) {
  return (
    <div className="content-heading">
      <div className="content-breadcrumb">
        <Link href="/">Home</Link>
        <ChevronRight size={13} />
        {section && (
          <>
            <span>{section}</span>
            <ChevronRight size={13} />
          </>
        )}
        <span>{title}</span>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
