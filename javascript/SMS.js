document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
function limpar(){
    document.getElementById("InputNro").value = '';
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
    if(document.getElementById("InputDataInicio").value == '' || document.getElementById("InputDataFim").value == '' || document.getElementById("InputNro").value == ''){
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
    var nro = document.getElementById("InputNro").value;
    var dataInicio = document.getElementById("InputDataInicio").value;
    var dataFim = document.getElementById("InputDataFim").value;
    if(nro == '' || dataInicio == '' || dataFim == ''){
      alert("Insira o valor em Todos os Campos");
    }else{
      LoadSMS('%'+nro, dataInicio, dataFim);
      document.getElementById("Tbody").innerHTML = '<tr><td colspan="4"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>'
    }
}
function LoadSMS(nro, dtInicio, dtFim) {
    const url = `http://localhost:3000/api/SMSNumero?numeroCel=${nro}&dataInicio=${dtInicio}&dataFim=${dtFim}`;
    fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaSMS(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
  }
  function tabelaSMS(data) {
    if(data.length == 0){
      var resultado = document.getElementById("Tbody").innerHTML = '<tr><td colspan="4">Nro Não Encontrado</td></tr>'
      return resultado;
    } else {
      var resultado = [];
      for(var i=0;i<data.length;i++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].nome+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+data[i].nro+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 10%; border: 1px black solid;\">"+"Data: "+data[i].data.toString().substring(8,10)+"/"+data[i].data.toString().substring(5,7)+"/"+data[i].data.toString().substring(0,4)+"\nHorário: "+data[i].data.toString().substring(11,13)+":"+data[i].data.toString().substring(14,16)+":"+data[i].data.toString().substring(17,19)+"</td><td style=\"display: flex; height: 10vh; overflow-y: scroll; border: 1px black solid;\">"+data[i].msg+"</td></tr>";
      }
      document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
    } 
  }