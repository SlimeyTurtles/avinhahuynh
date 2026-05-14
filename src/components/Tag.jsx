const styles = {
  "Full Stack": { text: "text-emerald-700", bar: "bg-emerald-500" },
  "Web development": { text: "text-emerald-700", bar: "bg-emerald-500" },
  DevOps: { text: "text-orange-700", bar: "bg-orange-500" },
  "Machine Learning": { text: "text-violet-700", bar: "bg-violet-500" }
};

const sizes = {
  sm: { text: "text-[10px] tracking-[0.14em]", bar: "w-2 h-[2px]", gap: "gap-1.5" },
  md: { text: "text-[11px] tracking-[0.16em]", bar: "w-3 h-[2px]", gap: "gap-2" },
  lg: { text: "text-xs tracking-[0.18em]", bar: "w-4 h-[2px]", gap: "gap-2.5" }
};

const Tag = ({ label, size = "md", className = "" }) => {
  const s = styles[label];
  const sz = sizes[size] || sizes.md;
  if (!s) return null;
  return (
    <span className={`inline-flex items-center font-semibold uppercase ${s.text} ${sz.text} ${sz.gap} ${className}`}>
      <span className={`${s.bar} ${sz.bar}`} />
      {label}
    </span>
  );
};

export default Tag;
