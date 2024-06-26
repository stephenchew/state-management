import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from './store';

import { getInsurances } from '../../services/insurances';
import { insuranceActions } from './slices/insurances';

const Insurances: FC = () => {
  const [loading, setLoading] = useState(false);

  const state = useAppSelector((state) => state.insurance);
  const dispatch = useAppDispatch();

  const load = async () => {
    setLoading(true);
    dispatch(insuranceActions.setInsurances(await getInsurances()));
    setLoading(false);
  };

  return (
    <div className="container" data-title="Insurances" style={{ width: '100%' }}>
      {loading ? 'Loading...' : null}
      {state.insurances && (
        <ul>
          {state.insurances.map((i) => (
            <li key={i.title}>
              <b>{i.title}</b>
              <br />
              <i style={{ fontSize: '0.7rem' }}>{i.subtitle}</i>
            </li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={load}>Get Insurances</button>
      </div>
    </div>
  );
};

export default Insurances;
