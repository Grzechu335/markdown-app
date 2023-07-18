const dateFormatter = (date: Date) => {
    return date.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}

export default dateFormatter
