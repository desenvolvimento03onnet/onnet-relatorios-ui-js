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
function preenche(botao){
  var fixo = document.getElementById("InputFixo");
  if(fixo.value.length == 8){
    alert("Total Atingido, Confira se o número foi digitado corretamente");
  }else{
    fixo.value += botao;
  }
  
}
function pesquisar(){
  var fixo = document.getElementById("InputFixo").value;
  if(fixo == ''){
    alert("Insira o valor em Todos os Campos");
  }else{
     LoadFixo(fixo);
     document.getElementById("Tbody").innerHTML = '<tr><td colspan="7"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>';
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
    document.getElementById("Tbody").innerHTML = '<tr><td colspan="7">Nenhum Contrato Encontrado</td></tr>'
  } else {
    var resultado = [];
    for(var i=0;i<data.length;i++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid; word-break: break-all;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].cidade+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].contrato+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].cancelado+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].data+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid; word-break: break-all;\">"+data[i].numero+"</td></tr>";
    }
    document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
  } 
}