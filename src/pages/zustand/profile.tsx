import { FC } from 'react';
import { useProfileStore } from './store/profile';

const UseStatePage: FC = () => {
  const profile = useProfileStore();

  return (
    <div className="container" data-title="Profile">
      Name: <input type="text" value={profile.name} onChange={({ target: { value } }) => profile.setName(value)} />
      {profile.name && <span style={{ marginLeft: '1rem' }}>Hello {profile.name}</span>}
    </div>
  );
};

export default UseStatePage;
