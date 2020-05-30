const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const url = 'http://localhost:3000/weather?address='
        + location

    messageOne.textContent = ""
    messageTwo.textContent = 'Loading...'

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                //messageOne.textContent = 'Error occured:'
                messageTwo.textContent = data.error
                return
            }
            const {forecast, location} = data
            messageOne.textContent = 'Forecast: ' 
            + forecast
            messageTwo.textContent = 'Location: ' 
                + location
        })
    })

    document.getElementById('input1').value = ''
})