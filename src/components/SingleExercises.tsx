import { Button } from "./ui/button";
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';

export default function SingleExersices(){
    return(
        <div className="flex flex-col gap-6 w-[75%] mx-auto">
                <header>
                    <div className="flex flex-row gap-32 justify-center">
                    <div className='flex flex-row items-center justify-start gap-1'>
                            <MoneySVG classes='w-12 h-12 fill-primary' />
                            <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>120</p>
                        </div>
                        <div className='flex flex-row items-center justify-start gap-1 mr-4'>
                            <LightBulbSVG classes='w-12 h-12 fill-primary' />
                            <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>9300</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-primary w-1/1 mx-auto"></hr>
                </header>
            <h1 className="text-black text-5xl text-center px-8">Singleplayer Exercises</h1>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                English
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Mathematics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Physics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Informatics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                History
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Chemestry
            </Button>
        </div>
    )
}