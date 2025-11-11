import react from 'react'

function Saudacao({ nome }) {
  return <h1>0lá, {nome}!</h1>
}
export default function MyApp() {
  return (<Saudacao nome="Ellen" />)
}