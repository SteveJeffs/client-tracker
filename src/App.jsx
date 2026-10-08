import { useState } from 'react'
import { seedClients } from './data/seedClients'
import ClientCard from './components/ClientCard'
import './App.css'

function App() {
  const [statusFilter, setStatusFilter] = useState('All')

  let visibleClients = seedClients

  if (statusFilter !== 'All') {
    visibleClients = seedClients.filter((client) => client.status === statusFilter)
  }

  return (
    <main>
      <h1>Client tracker</h1>
      <p>{seedClients.length} clients</p>
      <p>Showing: {statusFilter}</p>
      <div className="filters">
        <button onClick={() => setStatusFilter('All')}>All</button>
        <button onClick={() => setStatusFilter('Lead')}>Lead</button>
        <button onClick={() => setStatusFilter('Building')}>Building</button>
        <button onClick={() => setStatusFilter('Live')}>Live</button>
        <button onClick={() => setStatusFilter('Cancelled')}>Cancelled</button>
      </div>
      <ul className="client-list">
        {visibleClients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </ul>
    </main>
  )
}

export default App