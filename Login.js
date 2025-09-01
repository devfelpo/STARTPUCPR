const email = document.getElementById('email');
const senha = document.getElementById('senha');

function verificarLogin() {
  if (email.value === 'startpuc@admin.com' && senha.value === 'admin123') {
    return (window.location.href = 'home.html');
  } else {
    return alert('erro, email ou senha invalidos');
  }
}

const botao = document.querySelector('.botao');

botao.addEventListener('click', verificarLogin);

senha.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    verificarLogin();
  }
});
