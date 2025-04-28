import Link from 'next/link';

const produits = [
  { id: 1, nom: 'Produit 1', description: 'Description du produit 1' },
  { id: 2, nom: 'Produit 2', description: 'Description du produit 2' },
  { id: 3, nom: 'Produit 3', description: 'Description du produit 3' },
];

export default function Produits() {
  return (
    <div>
      <h1>Nos Produits</h1>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            {/* Utiliser les backticks ` pour l'interpolation */}
            <Link href={`/produit/${produit.id}`}>
              {produit.nom}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}



