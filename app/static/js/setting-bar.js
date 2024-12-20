function setHorizontalAlignment(pos,place){
    const titlesSection = document.querySelector('.'+place);
    if(pos === 'center'){
        titlesSection.style.marginLeft = 0;
        titlesSection.style.marginRight = 0;
    }else if(pos === 'right'){
        titlesSection.style.marginLeft = '50%';
        titlesSection.style.marginRight = 0;
    }else if(pos === 'left'){
        titlesSection.style.marginRight = '50%';
        titlesSection.style.marginLeft = 0;
    }
}

function headerSettingClick() {
    // Получаем значения из полей ввода
    const headingSize = document.querySelector('.input-setting-header-0').value;
    const titleSize = document.querySelector('.input-setting-header-1').value;
    const descriptionSize = document.querySelector('.input-setting-header-2').value;

    const headingColor = document.querySelector('.header-color-0').value;
    const titleColor = document.querySelector('.header-color-1').value;
    const descriptionColor = document.querySelector('.header-color-2').value;
    const headerBorderColor = document.querySelector('.header-border-color').value;

    // Применяем настройки к заголовкам
    const titlesSection = document.querySelector('.titles');

    // Устанавливаем размеры шрифтов
    titlesSection.querySelector('h2.title-0').style.fontSize = headingSize + 'px';
    titlesSection.querySelector('h1.title-1').style.fontSize = titleSize + 'px';
    titlesSection.querySelector('h2.tile-2').style.fontSize = descriptionSize + 'px';

    // Устанавливаем цвета шрифтов
    titlesSection.querySelector('h2.title-0').style.color = headingColor;
    titlesSection.querySelector('h1.title-1').style.color = titleColor;
    titlesSection.querySelector('h2.tile-2').style.color = descriptionColor;

    // <input type="color" class="header-border-color" name="header-border" value="#FF7700"/>
    // <button class="header-color-none color-none"></button>
    if(!document.querySelector('.title-1').classList.contains('none-color')){
        titlesSection.querySelector('h1.title-1').style.borderColor = headerBorderColor;
    }else{
        titlesSection.querySelector('h1.title-1').style.borderColor = 'transparent';
    }


    // Устанавливаем цвет фона
    var fileInput = document.querySelector('.input-img');
    var colorInput = document.querySelector('.head-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0])
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
            document.querySelector('.header').style.backgroundColor = colorInput.value;
            document.querySelector('.header').style.backgroundImage = 'none';
    }else{
    reader.onload = function(e) {
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.header').style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.title-1').classList.remove('none-color');
    document.querySelector('.setting-header-bar').classList.add('hidden');
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
    if (colorInput.value && !fileInput.files[0])
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
            document.querySelector('.info').style.backgroundColor = colorInput.value;
            document.querySelector('.info').style.backgroundImage = 'none';
    }else{
    reader.onload = function(e) {
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
    // Применяем настройки к заголовкам
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
    if (colorInput.value && !fileInput.files[0])
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
            document.querySelector('.prospects').style.backgroundColor = colorInput.value;
            document.querySelector('.prospects').style.backgroundImage = 'none';
    }else{
    reader.onload = function(e) {
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
    if (colorInput.value && !fileInput.files[0])
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
            document.querySelector('.button').style.backgroundColor = colorInput.value;
            document.querySelector('.button').style.backgroundImage = 'none';
    }else{
    reader.onload = function(e) {
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
    const titlesSection = document.querySelector('.contact-div');

    // Устанавливаем размеры шрифтов
    titlesSection.querySelector('.contact h2').style.fontSize = headingSize + 'px';
    titlesSection.querySelector('.contact p').style.fontSize = titleSize + 'px';

    // Устанавливаем цвета шрифтов
    titlesSection.querySelector('.contact h2').style.color = headingColor;
    titlesSection.querySelectorAll('.contact p').forEach((el)=>{el.style.color = infoColor;})
    titlesSection.querySelectorAll('.contact p.on-info').forEach((el)=>{el.style.color = titleColor;})

    titlesSection.style.borderColor = headerBorderColor;
    document.querySelector('.contact h2').style.setProperty('--c', headerBorderH2Color);


    var fileInput = document.querySelector('.input-img-contact');
    var colorInput = document.querySelector('.contact-color');
    var reader = new FileReader();
    if (colorInput.value && !fileInput.files[0])
        { // Если выбран цвет, удаляем фоновое изображение и устанавливаем цвет
            document.querySelector('.contact').style.backgroundColor = colorInput.value;
            document.querySelector('.contact').style.backgroundImage = 'none';
    }else{
    reader.onload = function(e) {
        document.querySelector('.contact').style.backgroundColor = 'transparent';
        document.querySelector('.contact').style.backgroundImage = `url(${e.target.result})`;
    }
    reader.readAsDataURL(fileInput.files[0]);
    }
    document.querySelector('.setting-contact-bar').classList.add('hidden');
}