function pesquisar() {
   
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado, Você precisa digitar o nome de um deus de God of War</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let titulo = "";
    let descricao = "";

    for (let deuses of deusesGodOfWar) {
            nome = deuses.nome.toLowerCase();
            titulo = deuses.titulo.toLowerCase();
            descricao = deuses.descricao.toLowerCase();

            if(nome.includes(campoPesquisa) || titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <img class="imagem-personagem" src="./assets/img/${deuses.nome}.png" alt="Imagem de ${deuses.nome}">    
                <h2 class="nome-personagem">
                    <a href="${deuses.link}" target="_blank">${deuses.nome}</a>
                </h2>
                <p class="titulo">${deuses.titulo}</p>
                <p class="descricao-meta">${deuses.descricao}</p>
                <a href="${deuses.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
}
