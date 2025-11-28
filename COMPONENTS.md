# Component API Reference

Detailed documentation for all Nexaflow components.

## Table of Contents
1. [Navbar](#navbar)
2. [Hero](#hero)
3. [Features](#features)
4. [About](#about)
5. [Pricing](#pricing)
6. [Testimonials](#testimonials)
7. [Contact](#contact)
8. [Footer](#footer)
9. [Button](#button-ui-component)

---

## Navbar

Fixed navigation bar with smooth scrolling.

### Location
`components/Navbar.jsx`

### State Management
\`\`\`javascript
const [isScrolled, setIsScrolled] = useState(false)
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
\`\`\`

### Key Functions

#### scrollToSection(sectionId)
Smoothly scrolls to a section by ID.

**Parameters:**
- `sectionId` (string) - ID of target section

**Example:**
\`\`\`javascript
scrollToSection('features') // Scrolls to #features
\`\`\`

#### Navigation Items
\`\`\`javascript
const navItems = [
  { name: 'Features', href: 'features' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Testimonials', href: 'testimonials' },
]
\`\`\`

### Styling States
- **Default**: Transparent background
- **Scrolled**: Glassmorphism with backdrop blur
- **Mobile Menu Open**: Full-screen overlay

---

## Hero

Main hero section with CTA and dashboard preview.

### Location
`components/Hero.jsx`

### Key Functions

#### scrollToSection(sectionId)
Handles CTA button clicks.

**Button Mappings:**
- "Get Started Free" → `scrollToSection('contact')`
- "Watch Demo" → `scrollToSection('features')`

### Dashboard Preview Components

#### Stat Cards
\`\`\`javascript
const stats = [
  { label: 'Revenue', value: '$45.2K', change: '+12.5%', color: 'blue' },
  { label: 'Users', value: '2,847', change: '+8.3%', color: 'cyan' },
  { label: 'Growth', value: '23.8%', change: '+5.2%', color: 'purple' }
]
\`\`\`

#### Activity Items
\`\`\`javascript
const activities = [
  {
    icon: '👤',
    user: 'Sarah Johnson',
    action: 'upgraded to Pro plan',
    time: '2 min ago',
    status: 'Completed'
  },
  // ... more items
]
\`\`\`

### Images Used
- `professional-analytics-dashboard-chart-with-line-g.jpg` - Analytics chart

---

## Features

Feature showcase grid.

### Location
`components/Features.jsx`

### Features Data Structure
\`\`\`javascript
const features = [
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Get deep insights...'
  },
  // ... 5 more items
]
\`\`\`

### Grid Breakpoints
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3`

### Hover Animation
\`\`\`css
hover:-translate-y-1 hover:shadow-lg
\`\`\`

---

## About

Company information section.

### Location
`components/About.jsx`

### Statistics
\`\`\`javascript
const stats = [
  { value: '100K+', label: 'Active Users' },
  { value: '50+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' }
]
\`\`\`

### Images Used
- `modern-saas-team-collaboration-workspace-with-lapt.jpg` - Team photo

### Layout
- Desktop: Two-column (text | image)
- Mobile: Stacked (text → image)

---

## Pricing

Interactive pricing table.

### Location
`components/Pricing.jsx`

### State
\`\`\`javascript
const [selectedPlan, setSelectedPlan] = useState(null)
\`\`\`

### Pricing Plans Structure
\`\`\`javascript
const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for individuals',
    features: [
      'Up to 10 projects',
      'Basic analytics',
      // ... more features
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  // ... more plans
]
\`\`\`

### Interactive Features
- **Click Handler**: `onClick={() => setSelectedPlan(plan.name)}`
- **Selected State**: Shows green "Selected" badge
- **Visual Feedback**: Scale and ring color changes

### Styling Variants
- **Regular Plan**: `ring-slate-200`
- **Popular Plan**: `ring-2 ring-blue-500 shadow-xl`
- **Selected Plan**: `ring-blue-500 scale-105`

---

## Testimonials

Customer testimonials grid.

### Location
`components/Testimonials.jsx`

### Testimonials Data Structure
\`\`\`javascript
const testimonials = [
  {
    quote: "Nexaflow has transformed...",
    author: "Sarah Mitchell",
    role: "CEO, TechStart Inc",
    initials: "SM",
    avatarColor: "from-blue-500 to-cyan-500"
  },
  // ... more testimonials
]
\`\`\`

### Rating Display
Fixed 5-star rating using:
\`\`\`javascript
{[...Array(5)].map((_, i) => (
  <span key={i} className="text-yellow-400">★</span>
))}
\`\`\`

### Grid Breakpoints
- Mobile: `grid-cols-1`
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-3`

---

## Contact

Contact form and information.

### Location
`components/Contact.jsx`

### State Management
\`\`\`javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
})
\`\`\`

### Form Handlers

#### handleChange(e)
Updates form state on input change.

#### handleSubmit(e)
Form submission handler (currently placeholder).

**To Integrate:**
\`\`\`javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send message')
  }
}
\`\`\`

### Contact Information
\`\`\`javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@nexaflow.com'
  },
  // ... more items
]
\`\`\`

---

## Footer

Site footer with links and social media.

### Location
`components/Footer.jsx`

### Footer Sections Structure
\`\`\`javascript
const footerSections = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      // ... more links
    ]
  },
  // ... more sections
]
\`\`\`

### Social Links
\`\`\`javascript
const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' }
]
\`\`\`

### Grid Layout
- Mobile: `grid-cols-1` (stacked)
- Tablet: `md:grid-cols-2` (2x2 grid)
- Desktop: `lg:grid-cols-4` (4 columns)

---

## Button (UI Component)

Reusable button component with variants.

### Location
`components/ui/button.jsx`

### Props
\`\`\`typescript
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children: ReactNode
  [key: string]: any // All other HTML button attributes
}
\`\`\`

### Variant Styles

#### default
\`\`\`css
bg-blue-600 text-white hover:bg-blue-700
\`\`\`

#### outline
\`\`\`css
border-2 border-slate-300 bg-transparent hover:bg-slate-100
\`\`\`

#### ghost
\`\`\`css
hover:bg-slate-100 hover:text-slate-900
\`\`\`

#### destructive
\`\`\`css
bg-red-600 text-white hover:bg-red-700
\`\`\`

### Size Styles

#### default
\`\`\`css
h-10 px-4 py-2
\`\`\`

#### sm
\`\`\`css
h-9 rounded-md px-3
\`\`\`

#### lg
\`\`\`css
h-11 rounded-md px-8
\`\`\`

#### icon
\`\`\`css
h-10 w-10
\`\`\`

### Usage Examples

\`\`\`jsx
// Default button
<Button>Click Me</Button>

// Outline variant, large size
<Button variant="outline" size="lg">
  Learn More
</Button>

// With icon
<Button>
  Get Started
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>

// Custom classes
<Button className="w-full md:w-auto">
  Full Width on Mobile
</Button>

// Disabled state
<Button disabled>
  Processing...
</Button>
\`\`\`

---

## Utility Functions

### cn() - Class Name Helper

**Location:** `lib/utils.js`

**Purpose:** Merges and filters class names.

**Usage:**
\`\`\`javascript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  'additional-classes'
)}>
\`\`\`

**Implementation:**
\`\`\`javascript
export function cn(...inputs) {
  return inputs
    .flat()
    .filter(x => typeof x === 'string' || typeof x === 'number')
    .join(' ')
    .trim()
}
\`\`\`

---

## Shared Patterns

### Smooth Scrolling
Used in Navbar, Hero buttons:

\`\`\`javascript
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
\`\`\`

### Responsive Grid Pattern
Common across Features, Pricing, Testimonials:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id}>{/* Card content */}</div>
  ))}
</div>
\`\`\`

### Hover Animation Pattern
\`\`\`css
transition-all hover:-translate-y-1 hover:shadow-lg
\`\`\`

### Section Container Pattern
\`\`\`jsx
<section id="section-name" className="py-16 md:py-24">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
\`\`\`

---

## Best Practices

### Component Structure
1. Import dependencies
2. Define data constants
3. Initialize state
4. Define functions
5. Return JSX

### Naming Conventions
- Components: PascalCase (Hero.jsx)
- Functions: camelCase (scrollToSection)
- Constants: camelCase (pricingPlans)
- CSS Classes: kebab-case (text-blue-600)

### Responsive Design
Always use mobile-first approach:
\`\`\`jsx
<div className="text-sm md:text-base lg:text-lg">
\`\`\`

### Accessibility
- Use semantic HTML
- Include alt text for images
- Proper heading hierarchy (h1 → h2 → h3)
- Keyboard navigation support

---

**Last Updated:** 2025
**Version:** 1.0.0
