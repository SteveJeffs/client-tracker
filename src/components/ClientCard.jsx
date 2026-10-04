function ClientCard(props) {
    return (
        <li className="client-card">
            <h2>{props.client.businessName}</h2>
            <p>{props.client.contactName}</p>
            <p>{props.client.status}</p>
        </li>
    )
}

export default ClientCard