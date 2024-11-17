import { Button } from "./ui/button";
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';
import ProtectedComponent  from "./ProtectedComponent";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';

export default function SingleMultiplayerSelect(){
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // Perform logout operations, then navigate
      navigate('/');
    };
    const handleExercisesM = () => {
        // Perform logout operations, then navigate
        navigate('/MultiExercises');
      };
      const handleExercisesS = () => {
        // Perform logout operations, then navigate
        navigate('/SingleExercises');
      };

    return(
        <div className="flex flex-col gap-16 w-[75%] mx-auto">
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
                <div className="vertical-align flex flex-col gap-32 justify-center">
                    <h1 className="text-black text-5xl text-center px-8">Exercises</h1>
                    <Button onClick={handleExercisesS} variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                        Singleplayer
                    </Button>
                    <Button onClick={handleExercisesM} variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                        Multiplayer
                    </Button>
                </div>
        </div>
    )
}