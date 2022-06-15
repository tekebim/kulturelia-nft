import {getAssets} from './helper/openSea'

const DEFAULT_IMG = 'https://img.seadn.io/files/d67477e51780cdeaf45fd96d97b1dfa9.png?fit=max&auto=format&h=720&w=720'

function init() {
  populateAssetsList()
}

async function populateAssetsList() {
  const {assets} = await getAssets()
  const list = document.getElementById( 'assets')

  for (const asset of assets) {
    const img = document.createElement('img')
    const li = document.createElement('li')

    img.src = asset.image_url ?? DEFAULT_IMG
    li.append(img)
    list.append(li)
  }
}

init()
