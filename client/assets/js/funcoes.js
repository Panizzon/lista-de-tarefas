//função para montar os cartões
function montarPainel(){

    let painelTarefas = document.querySelector('#painelTarefas')
    painelTarefas.innerHTML = '';
    //espera o resultado da função listar tarefas()
    let promise = listarTarefas("");
    promise
    //Caso o resiltado seja processado
        .then(function(response){
            console.log(response);

            response.forEach(function(item){
                let cartao = document.createElement('div');
                cartao.className = 'card';
                cartao.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <div>
                            <span class="card-subtitle mb-2 text-muted">${item.data}</span>
                        </div>
                        <p class="card-text">${item.descricao}</p>
                    </div>
                </div>`
            });
        })
    //Caso o resultado não seja processado
        .catch(function(error){
            console.log(error)
        });
}