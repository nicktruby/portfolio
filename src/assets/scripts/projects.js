const projectsArr = [
  
  {
    id : "project--shiftreporter",
    title : "Shift Reporter",
    stack: ["React", "HTML", "CSS", "Javascript ES6"],
    descriptions : [
      "Over a 5 week period I worked effectively within a team to complete a real-client project. We built a “Shift Reporter” web application for managing a mining workforce and fleet of vehicles. The team was made up of 8 developers and we used Agile development and the Scrum framework, incorporating weekly sprints and pair-programming.",
      "I had the opportunity to start the project as team-leader, setting up the first sprint, running daily stand-ups, communicating with the clients/product owner and presenting our progress to the client at the end of the week.",
      "The project was built as a single page app in React. We used Google Firebase BaaS and the data was stored in a Firestore document database.",
      "The software required “Operators” at the start of their shift to clock in, then complete a pre-start checklist of the vehicle they would operating that day. Upon completion the “Supervisor” needed to approve the start of their shift. If the checklist failed, this needed to create a job for the “Maintenance” team. Throughout the day the “Operators” and “Supervisors” needed to be able to record a “load”. The Supervisor, Mantenance and Management users all required a dashboard to display all of the relevant information regarding vehicles, teams and operators within their responsibility, and provide them to options to complete any tasks relating to their role. There also needed to be an admin portal for creating the users, vehicles and other data types.",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-react"],
    cardImage : "./src/assets/images/projects/shift-reporter-welcome.png",
    projectImages :["./src/assets/images/projects/shift-reporter-welcome.png", "./src/assets/images/projects/shift-reporter-welcome.png", "./src/assets/images/projects/shift-reporter-welcome.png"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },

  {
    id : "project--brewdogapi",    
    title : "Brewdog API",
    stack: ["HTML", "CSS", "Javascript ES6"],
    descriptions : [
      "This is the description",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-react"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },

  {
    id : "project--bookfinder",    
    title : "Book finder",
    stack: ["HTML", "CSS", "Javascript ES6"],
    descriptions : [
      "This is the description",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-angular"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },
  
  {
    id : "project--api",    
    title : "Node JS - Custom API",
    stack: ["HTML", "CSS", "Javascript ES6"],
    description : "This is the description",
    stackIconClass : ["fa-icon", "fab", "fa-node-js"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },
  
  {
    id : "project--preventthespread",
    title : '"Prevent the Spread" Javascript OOP game',
    stack: ["HTML", "CSS", "Javascript ES6"],
    description : "This is the description",
    stackIconClass : ["fa-icon", "fab", "fa-js-square"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },

  {
    id : "project--calculator",
    title : "Javascript Calculator",
    stack: ["HTML", "CSS", "Javascript ES6"],
    descriptions : [
      "This is the description",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-js-square"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  },

  {
    id : "project--morsecode",    
    title : "Morse Code Converter",
    stack: ["HTML", "CSS", "Javascript ES6"],
    descriptions : [
      "This is the description",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-js-square"],
    cardImage : "./src/assets/images/projects/calculator.jpg",
    projectImages :["src1", "src2", "src3"],
    github : "https://github.com/nicktruby/js-calculator",
    site : "https://js-calculator.truby.io/"
  }
]

export default projectsArr;