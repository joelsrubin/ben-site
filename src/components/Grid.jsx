import Matchup from './GridTypes/Matchup';
import SingleTeam from './GridTypes/SingleTeam';
import DefaultGrid from './GridTypes/Default';

export default function Grid({ data, type }) {
  if (data.length === 0) {
    return <div className="text-2xl font-medium text-white my-10">Loading...</div>;
  }

  if (type === 'teams' && !data[0].away_team) {
    return (
      <SingleTeam data={data} />
    );
  }

  if (type === 'teams') {
    return (
      <Matchup data={data} type={type} />
    );
  }

  return (
    <DefaultGrid data={data} type={type} />
  );
}