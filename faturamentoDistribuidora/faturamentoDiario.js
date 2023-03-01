import DADOS from './dados.json' assert { type: "json" };

function handle() {
    const filteredData = DADOS.filter(val => val.valor);
    const data = filteredData.sort((a, b) => a.valor - b.valor);
    return data;
}

function menorValor() {
    const menorFaturamento = handle()[0];
    const valorFormatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(menorFaturamento.valor);
     
    return {info: `O dia que menos faturou foi o dia ${menorFaturamento.dia}, onde foi faturado somente ${valorFormatado} reais.`};
}

function maiorValor() {
    const maiorFaturamento = handle().at(-1);
    const valorFormatado = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(maiorFaturamento.valor);
    return {info: `O dia que mais faturou foi o dia ${maiorFaturamento.dia}, onde foi faturado ${valorFormatado} reais.`};
}

function mediaMensal() {
    const media = handle().reduce((acc, val) => acc + val.valor, 0) / handle().length;
    const mediaFormatada = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(media);
    return { info: `A média mensal de faturamento foi  de R$${mediaFormatada} reais.`, valor: media};
}

function diasAcimaDaMedia(media){
    const diasAcimaMedia = handle().filter(val => val.valor > media).length;
    return {info: `${diasAcimaMedia} dias faturaram acima da média.`};
}


console.log(menorValor());
console.log(maiorValor());
console.log(diasAcimaDaMedia(12300050));
