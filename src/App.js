import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar Component */}
      <Navbar />
      {/* Form component */}
      <ContactForm />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
