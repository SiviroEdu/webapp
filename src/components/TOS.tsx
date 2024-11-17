import CappaSVG from '../svg/CappaSVG.tsx';
import LogoSVG from '../svg/LogoSVG.tsx';
import LoginComponent from './LoginComponent.tsx';
import { Button } from "@/components/ui/button"


const Divider = () => (
  <div className="h-14 w-1 bg-primary rounded-full"></div>
);


const Login = () => {
    return (
      <div className="h-screen flex max-h-screen flex-col justify-between text-white">
        <div className="h-full flex flex-col items-center justify-start">
            <div className='w-[75%]'>
                <header className='flex justify-center space-x-0 flex-row h-[25%] p-16 mx-auto'>
                    <center className='flex justify-center space-x-0 flex-row'>
                    <CappaSVG classes='w-12 h-12'/>
                    <Divider/>
                    <LogoSVG classes='w-[80%] h-12'/>
                    </center>
                </header>
                <h2 className="text-center text-4xl text-black align-middle">
                Terms of service
                </h2>
                <hr className="border-t-2 border-primary w-3/4 mx-auto"></hr>
            </div>
            <div className='text-left w-[50%]'>
                <h2 className='text-3xl font-bold text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Sed in nibh felis</h2>
                <br />
                <p className='text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate pariatur ea sunt assumenda, sequi modi dignissimos doloribus non autem totam repellat nihil fugit doloremque nesciunt repellendus voluptatibus omnis eveniet molestias?
                </p>
                <br />
                <p className='text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate pariatur ea sunt assumenda, sequi modi dignissimos doloribus non autem totam repellat nihil fugit doloremque nesciunt repellendus voluptatibus omnis eveniet molestias?
                </p>
                <br />
                <ul className='list-disc ml-8'>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                </ul>
                <p className='text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate pariatur ea sunt assumenda, sequi modi dignissimos doloribus non autem totam repellat nihil fugit doloremque nesciunt repellendus voluptatibus omnis eveniet molestias?
                </p>
                <br />
                <h2 className='text-3xl font-bold text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Sed in nibh felis</h2>
                <br />
                <ul className='list-disc ml-8'>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                </ul>
                <br />
                <h2 className='text-3xl font-bold text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Sed in nibh felis</h2>
                <br />
                <ul className='list-disc ml-8'>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                </ul>
                <br />
                <p className='text-black text-left text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate pariatur ea sunt assumenda, sequi modi dignissimos doloribus non autem totam repellat nihil fugit doloremque nesciunt repellendus voluptatibus omnis eveniet molestias?
                </p>
                <br />
                <ul className='list-disc ml-8'>
                    <li className='text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Fugiat corrupti voluptas, delectus ipsum minima cum saepe consequuntur libero, inventore odit amet nesciunt odio animi totam quos? Earum, porro. Quibusdam, sapiente?</li>
                </ul>
                <center>
                    <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center mx-auto m-16">
                    I agree with Terms of Service
                    </Button>
                </center>
            </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  