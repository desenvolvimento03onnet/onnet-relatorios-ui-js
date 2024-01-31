document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    pesquisar();
  }
});
function limpar(){
    document.getElementById("InputFixo").value = '';
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
    if(document.getElementById("InputFixo").value == ''){
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
  var fixo = document.getElementById("InputFixo").value;
  if(fixo == ''){
    alert("Insira o valor em Todos os Campos");
  }else{
     LoadFixo(fixo);
     document.getElementById("Tbody").innerHTML = '<tr><td colspan="6"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>';
  }
}
function LoadFixo(fixo) {
  var url = `http://localhost:3000/api/ContratoNumero?fixo=`+"%25"+fixo;
  // Construa a URL com os parâmetros
  
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaFixo(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
function tabelaFixo(data) {
  if(data.length == 0){
    document.getElementById("Tbody").innerHTML = '<tr><td colspan="6">Nenhum Contrato Encontrado</td></tr>'
  } else {
    var resultado = [];
    for(var i=0;i<data.length;i++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].contrato+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].cancelado+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].data+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].numero+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } 
}