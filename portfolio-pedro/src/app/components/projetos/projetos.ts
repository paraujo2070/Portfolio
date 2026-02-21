import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';

// Definimos como é a estrutura de um Projeto
interface Projeto {
  id: string;
  titulo: string;
  categoria: string;
  data: string;
  resumo: string;
  descricaoCompleta: string[]; // Um array para separar os parágrafos do texto longo
  tecnologias: string[];
  linkDemo?: string;
  linkRepo?: string;
}

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './projetos.html'
})
export class Projetos {
  
  // Aqui guardamos todos os seus projetos com as descrições ricas
  projetos: Projeto[] = [
    {
      id: 'dengue',
      titulo: 'Dengue Radar AI',
      categoria: 'Dados & IA',
      data: 'nov de 2025 – nov de 2025',
      resumo: 'Modelo preditivo de Machine Learning para antecipar o risco biológico de surtos de Dengue, integrando dados do SINAN e variáveis climáticas históricas.',
      descricaoCompleta: [
        'Desenvolvi uma solução com Ciência de Dados para prever surtos de Dengue na Zona da Mata Norte e Agreste de Pernambuco, integrando dados públicos de saúde (SINAN) e variáveis climáticas históricas (Open-Meteo).',
        'O Desafio: Os sistemas tradicionais de vigilância reagem aos casos notificados, muitas vezes com atraso. O objetivo foi criar um modelo preditivo capaz de antecipar o risco biológico de surto com semanas de antecedência, permitindo uma gestão preventiva de recursos.',
        'A Solução Técnica: Construí um pipeline robusto em Python (ETL) para ingestão de gigabytes de dados do DATASUS, com processamento em streaming (chunks) para contornar limitações de memória e formatos legados (.dbc e Parquet).',
        'Na etapa de Feature Engineering, criei variáveis de "Lag Biológico" (chuva e temperatura passadas) para ensinar ao modelo o ciclo de vida do vetor Aedes aegypti, e treinei um modelo híbrido autoregressivo usando XGBoost enriquecido com dados climáticos exógenos.',
        'Resultados: Em um teste cego para o ano de 2024 (ano de surto histórico por El Niño), o modelo híbrido superou o modelo puramente histórico, identificando corretamente o alto risco biológico. A análise revelou o "Delta da Eficiência", uma métrica inovadora para quantificar o impacto das ações de controle de vetores.'
      ],
      tecnologias: ['Python', 'Pandas', 'PySUS', 'Open-Meteo API', 'XGBoost', 'Streamlit']
    },
    {
      id: 'domus',
      titulo: 'Domus App',
      categoria: 'Mobile',
      data: 'fev de 2026 – fev de 2026',
      resumo: 'Aplicativo de gestão imobiliária com arquitetura Local Database offline-first, garantindo a privacidade total dos dados financeiros de pequenos investidores.',
      descricaoCompleta: [
        'Muitos proprietários de imóveis ainda dependem de planilhas complexas ou cadernos para gerir seus aluguéis. Para resolver isso, criei o Domus, um aplicativo focado na experiência do usuário e na privacidade total dos dados.',
        'O diferencial do Domus é sua arquitetura Local Database, garantindo que as informações financeiras sensíveis nunca saiam do dispositivo do usuário.',
        'Funcionalidades Chave incluem: Painel Financeiro com visão clara de Receita Mensal e Vacância; Controle de Contratos com alertas visuais de vencimento; Módulo de Recibos para geração automática em PDF prontos para envio via WhatsApp; e Backup Portátil com sistema de exportação/importação de dados.',
        'O projeto foi desenvolvido do zero, passando pela modelagem do banco de dados relacional até a implementação de interfaces responsivas e intuitivas.'
      ],
      tecnologias: ['Flutter', 'Dart', 'SQLite', 'Local Auth', 'Clean Code']
    },
    {
      id: 'sistfd',
      titulo: 'SISTFD',
      categoria: 'Web App',
      data: 'mai de 2025 – jun de 2025',
      resumo: 'Aplicação web para automação e otimização do fluxo de Tratamento Fora de Domicílio (TFD) na gestão de saúde pública.',
      descricaoCompleta: [
        'Este projeto nasceu da minha experiência direta trabalhando na Secretaria de Saúde, onde identifiquei as ineficiências do processo de Tratamento Fora de Domicílio (TFD). A gestão, totalmente manual e baseada em planilhas, causava lentidão, falta de transparência e dificultava o controle de agendamentos e pagamentos.',
        'Incomodado com essa realidade, decidi criar uma solução. Idealizei e desenvolvi o front-end do SISTFD, uma aplicação web projetada para automatizar e otimizar todo esse fluxo transformando um sistema suscetível a erros em uma ferramenta digital eficiente.',
        'Minhas contribuições no front-end envolveram o desenvolvimento de uma interface intuitiva com Angular para simplificar o gerenciamento de viagens e finanças. Implementei funcionalidades-chave, como um dashboard de agendamentos, filtros avançados e geração de relatórios de pagamento.',
        'Configurei também um pipeline de deploy automatizado com GitHub Actions, garantindo a entrega contínua de novas funcionalidades.'
      ],
      tecnologias: ['Angular (v19)', 'TypeScript', 'Tailwindcss', 'GitHub Actions', 'Firebase'],
      linkDemo: 'https://sistfd.web.app/',
      linkRepo: 'https://github.com/paraujo2070/TFDPublic'
    },
    {
      id: 'eleitoral',
      titulo: 'Inteligência Eleitoral',
      categoria: 'Dados & IA',
      data: 'nov de 2025 – nov de 2025',
      resumo: 'Sistema de análise de Boletins de Urna (Eleições 2024) para identificar padrões de comportamento eleitoral e detectar anomalias estatísticas via Machine Learning.',
      descricaoCompleta: [
        'Este projeto é uma ferramenta avançada de Data Science aplicada a dados eleitorais (Eleições Municipais 2024).',
        'O objetivo é transcender a totalização simples de votos, transformando dados brutos de Boletins de Urna (BU) em inteligência estratégica através de modelagem estatística e algoritmos de Machine Learning.',
        'O sistema processa dados granulares (por seção eleitoral) para identificar padrões latentes de comportamento do eleitorado, segmentar perfis de candidatos e detectar anomalias estatísticas na distribuição de votos, oferecendo uma visão profunda da dinâmica territorial e partidária.'
      ],
      tecnologias: ['Machine Learning', 'Data Science', 'Python']
    },
    {
      id: 'tcc',
      titulo: 'Sistema Especialista',
      categoria: 'Software',
      data: 'jan de 2019 – dez de 2019',
      resumo: 'Plataforma para gestão e diagnóstico de planejamento financeiro familiar, elaborando projeções de independência financeira e criação de planos de ação.',
      descricaoCompleta: [
        'Projeto associado à Faculdade Nova Roma. O Sistema Especialista tem por objetivo trabalhar em todo o processo de planejamento financeiro de uma família, armazenando dados pessoais, profissionais, patrimônio, proteção familiar e metas de aposentadoria.',
        'Como saída inicial, é gerado um Diagnóstico Inicial de onde o cliente está e o quanto falta para alcançar a meta. O sistema apresenta gráficos da capacidade de poupança, projeções de acumulação para independência financeira e manutenção do capital independente da expectativa de vida.',
        'Após a avaliação das projeções, o sistema dá suporte à criação de um plano de ação que considera o perfil de investidor do cliente. Neste plano estará o passo a passo do que precisa ser feito pelo cliente, apoiado pelo planejador, para realizar seus objetivos.'
      ],
      tecnologias: ['Java', 'Mobile', 'Gestão de Projetos'],
      linkRepo: 'https://github.com/paraujo2070/TCC'
    }
  ];

  // Variável que guarda qual projeto foi clicado para abrir o Modal
  projetoSelecionado: Projeto | null = null;

  abrirModal(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    document.body.style.overflow = 'hidden'; // Trava a rolagem da página no fundo
  }

  fecharModal() {
    this.projetoSelecionado = null;
    document.body.style.overflow = 'auto'; // Destrava a rolagem
  }
}