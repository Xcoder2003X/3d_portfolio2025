export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'From Safae',
    position: 'Developer Teammate',
    img: 'assets/review1.png',
    review:
      '“I had the pleasure of working with Ait Chikh Ayoub on several full-stack development projects, and their ability to adapt to new technologies and solve complex problems was a huge asset to our team. Whether it was integrating APIs, optimizing backend logic, or quickly learning new frameworks, they always brought a level of technical confidence that helped move our projects forward. They don’t just write code—they write clean, efficient, and maintainable solutions that make a difference.”',
  },
  {
    id: 2,
    name: 'From Mohammed',
    position: 'UI/UX Designer',
    img: 'assets/review2.png',
    review:
      ' “Working with Ait Chikh Ayoub on user interface design and front-end development was incredibly rewarding. They always considered user experience a top priority, and we often collaborated to bring intuitive and beautiful designs to life. What stood out most was their attention to detail and willingness to iterate based on feedback. They’re someone who understands that good software isn’t just functional—it’s also enjoyable to use.”',
  },
  {
    id: 3,
    name: 'From Ayoub',
    position: 'Project Lead',
    img: 'assets/review3.png',
    review:
      '“Ait Chikh  is someone I could always count on when managing project deadlines and team coordination. Their communication was clear, proactive, and constructive, which made a big difference in how smoothly our projects ran. They took ownership of their work, asked the right questions, and helped others when needed. Their leadership and accountability consistently contributed to successful outcomes.”',
  },
  {
    id: 4,
    name: 'From Manal',
    position: 'QA Tester',
    img: 'assets/review4.png',
    review:
      '“I’ve worked with Ait Chikh Ayoub in testing and deployment phases of multiple software builds, and what always impressed me was how quickly they responded to feedback and resolved issues. Their understanding of both development and QA processes made collaboration seamless. Bugs were fixed promptly, and they were always open to suggestions that improved the overall quality of the product.”',
  },
];

export const myProjects = [
  {
    title: 'Multi-Agent AI Call Center',
    desc: 'Designed and developed three specialized AI agents for sales, technical support, and pricing workflows.',
    subdesc:
      'Each agent uses distinct voice synthesis and manages a focused part of the customer journey, including lead qualification, technical assistance, and negotiation.',
    href: '',
    image: '/assets/projects/ai-call-center.jpg',
    logo: '/assets/logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'Generative AI',
        path: '/assets/gpt.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
    ],
  },
  {
    title: 'Open Source Contributions',
    desc: 'Regular contributions to international open-source projects through bug fixing, backend feature additions, and collaborative code reviews.',
    subdesc:
      'These contributions strengthen maintainability habits, teamwork, and the ability to understand existing codebases quickly.',
    href: '',
    image: '/assets/projects/open-source-contributions.jpg',
    logo: '/assets/logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Git',
        path: '/assets/github.svg',
      },
      {
        id: 2,
        name: 'Backend',
        path: '/assets/spring.png',
      },
      {
        id: 3,
        name: 'Code Review',
        path: '/assets/tick.svg',
      },
    ],
  },
  {
    title: 'Smart Commerce Platform',
    desc: 'Imaginary ecommerce application designed for modern online stores, with product discovery, cart management, checkout, and order tracking.',
    subdesc:
      'The platform combines a React storefront with a Spring Boot API, secure authentication, inventory management, payment-ready checkout flows, and an admin dashboard for sales monitoring.',
    href: '',
    image: '/assets/projects/ecommerce-app.jpg',
    logo: '/assets/logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Spring Boot',
        path: '/assets/spring.png',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'Docker',
        path: '/assets/docker.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.4 : isMobile ? 1.6 : 1.7,
    deskPosition: isMobile ? [0.5, -2.8, 0] : [0.25, -4.8, 0],
    cubePosition: isSmall ? [5, -5, 0] : isMobile ? [7, -5, 0] : isTablet ? [7, -5, 0] : [12, -5.5, 0],
    reactLogoPosition: isSmall ? [6, 4, 0] : isMobile ? [8, 4, 0] : isTablet ? [8, 4, 0] : [16, 3, 0],
    ringPosition: isSmall ? [-15, 7, 0] : isMobile ? [-20, 10, 0] : isTablet ? [-22, 10, 0] : [-26, 10, 0],
    targetPosition: isSmall ? [-15, -10, -10] : isMobile ? [-17, -10, -10] : isTablet ? [-19, -7, -10] : [-20, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Credit Agricole du Maroc - CAM / Al Filahi Cash',
    pos: 'Software Engineering Intern',
    duration: 'March - July 2026',
    title:
      'Led a mass data migration from Oracle to PostgreSQL 17 for a transactional scope of 3.85M lines using Ora2Pg, redesigned PL/SQL business logic into Spring Boot microservices, improved processing time by 35%, and integrated the persistence layer with Keycloak and Consul.',
    icon: '/assets/spring.png',
    animation: 'victory',
    sound: '/textures/project/victory.mp3',
  },
  {
    id: 2,
    name: 'Client Projects',
    pos: 'Software Engineering Intern',
    duration: 'October - November 2025',
    title:
      'Designed and implemented custom software modules for real clients in an Agile environment, modeled business logic, integrated REST APIs, and optimized code for maintainability and responsive application behavior.',
    icon: '/assets/react.svg',
    animation: 'clapping',
    sound: '/textures/project/clapping.mp3',
  },
  {
    id: 3,
    name: 'AIConform - SaaS for the European Market',
    pos: 'Software Developer',
    duration: 'March - June 2025',
    title:
      'Architected a scalable compliance assessment SaaS with Spring Boot and React, improved backend response time by 25%, implemented 15+ secure REST endpoints with Spring Security and JWT, built a RAG engine for document analysis, and deployed the multi-service app with Docker and Nginx.',
    icon: '/assets/logo1.png',
    animation: 'salute',
    sound: '/textures/project/salute.mp3',
  },
];
