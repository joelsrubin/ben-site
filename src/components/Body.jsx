import Grid from './Grid.jsx';
import { memo } from 'react';

function Body({ data, error }) {

  if (error) {
    return (
      <div className="error">
        <h1 className="text-6xl font-medium text-white">Error</h1>
        <p className="text-6xl font-medium text-white" >{error.message}</p>
      </div>
    );
  }

  return (
    <div className="body">
      <h1 className="text-6xl font-medium text-white py-5">sports</h1>
      <Grid data={data} type='sports' />
    </div>
  );
}

export default memo(Body);