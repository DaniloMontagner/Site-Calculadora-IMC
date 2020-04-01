function calcular() {
    var fnome = document.getElementById('txtnome')
    var faltura = document.getElementById('txtcm')
    var fpeso = document.getElementById('txtpeso')
    var altura = parseInt(Number(faltura.value))
    var peso = parseFloat(Number(fpeso.value))
    var nome = fnome.value
    var res = document.getElementById('res')
    var m 

      altura /= 100
      m = peso / (altura * altura)

    

    if (fnome.value.length == 0 || faltura.value.length == 0 || fpeso.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {

        if (m < 16) {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'red'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             <strong>CUIDADO!!</strong>, seu peso é <strong>MUITO BAIXO</strong>, isso é <strong>muito grave</strong>`

        } else if (m >= 16 && m <= 16.99) {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'red'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             <strong>CUIDADO!!</strong>, seu peso é <strong>BAIXO</strong>, isso é <strong>GRAVE</strong>`

        } else if (m >= 17 && m <= 18.99){
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'yellow'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             Seu peso é <strong>BAIXO</strong>, mas não é <strong>GRAVE</strong>`

        } else if (m >= 18.50 && m <= 24.99){
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'green'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             Seu peso é <strong>NORMAL</strong>, isso é <strong>CORRETO</strong>`

        } else if (m >= 25 && m <= 29.99) {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'yellow'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             Você está <strong>SOBREPESO</strong>, mas não é <strong>GRAVE</strong>`

        } else if (m >= 30 && m <= 34.99) {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'red'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             <strong>CUIDADO!!</strong>, Você está com <strong>OBESIDADE GRAU 1</strong>, isso é <strong>GRAVE</strong>`

        } else if (m >= 35 && m <= 39.99) {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'red'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             <strong>CUIDADO!!</strong>, Você está com <strong>OBESIDADE GRAU 2</strong>, isso é <strong>MUITO GRAVE</strong>`

        } else {
            res.style.textAlign = 'center'
            res.style.backgroundColor = 'red'
            res.innerHTML = `Olá <strong>${nome}</strong> <br>  <hr> 
            Seu peso é de <strong> ${peso}kg </strong> <br>  <hr>
             Você tem  <strong>${altura}m</strong> de altura. <br>  <hr> 
             Sua Massa Corporal é <strong>${m.toFixed(2)}</strong>. <br>  <hr> 
             <strong>CUIDADO!!</strong>, Você está com <strong>OBESIDADE GRAU 3</strong>, isso é <strong>MUITO GRAVE</strong>`
            
        }

    
    }

    
    

   

    

    



}