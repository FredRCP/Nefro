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
        const div13=document.querySelector('#calculadora');
        const div14=document.querySelector('#pfr');
        const div15=document.querySelector('#ag');
        const div16=document.querySelector('#ist');
        const div17=document.querySelector('#glasgow');
        const div18=document.querySelector('#mckg');
        const div19=document.querySelector('#clcrped');
        const div20=document.querySelector('#ingestasal');
        const div21=document.querySelector('#kfre');
        const div22=document.querySelector('#cvvhdf');
        const div23=document.querySelector('#dab');



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
        div13.style.display="none";
        div14.style.display="none";
        div15.style.display="none";
        div16.style.display="none";
        div17.style.display="none";
        div18.style.display="none";
        div19.style.display="none";
        div20.style.display="none";
        div21.style.display="none";
        div22.style.display="none";
        div23.style.display="none";


        
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
            let ok= prompt('digite a senha');
            ok=Number(ok);
            if(ok===123){div9.style.display = 'block';
            window.open('hiponatremia.html', '_target');
        } 
            else{alert('solicite a senha de acesso'); 
            document.querySelector("#resultadoformula").innerHTML="Adquira a senha de acesso.";}
        } else if (selectedOption === 'osmolaridade') {
            div10.style.display = 'block'
        } else if (selectedOption === 'imc') {
            div11.style.display = 'block'
        } else if (selectedOption === 'bic') {
            div12.style.display = 'block'
        } else if (selectedOption === 'calculadora') {
            div13.style.display = 'block';
            limparcalculadora();
            limparformula();
            
        } else if (selectedOption === 'pfr') {
            div14.style.display = 'block'
        } else if (selectedOption === 'ag') {
            div15.style.display = 'block'
        } else if (selectedOption === 'ist') {
            div16.style.display = 'block'
        } else if (selectedOption === 'glasgow') {
            div17.style.display = 'grid'
            glasgow();
        } else if (selectedOption === 'mckg') {
            div18.style.display = 'block'
        } else if (selectedOption === 'clcrped') {
            div19.style.display = 'block';
            jasim=false;
        } else if (selectedOption === 'ingestasal') {
            div20.style.display = 'block'
        } else if (selectedOption === 'kfre') {
            div21.style.display = 'block'
        } else if (selectedOption === 'cvvhdf') {
            div22.style.display = 'block'
        } else if (selectedOption === 'dab') {
            div23.style.display = 'block'
        }
        
    });

});
let jasim=false;
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
    document.querySelector("#pesohep").value='';
    document.querySelector('#idadepfr').value='';
    document.querySelector('#pesorep').value='';
    document.querySelector('#base').value='';
    document.querySelector('#ferro').value='';
    document.querySelector('#tibc').value='';
    document.querySelector('#infusao').value='';
    document.querySelector('#pesoml').value='';
    document.querySelector('#soro').value='';
    document.querySelector('#dosagem').value='';
    document.querySelector('#alturaped').value='';
    document.querySelector('#crped').value='';
    document.querySelector('#sal').value='';
    jasim=false;
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
    if(!pesoh){ return document.querySelector("#resultadoformula").innerHTML="preencha o peso"}
    let hidra= pesoh*35;
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'A hidratação oral média recomendada é '+ '<big>' +hidra+'</big>'+"ml em 24h";
}

//HIDRATAÇÃO DENGUE

function hidrad(){
    let pesod=document.querySelector("#pesod").value
    pesod=Number(pesod);
    if(!pesod){ return document.querySelector("#resultadoformula").innerHTML="preencha o peso"}
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

//HEPARINA EM HD

function hephep(){
    let peso= document.querySelector("#pesohep").value
    peso= Number(peso)
    if(!peso){return document.querySelector("#resultadoformula").innerHTML='preencha o peso'}
    var pesomin= peso/100
    var pesomax= (peso*3)/100
    pesomin= pesomin.toFixed(1)
    pesomax= pesomax.toFixed(1)
    
    document.querySelector("#resultadoformula").innerHTML= "A dose recomendada é de "+pesomin + " a " + pesomax+ 
    " ml de heparina (5000UI/ml)."
}

function hepenox(){
    let peso= document.querySelector("#pesohep").value
    peso= Number(peso) 
    if(!peso){ return document.querySelector("#resultadoformula").innerHTML='preencha o peso'}
    document.querySelector("#resultadoformula").innerHTML= "A dose recomendada é de "+peso + "mg."
}

//FUNÇÃO RENAL ESPERADA PARA IDADE

function pfr(){
    let idadepfr= document.querySelector('#idadepfr').value;
    idadepfr=Number(idadepfr);
    if(!idadepfr){return document.querySelector("#resultadoformula").innerHTML='preencha a idade'}
    let pfr='';
    let pfrmin="";
    let pfrmax="";
    if(idadepfr<=40){pfr= " >=90"} else {pfrmin= 90 - (idadepfr-40)*0.5; 
    pfrmax= 90 - (idadepfr-40); pfr=" de " + pfrmax +" a " + pfrmin}
    document.querySelector("#resultadoformula").innerHTML= "O ClCr esperado para a idade, aproximadamente é" + pfr + "ml/min/1,73m2"
}


//ANION GAP

function ag(){
    let sodioag= document.querySelector('#sodioag').value
    sodioag=Number(sodioag)
    let cloroag=document.querySelector('#cloroag').value
    cloroag=Number(cloroag)
    let bicag=document.querySelector('#bicag').value
    bicag=Number(bicag)
    //let kag=document.querySelector('#kag').value
    //kag=Number(kag)
    if(!sodioag || !cloroag || !bicag) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let ag= sodioag - (cloroag + bicag);
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+'Ânion gap calculado é: ' + ag +'mEq/l';
}

//REPOSIÇÃO DE BIC

function repobic(){
    let pesorep= document.querySelector('#pesorep').value
    pesorep=Number(pesorep)
    let base=document.querySelector('#base').value
    base=Number(base)
    if(!pesorep || !base) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let repobic= pesorep*0.3*base;
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+"Reposição com Bicarbonato de Sódio 8,4%:"
    + "<br>" + (Math.abs(repobic)/3).toFixed(1) + "ml a cada 8h EV" + "<br>" + "ou" + "<br>" + "empiricamente "
    + pesorep + 'ml a cada 8h EV';
}

//CALCULADORA

let n1="0";
let operacao=null;
let n2="";


document.addEventListener('keydown', function(event) {
    document.querySelector('.mais').focus();
    const tp = event.key;
    console.log(tp);
     
    // Verifique se a tecla pressionada é um número (0-9)
    if (!isNaN(tp) && tp !== ' ') {
        incluirDigito(tp);
    } else

    if(tp==='+' || tp==="-" || tp==='*' || tp==="/"){
        iniciarCalculo(tp)
    } else

    if(tp==='='){finalizarCalculo()} else

    if(tp==='%'){obterPorcento()} else

    if(tp===','){incluirPonto()} else

    if(tp==='Delete'){limparcalculadora()}
});
        
        function incluirDigito(digito){
            if(n2&&operacao&&clicadoigual){
                clicadoigual=false;
                limparcalculadora();
                n2="";
                n1=digito;
                mostradisplay(n1);
                return;
            }

            if(operacao!==null){n2=n2+digito;if(n2.length>16){return mostradisplay('error')} else {mostradisplay(n2)}}

            else{if(n1==="0"){n1=digito; mostradisplay(n1)} else{n1+=digito; if(n1.length<16){mostradisplay(n1)} else{return mostradisplay('error')}}}
        }
    
        function mostradisplay(m){
            document.querySelector("#display").innerHTML=m
        }

        function obterPorcento(){
            let porcento;
            if(!n2){
                limparcalculadora();
                mostradisplay(n1);
            } else {
                if(operacao === "+" || operacao === "-"){
                    porcento = n1 * n2 / 100;    
                } else {
                    porcento = n2 / 100;
                }
                n2 = porcento;
                mostradisplay(n2);
            }
        }
        
        function iniciarCalculo(simbolo){
            if(clicadoigual){
                clicadoigual=false
                n2=""
            }
            if(operacao===null || n2===""){operacao=simbolo}
            else{
                let valor= calcular()
                n1=valor
                operacao=simbolo
                n2=''
                if(valor.length>16){return mostradisplay('error')}
                mostradisplay(n1)}}
    
        function calcular(simbolo){
            let numero=0
            let _n1=parseFloat(n1)
            let _n2=parseFloat(n2)
            switch(operacao){
                case '+': numero= _n1 + _n2
                break
                case '-': numero= _n1 - _n2
                break
                case '*': numero= _n1 * _n2
                break
                case '/': numero= _n1 / _n2}
            if(numero.length>16){return mostradisplay('error')}    
            return numero}
        
        let clicadoigual= false
        function finalizarCalculo(){
            clicadoigual=true
            let valor=calcular()
            n1=valor
            if(valor.length>16){return mostradisplay('error')}
            mostradisplay(n1)
        }
        
        function incluirPonto(){
            if(operacao&&n2){n2=n2+"."}
            else {if(operacao&&n2===""){n2="0."}
            else{n1=n1+"."}}
        }
        
         function limparcalculadora(){
            n1="0"
            operacao=null
            mostradisplay(n1)
        }

// ÍNDICE DE SATURAÇÃO DE TRANSFERRINA

function ist(){
    let ferro= document.querySelector('#ferro').value;
    let tibc= document.querySelector('#tibc').value;
    let ist= (ferro/tibc)*100;
    if(!ferro || !tibc) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+"O índice de saturação de transferrina é: "
    + ist + '%.'
}

//GLASGOW

function glasgow(){
    let ao=document.querySelector('input[name="aocular"]:checked').value;
    ao=Number(ao);
    let rm=document.querySelector('input[name="rm"]:checked').value;
    rm=Number(rm);
    let rv=document.querySelector('input[name="rv"]:checked').value;
    rv=Number(rv);
    let glasgow= ao + rm + rv;
    if(ao&&rm&&rv){
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+ "Glasgow: " + glasgow;}
}

//CONVERTER ML/H EM MCG/KG/MIN

function mckg(){
   
    let infusao= document.querySelector('#infusao').value
    infusao=Number(infusao)
    let pesoml=document.querySelector('#pesoml').value
    pesoml=Number(pesoml)
    let soro=document.querySelector('#soro').value
    soro=Number(soro)
    let dosagem=document.querySelector('#dosagem').value
    dosagem=Number(dosagem)
    if(!infusao || !pesoml || !soro || !dosagem) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let mckg= (infusao*dosagem*1000)/(soro*pesoml*60);
    mckg= mckg.toFixed(2);
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+ mckg + 'mcg/kg/min';
}

function clcrped(){
    jasim=false;
    let altura= document.querySelector('#alturaped').value;
    altura= Number(altura);
    let creatinina = document.querySelector('#crped').value;
    creatinina= Number(creatinina);
    let select= document.getElementById('idadep').value;
    let k='';
    switch (select) {
        case 'ptmbp': k=0.29;
            break;
        case 'ptbp': k=0.33;
            break;
        case 'rnt': k=0.45;
            break;
        case 'cri': k=0.55;
            break;
        case 'crim': k=0.7;
            break;
        default:
            break;
    }
    if(!altura || !creatinina || !k) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let clcrped= ((altura*k)/creatinina).toFixed(2);
    document.querySelector('#resultadoformula').innerHTML= "<h5>"+ clcrped + 'ml/min/1,73m2';
}

function referencia(){
    document.querySelector("#resultadoformula").innerHTML="";
    if(jasim){return jasim=false}
    const clcrrn=document.createElement('img');
    clcrrn.src= '/assets/image/clcrrn.png';
    const diva= document.querySelector('#resultadoformula');
    clcrrn.classList.add('clcrrn');
    diva.appendChild(clcrrn);
    jasim=true;
}

//INGESTÃO DE SÓDIO

function ingestasal(){
    let natriuria= document.querySelector("#sal").value;
    if(!natriuria) {return document.querySelector("#resultadoformula").innerHTML="preencha todos os dados"}
    let ingestasal= natriuria/17
    ingestasal= Number(ingestasal.toFixed(1));
    
    document.querySelector("#resultadoformula").innerHTML="O valor ingerido de NaCl é de aproximadamente " + ingestasal + " gramas ao dia."
    
}


