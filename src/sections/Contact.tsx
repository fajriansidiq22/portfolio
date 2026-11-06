import { useState } from 'react';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { contact } = portfolioData;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full py-24 overflow-hidden" id="contact">
      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/6 dark:bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <SectionLabel number="06" text="Hubungi Saya" />
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mt-4 tracking-tight">
            Kontak &amp; Kolaborasi
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 max-w-lg mx-auto">
            Mari terhubung untuk peluang kerja sama proyek, posisi full-time, atau diskusi teknologi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-surface-container-low/70 backdrop-blur-md p-6 sm:p-10 border border-outline-variant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Left — info */}
            <div className="flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-on-surface">
                  Mari Terhubung &amp; Berkolaborasi
                </h3>

                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Terbuka untuk tawaran pekerjaan full-time, proyek freelance,
                  atau diskusi seputar peluang kolaborasi baru.
                </p>

                <div className="flex flex-col gap-3.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={15} />
                    </div>
                    <a className="hover:text-primary transition-colors text-xs sm:text-sm font-mono truncate" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={15} />
                    </div>
                    <span className="text-xs sm:text-sm">{contact.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <MessageCircle size={15} />
                    </div>
                    <a
                      className="hover:text-primary transition-colors text-xs sm:text-sm font-mono truncate"
                      href="https://wa.me/6285117075454"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-outline-variant">
                {contact.socials.map((social) => (
                  <a
                    key={social.label}
                    className="px-3.5 py-1.5 rounded-xl bg-surface-container/70 text-xs font-mono text-on-surface hover:text-primary hover:border-primary/40 border border-outline-variant transition-all"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <form
              className="p-5 sm:p-6 rounded-2xl bg-surface-container/50 flex flex-col gap-4 border border-outline-variant"
              onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
                <span className="font-mono text-xs text-primary font-bold">
                  // FORMULIR PESAN
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant">AKTIF</span>
              </div>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider" htmlFor="caller-name">
                  Nama Lengkap / Instansi
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low/80 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant"
                  id="caller-name"
                  placeholder="Nama Anda atau Perusahaan"
                  required
                  type="text"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider" htmlFor="caller-email">
                  Alamat Email
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low/80 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant"
                  id="caller-email"
                  placeholder="email@domain.com"
                  required
                  type="email"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider" htmlFor="caller-msg">
                  Pesan / Rencana Kolaborasi
                </label>
                <textarea
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low/80 text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant resize-none"
                  id="caller-msg"
                  placeholder="Tuliskan pesan Anda..."
                  required
                  rows={3}
                />
              </div>

              {/* Submit */}
              <button
                className={`w-full mt-1 py-3 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-primary/20 text-primary border border-primary/40'
                    : 'bg-primary text-on-primary hover:opacity-90 shadow-sm shadow-primary/20'
                }`}
                type="submit"
              >
                <span>{submitted ? 'Pesan Terkirim ✓' : 'Kirim Pesan'}</span>
                {!submitted && <Send size={14} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
