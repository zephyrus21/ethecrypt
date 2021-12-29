import { Footer, Navbar, Services, Transactions, Welcome } from "./components";

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Welcome />
        <Navbar />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
