interface HighlightCardProps {
  label: string;
  value: string;
  icon: string;
}

function HighlightCard({ label, value, icon }: HighlightCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#111D31] p-5 transition hover:border-sky-400/30">
      {/* Metric icon */}
      <span className="text-xl" aria-hidden="true">
        {icon}
      </span>

      {/* Metric label */}
      <p className="mt-5 text-sm text-slate-400">{label}</p>

      {/* Metric value */}
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </article>
  );
}

export default HighlightCard;
