document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
function limpar(){
    document.getElementById("TxtNomes").value = '';
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
    if(document.getElementById("TxtNomes").value == ''){
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
  var linhas = document.querySelector("#TxtNomes").value.split('\n');
  if(document.querySelector("#TxtNomes").value == ''){
    alert("Insira o nome dos clientes para realizar a consulta!");
  }else{
     LoadVencimento(linhas);
     document.getElementById("Tbody").innerHTML = '<tr><td colspan="5"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>';
  }
}
function LoadVencimento(linhas) {
  var linha = [];
  var junta = '';
  console.log(linhas.length);
  for(var i=0;i<linhas.length;i++){
    linha[i] = 'listaClientes='+linhas[i]+'&';
    junta+=linha[i];
  }
  var url = `http://localhost:3000/api/ClientesProfile?`+junta;
  // Construa a URL com os parâmetros
  
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaProfiles(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
function tabelaProfiles(data) {
  var valida = true;
  for(var z=0;z<data.length;z++){
    if(data[z].length == 0){
      valida = false;
    }
  }
  console.log(valida);
  if(valida == false){
    document.getElementById("Tbody").innerHTML = '<tr><td colspan="5">Nenhum Cliente Encontrado</td></tr>'
  } else {
    var resultado = [];
    for(var i=0;i<data.length;i++){
      for(var j=0;j<data[i].length;j++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i][j].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].cidade+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].data+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i][j].profile+"</td></tr>";
      }
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } 
}