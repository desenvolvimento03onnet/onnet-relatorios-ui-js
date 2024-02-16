document.addEventListener('DOMContentLoaded', function(){
    ValidaVazio();
});
function mouseOver(){
    document.getElementById("labios").style.height = "50%";
    document.getElementById("labios").style.transition = "0.2s";
}
function mouseOut(){
    document.getElementById("labios").style.height = "0%";
}
function animacaoOlhos(){
    const pupila = document.querySelector("#olho1");
    const pupila2 = document.querySelector("#olho2");
    
        document.addEventListener("mousemove", (e) => {
            let x = e.clientX * 50 / window.innerWidth - 50;
            let y = e.clientY * 50 / window.innerHeight - 50;
            
            pupila.style.left = x + "%";
            pupila.style.top = y + "%";
    
            pupila2.style.left = x + "%";
            pupila2.style.top = y + "%";
        });
  }
  function ValidaVazio(){
    animacaoOlhos();
    if(sessionStorage.getItem(0) == null){
        for(var i=0; i<document.querySelectorAll('.Card').length; i++){
            document.querySelectorAll('.Card')[i].style.display = 'none';
        }
        document.getElementsByTagName("body")[0].style.background = 'red no-repeat';
        document.getElementById("Fala").textContent = 'VOCÊ NÃO DEVERIA';
        document.getElementById("Fala2").textContent = 'ESTAR AQUI';
        document.querySelectorAll(".Pupila")[0].style.borderTop = '50px';
    }else{
        ValidaEmail();
    }
}
function ValidaEmail(){
    if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
        var nome = sessionStorage.getItem(0).substring(0,sessionStorage.getItem(0).indexOf('@'));
        var arr = nome.replaceAll(".", " ").split(" ");
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        document.getElementById("Fala2").textContent = str2;
    }else{
        var nome = sessionStorage.getItem(0).substring(0,sessionStorage.getItem(0).indexOf('.'));
        const arr = nome.replaceAll(".", " ").split(" ");
        
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        document.getElementById("Fala2").textContent = str2.substring(0,nome.indexOf('0')) + " " + nome.substring(nome.indexOf('0'),nome.length);
    }
}