interface StatCardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export default function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="p-4 rounded-xl bg-surface-container/60 backdrop-blur-sm border border-outline-variant/20 flex flex-col gap-2">
      {icon && <div className="text-primary/70">{icon}</div>}
      <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest">{label}</p>
      <p className="text-sm text-on-surface font-medium">{value}</p>
    </div>
  );
}
