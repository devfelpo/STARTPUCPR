const adicionar = document.getElementById('adicionar');
const quadro = document.querySelector('.quadro');
const xQuadro = document.getElementById('xQuadro');

adicionar.addEventListener('click', () => {
  quadro.classList.add('quadro-ativo');
});

xQuadro.addEventListener('click', () => {
  quadro.classList.remove('quadro-ativo');
});

window.addEventListener('load', () => {
  const hidden = document.querySelectorAll('.hidden');
  hidden.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 200);
  });
});

const botao = document.getElementById('botao');

const inputs = document.querySelectorAll('.input');

botao.addEventListener('click', () => {
  let todosPreenchidos = true;

  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      todosPreenchidos = false;
    }
  });

  if (!todosPreenchidos) {
    alert('Preencha todos os campos');
    return;
  } else {
    quadro.classList.remove('quadro-ativo');
  }
  const listaFuncionarios = document.getElementById('listaFuncionarios');

  const funcionarioDiv = document.createElement('div');
  funcionarioDiv.classList.add('funcionario');

  funcionarioDiv.innerHTML = `<div class="funcionario-info">
    <span><strong>Nome:</strong> ${inputs[0].value}</span>
    <span><strong>Email:</strong> ${inputs[1].value}</span>
    <span><strong>CPF:</strong> ${inputs[2].value}</span>  
  </div>
  <button class="remove-btn"> X </button>
  `;

  funcionarioDiv.querySelector('.remove-btn').addEventListener('click', () => {
    listaFuncionarios.removeChild(funcionarioDiv);
  });

  listaFuncionarios.appendChild(funcionarioDiv);
  inputs.forEach((input) => (input.value = ''));
  quadro.classList.remove('quadro-ativo');
});
