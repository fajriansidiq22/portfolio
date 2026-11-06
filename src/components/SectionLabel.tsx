interface SectionLabelProps {
  number?: string;
  text: string;
}

export default function SectionLabel({ number, text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 justify-center">
      {number && (
        <span className="text-primary/60 font-mono text-sm">{number}</span>
      )}
      <span className="w-8 h-px bg-primary/40" />
      <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase tracking-[0.2em]">
        {text}
      </span>
    </div>
  );
}
