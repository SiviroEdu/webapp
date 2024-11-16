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
import { ScrollArea } from "@radix-ui/react-scroll-area"

export default function UserItems() {
    return (
        <Carousel className="w-full max-w-xs">
            
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card>
                            <CardHeader className="!h-full flex !justify-center !items-center">
                                <CardTitle className="text-xl text-primary">Girl</CardTitle>
                            </CardHeader>

                            <CardContent className=" flex aspect-square items-center justify-center">
                                <span className="text-4xl font-semibold">
                                    <Models classes="!h-96 !w-96"/>
                                </span>
                            </CardContent>

                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="text-black text-2xl font-black" />
            <CarouselNext className="text-black text-2xl font-black" />
        </Carousel>
    )
}