document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    pesquisar();
  }
});
function limpar(){
    document.getElementById("InputDataInicio").value = '';
    document.getElementById("InputDataFim").value = '';
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
            let x = e.clientX * 60 / window.innerWidth - 50;
            let y = e.clientY * 60 / window.innerHeight - 50;
            
            pupila.style.left = x + "%";
            pupila.style.top = y + "%";
    
            pupila2.style.left = x + "%";
            pupila2.style.top = y + "%";
        });
  }
  function mouseOver(){
    if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.querySelectorAll("#ComboBoxDatasVencimento option:checked").length == 0){
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
  var datasVencimento = [];
  for(var i=0;i<document.querySelectorAll("#ComboBoxDatasVencimento option:checked").length;i++){
    datasVencimento[i] = document.querySelectorAll("#ComboBoxDatasVencimento option:checked")[i].value;
  }
  datasVencimento.sort((a, b) => a - b);
  var dataInicio = document.getElementById("InputDataInicio").value;
  var dataFim = document.getElementById("InputDataFim").value;
  if(datasVencimento.length == 0 || dataInicio == '' || dataFim == ''){
    alert("Insira o valor em Todos os Campos");
  }else{
     LoadVencimento(datasVencimento, dataInicio, dataFim);
     document.getElementById("Tbody").innerHTML = '<tr><td colspan="2"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>';
  }
}
function LoadVencimento(diasVencimento, dtInicio, dtFim) {
  var datas = [];
  var junta = '';
  for(var i=0;i<diasVencimento.length;i++){
    datas[i] = 'diasVencimento='+diasVencimento[i]+'&';
    junta+=datas[i];
  }
  var url = `http://localhost:3000/api/QntContratos?`+junta+`dataInicio=`+dtInicio+`&dataFim=`+dtFim;
  // Construa a URL com os parâmetros
  
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaVencimento(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
function tabelaVencimento(data) {
  if(data.length == 0){
    document.getElementById("Tbody").innerHTML = '<tr><td colspan="2">Nenhum Contrato Encontrado</td></tr>'
  } else {
    var resultado = [];
    for(var i=0;i<data.length;i++){
      for(var j=0;j<data[i].length;j++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i][j].vencimento+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].qnt+"</td></tr>";
      }
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } 
}