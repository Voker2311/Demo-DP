import './App.css';
import Footer from './Footer';
import Header from "./Header";
import LoginAs from './LoginAs';

function App() {
  return (
    <div className="app">
    {/* Header componenet */}
      <div>
      <Header />
      </div>

         <div>
         <LoginAs className="loginAs" />
         </div>

        
    <div>
    <Footer />
    </div>
        
    </div>
  );
}

export default App;

// image = https://cdn4.vectorstock.com/i/1000x1000/29/73/cross-health-dental-care-logo-design-inspiration-vector-30732973.jpg