
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
import MoneySVG from "@/svg/MoneySVG"
import { useEffect, useState } from "react"
import { CheckToken } from "@/Api/Token"
import { AccountData, GetAccountData } from "@/Api/GetAccountData"
import { CacheUser, SetCacheUser } from "@/Api/Cache"
import { useNavigate } from "react-router-dom"

export default function Home(){

  const navigate = useNavigate();
  const [accData, setAccData] = useState<CacheUser | undefined>(undefined);

  useEffect(() => {
    const initialize = async () => {
      await CheckToken();
      const data: AccountData | false = await GetAccountData();

      if (data === false) {
        navigate('/login');
      } else {
        const userCache: CacheUser = {
          money: data.coins,
          experience: data.bulbs,
          name: data.shkolo_username,
          id: data.id,
          level: data.level,
          next_level_coins: data.next_level_coins
        };
        SetCacheUser(userCache);
        setAccData(userCache)
      }
    };

    initialize();

    return () => {
      console.log('Component unmounted');
    };
  }, []);


  return (
    <div>

      <Carousel className="w-full max-w-xs">
        <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardHeader className="!h-full flex !justify-center !items-center">
                      <CardTitle className="text-3xl text-primary">{`LVL ${accData?.level}`}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">
                      <Models classes="!h-96 !w-96"/>
                    </span>
                  </CardContent>
                </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="text-black text-2xl font-black"/>
        <CarouselNext className="text-black text-2xl font-black"/>
      </Carousel>
          <div className="!h-full flex !justify-center !items-center">
          <Button variant="outline" className="flex !h-full flex-row text-primary text-2xl border-2 border-primary items-center text-center justify-center">
              <div className='flex flex-row !w-full items-center justify-center gap-2'>
                  <MoneySVG classes='!w-10 !h-10 fill-primary' />
                  <p className='text-base sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl'>{accData?.next_level_coins}</p>
              </div>
          </Button>
      </div>
    </div>
    )
}