const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a14ca7'
        + '991117f4c40f94a37686eb1c20&query='
        + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const temp = body.current.temperature
            const chance_rain = body.current.precip * 100
            const feels_like = body.current.feelslike
            output_string = 'It is currently ' + temp + ' degrees out. There '
                + 'is a ' + chance_rain + '% chance of rain. It feels ' 
                + 'like ' + feels_like + ' degrees out.'
            if (body.current.weather_descriptions[0]) {
                output_string = 'Right now, it is ' + body.current.weather_descriptions[0]
                    + '. ' + output_string
            }
            callback(undefined, output_string)
        }
    })
}

module.exports = forecast