import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Détail du produit</h1>
      <p>Voici les informations du produit avec l'identifiant : <strong>{id}</strong></p>
      {/* Plus tard, tu pourras ajouter ici les vraies informations du produit depuis une base de données */}
    </div>
  );
};
