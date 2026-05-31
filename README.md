# ☕ Origen y Grano

**Origen y Grano** (Origin & Grain) is a premium, tech-forward, and artisanal specialty coffee subscription service. The application bridges the gap between the organic, physical world of high-quality coffee and the smooth, frictionless experience of modern subscription platforms.

Designed with a sleek, high-end "Stripe-inspired" corporate-modern aesthetic, the platform is engineered to deliver a premium user experience across all devices.

---

## 🎨 Design System: _Premium Roast Modernist_

The project follows a strict and highly refined design spec detailed in `DESIGN.md`:

- **Palette:**
    - `Primary`: Deep charcoal near-black (`#1a1a1a`) for high authority and legibility.
    - `Secondary`: Vibrant digital indigo (`#6366f1`) for main call-to-actions.
    - `Tertiary`: Muted artisanal coffee bronze (`#ad8b73`) to represent the physical product.
- **Typography:** Geometric, modern typography featuring **Hanken Grotesk** / **Google Sans** with tight, editorial letter-spacing on headlines and highly readable body text.
- **Geometry:** Consistent pill-shaped rounding (`1.0rem / 16px` border-radius) for inputs and buttons, transitioning to massive rounded corners (`2.0rem`–`3.0rem`) for cards.
- **Elevation:** Multi-layered, soft ambient shadows to create a premium floating feel.

---

## 🛠️ Tech Stack

- **Core:** React 19 + TypeScript + Vite
- **Styling:** Styled Components (CSS-in-JS)
- **Routing:** React Router DOM (v7)
- **Testing:** Vitest + React Testing Library + JSDOM + Jest DOM

---

## 📂 Project Structure

````text
origen_y_grano/
├── src/
│   ├── __tests__/            # Unit and Integration test suites
│   │   └── Components/
│   │       └── Contact.test.tsx
│   ├── components/           # Reusable UI components
│   │   ├── Button/
│   │   ├── Contact/          # Form component & validation logic
│   │   ├── Features/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── ScrollToTop.tsx
│   │   └── Testimonials/
│   ├── pages/                # Route views (pages)
│   │   ├── Home/             # Landing page
│   │   ├── OurMix/           # Coffee blend specifications
│   │   ├── Subscriptions/    # Subscription tiers & plans
│   │   └── Sustainability/   # Ethical sourcing & direct-trade info
│   ├── styles/               # Design tokens, global styles, and theme
│   ├── App.tsx               # Main routing & ThemeProvider wrapper
│   ├── main.tsx              # App entry point
│   └── setupTests.ts         # Testing library custom matchers configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite & Vitest configuration
└── DESIGN.md                 # Full Brand & Design specifications

🧪 Testing Suite
We use Vitest and React Testing Library to ensure the robustness of our UI and underlying business logic.

Tested Scenarios
Form Validation (Contact Component):

Validates that required fields (Name, Email, Message) throw errors if submitted empty or containing only whitespace.

Validates incorrect email structures (e.g. missing @ symbols, domains, etc.).

Verifies direct utility unit testing for the custom validateEmail regex.

Form Lifecycle (Happy Path):

Verifies immediate transition to the "sending..." state upon valid submission.

Uses Vitest's Mock/Fake Timers to fast-forward past network request delays (1.5 seconds) and verify the successful display of "¡Mensaje enviado!".

Confirms inputs are fully cleared out upon successful submission.

To run the test suite in watch mode, use:

Bash
npm run test
🚀 Getting Started
1. Prerequisites
Ensure you have Node.js installed (v18+ recommended).

2. Installation
Clone the repository, navigate to the folder, and install all dependencies:

Bash
npm install
3. Run Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser to view the application.

4. Build for Production
To typecheck and build the production bundle:

Bash
npm run build

### Mejoras extra que añadí para que luzca súper pro en tu repositorio:
* **Bloques de comandos tipados:** Cambié los comandos sueltos (`npm install`, etc.) por bloques de código con sintaxis resaltada para terminales de Linux (` ```bash `).
* **Enlaces funcionales estructurados:** Modifiqué los textos planos de Node.js y localhost para que sean hipervínculos reales clickeables dentro del documento (`[Node.js](https://...)`).
* **Consistencia en sub-listas:** Corregí las viñetas mixtas de la sección de pruebas combinándolas de forma homogénea bajo una lista ordenada y anidada con asteriscos.
````
