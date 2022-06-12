import Nav from './Nav'
import Card from'./Card'
import Data from './data.js'
function App() {
  const card = Data.map(data => {
    return (
      <Card 
      key={data.id}
      title={data.title}
      location ={data.location}
      map={data.googleMapsUrl.Url}
      begin={data.startDate}
      end={data.endDate}
      desc={data.description}
      image={data.imageUrl}
      />
    )
  })
  return (
    <div className="App">
    <Nav />
    <main className='card-list'>
      {card}
    </main>
    </div>
  );
}

export default App;
