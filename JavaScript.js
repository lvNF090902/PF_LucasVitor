function calcular(){
    const juros = Number(document.getElementById('Juros').value)
    const meses = Number(document.getElementById('Parcelas').value)
    const mensal = Number(document.getElementById('ValorMensal').value)
    const nome = document.getElementById('Nome').value

    const juros = tjuros/100
    
    var res = document.getElementById("resultado")  
    

   
    let p = (mensal*((1+juros)**meses-1)/juros).toFixed(2)
  
        res.innerHTML = `<b>${nome}</b>, se você aplicar <b>R $${mensal}</b>, 
        a taxa de juros de <b>${tjuros}%</b>ao mês,
        durante <b>${meses}</b> meses,
        juntará uma poupança de <b>R $${p}</b>`   
    
}