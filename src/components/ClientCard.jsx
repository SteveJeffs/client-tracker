function ClientCard(props) {
    return (
        <li className="client-card">
            <h2>{props.client.businessName}</h2>

            <p>Contact: {props.client.contactName}</p>
            <p>Status: {props.client.status}</p>
            <p>Contact Number: {props.client.contactNumber}</p>
            <p>Website Package: {props.client.websitePackage}</p>
            <p>Care Plan: {props.client.carePlanTier}</p>
            <p>Next Action: {props.client.nextAction}</p>
            
        </li>
    )
}

export default ClientCard