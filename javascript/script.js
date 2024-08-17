// script.js
document.getElementById('adicionar').addEventListener('click', adicionarTarefa);
document.getElementById('tarefa').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const tarefaInput = document.getElementById('tarefa');
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto !== '') {
        const novaTarefa = document.createElement('li');
        novaTarefa.innerHTML = `${tarefaTexto} <button onclick="removerTarefa(this)">Excluir</button>`;
        document.getElementById('tarefas').appendChild(novaTarefa);
        tarefaInput.value = '';
    }
}

function removerTarefa(botao) {
    const tarefa = botao.parentElement;
    tarefa.remove();
}
