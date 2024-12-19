function exit() {
    fetch('./api/v1/exit', {
        method: 'POST'
    })
    .then(() => {
        location.reload();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

