function headerSettingClick(event) {
    const block = event.target.closest('.block');
    if (!block) return;

    // Исходные значения
    const original = {
        background: block.dataset.originalBackground,
        fontSize: [block.dataset.originalFontSize0, block.dataset.originalFontSize1, block.dataset.originalFontSize2],
        fontColor: [block.dataset.originalFontColor0, block.dataset.originalFontColor1, block.dataset.originalFontColor2],
        borderColor: block.dataset.originalBorderColor,
        headColor: block.dataset.originalHeadColor
    };

    // Новые значения
    const inputs = {
        fontSize: ['.input-setting-header-0', '.input-setting-header-1', '.input-setting-header-2'],
        fontColor: ['.header-color-0', '.header-color-1', '.header-color-2'],
        borderColor: '.header-border-color',
        headColor: '.head-color',
        fileInput: '.input-img'
    };

    // Находим заголовки
    const titles = ['.title-0', '.title-1', '.tile-2'].map(selector => block.querySelector(selector));

    // Логика фона
    const fileInput = block.querySelector(inputs.fileInput);
    const headColorInput = block.querySelector(inputs.headColor);

    if (fileInput?.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            block.style.backgroundImage = `url(${e.target.result})`;
            block.style.backgroundColor = 'transparent';
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else if (headColorInput?.value !== original.headColor) {
        block.style.backgroundColor = headColorInput.value;
        block.style.backgroundImage = 'none';
    } else {
        block.style.backgroundImage = original.background;
        block.style.backgroundColor = 'transparent';
    }

    // Логика размера шрифта и цвета
    inputs.fontSize.forEach((selector, index) => {
        const input = block.querySelector(selector);
        const title = titles[index];
        if (input && title) {
            title.style.fontSize = input.value !== original.fontSize[index]
                ? `${input.value}px`
                : `${original.fontSize[index]}px`;
        }
    });

    inputs.fontColor.forEach((selector, index) => {
        const input = block.querySelector(selector);
        const title = titles[index];
        if (input && title) {
            title.style.color = input.value !== original.fontColor[index]
                ? input.value
                : original.fontColor[index];
        }
    });

    // Логика цвета границы
    const borderColorInput = block.querySelector(inputs.borderColor);
    const title1 = titles[1];
    if (borderColorInput && title1) {
        title1.style.borderColor = borderColorInput.value !== original.borderColor
            ? borderColorInput.value
            : original.borderColor;
    }

    // Скрываем панель настроек
    block.querySelector('.setting-header-bar')?.classList.add('hidden');
}

function infoSettingClick() {
    // Получаем значения из полей ввода
    const headingSize = document.querySelector('.input-setting-info-0').value;
    const titleSize = document.querySelector('.input-setting-info-1').value;

    const headingColor = document.querySelector('.info-color-0').value;
    const titleColor = document.querySelector('.info-color-1').value;
    const headerBorderColor = document.querySelector('.info-border-color').value;
    const headerBorderH2Color = document.querySelector('.info-h2-border-color').value;

    // Применяем настройки к заголовкам
    const titlesSection = document.querySelector('.info-div');

    // Устанавливаем размеры шрифтов
    titlesSection.querySelector('.info-h2').style.fontSize = headingSize + 'px';
    titlesSection.querySelector('.info-p').style.fontSize = titleSize + 'px';

    // Устанавливаем цвета шрифтов
    titlesSection.querySelector('.info-h2').style.color = headingColor;
    titlesSection.querySelector('.info-p').style.color = titleColor;
    titlesSection.style.borderColor = headerBorderColor;
    document.querySelector('.info-h2').style.setProperty('--c', headerBorderH2Color);

    var fileInput = document.querySelector('.input-img-info');
    var colorInput = document.querySelector('.info-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0]) {
        // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
        document.querySelector('.info').style.backgroundColor = colorInput.value;
        document.querySelector('.info').style.backgroundImage = 'none';
    } else {
        reader.onload = function (e) {
            document.querySelector('.info').style.backgroundColor = 'transparent';
            document.querySelector('.info').style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.setting-info-bar').classList.add('hidden');
}

function prospectsSettingClick() {
    // Получаем значения из полей ввода
    const headingSize = document.querySelector('.input-setting-prospects-0').value;
    const titleSize = document.querySelector('.input-setting-prospects-1').value;
    const headingColor = document.querySelector('.prospects-color-0').value;
    const titleColor = document.querySelector('.prospects-color-1').value;
    const headerBorderColor = document.querySelector('.prospects-border-color').value;
    const headerBorderH2Color = document.querySelector('.prospects-h2-border-color').value;

    const titlesSection = document.querySelector('.prospects-div');

    // Устанавливаем размеры шрифтов
    titlesSection.querySelector('.prospects-h2').style.fontSize = headingSize + 'px';
    titlesSection.querySelector('.prospects-p').style.fontSize = titleSize + 'px';

    // Устанавливаем цвета шрифтов
    titlesSection.querySelector('.prospects-h2').style.color = headingColor;
    titlesSection.querySelector('.prospects-p').style.color = titleColor;
    titlesSection.style.borderColor = headerBorderColor;
    document.querySelector('.prospects-h2').style.setProperty('--c', headerBorderH2Color);

    var fileInput = document.querySelector('.input-img-prospects');
    var colorInput = document.querySelector('.prospects-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0]) {
        // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
        document.querySelector('.prospects').style.backgroundColor = colorInput.value;
        document.querySelector('.prospects').style.backgroundImage = 'none';
    } else {
        reader.onload = function (e) {
            document.querySelector('.prospects').style.backgroundColor = 'transparent';
            document.querySelector('.prospects').style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.setting-prospects-bar').classList.add('hidden');
}

function buttonSettingClick() {
    // Получаем значения из полей ввода
    const headingSize = document.querySelector('.input-setting-button-0').value;
    const headingColor = document.querySelector('.button-color-0').value;
    const headerBackgroundColor = document.querySelector('.button-background-color').value;
    const headerBorderColor = document.querySelector('.button-border-color').value;

    // Применяем настройки к заголовкам
    const titlesSection = document.querySelector('.button-a');

    // Устанавливаем размеры шрифтов
    titlesSection.querySelector('.really-button').style.fontSize = headingSize + 'px';

    // Устанавливаем цвета шрифтов
    titlesSection.querySelector('.really-button').style.color = headingColor;

    document.querySelector('.really-button').style.borderColor = headerBorderColor;
    document.querySelector('.really-button').style.backgroundColor = headerBackgroundColor;

    var fileInput = document.querySelector('.input-img-button');
    var colorInput = document.querySelector('.button-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0]) {
        // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
        document.querySelector('.button').style.backgroundColor = colorInput.value;
        document.querySelector('.button').style.backgroundImage = 'none';
    } else {
        reader.onload = function (e) {
            document.querySelector('.button').style.backgroundColor = 'transparent';
            document.querySelector('.button').style.backgroundImage = `url(${e.target.result})`;
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.setting-button-bar').classList.add('hidden');
}

function contactSettingClick() {
    // Получаем значения из полей ввода
    const headingSize = document.querySelector('.input-setting-contact-0').value;
    const titleSize = document.querySelector('.input-setting-contact-1').value;
    const headingColor = document.querySelector('.contact-color-0').value;
    const titleColor = document.querySelector('.contact-color-1').value;
    const infoColor = document.querySelector('.contact-color-2').value;
    const headerBorderColor = document.querySelector('.contact-border-color').value;
    const headerBorderH2Color = document.querySelector('.contact-h2-border-color').value;

    // Применяем настройки к заголовкам
    const titlesSection = document.querySelector('.contact-data');

    if (titlesSection) {
        const contactH2 = titlesSection.querySelector('h2');
        const contactP = titlesSection.querySelectorAll('p');

        if (contactH2) {
            contactH2.style.fontSize = headingSize + 'px';
            contactH2.style.color = headingColor;
            contactH2.style.borderColor = headerBorderColor;
            contactH2.style.setProperty('--c', headerBorderH2Color);
        }

        contactP.forEach(el => {
            el.style.fontSize = titleSize + 'px';
            el.style.color = infoColor;
        });

        titlesSection.querySelectorAll('p.on-info').forEach(el => el.style.color = titleColor);

        // Применение границы
        titlesSection.style.borderColor = headerBorderColor;
    }

    var fileInput = document.querySelector('.input-img-contact');
    var colorInput = document.querySelector('.contact-color');
    var reader = new FileReader();

    if (colorInput.value && !fileInput.files[0]) {
        // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
        document.querySelector('.contact').style.backgroundColor = colorInput.value;
        document.querySelector('.contact').style.backgroundImage = 'none';
    } else {
        reader.onload = function (e) {
            document.querySelector('.contact').style.backgroundColor = 'transparent';
            document.querySelector('.contact').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }

    document.querySelector('.setting-contact-bar').classList.add('hidden');
}
