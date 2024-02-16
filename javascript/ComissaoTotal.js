
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
      var frente_loja = false;
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
              "<input type='number' class='Input' id='InputPorcentagemTeleRenovacao' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o valor da Renovação' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemTeleUpgrade' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o valor do Upgrade' />\n"+
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
              "<input type='number' class='Input' id='InputPorcentagemPAPRenovacao' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor da Renovação' />\n"+
              "</div>\n"+
              "<div class='DivInput'>\n"+
              "<input type='number' class='Input' id='InputPorcentagemPAPUpgrade' pattern='/^-?\d+\.?\d*$/' onKeyPress='if(this.value.length==3) return false;' placeholder='Digite o Valor do Upgrade' />\n"+
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
  var setoresArmazenados = sessionStorage.getItem(1).split('%');
  var cidadesArmazenadas = sessionStorage.getItem(2).split('%');
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
    var InputValorFrenteTV = '';
    var InputValorFrenteTel = '';
    var InputValorFrenteRecorrente = '';
    var InputValorFrentePorcentagem = '';
    var InputValorFrenteRenovacaoTV = '';
    var InputValorFrenteRenovacaoTel = '';
    var InputValorFrenteRenovacaoRecorrente = '';
    var InputPorcentagemFrenteRenovacao = '';
    var InputPorcentagemFrenteUpgrade = '';
    var InputRenovacaoDia01Frente = '';
    var InputRenovacaoDia02Frente = '';
    var InputValorTeleTV = '';
    var InputValorTeleTel = '';
    var InputValorTeleRecorrente = '';
    var InputValorTelePorcentagem = '';
    var InputValorTeleRenovacaoTV = '';
    var InputValorTeleRenovacaoTel = '';
    var InputValorTeleRenovacaoRecorrente = '';
    var InputPorcentagemTeleRenovacao = '';
    var InputPorcentagemTeleUpgrade = '';
    var InputRenovacaoDia01Tele = '';
    var InputRenovacaoDia02Tele = '';
    var InputValorPAPTV = '';
    var InputValorPAPTel = '';
    var InputValorPAPRecorrente = '';
    var InputValorPAPPorcentagem = '';
    var InputValorPAPRenovacaoTV = '';
    var InputValorPAPRenovacaoTel = '';
    var InputValorPAPRenovacaoRecorrente = '';
    var InputPorcentagemPAPRenovacao = '';
    var InputPorcentagemPAPUpgrade = '';
    var InputRenovacaoDia01PAP = '';
    var InputRenovacaoDia02PAP = '';
    var setores = [];
    var cidades = [];
    for(var j=0;j<setoresArmazenados.length;j++){
      setores[j] = setoresArmazenados[j];
    }
    for(var k=0;k<cidadesArmazenadas.length;k++){
      cidades[k] = cidadesArmazenadas[k];
    }
    setores.sort((a, b) => a - b);
    for(var l=0;l<document.querySelectorAll('input[id]').length;l++){
     // console.log(document.querySelectorAll('input[id]')[l].id+'='+document.querySelectorAll('input[id]')[l].value);
     if(document.querySelector("#InputValorFrenteTV") != null){
      InputValorFrenteTV = document.querySelector("#InputValorFrenteTV").value;
      }else{
        InputValorFrenteTV = 0;
      }
      if(document.querySelector("#InputValorFrenteTel") != null){
        InputValorFrenteTel = document.querySelector("#InputValorFrenteTel").value;
      }else{
        InputValorFrenteTel = 0;
      }
      if(document.querySelector("#InputValorFrenteRecorrente") != null){
        InputValorFrenteRecorrente = document.querySelector("#InputValorFrenteRecorrente").value;
      }else{
        InputValorFrenteRecorrente = 0;
      }
      if(document.querySelector("#InputValorFrentePorcentagem") != null){
        InputValorFrentePorcentagem = document.querySelector("#InputValorFrentePorcentagem").value;
      }else{
        InputValorFrentePorcentagem = 0;
      }
      if(document.querySelector("#InputValorFrenteRenovacaoTV") != null){
        InputValorFrenteRenovacaoTV = document.querySelector("#InputValorFrenteRenovacaoTV").value;
      }else{
        InputValorFrenteRenovacaoTV = 0;
      }
      if(document.querySelector("#InputValorFrenteRenovacaoTel") != null){
        InputValorFrenteRenovacaoTel = document.querySelector("#InputValorFrenteRenovacaoTel").value;
      }else{
        InputValorFrenteRenovacaoTel = 0;
      }
      if(document.querySelector("#InputValorFrenteRenovacaoRecorrente") != null){
        InputValorFrenteRenovacaoRecorrente = document.querySelector("#InputValorFrenteRenovacaoRecorrente").value;
      }else{
        InputValorFrenteRenovacaoRecorrente = 0;
      }
      if(document.querySelector("#InputPorcentagemFrenteRenovacao") != null){
        InputPorcentagemFrenteRenovacao = document.querySelector("#InputPorcentagemFrenteRenovacao").value;
      }else{
        InputPorcentagemFrenteRenovacao = 0;
      }
      if(document.querySelector("#InputPorcentagemFrenteUpgrade") != null){
        InputPorcentagemFrenteUpgrade = document.querySelector("#InputPorcentagemFrenteUpgrade").value;
      }else{
        InputPorcentagemFrenteUpgrade = 0;
      }
      if(document.querySelector("#InputRenovacaoDia01Frente") != null){
        InputRenovacaoDia01Frente = document.querySelector("#InputRenovacaoDia01Frente").value;
      }else{
        InputRenovacaoDia01Frente = 0;
      }
      if(document.querySelector("#InputRenovacaoDia02Frente") != null){
        InputRenovacaoDia02Frente = document.querySelector("#InputRenovacaoDia02Frente").value;
      }else{
        InputRenovacaoDia02Frente = 0;
      }
      if(document.querySelector("#InputValorTeleTV") != null){
        InputValorTeleTV = document.querySelector("#InputValorTeleTV").value;
      }else{
        InputValorTeleTV = 0;
      }
      if(document.querySelector("#InputValorTeleTel") != null){
        InputValorTeleTel = document.querySelector("#InputValorTeleTel").value;
      }else{
        InputValorTeleTel = 0;
      }
      if(document.querySelector("#InputValorTeleRecorrente") != null){
        InputValorTeleRecorrente = document.querySelector("#InputValorTeleRecorrente").value;
      }else{
        InputValorTeleRecorrente = 0;
      }
      if(document.querySelector("#InputValorTelePorcentagem") != null){
        InputValorTelePorcentagem = document.querySelector("#InputValorTelePorcentagem").value;
      }else{
        InputValorTelePorcentagem = 0;
      }
      if(document.querySelector("#InputValorTeleRenovacaoTV") != null){
        InputValorTeleRenovacaoTV = document.querySelector("#InputValorTeleRenovacaoTV").value;
      }else{
        InputValorTeleRenovacaoTV = 0;
      }
      if(document.querySelector("#InputValorTeleRenovacaoTel") != null){
        InputValorTeleRenovacaoTel = document.querySelector("#InputValorTeleRenovacaoTel").value;
      }else{
        InputValorTeleRenovacaoTel = 0;
      }
      if(document.querySelector("#InputValorTeleRenovacaoRecorrente") != null){
        InputValorTeleRenovacaoRecorrente = document.querySelector("#InputValorTeleRenovacaoRecorrente").value;
      }else{
        InputValorTeleRenovacaoRecorrente = 0;
      }
      if(document.querySelector("#InputPorcentagemTeleRenovacao") != null){
        InputPorcentagemTeleRenovacao = document.querySelector("#InputPorcentagemTeleRenovacao").value;
      }else{
        InputPorcentagemTeleRenovacao = 0;
      }
      if(document.querySelector("#InputPorcentagemTeleUpgrade") != null){
        InputPorcentagemTeleUpgrade = document.querySelector("#InputPorcentagemTeleUpgrade").value;
      }else{
        InputPorcentagemTeleUpgrade = 0;
      }
      if(document.querySelector("#InputRenovacaoDia01Tele") != null){
        InputRenovacaoDia01Tele = document.querySelector("#InputRenovacaoDia01Tele").value;
      }else{
        InputRenovacaoDia01Tele = 0;
      }
      if(document.querySelector("#InputRenovacaoDia02Tele") != null){
        InputRenovacaoDia02Tele = document.querySelector("#InputRenovacaoDia02Tele").value;
      }else{
        InputRenovacaoDia02Tele = 0;
      }
      if(document.querySelector("#InputValorPAPTV") != null){
        InputValorPAPTV = document.querySelector("#InputValorPAPTV").value;
      }else{
        InputValorPAPTV = 0;
      }
      if(document.querySelector("#InputValorPAPTel") != null){
        InputValorPAPTel = document.querySelector("#InputValorPAPTel").value;
      }else{
        InputValorPAPTel = 0;
      }
      if(document.querySelector("#InputValorPAPRecorrente") != null){
        InputValorPAPRecorrente = document.querySelector("#InputValorPAPRecorrente").value;
      }else{
        InputValorPAPRecorrente = 0;
      }
      if(document.querySelector("#InputValorPAPPorcentagem") != null){
        InputValorPAPPorcentagem = document.querySelector("#InputValorPAPPorcentagem").value;
      }else{
        InputValorPAPPorcentagem = 0;
      }
      if(document.querySelector("#InputValorPAPRenovacaoTV") != null){
        InputValorPAPRenovacaoTV = document.querySelector("#InputValorPAPRenovacaoTV").value;
      }else{
        InputValorPAPRenovacaoTV = 0;
      }
      if(document.querySelector("#InputValorPAPRenovacaoTel") != null){
        InputValorPAPRenovacaoTel = document.querySelector("#InputValorPAPRenovacaoTel").value;
      }else{
        InputValorPAPRenovacaoTel = 0;
      }
      if(document.querySelector("#InputValorPAPRenovacaoRecorrente") != null){
        InputValorPAPRenovacaoRecorrente = document.querySelector("#InputValorPAPRenovacaoRecorrente").value;
      }else{
        InputValorPAPRenovacaoRecorrente = 0;
      }
      if(document.querySelector("#InputPorcentagemPAPRenovacao") != null){
        InputPorcentagemPAPRenovacao = document.querySelector("#InputPorcentagemPAPRenovacao").value;
      }else{
        InputPorcentagemPAPRenovacao = 0;
      }
      if(document.querySelector("#InputPorcentagemPAPUpgrade") != null){
        InputPorcentagemPAPUpgrade = document.querySelector("#InputPorcentagemPAPUpgrade").value;
      }else{
        InputPorcentagemPAPUpgrade = 0;
      }
      if(document.querySelector("#InputRenovacaoDia01PAP") != null){
        InputRenovacaoDia01PAP = document.querySelector("#InputRenovacaoDia01PAP").value;
      }else{
        InputRenovacaoDia01PAP = 0;
      }
      if(document.querySelector("#InputRenovacaoDia02PAP") != null){
        InputRenovacaoDia02PAP = document.querySelector("#InputRenovacaoDia02PAP").value;
      }else{
        InputRenovacaoDia02PAP = 0;
      }
    }
    LoadRelatorio(InputValorFrenteTV, InputValorTeleTV, InputValorPAPTV, InputValorFrenteTel, InputValorTeleTel, InputValorPAPTel, InputValorFrenteRecorrente, InputValorTeleRecorrente, InputValorPAPRecorrente, InputValorFrentePorcentagem/100, InputValorTelePorcentagem, InputValorPAPPorcentagem/100, sessionStorage.getItem(3), sessionStorage.getItem(4), sessionStorage.getItem(5), sessionStorage.getItem(6), sessionStorage.getItem(7), sessionStorage.getItem(8), setores, cidades, InputValorFrenteRenovacaoTV, InputValorTeleRenovacaoTV, InputValorPAPRenovacaoTV, InputValorFrenteRenovacaoTel, InputValorTeleRenovacaoTel, InputValorPAPRenovacaoTel, InputValorFrenteRenovacaoRecorrente, InputValorTeleRenovacaoRecorrente, InputValorPAPRenovacaoRecorrente, InputPorcentagemFrenteRenovacao/100, InputPorcentagemFrenteUpgrade/100, InputPorcentagemTeleRenovacao, InputPorcentagemTeleUpgrade, InputPorcentagemPAPRenovacao, InputPorcentagemPAPUpgrade, InputRenovacaoDia01Frente, InputRenovacaoDia01Tele, InputRenovacaoDia01PAP, InputRenovacaoDia02Frente, InputRenovacaoDia02Tele, InputRenovacaoDia02PAP);
  }
}

function LoadRelatorio(vendaTVFrente, vendaTVTele, vendaTVPAP, vendaTelFrente, vendaTelTele, vendaTelPAP, vendaRecorrenteFrente, vendaRecorrenteTele, vendaRecorrentePAP, vendaPorcentagemFrente, vendaPorcentagemTele, vendaPorcentagemPAP, Dia01, Dia02, vendaDia01, vendaDia02, dataInicio, dataFim, setores, cidadesoperadores, renovacaoTVFrente, renovacaoTVTele, renovacaoTVPAP, renovacaoTelFrente, renovacaoTelTele, renovacaoTelPAP, renovacaoRecorrenteFrente, renovacaoRecorrenteTele, renovacaoRecorrentePAP, renovacaoPorcentagemFrenteRenovacao, renovacaoPorcentagemFrenteUpgrade, renovacaoPorcentagemTeleRenovacao, renovacaoPorcentagemTeleUpgrade, renovacaoPorcentagemPAPRenovacao, renovacaoPorcentagemPAPUpgrade, renovacaoDia01Frente, renovacaoDia01Tele, renovacaoDia01PAP, renovacaoDia02Frente, renovacaoDia02Tele, renovacaoDia02PAP) {
  var cidade = [];
  var setor = [];
  var junta = '';
  var junta2 = '';
  // console.log(vendaTVFrente, vendaTVTele, vendaTVPAP, vendaTelFrente, vendaTelTele, vendaTelPAP, vendaRecorrenteFrente, vendaRecorrenteTele, vendaRecorrentePAP, vendaPorcentagemFrente, vendaPorcentagemTele, vendaPorcentagemPAP, Dia01, Dia02, vendaDia01, vendaDia02, dataInicio, dataFim, setores, cidadesoperadores, renovacaoTVFrente, renovacaoTVTele, renovacaoTVPAP, renovacaoTelFrente, renovacaoTelTele, renovacaoTelPAP, renovacaoRecorrenteFrente, renovacaoRecorrenteTele, renovacaoRecorrentePAP, renovacaoPorcentagemFrenteRenovacao, renovacaoPorcentagemFrenteUpgrade, renovacaoPorcentagemTeleRenovacao, renovacaoPorcentagemTeleUpgrade, renovacaoPorcentagemPAPRenovacao, renovacaoPorcentagemPAPUpgrade, renovacaoDia01Frente, renovacaoDia01Tele, renovacaoDia01PAP, renovacaoDia02Frente, renovacaoDia02Tele, renovacaoDia02PAP);
  for(var i=0;i<setores.length;i++){
    setor[i] = 'setores='+setores[i]+'&';
    junta+=setor[i];
  }
  for(var j=0;j<cidadesoperadores.length;j++){
    cidade[j] = 'cidadesoperadores='+cidadesoperadores[j]+'&';
    junta2+=cidade[j];
  }
  var url = `http://localhost:3000/api/comissaoTotal?vendaTVFrente=`+vendaTVFrente+`&vendaTVTele=`+vendaTVTele+`&vendaTVPAP=`+vendaTVPAP+`&vendaTelFrente=`+vendaTelFrente+`&vendaTelTele=`+vendaTelTele+`&vendaTelPAP=`+vendaTelPAP+`&vendaRecorrenteFrente=`+vendaRecorrenteFrente+`&vendaRecorrenteTele=`+vendaRecorrenteTele+`&vendaRecorrentePAP=`+vendaRecorrentePAP+`&vendaPorcentagemFrente=`+vendaPorcentagemFrente+`&vendaPorcentagemTele=`+vendaPorcentagemTele+`&vendaPorcentagemPAP=`+vendaPorcentagemPAP+`&Dia01=`+Dia01+`&Dia02=`+Dia02+`&vendaDia01=`+vendaDia01+`&vendaDia02=`+vendaDia02+`&dataInicio=`+dataInicio+`&dataFim=`+dataFim+`&`+junta+junta2+`renovacaoTVFrente=`+renovacaoTVFrente+`&renovacaoTVTele=`+renovacaoTVTele+`&renovacaoTVPAP=`+renovacaoTVPAP+`&renovacaoTelFrente=`+renovacaoTelFrente+`&renovacaoTelTele=`+renovacaoTelTele+`&renovacaoTelPAP=`+renovacaoTelPAP+`&renovacaoRecorrenteFrente=`+renovacaoRecorrenteFrente+`&renovacaoRecorrenteTele=`+renovacaoRecorrenteTele+`&renovacaoRecorrentePAP=`+renovacaoRecorrentePAP+`&renovacaoPorcentagemFrenteRenovacao=`+renovacaoPorcentagemFrenteRenovacao+`&renovacaoPorcentagemFrenteUpgrade=`+renovacaoPorcentagemFrenteUpgrade+`&renovacaoPorcentagemTeleRenovacao=`+renovacaoPorcentagemTeleRenovacao+`&renovacaoPorcentagemTeleUpgrade=`+renovacaoPorcentagemTeleUpgrade+`&renovacaoPorcentagemPAPRenovacao=`+renovacaoPorcentagemPAPRenovacao+`&renovacaoPorcentagemPAPUpgrade=`+renovacaoPorcentagemPAPUpgrade+`&renovacaoDia01Frente=`+renovacaoDia01Frente+`&renovacaoDia01Tele=`+renovacaoDia01Tele+`&renovacaoDia01PAP=`+renovacaoDia01PAP+`&renovacaoDia02Frente=`+renovacaoDia02Frente+`&renovacaoDia02Tele=`+renovacaoDia02Tele+`&renovacaoDia02PAP=`+renovacaoDia02PAP;
  // Construa a URL com os parâmetros
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
          var headers = {
            codigo: 'Codigo'.replace(/,/g, ''), // remove commas to avoid errors
            cliente: "Cliente".replace(/,/g, ''),
            cidade: "Cidade".replace(/,/g, ''),
            contrato: "Contrato".replace(/,/g, ''),
            data: "Data".replace(/,/g, ''),
            operacao: "Operacao".replace(/,/g, ''),
            codoperador: "Codigo do Operador".replace(/,/g, ''),
            operador: "Operador".replace(/,/g, ''),
            cidadeope: "Cidade do Operador".replace(/,/g, ''),
            setor: "Setor".replace(/,/g, ''),
            fatura: "Fatura".replace(/,/g, ''),
            dt_liquidacao: "Data de Liquidacao".replace(/,/g, ''),
            pago: "Pago?".replace(/,/g, ''),
            valor_plano: "Valor do Plano".replace(/,/g, ''),
            valor_tv: "Valor da TV".replace(/,/g, ''),
            valor_telefonia: "Valor da Telefonia".replace(/,/g, ''),
            valor_recorrente: "Valor Recorrente".replace(/,/g, ''),
            comissao_venda: "Comissao da Venda".replace(/,/g, ''),
            dia_02_04: "Dia 02 ou 04?".replace(/,/g, ''),
            valor_total: "Valor Total".replace(/,/g, '')
        };
        
        itemsNotFormatted = responseJSON;
        
        var itemsFormatted = [];
        
        // format the data
        itemsNotFormatted.forEach((item) => {
          item.forEach((linha) => {
            linha.forEach((dado) => {
              itemsFormatted.push({
                codigo: dado.codigo, // remove commas to avoid errors,
                cliente: dado.cliente,
                cidade: dado.cidade,
                contrato: dado.contrato,
                data: dado.data,
                operacao: dado.operacao,
                codoperador: dado.codoperador,
                operador: dado.operador,
                cidadeope: dado.cidadeope,
                setor: dado.setor,
                fatura: dado.fatura,
                dt_liquidacao: dado.dt_liquidacao,
                pago: dado.pago,
                valor_plano: dado.valor_plano,
                valor_tv: dado.valor_tv,
                valor_telefonia: dado.valor_telefonia,
                valor_recorrente: dado.valor_recorrente,
                comissao_venda: dado.comissao_venda,
                dia_02_04: dado.dia_02_04,
                valor_total: dado.valor_total
              });
            });
          });
        });
        var fileTitle = 'Relatório-de-Comissões'; // or 'my-unique-title'
        
        exportCSVFile(headers, itemsFormatted, fileTitle);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
// -------------------------------- Código para Download CSV --------------------------------

function convertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ','

          line += array[i][index];
      }

      str += line + '\r\n';
  }

  return str;
}

function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
      items.unshift(headers);
  }

  // Convert Object to JSON
  var jsonObject = JSON.stringify(items);

  var csv = this.convertToCSV(jsonObject);

  var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
      var link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }
  }
}
