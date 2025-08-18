# Digitalisierung & KI in Verbänden - Survey Landing Page

A modern, responsive landing page for the Swiss survey on digitalization and artificial intelligence in associations.

## Overview

This landing page was built with Next.js 15, TypeScript, and Tailwind CSS, following the design patterns from the frontend.netnode.ai project. It includes:

- **Hero Section** - Prominent title, subtitle, and call-to-action
- **Introduction** - Brief overview of the survey purpose
- **Survey Goal** - Detailed explanation of objectives
- **Target Audience** - Who should participate
- **Process Information** - Duration, anonymity, and results delivery
- **Why Participate** - Motivation for taking part
- **Final Call-to-Action** - Bottom section with participation button

## Features

- ✅ Mobile-first responsive design
- ✅ Smooth scroll animations with Framer Motion
- ✅ SEO optimized with proper meta tags
- ✅ Swiss German content (de_CH locale)
- ✅ Modern UI components with class-variance-authority
- ✅ TypeScript support
- ✅ Accessible design patterns

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Custom component system with CVA
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## Configuration

### Google Forms Integration

To connect the survey to your Google Forms:

1. Open `components/sections/HeroSection.tsx`
2. Replace the `href="#"` with your Google Forms URL
3. Do the same in `components/sections/CallToActionSection.tsx`

Example:
```tsx
<LinkButton 
  href="https://forms.google.com/your-form-id" 
  variant="primary" 
  size="large"
>
  Jetzt teilnehmen
</LinkButton>
```

### SEO Customization

Update the metadata in `app/layout.tsx`:

- Title and description
- Open Graph settings  
- Twitter Card settings
- Keywords

## Project Structure

```
survey-landing/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── IntroductionSection.tsx
│   │   ├── SurveyGoalSection.tsx
│   │   ├── TargetAudienceSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── WhyParticipateSection.tsx
│   │   └── CallToActionSection.tsx
│   └── ui/                # Reusable UI components
│       └── Button.tsx     # Button variants
├── lib/
│   └── utils.ts           # Utility functions
└── package.json
```

## Customization

### Colors

The project uses a blue color scheme. To customize colors, update the Tailwind CSS classes in:
- `components/ui/Button.tsx` - Button variants
- Section components - Background colors and text colors

### Content

All text content is located in the individual section components:
- `HeroSection.tsx` - Main headline and subtitle
- `IntroductionSection.tsx` - Opening paragraph
- `SurveyGoalSection.tsx` - Survey objectives
- `TargetAudienceSection.tsx` - Target group description
- `ProcessSection.tsx` - Process details
- `WhyParticipateSection.tsx` - Participation benefits
- `CallToActionSection.tsx` - Final call-to-action

### Animations

Scroll-triggered animations are implemented using Framer Motion's `useInView` hook. Customize timing and effects in the individual section components.

## Building for Production

```bash
npm run build
```

The optimized build will be created in the `.next` folder.

## Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Self-hosted with PM2/Docker

## Development

### Adding New Sections

1. Create a new component in `components/sections/`
2. Follow the existing pattern with Framer Motion animations
3. Import and add to `app/page.tsx`

### Styling Guidelines

- Use Tailwind CSS utilities
- Follow mobile-first responsive design
- Maintain consistent spacing (py-16 for sections)
- Use the established color palette

## Browser Support

- Chrome/Edge 88+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for the Swiss association digitalization survey.
