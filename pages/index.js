export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
        <p className="text-center text-lg text-gray-600">Votre plateforme e-commerce B2B/B2C</p>
      </header>

      <main className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue !</h2>
        <p className="text-md text-gray-700">
          Vendez et achetez facilement avec Mobile Money. Accessible à tous, partout dans le monde.
        </p>
      </main>

      <footer className="bg-white text-center p-4 mt-6 text-sm text-gray-500 border-t">
        © 2025 WandaMarket — Tous droits réservés
      </footer>
    </div>
  );
}


