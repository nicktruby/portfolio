import projectsArr from './projects.js';

// ------------ Navigation Menu ---------------- //

const navOpenClose = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  burger.addEventListener('click', () => nav.classList.toggle('open'));
  navLinks.forEach(link => link.addEventListener('click', () => nav.classList.toggle('open')));
}
navOpenClose();

// ------------ Project Cards ---------------- //

// Grab the container
const projectCards = document.querySelector('.work .wrapper');
// Create the cards for each project
const renderProjectCards = (projectsArr, wrapper) => {
    projectsArr.forEach(project => {
      const article = document.createElement('article');
        article.classList.add('project');
        article.id = project.id;
      const img = document.createElement('img');
        img.classList.add('project__image');
        img.setAttribute('src',project.cardImage);
        img.setAttribute('alt',project.name);
      const div = document.createElement('div');
        div.classList.add('project__title');
      const h3 = document.createElement ('h3');
        h3.innerText = project.title;
      const i = document.createElement('i');
        i.classList.add(...project.stackIconClass);
      
      div.append(h3,i);
      article.append(img, div);
      wrapper.append(article);
    });
};
// Run the function to render the cards
renderProjectCards(projectsArr,projectCards);

// ------------ Project Modal ---------------- //
// Grab the modal container
const modal = document.querySelector('.modal');

// Function to render the project details
const renderModalContent = project => {
      const button = document.createElement('button');
        button.classList.add('modal__close');
        button.innerText = "×";    
      const article = document.createElement('article');
        article.classList.add('modal__project');
        article.id = `modal__${project.id}`;
      const h2 = document.createElement ('h2');
        h2.innerText = project.title;
        h2.classList.add('modal__title');
      const images = document.createElement ('div');
        images.classList.add('modal__images');
        project.projectImages.forEach((image) => {
          const img = document.createElement('img');
          img.classList.add('modal__image');
          img.setAttribute('src',image);
          img.setAttribute('alt',project.name);
          images.append(img);
        })
      const links = document.createElement('div');
        links.classList.add('modal__links');
      const siteLink = document.createElement('a');
        siteLink.classList.add('modal__link');
        siteLink.innerText = "live demo";
        siteLink.setAttribute('href', project.site);
        siteLink.setAttribute('alt', project.name);
        siteLink.setAttribute('target', 'blank');
        const githubLink = document.createElement('a');
        githubLink.classList.add('modal__link');
        githubLink.innerText = "github";
        githubLink.setAttribute('href', project.github);
        githubLink.setAttribute('alt', project.name);
        githubLink.setAttribute('target', 'blank');
      const stackList = document.createElement('ul');
        stackList.classList.add('modal__stack-list');
        project.stack.forEach(tech => {
          const li = document.createElement('li');
          li.classList.add("modal__stack-item");
          li.innerText = tech+",";
          stackList.append(li);
        });
        const descriptions = document.createElement('div');
        descriptions.classList.add('modal__description');
        project.descriptions.forEach(paragraph => {
          const p = document.createElement('p');
          p.innerText = paragraph;
          descriptions.append(p);
          
      })
      
        
        links.append(siteLink, githubLink)
        article.append(images, links, h2, stackList, descriptions);
        modal.append(button, article);
}

// listen for a click on a project card
projectCards.addEventListener('click', e => {
  const targetProjectID = e.target.closest('.project').id
  const projectToRender = projectsArr.find(project => project.id === targetProjectID);
  
  // open the modal & show the project details
  modal.classList.add('active');
  renderModalContent(projectToRender);
  
  // listen for a click on the close button
  const closeButton = modal.querySelector('.modal__close');
  closeButton.addEventListener('click', () => {
    // close the modal and remove the project details
    modal.classList.remove('active');
    setTimeout(()=>{modal.innerHTML = null;},500);
  });
});


























//open project details overlay

// const openProjectDetails = (i) => {
//     projectDetailsOverlay.classList.add("shown");
//     setTimeout(()=>{projectDetails[i].classList.add("shown")},300);
//     disableBodyScroll();
// };

// projectCards.forEach((card,index)=>{
//     card.addEventListener("click",()=>{openProjectDetails(index)});
// });

// //close project details overlay
// //there must be a way to do this more nicely, sets attribs on all project overlays - only 1 should be needed.

// const projectDetailsCloseButtons = document.querySelectorAll(".project-details button");

// const closeProjectDetails = () => {
//     setTimeout(()=>{projectDetailsOverlay.classList.remove("shown")},300);
//     projectDetails.forEach((d)=>{
//         d.classList.remove("shown");
//     });
//     enableBodyScroll(); 
// };


// projectDetailsCloseButtons.forEach((button)=>{
//     button.addEventListener("click", ()=>{
//         closeProjectDetails();
//     });    
// });

// //close on click outside details box
// projectDetailsOverlay.addEventListener("click", (e) => {
//     if(e.srcElement.classList.contains("project-details-overlay")){
//         closeProjectDetails();
//     };
// });




// // To display a modal overlay of the project data.
// const overlay = document.querySelector('.project__overlay');
// const work = document.querySelector('.work');
// let isOverlayOpen = false;

// const openOverlay = (project) => {
//   overlay.classList.add('active')
//   overlay.innerHTML = `
//   <h1>${project.name}</h1>
//   <h1>${project.summary}</h1>
//   <h1>${project.description}</h1>
//   <h1>${project.stack}</h1>
//   <h1>${project.image}</h1>
//   <h1>${project.github}</h1>
//   <h1>${project.site}</h1>
//   <button class="project-overlay__close">X<button>
//   `;
//   isOverlayOpen = true;
// }

// const closeOverlay = () => {
//   console.log("i am running");
//   overlay.classList.remove('active');
//   overlay.innerHTML = ``;
//   isOverlayOpen = false;
// }
  
// work.addEventListener('click', e => {
//   const clickedProjectID = e.target.closest('.project').id
//   const targetProject = projects.find(project => project.id === clickedProjectID);
  
//   console.log(targetProject)
//   if(!isOverlayOpen) openOverlay(targetProject);
// });
