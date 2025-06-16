import Link from 'next/link';
import Imginicio from './Componentes/imginicio';

export default function Home() {
  return (
    <section>
    <div className="leading-normal tracking-normal">
      <section id="sobre" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Sobre Mim</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="flex-shrink-0 mb-6 md:mb-0">
            <Imginicio></Imginicio>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">Olá! Sou Pedro Araújo, desenvolvedor de software com formação em Ciência da Computação e atualmente aprofundando meus conhecimentos em Ciência de Dados na Universidade Federal de Mato Grosso do Sul (EAD).</p>
              <p className="mb-4">Tenho experiência com desenvolvimento utilizando Java, JavaScript e Python, e busco sempre aprender novas tecnologias e aprimorar minhas habilidades para criar soluções eficientes e inovadoras.</p>
              <p>Estou entusiasmado com a área de Ciência de Dados e como ela pode ser aplicada para resolver problemas complexos e gerar insights valiosos.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Link href="/mobile" className="block bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer transform transition-transform duration-300 hover:translate-y-[-5px]">
              <img src="https://placehold.co/400x200/e0e0e0/333333?text=Planejamento+Financeiro" alt="Sistema Especialista" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sistema Especialista para Planejamento Financeiro</h3>
                <p className="text-gray-700 mb-4">Um sistema para auxiliar no planejamento financeiro familiar, gerando diagnósticos e planos de ação.</p>
              </div>
            </Link>


            <Link href="/front" className="block bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer transform transition-transform duration-300 hover:translate-y-[-5px]">
              <img src="https://placehold.co/400x200/e0e0e0/333333?text=SIS+TFD" alt="Projeto 2" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SISTFD</h3>
                <p className="text-gray-700 mb-4">Um sistema para auxiliar o pagamento e processamento de viagens para pacientes com Tratamento Fora de Domicilio.</p>
              </div>
            </Link>

            <Link href="/back" className="block bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer transform transition-transform duration-300 hover:translate-y-[-5px]">
              <img src="https://placehold.co/400x200/e0e0e0/333333?text=Projeto+3" alt="Projeto 3" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Nome do Projeto 3</h3>
                <p className="text-gray-700 mb-4">Projeto em andamento ...</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section id="habilidades" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Habilidades</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Java</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">JavaScript</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Python</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Ciência de Dados</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">SQL</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">HTML</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">CSS</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Tailwind CSS</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Spring Boot</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Node.js</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">React</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Git</span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-lg">Docker</span>
          </div>
        </div>
      </section>

      <section id="contato" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contato</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-center text-lg text-gray-700 mb-6">Interessado em colaborar ou apenas dizer olá? Entre em contato!</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:paraujo20700@gmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg">Email</a>
              <a href="https://linkedin.com/in/pedro-antonio-araújo" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/paraujo2070" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

    </div>
    </section>
  );
}
