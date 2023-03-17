//FUNÇÃO FETCH

document.addEventListener('click', e=>{
    const el= e.target;
    const tag= el.tagName.toLowerCase();

    if(tag==='a'){
        e.preventDefault();
        carregapagina(el);
    }
});

async function carregapagina(el){

    try{
        const href= el.getAttribute('href');
        const response= await fetch(href);

        if(response.status!==200) throw new Error('ERRO 404');

        const html= await response.text();
        carregar(html);  

    } catch(e){console.log(e)};          
    }

function carregar(response){
    const resultado= document.querySelector('.resultado');
    resultado.innerHTML= response;
}

//FUNÇÃO CKD EPI

function calcularckd(){
    var cr= document.querySelector('#cr').value
    cr= parseFloat(cr)
    var idade=document.querySelector('#idade').value
    idade=parseFloat(idade)
    if(isNaN(cr)||isNaN(idade)){return document.querySelector("#output").innerHTML="preencha todos os dados acima"}
    var sexo= document.querySelector('input[name="sexo"]:checked').value
    var clcr=''
    var resultado=''
    var alb=" A_"
    var ral= document.querySelector("#a1").value
    ral= parseFloat(ral)

    if(ral<30){alb=" A1"}
    if(ral>=30&&ral<=300){alb=" A2"}
    if(ral>300){alb=" A3"}
    
    if(sexo==='h'&&cr<=0.9){clcr=142 * Math.pow((cr/0.9),-0.302) * Math.pow(0.9938,idade)}
    if(sexo==='m'&&cr<=0.7){clcr=142 * Math.pow((cr/0.7),-0.241) * Math.pow(0.9938,idade)*1.012}
    if(sexo==='h'&&cr>0.9){clcr=142 * Math.pow((cr/0.9),-1.200) * Math.pow(0.9938,idade)}
    if(sexo==='m'&&cr>0.7){clcr=142 * Math.pow((cr/0.7),-1.200) * Math.pow(0.9938,idade)*1.012}
    clcr= clcr.toFixed(2)

    if(clcr>=90){resultado= 'Estágio G1' + alb+ ' da doença renal, função renal preservada.'}
    if(clcr<90&&clcr>=60){resultado= 'Estágio G2' + alb+ '  da doença renal.'}
    if(clcr<60&&clcr>=45){resultado= 'Estágio G3a' + alb+ '  da doença renal, recomendada avaliação de um Nefrologista.'}
    if(clcr<45&&clcr>=30){resultado= 'Estágio G3b' + alb+ '  da doença renal, recomendado acompanhamento com Nefrologista.'}
    if(clcr<30&&clcr>=15){resultado= 'Estágio G4' + alb+ '  da doença renal, recomendado acompanhamento com Nefrologista.'}
    if(clcr<15){resultado= 'Estágio G5' + alb+ '  da doença renal, níveis alarmantes, procure um Nefrologista urgente!'}
    
    document.querySelector('#output').innerHTML='O ClCr estimado é '+ clcr + 'ml/min/1,73m2. '+ "<p>"+ resultado
    document.getElementById('cr').focus();
    }

    //FUNÇÃO COCKCROFT GAULT

    function calcularcft(){
        
        var cr=document.querySelector("#crg").value
        cr=parseFloat(cr)
        var idade=document.querySelector("#idadeg").value
        idade=parseFloat(idade)
        var peso=document.querySelector("#pesog").value
        peso=parseFloat(peso)
        var sexo= document.querySelector('input[name="sexog"]:checked').value
        var clcr= (140-idade)*peso/(cr*72)
        clcr= clcr.toFixed(2)
        if(isNaN(cr) || isNaN(idade) || isNaN(peso)){ return document.querySelector("#saida").innerHTML="preencha todos os dados acima"}
        switch(sexo){
            case "hg": var cf=clcr
                break
            case "mg":var cf=(clcr*85)/100
                break
            }
    
        var resultado=""    
        if(cf>=60){resultado="ClCr estimado: "+cf + " ml/min/1,73m2"}
            else{resultado="ClCr estimado: "+cf + " ml/min/1,73m2." +
                " Sugiro avaliação de um nefrologista!"}
        document.querySelector("#saida").innerHTML=resultado    
    }

    //EVENTOS DE CLICAR

    document.addEventListener('click', function(e){
        const el= e.target;
        if(el.classList.contains('campo1')){
            e.preventDefault();
            ajuste();}
        if(el.classList.contains('reset')){
            e.preventDefault();
            limpar();}
        if(el.classList.contains('campo3')){
            e.preventDefault();
            inf();}   
        if(el.classList.contains('limparc')){
            e.preventDefault();
            limparc();}  
        if(el.classList.contains('enviar')){
            e.preventDefault();
            
        }
        
    })

    //FUNÇÃO AJUSTE

    function ajuste(){
    
    let medicamento= document.querySelector("#atb").value;
    medicamento= medicamento.toLowerCase();
    let clcr=document.querySelector("#nclcr").value;
    clcr= parseFloat(clcr)
    let dose;
    if(isNaN(clcr)||medicamento===""){ return document.querySelector("#ajust").innerHTML="preencha todos os dados acima"};
        
    switch(medicamento){
            
        case "aciclovir": if(clcr>50){dose="VENOSO: 5 a 12,5mg/kg de 8/8h; ORAL: 800mg 4/4h (5x/dia)"}
            else if(clcr<=50&&clcr>25){dose="VENOSO: 5 a 12,5mg/kg a cada 12 a 24h; ORAL: 800mg 4/4h (5x/dia)"}
            else if(clcr<=25&&clcr>=10){dose="VENOSO: 5 a 12,5mg/kg a cada 12 a 24h; ORAL: 800mg de 8/8h "} 
            else if(clcr<10){dose="VENOSO: 2,5 a 6,25mg/kg a cada 24h, se em hemodiálise fazer dose extra após; ORAL: 800mg de 12/12h, se em hemodiálise fazer dose extra após"} 
        break;   
        case "albendazol": dose="400mg a cada 12 a 24h, via oral, não precisa de correção; sem dados concretos para pacientes em hemodiálise"
        break;
        case "amicacina": if(clcr>50){dose="7,5mg/kg de 12/12h EV/IM"} else if(clcr<=50&&clcr>=10){dose="7,5mg/kg a cada 24h"} else if(clcr<10)
        {dose="7,5mg/kg a cada 48h; se estiver em HD fazer dose extra de 3,25mg/kg após; se HD contínua, 7,5mg/kg 24/24h"}    
        break;
        case "amoxacilina": if(clcr>50){dose="500mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="250 a 500mg de 12/12h"} else if(clcr<10){dose="250 a 500mg a cada 24h"} 
        break;
        case "amoxicilina": if(clcr>50){dose="500mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="250 a 500mg de 12/12h"} else if(clcr<10){dose="250 a 500mg a cada 24h"} 
        break;
        case "amoxacilina-clavulanato": if(clcr>50){dose="500/125mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="250 a 500/125mg de 12/12h"} 
        else if(clcr<10){dose="250 a 500/125mg a cada 24h"} 
        break;
        case "amoxicilina-clavulanato": if(clcr>50){dose="500/125mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="250 a 500/125mg de 12/12h"} 
        else if(clcr<10){dose="250 a 500/125mg a cada 24h"} 
        break;
        case "ampicilina": if(clcr>20){dose="VENOSO: 0,5 a 2g de 6/6h; ORAL: 1g 6/6h"}
            else if(clcr<=20&&clcr>10){dose="VENOSO: 0,5 a 2g de 6/6h; ORAL: 1g 6/6h"}
            else if(clcr<=10){dose="VENOSO: 0,25 a 1g de 6/6h; se em CAPD, 250mg 12/12h; se HD, 1 dose extra após a sessão"} 
        break;
        case "anfotericina b": dose="0,4 a 1mg/kg/dia, não precisa de correção para a função renal"
        break;
        case "anita": dose= "500mg 12/12h, sem dados na literatura para correção para a função renal"
        break;
        case "azitromicina": dose="500mg a cada 24h, não precisa de correção para a função renal"
        break;
        case "cefalexina": if(clcr>20){dose="500mg de 6/6h"} else{dose= "500mg de 8/8h a 12/12h"}
        break;
        case "cefazolina": if(clcr>50){dose="1 a 2g de 8/8h"} else if(clcr<=50&&clcr>=10){dose="1 a 2g de 12/12h"} else if(clcr<10){dose="1 a 2g a cada 24/48h"}
        break;    
        case "ceftriaxone": dose="1g de 12/12h, não precisa de correção para a função renal"
        break;
        case "cefepime": if(clcr>50){dose="2g de 8/8h"} else if(clcr<=50&&clcr>=10){dose="2g de 12/12h"} else if(clcr<10){dose="1g a cada 24h"}
        break;
        case "ceftazidime": if(clcr>50){dose="2g de 8/8h"} else if(clcr<=50&&clcr>=10){dose="2g de 12/12h"} else if(clcr<10){dose="2g a cada 24/48h"}
        break;
        case "cefuroxime": if(clcr>50){dose="VO: 125 a 500mg 12/12h; EV: 0,75-1,5g de 8/8h"} else if(clcr<=50&&clcr>=10){dose="VO: 125 a 500mg 12/12h; EV: 0,75-1,5g de 12/12 a 8/8h"} else if(clcr<10){dose="VO: 125 a 500mg 12/12h; EV: 0,75-1,5g a cada 24h, dose extra após HD."}
        break;
        case "cidofovir": if(clcr>55){dose="5mg/kg/semana por 2 semanas na indução, e 5mg/kg a cada 2 semanas na manutenção"} else{dose="uso contra-indicado"}    
        break;
        case "ciprofloxacino": if(clcr>50){dose="500 a 750mg de 12/12h VO; 400mg de 12/12h EV"} 
        else if(clcr<=50&&clcr>=10){dose="250 a 500mg de 12/12h VO; 400mg 1x/dia EV"} 
        else if(clcr<10){dose="500mg/dia VO ou 400mg/dia EV; se em HD, dose extra de 500mg VO ou 400mg EV após; se HD contínua, 500mg 12/12h VO ou 400mg 12/12h EV"}
        break;
        case "clavulin": if(clcr>50){dose="500/125mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="250 a 500/125mg de 12/12h"} 
        else if(clcr<10){dose="250 a 500/125mg a cada 24h"} 
        break;
        case "clindamicina": dose= "600mg de 6/6h, não precisa de correção para a função renal"
        break;
        case "claritromicina": if(clcr>50){dose="500mg de 12/12h"} else if(clcr<=50&&clcr>=10){dose="500mg a cada 12/24h"} 
        else if(clcr<10){dose="500mg 1x/dia, se HD dose extra após; se HD contínua 500mg a cada 12/24h"}
        break; 
        case "colchicina": if(clcr>=50){dose= "0,5mg 2 a 4x/dia até remissão da dor e/ou apresentar vômitos/diarréia, dose máxima 6mg por curso; não utilizar nos próximos 3 dias"} else if(clcr<50)
        {dose="0,5mg 2 a 4x/dia até remissão da dor e/ou apresentar vômitos/diarréia, não ultrapassar 3mg por curso; mesma dose se terapia renal substitutiva; não utilizar nos próximos 3 dias"}
        break;
        case "colistina": if(clcr>=50){dose="160mg de 12/12h"} else if(clcr<50&&clcr>=10){dose="160mg a cada 24h"} else{dose="160mg a cada 48h"}
        break;
        case "dalbavancina": if(clcr>=30){dose="1g EV dose de ataque e após 500mg/dia por 7 dias"}
        else{dose="750mg EV dose de ataque e após 375mg/dia por 7 dias; sem em HD, 1g dose de ataque a após 500mg/dia por 7 dias; não há dados para CAPD"} 
        break;
        case "dapsona": dose="100mg ao dia, sem dados para alteração de função renal"
        break;
        case "daptomicina": if(clcr>=30){dose="4-6mg/kg/dia"} else{dose="6mg/kg a cada 48h; mesma dose se estiver em terapia renal substitutiva"} 
        break;
        case "doripenem": if(clcr>50){dose="500mg de 8/8h EV"} else if(clcr<=50&&clcr>=30){dose="250mg de 8/8h"} 
        else if(clcr<30&&clcr>=10){dose="250mg de 12/12h"}
        else{dose="não há dados disponíveis para clcr<10; se em HD contínua, fazer 500mg de 8/8h EV"}
        break;
        case "doxiciclina": dose="Não precisa de ajuste."
        break;
        case "ertapenem": if(clcr>=30){dose="1g a cada 24h"}
        else{dose="500mg a cada 24h; se em HD, se a última dose tiver sido feita há menos de 6h antes da próxima HD, fazer 150mg após a HD; se em HD contínua, fazer 0,5 a 1g a cada 24h"}
        break;
        case "fosfomicina": if(clcr>=10){dose="3g oral em dose única"} else{dose="medicação contra-indicada; inclusive se estiver em terapia renal substitutiva"}
        break;
        case "fluconazol": if(clcr>50){dose="200 a 400mg a cada 24h"} else{dose="100 a 200mg a cada 24h"}
        break;
        case "ganciclovir": if(clcr>50){dose="5mg/kg de 12/12h na indução e 2,5-5mg/kg dia na manutenção"} 
        else if(clcr<=50&&clcr>=10){dose="1,25 a 2,5mg/kg/dia na indução e 0,6-1,25mg/kg dia na manutenção"}
        else if(clcr<10){dose="1,25mg/kg 3x/sem na indução e 0,625mg/kg 3x/sem na manutenção; se em HD, dose extra após"}
        break;
        case "gatifloxacino": if(clcr>50){dose="400mg/dia VO/EV"} 
        else{dose="400mg de ataque e após 200mg/dia, assim também em HD contínua; se em HD, dose extra de 200mg após HD;"}
        break;
        case "gentamicina": if(clcr>50){dose="1,7 a 2mg/kg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="1,7 a 2mg/kg a cada 12/24h"} 
        else if(clcr<10){dose="1,7 a 2mg/kg a cada 48h; se em HD, fazer dose extra de 0,85 a 1mg/kg após; se HD contínua, 1,7 a 2mg/kg a cada 24h"}
        break;
        case "imipenem": if(clcr>50){dose="500mg de 6/6h"} else if(clcr<=50&&clcr>=10){dose="250mg a cada 8/12h"}
        else if(clcr<10){dose="125 a 250mg 12/12h; se em HD, dose extra após; se em HD contínua, 0,5 a 1g 12/12h"}
        break;
        case "isoniazida": dose="5mg/kg/dia, não precisa de ajuste, dose máxima de 300mg ao dia"
        break;
        case "itraconazol": dose="100 a 200mg de 12/12h, não precisa de correção para a função renal"
        break;
        case "ivermectina": dose="200mcg/kg/dia por 1 a 2 dias, não precisa de correção para função renal, sem dados para pacientes em hemodiálise"
        break;
        case "levofloxacino": if(clcr>=50){dose="750mg 1x/dia"} 
        else if(clcr<50&&clcr>=20){dose="750mg 48/48h"} 
        else if(clcr<20){dose="750mg 1x e após 500mg 48/48h, inclusive em HD clássica e contínua"}
        break;
        case "linezolida": dose="600mg de 12/12h, não precisa de correção para a função renal"
        break;
        case "mebendazol": dose="Não precisa de ajuste."
        break;
        case "meropenem": if(clcr>50){dose="1g de 8/8h"} else if(clcr<=50&&clcr>=25){dose="1g de 12/12h"} else if(clcr<25&&clcr>=10){dose="0,5g de 12/12h"} 
        else if(clcr<10){dose="500mg a cada 24h; se em HD, dose extra após; se em HD contínua, 1g de 12/12h"}
        break;
        case "metronidazol": if(clcr>50){dose="500mg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="500mg de 12/12h"} else if(clcr<10){dose="250mg de 8/8h"}
        break;
        case "nitazoxanida": dose="500mg de 12/12h, sem dados para alteração de função renal"
        break;
        case "nitrofurantoína": if(clcr>=20){dose="100mg de 6/6h"} else {dose="medicação contra-indicada para essa função renal"}
        break;               
        case "norfloxacino": if(clcr>30){dose="400mg de 12/12h"} else{dose="400mg 1x/dia"}
        break;
        case "ofloxacino": if(clcr>50){dose="200 a 400mg de 12/12h"} else if(clcr<=50&&clcr>=10){dose="200 a 400mg 1x/dia"}
        else{dose="200mg 1x/dia; se HD, dose extra após, se HD contínua 200 a 400mg 1x/dia"}
        break;
        case "penicilina G": if(clcr>50){dose="0,5-4 milhões de U de 4/4h"} else if(clcr<=50&&clcr>=10){dose="0,735-3 milhões de U de 4/4h"} else if(clcr<10){dose="20 a 50% da dose habitual"}
        break;
        case "pentamidina": if(clcr>=10){dose="4mg/kg ao dia"} else{dose="4mg/kg a cada 24h a 36h; sem em hemodiálise, 4mg/kg a cada 48h com dose extra após"}
        break;
        case "pirazinamida": if(clcr>=10){dose="25mg/kg/dia, dose máxima de 2,5g ao dia"} else{dose="12-25mg/kg/dia"}
        break;
        case "polimixina b": dose="15.000UI/kg/dia dividida em 2 tomadas, a correção para função  renal é controversa"
        break;
        case "rifampicina": if(clcr>50){dose="600 mg a cada 24h"} else{dose="300-600mg a cada 24h"}
        break;
        case "secnidazol": dose= "dose habitual, correção para função renal ainda controversa"
        break;
        case "Sulfametoxazol-Trimetoprim": if(clcr>=30){dose="5-20 mg/kg/dia, dividir em 2, 3 ou 4 tomadas"} else if(clcr<30&&clcr>=10){dose="5-10 mg/kg/dia de 12/12h"} 
        else if(clcr<10){dose="evitar, mas se optar por usar,  5-10mg/kg a cada 24h"}
        break;
        case "tazocin": if(clcr>50){dose="4,5g de 8/8h a 6/6h"} else if(clcr<=50&&clcr>=20){dose="2,25g de 6/6h"} else if(clcr<20){dose="2,25g de 8/8h"}
        break;
        case "teicoplamina": if(clcr>80){dose="Ataque (6mg/kg 12/12h 3 doses), após 6mg/kg a cada 24h"}
        else if(clcr<=80&&clcr>=30){dose="Ataque (6mg/kg 12/12h 3 doses), após 6mg/kg a cada 48h"} 
        else if(clcr<30){dose="Ataque (6mg/kg 12/12h 3 doses), após 6mg/kg a cada 72h; se em HD, dose extra após; se HD contínua, 6mg/kg 48/48h"}
        break;
        case "tobramicina": if(clcr>50){dose="1,7 a 2mg/kg de 8/8h"} else if(clcr<=50&&clcr>=10){dose="1,7 a 2mg/kg a cada 12/24h"} 
        else if(clcr<10){dose="1,7 a 2mg/kg a cada 48h; se em HD, fazer dose extra de 0,85 a 1mg/kg após; se HD contínua, 1,7 a 2mg/kg a cada 24h"}
        break;
        case "vancomicina": if(clcr>50){dose="EV: 1g de 12/12h; ORAL: 125 a 500mg 6/6h"} else if(clcr<=50&&clcr>=10){dose="EV: 1g a cada 24/96h; ORAL: 125 a 500mg 6/6h"} 
        else if(clcr<10){dose="EV: 1g a cada 4 a 7 dias, se HD contínua, 500mg a cada 24/48h; ORAL: 125 a 500mg 6/6h"}
        break;
        /* tuberculose*/
        case "estreptomicina": if(clcr>50){dose="15mg/kg ao dia via IM, dose máx: 1g"} else if(clcr<=50&&clcr>=10){dose="15mg/kg a cada 24-72h"}
         else{dose="15mg/kg a cada 72-96h; se estiver em hemodiálise, fazer dose extra de 7,5mg/kg após HD"}
        break;
        case "etionamida": if(clcr>=10){dose="500mg de 12/12h"} else{dose="250mg de 12/12h, inclusive se estiver em terapia renal substitutiva"}
        break;
        case "pirazinamida": if(clcr>=21){dose="25mg/kg a cada 24h"} else{dose="25mg/kg a cada 48h, se estiver em hemodiálise, dose extra após HD; se em CAPD: 25mg/kg a cada 24h"}
        break;
        case "rifampicina": if(clcr>50){dose="600mg ao dia"} else{dose="300 a 600mg a cada 24h, inclusive em paciente em terapia renal substitutiva"}
        break;
        case "rifabutina": if(clcr>50){dose="300mg ao dia"} else{dose="150mg a cada 24h; não há dados sobre terapia renal substitutiva"}
        break;
        /*anti-retrovirais*/
        case "ftc/tdf": if(clcr>50){dose="1cp ao dia"} else if(clcr<=50&&clcr>=30){dose="1g a cada 48h"} else if(clcr<30){dose="evitar a medicação; não usar em TRS"}
        break;
        case "3tc/zdv": if(clcr>50){dose="1cp de 12/12h"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "rpv/ftc/tdf": if(clcr>50){dose="1cp ao dia"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "ftc/taf": if(clcr>=30){dose="1cp ao dia"} else {dose="evitar a medicação; não usar em TRS"}
        break;
        case "3tc/ral": if(clcr>50){dose="1cp de 12/12h"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "abc/3tc": if(clcr>50){dose="1cp ao dia"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "atv/cobi": if(clcr>0){dose="1cp ao dia, não precisa de ajuste; não utilizar se estiver em hemodiálise, poucos dados a respeito de CAPD"}
        break;
        case "elv/ftc/taf/cobi": if(clcr>=30){dose="1cp ao dia"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "dtg-rpv": if(clcr>0){dose="1cp ao dia, não precisa de ajuste; poucos dados a respeito de TRS"}
        break;
        case "rpv-ftc-taf": if(clcr>=30){dose="1cp ao dia"} else{dose="evitar a medicação; não usar em TRS"}
        break;
        case "drv/cobi": if(clcr>50){dose="1cp ao dia, não precisa de ajuste, nem para TRS"}
        break;
        case "efv-3tc-tdf": if(clcr>50){dose="1cp ao dia"} else{dose="evitar a medicação, não usar em TRS"}
        break;
        case "efv-3tc-tdf-cobi": if(clcr>=70){dose="1cp ao dia"} else{dose="evitar a medicação, não usar em TRS"}
        break;
        case "drv-cobi-ftc-taf": if(clcr>=30){dose="1cp ao dia"} else{dose="evitar a medicação, não usar em TRS"}
        break;
        case "dtg/abc/3tc": if(clcr>50){dose="1cp ao dia"} else{dose="evitar a medicação, não usar em TRS"}
        break;
        case "abc/3tc/zdv": if(clcr>50){dose="1cp de 12/12h"} else{dose="evitar a medicação, não usar em TRS"}
        break;
        /* hepatites*/
        case "adefovir": if(clcr>50){dose="10mg ao dia"} else if(clcr<=50&&clcr>=10){dose="10mg a cada 48 a 72h"} else if(clcr<10){dose="10mg a cada 72h, se em hemodiálise fazer dose extra após"}
        break;
        case "cidofovir": if(clcr>55){dose="INDUÇÃO: 5mg/kg/sem EV por 2 sem; MANUTENÇÃO: 5mg/kg EV a cada 2 semanas"}
        else{dose="medicação contra-indicada, inclusive em terapia renal substitutiva"} 
        break; 
        case "dataclasvir": dose="60mg de 12/12h; poucos dados a respeito de TRS"
        break; 
        case "entecavir": if(clcr>50){dose="0,5mg ao dia"} else if(clcr<=50&&clcr>=10){dose="0,15 a 0,25mg ao dia"} else if(clcr<10){dose="0,05mg ao dia; se em hemodiálise dose extra após"}
        break;
        case "lamivudina": if(clcr>50){dose="300mg ao dia"} else if(clcr<=50&&clcr>=10){dose="50 a 150mg/ ao dia"} 
        else{dose="25 a 50mg ao dia; se estiver em HD: dose extra após; se HD contínua, 100mg no primeiro dia e 50mg/dia após"}
        break;
        case "oseltamivir": if(clcr>=30){dose="75mg de 12/12h"} else if(clcr<30&&clcr>=10){dose="75mg/dia"} else{dose="não há dados sobre a segurança do seu uso"}
        break;
        case "ribavirina": dose="a dose depende da indicação, usar com cautela para ClCr<=50ml/min"
        break; 
        case "simeprevir": if(clcr>50){dose="150mg ao dia"} else if(clcr<=50&&clcr>=30){dose="usar com cuidado"} else{dose="não há dados sobre a segurança do seu uso"}
        break;
        case "sofosbuvir": if(clcr>50){dose="400mg ao dia"} else if(clcr<=50&&clcr>=30){dose="usar com cautela"} else{dose="não há dados sobre a segurança do seu uso"}
        break;
        case "tamiflu": if(clcr>=30){dose="75mg de 12/12h"} else if(clcr<30&&clcr>=10){dose="75mg/dia"} else{dose="não há dados sobre a segurança do seu uso"}
        break;
        case "telbivudina": if(clcr>=50){dose="600mg ao dia"} else if(clcr<50&&clcr>=30){dose="600mg a cada 48h"} else if(clcr<30&&clcr>=10){dose="600mg a cada 72h"} else{dose="600mg a cada 96h, se em hemodiálise fazer dose extra após; sem dados para CAPD"}
        break;
        case "tenofovir": if(clcr>50){dose="300mg ao dia"} else if(clcr<=50&&clcr>=30){dose="300mg a cada 48h"} else if(clcr<30&&clcr>=10){dose="300mg a cada 72/96h"}
        else{dose="não há dados sobre a segurança do seu uso"}
        break;

        //analgésicos, ansiolíticos
        case "amitriptilina": dose="não precisa de ajuste"
        break;
        case "citalopram": dose="10 a 40mg ao dia. Não precisa de ajuste para a função renal."
        break;
        case "codeína": if(clcr>20){dose="30 a 60mg 4/4h via oral"} else if(clcr>=10&&clcr<=20){
              dose="30mg 4/4h"} else{dose="30mg de 6/6h; não é dialisável."}
        break;
        case "dipirona": dose="Não precisa de ajuste."
        break;
        case "duloxetina": if(clcr>=30){dose="dose habitual"} else{dose="iniciar com 30mg, dose máxima 60mg/dia, válido para todas as modalidades de TRS"}
        break;
        case "escitalopram": dose="Não precisa de ajuste para a função renal. Com clcr<30, iniciar dose baixa e titular."
        break;
        case "gabapentina": if(clcr>50){dose="dose habitual"} else if(clcr<=50&&clcr>=30){dose="não ultrapassar 900mg/dia"}
        else if(clcr<30&&clcr>=15){dose="não ultrapassar 600mg/dia"} else{dose="se em DP: 100-300mg em dias alternados; se em HD: 100-300mg após HD"}
        break;
        case "melatonina": dose="Não precisa de ajuste."
        break;
        case "metadona": if(clcr>=10){dose="Dose habitual, 5-10mg a cada 6-8h."} else{dose="50 a 75% da dose habitual, titular conforme resposta."}
        break;
        case "mirtazapina": if(clcr>20){dose="dose habitual, 15 a 45mg ao dia, dividida em 1 a 2 tomadas"} else{dose="iniciar dose baixa e monitorar de perto"}
        break;
        case "nortriptilina": dose="não precisa de ajuste."
        break;
        case "paracetamol": dose="não precisa de ajuste."
        break;
        case "pregabalina": if(clcr>60){dose="dose habitual"} else if(clcr<=60&&clcr>=30){dose="dose iniciaL 75mg, aumentar até 150mg/dia conforme tolerância"}
        else if(clcr<30&&clcr>=15){dose="dose inicial 50mg, aumentar até 75mg/dia conforme tolerância"} 
        else{dose="dose iniciaL 25mg, aumentar até 50mg/dia conforme tolerância; se em TRS: dose inicial de 25mg e aumentar até 75mg/dia conforme tolerância, ou 75mg/dia 3x/semana após HD"}
        break;
        case "quetiapina": if(clcr>50){dose="dose habitual"} else{dose="iniciar com 25mg/dia e aumentar de 25 a 50mg ao dia conforme resposta."}
        break;
        case "venlafaxina": if(clcr>=30){dose="dose habitual"} else{dose="iniciar com 37,5mg, dose máxima é 50% da habitual, válido para todas as modalidades de TRS"}
        break;
        case "youtube": dose="Toma vergonha na cara Zé!"
        break;
        case "twitter": dose="Ah toma vergonha na cara Zé!"
        break;
        case "zap retard": dose="É sério mesmo!?"
        break;
        
        //miscelânea
        case "alogliptina": if(clcr>50){dose="25mg ao dia"} else if(clcr<=50&&clcr>=30){dose="12,5mg ao dia"} 
        else{dose="6,25mg ao dia"}
        break;
        case "alopurinol": if(clcr>50){dose="300mg ao dia"} else if(clcr<=50&&clcr>=20){dose="200 - 300mg/dia"} 
        else if(clcr<20&&clcr>=10){dose="100-200mg/dia"} else{dose="100mg/dia."}
        break;
        case "apixabana": if(clcr>50){dose="Dose habitual"} else if(clcr<=50&&clcr>30){dose="Dose habitual, usar com cautela"}
        else if(clcr<=30&&clcr>15){dose="Dose habitual, usar com cautela; se uso para FA, 2.5mg 12/12h"} else{dose="Usar com muita cautela; se uso para FA, 2.5mg 12/12h"}
        break;
        case "atorvastatina": dose="10 a 80mg ao dia, não precisa de ajuste."
        break;
        case "canagliflozina": if(clcr>=35){dose="100 a 300mg ao dia"} else{dose="evitar a medicação."}
        break;
        case "carbamazepina": dose="Não precisa de ajuste para a função renal."
        break;
        case "cinarizina": dose="Não precisa de ajuste para a função renal."
        break;
        case "ciprofibrato": if(clcr>20){dose="100mg ao dia, via oral"} else if(clcr<=20&&clcr>10){dose="100mg a cada 48h, via oral."}
        else if(clcr<=10){dose="evitar a medicação"}
        break;
        case "colestiramina": dose="Não precisa de ajuste."
        break;
        case "dapagliflozina": if(clcr>=25){dose="10mg ao dia"} else{dose="Evitar a medicação; ainda sem evidência."}
        break;
        case "desloratadina": dose="5mg ao dia; não precisa de ajuste."
        break;
        case "domperidona": dose="Não precisa de ajuste."
        break;
        case "doxazosina": dose="Não precisa de ajuste."
        break;
        case "dudasterida": dose="Não precisa de ajuste."
        break;
        case "eliquis": if(clcr>50){dose="Dose habitual"} else if(clcr<=50&&clcr>30){dose="Dose habitual, usar com cautela"}
        else if(clcr<=30&&clcr>15){dose="Dose habitual, usar com cautela; se uso para FA, 2.5mg 12/12h"} else{dose="Usar com muita cautela; se uso para FA, 2.5mg 12/12h."}
        break;
        case "empagliflozina": if(clcr>=30){dose="10 a 25mg ao dia"} else{dose="Evitar a medicação."}
        break;
        case "enoxaparina": if(clcr>30){dose="dose habitual"} else if(clcr<=30&&clcr>=15){dose="administrar 50% da dose; se para trombofilaxia: 20mg/dia."} 
        else {dose="administrar 50% da dose; se para trombofilaxia: 20mg/dia; se possível evitar a medicação e avaliar outra opção."}
        break;
        case "ezetimibe": dose="10mg ao dia, não precisa de ajuste."
        break;
        case "gliclazida": dose="30 a 120mg/dia, não precisa de ajuste; experiência limitada quanto ao uso para clcr<30."
        break;
        case "glimepirida": if(clcr>=45){dose="1 a 8mg/dia"} else{dose="experiência limitada quanto ao uso para clcr<45."}
        break;
        case "glipizida": dose="2,5 a 20mg/dia, não precisa de ajuste; experiência limitada quanto ao uso para clcr<30."
        break;
        case "glibenclamida": if(clcr>=60){dose="2,5 a 20g ao dia"} else{dose="Evitar a medicação"}
        break;
        case "linagliptina": dose="5mg ao dia, não precisa de ajuste"
        break;
        case "liraglutida": dose="0,6 a 1,8mg/dia, não precisa de ajuste; experiência limitada quanto ao uso para clcr<15."
        break;
        case "metformina": if(clcr>=60){dose="500mg a 3g divididas em 2 tomadas; se MTF XR 500mg a 2g ao dia, divididas em 2 tomadas"} else if(clcr<60&&clcr>=45){dose="administrar 50% da dose"} 
        else if(clcr<45&&clcr>=30){dose="administrar até 1g ao dia"}else{dose="evitar a medicação"}
        break;
        case "montelucaste": dose="10mg ao dia, não precisa de ajuste"
        break;
        case "olanzapina": if(clcr>50){dose="5 a 20mg ao dia"} else{dose="Iniciar com 5mg ao dia; depósito: 150mg a cada 4 semanas, titular conforme necessário."}
        break;
        case "pioglitazona": dose="15 a 45mg/dia, não precisa de ajuste; experiência limitada quanto ao uso para clcr<15."
        break;
        case "repaglinida": dose="0,5 a 2mg/dia, experiência limitada quanto ao uso para clcr<30."
        break;
        case "rivaroxabana": if(clcr>50){dose="Dose habitual"} else if(clcr<=50&&clcr>=30){dose="15mg ao dia; se uso para TVP/TEP, 15mg 12/12h por 3 semanas e após 15-20mg/dia"}
        else if(clcr<30&&clcr>15){dose="15mg ao dia, usar com cautela; se uso para TVP/TEP, 15mg 12/12h por 3 semanas e após 15-20mg/dia"} else{dose="Evitar"}
        break;
        case "rosuvastatina": if(clcr>60){dose="5 a 40mg ao dia"} else if(clcr<=60&&clcr>30){dose="5 a 20mg/dia"}
        else if(clcr<=30){dose="5 a 10mg ao dia, usar com cautela"}
        break;
        case "sinvastatina": if(clcr>=10){dose="5 a 80mg ao dia"} else{dose="10mg ao dia, doses até 40mg/dia tem sido utilizadas por alguns autores."}
        break;
        case "trayenta": dose="5mg ao dia, não precisa de ajuste"
        break;
        case "xarelto": if(clcr>50){dose="Dose habitual"} else if(clcr<=50&&clcr>=30){dose="15mg ao dia; se uso para TVP/TEP, 15mg 12/12h por 3 semanas e após 15-20mg/dia"}
        else if(clcr<30&&clcr>15){dose="15mg ao dia, usar com cautela; se uso para TVP/TEP, 15mg 12/12h por 3 semanas e após 15-20mg/dia"} else{dose="Evitar"}
        break;   
                                     
        default: dose='Medicamento não cadastrado.'+ '<br>'+  'Para maiores informações e/ou inclusão da medicação, entre em contato: ' + "<i>" +'fredrcpmed@gmail.com' + "</i>";
        }

        document.querySelector("#ajust").innerHTML= "<b>" + medicamento.toUpperCase()+'<br>' + dose;
        document.getElementById('atb').focus(); 
        }
          
        function inf(){
            document.querySelector("#ajust").innerHTML='Literatura: "Sanford Guide" e "Renal Drug"'
        }

//RESETAR

    function limpar(){
        document.location.reload();                        
    }   
    
    function limpara(){
        document.querySelector('#cr').value=""
        document.querySelector('#idade').value=""
        document.querySelector('#a1').value=""
        document.querySelector('#output').innerHTML=""

    }

    function limparb(){
        document.querySelector("#crg").value=""
        document.querySelector("#idadeg").value=""
        document.querySelector("#pesog").value=""
        document.querySelector("#saida").innerHTML=""

    }

    function limparc(){
        document.querySelector("#atb").value=""
        document.querySelector('#nclcr').value="" 
        document.querySelector('#ajust').innerHTML=""
    }
