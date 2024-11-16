import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Models from "./Models"
import { Button } from "./ui/button"
import LightBulbSVG from "@/svg/LightBulbSVG"
import UserItems from "./UserItems"
import { ScrollArea } from "@/components/ui/scroll-area"



export default function LeaderBoard() {
    return (
        <ScrollArea className="h-96 rounded-md border">
            <div className="flex flex-col gap-8">
                <Accordion type="single" collapsible className="text-primary">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-10 flex flex-row border-2 px-8 rounded-3xl">
                            <p>#1</p>
                            <p>Is it accessible?</p>
                            <p>LVL 140</p>
                        </AccordionTrigger>
                        <AccordionContent className="align-middle items-center justify-center">
                            <UserItems/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="text-primary">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-10 flex flex-row border-2 px-8 rounded-3xl">
                            <p>#2</p>
                            <p>Is it accessible?</p>
                            <p>LVL 140</p>
                        </AccordionTrigger>
                        <AccordionContent className="align-middle items-center justify-center">
                            <UserItems/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="text-primary">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-10 flex flex-row border-2 px-8 rounded-3xl">
                            <p>#3</p>
                            <p>Is it accessible?</p>
                            <p>LVL 140</p>
                        </AccordionTrigger>
                        <AccordionContent className="align-middle items-center justify-center">
                            <UserItems/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="text-primary">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-10 flex flex-row border-2 px-8 rounded-3xl">
                            <p>#1</p>
                            <p>Is it accessible?</p>
                            <p>LVL 140</p>
                        </AccordionTrigger>
                        <AccordionContent className="align-middle items-center justify-center">
                            <UserItems/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="text-primary">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="gap-10 flex flex-row border-2 px-8 rounded-3xl">
                            <p>#1</p>
                            <p>Is it accessible?</p>
                            <p>LVL 140</p>
                        </AccordionTrigger>
                        <AccordionContent className="align-middle items-center justify-center">
                            <UserItems/>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            


            </div>
        </ScrollArea>
    )
}