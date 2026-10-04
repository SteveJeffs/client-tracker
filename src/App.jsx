import { seedClients } from './data/seedClients'
import './App.css'

function App() {
  return (
    <main>
      <h1>Client tracker</h1>
      <p>{seedClients.length} clients</p>
      <ul>
        {seedClients.map((client) => (
          <li key={client.id}>{client.businessName}</li>
        ))}
      </ul>
    </main>
  )
}

export default App