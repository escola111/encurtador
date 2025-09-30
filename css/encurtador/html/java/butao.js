const form = document.getElementById('form');
const linkEncurtado = document.getElementById('linkEncurtado');
const botaoCopiar = document.getElementById('botaoCopiar');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputUrl = this.querySelector('input[type="url"]').value;

  const urlEncurtada = 'https://encurtador.com/' + btoa(inputUrl).slice(0, 8);
  
  linkEncurtado.textContent = urlEncurtada;
  botaoCopiar.style.display = 'inline-block'; 
});

botaoCopiar.addEventListener('click', function() {
  const textoParaCopiar = linkEncurtado.textContent;
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
    alert('Link copiado para a área de transferência!');
  }).catch(() => {
    alert('Não foi possível copiar o link.');
  });
});