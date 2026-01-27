export const defaultBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks: Learn How to Use useState, useEffect, and Custom Hooks in Functional Components",
    description: "Learn how to use React Hooks including useState hook, useEffect hook, and custom hooks to manage state and side effects in functional components. Master React Hooks for better code organization.",
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>React Hooks revolutionized the way we write React components. Instead of using class components to manage state and lifecycle methods, we can now use functional components with hooks. This comprehensive guide will teach you how to use React Hooks effectively in your projects.</p>
      
      <p>Functional components have become the preferred way to build React applications, and React Hooks make it possible to use state and other React features without writing a class. Whether you're building a simple component or a complex application, understanding React Hooks is essential for modern React development.</p>
      
      <h2>Understanding Functional Components with React Hooks</h2>
      <p>Functional components are JavaScript functions that return JSX. Before React Hooks, functional components were limited to displaying data passed as props. With React Hooks, functional components can now manage state, handle side effects, and access React features that were previously only available in class components.</p>
      
      <p>Learn how to transform your class components into functional components using React Hooks. This approach leads to cleaner, more maintainable code and better performance. Functional components with hooks are easier to test and understand, making your codebase more developer-friendly.</p>
      
      <h3>useState Hook: Managing State in Functional Components</h3>
      <p>The useState hook allows you to add state to functional components. This is one of the most commonly used React Hooks. Here's a simple example of how to use the useState hook:</p>
      <pre><code>import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <p>The useState hook returns an array with two elements: the current state value and a function to update it. You can use the useState hook multiple times in a single component to manage different pieces of state. This makes it easy to organize and manage component state in functional components.</p>
      
      <p>When working with the useState hook, remember that state updates are asynchronous. If you need to update state based on the previous state value, use the functional update form: <code>setCount(prevCount => prevCount + 1)</code>. This ensures you're always working with the most current state value.</p>
      
      <h3>useEffect Hook: Handling Side Effects in Functional Components</h3>
      <p>The useEffect hook lets you perform side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined. Learn how to use the useEffect hook to fetch data, set up subscriptions, or manually change the DOM.</p>
      
      <p>Here's an example of how to use the useEffect hook:</p>
      <pre><code>import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // This function runs after every render
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means this effect runs only once
  
  return &lt;div&gt;{data ? data.message : 'Loading...'}&lt;/div&gt;;
}</code></pre>
      
      <p>The useEffect hook accepts two arguments: a function that contains the side effect logic, and an optional dependency array. When the dependency array is empty, the effect runs only once after the initial render. If you include dependencies, the effect will re-run whenever those dependencies change.</p>
      
      <p>Learn how to clean up effects by returning a cleanup function from useEffect. This is important for preventing memory leaks, especially when setting up subscriptions or timers. The cleanup function runs before the component unmounts or before the effect runs again.</p>
      
      <h3>Custom Hooks: Reusing Stateful Logic</h3>
      <p>You can create your own custom hooks to reuse stateful logic across components. This promotes code reusability and cleaner component structure. Custom hooks are regular JavaScript functions that use other React Hooks.</p>
      
      <p>Here's an example of a custom hook:</p>
      <pre><code>function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Usage in a component
function MyComponent() {
  const { count, increment, decrement, reset } = useCounter(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;+&lt;/button&gt;
      &lt;button onClick={decrement}&gt;-&lt;/button&gt;
      &lt;button onClick={reset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <p>Custom hooks allow you to extract component logic into reusable functions. By creating custom hooks, you can share stateful logic between different components without duplicating code. This makes your codebase more maintainable and easier to test.</p>
      
      <p>When creating custom hooks, always start the function name with "use" to follow React's naming convention. This helps React identify hooks and apply the Rules of Hooks correctly. Custom hooks can use other hooks, including other custom hooks, allowing you to build complex, reusable logic.</p>
      
      <h2>Best Practices for Using React Hooks</h2>
      <p>When working with React Hooks, there are several best practices to follow. Always call hooks at the top level of your component, never inside loops, conditions, or nested functions. This ensures hooks are called in the same order every time your component renders.</p>
      
      <p>Only call hooks from React function components or custom hooks. Don't call hooks from regular JavaScript functions. This helps React track hook calls and maintain state correctly across renders.</p>
      
      <h2>Common React Hooks You Should Know</h2>
      <p>In addition to useState and useEffect, React provides several other built-in hooks. The useContext hook allows you to consume context values in functional components. The useReducer hook provides an alternative to useState for managing complex state logic.</p>
      
      <p>The useMemo and useCallback hooks help optimize performance by memoizing values and functions. Learn how to use these hooks to prevent unnecessary re-renders and improve your application's performance.</p>
      
      <h2>Conclusion</h2>
      <p>React Hooks make your code more readable and maintainable. By using functional components with hooks, you can write cleaner, more concise code that's easier to understand and test. Start incorporating React Hooks into your projects today to take advantage of these powerful features.</p>
      
      <p>Whether you're using the useState hook to manage component state, the useEffect hook to handle side effects, or creating custom hooks to share logic, React Hooks provide a modern approach to building React applications. Learn how to use React Hooks effectively, and you'll see significant improvements in your code quality and development workflow.</p>
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