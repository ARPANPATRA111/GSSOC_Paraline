export default function SectionIntro({ eyebrow, title, body, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-none text-white sm:text-5xl">{title}</h2>
      <p className="mt-5 text-sm leading-7 text-white/62 sm:text-base">{body}</p>
    </div>
  );
}
