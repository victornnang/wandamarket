import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>À propos - WandaMarket</title>
        <meta name="description" content="En savoir plus sur WandaMarket, notre mission et notre équipe." />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>À propos de WandaMarket</h1>
        <p>Bienvenue sur WandaMarket !</p>
        <p>
          WandaMarket est une plateforme e-commerce créée pour connecter vendeurs et acheteurs du monde entier,
          en mettant l'accent sur la qualité, la diversité et l'accessibilité.
        </p>
        <p>
        Notre mission est de donner à chacun l'opportunité d'acheter et de vendre facilement,
          tout en soutenant les économies locales et en encourageant l'innovation.
        </p>
        <p>
          Merci de faire partie de notre aventure !
        </p>
      </main>
    </>
  );
}
