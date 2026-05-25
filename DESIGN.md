---
name: Premium Roast Modernist
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444748'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b1706'
  on-tertiary-container: '#9e7d66'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#e5bfa5'
  on-tertiary-fixed: '#2b1706'
  on-tertiary-fixed-variant: '#5c412d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Google Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Google Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Google Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Google Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Google Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-upper:
    fontFamily: Google Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  input-text:
    fontFamily: Google Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 160px
  section-gap-sm: 80px
  stack-unit: 8px
---

## Brand & Style
The brand personality for this design system is **Premium, Tech-Forward, and Artisanal**. It bridges the gap between the organic world of specialty coffee and the frictionless efficiency of modern software services. The target audience is the discerning, tech-savvy professional who values both quality and convenience.

The design style is a **Corporate / Modern** hybrid, heavily influenced by the **Stripe aesthetic**. It utilizes expansive white space, ultra-refined typography, and sophisticated layering to create an atmosphere of trustworthiness and luxury. The emotional response should be one of "effortless quality"—a sense that the product is as precisely engineered as the interface itself.

## Colors
This design system uses a high-contrast, sophisticated palette. The **primary color** is a deep, near-black charcoal (#1a1a1a), used for maximum legibility and authority. The **secondary color** is a vibrant, Stripe-inspired indigo (#6366f1), reserved for primary actions and digital-first interactions. The **tertiary color** is a muted coffee-tone bronze (#ad8b73), grounding the tech aesthetic in the physical product.

The **neutral color** is a crisp, cool-toned white (#f8fafc), providing a gallery-like backdrop. Gradients should be used sparingly as "clean offsets," utilizing subtle shifts from surface colors to neutral containers to define sections without heavy lines.

## Typography
The system uses **Hanken Grotesk** (serving as the high-quality alternative to Google Sans) to provide a clean, geometric, and highly legible experience. 

Typography is used to establish a "Strong Visual Hierarchy." Headlines use aggressive negative letter-spacing and tight line-heights for a modern, editorial impact. Body text is prioritized for readability with generous leading. All characters must maintain consistent kerning to ensure a premium feel across localized content.

## Layout & Spacing
This design system utilizes a **12-column fixed grid** for desktop, centering the content at a maximum width of 1200px. On mobile, the layout switches to a fluid single-column model with 20px side margins.

The spacing rhythm is based on an **8px linear scale**. To achieve the "Stripe-style" feel, use extreme vertical padding between sections (`160px` or more) to create a sense of scale and importance. Content should "reflow" by stacking vertically on mobile, with specific attention to the Hero area where text remains center-aligned to maintain the premium landing page focus.

## Elevation & Depth
Depth is created through **soft multi-layered shadows** rather than harsh borders. This "Premium floating feel" is achieved by stacking shadows: 
1. A very soft, wide-spread ambient shadow (low opacity).
2. A slightly more opaque, tighter shadow for definition.

Avoid using shadows on background elements; reserve them for interactive "floating" components like cards, pricing tiers, and modals. Use **tonal layers** for section backgrounds, shifting slightly from pure white to the neutral surface colors to separate content blocks without visual clutter.

## Shapes
The design system follows a consistent **Pill-shaped (1.0rem / 16px)** radius for all primary containers, buttons, and input fields. This specific value is crucial for maintaining a friendly-yet-professional geometric balance that feels contemporary and high-end. Decorative elements, such as background blobs or secondary accent images, may use fully rounded (pill) shapes to provide organic contrast to the structured grid. Large containers like cards utilize even softer rounding (2rem or 3rem) to reinforce the sophisticated, approachable aesthetic.

## Components
- **Buttons:** Primary buttons use the secondary indigo color with a subtle gradient and a multi-layered shadow. They feature high pill-shaped rounding for a modern "touch-ready" look.
- **Inputs:** Following **Material Design outlined** logic, inputs feature a pill-shaped border in a light neutral gray. Upon focus, the border transitions to the secondary indigo.
- **Chips/Badges:** Fully rounded (pill) elements used for subscription frequency or flavor profiles. Use low-saturation background tints of the tertiary color with dark text.
- **Cards:** White backgrounds, no borders, with high-diffuse shadows and significant corner rounding (32px+). Used for coffee product listings and testimonial blocks.
- **Form Validation:** Error states use a high-contrast crimson border and maintain the system's pill-shaped geometry.
- **Progress Bars:** Use a thin, 4px height bar with the secondary indigo color for checkout steps, featuring fully rounded caps.
