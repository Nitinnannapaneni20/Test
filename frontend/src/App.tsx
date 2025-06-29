import { useEffect, useState } from 'react';
import './App.css';


type Joke = {
 id: number;
 setup: string;
 punchline: string;
};


function App() {
 const [currentJoke, setCurrentJoke] = useState<Joke | null>(null);
 const [showPunchline, setShowPunchline] = useState(false);
 const [loading, setLoading] = useState(true);
 const [fadeIn, setFadeIn] = useState(false);
 const [punchlineRevealed, setPunchlineRevealed] = useState(false);


 const fetchRandomJoke = async () => {
   setLoading(true);
   setFadeIn(false);
   setShowPunchline(false);
   setPunchlineRevealed(false);


   try {
     const response = await fetch('http://localhost:8000/api/joke/random');
     const data = await response.json();


     // Simulate minimum loading time for smooth UX
     await new Promise(resolve => setTimeout(resolve, 800));


     setCurrentJoke(data);
     setTimeout(() => setFadeIn(true), 100);
   } catch (error) {
     console.error('Error fetching joke:', error);
   } finally {
     setLoading(false);
   }
 };


 const revealPunchline = () => {
   setShowPunchline(true);
   setTimeout(() => setPunchlineRevealed(true), 50);
 };


 useEffect(() => {
   fetchRandomJoke();
 }, []);


 return (
   <div className="app">
     <div className="background-elements">
       <div className="floating-shapes">
         <div className="shape shape-1"></div>
         <div className="shape shape-2"></div>
         <div className="shape shape-3"></div>
         <div className="shape shape-4"></div>
         <div className="shape shape-5"></div>
       </div>
     </div>


     <div className="container">
       <header className="header">
         <h1 className="title">
           <span className="title-emoji">😂</span>
           Joke Generator
           <span className="title-emoji">🎭</span>
         </h1>
         <div className="subtitle">Premium Comedy Experience</div>
       </header>


       <div className="joke-container">
         {loading && (
           <div className="loading-container">
             <div className="loading-spinner">
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
               <div className="spinner-ring"></div>
             </div>
             <p className="loading-text">Crafting the perfect joke...</p>
           </div>
         )}


         {!loading && currentJoke && (
           <div className={`joke-content ${fadeIn ? 'fade-in' : ''}`}>
             <div className="setup-container">
               <h2 className="setup">{currentJoke.setup}</h2>
             </div>


             {showPunchline && (
               <div className={`punchline-container ${punchlineRevealed ? 'revealed' : ''}`}>
                 <div className="punchline-divider"></div>
                 <p className="punchline">{currentJoke.punchline}</p>
                 <div className="laugh-emojis">
                   <span>😄</span>
                   <span>🤣</span>
                   <span>😂</span>
                 </div>
               </div>
             )}


             <div className="button-container">
               {!showPunchline && (
                 <button
                   className="btn btn-primary reveal-btn"
                   onClick={revealPunchline}
                 >
                   <span className="btn-text">Reveal Punchline</span>
                   <div className="btn-glow"></div>
                 </button>
               )}


               <button
                 className="btn btn-secondary next-btn"
                 onClick={fetchRandomJoke}
               >
                 <span className="btn-text">Next Joke</span>
                 <div className="btn-glow"></div>
               </button>
             </div>
           </div>
         )}
       </div>
     </div>
   </div>
 );
}

export default App;
