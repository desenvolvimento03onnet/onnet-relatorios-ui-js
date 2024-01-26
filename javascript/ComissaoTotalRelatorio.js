import { valores } from './ComissaoTotal.js';
console.log(valores);
document.addEventListener('DOMContentLoaded', function(){
  LoadSetores();
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    pesquisar();
  }
});
function voltar(){
    if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
        window.location.href = "PageComissaoTotalDatas.html";
      }
      if(sessionStorage.getItem(0).includes('@gmail.com')){
        window.location.href = "PageComissaoTotalDatas.html";
      }
}
function inicio(){
  if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
      window.location.href = "NavBar.html";
    }
    if(sessionStorage.getItem(0).includes('@gmail.com')){
      window.location.href = "NavBarResumido.html";
    }
}
function LoadSetores() {
  var url = `http://localhost:3000/api/Setores/`;
  // Construa a URL com os parâmetros
  
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
      var setores = sessionStorage.getItem(1).split('%');
      var vendas = [];
      var renovacoes = [];
      var linhaVendas = document.getElementById("linhaVendas");
      var linhaRenovacoes = document.getElementById("linhaRenovacoes");
        for(var i=0;i<responseJSON.length;i++){
          for(var j=0;j<setores.length;j++){
            if(responseJSON[i].codsetor == setores[j] && (setores[j].includes('11') || setores[j].includes('13') || setores[j].includes('14'))){
              vendas[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>Frente-Loja</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrentePorcentagem' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Venda' />\n"+
              "</div>\n"+
              "</div>";

              renovacoes[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>Frente-Loja</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteRenovacaoTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteRenovacaoTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorFrenteRenovacaoRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemFrenteRenovacao' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Renovação' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemFrenteUpgrade' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem do Upgrade' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia01Frente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 01' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia02Frente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 02' />\n"+
              "</div>\n"+
              "</div>";
            }

            if(responseJSON[i].codsetor == setores[j] && setores[j].includes('15')){
              vendas[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>Telemarketing</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTelePorcentagem' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Venda' />\n"+
              "</div>\n"+
              "</div>";

              renovacoes[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>Telemarketing</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleRenovacaoTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleRenovacaoTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorTeleRenovacaoRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemTeleRenovacao' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Renovação' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemTeleUpgrade' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem do Upgrade' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia01Tele' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 01' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia02Tele' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 02' />\n"+
              "</div>\n"+
              "</div>";
            }

            if(responseJSON[i].codsetor == setores[j] && setores[j].includes('32')){
              vendas[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>PAP</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPPorcentagem' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Venda' />\n"+
              "</div>\n"+
              "</div>";

              renovacoes[j] =
              "<div class='Card'>\n"+
              "<div class='titulo'>\n"+
              "<span>SAC</span>\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPRenovacaoTV' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da TV' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPRenovacaoTel' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor da Telefonia' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputValorPAPRenovacaoRecorrente' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==4) return false;' placeholder='Digite o Valor Recorrente' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemPAPRenovacao' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem da Renovação' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemPAPUpgrade' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite a Porcentagem do Upgrade' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia01PAP' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 01' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputRenovacaoDia02PAP' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Dia 02' />\n"+
              "</div>\n"+
              "</div>";
            }
          }
        }
        linhaVendas.innerHTML += vendas;
        linhaRenovacoes.innerHTML += renovacoes;
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}

function pesquisar(){
  var setores = sessionStorage.getItem(1).split('%');
  var armazena = 0;
  var tamanho = document.querySelectorAll('input[id]').length;
  for(var i=0;i<document.querySelectorAll('input[id]').length;i++){
    if(document.querySelectorAll('input[id]')[i].value == ''){
      armazena += 1;
    }
  }
  if(tamanho >= armazena && armazena != 0){
    alert("Preencha todos os Campos para Gerar o Relatório!");
  }else{
    
  }
}