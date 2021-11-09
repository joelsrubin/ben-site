export default function Body({ data, error }) {

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
      <h1 className="text-6xl font-medium text-white">sports</h1>
      <div className="grid grid-cols-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="text-white px-4">
              <h2 className="text-2xl font-medium">{item.description}</h2>
              <p className="text-xl">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}