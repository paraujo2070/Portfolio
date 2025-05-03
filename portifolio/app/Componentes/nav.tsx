import Link from "next/link";

export function Navbar() {
    return (
      <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      {/* Mantido w-full px-4 para preencher a largura e adicionar padding, como discutimos anteriormente */}
      <div className="w-full px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Pedro Araújo</div>
        <nav>
          <ul className="flex space-x-4">
            {/* Usando Link e definindo href para apontar para a página inicial (/) + a âncora */}
            <li><Link href="/#sobre" className="text-gray-700 hover:text-blue-600 transition duration-300">Sobre Mim</Link></li>
            <li><Link href="/#projetos" className="text-gray-700 hover:text-blue-600 transition duration-300">Projetos</Link></li>
            <li><Link href="/#habilidades" className="text-gray-700 hover:text-blue-600 transition duration-300">Habilidades</Link></li>
            <li><Link href="/#contato" className="text-gray-700 hover:text-blue-600 transition duration-300">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}
