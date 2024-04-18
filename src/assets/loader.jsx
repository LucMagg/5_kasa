export async function dataLoader() {
  const data = await fetch('/data.json')
    .then(response => response.json())
  return data
}

export async function getDataById(id) {
  const data = await fetch('/data.json')
    .then(response => response.json())
  let dataById = data.find((entry) => entry.id === id.params.rentalId)
  return dataById
}