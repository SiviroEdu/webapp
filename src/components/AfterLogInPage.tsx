
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component


const AfterLoginPage = (
  { SelectedFooterElement, SetSelectedFooterElement, children }: 
  { SelectedFooterElement: number, SetSelectedFooterElement: React.Dispatch<React.SetStateAction<number>>, children: any}) => {

  return (
    <div className="h-screen bg-background flex max-h-screen flex-col justify-between items-center text-white">
      <div className="h-full flex flex-col justify-between items-center">
        <Header />
        <div className="grow flex justify-center items-center text-lg">
          {children}
        </div>
        <Footer SelectedFooterElement={SelectedFooterElement} SetSelectedFooterElement={SetSelectedFooterElement}/>
      </div>
    </div>
  );
};

export default AfterLoginPage;
