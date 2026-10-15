function ClientDetail(props) {
    return (
        <section className="client-detail">
            <button className="back-button" onClick={props.onBack}>
                Back to all clients
            </button>
            <h2>{props.client.businessName}</h2>
        </section>
    )
}

export default ClientDetail