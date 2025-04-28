import Head from 'next/head';

export default function Guide() {
  return (
    <>
      <Head>
        <title>Guide - WandaMarket</title>
        <meta name="description" content="Guide d'utilisation de WandaMarket" />
      </Head>
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Guide d'utilisation</h1>
        <p>Bienvenue sur WandaMarket !</p>
        <p>Voici comment utiliser notre plateforme :</p>
        <ul style={{ marginTop: '15px' }}>
          <li>1. Inscrivez-vous ou connectez-vous à votre compte.</li>
          <li>2. Parcourez les différentes catégories de produits.</li>
          <li>3. Ajoutez les produits à votre panier.</li>
          <li>4. Passez votre commande facilement et rapidement.</li>
          <li>5. Suivez vos achats depuis votre espace personnel.</li>
        </ul>
        <p style={{ marginTop: '20px' }}>Si vous avez des questions, n'hésitez pas à consulter notre FAQ ou à contacter notre support.</p>
      </main>
    </>
  );
}
