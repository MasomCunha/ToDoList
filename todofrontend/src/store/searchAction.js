
export const elementToSearch = (event) => ({
    type: 'ELEMENT_TO_SEARCH',
    payload: event.target.value
})

export const searchElement = (event) => ({
    type: 'SEARCH_ELEMENT',
    payload: event.target.value
}) 