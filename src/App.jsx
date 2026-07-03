import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';

// Components
import BackgroundCanvas from './components/BackgroundCanvas';
import Loader from './components/Loader';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    // Control Lenis scrolling state based on loader presence
    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
    };
  }, [loading]);

  return (
    <Router>
      {/* Immersive ambient layers */}
      <BackgroundCanvas />
      
      {/* Boot sequence loader */}
      {loading && <Loader onReady={() => setLoading(false)} />}

      {/* Main app navigation & routes */}
      {!loading && (
        <>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </>
      )}
    </Router>
  );
}
