sessionStorage.clear();
function setarEmail(){
    var email = document.getElementById("InputEmail").value;
    if(email == ''){
        alert("Preencha o campo com o seu e-mail");
    }else{
        if(!email.includes('@onnetmais.com.br') && !email.includes('@gmail.com')){
            alert("E-mail não reconhecido, por favor, verifique se não há algo errado!");
        }else{
            sessionStorage.setItem(0,email);
            if(email.includes('@onnetmais.com.br')){
                window.location.href="pages/NavBar.html";
            } else if(email.includes('@gmail.com') && ( email.includes('vendas') || email.includes('televendas') || email.includes('estoque') || email.includes('desenvolvimento') || email.includes('crm') || email.includes('suporte') || email.includes('sac') || email.includes('retencao') || email.includes('cobranca') || email.includes('contabilidade') || email.includes('caixa') || email.includes('faturamento') || email.includes('financeiro') || email.includes('ativacao') || email.includes('expedicao') || email.includes('auditoria') || email.includes('servicos') || email.includes('rh') || email.includes('redes') || email.includes('pap') || email.includes('servicos'))){
                window.location.href = 'pages/NavbarResumido.html';
            } else {
                alert("E-mail não reconhecido, por favor, verifique se não há algo errado!");
            }
        }
    }
}
