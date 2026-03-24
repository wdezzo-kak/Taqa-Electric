# Image Generation Prompts for Lovable Agent

Since OpenCode doesn't have native image generation like Lovable, use this guide to create detailed prompts for external image generation tools.

---

## When Images Are Needed

The agent detects these triggers:
- User requests hero images, banners, or feature graphics
- Component needs decorative imagery
- User mentions "generate image" or "create image"
- Design requires visual assets beyond CSS/SVG

---

## Project Style Analysis

Before creating prompts, analyze the project to extract style:

### 1. Extract Colors from tailwind.config.ts

```bash
# Read tailwind config
grep -A 20 "colors:" tailwind.config.ts
grep -A 10 "primary:" tailwind.config.ts
```

Look for:
- Primary, secondary, accent colors
- Brand color palette
- Dark/light mode colors

### 2. Extract Design Tokens from index.css

```bash
# Read CSS variables
grep -E "^  --" index.css
grep -E "hsl\(" index.css
```

Look for:
- HSL color values
- Gradient definitions
- Shadow tokens

### 3. Analyze Existing Components

```bash
# Check hero or landing components
grep -r "hero\|Hero\|banner\|Banner" src/
```

Look for:
- Existing image styles
- Color usage patterns
- Visual style (minimal, bold, gradient-heavy)

---

## Prompt Building Framework

### Base Template

```
[Image type description] with [project-specific colors] color palette,
[style descriptors], [composition], [lighting], [mood], [aspect ratio],
Ultra high resolution, [additional details]
```

### Color Integration

Extract and include project colors:

```
Primary: HSL(210, 100%, 50%)
Accent: HSL(340, 100%, 60%)
Background: HSL(0, 0%, 98%)
```

Example:
```
A hero image featuring a modern SaaS dashboard interface with
blue (#0066FF) and purple (#8B5CF6) gradient accents,
minimalist design, soft shadows, professional lighting,
16:9 aspect ratio, clean and modern style, Ultra high resolution
```

---

## Common Image Types

### 1. Hero Images (16:9, 1920x1080)

**Use case:** Landing page headers, full-width sections

**Template:**
```
A [adjective] hero image of [subject] with [color] and [color] colors,
[style], [lighting], [mood], 16:9 aspect ratio, [additional],
Ultra high resolution
```

**Example:**
```
A modern hero image of a fitness app dashboard showing workout stats
and progress charts with vibrant orange (#F97316) and dark navy (#1E293B)
colors, clean minimalist design, soft ambient lighting, energetic yet
professional mood, 16:9 aspect ratio, UI mockup style, Ultra high resolution
```

### 2. Feature Illustrations (4:3, 800x600)

**Use case:** Feature sections, benefit icons

**Template:**
```
Illustration of [concept] with [colors] palette, [style],
flat design with subtle depth, [mood], 4:3 aspect ratio, Ultra high resolution
```

**Example:**
```
Illustration of cloud storage concept with blue (#3B82F6) and white colors,
modern flat design with subtle shadows, clean and tech-forward mood,
4:3 aspect ratio, isometric perspective, Ultra high resolution
```

### 3. Icons / Small Graphics (1:1, 512x512)

**Use case:** App icons, feature badges, button icons

**Template:**
```
[Subject] icon, [style], [colors], minimal detail, 1:1 aspect ratio,
scalable vector style, Ultra high resolution
```

**Example:**
```
Notification bell icon, modern minimalist style, gradient from blue (#3B82F6)
to purple (#8B5CF6), white highlight, minimal detail, 1:1 aspect ratio,
scalable vector style, Ultra high resolution
```

### 4. Background Patterns

**Use case:** Section backgrounds, card backgrounds

**Template:**
```
Abstract [geometric/organic] pattern with [colors], [style],
seamless tiling, subtle [effect], [mood], [dimensions],
Ultra high resolution
```

**Example:**
```
Abstract geometric pattern with gradient from teal (#14B8A6) to blue
(#3B82F6), modern minimalist style, subtle dot grid overlay, seamless
tiling, professional tech mood, 1920x1080, Ultra high resolution
```

### 5. User Avatars

**Use case:** Testimonials, team pages, user profiles

**Template:**
```
Professional headshot of [description], [style], [colors],
natural lighting, [mood], [dimensions], Ultra high resolution
```

**Example:**
```
Professional headshot of a diverse young woman in casual business attire,
soft natural lighting, friendly approachable mood, 800x800,
clean background, Ultra high resolution
```

---

## Dimension Guidelines

| Type | Dimensions | Aspect Ratio | Notes |
|------|------------|--------------|-------|
| Hero | 1920x1080 | 16:9 | Full-width headers |
| Hero (wide) | 1920x820 | ~21:9 | Cinematic headers |
| Banner | 1200x628 | ~1.9:1 | Social sharing |
| Feature | 800x600 | 4:3 | Section illustrations |
| Icon | 512x512 | 1:1 | App icons, badges |
| Avatar | 400x400 | 1:1 | Profile pictures |
| Background | 1920x1080 | 16:9 | Section backgrounds |

**Important:** Dimensions must be between 512-1920 pixels and multiples of 32.

---

## Model Selection

### flux.schnell (Default - Fast)
- Small images (<1000px)
- Quick iterations
- Icon generation
- Simple illustrations
- When speed matters

### flux.dev (High Quality)
- Hero images
- Full banners
- Large feature graphics
- When quality is priority
- Slower but better results

---

## Prompt Enhancement Tips

### Include Project Context
- Match brand personality (playful, professional, minimal)
- Use actual brand colors from design system
- Consider industry (tech, health, finance, etc.)

### Specify Lighting
- "Soft ambient lighting"
- "Natural daylight"
- "Studio lighting"
- "Rim lighting"

### Add Style Keywords
- "Minimalist"
- "Modern flat design"
- "Glassmorphism"
- "Neumorphism"
- "Material design"

### Composition Guidance
- "Centered composition"
- "Rule of thirds"
- "Isometric perspective"
- "Top-down view"

---

## Output Format

When images are needed, create a markdown file with:

```markdown
# Image Prompts for [Project Name]

## Image 1: [Description]
- **Type:** Hero
- **Dimensions:** 1920x1080
- **Model:** flux.dev
- **Colors:** #PrimaryColor, #SecondaryColor
- **Prompt:**
```

Then save to `.opencode/prompts/image-prompts.md`

---

## Example Complete Prompt

For a SaaS landing page hero:

```
Modern hero image of a data analytics dashboard with charts and graphs
displaying business metrics, featuring deep indigo (#4F46E5) and vibrant
cyan (#06B6D4) gradient accents, clean glassmorphism UI elements, soft
purple ambient lighting, professional and innovative mood, 16:9 aspect
ratio, UI mockup style with subtle depth, Ultra high resolution
```
