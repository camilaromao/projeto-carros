let listaCarros = [
    {
        "nome": "Jeep",
        "img": "assets/jeep.jpg",
        "descricao": "Encare a natureza com a tecnologia e sofisticação que só a Jeep tem."
    },

    {
        "nome": "Ferrari",
        "img": "assets/ferrari.jpg",
        "descricao": "É uma das marcas mais fortes do mundo e mantém uma imagem construída em torno da tradição nas corridas, do luxo e da exclusividade."
    },

     {
        "nome": "Ford GT",
        "img": "assets/ford-gt.jpg",
        "descricao": "É um superesportivo americano com motor central e tração traseira produzido pela Ford. Seu design é inspirado no famoso Ford GT40."
    },

    {
        "nome": "Lamborghini",
        "img": "assets/lamborghini.jpg",
        "descricao": "É um supercarro com motor central-traseiro produzido pela fabricante italiana Lamborghini."
    },

    {
        "nome": "Mustang",
        "img": "assets/mustang.jpg",
        "descricao": "Mais potente já oferecido no Brasil, equipado com um motor V8 de 507cv. Com Suspensão Adaptativa MagneRide®, freios Brembo® de alta estabilidade."
    },

    {
        "nome": "Porsche",
        "img": "assets/porsche.jpg",
        "descricao": "Automóvel esportivo, como sedãs e SUVs de alto desempenho."
    },


];

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");

    cardCarro.innerHTML += `
        <div class="card col-md-4">
            <img src="${carro.img}" class="card-img-top" alt="${carro.nome}">

            <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>

                <a href="#" class="btn btn-secondary"
                   onclick="zoomImg(${posicao}); return false;">
                    <i class="bi bi-zoom-in"></i>
                </a>
            </div>
        </div>
    `;
});


function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];

    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    let modal = new bootstrap.Modal(document.getElementById("zoomImg"));
    modal.show();
};

// botão de tema do site Dark ou Light
function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-moon-stars-fill"></i>'
    } else{
         document.querySelector("html").setAttribute("data-bs-theme", "dark");
          document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-brightness-high-fill"></i>'
    }
};


