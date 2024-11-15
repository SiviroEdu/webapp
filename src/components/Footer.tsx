import HomeSVG from "@/svg/HomeSVG";
import SettingsSVG from "@/svg/SettingsSVG";
import DumbbellsSVG from "../svg/DumbbellsSVG";
import ShoppingCartSVG from "@/svg/ShoppingCartSVG";

const Divider = () => (
    <div className="h-14 w-1 bg-primary rounded-full"></div>
);

export default function Footer() {
    return (
        <div className="flex flex-row items-center gap-4 px-8 p-4 rounded-full shadow-md">
            <HomeSVG
                classes="h-20 w-20 px-2 fill-primary hover:fill-primary/90 hover:scale-110 transition-transform duration-300"
            />
            <Divider />
            <ShoppingCartSVG
                classes="h-20 w-20 px-2 fill-primary hover:fill-primary/90 hover:scale-110 transition-transform duration-300"
            />
            <Divider />
            <SettingsSVG
                classes="h-20 w-20 px-2 fill-primary hover:fill-primary/90 hover:scale-110 transition-transform duration-300"
            />
            <Divider />
            <DumbbellsSVG
                classes="h-20 w-20 px-2 fill-primary hover:fill-primary/90 hover:scale-110 transition-transform duration-300"
            />
        </div>
    )
}