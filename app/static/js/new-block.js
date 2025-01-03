const newBlock = document.querySelector('.new-block');
const blockBar = document.querySelector('.block-bar');
const saveBar = document.querySelector('.save-page');
//const submitBar = document.querySelector('.submit-page');
newBlock.addEventListener('click',()=>{
  blockBar.classList.remove('hidden');
  newBlock.classList.add('hidden');
  saveBar.classList.add('hidden');
//  submitBar.classList.add('hidden');
});

const exit = document.querySelector('.exit');
exit.addEventListener('click',()=>{
  newBlock.classList.remove('hidden');
  saveBar.classList.remove('hidden');
//  submitBar.classList.remove('hidden');
  blockBar.classList.add('hidden');
});

const page = document.querySelector('.page');

function crerateElement(template){
  if(template){
  const block = template.cloneNode(true);
  const trash = block.querySelector('.trash');
  trash.addEventListener('click',()=>{
    block.remove();
  });
  block.classList.remove('hidden');
  page.appendChild(block);
  }
}

const titleButton = document.querySelector('.title-button');
const headerTemplate = document.querySelector('.header');
titleButton.addEventListener('click',() => crerateElement(headerTemplate));

const infoButton = document.querySelector('.info-button');
const infoTemplate = document.querySelector('.info');
infoButton.addEventListener('click',() => crerateElement(infoTemplate));

const prospectsButton = document.querySelector('.work-button');
const prospectTemplate = document.querySelector('.prospects');
prospectsButton.addEventListener('click', () =>crerateElement(prospectTemplate));

const buttonButton = document.querySelector('.button-button')
const buttonTemplate = document.querySelector('.button');
buttonButton.addEventListener('click', () =>crerateElement(buttonTemplate));

const contactButton = document.querySelector('.contact-button')
const contactTemplate = document.querySelector('.contact');
contactButton.addEventListener('click', () =>crerateElement(contactTemplate));
