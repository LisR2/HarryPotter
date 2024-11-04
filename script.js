// console.log(filmes)
function pesquisar() {
    console.log("Função de pesquisa acionada!");
    // Sua lógica de pesquisa aqui...
// let section = document.getElementById("filmes");
// console.log(section);
// console.log(filmes);
// console.log('clicou')

// let resultados = section.innerHTML;

// let CampoPesquisa =getElementById("campo-pesquisa").value{
//     if(filme.titulo.includes("campoPesquisa"));
//         if(campoPesquisa==""){
//             section.innerHTML{
//                 <p>Nada foi encontrado.</p>
//             };
//             return;
//         }
// }

let termo = document.getElementById("termoPesquisa").value.toLowerCase();
    let section = document.getElementById("filmes");
    section.innerHTML = "";  // Limpar resultados anteriores

    // Filtrar filmes que correspondem ao termo de pesquisa
    let resultadosFiltrados = filmes.filter(filme => 
        filme.titulo.toLowerCase().includes(termo) || 
        filme.descricao.toLowerCase().includes(termo) || 
        filme.diretor.toLowerCase().includes(termo) || 
        filme.elenco.toLowerCase().includes(termo)
    );

    // Verificar se há resultados
    if (resultadosFiltrados.length > 0) {
        // Mostrar os resultados filtrados
        for (let filme of resultadosFiltrados) {
            section.innerHTML += `
                <h2 class="nome-filme">${filme.titulo}</h2>
                <div class="descricao-filme">
                    <p>${filme.descricao}</p>
                    <p><b>Diretor:</b> ${filme.diretor}</p>
                    <p><b>Elenco:</b> ${filme.elenco}</p>
                </div>
            `;
        }
    } else {
        section.innerHTML = "<p>Nenhum filme encontrado.</p>";
    }
}

for (let filme of filmes) {
resultados += `
    <h2 class="nome-filme">${filme.titulo}</h2>
    <div class="descricao-filme">
    <p>${filme.descricao}</p>
    <p><b>Diretor:</b> ${filme.diretor}</p>
    <p><b>Elenco:</b> ${filme.elenco}</p>
    </div>
`;
}

section.innerHTML = resultados;
// }