---
name: lovable-design
description: Design system guidelines for beautiful React/Vite/Tailwind apps
---

## Design System Is Everything

The design system is your foundation. You should NEVER write custom styles in components. Instead:

### Core Principles

- **Use design system tokens** - Customize UI components (including shadcn) to make them beautiful with correct variants
- **Never use direct colors** - Avoid classes like `text-white`, `bg-white`, `text-black`, `bg-black`
- **Use semantic tokens** - Define colors, gradients, fonts in `index.css` and `tailwind.config.ts`
- **Maximize reusability** - Leverage the design system across all components

### Design Token Strategy

```css
/* index.css - Define design tokens with your project's theme */
:root {
  /* Color palette - choose colors that fit your project */
  --primary: [hsl values for main brand color];
  --primary-glow: [lighter version of primary];

  /* Gradients - create beautiful gradients using your color palette */
  --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
  --gradient-subtle: linear-gradient(180deg, [background-start], [background-end]);

  /* Shadows - use your primary color with transparency */
  --shadow-elegant: 0 10px 30px -10px hsl(var(--primary) / 0.3);
  --shadow-glow: 0 0 40px hsl(var(--primary-glow) / 0.4);

  /* Animations */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Component Variants

Create variants in components using design system colors:

```tsx
const buttonVariants = cva("...", {
  variants: {
    variant: {
      premium: "[new variant tailwind classes]",
      hero: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    }
  }
});
```

### Color Function Matching

- **ALWAYS check CSS variable format** before using in color functions
- **ALWAYS use HSL colors in index.css**
- If there are RGB colors in index.css, do NOT use them in tailwind.config.ts wrapped in hsl functions (this creates wrong colors)
- Shadcn outline variants are NOT transparent by default - white text will be invisible. Create button variants for all states in the design system.

### Dark/Light Mode

- Pay attention to contrast, color, and typography
- Always generate responsive designs
- Check for white text on white background and vice versa
- Ensure correct styles for each mode

### Beautiful Design Priority

1. Edit `tailwind.config.ts` and `index.css` as often as necessary to avoid boring designs
2. Leverage colors and animations
3. Define ambitious styles and animations in one place
4. Never use explicit classes like `text-white`, `bg-white` in component className props - define them in the design system

### First Impression

For first interactions:
- Take time to think about what the user wants to build
- Write what it evokes and what beautiful designs you can draw inspiration from
- List features, colors, gradients, animations, fonts, and styles
- Start with the design system - ALL styles must be defined there
- Create custom variants for shadcn components using design system tokens
- "Less is more" unless the user asks for a complete business/SaaS landing page
- Keep explanations very short!
