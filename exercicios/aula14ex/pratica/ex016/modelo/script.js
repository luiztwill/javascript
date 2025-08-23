function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

   if(ini.value == 0 || fim.value == 0 || pas.value == 0) {
    window.alert('Faltam dados! Digite novamente.')
   } else {
    res.innerHTML = "Contando..."
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} > `
        } 
        } else {
            for (let c = i; c >= f; c -= p)
                res.innerHTML = `${c} > `
    }
   }
}