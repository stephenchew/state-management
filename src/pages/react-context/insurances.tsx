import { FC, useEffect, useState } from 'react';

import { getInsurances } from '../../services/insurances';
import { useAppContext } from './app-context';

const Insurances: FC = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const state = useAppContext();

  useEffect(() => {
    (async () => {
      setLoading(true);
      state.setInsurances(await getInsurances());
      setLoading(false);
    })();
  }, [count]);

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
      <button onClick={() => setCount(count + 1)}>Get Insurances</button>
    </div>
  );
};

export default Insurances;
