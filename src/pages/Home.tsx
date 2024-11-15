import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';
import Header from '../components/Header';
import AfterLoginPage from "@/components/AfterLogInPage";

export default function Home() {
  return (
    <AfterLoginPage>
      <div className="flex-col max-w-3xl">
        <h1 className="text-center text-4xl text-primary/80">WELCOME</h1>

        <h2 className="text-center text-4xl text-primary/70 align-middle">
          orem ipsum dolor sit amet
        </h2>
        
        <h3 className="text-center text-4xl text-primary/60 align-middle">
          orem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet
        </h3>
      </div>
    </AfterLoginPage>
  );
}
