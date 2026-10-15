import { useState, useEffect } from 'react'
import { seedClients } from './data/seedClients'
import ClientCard from './components/ClientCard'
import AddClientForm from './components/AddClientForm'
import ClientDetail from './components/ClientDetail'
import './App.css'

function loadClients() {
  try {
    const saved = localStorage.getItem('clients')
    return saved ? JSON.parse(saved) : seedClients
  } catch {
    return seedClients
  }
}

function App() {
  const [clients, setClients] = useState(loadClients)
  const [statusFilter, setStatusFilter] = useState('All')
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem('clients', JSON.stringify(clients))
    } catch {

    }
  }, [clients])

  function addClient(newClient) {
    setClients([...clients, newClient])
  }

  function resetDemo() {
    if (window.confirm('Reset to the demo clients? Anything you have added will be removed')) {
      setClients(seedClients)
    }
  }

  let visibleClients = clients

  if (statusFilter !== 'All') {
    visibleClients = clients.filter((client) => client.status === statusFilter)
  }

  const selectedClient = clients.find((client) => client.id === selectedId)

  if (selectedClient) {
    return (
      <main>
        <ClientDetail client={selectedClient} onBack={() => setSelectedId(null)} />
      </main>
    )
  }

  return (
    <main>
      <h1>Client tracker</h1>
      <AddClientForm onAdd={addClient} />
      <p>Showing: {visibleClients.length} of {clients.length} clients</p>
      <button className="reset-button" onClick={resetDemo}>Reset demo</button>
      <div className="filters">
        <button className={statusFilter === 'All' ? 'active' : ''} onClick={() => setStatusFilter('All')}>All</button>
        <button className={statusFilter === 'Lead' ? 'active' : ''} onClick={() => setStatusFilter('Lead')}>Lead</button>
        <button className={statusFilter === 'Building' ? 'active' : ''} onClick={() => setStatusFilter('Building')}>Building</button>
        <button className={statusFilter === 'Live' ? 'active' : ''} onClick={() => setStatusFilter('Live')}>Live</button>
        <button className={statusFilter === 'Cancelled' ? 'active' : ''} onClick={() => setStatusFilter('Cancelled')}>Cancelled</button>
      </div>
      <ul className="client-list">
        {visibleClients.map((client) => (
          <ClientCard key={client.id} client={client} onSelect={() => setSelectedId(client.id)} />
        ))}
      </ul>
    </main>
  )
}

export default App