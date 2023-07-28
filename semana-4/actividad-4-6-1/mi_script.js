document.addEventListener('DOMContentLoaded', function () {
    
    //Get ID Info
    const p = document.getElementById('info')

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :

    const enlaces = document.querySelectorAll('a')
    let div = document.createElement('div')
    div.innerHTML = `<div>Numero de enlaces: ${enlaces.length}</div>`
    p.appendChild(div)

    // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    let div2 = document.createElement('div')
    let link = enlaces[enlaces.length - 2]
    div2.innerHTML = `Link del penúltimo enlace de la página: ${link} `
    p.appendChild(div2 )

    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
    let cantidad = 0
        for (const i of enlaces) {
            if(i.href === 'http://prueba/'){
                cantidad ++
            }
        }
    let div3 = document.createElement('div')
    div3.innerHTML = `Cantidad de enlaces que apuntan a http://prueba/: ${cantidad}`
    p.appendChild(div3)
    // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
    const parrafos = document.querySelectorAll('p')
    let ultimoP = parrafos[parrafos.length - 2].querySelectorAll('a').length
    let div4 = document.createElement('div')
    div4.innerHTML = `Numero de enlaces del tercer párrafo: ${ultimoP}`
    p.appendChild(div4)

    
});