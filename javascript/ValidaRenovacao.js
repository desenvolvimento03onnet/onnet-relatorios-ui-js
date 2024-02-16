document.addEventListener('DOMContentLoaded', function(){
  animacaoOlhos();
});
document.addEventListener('keyup', function(event) {
if (event.keyCode == 13) {
  pesquisar();
}
});
function limpar(){
  document.getElementById("InputInfo").value = '';
  document.getElementById("Tbody").innerHTML = '';
}
function voltar(){
  if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
      window.location.href = "NavBar.html";
    }
    if(sessionStorage.getItem(0).includes('@gmail.com')){
      window.location.href = "NavBarResumido.html";
    }
}
function animacaoOlhos(){
  const pupila = document.querySelector("#olho1");
  const pupila2 = document.querySelector("#olho2");
  
      document.addEventListener("mousemove", (e) => {
          let x = e.clientX * 70 / window.innerWidth - 50;
          let y = e.clientY * 70 / window.innerHeight - 50;
          
          pupila.style.left = x + "%";
          pupila.style.top = y + "%";
  
          pupila2.style.left = x + "%";
          pupila2.style.top = y + "%";
      });
}
function mouseOver(){
  if(document.getElementById("InputInfo").value == ''){
    document.getElementById("labios").style.height = "50%";
    document.getElementById("labios").style.transition = "0.2s";
    document.getElementById("labios").style.borderRadius = "100% 100% 0 0";
  }else{
    document.getElementById("labios").style.height = "50%";
    document.getElementById("labios").style.transition = "0.2s";
    document.getElementById("labios").style.borderRadius = "0 0 100% 100%";
  }
}
function mouseOut(){
  document.getElementById("labios").style.height = "0%";
}
function pesquisar(){
  var info = document.getElementById("InputInfo").value;
  if(info == ''){
    alert("Insira o valor em Todos os Campos");
  }else{
    LoadSMS('%25'+info.replaceAll(" ","+")+'%25');
    document.getElementById("Tbody").innerHTML = '<tr><td colspan="1"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>'
  }
}
function LoadSMS(info) {
  const url = `http://localhost:3000/api/RenovacaoPossivel?info=${info}`;
  console.log(url);
  fetch(url).then((response) => response.json())
  .then((responseJSON) => {
    console.log(responseJSON);
      tabelaInfo(responseJSON);
   }).catch((error) => {
      console.error('Erro na solicitação GET: ', error);
      throw error; // Você pode escolher como lidar com erros aqui
  });
}
function tabelaInfo(data) {
  if(data.length == 0){
    var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="1">Nenhum Contrato ou Cliente Encontrado com a Informação Fornecida</td></tr>'
    return resultado;
  } else {
    var resultado = [];
    for(var i=0;i<data.length;i++){
      if(data[i].validacao.includes("ERRO")){
        resultado[i] = "<tr style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; font-size: 150%; text-align: center; height: 80%; border: 1px black solid; color: red;\">"+data[i].validacao+"</td></tr>";
      }else{
        resultado[i] = "<tr style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; font-size: 150%; text-align: center; height: 80%; border: 1px black solid; color: #F1C40F;\">"+data[i].validacao+"</td></tr>";
      }
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } 
}