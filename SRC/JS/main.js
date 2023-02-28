//declarando variáveis
const botao = document.getElementById('botao')
const pergunta = document.getElementById('pergunta')
const resultado = document.getElementById('resposta')

//iniciando evento do botao

botao.addEventListener("click" , () =>{
    //montando o array
   let listaPossibilidades = [
       'Improvável',
       'Não conte com isso',
       'As estrelas dizem não',
       'Sem dúvidas',
       'Parece um sim',
       'As chances não são boas',
       'Não sei dizer agora',
       'As indicações dizem sim',
       'Sim',
       'Não'
   ]

   //condições
   if (pergunta.value.length == 0) {
       //se pergunta estiver vazio
        alert('Por favor digite uma pergunta') 
        
   } else {
       resultado.innerHTML = '3, 2, 1...'

       //para buscar um index aleatório do array e mostrar depois de 500ms
       let possiveisRespostas = listaPossibilidades[Math.floor(Math.random() * listaPossibilidades.length)]
       setTimeout(function() { resultado.innerHTML = `${possiveisRespostas}`}, 500)   
   }
    
})