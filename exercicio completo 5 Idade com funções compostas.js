function MaiorDeIdade (idade = 0, ano = 0){
    if(idade == 1 && ano == 0){
        return `Você tem ${idade} ano, portanto não pode usar o sistema.`
    }
    else if (idade >1 && idade<18 && ano ==0 ){
        return `Você tem ${idade} anos, portanto não pode usar o sistema.`

    }else if (idade >= 18 && ano == 0 ){
        return `Com ${idade} anos, você já pode usar o sistema! Bem-vindo.`

    }else if (idade == 0 && ano >= 1 && ano == 2022){
        let anoAtual = 2022
        let idadePeloAno = anoAtual -ano 
            if (idadePeloAno >= 18){
            return `Com ${idadePeloAno} anos, você já pode usar o sistema! Bem-vindo.`
            }else{
            return `Você tem ${idadePeloAno} anos, portanto não pode usar o sistema!`
            }

    }else if (idade == 0 && ano == 0 && ano > 2022){
        return 'Dados incorretos! Digite pelo menos um dado!'

    } else {
        return 'Por favor, digite UM valor lógico'
    }
}

console.log(MaiorDeIdade(0 , 0))