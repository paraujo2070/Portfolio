import Link from "next/link";
import Imagem from "../Componentes/image";
import ImagemSISTFD from "../Componentes/imagemsistfd";

export default function frontend() {
    return (
     <div className="leading-normal tracking-normal bg-f4f7f6 text-333 min-h-screen">

      <section className="py-16">
       
        <div className="w-full px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Sistema de gerenciamento para pagamento e viagens de pacientes com tratamento fora do domício</h1>

           
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descrição do Projeto</h2>
                <p className="text-gray-700 leading-relaxed">
                    Este projeto nasceu da minha experiência direta trabalhando na Secretaria de Saúde, onde identifiquei as ineficiências do processo de Tratamento Fora de Domicílio (TFD). A gestão, totalmente manual e baseada em planilhas, causava lentidão, falta de transparência e dificultava o controle de agendamentos e pagamentos.
                    Incomodado com essa realidade, decidi criar uma solução. Idealizei e desenvolvi o front-end do SISTFD, uma aplicação web projetada para automatizar e otimizar todo esse fluxo. O objetivo é transformar um sistema manual e suscetível a erros em uma ferramenta digital, eficiente e centralizada.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Desenvolvi uma interface intuitiva com Angular para simplificar o gerenciamento de viagens e finanças.
                    Implementei funcionalidades-chave, como um dashboard de agendamentos, filtros de busca avançados e um sistema para geração de relatórios de pagamento.
                    Configurei um pipeline de deploy automatizado com GitHub Actions, garantindo a entrega contínua de novas funcionalidades.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Tecnologias utilizadas:
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Front-end: Angular (v19), TypeScript, HTML5, Tailwindcss
                    Automação/CI/CD: GitHub Actions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Automação/CI/CD: GitHub Actions.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                Live Demo: <a href="https://sistfd.web.app/" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg" target="_blank" rel="noopener noreferrer">https://sistfd.web.app/</a>
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                 <h2 className="text-2xl font-semibold mb-4">Repositório de Código</h2>
                 <a href="https://github.com/paraujo2070/TFDPublic" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg" target="_blank" rel="noopener noreferrer">https://github.com/paraujo2070/TFDPublic</a>
            </div>

             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                 <h2 className="text-2xl font-semibold mb-4">Visualização</h2>
                 <ImagemSISTFD></ImagemSISTFD>
             </div>

            <div className="text-center mt-8">
                <Link href="/#projetos" className="inline-block bg-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-400 transition duration-300">&larr; Voltar para Projetos</Link>
            </div>
        </div>
      </section>

    </div>
    );
  }