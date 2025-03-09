
export default function Home() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Portifólio de Pedro Araújo
      </h1>
      <p className="mb-4">
        {`Meu nome é Pedro Araújo, este é meu site portifólio, onde mostro meu trabalho, 
        com desenvolvimento de software, front-end, back-end e mobile`}
      </p>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Linguagens e frameworks
      </h1>

      <p className="mb-4">
        {`Java, JavaScript, TypeScript, Spring, AngularJS, Flutter, NextJS, Ionic, Firebase, PostgreSQL.`}
      </p>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Estatística GitHub
      </h1>
      <div className="self-center">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&username=paraujo2070" height="150" alt="languages graph" />
      </div>
    </section>
  );
}
