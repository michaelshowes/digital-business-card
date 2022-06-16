import './App.scss';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import profile from './data/profile.json'

function App() {
  return (
    <div className="container">
      <div className="profile">
        <Header />
        <Details />
        <Footer />
      </div>
    </div>
  );
}

export default App;
