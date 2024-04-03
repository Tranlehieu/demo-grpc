const PROTO_PATH = "./jobs.proto";

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var jobsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();


const jobs = [
    {
        id: "1",
        title: "Fresher Ruby on Rails Developer",
        company: "Company A",
        location: "431 Hoàng Văn Thụ, Phường 4, Tân Bình, Hồ Chí Minh, Vietnam",
        skills: ["Ruby", "SQL"],
        experience_level: "Fresher",
        job_type: "Office",
        posted_date: "2024-04-03",
        reasons_to_join: [
            "International Working Environment",
            "Stronger Career Path / More opportunity",
            "Competitive compensation & Benefits"
        ],
        salary : "500$ - 1000$",
        reasons_to_love_working_here: [
            {
                title: "REGIONAL COMPANY",
                sub_reasons: [
                    "An exciting opportunity to work with the fastest growing international logistics player.",
                    "International environment where you can work and learn with coworkers from different southeast asian markets.",
                    "Opportunities for onsite trip in our operating markets.",
                    "Relocation Package to HCMC if from far city or country.",
                    "Flexible working hour."
                ]
            },
            {
                title: "FOOD & BEVERAGE",
                sub_reasons: [
                    "Free high quality office lunch buffet or restaurant menu.",
                    "All Day Coffee Station Machine with some of the best coffee beans around.",
                    "Free Late Dinner Menu from near restaurant.",
                    "Free Flow of Coffee and Drinks (Juice, Coke, Sprite, Red Bull)",
                    "All Day Free Snack",
                    "Every Friday Special Snack & Beers"
                ]
            }
        ],
        image_company: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd3pKSEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--013f56c2e6df0bf031c9fcf5ddd0db145623cde1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/apec%20group-08.png",
        description: "Your primary responsibility will be to develop the business layers of company applications and to work with other team members to design, develop, and maintain high-quality software that meets the needs of our customers. ",
        requirements: "Abackground in software engineering, software design, or database design and architecture."
    },
    {
        id: "2",
        title: "Senior Frontend Developer",
        company: "Company B",
        location: "123 Điện Biên Phủ, Quận 1, Hồ Chí Minh, Vietnam",
        skills: ["JavaScript", "React", "HTML", "CSS"],
        experience_level: "Senior",
        job_type: "Remote",
        posted_date: "2024-04-01",
        reasons_to_join: [
            "Flexible Remote Work",
            "Opportunity to Lead Exciting Projects",
            "Competitive Salary Package"
        ],
        salary : "2000$ - 3000$",
        reasons_to_love_working_here: [
            {
                title: "Cutting-edge Technology",
                sub_reasons: [
                    "Work with the latest frontend technologies and tools.",
                    "Continuous learning and skill development opportunities.",
                    "Innovative projects pushing the boundaries of web development."
                ]
            },
            {
                title: "Work-Life Balance",
                sub_reasons: [
                    "Flexible working hours and remote work options.",
                    "Supportive team environment promoting work-life balance.",
                    "Paid time off and wellness benefits."
                ]
            }
        ],
        image_company: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN1E5RkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3cb9e4093f7d019e7973537e333fb6ad2320eda3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/download.png",
        description: "We are seeking a talented Senior Frontend Developer to join our team...",
        requirements: "Minimum 5 years of experience in frontend development with proficiency in JavaScript, React, HTML, and CSS."
    },
    {
        id: "3",
        title: "StarCamp Security Engineer (Fresher)",
        company: "NAB Innovation Centre Vietnam",
        location: "123 Điện Biên Phủ, Quận 1, Hồ Chí Minh, Vietnam",
        skills: ["Python", "DevOps", "Data Analysis", "Security"],
        experience_level: "Fresher",
        job_type: "Remote",
        posted_date: "2024-03-28",
        reasons_to_join: [
            "Very competitive remuneration package",
            "Opportunity to Lead Exciting Projects",
            "Competitive Salary Package"
        ],
        salary : "You'll love it",
        reasons_to_love_working_here: [
            {
                title: "Generous compensation and benefit package ",
                sub_reasons: [
                    "Attractive salary and benefits  ",
                    "20-day annual leave and 7-day sick leave, etc.  ",
                    "13th month salary and Annual Performance Bonus  "
                ]
            },
            {
                title: "Exciting career and development opportunities  ",
                sub_reasons: [
                    "Large scale products with modern technologies in banking domain  ",
                    "Clear roadmap for career advancement in both technical and leadership pathways  ",
                    "Sponsored certificates in both IT and banking/finance  "
                ]
            }
        ],
        image_company: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMS9LSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--f77c1653cf49260705bf77be3846954d9b817b70/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e064c7b4667a202bc74d582f9581c9a645d77ae5/logo.jpg",
        description: "By applying for the above position, you accept and agree that your personal data and any information stated in the attached curriculum vitae (CV) will be used and processed by ITViec and NAB Vietnam for recruitment purposes. The storage and processing of such information will comply with the applicable laws of Vietnam, and the policies and procedures of ITViec and NAB Vietnam regarding personal data, as amended from time to time.",
        requirements: "We are looking for some great new talent to join us who can say yes to being: Analytical Problem Solvers, Collaborative Team Players, Outside the box Innovators, Accountable deliverers, Proactive and Eager Learners"
    },
    {
        id: "4",
        title: "Fullstack Engineer",
        company: " Holistics",
        location: "457 Nguyen Dinh Chieu, Ward 5, District 3, Ho Chi Minh",
        skills: ["VueJS", "NodeJS", "SQL"],
        experience_level: "Fresher",
        job_type: "Remote",
        posted_date: "2024-03-27",
        reasons_to_join: [
            "People-first",
            "Teamwork over one's work",
            "Problem Solving Centric"
        ],
        salary : "You'll love it",
        reasons_to_love_working_here: [
            {
                title: "Our application’s architecture",
                sub_reasons: [
                    "Attractive salary and benefits  ",
                    "20-day annual leave and 7-day sick leave, etc.  ",
                    "13th month salary and Annual Performance Bonus  "
                ]
            },
            {
                title: "Exciting career and development opportunities  ",
                sub_reasons: [
                    "Large scale products with modern technologies in banking domain  ",
                    "Clear roadmap for career advancement in both technical and leadership pathways  ",
                    "Sponsored certificates in both IT and banking/finance  "
                ]
            }
        ],
        image_company: "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeVdGRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0f25f158fefb9a304f8c1a3d82ec0f86f00ee5cf/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmxwYVdrPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c8c20c63b868249effdba9ba4f05aa0c5b77cab3/logo-color.png",
        description: "We’re the team behind projects like BI tool Holistics [1], database diagram tool dbdiagram.io [2], and open-source project dbml.org [3]. We’re looking for another software engineer to help us build more awesome tools for data teams and developers.",
        requirements: "We are looking for some great new talent to join us who can say yes to being: Analytical Problem Solvers, Collaborative Team Players, Outside the box Innovators, Accountable deliverers, Proactive and Eager Learners"
    },
];

server.addService(jobsProto.JobsService.service, {
    SearchJobs: (call, callback) => {
        let query = call.request;
        let matchedJobs = jobs.filter(job => {
            // Match by skills
            if (query.skills.length > 0 && !query.skills.every(skill => job.skills.map(skill => skill.toLowerCase()).includes(skill.toLowerCase()))) {
                return false;
            }
            // Match by title
            if (query.title && !job.title.toLowerCase().includes(query.title.toLowerCase())) {
                return false;
            }
            // Match by company
            if (query.company && !job.company.toLowerCase().includes(query.company.toLowerCase())) {
                return false;
            }
            // Match by location
            if (query.location && !job.location.toLowerCase().includes(query.location.toLowerCase())) {
                return false;
            }
            return true;
        });
        console.log("Matched jobs: ", matchedJobs);

        callback(null, { jobs: matchedJobs });
    },
});


server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), () => {
    console.log("Server running at http://127.0.0.1:30043");
});