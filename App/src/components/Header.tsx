import Link from "next/link";

export function Header() {
  return (
    <header className="py-3 px-4 shadow-md bg-white">
      <div className="flex items-center justify-between w-full max-w-5xl m-auto">
        <Link href="/">
          <h1 className="font-black text-4xl cursor-pointer">MyTech</h1>
        </Link>
        <div className="flex items-center gap-12">
          <nav>
            <ul className="flex gap-4 lg:gap-12">
              <Link href="/newsletter">
                <li className="font-semibold text-xl hover:scale-110 transition-transform hidden lg:inline">
                  Newsletter
                </li>
              </Link>
              <Link href="/contato">
                <li className="font-semibold text-xl hover:scale-110 transition-transform hidden lg:inline">
                  Contato
                </li>
              </Link>
            </ul>
          </nav>
          <img className="cursor-pointer" src="/assets/sun.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
