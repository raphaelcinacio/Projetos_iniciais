document.querySelector(".form-control").focus();
let btn = document.getElementById("botao");
let b = document.getElementById("campo");
let alert = document.getElementById("first-element");
b.onkeyup = function(){
    if(b.value.length !== 0){
        alert.innerHTML='';
        alert.style.display='none';
    }
}
btn.onclick = function(){
    if(document.querySelector("#campo").value ===''){
        alert.style.display='block';
        alert.setAttribute("class", "alert alert-warning");
        alert.innerHTML='É necessário preencher uma tarefa antes';
    }
    else if(document.querySelector("#campo").value !==''){
            let reference = document.querySelector("#lista");
            let newElement = document.createElement("li");
            let valorAtual = document.querySelector("#campo").value;
            let textNode = document.createTextNode(valorAtual);
            newElement.setAttribute("class", "teste");
            newElement.appendChild(textNode);
            newElement.style.listStyle='none';
            newElement.style.margin="8px 0";
            newElement.style.padding="10px 25px"
            newElement.style.display='inline';
            reference.parentNode.insertBefore(newElement, reference);
            let garbageElement = document.createElement("img");
            garbageElement.setAttribute("src", "imagens/trash.svg");
            newElement.parentNode.insertBefore(garbageElement, reference);
            let quebraDeLinha = document.createElement("div");
            quebraDeLinha.style.marginBottom="25px";
            reference.parentNode.insertBefore(quebraDeLinha, reference);
            garbageElement.onmouseover = function(){
                garbageElement.style.background ='#DCDCDC';
                garbageElement.style.cursor='pointer';
            }
            garbageElement.onmouseout = function(){
                garbageElement.style.background ='';
            }
            garbageElement.onclick = function(){
                newElement.remove();
                garbageElement.remove();
            }
            document.querySelector("#campo").value = '';   
            document.querySelector(".form-control").focus();
            
        }
    }

    





