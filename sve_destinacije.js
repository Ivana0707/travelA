var data = {
    destinacije:[
        { tip: 'vikend putovanje',  mesto: 'Perućac', slika:'slike/perucac1.jpg', destlink:'dest_perucac.html'},
        { tip: 'letovanje',  mesto: 'Lefkada - Nikiana', slika:'slike/nikiana8.jpg', destlink:'dest_nikiana.html'},
        { tip: 'letovanje',  mesto: 'Halkidiki - Pefkohori', slika:'slike/pefkohori8.jpg', destlink:'dest_pefkohori.html'},
        { tip: 'letovanje',  mesto: 'Egina - Agia Marina', slika:'slike/egina9.jpg', destlink:'dest_egina.html'},
        { tip: 'vikend putovanje',  mesto: 'Planina Zlatar', slika:'slike/zlatar1.jpg', destlink:'dest_zlatar.html'},
        { tip: 'zimovanje',  mesto: 'Planina Zlatar', slika:'slike/zlatar6.jpg', destlink:'dest_zlatar.html'},
        { tip: 'zimovanje',  mesto: 'Planina Olimp', slika:'slike/olimp1.jpg', destlink:'dest_olimp.html'},
        { tip: 'letovanje',  mesto: 'Sivota',   slika:'slike/sivota10.jpg', destlink:'dest_sivota.html'},
        { tip: 'vikend putovanje',  mesto: 'Borsko jezero', slika:'slike/borsko6.jpg', destlink:'dest_borsko.html'}
    ]
};

var sve_destinacije = [];

for(let i = 0; i < data.destinacije.length; i++){
    sve_destinacije[i] = napravi_div_u_galeriji(data.destinacije[i]);
    document.querySelector('#galerija').appendChild(sve_destinacije[i]);
}
function napravi_div_u_galeriji(dest){
    var novi_div = document.createElement('div');
    novi_div.classList.add('destinacija');

    var slikaDestinacije = document.createElement("img");
    slikaDestinacije.src = dest.slika;
    novi_div.insertAdjacentElement('afterbegin', slikaDestinacije);

    var naziv = document.createElement('div');
    naziv.classList.add('nazivSlike');
    novi_div.appendChild(naziv);

    var link1 = document.createElement("a");
    link1.href = dest.destlink;
    link1.target = '_blank';
    link1.classList.add("link"); 
    link1.innerHTML = dest.mesto;
    naziv.appendChild(link1);

    var link2 = document.createElement("a");
    link2.href = '#';
    link2.classList.add("tip"); 
    link2.innerHTML = dest.tip;
    naziv.appendChild(link2);
    return novi_div;
}

document.querySelector('#pretraga').onclick = function(){
    pretrazi(document.querySelector('#search').value.toLowerCase()); 
}
document.querySelector("#search").addEventListener('keyup', function(event){
    if (event.keyCode === 13){
        pretrazi(document.querySelector('#search').value.toLowerCase());
    }
});
document.querySelector("#filteri").addEventListener('click', function(){
    var neki ='';
    document.querySelector('#search').value = '';
    if (document.querySelector("input[name='c1']:checked") !== null ){
        neki = document.querySelector("input[name='c1']:checked").value;
        document.querySelector('#galerija').innerHTML = '';
    }
    pretrazi(neki);
});

function pretrazi(pret){
    var d = pret;
    document.querySelector('#galerija').innerHTML = '';  
    sve_destinacije = [];
    var ind = -1;
    for(var i = 0; i < data.destinacije.length; i++){
        if (data.destinacije[i].mesto.toLowerCase().indexOf(d) > -1){
            sve_destinacije[i] = napravi_div_u_galeriji(data.destinacije[i]);
            document.querySelector('#galerija').appendChild(sve_destinacije[i]);
            ind = i;
        }else
            if(data.destinacije[i].tip.toLowerCase().indexOf(d) > -1 ){
                sve_destinacije[i] = napravi_div_u_galeriji(data.destinacije[i]);
                document.querySelector('#galerija').appendChild(sve_destinacije[i]);
                ind = i;
            }
    }
    if (ind == -1){
        document.querySelector('#galerija').innerHTML = "za uneti pojam " + '"' + d + '"' + " nema rezultata pretrage";
        document.querySelector('#galerija').setAttribute("class", "galerija1");
    }
}
