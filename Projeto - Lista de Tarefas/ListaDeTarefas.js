document.querySelector(".form-control").focus();
let btn = document.getElementById("botao");
btn.onclick = function(){
    if(document.querySelector("#campo").value ===''){
        var validation = document.createElement("div");
        validation.setAttribute('class', 'alert alert-warning');
        validation.setAttribute('id', 'first-element');
        let msg = document.createTextNode("É necessário preencher uma tarefa antes");
        validation.appendChild(msg);
        let reference = document.querySelector("#lista");
        reference.parentNode.insertBefore(validation, reference);
        msg = '';
        let numberOfClasses = document.getElementsByClassName("alert alert-warning");
        if(numberOfClasses.length > 1){
            validation.remove();
        }
    }
    else if(document.querySelector("#campo").value !==''){
        if(document.querySelector("#first-element")){
            document.getElementById("first-element").remove();
        }
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





