export default function CosmicBackground() {
  // Hanya 2 komet halus dengan interval berkala dan start di luar layar
  const comets = [
    { top: '-60px', right: '15%', duration: '11s', delay: '1s', width: '130px' },
    { top: '22%', right: '-60px', duration: '15s', delay: '6.5s', width: '120px' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary cosmic glow */}
      <div className="absolute -top-32 left-1/4 w-[480px] h-[480px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[140px] transition-colors duration-500" />

      {/* Secondary cosmic glow */}
      <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-secondary/8 dark:bg-secondary/4 rounded-full blur-[160px] transition-colors duration-500" />

      {/* Bottom cosmic glow */}
      <div className="absolute bottom-10 left-1/3 w-[380px] h-[380px] bg-primary/8 dark:bg-primary/4 rounded-full blur-[130px] transition-colors duration-500" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(212,228,250,0.04)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

      {/* Falling comets / shooting stars (hanya 2 komet, muncul halus & melesat mulus) */}
      <div className="absolute inset-0 overflow-hidden">
        {comets.map((comet, idx) => (
          <div
            key={idx}
            className="comet-trail"
            style={{
              top: comet.top,
              right: comet.right,
              width: comet.width,
              animationDuration: comet.duration,
              animationDelay: comet.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
