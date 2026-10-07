import './ClientCard.css'
import { renewalLabel, renewalUrgency, formatDate, carePlanLabel } from '../utils/dates'

function ClientCard(props) {
    return (
        <li className="client-card">
            <h2>{props.client.businessName}</h2>

            <p>Contact: {props.client.contactName}</p>
            <p>Status: {props.client.status}</p>
            <p>Contact Number: {props.client.contactNumber}</p>
            <p>Website Package: {props.client.websitePackage}</p>
            <p>Care Plan: {props.client.carePlanTier}</p>
            {props.client.startDate && props.client.carePlanTier !== 'None' && <p>{carePlanLabel(props.client.startDate)}</p>}
            {props.client.startDate && <p>Started: {formatDate(props.client.startDate)}</p>}
            {props.client.domainRenewalDate && <p className={`renewal-${renewalUrgency(props.client.domainRenewalDate)}`}>Domain: {renewalLabel(props.client.domainRenewalDate)}</p>}
            <p>Next Action: {props.client.nextAction}</p>
            {props.client.addOns.length > 0 && <p>Add ons: {props.client.addOns.join(', ')}</p>}
            {props.client.notes && <p>Notes: {props.client.notes}</p>}


        </li>
    )
}

export default ClientCard