export async function getEntrepreneursCall () {
  const response = await window.fetch(`${process.env.REACT_APP_SERVER_URL}/api/${process.env.REACT_APP_API_VERSION}/entrepreneurs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return response.json()
}
