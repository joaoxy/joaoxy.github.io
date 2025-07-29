
function carregar() {
    var btnCarregar = document.getElementById("btnCarregar");
    btnCarregar.innerText = "Carregando..."; // Altera o texto do botão para "Carregando"
    btnCarregar.disabled = true; // Desabilita o botão

    carregarCaixa(1);
    carregarCaixa(2);
    carregarCaixa(3);
    carregarCaixa(4);
    carregarCaixa(5);
    carregarCaixa(6);

    
    setTimeout(iniciarCronometro, 5000);
}


function carregarCaixa(id) {
    var loadingText = document.getElementById("loadingText" + id);
    var progressoTexto = document.getElementById("progressoTexto" + id);
    var barraProgresso = document.getElementById("barraProgresso" + id);
    var resultadoTexto = document.getElementById("resultado" + id);
    var btnJogarAgora = document.querySelector(".caixa:nth-child(" + id + ") .btnJogarAgora");
    var successMessage = document.getElementById("successMessage");

    loadingText.style.display = "block"; 
    progressoTexto.innerText = "";
    barraProgresso.style.width = "0%";
    barraProgresso.classList.add("carregando");
    resultadoTexto.innerText = "";
    btnJogarAgora.style.display = "none";
    successMessage.style.display = "none"; 

    setTimeout(function() {
        var progresso = Math.floor(Math.random() * (99 - 55 + 1) + 55);
        barraProgresso.style.width = progresso + "%";
        barraProgresso.classList.remove("carregando");
        progressoTexto.innerText = progresso + "%";

        if (progresso >= 55 && progresso <= 75) {
            resultadoTexto.innerText = "Chance: Pouco lucro";
            barraProgresso.style.backgroundColor = "#B5C915";
            progressoTexto.style.color = "#000";
            btnJogarAgora.style.display = "block";
        } else if (progresso > 75 && progresso <= 85) {
            resultadoTexto.innerText = "Chance: Lucro alto";
            barraProgresso.style.backgroundColor = "#69B249";
            progressoTexto.style.color = "#000";
            btnJogarAgora.style.display = "block";
        } else if (progresso > 85) {
            resultadoTexto.innerText = "Chance: Lucro altíssimo";
            barraProgresso.style.backgroundColor = "green";
            progressoTexto.style.color = "#fff";
            btnJogarAgora.style.display = "block";
        }

        
        if (!btnJogarAgora.querySelector(".exclusivoTexto")) {
            var exclusivoTexto = document.createElement("div");
            exclusivoTexto.innerText = "⚠️Exclusivo neste link!⚠️";
            exclusivoTexto.className = "exclusivoTexto"; 
            exclusivoTexto.style.fontSize = "10px";
            exclusivoTexto.style.fontWeight = "bold";
            exclusivoTexto.style.marginTop = "5px";
            btnJogarAgora.appendChild(exclusivoTexto);
        }

        
        loadingText.style.display = "none";

        
        successMessage.style.display = "block";
        btnCarregar.style.display = "none";
    }, 5000);
}


function iniciarCronometro() {
    var cronometroElemento = document.getElementById("cronometro");
    var tempoRestante = 20 * 60;

    function atualizarCronometro() {
        var minutos = Math.floor(tempoRestante / 60);
        var segundos = tempoRestante % 60;

        
        var minutosFormatados = minutos < 10 ? "0" + minutos : minutos;
        var segundosFormatados = segundos < 10 ? "0" + segundos : segundos;

        
        cronometroElemento.innerText = "Corra! Aproveite o RTP alto e lucre antes de " + minutosFormatados + ":" + segundosFormatados;

        
        tempoRestante--;

        
        if (tempoRestante < 0) {
            clearInterval(intervalID);
            cronometroElemento.innerText = "Tempo esgotado!";
            
            btnCarregar.disabled = false;
            btnCarregar.innerText = "Clique aqui e veja!";
            btnCarregar.style.display = "block"; 
        }
    }

    
    var intervalID = setInterval(atualizarCronometro, 1000);
}


function jogarAgora(id) {
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                
                var links = xhr.responseText.split('\n'); 
                var randomIndex = Math.floor(Math.random() * links.length); 
                var url = links[randomIndex].trim(); 

                if (url !== "") {
                    window.location.href = url; 
                } else {
                    console.error("Nenhum URL encontrado no arquivo para o jogo " + id);
                }
            } else {
                console.error("Erro ao carregar arquivo de link para o jogo " + id);
            }
        }
    };

    
    var arquivoLink = 'linkjogo' + id + '.txt';
    xhr.open('GET', arquivoLink, true);
    xhr.send();
}


document.getElementById("btnCarregar").addEventListener("click", carregar);


function carregarLinkBanner() {
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                
                var url = xhr.responseText;
                if (url.trim() !== "") {
                    var bannerLink = document.getElementById("bannerLink");
                    bannerLink.href = url;
                } else {
                    console.error("Nenhum URL encontrado no arquivo linkbanner.txt");
                }
            } else {
                console.error("Erro ao carregar arquivo linkbanner.txt");
            }
        }
    };

    
    var arquivoLinkBanner = 'linkbanner.txt';
    xhr.open('GET', arquivoLinkBanner, true);
    xhr.send();
}


carregarLinkBanner();

function mostrarScroller() {
    var scroller = document.getElementById("scroller");
    scroller.style.display = "block";
    scroller.start();
}


setTimeout(mostrarScroller, 8000);


var nomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Julia", "Gabriel", "Sofia", "Mateus", "Isabela", "Miguel", "Laura", "Davi", "Manuela", "Guilherme", "Valentina", "Enzo", "Beatriz", "Lucas", "Mariana", "Arthur", "Helena", "Matheus", "Yasmin", "Gabriel", "Alice", "Gustavo", "Rafaela", "Bruno", "Leticia", "Leonardo", "Camila", "Felipe", "Larissa", "Thiago", "Carolina", "Vinicius", "Gabriela", "Rafael", "Eduarda", "André", "Marcela", "Caio", "Natália", "Diego", "Isadora", "Eduardo", "Amanda", "Daniel", "Fernanda"];
var sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Carvalho", "Rodrigues", "Almeida", "Ferreira", "Costa", "Castro", "Lima", "Martins", "Araujo", "Vieira", "Ribeiro", "Barbosa", "Miranda", "Azevedo", "Gomes", "Dias", "Teixeira", "Melo", "Cardoso", "Jesus", "Nunes", "Vieira", "Marques", "Oliveira", "Batista", "Rosa", "Fernandes", "Rocha", "Lima", "Cavalcanti", "Cunha", "Carneiro", "Mendes", "Nogueira", "Coelho", "Barros", "Pereira", "Santos", "Correia", "Xavier", "Prado", "Pereira", "Costa", "Morais", "Castro"];


function gerarValorAleatorio() {
    return (Math.random() * (4678.89 - 77.50) + 77.50).toFixed(2).replace(".", ",");
}


function atualizarScroller() {
    var scroller = document.getElementById("scroller");
    scroller.innerHTML = ""; 

    for (var i = 0; i < 30; i++) { 
        var nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        var sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        var valorAleatorio = gerarValorAleatorio();

        
        var pessoaElement = document.createElement("span");
        pessoaElement.textContent = `✅${nomeAleatorio} ${sobrenomeAleatorio} aproveitou e lucrou `;
        pessoaElement.style.fontSize = "14px"; 
        pessoaElement.style.marginRight = "15px"; 
        scroller.appendChild(pessoaElement);
        
        
        var rElement = document.createElement("span");
        rElement.textContent = "R$";
        rElement.style.color = "#00EF01"; 
        pessoaElement.appendChild(rElement);

        
        var valorElement = document.createElement("span");
        valorElement.textContent = valorAleatorio;
        valorElement.style.color = "#00EF01"; 
        pessoaElement.appendChild(valorElement);

        
        if (i < 29) {
            var espacoElement = document.createTextNode(" ");
            scroller.appendChild(espacoElement);
        }
    }
}


function iniciarScroller() {
    setTimeout(function() {
        atualizarScroller();
        setInterval(atualizarScroller, 120000); 
    }, 1000); 
}


document.getElementById("btnCarregar").addEventListener("click", iniciarScroller);


window.addEventListener("scroll", function() {
    var scroller = document.getElementById("scroller");
    if (window.scrollY > 100) {
        scroller.classList.add("scroller-fixed");
    } else {
        scroller.classList.remove("scroller-fixed");
    }
});



setTimeout(function() {
    
    var rodape = document.createElement("footer");
    document.body.appendChild(rodape);

    
    var novoTexto = document.createElement("p");
    novoTexto.innerText = "SUPORTE ABAIXO";
    novoTexto.className = "novo-texto"; 
    rodape.appendChild(novoTexto);

    
    var novoBotao = document.createElement("button");
    novoBotao.innerText = "SUPORTE";
    novoBotao.id = "btnNovo"; 
    rodape.appendChild(novoBotao);

    
    var textoAbaixoBotao = document.createElement("p");
    textoAbaixoBotao.innerText = "© todos os direitos reservados.";
    rodape.appendChild(textoAbaixoBotao);

    
    novoBotao.addEventListener("click", function() {
        
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    
                    var url = xhr.responseText;
                    if (url.trim() !== "") {
                        window.location.href = url; 
                    } else {
                        console.error("Nenhum URL encontrado no arquivo linkgrupo.txt");
                    }
                } else {
                    console.error("Erro ao carregar arquivo linkgrupo.txt");
                }
            }
        };

        
        var arquivoLinkGrupo = 'linkgrupo.txt';
        xhr.open('GET', arquivoLinkGrupo, true);
        xhr.send();
    });

}, 5000);
