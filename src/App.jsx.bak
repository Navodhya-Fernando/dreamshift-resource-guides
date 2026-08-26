import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Hexagon, Plus, Circle, Cpu } from "lucide-react";
import { getGuideForPath } from "./routes";

/* ── Custom UI/UX Styles ── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

  :root {
    --bg: #24101a;
    --layer: #411c30;
    --gold: #f6b900;
    --white: #ffffff;
    --muted: rgba(255,255,255,0.6);
    --subtle: rgba(255,255,255,0.1);
    --border: rgba(246,185,0,0.25);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body, #rg-root {
    background: var(--bg);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.7;
    overflow-x: hidden;
  }

  .rg-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    width: 0%;
    background: var(--gold);
    z-index: 100;
    box-shadow: 0 0 15px var(--gold);
  }

  .rg-main { max-width: 860px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 10; }
  .rg-section { padding: 140px 0; border-top: 1px solid var(--subtle); }
  .rg-section:first-child { border-top: none; }

  .rg-hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .rg-hero h1 {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(40px, 5vw, 84px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 16px;
    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
    text-wrap: balance;
    white-space: nowrap;
  }
  .rg-gold { color: var(--gold); }
  .rg-hero-sub {
    font-size: clamp(16px, 3vw, 22px);
    color: var(--muted);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 48px;
  }
  .rg-visa-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(246, 185, 0, 0.1);
    border: 1px solid var(--gold);
    color: var(--white);
    padding: 14px 28px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
    box-shadow: 0 0 20px rgba(246, 185, 0, 0.15);
    margin-top: 20px;
  }

  .rg-num {
    font-size: 13px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
    font-weight: 700;
    display: inline-block;
    background: rgba(246,185,0,0.1);
    padding: 6px 16px;
    border-radius: 20px;
  }
  .rg-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(36px, 6vw, 56px);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 40px;
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  .rg-p { color: var(--white); font-size: 18px; margin-bottom: 28px; font-weight: 400; }
  .rg-p:last-child { margin-bottom: 0; }
  .rg-p strong { font-weight: 700; }
  .rg-accent { color: var(--gold); font-weight: 700; }
  .rg-accent-red { color: #ffe500; font-weight: 700; }

  .rg-callout {
    border-left: 3px solid var(--gold);
    padding: 24px 32px;
    background: linear-gradient(90deg, rgba(246,185,0,0.1) 0%, transparent 100%);
    margin: 48px 0;
    border-radius: 0 12px 12px 0;
  }

  .rg-steps { margin: 48px 0; }
  .rg-step {
    display: flex;
    gap: 24px;
    padding: 32px 0;
    border-bottom: 1px solid var(--subtle);
  }
  .rg-step:last-child { border-bottom: none; }
  .rg-step-num {
    flex-shrink: 0;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 700;
    width: 90px;
  }
  .rg-step-body { font-size: 18px; color: var(--white); line-height: 1.7; }
  .rg-step-body blockquote {
    margin-top: 20px;
    padding: 20px 24px;
    background: rgba(0,0,0,0.25);
    border-left: 2px solid var(--gold);
    font-style: italic;
    color: rgba(255,255,255,0.9);
    font-size: 16px;
    border-radius: 0 8px 8px 0;
  }

  .rg-video-label {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
  }
  .rg-video-wrap {
    width: 100%;
    max-width: 340px;
    margin: 0 auto 48px;
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    overflow: hidden;
    background: #000;
    position: relative;
    border: 1px solid var(--subtle);
    box-shadow: 0 24px 48px rgba(0,0,0,0.5);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .rg-video-wrap:hover { transform: translateY(-5px); border-color: var(--gold); }
  .rg-video-wrap iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
  .rg-video-wrap .instagram-media {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-width: none !important;
    min-width: 0 !important;
    margin: 0 !important;
    overflow: hidden !important;
  }
  .rg-video-wrap .instagram-media iframe {
    width: 100% !important;
    height: 100% !important;
  }
  .rg-video-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin: 48px 0;
  }
  .rg-video-col { display: flex; flex-direction: column; align-items: center; }

  .rg-link-list { margin: 48px 0; border-top: 1px solid var(--subtle); }
  .rg-link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 1px solid var(--subtle);
    text-decoration: none;
    color: var(--white);
    font-size: 18px;
    font-weight: 500;
    transition: color 0.2s, padding-left 0.2s;
  }
  .rg-link-item:hover { color: var(--gold); padding-left: 10px; }
  .rg-link-item-left { display: flex; align-items: center; gap: 20px; }
  .rg-link-item-num { font-size: 14px; color: var(--gold); font-weight: 700; width: 30px; }

  .rg-course-category { margin: 64px 0; }
  .rg-course-category-title {
    font-size: 14px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 24px;
    font-weight: 700;
  }
  .rg-course-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 0;
    border-bottom: 1px solid var(--subtle);
    text-decoration: none;
    color: var(--white);
    font-size: 17px;
    transition: color 0.2s;
  }
  .rg-course-item:hover { color: var(--gold); }
  .rg-course-icon { color: var(--gold); margin-top: 4px; flex-shrink: 0; }

  .rg-options { margin: 48px 0; }
  .rg-option {
    display: flex;
    gap: 24px;
    padding: 24px 0;
    border-bottom: 1px solid var(--subtle);
  }
  .rg-option:last-child { border-bottom: none; }
  .rg-option.active {
    background: linear-gradient(90deg, rgba(246,185,0,0.08) 0%, transparent 100%);
    padding: 32px;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
  .rg-option-num { color: var(--gold); font-weight: 700; font-size: 18px; }
  .rg-option-text { font-size: 17px; color: rgba(255,255,255,0.7); }
  .rg-option.active .rg-option-text { color: var(--white); font-weight: 500; }

  .rg-cta {
    text-align: center;
    padding: 160px 0 200px;
  }
  .rg-cta-icon { color: var(--gold); margin: 0 auto 40px; }
  .rg-cta h2 {
    font-size: clamp(30px, 4.2vw, 56px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 28px;
    line-height: 1.06;
    max-width: 18ch;
    margin-left: auto;
    margin-right: auto;
  }
  .rg-cta-desc {
    font-size: 20px;
    max-width: 640px;
    margin: 0 auto 32px;
    color: var(--white);
  }
  .rg-cta-wish {
    font-size: 24px;
    font-weight: 700;
    color: var(--white);
  }
  .rg-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background: var(--gold);
    color: var(--bg);
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 24px 48px;
    border-radius: 50px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    margin-top: 32px;
    box-shadow: 0 10px 30px rgba(246,185,0,0.3);
  }
  .rg-cta-btn:hover { background: #fff; transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255,255,255,0.4); }
  .rg-cta-btn, .rg-cta-btn:focus-visible {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .rg-form {
    max-width: 760px;
    margin: 40px auto 0;
    display: grid;
    gap: 16px;
  }
  .rg-form-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
  .rg-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--subtle);
    color: var(--white);
    padding: 18px 20px;
    border-radius: 16px;
    font: inherit;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }
  .rg-input::placeholder { color: rgba(255,255,255,0.45); }
  .rg-input:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(246,185,0,0.12);
    background: rgba(255,255,255,0.06);
  }

  @media (max-width: 768px) {
    .rg-main { padding: 0 18px; }
    .rg-section { padding: 100px 0; }
    .rg-hero {
      min-height: 88svh;
      padding-top: 24px;
      padding-bottom: 24px;
    }
    .rg-hero h1 {
      font-size: clamp(32px, 8.5vw, 48px);
      line-height: 1.02;
      letter-spacing: -0.04em;
      white-space: normal;
    }
    .rg-hero-sub {
      font-size: 12px;
      letter-spacing: 0.22em;
      margin-bottom: 32px;
    }
    .rg-visa-badge {
      max-width: 100%;
      text-align: center;
      padding: 12px 18px;
      font-size: 12px;
      line-height: 1.4;
    }
    .rg-title {
      font-size: clamp(30px, 8vw, 42px);
      margin-bottom: 28px;
    }
    .rg-p { font-size: 16px; }
    .rg-callout { padding: 20px 20px; margin: 32px 0; }
    .rg-step { gap: 10px; padding: 24px 0; }
    .rg-step-body { font-size: 16px; }
    .rg-step-body blockquote { padding: 16px 18px; font-size: 14px; }
    .rg-course-category { margin: 48px 0; }
    .rg-course-category-title { margin-bottom: 18px; }
    .rg-course-item { font-size: 15px; padding: 16px 0; gap: 12px; }
    .rg-link-item { font-size: 15px; padding: 18px 0; gap: 12px; }
    .rg-link-item-left { gap: 12px; }
    .rg-video-grid { grid-template-columns: 1fr; gap: 48px; }
    .rg-form-row { grid-template-columns: 1fr; }
    .rg-form { margin-top: 28px; gap: 12px; }
    .rg-input { padding: 16px 16px; border-radius: 14px; }
    .rg-step { flex-direction: column; gap: 12px; }
    .rg-step-num { margin-bottom: 8px; }
    .rg-cta { padding: 80px 0 120px; }
    .rg-cta-icon { margin: 0 auto 24px; width: 40px; height: 40px; }
    .rg-cta h2 { font-size: clamp(26px, 7.8vw, 34px); margin-bottom: 18px; max-width: 13ch; line-height: 1.06; }
    .rg-cta-desc { font-size: 15px; margin-bottom: 20px; padding: 0 8px; }
    .rg-cta-wish { font-size: 20px; }
    .rg-cta-btn { padding: 18px 24px; font-size: 13px; margin-top: 20px; width: 100%; max-width: 320px; }
    .rg-cta-btn:last-of-type { max-width: 280px; }
  }
`;

/* ── Ambient Background (Refined Opacity) ── */
const FloatingTechBackground = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    const icons = [Hexagon, Plus, Circle, Cpu];
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 20 + 10,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 30 + 30,
    }));
    setElements(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dreamBg">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#f6b900 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute inset-0 opacity-[0.15]">
        {elements.map((el) => {
          const IconComponent = el.Icon;
          return (
            <motion.div
              key={el.id}
              initial={{ x: `${el.startX}vw`, y: `${el.startY}vh`, rotate: 0 }}
              animate={{ 
                y: [`${el.startY}vh`, `${el.startY - 10}vh`, `${el.startY}vh`],
                rotate: [0, 360]
              }}
              transition={{ duration: el.duration, repeat: Infinity, ease: "linear" }}
              className="absolute text-dreamGold"
            >
              <IconComponent size={el.size} strokeWidth={1} />
            </motion.div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#24101a_85%)]" />
    </div>
  );
};

/* ── Animation Wrappers ── */
const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const VideoEmbed = ({ src, title }) => (
  <div className="rg-video-wrap">
    {src ? (
      <iframe src={src} allow="autoplay; fullscreen; picture-in-picture" title={title} />
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)' }}>
        <PlayCircle size={48} style={{ marginBottom: 16 }} />
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{title} Placeholder</span>
      </div>
    )}
  </div>
);

export default function ResourceGuide() {
  const progressRef = useRef(null);
  const [leadForm, setLeadForm] = useState({ name: "", email: "" });
  const [leadStatus, setLeadStatus] = useState("idle");

  const guide = getGuideForPath(window.location.pathname);
  const GuideContent = guide.Component;

  const handleLeadChange = (event) => {
    const { name, value } = event.target;
    setLeadForm((current) => ({ ...current, [name]: value }));
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setLeadStatus("submitting");

    const payload = {
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      industry: guide.slug,
      sourceUrl: window.location.href,
    };

    try {
      const response = await fetch("/.netlify/functions/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      setLeadStatus("success");
      setLeadForm({ name: "", email: "" });
    } catch (error) {
      setLeadStatus("error");
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = total > 0 ? (scrolled / total) * 100 + "%" : "0%";
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.guide = guide.slug;
  }, [guide.slug]);

  return (
    <>
      <style>{css}</style>
      <div id="rg-root">
        <div ref={progressRef} className="rg-progress" />
        <FloatingTechBackground />
        <GuideContent
          FadeUp={FadeUp}
          VideoEmbed={VideoEmbed}
          leadForm={leadForm}
          leadStatus={leadStatus}
          handleLeadChange={handleLeadChange}
          handleLeadSubmit={handleLeadSubmit}
        />
      </div>
    </>
  );
}
