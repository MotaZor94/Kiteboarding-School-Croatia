const fetchRequest = async (url, variables = null) => {
    const response = await window.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        origin: 'http://localhost:3000',
      },
    //   body: JSON.stringify({ query, variables })
    })
    return response.json()
  }
  
export default fetchRequest