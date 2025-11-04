import react from 'react'
function datalHoraAtual() {
  const agora = new Date();
  const diasemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const diasSemana = diaSemana[agora.getDay()];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();
  return (
    <h1>Hoje é (diasSemana), (dia) de (mes) de {ano]</h1>
  );
}
export default dataHoraAtual;