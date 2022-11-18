import { Header } from "../components/Header";

export default function Newsletter() {
  return (
    <>
    <Header/>
    <div className="mt-16 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center px-4">
        <span className="text-center font-bold text-lg lg:text-3xl">Se inscreva em nossa Newsletter semanal</span>
        <span className="text-center font-bold text-lg lg:text-3xl">e fique por dentro das tecnologias mais atualizadas do mercado!</span>
        <span className="text-center mt-2 font-semibold">Prometemos não te enviar nenhum spam 😘</span>
      </div>
      <form action="" className="mt-16 flex flex-col items-center justify-center w-full max-w-md">
        <input className="border-2 border-gray-400 py-4 px-4 rounded-md w-[80%] max-w-lg" type="text" placeholder="email@dominio.com.br"/>
        <button className="mt-4 font-bold bg-white py-4 px-8 rounded-md hover:bg-gray-400/50 transition-colors" type="submit">Enviar</button>
      </form>
    </div>
    </>
  )
}