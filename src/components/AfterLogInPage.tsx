
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component

const AfterLoginPage = ({ children }:{ children: any}) => {
  return (
    <div className="h-screen flex max-h-screen flex-col justify-between text-white">
      <div className="h-full flex flex-col justify-between items-center">
        <Header />
        <div className="grow flex justify-center items-center text-lg">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AfterLoginPage;
