import { Button } from "./ui/button";
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';
import InfoSVG from '../svg/InfoSVG';
import { AccountData } from '../Api/GetAccountData';
import { CacheUser } from '@/Api/Cache';
import { Info } from "lucide-react";

export default function ClosedExersices(){
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
                    <hr className="border-t-2 border-primary w-3/4 mx-auto"></hr>
                </header>
            <h1 className="text-black text-5xl text-center px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <center>
                <InfoSVG classes='w-12 h-12' />
            </center>
            <Button variant="outline" className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center text-black">
                a. Lorem ipsum dolor
            </Button>
            <Button variant="outline" className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center text-black">
                b. sit amet consectetur adipisicing elit.
            </Button>
            <Button variant="outline" className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center text-black">
                c. Ipsum, ducimus minus.
            </Button>
            <Button variant="outline" className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center text-black">
                d. Aspernatur voluptas unde ut neque soluta!
            </Button>
            <div className="mx-auto">
          <Button className="w-32 bg-primary m-2">Proceed</Button>
        </div>
        </div>
    )
}