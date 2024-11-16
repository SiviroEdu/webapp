import CappaSVG from '../svg/CappaSVG.tsx';
import LogoSVG from '../svg/LogoSVG.tsx';
import LoginComponent from './LoginComponent.tsx';


const Divider = () => (
  <div className="h-14 w-1 bg-primary rounded-full"></div>
);


const Login = () => {
    return (
      <div className="h-screen flex max-h-screen flex-col justify-between text-white">
        <div className="h-full flex flex-col items-center justify-between">
            <header className='flex justify-start flex-row space-x-2 h-[25%] p-16'>
            <CappaSVG classes='w-12 h-12' />
            <Divider/>
            <LogoSVG classes='w-[80%] h-12'/>
            </header>
            <h2 className="text-center text-4xl text-black align-middle">
              Login using your <br />
              <span className="text-oldprimary">Shkolo</span> credentials
            </h2>
            <div className='mt-[2%]'>
              <LoginComponent/>
            </div>
            <footer className='w-[90%] mx-auto py-8'>
              <hr className="border-t-4 border-primary mx-auto w-1/1.5" />
              <div className='flex flex-row justify-evenly'>
                <a href="" className='text-xl text-black'>Terms of use</a>
                <a href="" className='text-xl text-black'>Privacy policy</a>
                <a href="" className='text-xl text-black'>Cookie policy</a>
              </div>
            </footer>
        </div>
      </div>
    );
  };
  
  export default Login;
  