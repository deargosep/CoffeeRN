export const increment = (item, id) => {
  return {
    type: 'INCREMENT_IN_CART',
    payload: { item: item, id: id }
  }
}

export const decrement = (id) => {
  return {
    type: 'DECREMENT_IN_CART',
    payload: id
  }
}
