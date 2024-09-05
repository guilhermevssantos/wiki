console.log([deusesGodOfWar]);

function pesquisar() {
   
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let deuses of deusesGodOfWar) {

        resultados += `
            <div class="item-resultado">
                <h2 class="nome-personagem">
                    <a href="${deuses.link}" target="_blank">${deuses.nome}</a>
                </h2>
                <p class="titulo">${deuses.titulo}</p>
                <p class="descricao-meta">${deuses.descricao}</p>
                <a href="${deuses.link}" target="_blank">Saiba mais</a>
            </div>
        `
    }

    section.innerHTML = resultados;
}
