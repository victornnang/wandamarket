// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
        <p className="text-center text-lg text-gray-600">Votre plateforme e-commerce B2B/B2C</p>
      </header>

      <main className="p-6">
        {/* Barre de recherche */}
        <div className="flex justify-center my-6">
          <input
            type="text"
            placeholder="Rechercher un produit, une boutique..."
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
{/* Catégories populaires */}
<section>
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Catégories Populaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { nom: "Électronique", image: "https://via.placeholder.com/150" },
              { nom: "Mode", image: "https://via.placeholder.com/150" },
              { nom: "Maison & Déco", image: "https://via.placeholder.com/150" },
              { nom: "Santé & Beauté", image: "https://via.placeholder.com/150" },
              { nom: "Épicerie", image: "https://via.placeholder.com/150" },
              { nom: "Services", image: "https://via.placeholder.com/150" }
            ].map((cat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={cat.image} alt={cat.nom} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 text-center">{cat.nom}</h3>
                  </div>
              </div>
            ))}
          </div>
        </section>

        {/* À propos */}
        <section className="bg-indigo-50 p-6 rounded-xl mt-10 shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">À propos de WandaMarket</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            WandaMarket est une plateforme de commerce en ligne B2B et B2C dédiée à connecter vendeurs et acheteurs
            du monde entier. Grâce aux paiements par Mobile Money, la plateforme est accessible à tous, même dans
            les zones rurales. Notre objectif est de favoriser l’inclusion numérique et économique à travers l’Afrique et au-delà.
          </p>
        </section>
      </main>

      <footer className="bg-white text-center p-4 mt-6 text-sm text-gray-500 border-t">
        © 2025 WandaMarket — Tous droits réservés
      </footer>
    </div>
  );
}

 



 



