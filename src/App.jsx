import { useState, useEffect } from 'react'
import { seedClients } from './data/seedClients'
import { statusOptions } from './data/options'
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
  const [isEditing, setIsEditing] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('clients', JSON.stringify(clients))
    } catch {
      // Storage not available, carry on without saving
    }
  }, [clients])

  function addClient(newClient) {
    setClients([...clients, newClient])
    setShowForm(false)
  }

  function resetDemo() {
    if (window.confirm('Reset to the demo clients? Anything you have added will be removed')) {
      setClients(seedClients)
    }
  }

  function deleteClient(id) {
    if (window.confirm('Delete this client? This cannot be undone.')) {
      setClients(clients.filter((client) => client.id !== id))
      setSelectedId(null)
    }
  }

  function updateClient(updatedClient) {
    setClients(clients.map((client) => (client.id === updatedClient.id ? updatedClient : client)))
    setIsEditing(false)
  }

  let visibleClients = clients

  if (statusFilter !== 'All') {
    visibleClients = clients.filter((client) => client.status === statusFilter)
  }

  const selectedClient = clients.find((client) => client.id === selectedId)

  if (selectedClient) {
    return (
      <main>
        {isEditing ? (
          <AddClientForm
            initialValues={selectedClient}
            title="Edit client"
            submitLabel="Save changes"
            onSave={updateClient}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ClientDetail
            client={selectedClient}
            onBack={() => setSelectedId(null)}
            onEdit={() => setIsEditing(true)}
            onDelete={() => deleteClient(selectedClient.id)}
          />
        )}
      </main>
    )
  }

  return (
    <main>
      <header className="page-header">
        <h1>Client tracker</h1>
        <div className="header-actions">
          <button className="reset-button" onClick={resetDemo}>Reset demo</button>
          {!showForm && <button className="add-button" onClick={() => setShowForm(true)}>+ Add client</button>}
        </div>

      </header>

      {showForm && <AddClientForm onSave={addClient} onCancel={() => setShowForm(false)} />}

      <div className="filters">
        <button className={statusFilter === 'All' ? 'active' : ''} onClick={() => setStatusFilter('All')}>All</button>
        {statusOptions.map((status) => (
          <button key={status} className={statusFilter === status ? 'active' : ''} onClick={() => setStatusFilter(status)}>
            {status}
          </button>
        ))}
      </div>
      <p>Showing: {visibleClients.length} of {clients.length} clients</p>
      {visibleClients.length === 0 && <p className="empty-message">No clients with this status.</p>}
      <ul className="client-list">
        {visibleClients.map((client) => (
          <ClientCard key={client.id} client={client} onSelect={() => setSelectedId(client.id)} />
        ))}
      </ul>
    </main>
  )
}

export default App