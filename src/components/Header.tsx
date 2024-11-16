import { CacheUser } from '@/Api/Cache';
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';
import { AccountData } from '../Api/GetAccountData';

export default function Header({
    SelectedFooterElement,
    SetSelectedFooterElement,
    AccountData
  }: {
    SelectedFooterElement: number;
    SetSelectedFooterElement: React.Dispatch<React.SetStateAction<number>>;
    AccountData: CacheUser | undefined
  }) {

    const HandleFooterSelect = (navNumber: number) => {
        console.log(`Navigating to: ${navNumber}`);
        SetSelectedFooterElement(navNumber);
    };

    return (
        <div className="flex flex-col gap-4 w-full px-10 py-3">
            <div className="flex flex-row gap-12 w-full">
                <div className={`flex flex-row text-primary grow justify-center ml-4`}>
                    <div className={`flex flex-col p-2 shadow-inner rounded-3xl transition-transform duration-300 ${SelectedFooterElement === 5 
                        ? " bg-input shadow-primary shadow-sm scale-110 "
                        : " hover:bg-input hover:shadow-primary shadow-sm hover:scale-110 "}`}
                        onClick={() => HandleFooterSelect(5)}>
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{AccountData?.name}</p>
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{"#" + AccountData?.id}</p>
                    </div>
                    <div className='grow'/>
                   
                </div>
                <div className="flex flex-col text-primary">
                    <div className='flex flex-row items-center justify-start gap-1'>
                        <MoneySVG classes='w-12 h-12 fill-primary' />
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{AccountData?.money}</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-1 mr-4'>
                        <LightBulbSVG classes='w-12 h-12 fill-primary' />
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>{AccountData?.experience}</p>
                    </div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-primary rounded-full"></div>
        </div>
    );
}
