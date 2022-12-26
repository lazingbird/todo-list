import { createHtmlElement, contentElement } from '..';

function renderUI() {
  //   create header, main and footer containers and append to content element
  const headerContainer = document.createElement('header');
  const mainContainer = document.createElement('main');
  const footerContainer = document.createElement('footer');
  contentElement.appendChild(headerContainer);
  contentElement.appendChild(mainContainer);
  contentElement.appendChild(footerContainer);

  //   create and append logo to header
  const logoHeader = createHtmlElement('h1', 'logo', null, 'todo');
  headerContainer.appendChild(logoHeader);

  //   create and append two different sections to divide the main container
  const projectsDisplay = createHtmlElement('div', 'projectsDisplay');
  const tasksDisplay = createHtmlElement('div', 'tasksDisplay');
  mainContainer.appendChild(projectsDisplay);
  mainContainer.appendChild(tasksDisplay);
}

export { renderUI };
