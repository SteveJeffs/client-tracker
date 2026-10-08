import { useState } from 'react'
import { seedClients } from './data/seedClients'
import ClientCard from './components/ClientCard'
import AddClientForm from './components/AddClientForm'
import './App.css'

function App() {
  const [clients, setClients] = useState(seedClients)
  const [statusFilter, setStatusFilter] = useState('All')

  let visibleClients = clients

  if (statusFilter !== 'All') {
    visibleClients = clients.filter((client) => client.status === statusFilter)
  }

  return (
    <main>
      <h1>Client tracker</h1>
      <AddClientForm />
      <p>Showing: {visibleClients.length} of {clients.length} clients</p>
      <div className="filters">
        <button className={statusFilter === 'All' ? 'active' : ''} onClick={() => setStatusFilter('All')}>All</button>
        <button className={statusFilter === 'Lead' ? 'active' : ''} onClick={() => setStatusFilter('Lead')}>Lead</button>
        <button className={statusFilter === 'Building' ? 'active' : ''} onClick={() => setStatusFilter('Building')}>Building</button>
        <button className={statusFilter === 'Live' ? 'active' : ''} onClick={() => setStatusFilter('Live')}>Live</button>
        <button className={statusFilter === 'Cancelled' ? 'active' : ''} onClick={() => setStatusFilter('Cancelled')}>Cancelled</button>
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