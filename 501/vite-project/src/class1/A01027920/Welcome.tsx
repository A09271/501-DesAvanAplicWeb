import { useState, FormEvent } from 'react';
import { Greeting } from './Greetings';
import { Link } from 'react-router-dom';

function CatGreeting() {
  const [name, setName] = useState<string>('');
  const [catImageUrl, setCatImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const randomGreeting: string = Greeting(name);
    const width = 350;
    const height = 350;

    setLoading(true);

    const imageUrl = `https://cataas.com/cat/says/${encodeURIComponent(
      randomGreeting
    )}?width=${width}&height=${height}`;

    const response = await fetch(imageUrl);
    if (response.ok) {
      setCatImageUrl(imageUrl);
    } else {
      console.error('Failed to fetch the cat image');
    }

    setLoading(false);
  };

  return (
    // Use the CSS class for the container div
    <div className="cat-greeting-container">
      {/* Use the CSS class for the title */}
      <h3 className="cat-greeting-title">
        Welcome
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          {/* Use the CSS class for the input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="cat-greeting-input"
          />
        </label>
        {/* Use the CSS class for the button */}
        <button
          type="submit"
          className="cat-greeting-button"
        >
          Recibir saludo
        </button>
      </form>
      {loading ? (
        // Use the CSS class for the loading text
        <p className="cat-greeting-loading">Loading...</p>
      ) : (
        catImageUrl && (
          // Use the CSS class for the image
          <img
            src={catImageUrl}
            alt="CatSays"
            className="cat-greeting-image"
          />
        )
      )}
      <br />
      <Link
        to="/A01027920" // Pointing back to the home route
        className="buttonlink" // This class is already in the CSS
      >
        Regresar a menu
      </Link>
    </div>
  );
}

export default CatGreeting;
