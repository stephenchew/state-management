import Claims from './claim';
import { FC } from 'react';
import Header from './header';
import Insurances from './insurances';
import Profile from './profile';

const ZustandPage: FC = () => {
  return (
    <div
      className="container"
      data-title="Component"
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}
    >
      <Header />
      <Profile />
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
        <Insurances />
        <Claims />
      </div>
    </div>
  );
};

export default ZustandPage;
