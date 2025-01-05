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

function sendOPEN(id) {
    fetch(`./api/v1/open-sample/${id}`, {
        method: 'POST'
    })
    .then(() => {
        location.reload();
        alert('Страница открыта');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function sendCLOSE(id) {
    fetch(`./api/v1/close-sample/${id}`, {
        method: 'POST'
    })
    .then(() => {
        location.reload();
        alert('Страница закрыта');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function sendDELETE(id) {
    fetch(`./api/v1/delete-sample/${id}`, {
        method: 'POST'
    })
    .then(() => {
        location.reload();
        alert('Страница удалена');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function Record(id) {
    fetch(`/api/v1/record/${id}`, {
        method: 'POST'
    })
    .then(() => {
        window.location.href = "/PA-record-student";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}