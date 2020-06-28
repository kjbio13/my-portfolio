const SkillsColor = "#000";

const DEVELOPMENT_DATA = {
    frontend:
        [
            {
                id: "1a",
                name: "Basics",
                items: [
                    {
                        id: "1aa",
                        text: "HTML",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1ab",
                        text: "CSS",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1ac",
                        text: "JavaScript",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1b",
                name: "Version Control",
                items: [
                    {
                        id: "1ba",
                        text: "Git",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1bb",
                        text: "GitHub",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1c",
                name: "Web Security",
                items: [
                    {
                        id: "1c1",
                        text: "HTTPS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1c2",
                        text: "CORS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1c3",
                        text: "Content Security Policy",
                        bar: 3,
                        color: SkillsColor
                    }
                    ,
                    {
                        id: "1c4",
                        text: "OWASP",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1c5",
                        text: "Security Risks",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },

            {
                id: "1d",
                name: "Package Managers",
                items: [
                    {
                        id: "1d1",
                        text: "npm",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1d2",
                        text: "yarn",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1e",
                name: "CSS Architecture",
                items: [
                    {
                        id: "1e1",
                        text: "BEM",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ef",
                name: "CSS Preprocessors",
                items: [
                    {
                        id: "1ef1",
                        text: "Sass",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ee",
                name: "Build Tools",
                items: [
                    {
                        id: "1ee1",
                        text: "npm scripts",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1ee2",
                        text: "Webpack",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ee3",
                        text: "Prettier",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ee4",
                        text: "ESLint",
                        bar: 4,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1f",
                name: "Frameworks",
                items: [
                    {
                        id: "1f1",
                        text: "React.js with Redux",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1f2",
                        text: "Angular with RxJS and NgRx",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1f3",
                        text: "Vue with VueX",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1g",
                name: "Modern CSS",
                items: [
                    {
                        id: "1g1",
                        text: "Styled Components",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1g2",
                        text: "CSS Module",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1g3",
                        text: "Styled JSX",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1h",
                name: "Web Components",
                items: [
                    {
                        id: "1h1",
                        text: "HTML Templates",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1h2",
                        text: "Custom Elements",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1h3",
                        text: "Shadow DOM",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1i",
                name: "CSS Frameworks",
                items: [
                    {
                        id: "1i1",
                        text: "Reactstrap",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1i2",
                        text: "Material UI",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1i3",
                        text: "Tailwind CSS",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1i4",
                        text: "Bootstrap",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1i5",
                        text: "Materialize CSS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1i6",
                        text: "Bulma",
                        bar: 2,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1j",
                name: "Testing",
                items: [
                    {
                        id: "1j1",
                        text: "Jest",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1j2",
                        text: "react-testing-library",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1j3",
                        text: "cypress",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1j4",
                        text: "enzyme",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1k",
                name: "Type Checkers",
                items: [
                    {
                        id: "1k1",
                        text: "TypeScript",
                        bar: 2,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1l",
                name: "Progressive Web Apps (APIs)",
                items: [
                    {
                        id: "1l1",
                        text: "Storage",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1l2",
                        text: "Web Sockets",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1l3",
                        text: "Service Workers",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1m",
                name: "Progressive Web Apps (Performance): ",
                items: [
                    {
                        id: "1m1",
                        text: "PRPL Pattern",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1m2",
                        text: "RAIL Model",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1m3",
                        text: "Performance Metrics",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1m5",
                        text: "Lighthouse",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1m6",
                        text: "DevTools",
                        bar: 4,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1n",
                name: "Server Side Rendering",
                items: [
                    {
                        id: "1n1",
                        text: "React.js with Next.js",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1n2",
                        text: "GraphQL with Apollo and Relay Modern",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1o",
                name: "Static Site Generators",
                items: [
                    {
                        id: "1o1",
                        text: "Next.js",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1o2",
                        text: "Gatsby.js",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1p",
                name: "Mobile & Desktop",
                items: [
                    {
                        id: "1p1",
                        text: "React Native",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1p2",
                        text: "Electron",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1q",
                name: "Web Assembly",
                items: [
                    {
                        id: "1q1",
                        text: "Web Assembly",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            }
        ],
    backend:
        [

            {
                id: "1aa",
                name: "Languages",
                items: [
                    {
                        id: "1aa1",
                        text: "JavaScript",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1aa2",
                        text: "Python",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1aa3",
                        text: "Java",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1aa4",
                        text: "C#",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1aa3",
                        text: "php",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1aa4",
                        text: "Go",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1bb",
                name: "Version Control",
                items: [
                    {
                        id: "1bb1",
                        text: "Git",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1bb2",
                        text: "GitHub",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1cc",
                name: "Relational Databases",
                items: [
                    {
                        id: "1cc1",
                        text: "PostgreSQL",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "12",
                        text: "MySQL",
                        bar: 5,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1eee",
                name: "NoSQL Database",
                items: [
                    {
                        id: "1eee1",
                        text: "MongoDB",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1eee2",
                        text: "DynamoDB",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ff",
                name: "APIs",
                items: [
                    {
                        id: "1ff1",
                        text: "REST",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1ff2",
                        text: "JSON API",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1ff3",
                        text: "SOAP",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ff4",
                        text: "gRPC",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1gg",
                name: "Caching",
                items: [
                    {
                        id: "1gg1",
                        text: "CDN",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1gg2",
                        text: "Client Side",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1gg3",
                        text: "Sever-side: Redis",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1gg4",
                        text: "Sever-side: Memcached",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1hh",
                name: "Web Security",
                items: [
                    {
                        id: "1hh1",
                        text: "Hashing Algorithm",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1hh2",
                        text: "HTTPS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1hh3",
                        text: "CORS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1hh4",
                        text: "Content Security Policy",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1hh5",
                        text: "OWASP Security Risks",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ii",
                name: "Testing",
                items: [
                    {
                        id: "1ii1",
                        text: "Integration Testing",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ii2",
                        text: "Unit Testing",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ii3",
                        text: "Functional Testing",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1jj",
                name: "CI/CD",
                items: [
                    {
                        id: "1jj1",
                        text: "Design and Development Principles",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1jj2",
                        text: "SOLID",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1jj3",
                        text: "KISS",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1jj4",
                        text: "YAGNI",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1jj4",
                        text: "DRY",
                        bar: 4,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1kk",
                name: "Architectural Patterns",
                items: [
                    {
                        id: "1kk1",
                        text: "Monolithic Apps",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1kk2",
                        text: "Microservices",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1kk3",
                        text: "SOA",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1kk4",
                        text: "CQRS",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1kk5",
                        text: "Event Sourcing",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ll",
                name: "Search Engines",
                items: [
                    {
                        id: "1ll1",
                        text: "Elasticsearch",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ll2",
                        text: "Solr",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1",
                name: "Message Brokers",
                items: [
                    {
                        id: "1mm1",
                        text: "RabbitMQ",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1mm2",
                        text: "Kafka",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1nn",
                name: "Containerization and Virtualization",
                items: [
                    {
                        id: "1nn1",
                        text: "Docker",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1nn2",
                        text: "GraphQL with Apollo",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1nn3",
                        text: "GraphQL with Relay Modern",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1oo",
                name: "Web Sockets and Web Servers",
                items: [
                    {
                        id: "1oo2",
                        text: "Nginx",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1oo3",
                        text: "Apache",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1oo4",
                        text: "MS IIS",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1qq",
                name: "Building for Scale",
                items: [
                    {
                        id: "1qq1",
                        text: "Mitigation Strategies",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1qq2",
                        text: "Horizontal/Vertical Scaling",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            }

        ],
    devops:
        [
            {
                id: "1aaaa",
                name: "Languages",
                items: [
                    {
                        id: "1aaaa1",
                        text: "Python",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa2",
                        text: "Ruby",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa3",
                        text: "Node.js",
                        bar: 5,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa4",
                        text: "Go",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa5",
                        text: "Rust",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa6",
                        text: "C",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaaa7",
                        text: "C++",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1bbbb",
                name: "OS Concepts",
                items: [
                    {
                        id: "1bbbb1",
                        text: "OS Concepts",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1aaa",
                name: "Server Management",
                items: [
                    {
                        id: "1aaa1",
                        text: "Ubuntu",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaa2",
                        text: "CentOS",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaa3",
                        text: "RHEL",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1aaa4",
                        text: "Linux",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1aaa5",
                        text: "Unix",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1aaa6",
                        text: "Windows FreeBSD",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1bbb",
                name: "Terminal",
                items: [
                    {
                        id: "1bbb1",
                        text: "tmux",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb2",
                        text: "screen",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb3",
                        text: "bash",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb4",
                        text: "vim",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb5",
                        text: "nano",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb6",
                        text: "powershell",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1bbb6",
                        text: "emacs",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ccc",
                name: "System Performance",
                items: [
                    {
                        id: "1ccc1",
                        text: "nmon",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc2",
                        text: "iostat",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc3",
                        text: "sar",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc4",
                        text: "vmstat",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc5",
                        text: "stract",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc6",
                        text: "dtrace",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc7",
                        text: "systemtap",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc8",
                        text: "uname",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc4",
                        text: "df",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ccc9",
                        text: "history",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ddd",
                name: "Networking, Security and Protocols",
                items: [
                    {
                        id: "1ddd1",
                        text: "Emails",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ddd2",
                        text: "HTTP, HTTPS",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ddd3",
                        text: "FTP",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ddd4",
                        text: "SSL/TLS",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ddd5",
                        text: "SSH",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ddd6",
                        text: "Port Forwarding",
                        bar: 3,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1eeee",
                name: "Networking, Security and Protocols",
                items: [
                    {
                        id: "1eeee1",
                        text: "Reverse Proxy",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1eeee2",
                        text: "Caching server",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1eeee3",
                        text: "Forward Proxy",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1eeee4",
                        text: "Load Balancer",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1eeee5",
                        text: "Firewall",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1fff",
                name: "Web Server",
                items: [
                    {
                        id: "1fff1",
                        text: "IIS",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1fff2",
                        text: "Nginx",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff3",
                        text: "Apache",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff4",
                        text: "Tomcat",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff5",
                        text: "Caddy",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff6",
                        text: "Istio",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff7",
                        text: "Envoy",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff8",
                        text: "Linkerd",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1fff4",
                        text: "Consul",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ggg",
                name: "Infrastructure as a Code",
                items: [
                    {
                        id: "1ggg1",
                        text: "Infrastructure as a Code",
                        bar: 2,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1hhh",
                name: "Containers:",
                items: [
                    {
                        id: "1hhh1",
                        text: "Docker",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1hhh2",
                        text: "LXC",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1iii",
                name: "Configuration Management",
                items: [
                    {
                        id: "1iii1",
                        text: "Ansible",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1iii2",
                        text: "Salt",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1iii3",
                        text: "Chef",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1iii4",
                        text: "Puppet",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1jjj",
                name: "Container Orchestration",
                items: [
                    {
                        id: "1jjj1",
                        text: "Kubernetes",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1jjj2",
                        text: "Mesos",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1jjj3",
                        text: "Docker",
                        bar: 2,
                        color: SkillsColor
                    },
                    {
                        id: "1jjj4",
                        text: "Swarm",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1jjj5",
                        text: "Nomad",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1kkk",
                name: "Infrastructure Provisioning",
                items: [
                    {
                        id: "1kkk1",
                        text: "Terraform",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1kkk2",
                        text: "CloudFormation",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1kkk3",
                        text: "Pulumi",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1lll",
                name: "Infrastructure Monitoring",
                items: [
                    {
                        id: "1lll1",
                        text: "Prometheus",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1lll2",
                        text: "Nagios",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1lll3",
                        text: "Grafana",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1lll4",
                        text: "Zabbix",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1lll5",
                        text: "Monit",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1lll6",
                        text: "Datadog",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1nnn",
                name: "Application Monitoring",
                items: [
                    {
                        id: "1nnn1",
                        text: "Jaeger",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1nnn2",
                        text: "New Relic",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1nnn3",
                        text: "AppDynamics",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1nnn4",
                        text: "Instana",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1nnn5",
                        text: "Opentracing",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ooo",
                name: "Log Management",
                items: [
                    {
                        id: "1ooo1",
                        text: "Elastic Stack",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ooo2",
                        text: "Grayog",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ooo3",
                        text: "Splunk",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ooo4",
                        text: "Papertrail",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ppp",
                name: " Cloud Providers",
                items: [
                    {
                        id: "1ppp1",
                        text: "AWS",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp2",
                        text: "Google Cloud",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp3",
                        text: "Azure",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp4",
                        text: "Heroku",
                        bar: 4,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp2",
                        text: "Digital Ocean",
                        bar: 3,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp3",
                        text: "Linode",
                        bar: 1,
                        color: SkillsColor
                    },
                    {
                        id: "1ppp4",
                        text: "Vultr",
                        bar: 1,
                        color: SkillsColor
                    }
                ]
            },
            {
                id: "1ggg",
                name: "Cloud Design Patterns",
                items: [
                    {
                        id: "1qqq1",
                        text: "",
                        bar: 2,
                        color: SkillsColor
                    }
                ]
            }

        ]
}

export default DEVELOPMENT_DATA;