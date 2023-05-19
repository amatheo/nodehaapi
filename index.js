const express = require('express')
const app = express()
const http = require('https');
const {masterKey, endpoint, port, entityId} = require('./config')

app.get('/', (req, res) => {
    let headers = {
        "Authorization": "Bearer "+ masterKey,
        "content-type": "application/json"
    }

    const options = {
        hostname: endpoint,
        port: 443,
        path: '/api/states/'+entityId,
        method: 'GET',
        headers: headers
    }

    let request = http.request(options, resha => {
        console.log(`HA Request STATUS: ${resha.statusCode}`);
        // Json response
        resha.on('data', d => {
            let json = JSON.parse(d)
            let response = {
                "number": json.state,
            }
            res.json(response);
        });
    })

    request.on('error', error => {
        console.error(error)
    })
    request.end()
})

app.listen(port, () => {
    if (masterKey == "") {
        console.log("API Key is not set");
        process.exit(1);
    }
    if (endpoint == "") {
        console.log("API URL is not set");
        process.exit(1);
    }
    if (entityId == "") {
        console.log("Entity ID is not set");
        process.exit(1);
    }

    console.log("Serveur à l'écoute sur le port "+port);
    console.log("HA URL: "+endpoint);
    console.log("HA Entity ID: "+entityId);
})