function sendHTML() {
    const page = document.querySelector('.page'); 
    const clonedPage = page.cloneNode(true); 

    // Получаем HTML содержимое клонированной страницы
    const filteredHtml = clonedPage.innerHTML;

    // Отправляем HTML на сервер через POST запрос
    fetch('./api/v1/sample', {
        method: 'POST',
        headers: {
            'Content-Type': 'html'
        },
        body: filteredHtml,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Страница отправлена');
        // Перенаправляем пользователя на другую страницу
        window.location.href = "/PA-redactor";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function patchHTML(id) {
    const page = document.querySelector('.page');
    const clonedPage = page.cloneNode(true);

    // Получаем HTML содержимое клонированной страницы
    const filteredHtml = clonedPage.innerHTML;

    // Отправляем HTML на сервер через POST запрос с указанием ID
    fetch(`../api/v1/sample-patch/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'html'
        },
        body: filteredHtml,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Страница отправлена');
        // Перенаправляем пользователя на другую страницу
        window.location.href = "/PA-redactor";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
