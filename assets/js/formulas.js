document.addEventListener("DOMContentLoaded", function() {
   
    
    document.addEventListener('change', function() {
        const select = document.getElementById('fqual'); // Obtém o elemento select
        const divs = document.querySelectorAll('.formula > div'); // Obtém todas as divs dentro da classe "formula"

        const selectedOption = select.value; // Obtém o valor da opção selecionada
        

        // Oculta todas as divs
        
        document.querySelector("#resultadoformula").innerHTML="";
        // Exibe a div correspondente à opção selecionada
        const div1=document.querySelector('#nada');
        const div2=document.querySelector('#ac');
        const div3=document.querySelector('#fena');
        const div4=document.querySelector('#heparina');
        const div5=document.querySelector('#hidradiaria');
        const div6=document.querySelector('#hidradengue');
        const div7=document.querySelector('#hipercalemia');
        const div8=document.querySelector('#hipocalemia');
        const div9=document.querySelector('#hiponatremia');
        const div10=document.querySelector('#osmolaridade');
        const div11=document.querySelector('#imc');
        const div12=document.querySelector('#bic');

        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
        div5.style.display="none";
        div6.style.display="none";
        div7.style.display="none";
        div8.style.display="none";
        div9.style.display="none";
        div10.style.display="none";
        div11.style.display="none";
        div12.style.display="none";
        
        if (selectedOption === 'nada') {
            div1.style.display = 'block';
        } else if (selectedOption === 'ac') {
            div2.style.display = 'block';
        } else if (selectedOption === 'fena') {
            div3.style.display = 'block';
        } else if (selectedOption === 'heparina') {
            div4.style.display = "block"
        } else if (selectedOption === 'hidradiaria') {
            div5.style.display = 'block'
        } else if (selectedOption === 'hidradengue') {
            div6.style.display = 'block';
        } else if (selectedOption === 'hipercalemia') {
            div7.style.display = 'block';
        } else if (selectedOption === 'hipocalemia') {
            div8.style.display = "block"
        } else if (selectedOption === 'hiponatremia') {
            div9.style.display = 'block'
        } else if (selectedOption === 'osmolaridade') {
            div10.style.display = 'block'
        } else if (selectedOption === 'imc') {
            div11.style.display = 'block'
        } else if (selectedOption === 'bic') {
            div12.style.display = 'block'
        }
    });

});

function limparformula(){
    document.querySelector("#resultadoformula").innerHTML="";
    document.querySelector('#pesoimc').value='';
    document.querySelector('#alturaimc').value='';
    document.querySelector('#sodio').value='';
    document.querySelector('#glicose').value='';
    document.querySelector('#ureia').value='';
    document.querySelector('#alturaimc').value='';
    document.querySelector("#pesoac").value='';
    document.querySelector("#pesoh").value='';
    document.querySelector('#sodios').value='';
    document.querySelector('#sodiou').value='';
    document.querySelector('#crs').value='';
    document.querySelector('#cru').value='';
}

//IMC

function imc(){
    let pesoimc= document.querySelector('#pesoimc').value
    pesoimc=Number(pesoimc)
    let alturaimc=document.querySelector('#alturaimc').value
    alturaimc=Number(alturaimc)
    if(!pesoimc || !alturaimc) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let resultadoimc= (pesoimc*10000)/(alturaimc**2)
    resultadoimc=parseFloat(resultadoimc.toFixed(2))
    let texto='';
    if(resultadoimc<18.5){texto="Você está ABAIXO DO PESO, melhora sua alimentação!"}else{
    if(resultadoimc>=18.5&&resultadoimc<=24.9){texto='Você está muito bem!'} else{
    if(resultadoimc>24.9&&resultadoimc<=29.9){texto='<u>'+ 'SOBREPESO'+'</u>'+ ': melhore seu estilo de vida!'}else{
    if(resultadoimc>29.9&&resultadoimc<=34.9){texto= 'você está com ' + '<u>'+ 'OBESIDADE GRAU 1'+'</u>'+ ': fique atento!'}else{
    if(resultadoimc>34.9&&resultadoimc<=39.9){texto= '<u>' +'OBESIDADE GRAU 2'+'</u>' + ': procure ajuda!'}
    else{texto='<u>'+'OBESIDADE GRAU 3'+'</u>'+ ': procure ajuda urgente!'}}}}}
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'Seu IMC é: '+resultadoimc+"Kg/m²"+ "<br>" + texto;
}

//OSMOLARIDADE

function osm(){
    let sodio= document.querySelector('#sodio').value
    sodio=Number(sodio)
    let glicose=document.querySelector('#glicose').value
    glicose=Number(glicose)
    let ureia=document.querySelector('#ureia').value
    ureia=Number(ureia)
    if(!sodio || !glicose || !ureia) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let resultado= 2*sodio + glicose/18 + ureia/6;
    resultado=parseFloat(resultado.toFixed(2))
    let texto='';
    if(resultado<280){texto="Osmolaridade baixa."} else
    if(resultado>=280&&resultado<=295){texto='Osmolaridade normal.'} else{
    texto='Osmolaridade aumentada.'}
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'Osmolaridade sérica: '+resultado+"mOsm/litro"+ "<br>" + texto;
}

//ÁGUA CORPORAL

function ac(){
    let idoso=document.querySelector("#idoso").checked;
    let ad='';
    let pesoac=document.querySelector("#pesoac").value
    pesoac=Number(pesoac)
    let sexoac= document.querySelector('input[name="sexoac"]:checked').value;
    if(!pesoac){ return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados acima"}
    if(idoso){
        switch(sexoac){
            case 'hgac': ad=pesoac*0.5
                break;
            case 'mgac': ad=pesoac*0.45
        }
    } else{
        switch(sexoac){
            case 'hgac': ad=pesoac*0.6
                break;
            case 'mgac': ad=pesoac*0.5
        }
    }
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'A água corporal estimada é: '+ad+"litros";    
}

//HIDRATAÇÃO ORAL

function hidra(){
    let pesoh=document.querySelector("#pesoh").value
    pesoh=Number(pesoh);
    let hidra= pesoh*35;
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'A hidratação oral média recomendada é '+ '<big>' +hidra+'</big>'+"ml em 24h";
}

//HIDRATAÇÃO DENGUE

function hidrad(){
    let pesod=document.querySelector("#pesod").value
    pesod=Number(pesod);
    let hidrad= pesod*60;
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'A hidratação oral diária recomendada é de '+ '<big>' +hidrad/3+'</big>'+"ml de soro de reidratação oral (SRO) e " +
    '<big>' +hidrad*(2/3)+'</big>'+ 'ml dos demais líquidos.';
}

//FRAÇÃO DE EXCREÇÃO DE SÓDIO  FeNa= (NaU X CrS) / (NaS X CrU)   x 100%

function fena(){
    let sodios= document.querySelector('#sodios').value
    sodios=Number(sodios)
    let sodiou=document.querySelector('#sodiou').value
    sodiou=Number(sodiou)
    let crs=document.querySelector('#crs').value
    crs=Number(crs)
    let cru=document.querySelector('#cru').value
    cru=Number(cru)
    if(!sodios || !sodiou || !crs || !cru) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let fena= (sodiou*crs)/(sodios*cru) *100;
    fena= fena.toFixed(2);
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'A fração de excreção de sódio é: ' + fena +"%";

}

