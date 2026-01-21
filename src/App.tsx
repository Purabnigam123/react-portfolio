import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  CustomCursor,
} from './components';

function App() {
  return (
    <main className="relative bg-dark-bg text-gray-100 overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-accent-purple/5 pointer-events-none -z-10" />

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
  );
}

export default App;
