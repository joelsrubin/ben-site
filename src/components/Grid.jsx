import { Link } from 'react-router-dom';

export default function Grid({ data, type }) {
  if (data.length === 0) {
    return <div className="text-2xl font-medium text-white my-10">Loading...</div>;
  }

  return (
    <div className="md:grid grid-cols-3 grid-cols-1">
      {data.map((item, index) => {
        return (
          <Link key={index} to={`/${type}/${item.title}`}>
            <div className="shadow-4xl border-4 rounded-lg border-blue-400 my-4 mx-4 hover:bg-blue-900">
              <div key={index} className="text-white py-20  my-10 ">
                {type === 'teams' ? (
                  <div>
                    <div className="text-4xl font-medium">{item.home_team}</div>
                    <div>vs</div>
                    <div className="text-4xl font-medium">{item.away_team}</div>
                  </div>
                ) : null}

                <p className="text-4xl mx-5" >{item.title}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}