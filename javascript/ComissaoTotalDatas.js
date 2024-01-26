function voltar(){
    if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
        window.location.href = "PageComissaoTotalSetores.html";
      }
      if(sessionStorage.getItem(0).includes('@gmail.com')){
        window.location.href = "PageComissaoTotalSetores.html";
      }
}
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    validarCampos();
  }
});
function validarCampos(){
  var data01 = document.getElementById("data01");
  var data02 = document.getElementById("data02");
  var valorData01 = document.getElementById("InputValorData01");
  var valorData02 = document.getElementById("InputValorData02");
  var dataInicio = document.getElementById("InputDataInicio");
  var dataFim = document.getElementById("InputDataFim");
  if(data01.value == 0 || data02.value == 0 || valorData01.value == 0 || valorData02.value == 0 || dataInicio.value == 0 || dataFim.value == 0){
    alert("Insira o valor em Todos os Campos");
  }else{
     sessionStorage.setItem(3, data01.value);
     sessionStorage.setItem(4, data02.value);
     sessionStorage.setItem(5, valorData01.value);
     sessionStorage.setItem(6, valorData02.value);
     sessionStorage.setItem(7, dataInicio.value);
     sessionStorage.setItem(8, dataFim.value);
     window.location.href = "PageComissaoTotal.html";
  }
}