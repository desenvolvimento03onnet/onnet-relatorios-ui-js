document.addEventListener('DOMContentLoaded', function(){
    animacaoOlhos();
});
document.addEventListener('keyup', function(event) {
  if (event.keyCode == 13) {
    pesquisar();
  }
});
function abrir(){
  document.getElementById("Fundo").style.transition = '1.2s';
  document.getElementById("Fundo").style.left = '52.8%';
  document.getElementById("Container").style.transition = '1.2s';
  document.getElementById("Container").style.transformStyle = 'transform-style: preserve-3d';
  document.getElementById("Container").style.transform = 'rotateY(-160deg)';
  document.getElementById("Container").style.transformOrigin = 'left center';
  document.getElementById("Container").style.left = '25.3%';
  document.getElementById("BaseCaixa").style.transition = '1.2s';
  document.getElementById("BaseCaixa").style.left = '32%';
}
function fechar(){
  document.getElementById("Fundo").style.transition = '1.2s';
  document.getElementById("Fundo").style.left = '21.3%';
  document.getElementById("BaseCaixa").style.transition = '1.2s';
  document.getElementById("BaseCaixa").style.left = '0%';
  document.getElementById("Container").style.transition = '1.2s'
  document.getElementById("Container").style.transformStyle = 'transform-style: preserve-3d';
  document.getElementById("Container").style.transform = 'rotateY(0deg)';
  document.getElementById("Container").style.left = '0%';
}
function limpar(){
    document.getElementById("InputCaixa").value = '';
    document.getElementById("Tbody").innerHTML = '';
    document.getElementsByClassName("splitter")[0].style.width = '40%';
    document.getElementsByClassName("splitter")[1].style.width = '40%';
    document.getElementsByClassName("splitter")[2].style.width = '40%';
    document.getElementsByClassName("spl1pt1")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt1")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt2")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt2")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt3")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt3")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt4")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt4")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt5")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt5")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt6")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt6")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt7")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt7")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt8")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt8")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt9")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt9")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt9")[0].style.display = "none";
    document.getElementsByClassName("spl1pt9")[1].style.display = "none";
    document.getElementsByClassName("spl1pt10")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt10")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt10")[0].style.display = "none";
    document.getElementsByClassName("spl1pt10")[1].style.display = "none";
    document.getElementsByClassName("spl1pt11")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt11")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt11")[0].style.display = "none";
    document.getElementsByClassName("spl1pt11")[1].style.display = "none";
    document.getElementsByClassName("spl1pt12")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt12")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt12")[0].style.display = "none";
    document.getElementsByClassName("spl1pt12")[1].style.display = "none";
    document.getElementsByClassName("spl1pt13")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt13")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt13")[0].style.display = "none";
    document.getElementsByClassName("spl1pt13")[1].style.display = "none";
    document.getElementsByClassName("spl1pt14")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt14")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt14")[0].style.display = "none";
    document.getElementsByClassName("spl1pt14")[1].style.display = "none";
    document.getElementsByClassName("spl1pt15")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt15")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt15")[0].style.display = "none";
    document.getElementsByClassName("spl1pt15")[1].style.display = "none";
    document.getElementsByClassName("spl1pt16")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl1pt16")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl1pt16")[0].style.display = "none";
    document.getElementsByClassName("spl1pt16")[1].style.display = "none";
    document.getElementsByClassName("spl2pt1")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt1")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt2")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt2")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt3")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt3")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt4")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt4")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt5")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt5")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt6")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt6")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt7")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt7")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt8")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt8")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt9")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt9")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt9")[0].style.display = "none";
    document.getElementsByClassName("spl2pt9")[1].style.display = "none";
    document.getElementsByClassName("spl2pt10")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt10")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt10")[0].style.display = "none";
    document.getElementsByClassName("spl2pt10")[1].style.display = "none";
    document.getElementsByClassName("spl2pt11")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt11")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt11")[0].style.display = "none";
    document.getElementsByClassName("spl2pt11")[1].style.display = "none";
    document.getElementsByClassName("spl2pt12")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt12")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt12")[0].style.display = "none";
    document.getElementsByClassName("spl2pt12")[1].style.display = "none";
    document.getElementsByClassName("spl2pt13")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt13")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt13")[0].style.display = "none";
    document.getElementsByClassName("spl2pt13")[1].style.display = "none";
    document.getElementsByClassName("spl2pt14")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt14")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt14")[0].style.display = "none";
    document.getElementsByClassName("spl2pt14")[1].style.display = "none";
    document.getElementsByClassName("spl2pt15")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt15")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt15")[0].style.display = "none";
    document.getElementsByClassName("spl2pt15")[1].style.display = "none";
    document.getElementsByClassName("spl2pt16")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl2pt16")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl2pt16")[0].style.display = "none";
    document.getElementsByClassName("spl2pt16")[1].style.display = "none";
    document.getElementsByClassName("spl3pt1")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt1")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt2")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt2")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt3")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt3")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt4")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt4")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt5")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt5")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt6")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt6")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt7")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt7")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt8")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt8")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt9")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt9")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt9")[0].style.display = "none";
    document.getElementsByClassName("spl3pt9")[1].style.display = "none";
    document.getElementsByClassName("spl3pt10")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt10")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt10")[0].style.display = "none";
    document.getElementsByClassName("spl3pt10")[1].style.display = "none";
    document.getElementsByClassName("spl3pt11")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt11")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt11")[0].style.display = "none";
    document.getElementsByClassName("spl3pt11")[1].style.display = "none";
    document.getElementsByClassName("spl3pt12")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt12")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt12")[0].style.display = "none";
    document.getElementsByClassName("spl3pt12")[1].style.display = "none";
    document.getElementsByClassName("spl3pt13")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt13")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt13")[0].style.display = "none";
    document.getElementsByClassName("spl3pt13")[1].style.display = "none";
    document.getElementsByClassName("spl3pt14")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt14")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt14")[0].style.display = "none";
    document.getElementsByClassName("spl3pt14")[1].style.display = "none";
    document.getElementsByClassName("spl3pt15")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt15")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt15")[0].style.display = "none";
    document.getElementsByClassName("spl3pt15")[1].style.display = "none";
    document.getElementsByClassName("spl3pt16")[0].style.backgroundColor = "green";
    document.getElementsByClassName("spl3pt16")[1].style.backgroundColor = "#50C878";
    document.getElementsByClassName("spl3pt16")[0].style.display = "none";
    document.getElementsByClassName("spl3pt16")[1].style.display = "none";
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
    if(document.getElementById("InputCaixa").value == ''){
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
    var caixa = document.getElementById("InputCaixa").value;
    if(caixa == ''){
      alert("Insira a Caixa para realizar a Pesquisa!");
    }else{
      LoadCaixa('%25'+caixa.toUpperCase()+"%25");
      document.getElementById("Tbody").innerHTML = '<tr><td colspan="5"><div class="DivCarregar"><div class="Carregar"></div></div></td></tr>'
    }
}
function LoadCaixa(caixa) {
    var recebe = caixa.replaceAll(' ','%20');
    // Construa a URL com os parâmetros
    const url = `http://localhost:3000/api/ClientesPorCaixa?caixa=${recebe}`;
    
    fetch(url).then((response) => response.json())
    .then((responseJSON) => {
        tabelaCaixa(responseJSON);
        PreencheCaixa(responseJSON);
     }).catch((error) => {
        console.error('Erro na solicitação GET: ', error);
        throw error; // Você pode escolher como lidar com erros aqui
    });
  }
  function tabelaCaixa(data) {
    if(data.length == 0){
      document.getElementById("Tbody").innerHTML = '<tr><td colspan="5">Caixa Não Encontrada</td></tr>'
    } else {
      var resultado = [];
      for(var i=0;i<data.length;i++){
        resultado[i] = "<tr key={Tr"+[i]+"} style=\"height: 10vh; border: 1px black solid; justify-content: space-around;\"><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].codigo+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;overflow-wrap: break-word;\">"+data[i].cliente+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].conexao+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].caixa+"</td><td style=\"justify-content: center; align-items: center; text-align: center; height: 20%; border: 1px black solid;\">"+data[i].porta+"</td></tr>";
      }
      document.getElementById("Tbody").innerHTML = resultado.toString().replaceAll(",", "");
    }
  }
function PreencheCaixa(data){
  document.getElementsByClassName("spl1pt1")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt1")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt2")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt2")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt3")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt3")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt4")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt4")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt5")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt5")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt6")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt6")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt7")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt7")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt8")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt8")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt9")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt9")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt10")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt10")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt11")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt11")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt12")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt12")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt13")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt13")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt14")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt14")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt15")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt15")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt16")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt16")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt1")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt1")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt2")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt2")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt3")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt3")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt4")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt4")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt5")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt5")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt6")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt6")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt7")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt7")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl2pt8")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl2pt8")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt9")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt9")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt10")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt10")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt11")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt11")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt12")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt12")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt13")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt13")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt14")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt14")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt15")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt15")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt16")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt16")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt1")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt1")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt2")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt2")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt3")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt3")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt4")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt4")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt5")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt5")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt6")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt6")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt7")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt7")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl3pt8")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl3pt8")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt9")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt9")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt10")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt10")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt11")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt11")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt12")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt12")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt13")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt13")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt14")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt14")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt15")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt15")[1].style.backgroundColor = "#50C878";
  document.getElementsByClassName("spl1pt16")[0].style.backgroundColor = "green";
  document.getElementsByClassName("spl1pt16")[1].style.backgroundColor = "#50C878";
  for(var i = 0;i<data.length;i++){
    //console.log('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta);
    if(data[i].porta >= 9){
      document.getElementsByClassName("splitter")[0].style.width = '95%';
      document.getElementsByClassName("splitter")[1].style.width = '95%';
      document.getElementsByClassName("splitter")[2].style.width = '95%';
      document.getElementsByClassName("spl1pt9")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt9")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt10")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt10")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt11")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt11")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt12")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt12")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt13")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt13")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt14")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt14")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt15")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt15")[1].style.display = 'flex';
      document.getElementsByClassName("spl1pt16")[0].style.display = 'flex';
      document.getElementsByClassName("spl1pt16")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt9")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt9")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt10")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt10")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt11")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt11")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt12")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt12")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt13")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt13")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt14")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt14")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt15")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt15")[1].style.display = 'flex';
      document.getElementsByClassName("spl2pt16")[0].style.display = 'flex';
      document.getElementsByClassName("spl2pt16")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt9")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt9")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt10")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt10")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt11")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt11")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt12")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt12")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt13")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt13")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt14")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt14")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt15")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt15")[1].style.display = 'flex';
      document.getElementsByClassName("spl3pt16")[0].style.display = 'flex';
      document.getElementsByClassName("spl3pt16")[1].style.display = 'flex';
      if(document.querySelector(".spl1pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt8")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt9").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt9")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt9")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt10").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt10")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt10")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt11").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt11")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt11")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt12").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt12")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt12")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt13").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt13")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt13")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt14").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt14")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt14")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt15").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt15")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt15")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt16").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt16")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt16")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        console.log("erro");
        document.getElementsByClassName("spl2pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt8")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt9").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt9")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt9")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt10").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt10")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt10")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt11").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt11")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt11")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt12").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt12")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt12")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt13").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt13")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt13")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt14").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt14")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt14")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt15").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt15")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt15")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt16").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt16")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt16")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt8")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt9").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt9")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt9")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt10").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt10")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt10")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt11").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt11")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt11")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt12").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt12")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt12")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt13").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt13")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt13")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt14").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt14")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt14")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt15").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt15")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt15")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt16").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt16")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt16")[1].style.backgroundColor = "red";
      }
    }else{
      document.getElementsByClassName("splitter")[0].style.width = '40%';
      document.getElementsByClassName("splitter")[1].style.width = '40%';
      document.getElementsByClassName("splitter")[2].style.width = '40%';
      document.getElementsByClassName("spl1pt9")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt9")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt10")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt10")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt11")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt11")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt12")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt12")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt13")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt13")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt14")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt14")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt15")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt15")[1].style.display = 'none';
      document.getElementsByClassName("spl1pt16")[0].style.display = 'none';
      document.getElementsByClassName("spl1pt16")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt9")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt9")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt10")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt10")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt11")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt11")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt12")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt12")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt13")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt13")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt14")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt14")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt15")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt15")[1].style.display = 'none';
      document.getElementsByClassName("spl2pt16")[0].style.display = 'none';
      document.getElementsByClassName("spl2pt16")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt9")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt9")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt10")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt10")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt11")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt11")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt12")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt12")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt13")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt13")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt14")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt14")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt15")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt15")[1].style.display = 'none';
      document.getElementsByClassName("spl3pt16")[0].style.display = 'none';
      document.getElementsByClassName("spl3pt16")[1].style.display = 'none';
      if(document.querySelector(".spl1pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl1pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl1pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl1pt8")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl2pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl2pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl2pt8")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt1").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt1")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt1")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt2").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt2")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt2")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt3").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt3")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt3")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt4").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt4")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt4")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt5").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt5")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt5")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt6").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt6")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt6")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt7").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt7")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt7")[1].style.backgroundColor = "red";
      }
      if(document.querySelector(".spl3pt8").classList.toString().includes('spl'+data[i].caixa.substring(data[i].caixa.indexOf('/')+1,data[i].caixa.length)+'pt'+data[i].porta)){
        document.getElementsByClassName("spl3pt8")[0].style.backgroundColor = "red";
        document.getElementsByClassName("spl3pt8")[1].style.backgroundColor = "red";
      }
    }
  }
}