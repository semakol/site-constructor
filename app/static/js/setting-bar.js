function setHorizontalAlignment(pos,place){
    const titlesSection = document.querySelector('.'+place);
    if(pos === 'center'){
        titlesSection.style.margin = 0;
    }else if(pos === 'left'){
        titlesSection.style.margin = '0 50% 0 0';
    }else if(pos === 'right'){
        titlesSection.style.margin = '0 0 0 50%';
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

