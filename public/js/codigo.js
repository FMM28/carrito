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

