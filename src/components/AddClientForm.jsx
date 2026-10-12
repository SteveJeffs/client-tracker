import { useState } from 'react'
const addOnOptions = ['Copywriting', 'Domain name', 'Professional email', 'Booking integration', 'Priority build']

const emptyForm = {
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
    addOns: [],
}

function AddClientForm(props) {
    const [form, setForm] = useState(emptyForm)

    function toggleAddOn(option) {
        if (form.addOns.includes(option)) {
            setForm({ ...form, addOns: form.addOns.filter((addOn) => addOn !== option) })
        } else {
            setForm({ ...form, addOns: [...form.addOns, option] })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.onAdd({ ...form, id: Date.now() })
        setForm(emptyForm)
    }

    return (
        <form className="add-client-form" onSubmit={handleSubmit}>
            <h2>Add a client</h2>
            <p className="form-note">Required</p>

            <label htmlFor="businessName">
                Business name <span className="required-mark" aria-hidden="true">*</span> </label>
            <input
                id="businessName"
                type="text"
                required
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
                onChange={(event) => setForm({ ...form, carePlanTier: event.target.value })}
            >
                <option value="None">None</option>
                <option value="Hosting only">Hosting only</option>
                <option value="Monthly care">Monthly care</option>
                <option value="Annual care">Annual care</option>
            </select>

            <fieldset>
                <legend>Add-ons</legend>
                {addOnOptions.map((option) => (
                    <label key={option}>
                        <input
                            type="checkbox"
                            checked={form.addOns.includes(option)}
                            onChange={() => toggleAddOn(option)}
                        />
                        {option}
                    </label>
                ))}
            </fieldset>

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
                rows="3"
                value={form.notes}
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
            />

            <button type="submit">Add client</button>

        </form>
    )
}



export default AddClientForm