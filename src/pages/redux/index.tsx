import Claims from './claim';
import { FC } from 'react';
import Header from './header';
import Insurances from './insurances';
import Profile from './profile';
import { Provider } from 'react-redux';
import store from './store';

const ReduxPage: FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default ReduxPage;
