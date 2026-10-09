import { useState } from 'react'

function AddClientForm() {
    const [form, setForm] = useState({
        businessName: '',
        contactName: '',
        contactNumber: '',
        nextAction: '',
        startDate: '',
        domainRenewalDate: '',

    })

    return (
        <form className="add-client-form">
            <h2>Add a client</h2>

            <label htmlFor="businessName">Business name</label>
            <input
                id="businessName"
                type="text"
                value={form.businessName}
                onChange={(event) => setForm({ ...form, businessName: event.target.value })}
            />

            <label htmlFor="contactName">Contact name</label>
            <input
                id="contactName"
                type="text"
                value={form.contactName}
                onChange={(event) => setForm({ ...form, contactName: event.target.value })}
            />

            <label htmlFor="contactNumber">Contact Number</label>
            <input
                id="contactNumber"
                type="tel"
                value={form.contactNumber}
                onChange={(event) => setForm({ ...form, contactNumber: event.target.value })}
            />

            <label htmlFor="nextAction">Next Action</label>
            <input
                id="nextAction"
                type="text"
                value={form.nextAction}
                onChange={(event) => setForm({ ...form, nextAction: event.target.value })}
            />

            <label htmlFor="startDate">Start date</label>
            <input
                id="startDate"
                type="date"
                value={form.startDate}
                onChange={(event) => setForm({ ...form, startDate: event.target.value })}
            />

            <label htmlFor="domainRenewalDate">Domain renewal date</label>
            <input
                id="domainRenewalDate"
                type="date"
                value={form.domainRenewalDate}
                onChange={(event) => setForm({ ...form, domainRenewalDate: event.target.value })}
            />

        </form>
    )
}



export default AddClientForm