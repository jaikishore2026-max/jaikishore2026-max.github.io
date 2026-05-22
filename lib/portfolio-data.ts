export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'development' | 'marketing' | 'all'
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  metrics?: string
  imageUrl?: string
}

export interface SkillCategory {
  title: string
  skills: { name: string; level: number; icon: string }[]
}

export interface TimelineItem {
  year: string
  role: string
  company: string
  description: string
  category: 'work' | 'education'
}

export interface StoryPhase {
  phase: number
  title: string
  subtitle: string
  description: string
  year: string
  icon: string
  isHighlight?: boolean
}

export interface LearningItem {
  title: string
  description: string
  icon: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export interface BusinessLearningItem {
  title: string
  description: string
  icon: string
  focus: string
}

export interface F1PassionData {
  headline: string
  description: string
  favorites: string[]
}

export interface PortfolioData {
  name: string
  title: string
  subTitle: string
  avatarText: string
  about: {
    bio: string
    age: number
    location: string
    education: string
    ctaResumeUrl?: string
    stats: { label: string; value: string }[]
  }
  skills: SkillCategory[]
  projects: Project[]
  timeline: TimelineItem[]
  storyPhases: StoryPhase[]
  motivationalQuotes: string[]
  currentlyLearning: LearningItem[]
  businessLearning: BusinessLearningItem[]
  f1Passion: F1PassionData
  socials: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
    email: string
  }
}

export const portfolioData: PortfolioData = {
  name: "Jaikishore",
  title: "Marketing Lead & Developer",
  subTitle: "Bridging the gap between engineering foundations and viral digital growth.",
  avatarText: "JK",
  about: {
    bio: "A high-energy, forward-thinking 17-year-old developer and marketing strategist. As the Marketing & Social Media Lead at Fluxibility Softwares, I orchestrate brand presence, community scaling, and social campaigns that make software accessible. At the same time, I study software engineering fundamentals—actively coding in C++, Java, and Python to understand the inner workings of the products I market.",
    age: 17,
    location: "India",
    education: "High School Graduate (CS & Business)",
    stats: [
      { label: "Role", value: "Marketing Lead" },
      { label: "Core Languages", value: "Python, C++, Java" },
      { label: "Brand Scale", value: "+150% Reach" },
      { label: "Age", value: "17 Years" }
    ]
  },
  skills: [
    {
      title: "Core Programming",
      skills: [
        { name: "Python Scripting", level: 85, icon: "terminal" },
        { name: "C++ Programming", level: 75, icon: "code" },
        { name: "Java Core", level: 70, icon: "coffee" },
        { name: "HTML & CSS Essentials", level: 80, icon: "layout" }
      ]
    },
    {
      title: "Growth & Social Strategy",
      skills: [
        { name: "Social Media Growth", level: 95, icon: "trending-up" },
        { name: "Brand & Copywriting", level: 90, icon: "edit-3" },
        { name: "Community Orchestration", level: 90, icon: "users" },
        { name: "Outreach & Ads Strategy", level: 80, icon: "target" }
      ]
    }
  ],
  projects: [
    {
      id: "fluxibility-brand",
      title: "Fluxibility Softwares Growth Campaign",
      description: "Led and executed the social media strategy resulting in massive brand reach.",
      longDescription: "Formulated the viral outreach schedule, content marketing hooks, and visual brand assets for Fluxibility Softwares. Managed campaigns across platforms, increasing direct user engagement and setting up active communities around product launches.",
      category: "marketing",
      tags: ["Brand Strategy", "Content Creation", "Community Growth", "Analytics"],
      metrics: "150%+ growth in community engagement",
      liveUrl: "https://github.com/Fluxibility-Softwares"
    },
    {
      id: "cli-rpg-cpp",
      title: "Tactical Console RPG in C++",
      description: "An object-oriented retro turn-based battle game written in modern C++.",
      longDescription: "Developed a text-based, highly strategic role-playing game in C++ using object-oriented principles. Implemented custom character classes, inventory systems, random procedural enemy encounters, and binary file-saving to load game progress.",
      category: "development",
      tags: ["C++", "OOP", "Algorithm Design", "File I/O"],
      githubUrl: "https://github.com/jaikishore2026-max"
    },
    {
      id: "smart-automation-python",
      title: "Social Media Asset Compiler",
      description: "A Python automation utility that bundles, crops, and schedules media posts.",
      longDescription: "Built a Python-based utility utilizing Pillow and schedule APIs to automate branding asset generation. The script bulk-appends company watermarks, standardizes layouts, and generates optimized hashtags based on automated topic tags.",
      category: "development",
      tags: ["Python", "Automation", "Pillow", "APIs"],
      githubUrl: "https://github.com/jaikishore2026-max"
    },
    {
      id: "discord-tech-helper",
      title: "FluxBot Community Manager",
      description: "A robust Java-based bot managing support tickets and automated posts.",
      longDescription: "Engineered a multithreaded Discord bot in Java using JDA (Java Discord API). Integrates features like automatic spam filtering, social post syndication (Twitter/LinkedIn to Discord channels), and custom gamification levels for active community members.",
      category: "all",
      tags: ["Java", "Discord JDA", "JSON", "Multithreading"],
      githubUrl: "https://github.com/jaikishore2026-max"
    }
  ],
  timeline: [
    {
      year: "2026 - Present",
      role: "Marketing & Social Media Lead",
      company: "Fluxibility Softwares",
      description: "Orchestrating direct digital strategy, copywriting, community scale, and graphic assets for software products.",
      category: "work"
    },
    {
      year: "2026",
      role: "High School Graduation",
      company: "Primary & Secondary School",
      description: "Graduated with a strong academic focus on Computer Science, Mathematics, and Business Administration.",
      category: "education"
    },
    {
      year: "2025",
      role: "Freelance Technical Writer & Growth Strategist",
      company: "Independent Client Service",
      description: "Developed automated workflows and curated branding contents for local startups and student networks.",
      category: "work"
    }
  ],
  storyPhases: [
    {
      phase: 1,
      title: "Origin",
      subtitle: "The Spark",
      description: "Curiosity in tech and self-learning. Started diving deep into programming, building small tools, experimenting with ideas. Realized the power of writing code and creating products.",
      year: "2023 - 2024",
      icon: "sparkles"
    },
    {
      phase: 2,
      title: "Skill Building",
      subtitle: "The Grind",
      description: "Web development, AI tools, Linux systems, consistent daily learning. Built projects, studied algorithms, contributed to real-world products. Turned curiosity into real technical capabilities.",
      year: "2024 - 2025",
      icon: "zap"
    },
    {
      phase: 3,
      title: "Breakthrough",
      subtitle: "The Moment",
      description: "Public speaking in front of 500+ people. Shared knowledge, built confidence, discovered leadership. This was the turning point—proof that technical skills + communication = impact.",
      year: "2025",
      icon: "award",
      isHighlight: true
    },
    {
      phase: 4,
      title: "Execution",
      subtitle: "The Build",
      description: "Building personal brand, shipping projects, adopting startup mindset. Moving from learning to creating, from student to founder mentality. Ready to execute and scale.",
      year: "2026 - Present",
      icon: "rocket"
    }
  ],
  motivationalQuotes: [
    "The best way to predict the future is to build it.",
    "Done is better than perfect. Ship and iterate.",
    "Your network is your net worth.",
    "Every expert was once a beginner who never gave up.",
    "Build in public. Let your work speak.",
    "Ideas are cheap, execution is expensive.",
    "The best time to start was yesterday. The second best time is now.",
    "Success is where preparation and opportunity meet.",
    "Focus on progress, not perfection."
  ],
  currentlyLearning: [
    {
      title: "AI Engineering",
      description: "Deep diving into LLMs, prompt engineering, AI integration in products, and building intelligent systems.",
      icon: "brain",
      level: "intermediate"
    },
    {
      title: "Linux Systems",
      description: "Mastering system administration, shell scripting, server architecture, and DevOps fundamentals.",
      icon: "terminal",
      level: "intermediate"
    },
    {
      title: "Startup Building",
      description: "Understanding founders' mentality, business models, fundraising, product-market fit, and scaling strategies.",
      icon: "rocket",
      level: "beginner"
    },
    {
      title: "System Design",
      description: "Distributed systems, database design, scalability patterns, and building production-grade architectures.",
      icon: "database",
      level: "beginner"
    },
    {
      title: "Advanced Frontend",
      description: "Next.js, React patterns, performance optimization, and building world-class user experiences.",
      icon: "layout",
      level: "advanced"
    }
  ],
  businessLearning: [
    {
      title: "Startup Mindset",
      description: "Thinking like a founder: seeing problems, building solutions, moving fast, and iterating based on market feedback.",
      icon: "lightbulb",
      focus: "Problem-solving approach"
    },
    {
      title: "Product Thinking",
      description: "Understanding user problems deeply, designing solutions that matter, measuring impact, and continuously improving.",
      icon: "target",
      focus: "User-centric development"
    },
    {
      title: "Business Fundamentals",
      description: "Revenue models, unit economics, customer acquisition, retention, and how tech businesses actually work.",
      icon: "trending-up",
      focus: "Growth & sustainability"
    },
    {
      title: "Leadership Development",
      description: "Communicating vision, building teams, making decisions under uncertainty, and inspiring others to execute.",
      icon: "users",
      focus: "Team execution"
    }
  ],
  f1Passion: {
    headline: "Speed. Precision. Excellence.",
    description: "Formula 1 represents the pinnacle of technology, strategy, and human excellence. Every decision matters. Every millisecond counts. That's how I approach building.",
    favorites: ["Lewis Hamilton", "Max Verstappen", "Ferrari", "Mercedes", "Monaco GP"]
  },
  socials: {
    github: "https://github.com/jaikishore2026-max",
    instagram: "https://www.instagram.com/jai_kishore33",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailme.jaikishore2026@gmail.com"
  }
}
