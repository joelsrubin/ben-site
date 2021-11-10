export default function SingleTeam({ data }) {
  return (
    <div className="shadow-4xl border-4 rounded-lg border-blue-400 my-4 mx-4 hover:bg-blue-900">
      <div className="text-white py-20  my-10 ">
        <div className="text-4xl font-medium text-white my-5">
          {data[0].sport_title}
        </div>
      </div>
    </div>
  );
}