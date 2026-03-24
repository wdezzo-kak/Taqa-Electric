# Design System Document: The Grid of Innovation

## 1. Overview & Creative North Star
**Creative North Star: The Industrial Architect**

This design system is a manifestation of technical precision and visionary engineering. Moving beyond standard corporate aesthetics, it adopts a philosophy of **Industrial Minimalism**. We treat the interface not as a collection of pages, but as a high-fidelity blueprint—a living schematic where every pixel serves a structural purpose.

To break the "template" feel, this system leans into **intentional asymmetry**. Layouts should mirror the complexity of a circuit board: dense nodes of information balanced by vast, purposeful voids of "Carbon Black." Elements should overlap with technical confidence—a display heading might bleed over a container boundary, or a monoline icon might sit at the intersection of a grid line, suggesting that the interface is part of a larger, infinite machine.

---

## 2. Colors
Our palette is rooted in deep structural tones, punctuated by high-visibility "Signal" accents that denote energy and action.

*   **Primary (Carbon Black & Slate):** `surface` (#131313) and `surface_container` (#201f1f) form our foundation. These are not flat blacks but deep, dimensional slates that absorb light.
*   **Action (Signal Red):** Use `primary_container` (#d32f2f) for critical interactions. This color is reserved for movement, power-on states, and primary CTAs.
*   **Accents (Electric Gradient):** The transition from `tertiary` (#ffba38) to `primary` (#ffb3ac) represents the flow of electricity. Use this for data visualizations, progress bars, and subtle glows.

### The "No-Line" Rule
Standard 1px borders are prohibited for sectioning. Structural definition must be achieved through **background color shifts**. A `surface_container_low` section sitting against a `surface` background creates a clear boundary without the visual "noise" of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, machined plates. 
*   **Base:** `surface_container_lowest` (#0e0e0e) for background grids.
*   **Panels:** `surface_container` (#201f1f) for main content areas.
*   **Floating Elements:** `surface_bright` (#393939) for cards that require immediate attention.

### Glass & Gradient
To add "soul," use Glassmorphism for floating navigation or overlays. Utilize `surface` colors at 70% opacity with a `20px` backdrop blur. Primary CTAs should never be flat; apply a subtle linear gradient from `primary` to `primary_container` to give them a tactile, illuminated quality.

---

## 3. Typography
The typography strategy juxtaposes "The Machine" with "The Human."

*   **Display & Headlines (Space Grotesk / Rajdhani):** High-tech and square. These should be set with tight letter spacing (-2%) to feel like stamped metal or technical specifications.
*   **Body & Labels (Inter):** Clean, highly legible, and modern. Inter provides the "Human" element—clarity amidst the technical complexity.

**Hierarchy as Identity:**
Use `display-lg` for hero statements, often in all-caps to reinforce the "Industrial" tone. Use `label-sm` for technical metadata, mimicking the fine-print of an engineering schematic.

---

## 4. Elevation & Depth
Depth in this system is an expression of **Tonal Layering**, not physical shadows.

*   **The Layering Principle:** Stack `surface_container_high` (#2a2a2a) on top of `surface_container_low` (#1c1b1b). This creates a natural "lift" based on the physics of light on dark materials.
*   **Ambient Glows:** Standard drop shadows are forbidden. Instead, use "Ambient Glows" for active states. Use the `primary` token (#ffb3ac) at 10% opacity with a massive `40px` blur to simulate the light cast by a high-voltage indicator.
*   **The Ghost Border:** If a container needs a perimeter (e.g., in a complex dashboard), use a `outline_variant` at 15% opacity. This "Ghost Border" provides a hint of structure without breaking the minimalist flow.
*   **Blueprint Backgrounds:** Inject technical depth by applying a subtle 24px grid pattern or circuit trace SVG over the `surface_container_lowest` layer.

---

## 5. Components

### Buttons: The Machined Edge
*   **Structure:** Rectangular with a 45-degree **clipped corner** on the top-right.
*   **Primary:** Background: `primary_container`; Text: `on_primary_container`. State: Subtle `Electric Orange` outer glow on hover.
*   **Secondary:** Ghost style with a `Ghost Border` and `Rajdhani` text in all-caps.
*   **Radius:** All `roundedness` tokens are set to **0px**. Sharp corners are non-negotiable.

### Monoline Icons
Icons must use a consistent 1.5px stroke. Ends of lines should terminate in a "circuit node" (a small 3px solid circle) to reinforce the electrical engineering theme.

### Inputs & Fields
*   **Default:** `surface_container_highest` background with a bottom-only `outline` (#ab8985) stroke.
*   **Focus State:** The bottom stroke transitions to `tertiary` (#ffba38) with a 2px thickness.

### Cards & Lists
*   **No Dividers:** Never use horizontal lines to separate list items. Use `spacing-8` (1.75rem) or subtle alternating background shifts (`surface_container_low` vs `surface_container`).
*   **Technical Tags:** Use small, square-edged chips with `label-sm` text for status indicators (e.g., "STABLE," "ACTIVE," "VOLTAGE HIGH").

---

## 6. Do’s and Don’ts

**Do:**
*   **DO** use whitespace as a structural element. Let the Carbon Black "breathe."
*   **DO** align text to a strict vertical grid to evoke the feeling of a technical manual.
*   **DO** use the Signal Red sparingly—it is a "Warning" or "Action" color, not a decorative one.

**Don’t:**
*   **DON’T** use rounded corners. Everything must feel precision-cut.
*   **DON’T** use standard blue for links. Use `tertiary` (Electric Orange) to signify "Power" and "Connection."
*   **DON’T** use heavy drop shadows. If it doesn't look like it's glowing or machined, it doesn't belong.
*   **DON’T** use 100% opaque borders. They clutter the technical purity of "The Grid."