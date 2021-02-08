const projectsArr = [
  
  {
    id : "project--shiftreporter",
    title : "Shift Reporter",
    stack: ["React", "Firebase BaaS", "SCSS"],
    descriptions : [
      "For the live demo please use...Username: 5001, Password: 5001login",
      "Over a 5 week period I worked effectively within a team to complete a real-client project. We built a “Shift Reporter” web application for managing a mining workforce and fleet of vehicles. The team was made up of 8 developers and we used Agile development and the Scrum framework, incorporating weekly sprints and pair-programming.",
      "I had the opportunity to start the project as team-leader, setting up the first sprint, running daily stand-ups, communicating with the clients/product owner and presenting our progress to the client at the end of the week.",
      "The project was built as a single page app in React, we used Functional React and several Hooks including useState, useContext and one for managing Forms. We used Google Firebase BaaS and it's Firestore document database and it's authentication and authorisation to manage users and route them privately to heir relevant sections of the App.",
      "The software required “Operators” at the start of their shift to clock in, then complete a pre-start checklist of the vehicle they would operating that day. Upon completion the “Supervisor” needed to approve the start of their shift. If the checklist failed, this needed to create a job for the “Maintenance” team. Throughout the day the “Operators” and “Supervisors” needed to be able to record a “load”. The Supervisor, Mantenance and Management users all required a dashboard to display all of the relevant information regarding vehicles, teams and operators within their responsibility, and provide them to options to complete any tasks relating to their role. There also needed to be an admin portal for creating the users, vehicles and other data types.",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-react"],
    cardImage : "./src/assets/images/projects/shift-reporter/welcome.png",
    projectImages :["./src/assets/images/projects/shift-reporter/password.png",
                    "./src/assets/images/projects/shift-reporter/management-dashboard.png",
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
    stack: ["React", "Firebase BaaS", "SCSS"],
    descriptions : [
      "This project was built to demonstrate my skills at interacting with an external API. This involved reading the documentations and creating functions to amend the URL for the fetch query.",
      "It is built using functional React, utilising hooks such as useState, useEffect and useContext.",
      "I then expanded upon this functionality adding in interactions with Google Firebase BaaS. Including user authentication and storing favourites data in a Firestore document database."
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

  {
    id : "project--pokeapi",    
    title : "Poke API",
    stack: ["Angular", "Typescript", "SCSS"],
    descriptions : [
      "I worked on this project to further develop my Angular and Typescript skillset, It interacts with the PokeAPI to fetch and display data about pokemon.",
      "One of my objectives was to have the URLs sharable and load the relevant data set for that link. This works for the paginated group list (pokedex) and the individual pokemon pages too.",
      "I solidfied my understanding and practice using observables and subscriptions, and contained all the logic for fetching data within a 'pokemonService', and also used models for the data repsonses.",
      "The API had different sections of data came from multiple endpoints, which invovled using a URL from one endpoint to fetch data from another endpoint. I nested my 'getPokemon()' subscriptions for this to work.",
      "I used a 'builder' method to collate the data into one pokemon object, which I then used for generating the HTML content.",
      "One of the helper methods within that builder was my first time coming across needing (and therefore figuring out and writing) a recursive method, which generated 'x' evolution stages for each pokemon.",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-angular"],
    cardImage : "./src/assets/images/projects/poke-api/mob-pokedex.png",
    projectImages :["./src/assets/images/projects/poke-api/mob-pokedex.png",
                    "./src/assets/images/projects/poke-api/mob-about.png",
                    "./src/assets/images/projects/poke-api/mob-stats.png",
                    "./src/assets/images/projects/poke-api/mob-evolution.png",
                    "./src/assets/images/projects/poke-api/mob-moves.png",
                    "./src/assets/images/projects/poke-api/desk-pokedex.png",
                    "./src/assets/images/projects/poke-api/desk-about.png",
                    "./src/assets/images/projects/poke-api/desk-stats.png",
                    "./src/assets/images/projects/poke-api/desk-evolution.png",
                    "./src/assets/images/projects/poke-api/desk-moves.png"],
    github : "https://github.com/nicktruby/pokeAPI",
    site : "https://poke-api.truby.io/"
  },
  {
    id : "project--bookfinder",    
    title : "Book Finder",
    stack: ["Angular", "Typescript", "Firebase BaaS", "SCSS"],
    descriptions : [
      "This Application allow you to search for books from the Google Books API, and save them to your favourites.",
      "This was my first introduction into Angular and second experience of working with Typescript. It a key exmaple of my ability to learn a new syntax in a short space of time.",
      "Coming from developing in React, I focused my learning around how to implement similar functionality in the Anglular framework. This is included Routing, passing data using Inputs & Outputs, sharing data globally using services, *ngFor loops, two-way binding using ngModel and integration with Google Firebase for authentication and Firestore database CRUD operations.",
    ],
    stackIconClass : ["fa-icon", "fab", "fa-angular"],
    cardImage : "./src/assets/images/projects/bookfinder/findabook.png",
    projectImages :["./src/assets/images/projects/bookfinder/findabook.png",
                    "./src/assets/images/projects/bookfinder/searchresults.png",
                    "./src/assets/images/projects/bookfinder/favourites.png"],
    github : "https://github.com/nicktruby/bookfinder",
    site : "https://bookfinder.truby.io/findabook"
  },
  
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
  //   title : "Prevent the Spread",
  //   stack: ["Javascript ES6", "HTML", "CSS"],
  //   descriptions : [
  //     "This project is a variation of the classic 'Space Invaders' game, with a fun virus related theme (very topical in 2020!).",
  //     "The game is built in Javascript and demonstrates my OOP (Object Orientated Programming) skills. Completed during week 5 of my _nology software development course.",
  //     "The game objects are all intantiated from classes, and those classes use inheritance to grow from basic entities into Bullets / Enemies or the Player.",
  //     "This a was a good learning curve for me, having working functionally up until this point, and it helped me understand how to structure and build objects and how to organise functions as methods."],
  //   stackIconClass : ["fa-icon", "fab", "fa-js-square"],
  //   cardImage : "./src/assets/images/projects/js-calculator/zero.png",
  //   projectImages :["./src/assets/images/projects/js-calculator/zero.png",
  //                   "./src/assets/images/projects/js-calculator/nines.png",
  //                   "./src/assets/images/projects/js-calculator/negative.png",
  //                   "./src/assets/images/projects/js-calculator/negative-big.png",
  //                   "./src/assets/images/projects/js-calculator/numbers.png"],
  //   github : "https://github.com/nicktruby/prevent-the-spread",
  //   site : "https://prevent-the-spread.truby.io/"
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
  //     "This was a timed project in the early weeks of my _nology course, create a morse code translator in a couple of hours.",
  //     "I then came back to this project to add a little styling, and integrate some Jest testing.",
  //   ],
  //   stackIconClass : ["fa-icon", "fab", "fa-js-square"],
  //   cardImage : "./src/assets/images/projects/js-calculator/zero.png",
  //   projectImages :["./src/assets/images/projects/js-calculator/zero.png",
  //                   "./src/assets/images/projects/js-calculator/nines.png",
  //                   "./src/assets/images/projects/js-calculator/negative.png",
  //                   "./src/assets/images/projects/js-calculator/negative-big.png",
  //                   "./src/assets/images/projects/js-calculator/numbers.png"],
  //   github : "https://github.com/nicktruby/morse-code",
  //   site : "https://morse-code.truby.io/"
  // }
]

export default projectsArr;