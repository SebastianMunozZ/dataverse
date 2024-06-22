export const renderItems = (data) => {
  let uls = data.map(campeona => {
    let newUl = document.createElement('ul');
    for (let propiedad in campeona){
      if (propiedad !== 'imageUrl') {
        let liElement = document.createElement('li');
        liElement.textContent = propiedad + ": "+ campeona[propiedad];
        newUl.appendChild(liElement);
      } else {
        let imgElement = document.createElement('img');
        imgElement.src = campeona[propiedad];
        newUl.appendChild(imgElement);
      }
      
    }
    return newUl;
  })
  return uls;
};

