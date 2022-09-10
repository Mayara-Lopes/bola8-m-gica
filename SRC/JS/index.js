function aperte(){
    //declarando as variáveis
    const per = document.getElementById('txtq')
    const res = document.getElementById('resp')

    //montando o array
    let pr = [
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
    if (per.value.length == 0) {
        //se per estiver vazio
        alert('Por favor digite uma pergunta') 
    } else {
        res.innerHTML = '3, 2, 1...'

        //para buscar um index aleatório do array e mostrar depois de 500ms
        let r = pr[Math.floor(Math.random() * pr.length)]
        setTimeout(function() { res.innerHTML = `${r}` }, 500)   
    }
    
}