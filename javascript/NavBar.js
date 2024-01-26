sessionStorage.removeItem(1);
sessionStorage.removeItem(2);
sessionStorage.removeItem(3);
sessionStorage.removeItem(4);
sessionStorage.removeItem(5);
sessionStorage.removeItem(6);
document.addEventListener('DOMContentLoaded', function(){
    ValidaEmail();
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
function ValidaEmail(){
    animacaoOlhos();
    if(sessionStorage.getItem(0).includes('@onnetmais.com.br')){
        var nome = sessionStorage.getItem(0).substring(0,sessionStorage.getItem(0).indexOf('@'));
        var arr = nome.replaceAll(".", " ").split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var str2 = arr.join(" ");
        document.getElementById("Fala2").textContent = str2;
    }else{
        var nome = sessionStorage.getItem(0).substring(0,sessionStorage.getItem(0).indexOf('.'));
        const arr = nome.replaceAll(".", " ").split(" ");
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        var str2 = arr.join(" ");
        document.getElementById("Fala2").textContent = str2;
    }
}