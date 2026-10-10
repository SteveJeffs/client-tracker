import { useState } from 'react'

function AddClientForm() {
    const [form, setForm] = useState({
        businessName: '',
        status: 'Lead',
        websitePackage: 'Starter',
        carePlanTier: 'None',
        contactName: '',
        contactNumber: '',
        nextAction: '',
        startDate: '',
        domainRenewalDate: '',
        notes: '',

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

            <label htmlFor="status">Status</label>
            <select
                id="status"
                value={form.status}
                onChange={(event) => setForm({ ...form, status: event.target.value })}
            >
                <option value="Lead">Lead</option>
                <option value="Building">Building</option>
                <option value="Live">Live</option>
                <option value="Cancelled">Cancelled</option>
            </select>

            <label htmlFor="websitePackage">Website Package</label>
            <select
                id="websitePackage"
                value={form.websitePackage}
                onChange={(event) => setForm({ ...form, websitePackage: event.target.value })}
            >
                <option value="Starter">Starter</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
            </select>

            <label htmlFor="carePlanTier">Care plan tier</label>
            <select
                id="carePlanTier"
                value={form.carePlanTier}
                onChange={(event) => setform({ ...form, carePlanTier: event.target.value })}
            >
                <option value="None">None</option>
                <option value="Hosting only">Hosting only</option>
                <option value="Monthly care">Monthly care</option>
                <option value="Annual care">Annual care</option>
            </select>


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

            <label htmlFor="notes">Notes</label>
            <textarea
                id="notes"
                row="3"
                value={form.notes}
                onChange={(event) => setForm({ ...form, note: event.target.value })}
            />

        </form>
    )
}



export default AddClientForm