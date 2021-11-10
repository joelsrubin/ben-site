import { Link } from 'react-router-dom';

export default function Matchup({ data, type }) {


  return (
    <div className="md:grid grid-cols-3 grid-cols-1">
      {data.map((item, index) => {
        const date = new Date(item.commence_time);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDate = `${month}/${day}/${year}`;

        console.log(date);
        return (
          <Link key={index} to={`/${type}/${item.title}`}>
            <div className="shadow-4xl border-4 rounded-lg border-blue-400 my-4 mx-4 hover:bg-blue-900">
              <div key={index} className="text-white py-20  my-10 ">
                <div>
                  <div className="text-4xl font-medium">{item.home_team}</div>
                  <div>vs</div>
                  <div className="text-4xl font-medium">{item.away_team}</div>
                  <br />
                  <div className="text-2xl font-medium">
                    {formattedDate}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}