// pages/index.js

mport { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x300?text=Promo+1",
    text: "Livraison gratuite pour toute commande supérieure à 20 000 FCFA !",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x300?text=Promo+2",
    text: "Nouveaux produits électroniques disponibles !",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x300?text=Promo+3",
    text: "Rejoignez-nous et vendez en toute simplicité.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">WandaMarket</h1>
        <p className="text-center text-lg text-gray-600">Votre plateforme e-commerce B2B/B2C</p>
      </header>
{/* Carrousel */}
<div className="relative w-full overflow-hidden mt-4">
        <img
          src={slides[currentSlide].image}
          alt={Slide ${currentSlide + 1}}
          className="w-full h-64 object-cover transition-all duration-700"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
          {slides[currentSlide].text}
        </div>
      </div>

      <main className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue !</h2>
        <p className="text-md text-gray-700 mb-6">
          Vendez et achetez facilement avec Mobile Money. Accessible à tous, partout dans le monde.
        </p>
{/* Ajoute ici les sections : catégories, à propos, appel à l'action */}
</main>

<footer className="bg-white text-center p-4 mt-6 text-sm text-gray-500 border-t">
  © 2025 WandaMarket — Tous droits réservés
</footer>
</div>
);
}




