import { renderUI } from './modules/UI';

const contentElement = document.getElementById('content');

function createHtmlElement(type, id, arrrayClasses, content) {
  //create a new html element
  const newElement = document.createElement(type);

  if (id) {
    //set element ID
    newElement.id = id;
  }

  if (arrrayClasses) {
    //set element class(es)
    arrrayClasses.forEach((customClass) => {
      newElement.classList.add(customClass);
    });
  }

  if (content) {
    //set HTML content for element
    newElement.innerText = content;
  }

  return newElement;
}

renderUI();

export { contentElement, createHtmlElement };
