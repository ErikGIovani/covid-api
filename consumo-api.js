      let valor = '130';

      fetch('https://corona-api.com/countries')
      .then(response => response.json())
      .then(json => {
        console.log(json.data[valor].name)
        document.querySelector('.pais').textContent = json.data[valor].name;
        console.log(json.data[valor].today.deaths)
        document.querySelector('.javascript2').textContent = json.data[valor].today.deaths + " Muertes";
        console.log(json.data[valor].today.confirmed)
        document.querySelector('.javascript').textContent = json.data[valor].today.confirmed + " Confirmados";
      })
     