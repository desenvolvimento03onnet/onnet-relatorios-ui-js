sessionStorage.removeItem(1);
sessionStorage.removeItem(2);
document.addEventListener('DOMContentLoaded', function(){
  LoadSetores();
  LoadCidades();
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    validarCombos();
  }
});
function voltar(){
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
      var card = [];
      var setores = document.getElementById("setores");
        for(var i=0;i<responseJSON.length;i++){
          card[i] = "<option value='"+responseJSON[i].codsetor+"'>"+responseJSON[i].setor+"</option>";
        }
        setores.innerHTML = card.toString().replaceAll(',','');
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
function LoadCidades() {
  var url = `http://localhost:3000/api/Cidades/`;
  // Construa a URL com os parâmetros
  
  fetch(url).then((response) => response.json())
    .then((responseJSON) => {
      var card = [];
      var cidades = document.getElementById("cidades");
        for(var i=0;i<responseJSON.length;i++){
          card[i] = "<option value='"+responseJSON[i].codcidade+"'>"+responseJSON[i].cidade+"</option>";
        }
        cidades.innerHTML = card.toString().replaceAll(',','');
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
}
function validarCombos(){
  var setores = [];
  var cidades = [];
  for(var i=0;i<document.querySelectorAll("#setores option:checked").length;i++){
    setores[i] = document.querySelectorAll("#setores option:checked")[i].value;
  }
  for(var j=0;j<document.querySelectorAll("#cidades option:checked").length;j++){
    cidades[j] = document.querySelectorAll("#cidades option:checked")[j].value;
  }
  setores.sort((a, b) => a - b);
  cidades.sort((a, b) => a - b);
  if(setores.length == 0 || cidades.length == 0){
    alert("Insira o valor em Todos os Campos");
  }else{
     sessionStorage.setItem(1, setores.toString().replaceAll(",","%"));
     sessionStorage.setItem(2, cidades.toString().replaceAll(",","%"));
     window.location.href = "PageComissaoTotalDatas.html";
  }
}