const valor = 'R$ 1850,99';

const regexInicial = /(R\$) ([0-9]*)[,]([0-9]{2})/;
const regexValorNome = /(?<moeda>R\$) (?<inteiro>[0-9]*)[,](?<centavos>[0-9]{2})/;
const data = regexValorNome.exec(valor);
console.log(data.groups.moeda);
console.log(data.groups.inteiro);
console.log(data.groups.centavos);
console.log(valor.replace(regexInicial, '$ $2.$3'))

