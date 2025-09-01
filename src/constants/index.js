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
    title: 'RGPD conform (Web Application)',
    desc: 'A web Apllication that uses RAG system developped by python and prompt engeneering to generate full analysis , dashboard and a detailled report for RGPD conformity of a document.',
    subdesc:
      'Built as a unique Web app with Reactjs , TailwindCss , Css , Java Spring boot , Python, Nginx ... , was deployed with docker . It was scalable , high quality designe and solved the problem as expected.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
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
        name: 'React.js',
        path: '/assets/spring.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/docker.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/python.png',
      },
      {
        id: 5,
        name: 'Framer Motion',
        path: '/assets/nginx.png',
      },
    ],
  },
  {
    title: 'Pesonal Command Line',
    desc: 'A command line that Execute user text or voice orders ( open some websites , rename files based on their content , shutting down machine ...) ',
    subdesc:
      'this terminal makes life easier and resolve the probleme of time consumption from repetitive tasks.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
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
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/symfony.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/csharp.svg',
      },
      
    ],
  },
  {
    title: '3d open door quiz Game ',
    desc: 'A 3D quiz game where players navigate through doors by answering questions correctly. Built with Three.js and React Three Fiber, java spring boot for backend . it offers an immersive experience with engaging visuals and interactive gameplay.',
    subdesc:
      'The game is under development , for now the scene is ready , the player can answer quizes and increase it s score and unlock new characters and gain new badges and upgrade his level to be on top of dashboard .',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
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
        path: '/assets/3js.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/fiber.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/spring.png',
      },
      
    ],
  },
  {
    title: 'FootballGPT',
    desc: 'Up to date chatGPT dataset specialized in football ( soccer ) , it can answer any question about football , give you latest news about your favourite team or player , give you statistics and predictions about matches ...',
    subdesc:
      ' using Datastax as a Vectoriel database where embeddings are stocked , using ollama2 localy to generate embeddings from text , scrpped more than 10 websites including wekipidia.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/ollama.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/typescript.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/gpt.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/nextjs.svg',
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
    name: 'Maison de l intelligence Artificielle',
    pos: 'Internship',
    duration: ' 2 months ',
    title: "The Maison de l’Intelligence Artificielle (MIA) at the University Mohammed Premier in Oujda, inaugurated in July 2022, is the first African branch of the MIA Alpes-Maritimes (France) and serves as a pioneering hub for research, innovation, and collaboration in AI across the Oriental region.",
    icon: new URL("https://www.mapnews.ma/fr/sites/default/files/styles/corps_article_image/public/Inteligence%20artificielle.jpg?itok=8NM9a8bM"),
    animation: 'victory',
    sound: '/textures/project/victory.mp3',
  },
  {
    id: 2,
    name: 'Oracle',
    pos: 'oracle Certification',
    duration: '1 mois',
    title: " The OCI Generative AI Professional certification equips developers and AI practitioners with foundational knowledge of Large Language Models (LLMs), OCI’s Generative AI Service architecture, prompt engineering, fine-tuning, and building applications like Retrieval-Augmented Generation (RAG) systems or chatbots via OCI’s AI clusters and LangChain integration",
    icon: '/assets/oracle1.jpg',
    animation: 'clapping',
    sound: '/textures/project/clapping.mp3',
  },
  {
    id: 3,
    name: 'Genie Informatique',
    pos: 'Student at Ensao',
    duration: '2022 - 2025',
    title: "The Computer Engineering program at ENSAO (École Nationale des Sciences Appliquées d'Oujda) equips students with a strong foundation in computing, information systems, networks, and emerging ICT technologies, enabling them to design, develop, and integrate comprehensive software solutions.",
    icon: '/assets/ensao.png',
    animation: 'salute',
    sound: '/textures/project/salute.mp3',
  },
];