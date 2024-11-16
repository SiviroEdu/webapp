import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';

export default function Header() {
    return (
        <div className="flex flex-col gap-4 w-full px-10 py-3">
            <div className="flex flex-row gap-12 w-full">
                <div className="flex flex-col text-primary grow justify-center ml-4">
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Cool Name</p>
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>#16</p>
                </div>
                <div className="flex flex-col text-primary">
                    <div className='flex flex-row items-center justify-start gap-1'>
                        <MoneySVG classes='w-12 h-12 fill-primary' />
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>9300</p>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-1 mr-4'>
                        <LightBulbSVG classes='w-12 h-12 fill-primary' />
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>120</p>
                    </div>
                </div>
            </div>
            <div className="h-0.5 w-full bg-primary rounded-full"></div>
        </div>
    );
}
