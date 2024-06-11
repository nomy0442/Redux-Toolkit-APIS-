import './App.css';
import {Outlet} from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="pb-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
