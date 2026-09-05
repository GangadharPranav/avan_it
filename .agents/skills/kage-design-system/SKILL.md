---
name: kage-design-system
description: High-end web UI/UX design skill inspired by Meng To's Kage experience and modern Agent Skills for building visually stunning, dark glassmorphic, micro-animated web interfaces with responsive layouts and crisp typography.
---

# Kage Design System & High-End Web Architecture Skill

This skill defines the technical standards, visual aesthetics, and component architecture for creating luxury-grade, highly responsive web interfaces inspired by **Meng To's Kage** project and modern AI agent design skills.

---

## 1. Design Aesthetics & Visual Tokens

### Core Color Palette (Obsidian & Neon Spectrum)
- **Deep Space Background:** `--ink: #05070a`, `--ink-2: #0a0e12`, `--ink-raised: #12161f`
- **Bone White & Muted Text:** `--bone: #dfe7e0`, `--bone-dim: #aab4ad`, `--muted: #78837c`
- **Neon Cyan Accent:** `--cyan: #00f0ff` (Glow: `rgba(0, 240, 255, 0.35)`)
- **Quantum Violet Accent:** `--violet: #8a2be2` (Glow: `rgba(138, 43, 226, 0.35)`)
- **Vermilion & Ember Accent:** `--vermilion: #e0231c`, `--ember: #ff5a3c`
- **Emerald Glow:** `--emerald: #00ffaa`
- **Gold Accent:** `--gold: #ffd700`

### Glassmorphism & Surface Tokens
- **Glass Panel:** `background: rgba(14, 18, 24, 0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(223, 231, 224, 0.08);`
- **Card Hover:** `border-color: rgba(0, 240, 255, 0.3); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 240, 255, 0.15); transform: translateY(-4px);`

### Typography Scaling & Hierarchy
- **Font Stack:** `'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif`
- **Monospace Accent:** `'JetBrains Mono', monospace`
- **Hero Title:** `font-size: clamp(32px, 5vw, 64px); line-height: 1.1; letter-spacing: -0.02em;`
- **Section Heading:** `font-size: clamp(24px, 3.5vw, 42px); line-height: 1.2;`
- **Body Large:** `font-size: clamp(15px, 1.1vw, 18px); line-height: 1.7; color: var(--bone-dim);`

---

## 2. Micro-Animations & Interactivity

1. **Ambient Lighting Blobs:**
   - Soft background radial gradients that gently pulse and drift behind key hero and feature sections.
2. **Reveal on Scroll (`[data-rv]`):**
   - Elements smoothly fade and slide up (`transform: translate3d(0, 24px, 0)`) as they enter the viewport using `IntersectionObserver`.
3. **Interactive Badges & Pill Tabs:**
   - Smooth active state indicators with pill highlights (`cubic-bezier(0.16, 1, 0.3, 1)`).
4. **Custom Cursor & Hover Cues:**
   - Micro-scaling and magnetic hover states on links, primary buttons, and media previews.

---

## 3. Implementation Guidelines for AVAN IT Solutions

When redesigning the website using this skill:
1. **Sanitize Content:** Remove all third-party corporate references (Cognizant, Wipro, TCS) and replace with original AVAN IT enterprise value propositions.
2. **Ensure Responsive Grid Systems:** Use CSS Grid and Flexbox with `minmax()` and `clamp()` to guarantee flawless display on screens from 320px to 2560px.
3. **Seamless Navigation & Page Mapping:** Ensure the dynamic header/footer links every single root page, `/careers/`, `/learning/`, and `/publications/` page logically.
4. **Performance & Fallbacks:** Always provide pure CSS fallback states for any complex canvas/ambient FX.
