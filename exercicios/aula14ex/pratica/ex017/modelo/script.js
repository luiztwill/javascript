

function gerar() {
    let valor = document.getElementById('txtv')
    let tab = document.getElementById('seltab')

    if (valor.value.length == 0) {
        window.alert('Digite um valor!')
    } else {
        let v = Number(valor.value)
        tab.innerHTML = ''
        for(let c = 1 ; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${v} x ${c} = ${v*c}`
            tab.appendChild(item)
        }
    }
}