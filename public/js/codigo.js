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
        body: JSON.stringify(producto)
    })
    .then(data => {
        console.log('Producto añadido al carrito:', data);
        window.location.reload()
    })
    .catch(error => console.error('Error al añadir al carrito:', error));
}