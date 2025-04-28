// pages/index.js

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
        <p className="text-center text-lg text-gray-600">Votre plateforme e-commerce B2B/B2C</p>
      </header>

      <main className="p-6 space-y-12 flex-grow">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Bienvenue !</h2>
          <p className="text-md text-gray-700">
            Vendez et achetez facilement avec Mobile Money. Accessible à tous, partout dans le monde.
          </p>
        </section>
        <section className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Rechercher un produit, une catégorie..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4 text-center">Catégories Populaires</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Électronique", "Mode", "Maison", "Beauté", "Alimentation", "Services"].map((cat) => (
              <div key={cat} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition">
                {cat}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-indigo-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">À propos de WandaMarket</h3>
          <p className="text-gray-700">
            WandaMarket est une plateforme inclusive qui relie les vendeurs et les acheteurs via une interface simple,
            fiable et sécurisée. Nous croyons en un commerce accessible à tous.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-center mb-6">Ce que disent nos utilisateurs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Amina",
                feedback: "WandaMarket m’a permis de vendre mes créations à l'international facilement !",
              },
              {
                name: "Eric",
                feedback: "Simple, rapide et efficace. Paiement mobile au top !",
              },
              {
                name: "Claire",
                feedback: "Très pratique pour trouver des produits locaux sans me déplacer.",
              },
            ].map(({ name, feedback }) => (
              <div key={name} className="bg-gray-50 rounded p-4 border text-center">
                <p className="italic text-gray-700">"{feedback}"</p>
                <p className="mt-2 font-semibold text-indigo-600">— {name}</p>
              </div>
            ))}
          </div>
        </section><section className="bg-indigo-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-center mb-4">FAQ – Questions fréquentes</h3>
          <div className="space-y-4">
            {[
              {
                q: "Comment créer un compte vendeur ?",
                a: "Cliquez sur 'S'inscrire', puis choisissez 'Vendeur'. Remplissez les informations demandées.",
              },
              {
                q: "Quels moyens de paiement sont acceptés ?",
                a: "Mobile Money, carte bancaire, et autres méthodes selon votre pays.",
              },
              {
                q: "Est-ce que la plateforme est sécurisée ?",
                a: "Oui, nous utilisons des protocoles de sécurité avancés pour protéger vos données et transactions.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded p-4 shadow-sm">
                <p className="font-semibold text-indigo-700">{q}</p>
                <p className="text-gray-700">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white border-t p-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">WandaMarket</h4>
            <p>Marketplace gabonaise pour tous. Paiement sécurisé par Mobile Money.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Liens utiles</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">Devenir vendeur</a></li>
              <li><a href="#" className="hover:underline">Support client</a></li>
            </ul>
          </div>
          <div>
          <h4 className="font-bold mb-2">Informations</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:underline">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Suivez-nous</h4>
            <div className="flex space-x-3">
              <a href="#"><span>Facebook</span></a>
              <a href="#"><span>Instagram</span></a>
              <a href="#"><span>Twitter</span></a>
            </div>
          </div>
        </div>
        <p className="text-center mt-6 text-xs text-gray-400">© 2025 WandaMarket — Tous droits réservés.</p>
      </footer>
    </div>
 );
}