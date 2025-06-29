import { useEffect, useState } from 'react';

type Joke = {
  id: number;
  setup: string;
  punchline: string;
};

function App() {
  const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchRandomJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/joke/random');
      const data = await response.json();
      setCurrentJoke(data);
      setShowPunchline(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Joke Generator</h1>
      {loading && <p>Loading...</p>}

      {!loading && currentJoke && (
        <>
          <h2>{currentJoke.setup}</h2>
          {showPunchline && <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{currentJoke.punchline}</p>}

          <div style={{ marginTop: '1rem' }}>
            {!showPunchline && (
              <button onClick={() => setShowPunchline(true)} style={{ marginRight: '0.5rem' }}>
                Show Punchline
              </button>
            )}
            <button onClick={fetchRandomJoke}>Next Joke</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
