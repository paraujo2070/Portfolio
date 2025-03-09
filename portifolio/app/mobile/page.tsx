import Imagem from "../Componentes/image";

export default function mobile() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Planejamento Financeiro
      </h1>

      <h5 className="mb-8 text-2xl font-semibold tracking-tighter">
        Descrição do Sistema
      </h5>
      <p className="mb-4">
        {`O Sistema Especialista tem por objetivo trabalhar em todo o processo de planejamento financeiro de uma família. Nele serão armazenadas as seguintes informações do cliente: pessoais, profissionais, experiência em relação à sua educação financeira, patrimônio, proteção familiar, projetos de vida e aposentadoria. Como saída inicial desse processo será gerado um Diagnóstico Inicial de onde o cliente está e o quanto falta para o cliente alcançar a meta estabelecida. Também como parte do Sistema Especialista, serão apresentados gráficos que representam a capacidade de poupança dos clientes, projeções do quanto é preciso acumular para alcançar a independência financeira e projeções de manutenção do capital independente da expectativa de vida. Após a avaliação de todas as projeções, o sistema dará suporte a criação de um plano de ação que considera o perfil de investidor do cliente, seus objetivos, sua capacidade financeira e todas as informações coletadas ao longo do processo. Neste plano estará o passo a passo do que precisa ser feito pelo cliente, apoiado pelo planejador, para que ele realize seus objetivos dentro do contexto citado acima.`}
      </p>
      <Imagem></Imagem>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/paraujo2070/TCC"
        >
          <p className="ml-2 h-7">Ver Código</p>
        </a>
      </li>
    </div>
  );
}