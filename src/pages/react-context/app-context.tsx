import { FC, ReactNode, createContext, useContext, useState } from 'react';

import { Claim } from '../../services/claims';
import { Insurance } from '../../services/insurances';

type AppState = {
  name: string;
  setName: (name: string) => void;
  insurances: Insurance[] | undefined;
  setInsurances: (insurances: Insurance[]) => void;
  claims: Claim[] | undefined;
  setClaims: (claims: Claim[]) => void;
};

export const Ctx = createContext<AppState | null>(null);

type Props = {
  children: ReactNode;
};

const AppContext: FC<Props> = ({ children }) => {
  const [name, setName] = useState('');
  const [insurances, setInsurances] = useState<Insurance[]>();
  const [claims, setClaims] = useState<Claim[]>();

  return (
    <Ctx.Provider
      value={{
        name,
        setName,
        insurances,
        setInsurances,
        claims,
        setClaims,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default AppContext;

export const useAppContext = () => {
  const appContext = useContext(Ctx);

  if (!appContext) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return appContext;
};
