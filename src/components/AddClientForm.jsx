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
                value={form.businessName}
                onChange={(event) => setForm({ ...form, businessName: event.target.value})}
            />

            <label htmlFor="contactName">Contact name</label>
            <input
            id="contactName"
            type="text"
            value={form.contactName}
            onChange={(event) => setForm({ ...form, contactName: event.target.value})}
            />
        </form>
    )
}



export default AddClientForm