const xboxImg = document.querySelector('#xbox');
const pspImg = document.querySelector('#psp');
const nintendoImg = document.querySelector('#nintendo');

xboxImg.addEventListener('click', () => {
    window.location.href = '/productos/xbox';
});

pspImg.addEventListener('click', () => {
    window.location.href = '/productos/psp';
});

nintendoImg.addEventListener('click', () => {
    window.location.href = '/productos/nintendo';
});

function agregarAlCarrito(producto) {
    fetch('/productos/agregarCarrito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto) // Enviando el objeto del producto como JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        window.location.reload()
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
