async function requests(endpoint){
    let response = null;
    
      try {
        response = await fetch(`https://sandbox-api.coinmarketcap.com/v1${endpoint}?CMC_PRO_API_KEY=06118922-797c-4f43-8c22-2abc79c1b0e5`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          
        headers: {
            'X-CMC_PRO_API_KEY': '06118922-797c-4f43-8c22-2abc79c1b0e5',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
        });
      response = response;
      console.log('fuck',response)
      } catch(ex) {
        response = null;
        // error
        console.log('exii',ex);
      }
      return response;
}

export default requests;


