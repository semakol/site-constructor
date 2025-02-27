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

let blockIdCounter = 0;

function createElement(template) {
    if (!template || !template.hasAttribute('data-template')) return;

    const block = template.cloneNode(true);
    block.removeAttribute('data-template');
    block.setAttribute('id', `block-${blockIdCounter++}`);

    // Сохраняем исходные значения
    const originalStyle = window.getComputedStyle(block);
    block.dataset.originalBackground = originalStyle.backgroundImage;

    const fields = [
        { selector: '.input-setting-header-0', key: 'originalFontSize0' },
        { selector: '.input-setting-header-1', key: 'originalFontSize1' },
        { selector: '.input-setting-header-2', key: 'originalFontSize2' },
        { selector: '.header-color-0', key: 'originalFontColor0' },
        { selector: '.header-color-1', key: 'originalFontColor1' },
        { selector: '.header-color-2', key: 'originalFontColor2' },
        { selector: '.header-border-color', key: 'originalBorderColor' },
        { selector: '.head-color', key: 'originalHeadColor' }
    ];

    fields.forEach(({ selector, key }) => {
        const input = block.querySelector(selector);
        if (input) block.dataset[key] = input.value;
    });

    // Обработчики для кнопок
    block.querySelector('.trash')?.addEventListener('click', () => block.remove());
    block.querySelector('.header-setting')?.addEventListener('click', () => {
        block.querySelector('.setting-header-bar')?.classList.remove('hidden');
    });
    block.querySelector('.header-content')?.addEventListener('click', () => {
        block.querySelector('.header-bar')?.classList.remove('hidden');
    });

    // Обработчики для сохранения
    ['save-header', 'save'].forEach(buttonClass => {
        const button = block.querySelector(`.${buttonClass}`);
        if (button && !button.hasAttribute('data-handled')) {
            button.setAttribute('data-handled', 'true');
            button.addEventListener('click', buttonClass === 'save-header' ? headerSettingClick : headerClick);
        }
    });

    // Скрываем панели
    block.querySelectorAll('.header-bar, .setting-header-bar').forEach(panel => panel.classList.add('hidden'));
    block.classList.remove('hidden');
    page.appendChild(block);
}

// Добавляем события для кнопок заголовка и соответствующих шаблонов
const titleButton = document.querySelector('.title-button');
const headerTemplate = document.querySelector('.header');
titleButton.addEventListener('click', () => createElement(headerTemplate)); // Исправлено здесь

const infoButton = document.querySelector('.info-button');
const infoTemplate = document.querySelector('.info');
infoButton.addEventListener('click', () => createElement(infoTemplate)); // Исправлено здесь

const prospectsButton = document.querySelector('.work-button');
const prospectTemplate = document.querySelector('.prospects');
prospectsButton.addEventListener('click', () => createElement(prospectTemplate)); // Исправлено здесь

const buttonButton = document.querySelector('.button-button');
const buttonTemplate = document.querySelector('.button');
buttonButton.addEventListener('click', () => createElement(buttonTemplate)); // Исправлено здесь

const contactButton = document.querySelector('.contact-button');
const contactTemplate = document.querySelector('.contact');
contactButton.addEventListener('click', () => createElement(contactTemplate)); // Исправлено здесь

