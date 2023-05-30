console.log(`teste`)

// -----------------------------------------------------------------------------------------------------
let contador;
// Array para os nomes
let nomesSelecionados = [];
let precoSelecionados = [];

function mudarBorda(elemento) {
    const aba = elemento.closest('.aba');
    const opcoes = aba.querySelectorAll('.opcao');
    const bottombar = document.querySelector('.bottombar');

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i] === elemento) {
            if (opcoes[i].classList.contains('selecionada')) {
                opcoes[i].style.boxShadow = 'none';
                opcoes[i].classList.remove('selecionada');
                opcoes[i].querySelector('.selecionada').style.display = 'none';
            } else {
                opcoes[i].style.boxShadow = 'inset 0 0 0 4px #32B72F';
                opcoes[i].classList.add('selecionada');
                opcoes[i].querySelector('.selecionada').style.display = 'block';
            }
        } else {
            opcoes[i].style.boxShadow = 'none';
            opcoes[i].classList.remove('selecionada');
            opcoes[i].querySelector('.selecionada').style.display = 'none';
        }
    }
    // Verifica todas as classes com opcao.selecionada e se tiver 3 habilita o botao
    const opcoesSelecionadas = document.querySelectorAll('.aba .opcao.selecionada');
    if (opcoesSelecionadas.length === 3) {
        contador = 3;
    } else {
        if (opcoesSelecionadas.length === 2) {
            contador = 2;
        }
        else {
            if (opcoesSelecionadas.length === 1) {
                contador = 1;
            }
            else {
                contador = 0;
            }
        }
    }

    const opcaoSelecionada = aba.querySelector('.opcao.selecionada');
    const botao = bottombar.querySelector('.closeorder');
    const fechar = bottombar.querySelector('.finalize');

    if (contador === 3) {
        botao.style.display = 'flex';
        fechar.style.display = 'none';
    } else {
        botao.style.display = 'none';
        fechar.style.display = 'flex';
    }
}
// Funcao para os pratos e o valores 

let prato = [];

function Prato(elemento) {
    const nome = elemento.querySelector('p').textContent;
    const preco = elemento.querySelector('h1').textContent;

    // Verifica se o nome já está presente no array
    const nomeIndex = prato.indexOf(nome);
    if (nomeIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        prato.splice(nomeIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        prato = [];
        prato.push(nome);
    }

    // Verifica se o preco já está presente no array
    const precoIndex = prato.indexOf(preco);
    if (precoIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        prato.splice(precoIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        prato.push(preco);
    }

    console.log('Opções selecionadas:', prato);
}

// Funcao para bebidas 

let bebida = [];

function bebidas(elemento) {
    const nome = elemento.querySelector('p').textContent;
    const preco = elemento.querySelector('h1').textContent;

    // Verifica se o nome já está presente no array
    const nomeIndex = bebida.indexOf(nome);
    if (nomeIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        bebida.splice(nomeIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        bebida = [];
        bebida.push(nome);
    }

    // Verifica se o preco já está presente no array
    const precoIndex = bebida.indexOf(preco);
    if (precoIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        bebida.splice(precoIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        bebida.push(preco);
    }

    console.log('Opções selecionadas:', bebida);
}

//Funcao para sobremesa

let sobremesa = [];

function doce(elemento) {
    const nome = elemento.querySelector('p').textContent;
    const preco = elemento.querySelector('h1').textContent;

    // Verifica se o nome já está presente no array
    const nomeIndex = sobremesa.indexOf(nome);
    if (nomeIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        sobremesa.splice(nomeIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        sobremesa = [];
        sobremesa.push(nome);
    }

    // Verifica se o preco já está presente no array
    const precoIndex = sobremesa.indexOf(preco);
    if (precoIndex !== -1) {
        // Se o nome já estiver presente, remove do array
        sobremesa.splice(precoIndex, 1);
    } else {
        // Se o nome não estiver presente, adiciona ao array
        sobremesa.push(preco);
    }

    console.log('Opções selecionadas:', sobremesa);
}


//Funcao ao apertar o botao FECHAR PEDIDO 
let TOTAL;

//Calcular valor total

function Calcular(){
    // Prato
    const valorprato1 = prato[1].replace('R$', '');
    const valorprato = parseFloat(valorprato1.replace(',', '.'));
    console.log(valorprato);

    //Bebidas
    const valorbebida1 = bebida[1].replace('R$', '');
    const valorbebida = parseFloat(valorbebida1.replace(',', '.'));
    console.log(valorbebida);
     
    //Sobremesa
    const valorsobremesa1 = sobremesa[1].replace('R$', '');
    const valorsobremesa = parseFloat(valorsobremesa1.replace(',', '.'));
    console.log(valorsobremesa);

    //Calculo
    Calculo = valorprato + valorbebida + valorsobremesa;
    const CalculoString = Calculo.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    TOTAL = `R$ ${CalculoString}`;
    Finalizar();
}


function Finalizar() {
    console.log(`Contador é ` + contador);
    if (contador === 3) {
        const closeorder = document.querySelector('.translucent');
        closeorder.style.display = ('flex');
        let conta = document.querySelector(".divscript");
        conta.innerHTML = "";
        conta.innerHTML += `<div class="comida"><p>${prato[0]}</p><a>${prato[1]}</a></div> <div class="comida"><p>${bebida[0]}</p><a>${bebida[1]}</a></div> <div class="comida"><p>${sobremesa[0]}</p><a>${sobremesa[1]}</a></div><div class="TOTAL"><h2>TOTAL</h2><h2>${TOTAL}</h2>`;
    }
}

function Cancel() {
    const closeorder = document.querySelector('.translucent');
    closeorder.style.display = ('none');
}

function End() {
    const closeorder = document.querySelector('.translucent');
    closeorder.style.display = ('none');
    nome = prompt(`Qual seu nome?`);
    console.log(nome);
    Adress = prompt(`Qual o seu endereço?`);
    console.log(Adress);
    enviarMensagemWhatsApp();
}

function enviarMensagemWhatsApp() {
    const mensagem = `
      Olá, gostaria de fazer o pedido:
      - Prato: ${prato[0]}
      - Bebida: ${bebida[0]}
      - Sobremesa: ${sobremesa[0]}
      Total:${TOTAL}
      
      Nome: ${nome}
      Endereço: ${Adress}
    `;
  
    const mensagemCodificada = encodeURIComponent(mensagem);
    const numeroTelefone = '5581994407951';
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${mensagemCodificada}`;
  
    // Redireciona para o link do WhatsApp
    window.location.href = linkWhatsApp;
  }
  

