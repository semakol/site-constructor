function sendHTML(){
    const page = document.querySelector('.page'); 
    const clonedPage = page.cloneNode(true); 

    const elementsToRemove = clonedPage.querySelectorAll('.hidden, .setting, .content, .trash, .on-off');
    elementsToRemove.forEach(element => element.remove()); 

    const filteredHtml = clonedPage.innerHTML;

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
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
