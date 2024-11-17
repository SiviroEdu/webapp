// Parent Component
import AfterLoginPage from "@/components/AfterLogInPage";
import Exersices from "@/components/MultiExercises";
import Home from "@/components/Home";
import ParticleEffects from "@/components/ParticleEffects"
import Shop from "@/components/Shop";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import RewardPopUp from "@/components/RewardPopUp";
import LeaderBoard from "@/components/LeaderBoard";

export default function Index() {
  const [SelectedFooterElement, SetSelectedFooterElement] = useState<number>(1);

  // Define MainBody outside to avoid redefining it on each render.
  const MainBody = () => {
    switch (SelectedFooterElement) {
      case 1:
        return <Home/>;
      case 2:
        return <Shop></Shop>;
      case 3:
        return <Exersices/>;
      case 4:
        return <RewardPopUp message="You Leveled Up" type="Xp" amount={300}/>
      case 5:
        return <LeaderBoard/>
      default:
        alert(`Unexpected state: ${SelectedFooterElement}`);
        return <>Error</>;
    }
  };

  return (
    <AfterLoginPage
      SelectedFooterElement={SelectedFooterElement}
      SetSelectedFooterElement={SetSelectedFooterElement}
    >
      <MainBody />
    </AfterLoginPage>
  );
}
