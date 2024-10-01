//Exercicio 1: Tipos de Contas
function contasSimples(x = 0, y = 0){
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
}

//Exercicio 2: Tipos de Triangulo
function triangulo(x = 0, y = 0, z = 0){
    let ladosAB = x + y

    if(ladosAB > z){
        if(x === y && x === z){
            console.log('Triangulo: Equilátero')
        } else if((x === y && x != z) || (y === z && y != x) || (z === x && z != y)){
            console.log('Triangulo: Isóceles')
        } else if(x != y && x != z && y != z){
            console.log('Triangulo: Escaleno')
        }
    } else{
        console.log('Não é um triangulo!!')
    }
}

//Exercicio 3: Base e Expoente
const area = function(base = 0, expoente = 0){
    return Math.pow(base, expoente)
}

//Exercicio 4: Divisor e Dividendo
let divs = (x = 1, y = 1) => {
    let resultado
    let sobra

    resultado = x / y
    sobra = x % y

    if(sobra === 0){
        console.log(`Resultado: ${resultado}, Sobrou nada da divisão`)
    } else {
        console.log(`Resultado: ${resultado} | Sobra da divisão: ${sobra}`)
    }
}

//Exercicio 5: Dinheiro
function money(dindin = 0){
    let dinheiro = `R$ ${dindin.toFixed(2)}`
    dinheiro = dinheiro.replace(".", ",")

    console.log(dinheiro)
}

//Exericio 6: Juros Simples / Juros Composto (Resposta == Não entendi a pergunta)
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

//Exercicio 7: Baskara (Resposta == Preguiça)
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)

    if(delta < 0){
        return "Delta é negativo"
    } 
    
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)

    resultados.push(x1)
    resultados.push(x2)

    return resultados   
}

//Exercicio 8: Pedro Recordes (Resposta == Preguiça + Não Entendi + Não cheguei em uma conclusão)
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0

    let piorJogo = 1

    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++

        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;

        }
    }

    return [qtdQuebraDeRecords, piorJogo]
}

//Exercicio 9: Arredondamento INTEIRO (Resposta == Menor ideia de como fazer isso)
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

/*function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}*/

//====== MINHA VERSÃO ======
function arredondar(nota){
    if(nota % 10 > 5){
        return nota + (10 - (nota % 10))
    } else if(nota % 10 < 5){
        return nota - (nota % 10)
    }
}

//Exercicio 10: Divisivel por 3
const tres = (x = 0) => {
    let sobra = x % 3
    
    if(sobra === 0){
        sobra = true
    } else {
        sobra = false
    }

    console.log(sobra)
}

//Exercicio 11: Ano bissextos
function ano(x = 0){
    let valorAno = x % 4

    if(!(x % 4) || !(x % 400)){
        console.log('Ano bissexto!')
        console.log(!!!valorAno)
    } else{
        console.log('Ano não bissexto!')
        console.log(!!!valorAno)
    }
}

//Exercicio 12: Fatorial (Conceito de )
function fatorial(numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

//Exercicio 13: Dias úteis
function diasUteis(dias = 0){
    
    switch(dias){
        case 1:
            console.log('É dia útil')  
            break
        case 2 :
            console.log('Não é dia útil') 
            break 
        case 3:
            console.log('Não é dia útil') 
            break 
        case 4:
            console.log('Não é dia útil') 
            break 
        case 5:
            console.log('Não é dia útil') 
            break 
        case 6:
            console.log('Não é dia útil') 
            break 
        case 7:
            console.log('É dia útil')  
            break
        default:
            console.log('Dia Inválido')
    }
}

//Exercicio 14: Frutas
const frutas = (fruta = '') =>{
    fruta = fruta.toLowerCase()

    switch(fruta){
        case 'maça' || 'maças':
            console.log('Não vendemos essa fruta aqui...')
            break
        case 'kiwi' || 'kiwis':
            console.log('Estamos com escassez de kiwis...')
            break
        case 'abacaxi' || 'abacaxis':
            console.log('Aqui está, são 3 reais o kilo!')
            break
        default:
            console.log('Nem sei que fruta é essa...')
    }
}

//Exercicio 15: Modelos de Veiculos
function veiculos(veiculo = ''){
    veiculo = veiculo.toLowerCase()

    switch(veiculo){
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan' || 'sedans':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'motocicleta' || 'motocicletas':
            console.log('Tem certeza que não prefere este modelo?')
            break
        case 'caminhonete' || 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

//Exercicio 16: Contas Switch
const contas = (x = 0, y = 0, tipo = 'soma') => {
    switch(tipo){
        case 'soma':
            console.log(x + y)
            break
        case 'dividir':
            console.log(x / y)
            break
        case 'multiplicar':
            console.log(x * y)
            break
        case 'subtrair':
            console.log(x - y)
            break
    }
}

//Exercicio 17: Plano de Trabalho
function planos(plano = '', salario = 0){
    let aumento

    switch(plano){
        case 'A':
            aumento = salario * 0.10
            salario += aumento

            console.log(`Você recebeu um aumento!! Seu salário agora é de: ${salario}`)
            break
        case 'B':
            aumento = salario * 0.15
            salario += aumento

            console.log(`Você recebeu um aumento!! Seu salário agora é de: ${salario}`)
            break
        case 'C':
            aumento = salario * 0.20
            salario += aumento

            console.log(`Você recebeu um aumento!! Seu salário agora é de: ${salario}`)
            break
        default:
            console.log('Plano não definido!!')
    }
}

//Exercicio 18: Extenso
const numeros = (x = 0) => {
    switch(x){
        case 0:
            console.log('Zero')
            break
        case 1:
            console.log('Um')
            break
        case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Tres')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('numero invalido!')
    }
}

//Exercicio 19: Cardapio
const cardapio = (codigo = 0, quantidade = 0) => {
    let preco = 0
    let descricao = ''

    switch(codigo){
        case 100:
            preco = 3 * quantidade

            descricao = `${quantidade} Cachorro Quente vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        case 200:
            preco = 4 * quantidade
            descricao = `${quantidade} Hamburguer Simples vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        case 300:
            preco = 5.50 * quantidade
            descricao = `${quantidade} Cheeseburguer vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        case 400:
            preco = 7.50 * quantidade
            descricao = `${quantidade} Bauru vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        case 500:
            preco = 3.50 * quantidade
            descricao = `${quantidade} Refrigerante vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        case 600:
            preco = 2.80 * quantidade
            descricao = `${quantidade} Suco vão dar R$ ${preco.toFixed(2)}`
            descricao = descricao.replace(".", ",")

            console.log(descricao)
            break
        default:
            console.log('Codigo Invalido!')
    }
}

//Exercicio 20: Troco (Resposta == Menor ideia ++ (Muito Complexo))
function sacarDinheiro(valorSaque) {

    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0

    let valorNota = calcularValorNota(valorSaque)

    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

//Exercicio 21: Saude
const planoSaude = (idade = 0) => {
    let valorMinimo = 100

    if(idade >= 0 && idade <= 10){
        valorMinimo += 80
        console.log(`Preço a se pagar pelo plano de saúde: R$ ${valorMinimo}`)

    } else if(idade > 10 && idade <= 30){
        valorMinimo += 50
        console.log(`Preço a se pagar pelo plano de saúde: R$ ${valorMinimo}`)

    } else if(idade > 30 && idade <= 60){
        valorMinimo += 95
        console.log(`Preço a se pagar pelo plano de saúde: R$ ${valorMinimo}`)

    } else if(idade > 60){
        valorMinimo += 130
        console.log(`Preço a se pagar pelo plano de saúde: R$ ${valorMinimo}`)

    } else {
        console.log('Idade inválida!')
    }
}

//Exercicio 22: Juros por Mes (Fiz Juros Simples, fui muleke)
function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

//Exercicio 23: Media de Notas
function notasMedia(nota1 = 0, nota2 = 0, nota3 = 0){
    let totalNotas = 0
    let mediaNotas = 0

    if(nota1 > 10){
        nota1 = 10
    }
    
    if(nota2 > 10){
        nota2 = 10
    }
    
    if(nota3 > 10){
        nota3 = 10
    }

    let array = []
    array.push(nota1, nota2, nota3)

    for(let x = 0; x < array.length; x++){
        totalNotas += array[x]
        mediaNotas = totalNotas / array.length
    }

    mediaNotas.toFixed(2)

    console.log(`Nota 1: ${array[0]}`)
    console.log(`Nota 2: ${array[1]}`)
    console.log(`Nota 3: ${array[2]}`)

    if(mediaNotas >= 5){
        console.log(`Sua média foi: ${mediaNotas}, APROVADO!!`)
    } else if(mediaNotas < 5){
        console.log(`Sua média foi: ${mediaNotas}, REPROVADO!!`)
    }
    
}
 
//Exercicio 24: Hello World
function helloWorld(x = 0){
    let y = 1
    while(y <= x){
        console.log(`${y}. Hello World`)
        y++
    }
}

//Exercicio 25: Cinqueta Vezes
const cinquenta = () => {
    for(let x = 1; x <= 50; x++){
        console.log(x)
    }
}

//Exercicio 26: Pares
function pares(x = 1){
    for(x; x < 100;x++){
        if(!(x % 2)){
            console.log(x)
        }
    }
}

//Exercicio 27: Altura crianças (Resposta == Esqueci de fazer e nem conseguiria tbm)
function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

//Exercicio 28: Vetores Pares e Ímpares
const vetores = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let impar = 0
    let par = 0

    for(let x = 0; x < array.length; x++){
        if(array[x] % 2 == 0){
            par++
        } else {
            impar++
        }
    }

    console.log(`Número de impares: ${impar}, Número de pares: ${par}`)
}

//Exercicio 29: Entre 10 e 20
const numerosEntre = () => {
    let array = [1, 2, 3, 4, 5, 10, 13, 14, 16, 19, 18, 21, 20, 32, 37, 30]
    let entre = 0
    let fora = 0

    for(let x = 0; x < array.length; x++){
        if(array[x] > 10 && array[x] < 20){
            entre++
        } else {
            fora++
        }
    }

    console.log(`Tamanho do vetor ${array.length}, Números entre 10 e 20: ${entre}, Número de fora: ${fora}`)
}

//Exercicio 30: Maior e Menor (Resposta == Não sabia tbm)
function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

//Exercicio 31: Numero negativos
function negativos(){
    let array = [-1, -3, -4, -11.6, 0, 1, 5, 10, 1.2]
    let numNegativos = 0
    
    for(let x = 0; x < array.length; x++){
        if(array[x] < 0){
            numNegativos++
        }
    }

    console.log(`Tamanho do vetor: ${array.length} Números`)
    console.log(`Números negativos nele: ${numNegativos}`)
}

//Exercicio 32: Media Aritmetica
function media(parametroArray = [0]){
    let array = parametroArray
    let somaTudo = 0
    let media

    for(let x = 0; x < array.length; x++){
        somaTudo += array[x]
    }

    media = somaTudo / array.length

    console.log(media)
}

//Exercicio 33: Vetores Int, String, Double (Cheguei perto)
/*====== MINHA VERSÃO ======

const tresVetores = () => {
    let int = [1, 2, 3, 4]
    let string = ['Um', 'Dois', 'Tres', 'Quatro']
    let double = [1.1, 2.2, 3.3, 4.4]

    let juntos = int.concat(string, double)

    console.log(juntos)
}*/

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

//Exercicio 34: Strings Iguais (Resposta == Não sabia nem conseguiria)
function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase()

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase()

            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

//Exercicio 35: Aumentar Vetor
function aumentar(array = [0]){
    let vetorPilha = [1, 2, 3, 4 ,5]
    let vetorAdd = array

    for(let x = 0; x < vetorAdd.length; x++){
        vetorPilha.push(vetorAdd[x])
    }
    
    console.log(vetorPilha)
}

//Exercicio 36: Multiplicação Vetore (Fiz com For ao inves de ForEach)
/*====== Minhas VERSÕES ======
function mult1(vetor, numInt){
    let resultado = []

    for(let x = 0; x < vetor.length; x++){
        resultado = resultado.concat(vetor[x] * numInt) 
    }

    console.log(resultado)
}

function mult2(vetor, numInt){
    let resultado = []

    for(let x = 0; x < vetor.length; x++){
        if(vetor[x] > 5){
            resultado = resultado.concat(vetor[x] * numInt) 
        }
    }

    console.log(resultado)
}*/

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado1 = []
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador) 
    });

    return vetorResultado1
}

function multiplicaVetorSeMaiorQue5(vetor, multiplicador){
    let vetorResultado2 = []
    if(multiplicador < 5) return
    vetor.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador) 
    });

    return vetorResultado2
}

//Exercicio 38: Inico e Fim Impares
const incioEfim = (inicio = 0, fim = 100) => {
    if(inicio > fim){
        [inicio, fim] = [fim, inicio]
    }

    for(inicio; inicio < fim; inicio++){
        if(inicio % 2 == 0){
            continue
        } else {
            console.log(inicio)
        }
    }
}

//Exercicio 39: Troca de Lugares (Resposta == Não consegui)
function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

//Exercicio 40: Notas A B C
function notasAbc(param = [0]){
    let array = param
    let notasA = 0
    let notasB = 0
    let notasC = 0
    let notasD = 0

    for(let x = 0; x < array.length; x++){
        if(array[x] > 0.0 && array[x] < 4.9){
            notasD++
        } else if(array[x] > 5.0 && array[x] < 6.9){
            notasC++
        } else if(array[x] > 7.0 && array[x] < 8.9){
            notasB++
        } else if(array[x] > 9.0 && array[x] < 10.0){
            notasA++
        } 
    }    
}