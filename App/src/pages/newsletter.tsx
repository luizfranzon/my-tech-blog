import { Header } from "../components/Header";

export default function Newsletter() {
  return (
    <>
    <Header/>
    <div className="mt-16 flex flex-col items-center justify-center">
      <span className="font-bold text-3xl">Se inscreva em nossa Newsletter semanal ✉️</span>
      <span className="font-bold text-3xl">e fique por dentro das tecnologias mais atualizadas do mercado!</span>
      <span className="mt-2 font-semibold">Prometemos não te enviar nenhum spam 😘</span>
      <form action="" className="mt-16 flex flex-col items-center justify-center w-full max-w-md">
        <input className="border border-2 border-gray-400 py-4 px-4 rounded-md w-full max-w-lg" type="text" placeholder="email@dominio.com.br"/>
        <button className="mt-4 font-bold bg-white py-4 px-8 rounded-md hover:bg-gray-400/50 transition-colors" type="submit">Enviar</button>
      </form>
    </div>
    </>
  )
}