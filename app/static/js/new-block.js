// Объявляем постоянные для элементов новой панели, панели блоков и панели сохранения
const NEW_BLOCK = document.querySelector('.new-block');
const BLOCK_BAR = document.querySelector('.block-bar');
const SAVE_BAR = document.querySelector('.save-page');

// Добавляем событие по клику для элемента новой панели
NEW_BLOCK.addEventListener('click',()=>{
  // Отображаем панель блоков, скрываем новую панель и панель сохранения
  BLOCK_BAR.classList.remove('hidden');
  NEW_BLOCK.classList.add('hidden');
  SAVE_BAR.classList.add('hidden');
});

// Объявляем постоянную для элемента кнопки выхода
const exit = document.querySelector('.exit');
exit.addEventListener('click',()=>{
  // Скрываем панель блоков, отображаем новую панель и панель сохранения
  NEW_BLOCK.classList.remove('hidden');
  SAVE_BAR.classList.remove('hidden');
  BLOCK_BAR.classList.add('hidden');
});

// Объявляем постоянную для страницы
const page = document.querySelector('.page');

// Функция для создания нового элемента на странице по шаблону
function crerateElement(template){
  if(template){
  // Клонируем шаблон
  const block = template.cloneNode(true);
  // Находим элемент корзины для удаления блока
  const trash = block.querySelector('.trash');
  trash.addEventListener('click',()=>{
    // Удаляем блок при клике на корзину
    block.remove();
  });
  // Отображаем блок и добавляем его на страницу
  block.classList.remove('hidden');
  page.appendChild(block);
  }
}

// Добавляем события для кнопок заголовка и соответствующих шаблонов
const titleButton = document.querySelector('.title-button');
const headerTemplate = document.querySelector('.header');
titleButton.addEventListener('click',() => crerateElement(headerTemplate));

const infoButton = document.querySelector('.info-button');
const infoTemplate = document.querySelector('.info');
infoButton.addEventListener('click',() => crerateElement(infoTemplate));

const prospectsButton = document.querySelector('.work-button');
const prospectTemplate = document.querySelector('.prospects');
prospectsButton.addEventListener('click', () => crerateElement(prospectTemplate));

const buttonButton = document.querySelector('.button-button')
const buttonTemplate = document.querySelector('.button');
buttonButton.addEventListener('click', () => crerateElement(buttonTemplate));

const contactButton = document.querySelector('.contact-button')
const contactTemplate = document.querySelector('.contact');
contactButton.addEventListener('click', () => crerateElement(contactTemplate));
