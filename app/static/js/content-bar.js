function headerClick() {
    // Обновление текстовых блоков
    document.querySelector('.title-0').textContent = document.querySelector('.input-title-0').value;
    document.querySelector('.title-1').textContent = document.querySelector('.input-title-1').value;
    document.querySelector('.tile-2').textContent = document.querySelector('.input-title-2').value;
    
    document.querySelector('.header-bar').classList.add('hidden');
}

function infoClick() {
    // Обновление текстовых блоков
    document.querySelector('.info-h2').textContent = document.querySelector('.input-info-0').value;
    document.querySelector('.info-p').textContent = document.querySelector('.input-info-1').value;

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
    document.querySelector('.info-bar').classList.add('hidden');
}

function prospectsClick() {
    // Обновление текстовых блоков
    document.querySelector('.prospects-h2').textContent = document.querySelector('.input-prospects-0').value;
    document.querySelector('.prospects-p').textContent = document.querySelector('.input-prospects-1').value;

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
    document.querySelector('.prospects-bar').classList.add('hidden');
}

function buttonClick() {
    // Обновление текстовых блоков
    document.querySelector('.really-button').textContent = document.querySelector('.input-button-0').value;
    document.querySelector('.button-a').href = document.querySelector('.input-button-1').value;

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
    document.querySelector('.button-bar').classList.add('hidden');
}

function contactClick() {
    // Обновление текстовых блоков
    document.querySelector('.tel').textContent = document.querySelector('.input-contact-0').value;
    document.querySelector('.email').textContent = document.querySelector('.input-contact-1').value;
    document.querySelector('.addres').textContent = document.querySelector('.input-contact-2').value;

    document.querySelector('.vk').textContent = document.querySelector('.input-contact-3').value;
    document.querySelector('.vk').href = document.querySelector('.input-contact-3').value;
    document.querySelector('.telegram').textContent = document.querySelector('.input-contact-4').value;
    document.querySelector('.telegram').href = document.querySelector('.input-contact-4').value;
    document.querySelector('.whatsap').textContent = document.querySelector('.input-contact-5').value;
    document.querySelector('.whatsap').href = document.querySelector('.input-contact-5').value;

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
    document.querySelector('.contact-bar').classList.add('hidden');
}