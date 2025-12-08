import {
    azure,
    ux,
    rapidapi,
    intelij,
    sigrid,
    gitlab,
    azul,
    trip_palette,
    prototyping,
    ai,
    problem,
    architecture_design,
    challenges,
    cicd,
    code_quality,
    documentation,
    implementation,
    mobile,
    patterns,
    role,
    solution,
    story,
    tdd,
    technology,
    software_dev,
    fullstack,
    nodejs,
    kotlin,
    adobexd,
    sql,
    ell,
    jira,
    firebase,
    android_studio,
    python,
    colab,
    java,
    git,
    figma,
    ing,
    postgresql,
    graphql,
    leaderboard,
    math,
    movie,
    nyeusi,
    android,
    analysis,
    preparation,
    visualization,
    management,
    gameDev,
    spring,
    erasmus,
    uvt,
    twente,
    victory_square,
    azul2,
    vrades,
    datascience,
    reactjs,
    spy_for_hire,
    iq_quiz_app,
    docker,
    docker_skill,
    sql_skill,
    javascript,
    jsonPic,
    insomnia,
    vradesWatch,
    uni,
    sfhWatch, star
} from '../assets';


export const navLinks = [{
    id: 'about', title: 'About',
}, {
    id: 'projects', title: 'Projects',
}, {
    id: 'contact', title: 'Contact',
},];

const services = [{
    title: 'Android Developer', icon: android
}, {
    title: 'Software Developer', icon: software_dev,
}, {
    title: "Full Stack Developer",
    icon: fullstack,
    description: "Developing scalable web applications with React, Node.js, and databases.",
    skills: ["React", "Node.js", "Express", "MongoDB", "SQL", "REST APIs"]
}, {
    title: 'Software Management', icon: management
}];
const skills = [{
    name: 'Java', icon: java,
}, {
    name: 'Spring Boot', icon: spring,
}, {
    name: 'Kotlin', icon: kotlin,
}, {
    name: 'React', icon: reactjs,
}, {
    name: 'Python', icon: python,
}, {
    name: 'PostgreSQL', icon: postgresql,
}]

const technologies = [

    {
        name: "Android Studio", icon: android_studio,
    }, {
        name: "Firebase", icon: firebase,
    }, {
        name: 'Jira', icon: jira,
    }, {
        name: 'Azure DevOps', icon: azure,
    }, {
        name: 'GIT', icon: git,
    }, {
        name: 'Adobe XD', icon: adobexd,
    }, {
        name: 'Node JS', icon: nodejs,
    },

];

const exp = [
    {
        title: 'AI Engineer Intern',
        company_name: 'ING Nederland',
        icon: ing,
        iconBg: '#333333',
        date: 'Apr 2024 - Nov 2024',
    }, {
        title: 'Master Software Technology',
        company_name: 'University of Twente',
        icon: twente,
        iconBg: '#333333',
        date: 'Sep 2022 - March 2025',
    },
    {
        title: 'Android Developer Intern',
        company_name: 'Victory Square Partners',
        icon: victory_square,
        iconBg: '#333333',
        date: 'Aug 2021 - Sep 2021',
    },
    {
        title: 'Erasmus Exchange in Lisbon',
        company_name: 'IADE - Universidade Europeia ',
        icon: erasmus,
        iconBg: '#333333',
        date: 'Sep 2020 - Feb 2021',
    }, {
        title: 'Bachelor Computer Science',
        company_name: 'West University of Timisoara',
        icon: uvt,
        iconBg: '#333333',
        date: 'Sep 2019 - Aug 2022',
    }];

const storyParagraphs = [
    {
        title: "My Journey: From Code Enthusiast to Technical Data Analyst",
        content: "🦹‍♂️I am Alex Madaras, a 24 y.o. aspiring Data Analyst & Product Strategist and Tour Guide, located in Timisoara, Romania. I lived in Enschede, Netherlands for 2.5 years to pursue my Master's Degree in Computer Science, and return home."
    },
    {
        title: "The Spark: Code, Curiosity, and Travel",
        content: "💻Since I was teenager, I was passionate about technology, and travelling, constantly looking for automated solutions that could it improve peoples' lives. This curiosity motivated me to follow a Bachelor's Degree of Computer Science, then the Master in Computer Science.\n\n🗺️Adventurous personality, with 25+ countries visited, at just 19 y.o. I embarked on my first Erasmus Mobility at the other edge of Europe: in the capital of Portugal - Lisbon, where I discovered my passion for innovative technology which pushed me to a Summer Internship in the upcoming summer."
    },
    {
        title: "Academic Rigor and Professional Impact",
        content: "🎓Ambitious enough after surviving my first experience abroad, I decided to take a new challenge: this time for real. Thus, after graduating with my Bachelor's at the West University of Timisoara, I enrolled for a Master's Degree in another culturally rich pole of Europe: the Netherlands,🇳🇱.\n\n💡During my two-year Master's in Computer Science, I learnt several important skills: from Software Management and Requirement Negotiation to Software Engineering Techniques and applying SOLID code principles to build a web sites and developing LLMs for banks (ING).\n\n🏦My journey didn't end here, as after my LLM project with ING, I joined them in an Internship for my Master's Thesis, building AI models (Python, SQL) and delivering business solutions, while collaborating with professionals and veterans in the banking industry."
    },
    {
        title: "Connecting People and Products",
        content: "👥My journey is rounded out by my extracurricular activity as a Tour Guide, a role I perform in my free time. This has been crucial in shaping my soft skills, ensuring I can make complex information digestible and engaging for diverse international audiences.\n\nI'm always excited to see what the future will bring! xD"
    }
];


const projects = [{
        id: 'project-business-intelligence',
        name: 'End-to-End BI Analysis: From ETL to Strategic Recommendations',
        type: 'Academic Project',
        description: 'The project has been developed as part of the Data Science course at University of Twente. It presents the analysis and visualizations of Classic Models Inc.\'s business performance using the Balanced Scorecard (BSC) approach to provide strategic recommendations for its management. The data is stored on PostgreSQL database server.',
        technologies: [{
            name: 'Python', icon: python,
        },
            {
                name: 'PostgreSQL', icon: postgresql,
            },
            {
                name: 'Google Colab', icon: colab,
            }
        ],
        repo: 'https://github.com/alexmadaras00/Business-Intelligence',
        image: datascience,
        paragraphs: [{
            title: "Business Challenge",
            image: problem,
            description: "The core challenge in Business Intelligence (BI) is effectively aligning an organization's performance metrics with its broader strategic aims, avoiding reliance solely on financial metrics. This project addressed the need to provide comprehensive, data-driven recommendations across financial, customer, and internal perspectives to improve overall business performance."
        }, {
            title: "BI Framework & Methodology",
            image: implementation,
            description: "The solution was built on the 𝗕𝗮𝗹𝗮𝗻𝗰𝗲𝗱 𝗦𝗰𝗼𝗿𝗲𝗰𝗮𝗿𝗱 (𝗕𝗦𝗖) framework, which guided the formulation of business questions and Key Performance Indicators (KPIs) across its four core perspectives. The methodology included designing a data model, executing the ETL process (Extract, Transform, Load), and performing analysis using Python."
        }, {
            title: "Data Architecture",
            image: architecture_design,
            description: "The project utilized a multidimensional data modeling technique known as the 𝗦𝗻𝗼𝘄𝗳𝗹𝗮𝗸𝗲 𝗦𝗰𝗵𝗲𝗺𝗮 (a variation of the Star Schema) to structure the data efficiently and avoid redundancy. The architecture centered on one 𝗙𝗮𝗰𝘁 𝗦𝗮𝗹𝗲𝘀 table and seven dimension tables (e.g., Products, Customers) across two distinct layers."
        }, {
            title: "Technical Stack",
            image: technology,
            description: "The ETL process and the core visualization were executed using 𝗣𝘆𝘁𝗵𝗼𝗻. Specifically, the 𝗣𝗹𝗼𝘁𝗹𝘆 and 𝗠𝗮𝘁𝗽𝗹𝗼𝘁𝗹𝗶𝗯 libraries were employed for developing visualizations (such as pie charts and bar charts) to answer the business questions, showcasing strong data manipulation skills."
        }, {
            title: "Key Insight: Process Bottleneck",
            image: solution,
            description: "Analysis of the Internal Business Process perspective revealed a critical disparity: the average order processing time in the Japan territory was a significant 𝟭𝟱 𝗱𝗮𝘆𝘀, contrasting sharply with the 3 days recorded in the APAC and EMEA regions. This finding led to a primary strategic recommendation focused on immediate process optimization and internal knowledge transfer to address the efficiency gap."
        }, {
            title: "Key Insight: Strategic Growth",
            image: analysis,
            description: "Financial analysis identified that 𝗩𝗶𝗻𝘁𝗮𝗴𝗲 𝗖𝗮𝗿𝘀 and 𝗠𝗼𝘁𝗼𝗿𝗰𝘆𝗰𝗹𝗲𝘀 generated the highest gross profit margins (over 40.5%). The strategic recommendation derived was to focus targeted marketing campaigns on these product lines to maximize profitability, despite Classic Cars having the highest sales volume."
        }, {
            title: "SQL & Data Foundation",
            image: sql,
            description: "The project demonstrated proficiency in SQL logic for structuring complex relational datasets into Fact and Dimension tables. 𝗣𝗼𝘀𝘁𝗴𝗿𝗲𝗦𝗤𝗟 was the intended Database Management System (DBMS) for deploying the data warehouse."
        }]
    },
        {
            id: 'project-trippalette',
            name:
                'Trip Palette',
            type:
                'Web Application',
            description:
                'Trip Palette is an innovative trip-planning platform that guides users from start to finish with a quick, simple, and personalized approach. Unlike existing applications, which focus on limited features like maps or route finding, Trip Palette AI considers a traveler’s unique preferences, including group type, desired activities, budget, and more. Users can plan trips, book accommodations, connect with communities, and share feedback to improve recommendations.',
            technologies:
                [{
                    name: 'Java', icon: java,
                }, {
                    name: 'Spring Boot', icon: spring,
                }, {
                    name: 'React', icon: reactjs,
                }, {
                    name: 'Docker', icon: docker,
                }, {
                    name: 'PostgreSQL', icon: postgresql,
                },],
            repo:
                'https://github.com/alexmadaras00/TripPlanner',
            image:
            trip_palette,
            paragraphs:
                [{
                    title: 'Problem',
                    image: problem,
                    description: 'With countless apps, websites, and options, even a weekend getaway turns into hours of fragmented research: flights here, hotels there, visas, activities, budgets... It’s overwhelming.\n' + 'Technology, which was supposed to make this process easier, did the opposite, especially for the non-tech people who just want a simple, easy and intuitive platform to plan their trip, without opening 20 tabs.',
                }, {
                    title: 'Solution',
                    image: solution,
                    description: 'Instead of the classical approach of opening several pages, our app integrates the necessary features in one form, containing destination ideas, group type, budget, and activities that the user has to fill in.\n' + 'From discovering destinations to booking stays, suggesting daily activities, and adapting based on feedback, TripPaletteAI covers the entire journey.'
                }, {
                    title: 'Architecture and Design',
                    image: architecture_design,
                    description: 'Trip Palette follows thoroughly the Microservices approach. Split into services, the code base is highly maintainable and scalable, where for each business functionality' + 'there is one corresponding service. Moreover, the app follows closely the Service Oriented Architecture (SOA) principles, with 3 layers for each service: data, domain and presentation.'
                }, {
                    title: 'Docker',
                    image: docker_skill,
                    description: 'In check with the SOA principles, Trip Palette is deployed on Docker containers, ensuring a 24/7 availability. Each service has its own container, which generates a Docker image.'
                }, {
                    title: 'AI',
                    image: ai,
                    description: 'Among the APIs integrated, an AI model is incorporated through Eden API. The user sends details of his information strictly relevant to a trip, while the app retrieves the answer from the AI model trough a REST call.'
                }, {
                    title: 'SQL',
                    image: sql_skill,
                    description: 'The web application incorporates database for each service, storing trip, user information. The SQL dialect used is Postgre.'
                }]

        }
        ,
        {
            id: 'project-azul',
            name:
                'AzulApp',
            type:
                'Java PC Game',
            description:
                'This project is a Java-based implementation of the popular Azul board game, developed as part of a team of 5 students for a university project. The team applied 4 Design patterns to ensure high-quality code, and followed Agile methodology and practices to ensure efficient development. The backlog was managed using Jira, allowing for effective colab',
            technologies:
                [{
                    name: 'Java', icon: java,
                }, {
                    name: 'GitLab', icon: gitlab,
                }, {
                    name: 'Jira', icon: jira,
                }, {
                    name: 'GIT', icon: git,
                }, {
                    name: 'Sigrid', icon: sigrid
                }],
            image:
            azul,
            repo:
                'https://github.com/alexmadaras00/AzulApp',
            paragraphs:
                [{
                    title: 'Architecture',
                    image: architecture_design,
                    description: 'Azul App follows the classical and efficient architectural pattern of Model View Controller (MVC).'
                }, {
                    title: 'Technologies used',
                    image: technology,
                    description: 'For our course project, we developed the game using Java and designed the GUI with JavaFX. We managed the project using the Agile methodology on Jira and deployed the final version on GitLab.',
                }, {
                    title: 'Design Patterns',
                    image: patterns,
                    description: 'Our project adopted four design patterns: Singleton, Facades, Proxy, and Observer. All of these were used according to the famous book: ' + 'https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612',
                    placeholder: 'Design Patterns: Elements of Reusable Object-Oriented Software Hardcover – January 1, 1994\n' +
                        'by Erich Gamma (Author).'
                }, {
                    title: 'CI/CD Pipeline on GitLab',
                    image: cicd,
                    description: 'In this project we also built a crucial component of software development - a CI/CD(Continuous Integration/ Continuous Development) pipeline, automating build, and test using Maven and OpenJDK 17 to ensure efficient compilation. Comprehensive unit tests and coverage reports with JUnit and JaCoCo are integrated into GitLab, enhancing code quality and reliability. Our pipeline has three stages: one for build, one for testing, and one for evaluating the quality of our code base.'
                }, {
                    title: 'Test-Driven Development (TDD)',
                    image: tdd,
                    description: 'We applied a Test-Driven Development approach throughout the project, writing unit tests before implementing features. This helped clarify requirements early, improve code quality, and ensure maintainability. I used tools like JUnit, Mockito, JaCoCo, and Cobertura for testing and code coverage, all integrated into our GitLab CI/CD pipeline for continuous feedback.'
                }, {
                    title: 'Code Quality Metrics',
                    image: code_quality,
                    description: 'To ensure high code quality, we integrated Sigrid, a powerful static analysis tool, into our CI/CD pipeline. Sigrid evaluates the codebase and assigns a maintainability score (ranging from 1 to 5). Through iterative improvements, we reached an excellent score of 4.4/5. The tool also provided actionable recommendations for further optimization, helping us maintain long-term quality and consistency. Its analysis runs automatically in the third stage of the pipeline, enabling continuous quality assessment with every commit..'
                }, {
                    title: 'Watch the Gameplay on YouTube',
                    link: 'https://www.youtube.com/watch?v=vTB8TIt_PJw',
                    description: 'Watch it on YouTube!'

                }

                ]
        }
        ,
        {
            id: 'project-ell',
            name:
                "Erasmus in Lisbon - Hackaton App",
            type:
                'Android Application',
            description:
                'Android App developed during a 1 week Hackaton organized by IADE Creative University.',
            image:
            ell,
            technologies:
                [{
                    name: 'Kotlin', icon: kotlin,
                }, {
                    name: 'Android Studio', icon: android_studio,
                }, {
                    name: 'Adobe XD', icon: adobexd,
                }],

            repo:
                'https://github.com/alexmadaras00/Erasmus-In-Lisbon-Hackaton-App',
            paragraphs:
                [{
                    title: 'Problem',
                    image: problem,
                    description: 'Many newbie Erasmus Students in Lisbon don\'t know what places to visit or where to find the best prices for food and transportation subscriptions.'
                }, {
                    title: 'Solution',
                    image: solution,
                    description: 'I developed an Android application designed to support Erasmus students newly arrived in Lisbon. The app helps them adapt more easily and connect with the local community by recommending the best places for essential activities, social engagement, and cultural experiences.',
                }, {
                    title: 'Strong Architectural Patterns',
                    image: architecture_design,
                    description: 'The prototype is fully created in Adobe XD, using Material Design Rules, whereas the architecture of the application is built using MVVM and DataBinding.'
                },

                    {
                        title: 'Technologies',
                        image: technology,
                        description: 'Built using Android Studio and the Kotlin programming language, this project ensures broad compatibility across a wide range of Android devices. Leveraging Kotlin’s modern syntax and Android Studio’s robust development environment, the app benefits from enhanced performance, maintainability, and seamless integration with the latest Android APIs and libraries.'
                    },]

        }
        ,
        {
            id: 'project-vrades',
            name:
                'VRADES',
            type:
                'Android Application',
            description:
                'Introducing my Bachelor Thesis project - an Android App that detects emotions and helps users establish healthier habits with personalized recommendations. Join us on the journey towards better emotional health and wellbeing today!',
            technologies:
                [{
                    name: 'Android Studio', icon: android_studio,
                }, {
                    name: 'Kotlin', icon: kotlin,
                }, {
                    name: 'Firebase', icon: firebase,
                }, {
                    name: 'RapidAPI', icon: rapidapi
                }, {
                    name: 'Adobe XD', icon: adobexd,
                }],
            image:
            vrades,
            repo:
                'https://github.com/alexmadaras00/VRADES',
            paragraphs:
                [{
                    title: 'Problem',
                    image: problem,
                    description: 'Current apps used for emotion detections do not offer user authentication or result tracking, making it impossible for users to monitor their progress. Additionally, existing apps primarily focus on face detection, with no mechanism to validate the accuracy or relevance of their outputs.'
                }, {
                    title: 'Solution',
                    image: solution,
                    description: 'The application gathers emotional data through three types of detection tests, validating the results using APIs and custom algorithms. It allows users to track their emotional states over time and, when needed, request personalized lifestyle advice based on detected patterns and habits.'
                }, {
                    title: 'Database Architecture',
                    image: firebase,
                    description: 'The data of the app is stored securely inside a Google Firebase Realtime Database, which communicates with Firebase Authentication, where the users\' data is stored. The media files inside the application are stored in the Firebase Storage service, linked also with the Realtime Database.'
                },

                    {
                        title: 'Modern Architecture',
                        image: architecture_design,
                        description: 'VRADES is built using one of the most recent architectural patterns: MVVM (Model View - View Model), combining the ”Data Binding” and ”View Binding” libraries. The application is structured thoroughly according to the programming principles, with three main layers: data layer, domain layer, and presentation layer.'
                    }, {
                    title: 'Watch the Demo on YouTube',
                    image: vradesWatch,
                    description: 'Watch it on YouTube!',
                    link: 'https://www.youtube.com/watch?v=Xu7hVeqQyXU'
                }]

        }
        , // {
//     id: 'project-bi',
//     name: 'Business Intelligence',
//     description: 'Data analysis and visualization project on Classic Models Inc.\'s business performance using the BSC approach, with strategic recommendations for management. Data stored on PostgreSQL.',
//     technologies: [
//         {
//             name: 'nextjs',
//             icon: 'blue-text-gradient',
//         },
//         {
//             name: 'supabase',
//             icon: 'green-text-gradient',
//         },
//         {
//             name: 'css',
//             icon: 'pink-text-gradient',
//         },
//     ],
//     image: datascience,
//     repo: 'https://github.com/alexmadaras00/Business-Intelligence',
//     demo: 'https://alexmadaras00.github.io/business-intelligence',
// },
        {
            id: 'project-iq',
            name:
                'IQQuizApp',
            type:
                'Android Application',
            description:
                `Android App with different types of IQ Tests. Developed in a team of 3 as part of an University Project.`,
            technologies:
                [{
                    name: 'Android Studio', icon: android_studio,
                }, {
                    name: 'Kotlin', icon: kotlin,
                }, {
                    name: 'SQL', icon: sql,
                }, {name: 'JSON', icon: jsonPic}, {
                    name: 'NodeJS', icon: nodejs,
                }, {
                    name: 'Adobe XD', icon: adobexd,
                }],
            image:
            iq_quiz_app,
            repo:
                'https://github.com/alexmadaras00/IQQuizApp',
            paragraphs:
                [{
                    title: 'Overview',
                    image: mobile,
                    description: '"IQ Quiz App" is an Android Application developed for a University Project. The app allows the users to test their IQ through multiple age categories, generating the result, displayed to them after finishing the test.'
                }, {
                    title: 'Documentation \& IQ Tests',
                    image: uni,
                    description: 'For now, "IQ Quiz App" has only one type of test: Raven. The future releases of the application will provide multiple types of IQ Tests widely used by the experts. The questions found in the tests are thoroughly selected from certain books found in the University\'s Library.'
                }, {
                    title: 'Technologies',
                    image: technology,
                    description: 'For the implementation of this project, my team used JSON to store the question and the answers for each of the tests. The backend relies on the user\'s data, stored in a MySQL database, using Node.js and Insomnia. The application uses the Retrofit API for communicating with the JS server and with the database for the CRUD operations.'
                }, {
                    title: 'My Role',
                    image: role,
                    description: 'As the team leader, I was responsible for the logistics and the implementation plan. We worked in a team of 3, my technical responsibilities being tight to the coding and database part.'
                }]

        }
        ,
        {
            id: 'project-sfh',
            name:
                'SpyForHire',
            type:
                'Android Application',
            description:
                'SpyForHire: The companion app for the Windows game EIA. Developed using Kotlin, SQL, and NodeJS as part of a multiplatform project during my Erasmus Mobility.',
            technologies:
                [{
                    name: 'Android Studio', icon: android_studio,
                }, {
                    name: 'Kotlin', icon: kotlin,
                }, {
                    name: 'SQL', icon: sql,
                }, {
                    name: 'NodeJS', icon: nodejs,
                }, {
                    name: 'Adobe XD', icon: adobexd,
                }],
            image:
            spy_for_hire,
            repo:
                'https://github.com/alexmadaras00/SpyForHire-CompanionApp',
            paragraphs:
                [{
                    title: 'Overview',
                    image: mobile,
                    description: '\n' + '"Spy For Hire" is the companion app for the PC Game "European Intelligence Agency". The application connects the game features and the real world, coming up with real-life features for the user, who has to walk to his proximity and check-in from a nearby place to receive in-game money. The places are fetched through Maps API, representing cultural monuments and buildings.'
                }, {
                    title: 'Planning \& Implemetation',
                    image: implementation,
                    description: 'As with any companion application, Spy For Hire required a well-structured and tailored implementation plan. In our case, this involved creating comprehensive documentation to guide development. The application was built within an Agile environment, using ClickUp to track progress and ensure smooth team collaboration.'
                }, {
                    title: 'Database',
                    image: technology,
                    description: 'As a companion app, our primary objective was to synchronize the game\'s data with the application’s internal data. For data storage, we chose MySQL to manage user accounts and their associated information efficiently.'
                }, {
                    title: 'Watch the Trailer and the Demo on YouTube:',
                    image: sfhWatch,
                    description: 'Watch it on YouTube!',
                    link: 'https://www.youtube.com/watch?v=pTfdGW2jlEk&list=FLIu6v3R8E4PvAn03sy8aVYg&index=17',

                }]

        }
        ,]
;

export {services, technologies, exp, projects, skills, storyParagraphs};
