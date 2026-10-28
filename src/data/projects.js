/**
 * Portfolio Projects Data
 * Safiullah Alam — Frontend Developer
 * 
 * Featured projects listed in exact required presentation order:
 * 1. AB Avenue Store (Flagship Project)
 * 2. StockMaster PSX
 * 3. PSX Account Opening Form
 * 4. Umar Refrigeration
 * 5. Sareed Caterers
 * 6. ITSS Shoes
 */

export const projects = [
  {
    id: 'ab-avenue-store',
    title: 'AB Avenue Store',
    tagline: 'Flagship Ecommerce Storefront',
    category: 'Ecommerce Application',
    description:
      "A children's clothing and accessories ecommerce website designed to present collections, product categories, promotions, and shopping information through a branded storefront.",
    image: '/images/projects/ab-avenue.png',
    liveUrl: 'https://ab-avenue.vercel.app/',
    githubUrl: 'https://github.com/Safiullah-Alam/AB-Avenue-Store',
    featured: true,
    accentColor: '#E8567F',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Cart & Wishlist'],
    highlights: [
      'Interactive hero carousel showcasing seasonal collections and announcements',
      'Curated product categories for Girls, Boys, Baby, and Accessories',
      'Special promotional banner system with discount voucher application',
      'Responsive slide-out cart drawer and seamless WhatsApp order flow'
    ]
  },
  {
    id: 'stockmaster-psx',
    title: 'StockMaster PSX',
    tagline: 'Market Insights & Trading Education',
    category: 'Financial Education',
    description:
      'A website focused on Pakistan Stock Exchange education, market insights, and trading-related information.',
    image: '/images/projects/stockmaster-psx.png',
    liveUrl: 'https://stockmasters-guide.lovable.app/',
    githubUrl: null, // Repository not yet published
    featured: false,
    themeStyle: 'finance',
    accentColor: '#10B981',
    tags: ['React', 'Tailwind CSS', 'Finance UI', 'Educational Content', 'Market Guides'],
    highlights: [
      'Tailored dark financial dashboard aesthetics with clean metric cards',
      'Structured educational modules on PSX market mechanics and indicators',
      'Clear beginner guidance on broker selection and portfolio fundamentals',
      'Accessible, high-contrast layouts optimized for quick data reading'
    ]
  },
  {
    id: 'psx-account-opening',
    title: 'PSX Account Opening Form',
    tagline: 'Broker Client Onboarding Portal',
    category: 'FinTech Workflow',
    description:
      'A web-based account-opening form designed to organize client information and required documentation in one interface.',
    image: '/images/projects/psx-account-opening.png',
    liveUrl: 'https://mmk-psx-account-opening-form.netlify.app/',
    githubUrl: 'https://github.com/Safiullah-Alam/PSX-Form',
    featured: false,
    themeStyle: 'form',
    accentColor: '#3B82F6',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Netlify Forms', 'Form UX'],
    highlights: [
      'Multi-section intake layout separating identity, banking, and document uploads',
      'Conditional account type selection (Sahulat vs. Salaried accounts)',
      'Front-end field validation to minimize submission errors and omissions',
      'Integrated floating WhatsApp assistance channel for onboarding support'
    ]
  },
  {
    id: 'umar-refrigeration',
    title: 'Umar Refrigeration',
    tagline: 'Cooling & Appliance Services',
    category: 'Local Business',
    description:
      'A local appliance repair and refrigeration services website designed to present services and help customers find contact information.',
    image: '/images/projects/umar-refrigeration.png',
    liveUrl: 'https://umar-cooling-karachi.lovable.app/',
    githubUrl: null,
    featured: false,
    themeStyle: 'service',
    accentColor: '#0EA5E9',
    tags: ['React', 'Tailwind CSS', 'Mobile First', 'Service Booking', 'Local SEO'],
    highlights: [
      'Direct one-tap WhatsApp and phone call triggers for immediate service requests',
      'Comprehensive service breakdown covering AC, refrigerators, and appliances',
      'Trust badges, transparent service area details, and customer testimonials',
      'Mobile-first responsive architecture designed for on-the-go homeowners'
    ]
  },
  {
    id: 'sareed-caterers',
    title: 'Sareed Caterers',
    tagline: 'Wedding & Event Catering Showcase',
    category: 'Hospitality & Events',
    description:
      'A catering and event-services website presenting catering offerings, event information, and customer enquiry options.',
    image: '/images/projects/sareed-caterers.png',
    liveUrl: 'https://sareed-caterers.lovable.app/',
    githubUrl: null,
    featured: false,
    themeStyle: 'hospitality',
    accentColor: '#F59E0B',
    tags: ['React', 'Tailwind CSS', 'Editorial Design', 'Menu Showcase', 'Inquiry Flow'],
    highlights: [
      'Warm, elegant culinary visual presentation matching traditional hospitality',
      'Structured menu packages for weddings, corporate galas, and private events',
      'Customer enquiry and booking form with date and guest count inputs',
      'Responsive gallery showcasing authentic event setups and culinary presentation'
    ]
  },
  {
    id: 'itss-shoes',
    title: 'ITSS Shoes',
    tagline: 'Footwear Collection Storefront',
    category: 'Product Catalog',
    description:
      'An online footwear storefront showcasing Peshawari chappals, loafers, and shoes.',
    image: '/images/projects/itss-shoes.png',
    liveUrl: 'https://itss-shoes.vercel.app/',
    githubUrl: 'https://github.com/Safiullah-Alam/ITSS_Shoes',
    featured: false,
    themeStyle: 'store',
    accentColor: '#8B5CF6',
    tags: ['React', 'JavaScript', 'CSS3 / Bootstrap', 'Product Grid', 'Footwear Catalog'],
    highlights: [
      'Structured catalog showcasing traditional Peshawari craft alongside modern loafers',
      'Responsive card grid with clean product imagery and pricing details',
      'Quick view and product selection workflow designed for straightforward browsing',
      'Lightweight component structure ensuring fast load times on mobile devices'
    ]
  }
]
