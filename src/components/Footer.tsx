import HomeSVG from "@/svg/HomeSVG";
import SettingsSVG from "@/svg/SettingsSVG";
import DumbbellsSVG from "../svg/DumbbellsSVG";
import ShoppingCartSVG from "@/svg/ShoppingCartSVG";


const Divider = () => (
    <div className="h-14 w-1 bg-primary rounded-full"></div>
);


// Footer Component
export default function Footer({
    SelectedFooterElement,
    SetSelectedFooterElement,
  }: {
    SelectedFooterElement: number;
    SetSelectedFooterElement: React.Dispatch<React.SetStateAction<number>>;
  }) {
    const HandleFooterSelect = (navNumber: number) => {
      console.log(`Navigating to: ${navNumber}`);
      SetSelectedFooterElement(navNumber);
    };
  
    return (
      <div className="flex flex-row items-center gap-4 px-8 p-4 rounded-full shadow-md">
        <div
          className={`p-2 shadow-inner rounded-l-2xl transition-transform duration-300 ${
            SelectedFooterElement === 1
              ? "bg-input shadow-primary scale-110"
              : "hover:bg-input hover:shadow-primary hover:scale-110"
          }`}
          onClick={() => HandleFooterSelect(1)}
        >
          <HomeSVG classes="h-20 w-20 px-2 fill-primary transition-transform duration-300" />
        </div>
        <Divider />
        <div
          className={`p-2 shadow-inner transition-transform duration-300 ${
            SelectedFooterElement === 2
              ? "bg-input shadow-primary scale-110"
              : "hover:bg-input hover:shadow-primary hover:scale-110"
          }`}
          onClick={() => HandleFooterSelect(2)}
        >
          <ShoppingCartSVG classes="h-20 w-20 px-2 fill-primary transition-transform duration-300" />
        </div>
        <Divider />
        <div
          className={`p-2 shadow-inner transition-transform duration-300 ${
            SelectedFooterElement === 3
              ? "bg-input shadow-primary scale-110"
              : "hover:bg-input hover:shadow-primary hover:scale-110"
          }`}
          onClick={() => HandleFooterSelect(3)}
        >
          <SettingsSVG classes="h-20 w-20 px-2 fill-primary transition-transform duration-300" />
        </div>
        <Divider />
        <div
          className={`p-2 shadow-inner rounded-r-2xl transition-transform duration-300 ${
            SelectedFooterElement === 4
              ? "bg-input shadow-primary scale-110"
              : "hover:bg-input hover:shadow-primary hover:scale-110"
          }`}
          onClick={() => HandleFooterSelect(4)}
        >
          <DumbbellsSVG classes="h-20 w-20 px-2 fill-primary transition-transform duration-300" />
        </div>
      </div>
    );
  }
  