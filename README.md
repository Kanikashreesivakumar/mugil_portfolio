# Sharp Physiotherapy Portfolio Website

A cutting-edge, high-impact physiotherapy portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features sharp, modern design elements with dynamic animations, bold typography, and professional aesthetics that command attention and build trust.

## 🎯 Sharp Features

- **Sharp Design**: Bold, geometric elements with dynamic gradients and sharp shadows
- **Advanced Animations**: Complex Framer Motion sequences with scroll-triggered effects
- **Interactive Cursor**: Smart cursor that adapts to different elements with precision
- **Premium Aesthetics**: Glass morphism, sharp borders, and gradient overlays
- **Performance Optimized**: Lightning-fast loading with Next.js optimization
- **Professional Typography**: Bold, impactful fonts with perfect hierarchy
- **Dynamic Components**: Interactive service cards with hover transformations
- **Modern Grid System**: Sharp, clean layouts with perfect spacing

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd physiotherapy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
physiotherapy-portfolio/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Main home page
├── components/
│   ├── sections/                # Page sections
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About section
│   │   ├── Services.tsx         # Services section
│   │   ├── Testimonials.tsx     # Testimonials carousel
│   │   ├── Contact.tsx          # Contact form
│   │   └── Footer.tsx           # Footer
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Custom button component
│       ├── CustomCursor.tsx     # Custom cursor
│       └── SmoothScroll.tsx     # Smooth scroll wrapper
├── hooks/
│   └── useScrollAnimations.ts   # Custom hooks for scroll effects
├── lib/
│   └── animations.ts            # Framer Motion animation variants
├── public/
│   └── images/                  # Static images
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Design System

### Colors

The website uses a carefully crafted color palette:

- **Primary**: Green shades (#22c55e and variants)
- **Accent Pink**: Soft pink tones (#ec4899 and variants)
- **Accent Violet**: Purple accents (#8b5cf6 and variants)
- **Neutrals**: Grayscale palette for text and backgrounds

### Typography

- **Display Font**: Cal Sans (for headings)
- **Body Font**: Inter (for body text)
- **Responsive sizes**: From 16px to 128px with proper line heights

### Animations

- **Scroll-triggered**: Elements fade in as they enter viewport
- **Hover effects**: Buttons and cards scale and lift on hover
- **Custom cursor**: Circular cursor that expands on interactive elements
- **Page transitions**: Smooth fade-in animations

## 📱 Sections Overview

### 1. Header
- Fixed navigation with scroll-based styling
- Mobile hamburger menu with slide-in animation
- Logo and navigation links
- CTA button

### 2. Hero Section
- Full-screen welcome area
- Large typography with gradient text effects
- Floating background elements
- Scroll indicator with smooth scroll to next section

### 3. About Section
- Professional photo and bio
- List of qualifications and certifications
- Statistics cards (patients, experience, rating)
- CTA button for appointments

### 4. Services Section
- Four main services with animated cards:
  - Manual Therapy
  - Sports Rehabilitation
  - Posture Correction
  - Pain Management
- Hover effects with service details
- Icons and feature lists

### 5. Testimonials Section
- Carousel with 5 client testimonials
- Auto-play functionality with manual controls
- Star ratings and client photos
- Statistics display

### 6. Contact Section
- Contact form with validation
- Contact information display
- Google Maps placeholder
- Social media links

### 7. Footer
- Brand information and contact details
- Link sections (Services, Quick Links, Resources)
- Newsletter signup
- Social media icons
- Copyright information

## ⚙️ Customization

### Updating Content

1. **Personal Information**: Update the content in each section component
2. **Images**: Replace placeholder images in the `public/images` directory
3. **Colors**: Modify the color palette in `tailwind.config.js`
4. **Fonts**: Update font imports in `app/globals.css`

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to the main page in `app/page.tsx`
3. Add navigation link to the header component

### Styling Changes

- Tailwind classes can be modified directly in components
- Global styles are in `app/globals.css`
- Animation variants are in `lib/animations.ts`

## 📊 Performance Optimizations

- **Image Optimization**: Using Next.js Image component with WebP support
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as they enter the viewport
- **Optimized Fonts**: Google Fonts with display=swap
- **Minification**: Automatic CSS and JS minification in production

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Content Management

For easy content updates without coding:

1. **Sanity.io Integration** (Optional): Connect a headless CMS
2. **Supabase Integration** (Optional): Use for form submissions and content
3. **Contentful Integration** (Optional): Manage testimonials and services

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Custom Server

1. Run `npm run build`
2. Upload `.next` folder to server
3. Run `npm start` on server

## 📞 Support

For questions or customization requests:
- Email: hello@drjohnsonphysio.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License. Feel free to use it for your physiotherapy practice!

---

**Made with ❤️ for better health and wellness**