import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
// import Landing from './pages/Landing';
import AppRoutes from './routes/Route';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
