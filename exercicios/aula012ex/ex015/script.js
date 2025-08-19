function verificar() {
   var data = new Date
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERROR] Verifique os dados e tente novamente!')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
             genero = 'Homem'
             if (idade >=0 && idade < 10) { // criança
                  img.setAttribute('src', 'crianca-homem.png')
             } else if (idade >= 10 && idade < 21) { // jovem
                  img.setAttribute('src', 'jovem-homem.png')
             } else if (idade > 21 && idade < 50) { //adulto
                  img.setAttribute('src', 'homem-adulto.png')
             } else { //idoso 
                  img.setAttribute('src', 'senhor.png')
             }
                
        } else if(fsex[1].checked) {
             genero = 'Mulher'
               if (idade >=0 && idade < 10) { // criança
                  img.setAttribute('src', 'crianca-mulher.png')
             } else if (idade >= 10 && idade < 21) { // jovem
                  img.setAttribute('src', 'jovem-mulher.png')
             } else if (idade > 21 && idade < 50) { //adulta
                  img.setAttribute('src', 'mulher-adulta.png')
             } else { //idosa
                  img.setAttribute('src', 'senhora.png')
             }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
   }
   
}