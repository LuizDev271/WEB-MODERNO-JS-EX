//1 Ex: Nome >> String
function nome(nome){
    let string = `Olá, ${nome}!`
    return string
}

//2. Ex: Idade >> Dias
const anoDias = function(idade){
    return idade * 365
}

//3. Ex: Horas de trabalho >> Salario
const salario = (horas, dinheiro) => {
    return `Salário igual a: R$ ${(horas * dinheiro).toFixed(2).replace('.', ',')}`
}

//4. Ex: Number >> Mes
function mes(mes = 0){
    switch(mes){
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
            break
        case 3:
            return 'Março'
            break
        case 4:
            return 'Abril'
            break
        case 5:
            return 'Maio'
            break
        case 6:
            return 'Junho'
            break
        case 7:
            return 'Julho'
            break
        case 8:
            return 'Agosto'
            break
        case 9:
            return 'Setembro'
            break
        case 10:
            return 'Outubro'
            break
        case 11:
            return 'Novembro'
            break
        case 12:
            return 'Dezembro'
            break
        default:
            return 'Mês Inválido!!'
    }
}

//5. Ex: Maior ou igual
const maiorOuIgual = (x, y) => {
    return x >= y
}

//6. Ex: Inverso
function inverso(teste = true){
    if(typeof teste === 'string'){
        return `Booleano ou número esperados, mas o parâmetro é do tipo string.`
    } else if(typeof teste === 'boolean'){
        return !teste
    } else if(typeof teste == 'number'){
        return teste * -1
    }
}

//7. Ex: Numero, Minimo, Maximo, Inclusivo
const incluso = (numero, minimo, maximo, incluso = false) => {
    if(incluso == false){
        if(numero == minimo || numero == maximo){
            return true
        } else {
            return false
        }
    } else if(incluso == true){
        if(numero >= minimo && numero <= maximo){
            return true
        } else {
            return false
        }
    }
}

//8 Ex: Multiplicação sem *
const multi = function(x = 0, y = 0){
    return Math.imul(x, y)
}

//9. Ex: Array
function array(conteudo, qtd){
    let tudo = []
    
    for(let x = 0; x < qtd;x++){
        tudo.push(conteudo)
    }

    return tudo

}

//10. Ex: ++++
const mais = function(number){
    let symbol = '+'
    let numeroDeSymbols = ''
    
    for(let x = 0;x < number; x++){
        numeroDeSymbols = numeroDeSymbols + symbol
    }

    return numeroDeSymbols
}

//11. Ex: Primeiro e Ultimo Array
function arrayPrimeiroEFinal(array){
    let arrayX = []
    
    arrayX.push(array[0])
    arrayX.push(array[array.length - 1])

    return arrayX
}

//12. Ex: Deletar Item
function deletarItem(obj, del = ''){
    Object.keys(obj).forEach((item) => {
        if(del == item){
            delete obj[item]
        }
    })

    return obj
}

//13. Ex: Array de Numeros Apenas
const numeroArray = (array) => {
    let newArray = []

    for(let x = 0; x < array.length; x++){
        if(typeof array[x] === 'number' ){
            newArray.push(array[x])
        }
    }

    return newArray
}

//14. Ex: Objeto de Arays
function arraysObjetos(obj = {}){
    let objArray = []
    let array

    Object.keys(obj).forEach((propri) => {
        array = []
        array.push(propri, obj[propri])
        objArray.push(array)
    })

    return objArray

}

//15. Ex: Numero e Indice multiplo de 2
function multiDois(array){
    let empty = []

    array.forEach((valor, indice) => {
        if(valor % 2 == 0 && indice % 2 == 0){
            empty.push(array[indice])
        }
    });

    return empty
}

//16. Ex: Ano Bissexto
function anoBi(ano){
    let bi = false

    if(ano % 4 == 0 && ano % 400 == 0){
        bi = true
    }

    if(ano % 100 == 0 && bi == false){
        bi = false
    }

    return bi
}

//17. Ex: Soma Array
const somaArray = (array) => {
    return array.reduce((acumulador, atual) => {
        return acumulador + atual
    })
}

//18. Ex: Valor somado Objeto
function produtos(arrayObj){
    let soma = 0

    arrayObj.forEach((valor, indice) => {
        soma += arrayObj[indice].preco
    })

    return soma
}

//19. Ex: Media
function media(array){
    let total = array.reduce((acumulador, atual) => acumulador + atual)
    return total = total / array.length
}

//20. Ex: Area Triangulo
const areaT = function(base, altura){
    return ((base * altura) / 2).toFixed(2)
}

//21. Ex: Menor Número
function menor(array){
    let menor = array[0]

    array.forEach(valor => {
        if(valor < menor){
            menor = valor
        }

    });

    return menor
}

//22. Ex: Sorte
const sorte = bingo => {
    let random = (Math.random() * 10).toFixed(0)

    if(random == 0){
        random = 1
    }
    
    if(bingo == random){
        return `Parabéns!! O número sorteado é ${random}`
    } else if(bingo != random){
        return `Que pena!! O número sorteado é ${random}`
    }

}

//23. Ex: Frases
function frase(string = ''){
    let espacos = 0
    let arrayLetras = []

    arrayLetras = string.split('')
    arrayLetras.forEach((letra, indice) => {
        if(arrayLetras[indice] == ' '){
            espacos++
        }
    })

    return espacos + 1

}

//24. Ex: Letras
const letras = function(letra = '', string = ''){
    let letras = 0
    let empty = []
    empty = string.split('')

    empty.forEach((valor, indice) => {
        if(letra == empty[indice]){
            letras++
        }
    })

    return letras
}

//25. Ex: Buscar
const buscar = (inicio = '', palavras = []) => {
    let resultado = []

    palavras.forEach((valor) => {
        
        if(valor.includes(inicio)){
            resultado.push(valor)
        }
    })

    return resultado
}

//26. Ex: Consoantes
const consoantes = (string = '') => {
    let arrayLetras = []
    arrayLetras = string.split('')

    arrayLetras.forEach((valor, indice) => {
        if(valor == 'a' || valor == 'e' || valor == 'i' || valor == 'o' || valor == 'u'){
            arrayLetras.splice(indice, 1)
        }
    })

    return arrayLetras.join('')
}

//27. Ex: inverter objetos
const inverter = (obj = {}) => {
    let inverso = {}
    let itens

    Object.keys(obj).forEach((item) => {
        itens = obj[item]
        inverso[itens] = item
    })

    return inverso
    
}

//28. Ex: filtrarNumeros
const filtrar = (array = [], digitos = 1) => {
    let filtrado = []

    for(numero of array){
        if(String(numero).length == digitos){
            filtrado.push(numero)
        }
    }

    return filtrado

}

//29. Ex: Segundo Maior
function segundoLugar(array){
    let maior = array[0]
    let segundo = 0

    array.forEach((valor, indice) => {
        if(valor > maior){
            maior = valor
        }
    })

    array.forEach((valor, indice) => {
        if(valor > segundo && valor < maior){
            segundo = valor
        }
    })

    return segundo
}

//30. Ex: media alun
const mediaAluno = (obj = {}) => {
    let melhorAluno = {}
    let NotasAlunos

    let media
    let maiorMedia = 0
    
    Object.keys(obj).forEach((aluno) => {
        NotasAlunos = obj[aluno]
        media = NotasAlunos.reduce((acumulador, atual) => acumulador + atual) / obj[aluno].length
        
        if(media > maiorMedia){
            maiorMedia = media
            melhorAluno.aluno = aluno
        }

        melhorAluno.media = maiorMedia
    })

    return melhorAluno

}
