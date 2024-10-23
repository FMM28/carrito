

const xboxImg = document.querySelector('#xbox')
const pspImg = document.querySelector('#psp')
const nintendoImg = document.querySelector('#nintendo')
const plataforma = document.querySelector('#plataforma')
const juegos = document.querySelector('#juegos')
const marca = document.querySelector('#marca')
const venta = document.querySelector('#venta')

xboxImg.addEventListener('click',()=>{
    plataforma.style.backgroundColor = '#2ca243'
    juegos.style.backgroundColor = '#77bb44'
    marca.innerText='Juegos de Xbox'
    cards(listaJuegos.xbox)
})

pspImg.addEventListener('click',()=>{
    plataforma.style.backgroundColor = '#182580'
    juegos.style.backgroundColor = '#1e5ddb'
    marca.innerText='Juegos de PSP'
    cards(listaJuegos.psp)
})

nintendoImg.addEventListener('click',()=>{
    plataforma.style.backgroundColor = '#dd2020'
    juegos.style.backgroundColor = '#ffffff'
    marca.innerText='Juegos de Nintendo'
    cards(listaJuegos.nintendo)
})

function cards(juegosMostrados){
    venta.innerHTML = ''

    for (const juego of Object.values(juegosMostrados)) {
        const card = document.createElement('div');
        card.classList.add('card');

        const nombre = document.createElement('h3');
        nombre.textContent = juego.nombre;

        const precio = document.createElement('p');
        precio.textContent = `Precio: ${juego.precio}`;

        const imagen = document.createElement('img');
        imagen.src = juego.imagen;
        imagen.alt = juego.nombre;

        const trailerLink = document.createElement('a');
        trailerLink.href = juego.trailer;
        trailerLink.textContent = 'Ver Tráiler';
        trailerLink.target = '_blank';

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(trailerLink);

        venta.appendChild(card);
    }

}
