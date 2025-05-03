import Imagem from "../Componentes/image";
import Link from 'next/link';

export default function mobile() {
  return (
   
    <div className="leading-normal tracking-normal bg-f4f7f6 text-333 min-h-screen">

      <section className="py-16">
       
        <div className="w-full px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Sistema Especialista para Planejamento Financeiro</h1>

           
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descrição do Projeto</h2>
                <p className="text-gray-700 leading-relaxed">
                    O Sistema Especialista tem por objetivo trabalhar em todo o processo de planejamento financeiro de uma família. Nele serão armazenadas as seguintes informações do cliente: pessoais, profissionais, experiência em relação à sua educação financeira, patrimônio, proteção familiar, projetos de vida e aposentadoria. Como saída inicial desse processo será gerado um Diagnóstico Inicial de onde o cliente está e o quanto falta para o cliente alcançar a meta estabelecida.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Também como parte do Sistema Especialista, serão apresentados gráficos que representam a capacidade de poupança dos clientes, projeções do quanto é preciso acumular para alcançar a independência financeira e projeções de manutenção do capital independente da expectativa de vida. Após a avaliação de todas as projeções, o sistema dará suporte a criação de um plano de ação que considera o perfil de investidor do cliente, seus objetivos, sua capacidade financeira e todas as informações coletadas ao longo do processo. Neste plano estará o passo a passo do que precisa ser feito pelo cliente, apoiado pelo planejador, para que ele realize seus objetivos dentro do contexto citado acima.
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                 <h2 className="text-2xl font-semibold mb-4">Repositório de Código</h2>
                 <a href="https://github.com/paraujo2070/TCC" className="text-blue-600 hover:text-blue-800 transition duration-300 text-lg" target="_blank" rel="noopener noreferrer">https://github.com/paraujo2070/TCC</a>
            </div>

             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8">
                 <h2 className="text-2xl font-semibold mb-4">Visualização</h2>
                 <Imagem></Imagem>
             </div>

            <div className="text-center mt-8">
                <Link href="/#projetos" className="inline-block bg-gray-300 text-gray-800 px-6 py-3 rounded hover:bg-gray-400 transition duration-300">&larr; Voltar para Projetos</Link>
            </div>
        </div>
      </section>

    </div>

   
  );
}