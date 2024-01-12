document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
function limpar(){
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
    if(document.getElementById("InputDataFim").value == ''){
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
  var dataFim = document.getElementById("InputDataFim").value;
  if(dataFim == ''){
    alert("Insira a data-fim para realizar a consulta!");
  }else{
    LoadAtivos(dataFim);
     document.getElementById("Tbody").innerHTML = '<tr><td colspan="4"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>';
  }
}
function LoadAtivos(dtFim) {
  
    // Construa a URL com os parâmetros
    const url = `http://localhost:3000/api/QntContratosAtivos?dataFim=${dtFim}`;
    
    fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaAtivos(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
  }
  function tabelaAtivos(data) {
    if(data.length == 0){
      document.getElementById("Tbody").innerHTML = '<tr><td colspan="4">Nenhum Contrato Encontrado</td></tr>'
    } else {
      var resultado = [];
      for(var i=0;i<data.length;i++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].endereco+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].criados+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].cancelados+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].ativos+"</td></tr>";
      }
      document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
    }
  }