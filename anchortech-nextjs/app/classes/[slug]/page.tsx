import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/home/Section";
import RegisterForm from "@/components/classes/RegisterForm";
import {
  scheduledClasses,
  getScheduledClass,
  directionsUrl,
} from "@/lib/data/classes";

export function generateStaticParams() {
  return scheduledClasses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = getScheduledClass(slug);
  if (!cls) return { title: "Class not found" };
  return {
    title: `${cls.title} — Technology Classes`,
    description: `${cls.title} at ${cls.venue}, ${cls.dateLabel}, ${cls.timeLabel}. First class free, then $15. Register online in under a minute.`,
  };
}

export default async function ClassDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cls = getScheduledClass(slug);
  if (!cls) notFound();

  return (
    <>
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:px-10 md:pt-32">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // class details
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {cls.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text/70">
            {cls.description}
          </p>
        </div>
      </section>

      <Section id="details" index={1} label="about this class">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
              You will learn
            </h2>
            <ul className="mt-4 space-y-2 leading-relaxed text-text/80">
              {cls.learn.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
              Good to know
            </h2>
            <p className="mt-4 leading-relaxed text-text/80">
              Bring your phone or tablet and your questions. Taught by Josh
              Boepple of AnchorTech Innovations. Small class, {cls.capacity}{" "}
              seats, so everyone gets help.
            </p>
            <span className="mt-5 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-primary">
              FIRST CLASS FREE · THEN $15
            </span>
          </div>

          <div className="rounded-md border border-muted/30 bg-white p-6">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
              When and where
            </h2>
            <p className="mt-4 leading-relaxed text-text/80">
              <strong className="text-text">
                {cls.dateLabel} · {cls.timeLabel}
              </strong>
              <br />
              {cls.venue}
              {cls.room ? `, ${cls.room}` : ""}
              <br />
              {cls.address}
            </p>
            <a
              href={directionsUrl(cls)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md bg-primary px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-bold text-white transition hover:opacity-90"
            >
              Get directions
            </a>

            <h2 className="mt-10 font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
              Register
            </h2>
            <RegisterForm classSlug={cls.slug} classTitle={cls.title} />
          </div>
        </div>

        <p className="mt-12">
          <Link href="/classes" className="font-semibold text-primary underline">
            Back to all classes
          </Link>
        </p>
      </Section>
    </>
  );
}
