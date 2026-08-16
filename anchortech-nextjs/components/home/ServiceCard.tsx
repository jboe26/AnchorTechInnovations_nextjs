type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-anchor-slate/30 bg-white/[0.03] p-6 transition hover:border-anchor-accent/60 hover:bg-white/[0.05]">
      <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-anchor-paper">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-anchor-paper/80">
        {description}
      </p>
    </div>
  );
}
