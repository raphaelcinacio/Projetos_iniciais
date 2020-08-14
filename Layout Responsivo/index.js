//Começo do código para expandir o campo Resumo, dentro do main
let verMais = document.getElementById("ver-mais");
verMais.onclick = function(){
        verMais.innerHTML="";
        let novoParagrafo = document.getElementById("novo-paragrafo");
        novoParagrafo.innerHTML="O presente relato inscreve-se no campo da análise e impacto de processo formativo situado no contexto de atuação de professores do AEE para alunos regularmente matriculado na rede municipal de ensino de Sorocaba, SP. A partir do estudo sobre a formação inicia, repetindo tudo denovo."
        novoParagrafo.setAttribute("class","mt-2 ml-2 col-12");    
        let novoParagrafo2 = document.getElementById("novo-paragrafo-2");
        novoParagrafo2.innerHTML="O presente relato inscreve-se no campo da análise e impacto de processo formativo situado no contexto de atuação de professores do AEE para alunos regularmente matriculado na rede municipal de ensino de Sorocaba, SP. A partir do estudo sobre a formação inicia, repetindo tudo denovo."
        novoParagrafo2.setAttribute("class","mt-2 ml-2 col-12");
        //Permite minimizar o campo criado dentro de resumo
        let imgNova = document.createElement("img");
        imgNova.setAttribute("src","./node_modules/bootstrap-icons/icons/arrow-bar-up.svg");
        imgNova.setAttribute("class","mt-1 ml-1");
        imgNova.style.cursor="pointer";    
        novoParagrafo2.appendChild(imgNova);
        imgNova.onclick = function(){
            novoParagrafo.innerHTML="";
            novoParagrafo2.innerHTML="";
            verMais.innerHTML="...ver mais";
        }
    //Fim do código para expandir o campo Resumo, dentro do main    
}
//Começo do código para a criação dos campos de da seção Discussões, dentro do main
let criarTopico = document.getElementById("up-down");
let a = 0;
criarTopico.onclick = function(){
    //Esse while limita apenas uma criação por vez de comentários
    while(a < 1){
        let discussoes = document.getElementById("discussoes");
        discussoes.innerHTML="";
        //
        let titleDiscussoes = document.getElementById("title-discussoes");
        titleDiscussoes.setAttribute("class","text-center mt-3 text-dark");
        titleDiscussoes.innerHTML="Tem alguma dúvida ou sugestão ? Compartilhe seu feedback com os autores!";
        //
        let campos = document.getElementById("campos");
        campos.setAttribute("class","border rounded mb-3 question col-12");
        //
        let campoAssuntoLabel = document.createElement("label");
        campoAssuntoLabel.setAttribute("class","text-left text-warning col-12");
        campoAssuntoLabel.innerText="Assunto"; 
        //
        let campoAssunto = document.createElement("input");
        campoAssunto.setAttribute("type","text");
        campoAssunto.setAttribute("placeholder","Defina um tópico sucinto para notificar os autores...");
        campoAssunto.setAttribute("class","form-control");
        campoAssunto.setAttribute("id","assunto");
        //
        let campoComentarioLabel = document.createElement("label");
        campoComentarioLabel.setAttribute("class","text-left text-warning col-12 mt-3");
        campoComentarioLabel.innerText="Conteúdo"; 
        //
        let campoTextArea = document.createElement("textarea");
        campoTextArea.setAttribute("class","form-control");
        //
        let button = document.createElement("button");
        button.innerHTML="Enviar sugestão";
        button.setAttribute("type","button");
        button.setAttribute("class","btn btn-warning ml-2 mr-1 btn-sm");
        button.setAttribute("id", "enviar-comentário");
        //
        let escape = document.createElement("img");
        escape.setAttribute("src","./node_modules/bootstrap-icons/icons/x-circle.svg");
        escape.setAttribute("id","cancelar-comentário"); 
        escape.style.cursor="pointer";
        //
        let imgFonts = document.createElement("img");
        imgFonts.setAttribute("src","./node_modules/bootstrap-icons/icons/fonts.svg");
        imgFonts.setAttribute("id","fonts");
        imgFonts.setAttribute("class","float-left mt-2 ml-3");
        //
        let imgItalic = document.createElement("img");
        imgItalic.setAttribute("src","./node_modules/bootstrap-icons/icons/type-italic.svg");
        imgItalic.setAttribute("id","italic");
        imgItalic.setAttribute("class","float-left mt-2 mx-1");
        //
        let imgBold = document.createElement("img");
        imgBold.setAttribute("src","./node_modules/bootstrap-icons/icons/type-bold.svg");
        imgBold.setAttribute("id","bold");
        imgBold.setAttribute("class","float-left mt-2");
        //
        let campoAuxiliar = document.createElement("div");
        campoAuxiliar.setAttribute("class","border text-right bg-secondary border rounded");
        campoAuxiliar.setAttribute("id","campo-auxiliar");
        campoAuxiliar.appendChild(imgFonts);
        campoAuxiliar.appendChild(imgItalic);
        campoAuxiliar.appendChild(imgBold);
        campoAuxiliar.appendChild(escape);
        campoAuxiliar.appendChild(button);
        //
        let campoMsg = document.createElement("div");
        //
        let campoForm = document.createElement("form");
        campoForm.setAttribute("class","form-group pt-3");
        campoForm.appendChild(campoAssuntoLabel);
        campoForm.appendChild(campoAssunto);
        campoForm.appendChild(campoComentarioLabel);
        campoForm.appendChild(campoTextArea);
        campoForm.appendChild(campoAuxiliar);
        campoForm.appendChild(campoMsg);
        campos.appendChild(campoForm);
        //

        //Validação do input "Assunto"
        button.onclick = function(){
            if(campoAssunto.value ===""){
                campoMsg.setAttribute("class","bg-danger font-weight-bold py-2");
                campoMsg.innerHTML="É necessário inserir um assunto";
            }//Validação do Textarea
            else if(campoTextArea.value.length < 50){
                campoMsg.setAttribute("class","bg-danger font-weight-bold py-2");
                campoMsg.innerHTML="É necessário que o conteúdo possua no mínimo 50 caracteres";
            }//Após a validação e envio do comentário
            else{
                let discussoesDiv = document.getElementById("discussoes-div");
                discussoesDiv.innerHTML="";
                discussoesDiv.setAttribute("class","");
                titleDiscussoes.innerHTML="";
                titleDiscussoes.setAttribute("class","");
                let emoji = document.createElement("img");
                emoji.setAttribute("src","./node_modules/bootstrap-icons/icons/emoji-smile.svg");
                emoji.setAttribute("class","mt-3");
                let sucesso = document.createElement("div");
                sucesso.setAttribute("class","col-12 text-center py-4 mt-5 d");
                sucesso.innerHTML=`<h1>Sugestão enviada com sucesso</h1>`;
                let msgEnvio = document.createElement("p");
                msgEnvio.setAttribute("class","mb-5 mt-4");
                msgEnvio.innerHTML="Sua sugestão será analisada, assim que estiver tudo pronto retornaremos";
                sucesso.appendChild(emoji);
                sucesso.appendChild(msgEnvio);
                discussoesDiv.appendChild(sucesso);
            }
        }//Limpa o erro do input "Assunto", após a validação
        campoAssunto.onkeypress = function(){
            campoMsg.innerHTML="";
            campoMsg.setAttribute("class","");
        }//Limpa o erro do Textarea, após a validação
        campoTextArea.onkeypress = function(){
            campoMsg.innerHTML="";
            campoMsg.setAttribute("class","");
        }
        //Permite cancelar a operação de envio de um comentário e restaura os padrões
        escape.onclick = function(){
            campos.innerHTML="";
            campos.setAttribute("class","");
            titleDiscussoes.innerHTML="Compartilhe suas idéias ou dúvidas com os autores";
            titleDiscussoes.setAttribute("class","text-center mt-3 text-warning");
            let dis = document.getElementById("discussoes");
            let imgOne = document.createElement("img");
            imgOne.setAttribute("src","./node_modules/bootstrap-icons/icons/flower1.svg");
            imgOne.setAttribute("class","pr-5");
            let imgTwo = document.createElement("img");
            imgTwo.setAttribute("src","./node_modules/bootstrap-icons/icons/patch-question-fll.svg");
            imgTwo.setAttribute("class","pl-5 pr-5");
            let imgThree = document.createElement("img");
            imgThree.setAttribute("src","./node_modules/bootstrap-icons/icons/people-fill.svg");
            imgThree.setAttribute("class","pl-5");
            let msg = document.createElement("p");
            msg.innerHTML="Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus questionamentos ou sugestões para o autor!";
            msg.setAttribute("class","pt-5");
            dis.appendChild(imgOne);
            dis.appendChild(imgTwo);
            dis.appendChild(imgThree);
            dis.appendChild(msg);
            a--;
        }
        a++;
    }
    //Fim do código para a criação dos campos de da seção Discussões, dentro do main
}

//Começo do código para visualizar os comentários no segundo comentário na seção Discussões
let coment = document.getElementById("comentarios");
let i = 0;
coment.onclick = function(){
    //Esse while limita apenas uma criação por vez de comentários
    while(i < 1){
        //Criação do primeiro comentário
        let nomeConteudo = document.createElement("p");
        nomeConteudo.innerHTML="adriano da silva";
        nomeConteudo.setAttribute("class","text-capitalize pl-3 mt-4 font-weight-bold col-9 d-inline-block");
        //
        let tituloDaPessoa = document.createElement("p");
        tituloDaPessoa.innerHTML="Autor";
        tituloDaPessoa.setAttribute("class","col-2 text-warning d-inline-block text-right");
        //
        let doubleCheck = document.createElement("img");
        doubleCheck.setAttribute("src","./node_modules/bootstrap-icons/icons/check-all.svg")
        //
        let msgConteudo = document.createElement("p");
        msgConteudo.innerHTML="Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo";
        msgConteudo.setAttribute("class","pl-3");
        //
        let separador = document.createElement("hr");
        //
        let like = document.getElementById("like");
        like.innerHTML="4 likes";
        //
        let resposta = document.getElementById("resposta");
        resposta.innerHTML="4 respostas";
        //
        let comentario = document.getElementById("comentario"); 
        comentario.setAttribute("class","border rounded mx-3 mb-3 question");
        comentario.appendChild(nomeConteudo);
        comentario.appendChild(tituloDaPessoa);
        comentario.appendChild(doubleCheck);
        comentario.appendChild(msgConteudo);
        comentario.appendChild(separador);
        //Criação do segundo comentário
        nomeConteudo = document.createElement("p");
        nomeConteudo.innerHTML="carlos henrique santos";
        nomeConteudo.setAttribute("class","text-capitalize pl-3 mt-2 font-weight-bold col-9 d-inline-block");
        //
        msgConteudo = document.createElement("p");
        msgConteudo.innerHTML="Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo.<br><br>Obrigada pela resposta, muito interessante o seu trabalho!";
        msgConteudo.setAttribute("class","pl-3");
        //
        separador = document.createElement("hr");
        //
        comentario = document.getElementById("comentario"); 
        comentario.setAttribute("class","border rounded mx-3 mb-3 question");
        comentario.appendChild(nomeConteudo);
        comentario.appendChild(msgConteudo);
        comentario.appendChild(separador);
        //Criação do terceiro comentário
        nomeConteudo = document.createElement("p");
        nomeConteudo.innerHTML="camila ferreira andrade";
        nomeConteudo.setAttribute("class","text-capitalize pl-3 mt-2 font-weight-bold col-9 d-inline-block");
        //
        tituloDaPessoa = document.createElement("p");
        tituloDaPessoa.innerHTML="Coautor";
        tituloDaPessoa.setAttribute("class","col-2 text-warning d-inline-block text-right");
        //
        doubleCheck = document.createElement("img");
        doubleCheck.setAttribute("src","./node_modules/bootstrap-icons/icons/check-all.svg")
        //
        msgConteudo = document.createElement("p");
        msgConteudo.innerHTML="Também interessante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente";
        msgConteudo.setAttribute("class","pl-3");
        //
        separador = document.createElement("hr");
        //
        comentario = document.getElementById("comentario"); 
        comentario.setAttribute("class","border rounded mx-3 mb-3 question");
        comentario.appendChild(nomeConteudo);
        comentario.appendChild(tituloDaPessoa);
        comentario.appendChild(doubleCheck);
        comentario.appendChild(msgConteudo);
        comentario.appendChild(separador);
        //Criação do quarto comentário
        nomeConteudo = document.createElement("p");
        nomeConteudo.innerHTML="ana carolina";
        nomeConteudo.setAttribute("class","text-capitalize pl-3 mt-2 font-weight-bold col-9 d-inline-block");
        //
        tituloDaPessoa = document.createElement("p");
        tituloDaPessoa.innerHTML="Coautor";
        tituloDaPessoa.setAttribute("class","col-2 text-warning d-inline-block text-right");
        //
        doubleCheck = document.createElement("img");
        doubleCheck.setAttribute("src","./node_modules/bootstrap-icons/icons/check-all.svg")
        //
        msgConteudo = document.createElement("p");
        msgConteudo.innerHTML="Comecinho da pergunta aparece aqui recente relato inscreve-se no campo de análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo";
        msgConteudo.setAttribute("class","pl-3");
        //
        comentario = document.getElementById("comentario"); 
        comentario.setAttribute("class","border rounded mx-3 mb-3 question");
        comentario.appendChild(nomeConteudo);
        comentario.appendChild(tituloDaPessoa);
        comentario.appendChild(doubleCheck);
        comentario.appendChild(msgConteudo);
        //Permite fechar os comentários criados
        let escape = document.createElement("img");
        escape.style.cursor="pointer";
        escape.setAttribute("src","./node_modules/bootstrap-icons/icons/x-square.svg");
        escape.setAttribute("class","border");
        let divEscape = document.createElement("div");
        divEscape.setAttribute("class","text-center mt-4 mb-2");
        divEscape.appendChild(escape);
        comentario.appendChild(divEscape);
        escape.onclick = function(){
            comentario.innerHTML="";
            comentario.setAttribute("class","");
            like.innerHTML="1 like";
            resposta.innerHTML="1 resposta";
            i--;
        }
        i++;
    }
    //Fim do código para visualizar os comentários no segundo comentário na seção Discussões
}