/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chaidar Aji Nugroho",
  title: "Hi all, I'm Chaidar",
  subTitle: emoji(
    "Welcome to my portfolio! Having experiences in Odoo development across various industries, I'm passionate about creating custom ERP solutions tailored to client needs. I specialize in module development, debugging, and reporting to help businesses optimize their workflows. Feel free to explore my work, and let's collaborate to build efficient and scalable solutions!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ChaidarAji",
  linkedin: "https://www.linkedin.com/in/ChaidarAji/",
  gmail: "chaidaraji@gmail.com",
  gitlab: "https://gitlab.com/ChaidarAji",
  // facebook: "https://www.facebook.com/ChaidarAji",
  medium: "https://medium.com/@chaidaraji",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ODOO DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop custom Odoo modules to enhance business processes"
    ),
    emoji("⚡ Implement and customize Odoo ERP solutions for various industries"),
    emoji(
      "⚡ Integration of Odoo with third-party services and APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
  softwareSkills: [
    // {
      //   skillName: "html-5",
      //   fontAwesomeClassname: "fab fa-html5"
      // },
      // {
        //   skillName: "css3",
        //   fontAwesomeClassname: "fab fa-css3-alt"
        // },
        // {
          //   skillName: "sass",
          //   fontAwesomeClassname: "fab fa-sass"
          // },
    {
      skillName: "Odoo",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "XML",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "QWeb",
      fontAwesomeClassname: "fas fa-file-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IPB University",
      logo: require("./assets/images/ipbLogo.png"),
      subHeader: "Bachelor of Marine Science and Technology",
      duration: "September 2015 - January 2020",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Odoo",
      progressPercentage: "80%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Odoo Developer",
      company: "PT. Doodex Jaya Makmur",
      companylogo: require("./assets/images/doodexlogo.png"),
      date: "September 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Odoo Engineer",
      company: "PT. Gamatechno Indonesia",
      companylogo: require("./assets/images/gamatechnologo.jpg"),
      date: "May 2023 – August 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Junior Odoo Developer",
      company: "PT. Konsalten Solusi Indonesia",
      companylogo: require("./assets/images/konsaltenlogo.jpeg"),
      date: "March 2020 – March 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tirtabangunanlogo.jpeg"),
      projectName: "PT. Tirta Bangunan Baru & PT. Tirta Multi Bangunan",
      projectDesc: "This project aims to implement a comprehensive Retail Management System using Odoo ERP, specifically designed for businesses in the retail industry. The system will streamline operations and optimize business performance by integrating various Odoo modules, including Point of Sale (PoS), Inventory, Sales, and Accounting.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://saayahealth.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jieplogo.png"),
      projectName: "PT. Jakarta Industrial Estate Pulogadung",
      projectDesc: "This project aims to develop and implement a Human Resource Information System (HRIS) using Odoo ERP to streamline HR operations, enhance workforce management, and improve administrative efficiency. The system will integrate key HR functions such as employee management, payroll, attendance, recruitment, performance evaluation, and compliance into a single, centralized platform.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: require("./assets/images/conforteau.png"),
      projectName: "Confort & Eau",
      projectDesc: "This project aims to implement an integrated Customer Relationship Management (CRM) and Maintenance Management System using Odoo ERP. The system will help businesses streamline customer interactions, track sales opportunities, and manage maintenance activities efficiently. By combining CRM and Maintenance modules, the solution will ensure proactive service management and enhanced operational efficiency.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "2nd Place Singapore Autonomous Underwater Vehicle Challenge 2019",
      subtitle:
        "The Singapore Autonomous Underwater Vehicle Challenge (SAUVC) is a global competition that challenges teams to design and develop autonomous underwater vehicles (AUVs) capable of completing complex underwater tasks without human intervention. Open to teams from around the world, the competition evaluates AUVs based on their ability to autonomously navigate, detect objects, and interact with their environment. The top-performing teams are recognized for their innovative engineering solutions and technical excellence.",
      image: require("./assets/images/sauvclogo.png"),
      imageAlt: "SAUVC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1aJrQCX5AVThmbQt3Fmd5q4dpM6nVI0xz/view?usp=drive_link"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Best Presentator at The 3rd International Conference on Marine Science (ICMS)",
      subtitle:
        "The International Conference on Marine Science (ICMS) is a biennial event organized by the Department of Marine Science and Technology at IPB University. The conference serves as a platform for researchers, practitioners, and policymakers to discuss and share advancements in marine science and technology.",
      image: require("./assets/images/icms.jpg"),
      imageAlt: "ICMS Logo",
      footerLink: [
        {
          name: "Publication",
          url: "https://iopscience.iop.org/article/10.1088/1755-1315/429/1/012045"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62-85643710387",
  email_address: "chaidaraji@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_chaidar", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
