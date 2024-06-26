import { FC } from 'react';
import { useProfileStore } from './store/profile';

const Welcome: FC = () => {
  const name = useProfileStore((state) => state.name);

  return (
    <div className="container" data-title="Welcome">
      {name ? `Welcome, ${name}` : 'Sign in'}
    </div>
  );
};

export default Welcome;
