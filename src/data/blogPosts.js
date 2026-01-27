export const defaultBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    description: "Learn how to use React Hooks to manage state and side effects in functional components.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized the way we write React components. Instead of using class components to manage state and lifecycle methods, we can now use functional components with hooks.</p>
      
      <h3>useState Hook</h3>
      <p>The useState hook allows you to add state to functional components. Here's a simple example:</p>
      <pre>const [count, setCount] = useState(0);</pre>
      
      <h3>useEffect Hook</h3>
      <p>The useEffect hook lets you perform side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
      
      <h3>Custom Hooks</h3>
      <p>You can create your own custom hooks to reuse stateful logic across components. This promotes code reusability and cleaner component structure.</p>
      
      <h2>Conclusion</h2>
      <p>React Hooks make your code more readable and maintainable. Start incorporating them into your projects today!</p>
    `,
    author: "Sarah Johnson",
    date: "2026-01-20",
    category: "Web Development",
    readTime: "5 min read",
    featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    featured: true
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    description: "A comprehensive guide to creating complex layouts with CSS Grid.",
    content: `
      <h2>Why CSS Grid?</h2>
      <p>CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional.</p>
      
      <h3>Basic Grid Setup</h3>
      <p>To create a grid container, simply use display: grid. Then define your columns and rows using grid-template-columns and grid-template-rows.</p>
      
      <h3>Grid Areas</h3>
      <p>Grid areas allow you to name sections of your layout, making it easier to position items and create responsive designs.</p>
      
      <h2>Best Practices</h2>
      <p>Always consider mobile-first design and use media queries to adjust your grid layout for different screen sizes.</p>
    `,
    author: "Michael Chen",
    date: "2026-01-18",
    category: "Design",
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    featured: false
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    description: "Understand the basics of machine learning and its real-world applications.",
    content: `
      <h2>What is Machine Learning?</h2>
      <p>Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.</p>
      
      <h3>Types of Machine Learning</h3>
      <p>There are three main types: supervised learning, unsupervised learning, and reinforcement learning. Each has its own use cases and advantages.</p>
      
      <h3>Popular Algorithms</h3>
      <p>Linear regression, decision trees, neural networks, and support vector machines are some of the most commonly used algorithms.</p>
      
      <h2>Getting Started</h2>
      <p>Start with Python and libraries like scikit-learn and TensorFlow to begin your machine learning journey.</p>
    `,
    author: "Dr. Emily Wang",
    date: "2026-01-15",
    category: "Data Science",
    readTime: "10 min read",
    featuredImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
    featured: false
  },
  {
    id: 4,
    title: "Building RESTful APIs with Node.js",
    description: "Learn how to create scalable and maintainable REST APIs using Node.js and Express.",
    content: `
      <h2>Introduction to REST APIs</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods and is stateless.</p>
      
      <h3>Setting Up Express</h3>
      <p>Express is a minimal and flexible Node.js web application framework. It provides a robust set of features for building APIs.</p>
      
      <h3>Routing and Middleware</h3>
      <p>Learn how to create routes for different endpoints and use middleware for authentication, logging, and error handling.</p>
      
      <h2>Best Practices</h2>
      <p>Use proper HTTP status codes, implement versioning, and always validate input data to create secure and reliable APIs.</p>
    `,
    author: "David Martinez",
    date: "2026-01-12",
    category: "Web Development",
    readTime: "8 min read",
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    featured: false
  },
  {
    id: 5,
    title: "UX Design Principles for Beginners",
    description: "Essential UX design principles every designer should know.",
    content: `
      <h2>Understanding User Experience</h2>
      <p>User Experience (UX) design focuses on creating products that provide meaningful and relevant experiences to users.</p>
      
      <h3>Core Principles</h3>
      <p>Usability, accessibility, consistency, and user feedback are fundamental principles that guide great UX design.</p>
      
      <h3>User Research</h3>
      <p>Understanding your users through research, interviews, and testing is crucial for creating effective designs.</p>
      
      <h2>Design Process</h2>
      <p>Follow a structured process: research, wireframing, prototyping, testing, and iteration to create user-centered designs.</p>
    `,
    author: "Lisa Anderson",
    date: "2026-01-10",
    category: "Design",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    featured: false
  },
  {
    id: 6,
    title: "Data Visualization with D3.js",
    description: "Create stunning interactive data visualizations using D3.js library.",
    content: `
      <h2>Introduction to D3.js</h2>
      <p>D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers using SVG, HTML, and CSS.</p>
      
      <h3>Core Concepts</h3>
      <p>Learn about selections, data binding, scales, axes, and transitions to create powerful visualizations.</p>
      
      <h3>Common Chart Types</h3>
      <p>Bar charts, line graphs, scatter plots, and pie charts are just the beginning. D3 allows you to create any visualization you can imagine.</p>
      
      <h2>Best Practices</h2>
      <p>Focus on clarity, choose appropriate chart types, and ensure your visualizations are accessible and responsive.</p>
    `,
    author: "Robert Taylor",
    date: "2026-01-08",
    category: "Data Science",
    readTime: "9 min read",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    featured: false
  },
  {
    id: 7,
    title: "Responsive Web Design Best Practices",
    description: "Master the art of creating websites that work perfectly on all devices.",
    content: `
      <h2>Mobile-First Approach</h2>
      <p>Start designing for mobile devices first, then progressively enhance the experience for larger screens.</p>
      
      <h3>Flexible Grids and Images</h3>
      <p>Use relative units like percentages and ensure images scale properly within their containers.</p>
      
      <h3>Media Queries</h3>
      <p>Media queries allow you to apply different styles based on device characteristics like screen width.</p>
      
      <h2>Performance Optimization</h2>
      <p>Optimize images, minimize HTTP requests, and use lazy loading to ensure fast load times on all devices.</p>
    `,
    author: "Jennifer Lee",
    date: "2026-01-05",
    category: "Web Development",
    readTime: "7 min read",
    featuredImage: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    featured: false
  },
  {
    id: 8,
    title: "Introduction to TypeScript",
    description: "Learn how TypeScript adds static typing to JavaScript for more robust code.",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript that adds optional static typing. It helps catch errors early and improves code quality.</p>
      
      <h3>Basic Types</h3>
      <p>Learn about primitive types like string, number, boolean, as well as arrays, tuples, and enums.</p>
      
      <h3>Interfaces and Classes</h3>
      <p>TypeScript brings object-oriented programming features to JavaScript, making it easier to structure large applications.</p>
      
      <h2>Getting Started</h2>
      <p>Install TypeScript globally, configure your tsconfig.json, and start converting your JavaScript projects today.</p>
    `,
    author: "Alex Thompson",
    date: "2026-01-03",
    category: "Web Development",
    readTime: "6 min read",
    featuredImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    featured: false
  }
];

const getLocalBlogPosts = () => {
  try {
    const local = localStorage.getItem('customBlogPosts');
    return local ? JSON.parse(local) : [];
  } catch (e) {
    return [];
  }
};

export const blogPosts = [...defaultBlogPosts, ...getLocalBlogPosts()];

export const getAllBlogPosts = () => {
  return [...defaultBlogPosts, ...getLocalBlogPosts()];
};