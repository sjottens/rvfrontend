export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
  categoryEn: string;
  readTime: number;
  publishDate: string;
  author: string;
  tags: string[];
  tagsEn: string[];
  content: string;
  contentEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-hooks-guide",
    title: "React Hooks: Een Complete Gids voor Moderne React Development",
    titleEn: "React Hooks: A Complete Guide to Modern React Development",
    slug: "react-hooks-guide",
    description:
      "Leer alles over React Hooks: useState, useEffect, useContext, en custom hooks. Ontdek hoe je functional components kunt gebruiken en state management kunt vereenvoudigen.",
    descriptionEn:
      "Learn everything about React Hooks: useState, useEffect, useContext, and custom hooks. Discover how to use functional components and simplify state management.",
    image: "/blog/react-hooks.svg",
    category: "React",
    categoryEn: "React",
    readTime: 12,
    publishDate: "2026-01-15",
    author: "RV Frontend",
    tags: ["React", "Hooks", "JavaScript", "Best Practices"],
    tagsEn: ["React", "Hooks", "JavaScript", "Best Practices"],
    content: `# React Hooks: Een Complete Gids voor Moderne React Development

React Hooks hebben de manier waarop we React-componenten schrijven fundamenteel veranderd. Ze stellen je in staat om state en andere React-features in functional components te gebruiken.

## Wat zijn Hooks?

Hooks zijn functies waarmee je "hooks" kunt maken in React-features. Ze zijn geïntroduceerd in React 16.8 en hebben class components grotendeels vervangen.

## useState Hook

De useState hook is de basisstone van React hooks. Hiermee kun je state toevoegen aan functional components.

\`\`\`jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

De \`useState\` hook retourneert een array met twee elementen:
1. De huidige state waarde
2. Een functie om die waarde bij te werken

## useEffect Hook

De \`useEffect\` hook laat je side effects uitvoeren in functional components.

\`\`\`jsx
useEffect(() => {
  // Dit code wordt uitgevoerd na render
  document.title = 'New Title';

  // Optional: cleanup function
  return () => {
    // Dit code wordt uitgevoerd voor cleanup
  };
}, [dependencies]); // Dependencies array
\`\`\`

## useContext Hook

Deel data door je component tree zonder prop drilling:

\`\`\`jsx
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
\`\`\`

## Custom Hooks

Je kunt je eigen hooks maken om logica te hergebruiken:

\`\`\`jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage
function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}
\`\`\`

## Best Practices

1. **Zet alleen dependencies in de dependency array die je werkelijk gebruikt**
2. **Gebruik hooks aan de top level van je component**
3. **Maak custom hooks voor herbruikbare logica**
4. **Vergeet niet de cleanup function in useEffect**

## Conclusie

React Hooks hebben React development aanzienlijk vereenvoudigd. Ze maken code beter leesbaar, herbruikbaar, en maintainable.`,
    contentEn: `# React Hooks: A Complete Guide to Modern React Development

React Hooks have fundamentally changed the way we write React components. They allow you to use state and other React features in functional components.

## What are Hooks?

Hooks are functions that let you "hook into" React features. They were introduced in React 16.8 and have largely replaced class components.

## useState Hook

The useState hook is the foundation of React hooks. It lets you add state to functional components.

\`\`\`jsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

The \`useState\` hook returns an array with two elements:
1. The current state value
2. A function to update that value

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components.

\`\`\`jsx
useEffect(() => {
  // This code runs after render
  document.title = 'New Title';

  // Optional: cleanup function
  return () => {
    // This code runs during cleanup
  };
}, [dependencies]); // Dependencies array
\`\`\`

## useContext Hook

Share data across your component tree without prop drilling:

\`\`\`jsx
const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
\`\`\`

## Custom Hooks

Create your own hooks to reuse logic:

\`\`\`jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// Usage
function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}
\`\`\`

## Best Practices

1. **Only include dependencies that you actually use in the dependency array**
2. **Use hooks at the top level of your component**
3. **Create custom hooks for reusable logic**
4. **Don't forget the cleanup function in useEffect**

## Conclusion

React Hooks have significantly simplified React development. They make code more readable, reusable, and maintainable.`
  },
  {
    id: "nextjs-15-features",
    title: "Next.js 15: Nieuwe Features en Performance Verbeteringen",
    titleEn: "Next.js 15: New Features and Performance Improvements",
    slug: "nextjs-15-features",
    description:
      "Ontdek de nieuwste features in Next.js 15: App Router optimalisaties, Server Components, en performance improvements die je websites sneller maken.",
    descriptionEn:
      "Discover the latest features in Next.js 15: App Router optimizations, Server Components, and performance improvements that make your websites faster.",
    image: "/blog/nextjs-features.svg",
    category: "Next.js",
    categoryEn: "Next.js",
    readTime: 14,
    publishDate: "2026-01-10",
    author: "RV Frontend",
    tags: ["Next.js", "Performance", "Web Development", "React"],
    tagsEn: ["Next.js", "Performance", "Web Development", "React"],
    content: `# Next.js 15: Nieuwe Features en Performance Verbeteringen

Next.js 15 brengt significante verbeteringen in performance, developer experience, en nieuwe capaciteiten.

## Server Components Verbetering

Server Components zijn nu nog beter geïntegreerd en performanter.

\`\`\`jsx
// app/products/page.tsx
export default async function ProductsPage() {
  const products = await fetchProducts();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
\`\`\`

## Parallel Routes

Render meerdere pagina's tegelijk:

\`\`\`
app/
  dashboard/
    layout.tsx
    @analytics/
      page.tsx
    @notifications/
      page.tsx
    page.tsx
\`\`\`

## Dynamic Metadata

Genereer metadata dynamisch per pagina:

\`\`\`jsx
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image]
    }
  };
}
\`\`\`

## Core Web Vitals Optimalisaties

Next.js 15 verbetert automatisch Core Web Vitals scores.

## Conclusie

Next.js 15 is een solide update met veel praktische verbeteringen.`,
    contentEn: `# Next.js 15: New Features and Performance Improvements

Next.js 15 brings significant improvements in performance, developer experience, and new capabilities.

## Server Components Enhancement

Server Components are now even better integrated and more performant.

\`\`\`jsx
// app/products/page.tsx
export default async function ProductsPage() {
  const products = await fetchProducts();
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
\`\`\`

## Parallel Routes

Render multiple pages at the same time:

\`\`\`
app/
  dashboard/
    layout.tsx
    @analytics/
      page.tsx
    @notifications/
      page.tsx
    page.tsx
\`\`\`

## Dynamic Metadata

Generate metadata dynamically per page:

\`\`\`jsx
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image]
    }
  };
}
\`\`\`

## Core Web Vitals Optimizations

Next.js 15 automatically improves Core Web Vitals scores.

## Conclusion

Next.js 15 is a solid update with many practical improvements.`
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices voor Frontend Development",
    titleEn: "TypeScript Best Practices for Frontend Development",
    slug: "typescript-best-practices",
    description:
      "Leer hoe je TypeScript optimaal kunt gebruiken in je React en Next.js projecten. Type-veilige code met betere developer experience.",
    descriptionEn:
      "Learn how to use TypeScript effectively in your React and Next.js projects. Type-safe code with better developer experience.",
    image: "/blog/typescript-best-practices.svg",
    category: "TypeScript",
    categoryEn: "TypeScript",
    readTime: 15,
    publishDate: "2026-01-05",
    author: "RV Frontend",
    tags: ["TypeScript", "React", "Code Quality"],
    tagsEn: ["TypeScript", "React", "Code Quality"],
    content: `# TypeScript Best Practices voor Frontend Development

TypeScript voegt type-veiligheid toe aan JavaScript en voorkomt veel bugs.

## Type Definitie Best Practices

Definieer types expliciet:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  roles: ('admin' | 'user' | 'guest')[];
}

type UserInput = Omit<User, 'id'>;
\`\`\`

## React Components met TypeScript

\`\`\`tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
\`\`\`

## Utility Types Gebruiken

\`\`\`typescript
// Readonly
type ReadonlyUser = Readonly<User>;

// Partial
type PartialUser = Partial<User>;

// Pick
type UserPreview = Pick<User, 'name' | 'email'>;

// Record
type Roles = Record<'admin' | 'user' | 'guest', Permission[]>;
\`\`\`

## Conclusie

TypeScript maakt je code veiliger en maintainbaarder.`,
    contentEn: `# TypeScript Best Practices for Frontend Development

TypeScript adds type safety to JavaScript and prevents many bugs.

## Type Definition Best Practices

Define types explicitly:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  roles: ('admin' | 'user' | 'guest')[];
}

type UserInput = Omit<User, 'id'>;
\`\`\`

## React Components with TypeScript

\`\`\`tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
\`\`\`

## Using Utility Types

\`\`\`typescript
// Readonly
type ReadonlyUser = Readonly<User>;

// Partial
type PartialUser = Partial<User>;

// Pick
type UserPreview = Pick<User, 'name' | 'email'>;

// Record
type Roles = Record<'admin' | 'user' | 'guest', Permission[]>;
\`\`\`

## Conclusion

TypeScript makes your code safer and more maintainable.`
  },
  {
    id: "tailwind-css-mastery",
    title: "Tailwind CSS Meesterschap: Van Basis tot Advanced",
    titleEn: "Tailwind CSS Mastery: From Basic to Advanced",
    slug: "tailwind-css-mastery",
    description:
      "Beheers Tailwind CSS: utility-first CSS, custom configurations, performance optimalisatie, en advanced patterns.",
    descriptionEn:
      "Master Tailwind CSS: utility-first CSS, custom configurations, performance optimization, and advanced patterns.",
    image: "/blog/tailwind-css-mastery.svg",
    category: "CSS",
    categoryEn: "CSS",
    readTime: 13,
    publishDate: "2025-12-28",
    author: "RV Frontend",
    tags: ["Tailwind CSS", "CSS", "Styling", "Web Design"],
    tagsEn: ["Tailwind CSS", "CSS", "Styling", "Web Design"],
    content: `# Tailwind CSS Meesterschap: Van Basis tot Advanced

Tailwind CSS is een utility-first CSS framework dat je workflow versnelt.

## Utility-First Approach

\`\`\`jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Action
  </button>
</div>
\`\`\`

## Responsive Design

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>
\`\`\`

## Custom Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cyan: '#00d4ff',
        brand: '#1a1f35'
      },
      spacing: {
        '13': '3.25rem'
      }
    }
  }
};
\`\`\`

## Conclusie

Tailwind CSS maakt styling sneller en consistenter.`,
    contentEn: `# Tailwind CSS Mastery: From Basic to Advanced

Tailwind CSS is a utility-first CSS framework that accelerates your workflow.

## Utility-First Approach

\`\`\`jsx
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Action
  </button>
</div>
\`\`\`

## Responsive Design

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>
\`\`\`

## Custom Configuration

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cyan: '#00d4ff',
        brand: '#1a1f35'
      },
      spacing: {
        '13': '3.25rem'
      }
    }
  }
};
\`\`\`

## Conclusion

Tailwind CSS makes styling faster and more consistent.`
  },
  {
    id: "responsive-design-guide",
    title: "Responsive Design Strategie: Mobile-First Development",
    titleEn: "Responsive Design Strategy: Mobile-First Development",
    slug: "responsive-design-guide",
    description:
      "Leer mobile-first development en zorg dat je websites op alle devices perfect werken. Best practices voor responsive design.",
    descriptionEn:
      "Learn mobile-first development and ensure your websites work perfectly on all devices. Best practices for responsive design.",
    image: "/blog/responsive-design-strategy.svg",
    category: "Design",
    categoryEn: "Design",
    readTime: 11,
    publishDate: "2025-12-22",
    author: "RV Frontend",
    tags: ["Responsive Design", "Mobile", "CSS", "UX"],
    tagsEn: ["Responsive Design", "Mobile", "CSS", "UX"],
    content: `# Responsive Design Strategie: Mobile-First Development

Mobile-first development zorgt ervoor dat je website eerst optimaal op mobiel werkt.

## Mobile-First CSS

\`\`\`css
/* Mobile (default) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 950px;
  }
}
\`\`\`

## Viewport Meta Tag

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Flexible Grid

\`\`\`jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} item={item} />)}
</div>
\`\`\`

## Conclusie

Mobile-first development leidt tot betere user experiences.`,
    contentEn: `# Responsive Design Strategy: Mobile-First Development

Mobile-first development ensures your website works optimally on mobile first.

## Mobile-First CSS

\`\`\`css
/* Mobile (default) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    width: 950px;
  }
}
\`\`\`

## Viewport Meta Tag

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

## Flexible Grid

\`\`\`jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} item={item} />)}
</div>
\`\`\`

## Conclusion

Mobile-first development leads to better user experiences.`
  },
  {
    id: "frontend-performance",
    title: "Frontend Performance Optimalisatie: Core Web Vitals",
    titleEn: "Frontend Performance Optimization: Core Web Vitals",
    slug: "frontend-performance",
    description:
      "Optimaliseer je website voor snelheid. Leer over Core Web Vitals, image optimization, code splitting, en caching strategieën.",
    descriptionEn:
      "Optimize your website for speed. Learn about Core Web Vitals, image optimization, code splitting, and caching strategies.",
    image: "/blog/frontend-performance.svg",
    category: "Performance",
    categoryEn: "Performance",
    readTime: 16,
    publishDate: "2025-12-15",
    author: "RV Frontend",
    tags: ["Performance", "Core Web Vitals", "Optimization", "SEO"],
    tagsEn: ["Performance", "Core Web Vitals", "Optimization", "SEO"],
    content: `# Frontend Performance Optimalisatie: Core Web Vitals

Performance is cruciaal voor SEO, conversies en user experience.

## Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Image Optimization

\`\`\`jsx
import Image from 'next/image';

export function OptimizedImage() {
  return (
    <Image
      src="/image.jpg"
      alt="Description"
      width={800}
      height={600}
      priority={false}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
\`\`\`

## Code Splitting

\`\`\`jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
\`\`\`

## Conclusie

Performance is een belangrijke ranking factor.`,
    contentEn: `# Frontend Performance Optimization: Core Web Vitals

Performance is crucial for SEO, conversions, and user experience.

## Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Image Optimization

\`\`\`jsx
import Image from 'next/image';

export function OptimizedImage() {
  return (
    <Image
      src="/image.jpg"
      alt="Description"
      width={800}
      height={600}
      priority={false}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
\`\`\`

## Code Splitting

\`\`\`jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
\`\`\`

## Conclusion

Performance is an important ranking factor.`
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility: WCAG Compliance & Best Practices",
    titleEn: "Web Accessibility: WCAG Compliance & Best Practices",
    slug: "web-accessibility",
    description:
      "Zorg dat je website toegankelijk is voor iedereen. WCAG richtlijnen, semantic HTML, ARIA labels, en accessibility testing.",
    descriptionEn:
      "Make your website accessible to everyone. WCAG guidelines, semantic HTML, ARIA labels, and accessibility testing.",
    image: "/blog/web-accessibility.svg",
    category: "Accessibility",
    categoryEn: "Accessibility",
    readTime: 14,
    publishDate: "2025-12-08",
    author: "RV Frontend",
    tags: ["Accessibility", "WCAG", "HTML", "Inclusive Design"],
    tagsEn: ["Accessibility", "WCAG", "HTML", "Inclusive Design"],
    content: `# Web Accessibility: WCAG Compliance & Best Practices

Accessibility zorgt ervoor dat iedereen je website kan gebruiken.

## Semantic HTML

\`\`\`html
<!-- Good -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content</p>
  </article>
</main>
<footer>
  <p>Copyright</p>
</footer>
\`\`\`

## ARIA Labels

\`\`\`jsx
<button aria-label="Close dialog">×</button>
<div role="alert">Error message</div>
<img alt="Description of image" src="image.jpg" />
\`\`\`

## Keyboard Navigation

\`\`\`jsx
<button onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
}}>
  Click me
</button>
\`\`\`

## Conclusie

Accessibility is inclusieve design.`,
    contentEn: `# Web Accessibility: WCAG Compliance & Best Practices

Accessibility ensures everyone can use your website.

## Semantic HTML

\`\`\`html
<!-- Good -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content</p>
  </article>
</main>
<footer>
  <p>Copyright</p>
</footer>
\`\`\`

## ARIA Labels

\`\`\`jsx
<button aria-label="Close dialog">×</button>
<div role="alert">Error message</div>
<img alt="Description of image" src="image.jpg" />
\`\`\`

## Keyboard Navigation

\`\`\`jsx
<button onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
}}>
  Click me
</button>
\`\`\`

## Conclusion

Accessibility is inclusive design.`
  },
  {
    id: "design-systems",
    title: "Design Systems: Component Libraries en Token Systems",
    titleEn: "Design Systems: Component Libraries and Token Systems",
    slug: "design-systems",
    description:
      "Bouw schaalbare design systems. Component libraries, design tokens, Storybook, en documenting patterns.",
    descriptionEn:
      "Build scalable design systems. Component libraries, design tokens, Storybook, and documenting patterns.",
    image: "/blog/design-systems.svg",
    category: "Design",
    categoryEn: "Design",
    readTime: 13,
    publishDate: "2025-11-30",
    author: "RV Frontend",
    tags: ["Design Systems", "Components", "Storybook", "Design Tokens"],
    tagsEn: ["Design Systems", "Components", "Storybook", "Design Tokens"],
    content: `# Design Systems: Component Libraries en Token Systems

Design systems zorgen voor consistentie en schaal.

## Design Tokens

\`\`\`javascript
// tokens.js
export const colors = {
  primary: '#0099ff',
  secondary: '#ff6600',
  success: '#00cc88',
  error: '#ff3333'
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem'
};
\`\`\`

## Reusable Components

\`\`\`jsx
export function Button({ variant, size, children, ...props }) {
  const baseStyles = 'font-semibold rounded transition';
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={[baseStyles, variantStyles[variant], sizeStyles[size]].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

## Conclusie

Design systems schalen mee met je product.`,
    contentEn: `# Design Systems: Component Libraries and Token Systems

Design systems ensure consistency and scale.

## Design Tokens

\`\`\`javascript
// tokens.js
export const colors = {
  primary: '#0099ff',
  secondary: '#ff6600',
  success: '#00cc88',
  error: '#ff3333'
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem'
};
\`\`\`

## Reusable Components

\`\`\`jsx
export function Button({ variant, size, children, ...props }) {
  const baseStyles = 'font-semibold rounded transition';
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white'
  };
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={[baseStyles, variantStyles[variant], sizeStyles[size]].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

## Conclusion

Design systems scale with your product.`
  },
  {
    id: "modern-frontend-architecture",
    title: "Modern Frontend Architecture: Patterns en Best Practices",
    titleEn: "Modern Frontend Architecture: Patterns and Best Practices",
    slug: "modern-frontend-architecture",
    description:
      "Ontdek moderne frontend architectuur patterns: component composition, state management, atomic design, en scalable structures.",
    descriptionEn:
      "Discover modern frontend architecture patterns: component composition, state management, atomic design, and scalable structures.",
    image: "/blog/architecture.jpg",
    category: "Architecture",
    categoryEn: "Architecture",
    readTime: 15,
    publishDate: "2025-11-22",
    author: "RV Frontend",
    tags: ["Architecture", "React", "Design Patterns", "Best Practices"],
    tagsEn: ["Architecture", "React", "Design Patterns", "Best Practices"],
    content: `# Modern Frontend Architecture: Patterns en Best Practices

Goede architectuur maakt code schaalbaar en maintainable.

## Atomic Design

\`\`\`
components/
  atoms/
    Button.tsx
    Label.tsx
    Input.tsx
  molecules/
    FormField.tsx
    SearchBox.tsx
  organisms/
    Header.tsx
    Footer.tsx
  templates/
    PageTemplate.tsx
\`\`\`

## Container/Presentational Pattern

\`\`\`jsx
// Container
export function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return <UserList users={users} />;
}

// Presentational
export function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conclusie

Goede architectuur maakt projecten succesvoller.`,
    contentEn: `# Modern Frontend Architecture: Patterns and Best Practices

Good architecture makes code scalable and maintainable.

## Atomic Design

\`\`\`
components/
  atoms/
    Button.tsx
    Label.tsx
    Input.tsx
  molecules/
    FormField.tsx
    SearchBox.tsx
  organisms/
    Header.tsx
    Footer.tsx
  templates/
    PageTemplate.tsx
\`\`\`

## Container/Presentational Pattern

\`\`\`jsx
// Container
export function UserListContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return <UserList users={users} />;
}

// Presentational
export function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Conclusion

Good architecture makes projects more successful.`
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}
