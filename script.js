const botaoComprar = document.getElementById('botaoComprar');
const botaoCurtir = document.getElementById('botaoCurtir');

botaoComprar.addEventListener('click', () => {
  botaoComprar.textContent = 'Comprado';
});

botaoCurtir.addEventListener('click', () => {
  botaoCurtir.textContent = 'Curtido';
});