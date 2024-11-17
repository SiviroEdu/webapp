import { Button } from "./ui/button";
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';
import InfoSVG from '../svg/InfoSVG';
import { AccountData } from '../Api/GetAccountData';
import { CacheUser } from '@/Api/Cache';
import { Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function OpenExersices(){
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
            <h1 className="text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <br />
            <center>
            <Accordion type="single" collapsible className="w-[50%]">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Expand</AccordionTrigger>
                    <AccordionContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed necessitatibus repellat temporibus quo. Neque magni dolore consequatur modi optio adipisci? Eveniet, accusantium aspernatur mollitia atque praesentium corrupti sunt provident.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </center>

            <center>
                <Textarea className="w-[50%]"/>
                <Button className="w-32 bg-primary m-2">Proceed</Button>
            </center>
            
        </div>
    )
}