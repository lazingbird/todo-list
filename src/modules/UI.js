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

  // create projectsDisplay's navigation menu
  const navItems = ['Inbox'];

  const navContainer = createHtmlElement('nav', 'navContainer');
  const navList = createHtmlElement('ul', 'navList');
  navContainer.appendChild(navList);

  navItems.forEach((item) => {
    let newItem = createHtmlElement('li', null, ['navItem']);
    let newItemIcon = createHtmlElement(
      'span',
      null,
      ['material-symbols-outlined'],
      'all_inbox'
    );
    let newItemButton = createHtmlElement('button', null, null, item);

    newItem.appendChild(newItemIcon);
    newItem.appendChild(newItemButton);
    navList.appendChild(newItem);
  });

  projectsDisplay.appendChild(navContainer);

  // create and append tasksDisplay's basic interface and create an "add new task" button

  const tasksDisplayInterface = createHtmlElement(
    'div',
    'tasksDisplayInterface'
  );

  const tasksDisplayTitle = createHtmlElement(
    'h2',
    'tasksDisplayTitle',
    null,
    'Inbox'
  );
  const addNewTaskButton = createHtmlElement('button', 'addNewTaskButton');
  const addNewTaskIcon = createHtmlElement(
    'span',
    null,
    ['material-symbols-outlined'],
    'add'
  );
  const addNewTaskText = createHtmlElement('p', null, null, 'Add new task');

  addNewTaskButton.appendChild(addNewTaskIcon);
  addNewTaskButton.appendChild(addNewTaskText);

  tasksDisplayInterface.appendChild(tasksDisplayTitle);
  tasksDisplayInterface.appendChild(addNewTaskButton);

  tasksDisplay.appendChild(tasksDisplayInterface);
}

export { renderUI };
