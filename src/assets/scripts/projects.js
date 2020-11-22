const projectsArr = [
  
  {
    id : "project--shiftreporter",
    title : "Shift Reporter",
    stack: ["React", "Firebase", "SCSS"],
    descriptions : [
      "Over a 5 week period I worked effectively within a team to complete a real-client project. We built a “Shift Reporter” web application for managing a mining workforce and fleet of vehicles. The team was made up of 8 developers and we used Agile development and the Scrum framework, incorporating weekly sprints and pair-programming.",
      "I had the opportunity to start the project as team-leader, setting up the first sprint, running daily stand-ups, communicating with the clients/product owner and presenting our progress to the client at the end of the week.",
      "The project was built as a single page app in React, we used Functional React and several Hooks including useState, useContext and one for managing Forms. We used Google Firebase BaaS and it's Firestore document database and it's authentication and authorisation to manage users and route them privately to heir relevant sections of the App.",
      "The software required “Operators” at the start of their shift to clock in, then complete a pre-start checklist of the vehicle they would operating that day. Upon completion the “Supervisor” needed to approve the start of their shift. If the checklist failed, this needed to create a job for the “Maintenance” team. Throughout the day the “Operators” and “Supervisors” needed to be able to record a “load”. The Supervisor, Mantenance and Management users all required a dashboard to display all of the relevant information regarding vehicles, teams and operators within their responsibility, and provide them to options to complete any tasks relating to their role. There also needed to be an admin portal for creating the users, vehicles and other data types.",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-react"],
    cardImage : "./src/assets/images/projects/shift-reporter/welcome.png",
    projectImages :["./src/assets/images/projects/shift-reporter/management-dashboard.png",
                    "./src/assets/images/projects/shift-reporter/admin-users.png",
                    "./src/assets/images/projects/shift-reporter/admin-create.png",
                    "./src/assets/images/projects/shift-reporter/supervisor-dashboard.png",
                    "./src/assets/images/projects/shift-reporter/supervisor-load.png",
                    "./src/assets/images/projects/shift-reporter/supervisor-handover.png",
                    "./src/assets/images/projects/shift-reporter/operator-dashboard.png"],
    github : "https://github.com/jackroy08/ShiftReporter",
    site : "https://shiftreporter-3420e.web.app/"
  },

  {
    id : "project--brewdogapi",    
    title : "Brewdog API",
    stack: ["React", "Firebase", "SCSS"],
    descriptions : [
      "This project was built to demonstrate my skills at interacting with an external API. This involved reading the documentations and creating funcitons to amend the URL for the fetch query.",
      "It is built using functional React, utilsing hooks such as useState, useEffect and useContext.",
      "I then expanded upon this functionality adding in interactions with Google Firebase BaaS. Including user authentication and storing favoruites data in a Firestore document database."
    ],
    stackIconClass : ["fa-icon", "fab", "fa-react"],
    cardImage : "./src/assets/images/projects/brewdog-api/taproom.png",
    projectImages :["./src/assets/images/projects/brewdog-api/desktop.png",
                    "./src/assets/images/projects/brewdog-api/search.png",
                    "./src/assets/images/projects/brewdog-api/taproom.png",
                    "./src/assets/images/projects/brewdog-api/favourites.png"],
    github : "https://github.com/nicktruby/brewdogAPI",
    site : "https://brewdog-api.truby.io/"
  },

  // {
  //   id : "project--bookfinder",    
  //   title : "Book finder",
  //   stack: ["HTML", "CSS", "Javascript ES6"],
  //   descriptions : [
  //     "This is the description",
  //   ],
  //   stackIconClass : ["fa-icon", "fab", "fa-angular"],
  //   cardImage : "./src/assets/images/projects/calculator.jpg",
  //   projectImages :["src1", "src2", "src3"],
  //   github : "https://github.com/nicktruby",
  //   site : "https://truby.io/"
  // },
  
  // {
  //   id : "project--api",    
  //   title : "Node JS - Custom API",
  //   stack: ["HTML", "CSS", "Javascript ES6"],
  //   description : "This is the description",
  //   stackIconClass : ["fa-icon", "fab", "fa-node-js"],
  //   cardImage : "./src/assets/images/projects/calculator.jpg",
  //   projectImages :["src1", "src2", "src3"],
  //   github : "https://github.com/nicktruby",
  //   site : "https://truby.io/"
  // },
  
  // {
  //   id : "project--preventthespread",
  //   title : '"Prevent the Spread" Javascript OOP game',
  //   stack: ["HTML", "CSS", "Javascript ES6"],
  //   description : "This is the description",
  //   stackIconClass : ["fa-icon", "fab", "fa-js-square"],
  //   cardImage : "./src/assets/images/projects/calculator.jpg",
  //   projectImages :["src1", "src2", "src3"],
  //   github : "https://github.com/nicktruby",
  //   site : "https://truby.io/"
  // },

  {
    id : "project--calculator",
    title : "Javascript Calculator",
    stack: ["Javascript ES6", "SCSS", "HTML"],
    descriptions : [
      "This was my first ever coding project. The challenge was to replicate the logic and functionaly of a calculator from a smartphone.",
      "I have an iphone, so I went for the iOS calculator and also tried to replicate the design",
      "Built using Javscsript ES6."],
    stackIconClass : ["fa-icon", "fab", "fa-js-square"],
    cardImage : "./src/assets/images/projects/js-calculator/zero.png",
    projectImages :["./src/assets/images/projects/js-calculator/zero.png",
                    "./src/assets/images/projects/js-calculator/nines.png",
                    "./src/assets/images/projects/js-calculator/negative.png",
                    "./src/assets/images/projects/js-calculator/negative-big.png",
                    "./src/assets/images/projects/js-calculator/numbers.png"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },

  // {
  //   id : "project--morsecode",    
  //   title : "Morse Code Converter",
  //   stack: ["HTML", "CSS", "Javascript ES6"],
  //   descriptions : [
  //     "This is the description",
  //   ],
  //   stackIconClass : ["fa-icon", "fab", "fa-js-square"],
  //   cardImage : "./src/assets/images/projects/calculator.jpg",
  //   projectImages :["src1", "src2", "src3"],
  //   github : "https://github.com/nicktruby",
  //   site : "https://truby.io/"
  // }
]

export default projectsArr;