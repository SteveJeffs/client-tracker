import './ClientCard.css'
import { daysUntil } from '../utils/dates'
import { renewalLabel } from '../utils/dates'

function ClientCard(props) {
    return (
        <li className="client-card">
            <h2>{props.client.businessName}</h2>

            <p>Contact: {props.client.contactName}</p>
            <p>Status: {props.client.status}</p>
            <p>Contact Number: {props.client.contactNumber}</p>
            <p>Website Package: {props.client.websitePackage}</p>
            <p>Care Plan: {props.client.carePlanTier}</p>
            {props.client.domainRenewalDate && <p>Domain: {renewalLabel(props.client.domainRenewalDate)}</p>}
            <p>Next Action: {props.client.nextAction}</p>
            {props.client.addOns.length > 0 && <p>Add ons: {props.client.addOns.join(', ')}</p>}
            {props.client.notes && <p>Notes: {props.client.notes}</p>}


        </li>
    )
}

export default ClientCard