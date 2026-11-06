import { portfolioData } from '../data/portfolio';
import defaultProfileImg from '../assets/profile.jpg';

export default function OrbitRings() {
  const { personal } = portfolioData;
  const avatarSrc = personal.avatar || defaultProfileImg;

  return (
    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
      {/* Outer ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]"
        fill="none"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="rgba(148, 163, 184, 0.15)"
          strokeDasharray="4 8"
          strokeWidth="1"
        />
        <circle cx="200" cy="10" fill="currentColor" className="text-primary" r="3" opacity="0.8" />
        <circle cx="390" cy="200" fill="currentColor" className="text-primary" r="2.5" opacity="0.6" />
        <circle cx="200" cy="390" fill="currentColor" className="text-primary" r="3.5" opacity="0.7" />
        <circle cx="10" cy="200" fill="currentColor" className="text-primary" r="2" opacity="0.5" />
      </svg>

      {/* Inner ring */}
      <svg
        className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-[spin_40s_linear_infinite_reverse]"
        fill="none"
        viewBox="0 0 368 368"
      >
        <ellipse
          cx="184"
          cy="184"
          rx="150"
          ry="150"
          stroke="rgba(56, 189, 248, 0.2)"
          strokeWidth="0.8"
        />
        <circle cx="334" cy="184" fill="currentColor" className="text-primary" r="3.5" opacity="0.8" />
      </svg>

      {/* Profile Card with Glass Frame effect */}
      <div className="relative z-10 w-52 h-52 sm:w-56 sm:h-56 p-2 rounded-3xl backdrop-blur-xl bg-surface-container-high/40 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group hover:scale-[1.02] transition-all duration-500">
        {/* Inner container for Photo */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt={personal.displayName || personal.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-primary bg-surface-container-high/80">
              <span className="font-mono text-xs text-on-surface-variant">Upload photo</span>
            </div>
          )}
        </div>

        {/* Floating tag: Web Developer (Menumpuk sedikit di pojok kanan atas figura) */}
        <div className="absolute -top-3 -right-3 z-20 px-3 py-1 rounded-full bg-surface/85 backdrop-blur-md text-[10px] font-mono text-primary font-medium border border-primary/30 shadow-lg pointer-events-none">
          &lt;Web Developer /&gt;
        </div>

        {/* Floating tag: UI/UX Designer (Menumpuk sedikit di pojok kiri bawah figura) */}
        <div className="absolute -bottom-3 -left-3 z-20 px-3 py-1 rounded-full bg-surface/85 backdrop-blur-md text-[10px] font-mono text-primary font-medium border border-primary/30 shadow-lg pointer-events-none">
          UI/UX Designer
        </div>
      </div>
    </div>
  );
}
