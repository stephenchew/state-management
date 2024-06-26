import { useAppDispatch, useAppSelector } from './store';

import { FC } from 'react';
import { profileActions } from './slices/profile';

const UseStatePage: FC = () => {
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  return (
    <div className="container" data-title="Profile">
      Name:{' '}
      <input
        type="text"
        value={profile.name}
        onChange={({ target: { value } }) => dispatch(profileActions.updateName(value))}
      />
      {profile.name && <span style={{ marginLeft: '1rem' }}>Hello {profile.name}</span>}
    </div>
  );
};

export default UseStatePage;
