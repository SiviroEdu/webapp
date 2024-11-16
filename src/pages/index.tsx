// Parent Component
import AfterLoginPage from "@/components/AfterLogInPage";
import Home from "@/components/Home";
import Models from "@/components/Models";
import Login1 from "@/components/Login1";
import Page400 from "@/components/page400";
import Page401 from "@/components/page401";
import Page402 from "@/components/page402";
import Page403 from "@/components/page403";
import Page404 from "@/components/page404";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Index() {
  const [SelectedFooterElement, SetSelectedFooterElement] = useState<number>(1);

  // Define MainBody outside to avoid redefining it on each render.
  const MainBody = () => {
    switch (SelectedFooterElement) {
      case 1:
        return <Home/>;
      case 2:
        return <Models />;
      case 3:
        return <Login1/>;
      case 4:
        return <div>Workout Content</div>;
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
