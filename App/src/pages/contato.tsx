import { Header } from "../components/Header"

export default function Contato() {
  return (
    <div>
      <Header/>
      <section className="flex flex-col items-center mt-14">
        <h1 className="lg:text-4xl text-xl font-bold">Mande uma mensagem :)</h1>
        <form action="" className="mt-8 flex gap-4 flex-col items-center max-w-lg w-[80%]">
          <input className="border-2 border-gray-400 py-4 px-4 rounded-md w-[80%] max-w-lg" type="text" placeholder="Nome" />
          <input className="border-2 border-gray-400 py-4 px-4 rounded-md w-[80%] max-w-lg" type="text" placeholder="E-mail para resposta" />
          <textarea placeholder="Sua mensagem" className="border-2 border-gray-400 py-4 px-4 rounded-md w-[80%] max-w-lg" name="" id="" cols={30} rows={10}></textarea>
          <button className="border-black border-2 mt-4 font-bold bg-white py-4 px-14 rounded-md hover:bg-gray-400/50 transition-colors">Enviar</button>
        </form>
      </section>
    </div>
  )
}