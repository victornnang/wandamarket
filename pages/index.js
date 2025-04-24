// pages/index.js

export default function Home() {
  const categories = [
    { name: "Électronique", emoji: "📱" },
    { name: "Vêtements", emoji: "👕" },
    { name: "Maison", emoji: "🏠" },
    { name: "Alimentation", emoji: "🛒" },
  ];

  const shops = [
    { name: "TechExpress", logo: "https://ui-avatars.com/api/?name=TE&background=random" },
    { name: "ModeChic", logo: "https://ui-avatars.com/api/?name=MC&background=random" },
    { name: "MaisonDouce", logo: "https://ui-avatars.com/api/?name=MD&background=random" },
    { name: "BonGoût", logo: "https://ui-avatars.com/api/?name=BG&background=random" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
        <p className="text-center text-lg text-gray-600">Votre plateforme e-commerce B2B/B2C</p>
      </header>
      <section className="mb-10">
  <h3 className="text-xl font-semibold mb-4 text-indigo-600">Vous êtes vendeur ?</h3>
  <p className="text-md text-gray-700 mb-4 max-w-xl mx-auto">
    Rejoignez dès aujourd’hui notre communauté de vendeurs et exposez vos produits à une clientèle locale et internationale.
  </p>
  <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
    Créer un compte vendeur
  </button>
</section>

      <main className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue !</h2>
        <p className="text-md text-gray-700 mb-6">
          Vendez et achetez facilement avec Mobile Money. Accessible à tous, partout dans le monde.
        </p>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full max-w-md mx-auto p-2 border rounded-md mb-8"
        />

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Catégories populaires</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white p-4 rounded shadow text-center">
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <p>{cat.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Boutiques populaires</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {shops.map((shop, i) => (
              <div key={i} className="bg-white p-4 rounded shadow text-center">
                <img
                  src={shop.logo}
                  alt={shop.name}
                  className="mx-auto w-16 h-16 rounded-full mb-2"
                />
                <p>{shop.name}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">À propos de WandaMarket</h3>
          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            WandaMarket est une place de marché ouverte à tous les vendeurs souhaitant exposer
            leurs produits à une clientèle locale et internationale. Nous facilitons les paiements
            via Mobile Money pour simplifier vos transactions et soutenir l’économie digitale africaine.
          </p>
        </section>
      </main>

      <footer className="bg-white text-center p-4 mt-6 text-sm text-gray-500 border-t">
        © 2025 WandaMarket — Tous droits réservés
      </footer>
    </div>
  );
}




 



