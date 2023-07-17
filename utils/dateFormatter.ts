const dateFormatter = (date: Date) => {
    return date.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

export default dateFormatter
