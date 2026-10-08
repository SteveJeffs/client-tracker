import { useState } from 'react'

function AddClientForm() {
    const [form, setForm] = useState({
        businessName: '',
        contactName: '',
    })

    return (
        <form className="add-client-form">
            <h2>Add a client</h2>

            <label htmlFor="businessName">Business name</label>
            <input
                id="businessName"
                type="text"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
            />

            <label htmlFor="contactName">Contact name</label>
            <input
            id="contactName"
            type="text"
            value={contactName}
            onChange={(event) => setContactName(event.target.value)}
            />
        </form>
    )
}



export default AddClientForm