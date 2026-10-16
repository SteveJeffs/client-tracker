import { formatDate, renewalLabel, renewalUrgency, carePlanLabel } from '../utils/dates'

function ClientDetail(props) {
    return (
        <section className="client-detail">
            <button className="back-button" onClick={props.onBack}>
                Back to all clients
            </button>
            <h2>{props.client.businessName}</h2>
            <h3>Contact</h3>
            <dl>
                <dt>Name</dt>
                <dd>{props.client.contactName}</dd>
                <dt>Phone</dt>
                <dd>{props.client.contactNumber}</dd>
            </dl>

            <h3>Plan</h3>
            <dl>
                <dt>Website Package</dt>
                <dd>{props.client.websitePackage}</dd>
                <dt>Care Plan</dt>
                <dd>{props.client.carePlanTier}</dd>
                {props.client.startDate && props.client.carePlanTier !== 'None' && (
                    <>
                        <dt>Minimum term</dt>
                        <dd>{carePlanLabel(props.client.startDate)}</dd>
                    </>
                )}

                {props.client.addOns.length > 0 && (
                    <>

                        <dt>Add-ons</dt>
                        <dd>{props.client.addOns.join(', ')}</dd>
                    </>
                )}
            </dl>

            <h3>Dates</h3>
            <dl>
                {props.client.startDate && (
                    <>
                        <dt>Started</dt>
                        <dd>{formatDate(props.client.startDate)}</dd>
                    </>
                )}
                {props.client.domainRenewalDate && (
                    <>
                        <dt>Domain</dt>
                        <dd className={`renewal-${renewalUrgency(props.client.domainRenewalDate)}`}>
                            {renewalLabel(props.client.domainRenewalDate)}
                        </dd>
                    </>
                )}
            </dl>

            <h3>Next action</h3>
            <p>{props.client.nextAction}</p>

            {props.client.notes && (
                <>
                    <h3>Notes</h3>
                    <p>{props.client.notes}</p>
                </>
            )}

        </section>
    )
}

export default ClientDetail