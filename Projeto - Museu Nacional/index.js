let btn = document.getElementById("btn");
let qtd = document.getElementById("qtd");
let msg = document.getElementById("msg");
let data = document.getElementById("data");
let date = new Date();
let today;
if(date.getDate() < 9 && date.getMonth() < 9){
    today = date.getFullYear()+"-"+0+(date.getMonth()+1)+"-"+0+date.getDate();
}
else if(date.getDate() < 9 && date.getMonth() > 9){
    today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+0+date.getDate();
}
else if(date.getDate() > 9 && date.getMonth() < 9){
    today = date.getFullYear()+"-"+0+(date.getMonth()+1)+"-"+date.getDate();
}
else{
    today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}
console.log(today);
btn.onclick = function(){
    if(data.value === ""){
        msg.style.width="350px"
        msg.setAttribute("class", "alert alert-danger")
        msg.innerText = "Informe uma data";
    }
    else if(data.value < `${today}`){
        msg.style.width="350px"
        msg.setAttribute("class", "alert alert-danger")
        msg.innerText = "Não é possível voltar no tempo";
        data.value = '';
    }
    else if(qtd.value == ""){
        msg.style.width="350px"
        msg.setAttribute("class", "alert alert-warning")
        msg.innerText = "Informe um valor entre 1 e 10";
    }
    else if(qtd.value > 10 || qtd.value < 1){
        msg.style.width="350px"
        msg.setAttribute("class", "alert alert-warning")
        msg.innerText = "Valor informado é menor que 1 ou maior que 10";
        qtd.value = '';
    }
    else{
        qtd.value = '';
        data.value = '';
    }
}
qtd.onkeypress = function(){
    if(qtd.value !== 0){
        msg.innerText='';
        msg.setAttribute("class","");
    }
}
data.oninput = function(){
    if(data.value !== ""){
        msg.innerText='';
        msg.setAttribute("class","");
    }
}






