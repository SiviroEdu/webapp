
import Header from './Header'; // Adjust the path to your Header component
import Footer from './Footer'; // Adjust the path to your Footer component
import { CheckToken } from '@/Api/Token';
import { useEffect, useState } from 'react';
import { AccountData, GetAccountData } from '@/Api/GetAccountData';
import { useNavigate } from 'react-router-dom';
import { CacheUser, SetCacheUser } from '@/Api/Cache';

const AfterLoginPage = (
  { SelectedFooterElement,
    SetSelectedFooterElement,
    children }:
    {
      children: any,
      SelectedFooterElement: number,
      SetSelectedFooterElement: React.Dispatch<React.SetStateAction<number>>
    }) => {

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
            id: data.id
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
    <div className="h-screen flex max-h-screen flex-col justify-between text-white">
      <div className="h-full flex flex-col justify-between items-center">
        <Header SelectedFooterElement={SelectedFooterElement} SetSelectedFooterElement={SetSelectedFooterElement} AccountData={accData}/>
        <div className="grow flex justify-center items-center text-lg">
          {children}
        </div>
        <Footer SelectedFooterElement={SelectedFooterElement} SetSelectedFooterElement={SetSelectedFooterElement} />
      </div>
    </div>
  );
};

export default AfterLoginPage;
