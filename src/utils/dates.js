const MS_PER_DAY = 1000 * 60 * 60 * 24

export function daysUntil(dateString) {
    const today = new Date()
    today.setHours(0,0,0,0)

    const target = new Date(dateString + 'T00:00:00')

    const difference = target - today
    return Math.round(difference / MS_PER_DAY)
}

export function renewalLabel(dataString) {
    const days = daysUntil(dataString)
    if (days < 0) {
        return `Overdue by ${Math.abs(days)} days`
    }

    if (days === 0) {
        return `Renews today`
    }

    return `Renews in ${days} days`
}

export function renewalUrgency(dateString) {
    const days = daysUntil(dateString)

    if (days <0) {
        return 'overdue'
    }

    if (days <=30) {
        return 'soon'
    }

    return 'ok'
}

export function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00')

    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}