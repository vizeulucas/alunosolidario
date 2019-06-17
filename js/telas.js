let isNone = (tela) => window.getComputedStyle(tela).display == 'none';

let switchTela = (telaShow, telaHidden1, telaHidden2, telaHidden3) => {
    if (!isNone(telaHidden1) || !isNone(telaHidden2) || !isNone(telaHidden3) && isNone(telaShow)) {
        telaHidden1.style.display = 'none';
        telaHidden2.style.display = 'none';
        telaHidden3.style.display = 'none';
        telaShow.style.display = 'flex';
    }
}


let btnTexto = document.querySelector('#btn-texto');
let formEnviarTela = document.querySelector('.form-enviar');

let btnProjeto = document.querySelector('#btn-projeto');
let projetoTela = document.querySelector('.projeto');

let btnMain = document.querySelector('#btn-main');
let mainTela = document.querySelector('.main');

let btnAlunos = document.querySelector('#btn-alunos');
let alunosTela = document.querySelector('.alunos');


btnTexto.addEventListener('click', function() {
    switchTela(formEnviarTela, projetoTela, mainTela, alunosTela);
});

btnProjeto.addEventListener('click', function() {
    switchTela(projetoTela, formEnviarTela, mainTela, alunosTela);
});

btnMain.addEventListener('click', function() {
    switchTela(mainTela, projetoTela, formEnviarTela, alunosTela);
});

btnAlunos.addEventListener('click', function() {
    switchTela(alunosTela, projetoTela, mainTela, formEnviarTela);
});
