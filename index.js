
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('getMessage').onclick = () => {

        fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
            .then(response => response.json())
            .then(data => {
                //let json = JSON.stringify(data);
                let pesquisa = document.getElementById('pesquisaId').value
                function ciEquals(a, b) {
                    return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0
                }
                let result = data.filter(res => ciEquals(res.property_type, pesquisa))
                let html = "";
                if (pesquisa) {
                    result.forEach(function (val) {

                        html += `
                        <div class="card" style="width: 18rem;">
                        <img src=  ${val.photo} class="card-img-top" alt= ${val.property_type} height= 200px>
                        <div class="card-body">
                          <h5 class="card-title"> ${val.property_type} </h5>
                          <p class="card-text"> R$${val.price} </p>
                          <a href="#" class="btn btn-primary">Saiba mais</a>
                        </div>
                      </div>
                                `

                    })
                } else {
                    data.forEach(function (val) {

                        html += `
                        <div class="card" style="width: 18rem;">
                        <img src=  ${val.photo} class="card-img-top" alt= ${val.property_type} height= 200px>
                        <div class="card-body">
                          <h5 class="card-title"> ${val.property_type} </h5>
                          <p class="card-text"> R$${val.price} </p>
                          <a href="#" class="btn btn-primary"> Saiba mais</a>
                        </div>
                      </div>
                                `

                    })
                }


                document.getElementById('cards').innerHTML = html;
            })


    };
});