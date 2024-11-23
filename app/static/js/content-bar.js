function headerClick() {
    // Обновление текстовых блоков
    document.querySelector('.title-0').textContent = document.querySelector('.input-title-0').value;
    document.querySelector('.title-1').textContent = document.querySelector('.input-title-1').value;
    document.querySelector('.tile-2').textContent = document.querySelector('.input-title-2').value;

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