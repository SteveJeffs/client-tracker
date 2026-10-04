import { seedClients } from './data/seedClients'
import './App.css'
import ClientCard from './components/ClientCard'

function App() {
  return (
    <main>
      <h1>Client tracker</h1>
      <p>{seedClients.length} clients</p>
      <ul>
        {seedClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </ul>
    </main>
  )
}

export default App