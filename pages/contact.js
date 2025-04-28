import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - WandaMarket</title>
        <meta name="description" content="Contactez-nous pour toute question ou information." />
      </Head>

      <div className="contact-container">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour vous aider ! Si vous avez des questions ou des préoccupations, n'hésitez pas à nous envoyer un message.</p>

        <form action="#" method="POST">
          <div>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>

        <div className="additional-info">
          <h2>Informations supplémentaires</h2>
          <p>Email : support@wandamarket.com</p>
          <p>Téléphone : +241 123 456 789</p>
        </div>
      </div>
      <style jsx>{`
        .contact-container {
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
        }
        form div {
          margin-bottom: 15px;
        }
        label {
          display: block;
          font-weight: bold;
        }
 input, textarea {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ddd;
        }
        button {
          background-color: #007bff;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        .additional-info {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
