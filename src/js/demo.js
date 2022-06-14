const URL = 'https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&include_orders=false';

function init() {
  getAssets();
}

function getAssets() {
  let options = {method: 'GET'};

  let asset_list = document.getElementById('assets');

  fetch(URL, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      response.assets.forEach(element => {
        if (element.image_url != null) {
          asset_list.innerHTML += '<li><img src="' + element.image_url + '"</li>';
        } else {
          asset_list.innerHTML += '<li>' + '<img src="https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720">' + '</li>';
        }
      });
    })
    .catch(err => console.error(err));
}

init();


