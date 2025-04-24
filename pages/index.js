// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
  <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
  <p className="text-center text-lg text-gray-600 mb-4">Votre plateforme e-commerce B2B/B2C</p>

  <div className="flex justify-center">
    <input
      type="text"
      placeholder="Rechercher un produit..."
      className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  </div>
</header>


      <main className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue !</h2>
        <p className="text-md text-gray-700 mb-8">
          Vendez et achetez facilement avec Mobile Money. Accessible à tous, partout dans le monde.
        </p>
        <section>
          <h3 className="text-xl font-semibold mb-4">Produits en vedette</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Téléphones</h4>
              <p className="text-gray-600">Smartphones de dernière génération.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Vêtements</h4>
              <p className="text-gray-600">Mode homme, femme et enfants.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold">Électroménager</h4>
              <p className="text-gray-600">Matériel pratique pour votre maison.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white text-center p-4 mt-6 text-sm text-gray-500 border-t">
        © 2025 WandaMarket — Tous droits réservés
      </footer>
    </div>
  );
}

 



 



