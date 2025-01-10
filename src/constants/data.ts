import {WorkExperienceModalData, QualificationsModalData} from '../types/propTypes'

export const WorkExperienceModalInfo: WorkExperienceModalData[] = [
    {
        jobTitle: 'Junior Developer Co-Op',
        startMonth: 'January',
        startYear: '2023',
        endMonth: 'April',
        endYear: '2023',
        companyName: 'Assembly Digital Media',
        jobDescription: 'I worked as a junior web developer on an in-house tool to analyze site metrics. I debugged code problems, created new features, converted libraries, and even designed a feature for my personal Hack Week project that ended up being liked so much it made its way into the product in a modified form.',
        skills: [
            'Feature design: I was given time to work on a small project for one of the sites completely on my own and used that time to improve my design skills and my ability to take something from an idea to a finished product',
            'Debugging: I worked on small issues and bugs in the code, using reproduction steps to trace through the issue, digging into the code to find the original source, and fixing the root cause of the bug',
            'Library implementation: The software I worked on was in the process of switching several major libraries, and I helped select a new library based on various criteria and implement the initial version of the library in our code',
            'Feature creation: There were many feature stories created that I was assigned to work on, where I was able to develop a feature in a way that pleased the customer and fit the description while still being smooth and fitting the site'
        ]
    },
    {
        jobTitle: 'Quality Assurance Co-Op' ,
        startMonth: 'September',
        startYear: '2021',
        endMonth: 'December',
        endYear: '2021',
        companyName: 'VertiGIS North America',
        jobDescription: 'I worked as a quality assurance tester, primarily focused on writing automated tests for VertiGIS\'s web tools. I did both automated and manual testing for features and ran significant manual tests for the release that occurred during my time at the company.',
        skills: [
            'Automated testing development: I spent much of my time filling out the automated browser-based tests for the website. I was required to understand a feature, analyze its use cases, and design a helpful, comprehensive set of tests for that feature',
            'Manual testing: During the active release phase of the software, I worked at manually testing a variety of features using a thorough set of manual tests',
            'Code reviews: I was frequently assigned code PRs to review, where I would test that the new functionality of the feature worked as intended and test related features to ensure there were no side effects of the new design'
        ]
    },
    {
        jobTitle: 'Software Developer',
        startMonth: 'January',
        startYear: '2021',
        endMonth: 'April',
        endYear: '2021',
        companyName: 'High Energy Physics Research Center (University of Victoria)',
        jobDescription: 'I worked as a software developer single-handedly creating an automated web test framework in Python for the CloudScheduler interface. This framework is still in place with minimal modifications today.',
        skills: [
            'Automated testing development: My primary task was creating a set of automated browser-based tests for the website. I understood the full functionality of the site, designed a set of test cases with the feedback of the development team, and then implemented those test cases',
            'Framework design: There had not been any browser-based tests before I was there, so I was required to design and build the framework and select the software to use myself, with the feedback of the development team'
        ]
    },
    {
        jobTitle: 'Junior Software Developer',
        startMonth: 'May',
        startYear: '2020',
        endMonth: 'August',
        endYear: '2020',
        companyName: 'Assembly Digital Media',
        jobDescription: 'I worked as a software developer in a variety of fields, working both on an unreleased project and on the next release of Leanpub. Additionally, I oversaw the automated testing rewrite effort for the release.',
        skills: [
            'Software development: I worked on both backend and frontend development, designing database features for an unreleased project and creating various frontend features for Leanpub',
            'Automated testing development: I worked on the automated testing to ensure state stability of the site in addition to a variety of other unit tests for various components',
            'Group direction: I was in charge of coordinating the work on the automated testing framework, splitting up the work between myself and two other developers in order to finish everything effectively'
        ]
    },
]

export const QualificationsModalInfo: QualificationsModalData[] = [
    {
        title: 'Programming Frameworks',
        description: [
            'React (2 years) - I have programmed several sites in React for co-ops and school projects, in addition to this current site', 
            'TypeScript (2 years) - TypeScript is my preferred language for working with React',
            'JavaScript (1 year) - JavaScript is another web development language I am quite comfortable in',
            'CSS (1 year) - I\'ve used CSS extensively for styling a variety of sites, including this one',
            'Python (1 year) - I\'ve written multiple data processing programs in Python and created a robust testing framework using Python and Selenium',
            'Ruby (1/2 year) - One of the sites I worked on was in Ruby on Rails and I have had some practice writing automated Ruby tests',
            'C (1 year) - I have written multiple programs in C and RobotC for university assignments'
        ]
    },
    {
        title: 'Agile Methodologies',
        description: [
            'Jira and other Kanban Softwares (2 years) - I have worked in Jira, Shortcut, and Azure DevOps to organize agile projects', 
            'Scrum and Agile practices (2 years) - Scrum and other agile practices were important in many companies I have worked in, and on my teams for university projects',
            'CI/CD pipelines (1 year) - I have worked in multiple CI/CD environments using software such as Cloudflare'
        ]
    },
    {
        title: 'Useful Software',
        description: [
            'Git and GitHub (3 years) - I have extensively used both command-line Git features and GitHub features to manage work, school, and personal projects, including this website', 
            'Microsoft Office (5 years) - Microsoft Word, Excel, and PowerPoint have all been highly useful for me in creating documentation and presentations',
            'VMWare (2 years) - I have created virtual machines, both locally and on the cloud, for creating and testing a variety of software'
        ]
    },
    {
        title: 'Soft Skills',
        description: [
            'Written and oral communication - I have created documentation and communicated with coworkers to explain my code and improve its functionality', 
            'Code reviews - In my work, I have frequently engaged in code reviews to improve my code and help provide feedback on the code of the people I am working with',
            'Office work - I have worked in-person in an office and am comfortable with in-office jobs and office culture',
            'Remote work - The majority of my jobs have been remote and I am easily able to keep myself on track and communicate with my coworkers effectively'
        ]
    },
]