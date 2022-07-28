const getUrl = 'http://localhost/php/test-tma/scores'
let reloadBtn = $("#reload")


async function fetchData() {
  try {
    const res = await fetch(getUrl)
    const performances = await res.json()
    return performances
  } catch (error) {
      console.log(error.message)
  }
}





window.onload = async () => {
  const data = await fetchData()
  return data
}

reloadBtn.click( async () => {
  const data = await fetchData()
  return data
})







