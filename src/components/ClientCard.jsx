import './ClientCard.css'
import { renewalLabel, renewalUrgency } from '../utils/dates'

function ClientCard(props) {
    return (
        <li className="client-card">
            <div className="card-header">
                <h2>{props.client.businessName}</h2>
                <span className={`badge badge-${props.client.status.toLowerCase()}`}>{props.client.status}</span>
            </div>

            <p>{props.client.contactName} · {props.client.contactNumber}</p>
            {props.client.domainRenewalDate && <p className={`renewal-${renewalUrgency(props.client.domainRenewalDate)}`}>Domain: {renewalLabel(props.client.domainRenewalDate)}</p>}
            <p>Next action: {props.client.nextAction}</p>
            <button className="view-button" onClick={props.onSelect}>View details</button>

        </li>
    )
}

export default ClientCard