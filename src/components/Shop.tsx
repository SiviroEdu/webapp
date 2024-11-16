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
  

export default function Shop(){
    return (
        <Carousel className="w-full max-w-xs">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardHeader className="!h-full flex !justify-center !items-center">
                    <CardTitle className="text-3xl text-primary">Girl</CardTitle>
                </CardHeader>

                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Models/>
                  </span>
                </CardContent>

                <CardFooter className="!h-full flex !justify-center !items-center">
                
                    <div className="!h-full flex !justify-center !items-center">
                        <Button variant="outline" className="flex !h-full flex-row text-primary text-2xl border-2 border-primary items-center text-center justify-center">
                            <div className='flex flex-row !w-full items-center justify-center gap-2'>
                                <LightBulbSVG classes='!w-10 !h-10 fill-primary' />
                                <p className='text-base sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl'>9300</p>
                            </div>
                        </Button>
                    </div>

                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="text-black text-2xl font-black"/>
      <CarouselNext className="text-black text-2xl font-black"/>
    </Carousel>
    )
}