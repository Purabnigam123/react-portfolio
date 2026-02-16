import { useEffect, useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  CustomCursor,
} from "./components";

import AuroraBackground from "./components/AuroraBackground";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShowLoader(false), 3000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  // Loader screen
  if (showLoader) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark-bg text-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="loader-ring" />
          <p className="loader-text">Welcome to my portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Aurora Animated Background */}
      <AuroraBackground />

      <main className="relative bg-dark-bg text-gray-100 overflow-x-hidden z-10">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Main Navigation */}
        <Navbar />

        {/* Page Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;
