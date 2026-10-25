import {

    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Front-end Developer",
        icon: reactjs,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full-Stack developer",
        icon: web
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "School System",
        description:
            "Multi-school SaaS for managing students, teachers, classrooms, attendance, exams and fees. A central dashboard lets admins run every school, with plan limits, role-based access, two-factor login and Arabic/English support.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/nour-alshikh/school-system",
    },
    {
        name: "Qarar Academy",
        description:
            "Online learning platform with courses split into chapters, watch-progress tracking, enrollment, a cart and Paymob payments. The whole public site is editable from an admin CMS, with push notifications and Arabic/English (RTL) support.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "inertia",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "",
    },
    {
        name: "Mega Steel",
        description:
            "Corporate website and CMS for a steel company. Every page section, from services and sectors to materials and projects, is managed from the dashboard, plus quote requests, SEO settings with a sitemap, and Arabic/English (RTL).",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "inertia",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "",
    },
    {
        name: "Reeras",
        description:
            "Website and client portal for a software and hosting agency: CMS-driven service pages, a support ticket system with replies, attachments and status history, reservations, project requests and an external API.",
        tags: [
            {
                name: "laravel",
                color: "blue-text-gradient",
            },
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "alpinejs",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "",
    },
    {
        name: "Lampatronics Store",
        description:
            "Frontend for a lighting and electronics store on a multi-vendor e-commerce platform. Built the product cards, product sliders, mobile search, filters, discount banners and reviews, plus bulk actions in the admin products table.",
        tags: [
            {
                name: "vue",
                color: "blue-text-gradient",
            },
            {
                name: "vuex",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "frontend",
                color: "orange-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };
