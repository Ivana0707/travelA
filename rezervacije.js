var ls_putnik;

if (localStorage.getItem('putnik') == null){
    ls_putnik = [];
} else {
    ls_putnik = JSON.parse(localStorage.getItem('putnik'));
} 
var tabela = document.querySelector('.rezervacije');  
for (var i = 0; i < ls_putnik.length; i++){
    var novi_red = document.createElement('tr');
    novi_red.innerHTML = '<td>' + ls_putnik[i].ime + '</td><td>' + ls_putnik[i].destinacija + '</td><td>' + ls_putnik[i].broj +
                        '</td><td>' + ls_putnik[i].datum + '</td><td>' + ls_putnik[i].mail + '</td><td>' + '<a href="#" class="obrisi">obriši</a>' + '</td>';
    tabela.appendChild(novi_red);
}

var zaBrisanje = document.querySelectorAll('.obrisi');
for (var i = 0; i < zaBrisanje.length; i++){
    zaBrisanje[i].addEventListener('click', function(e){
        obrisi(e.target.parentElement.parentElement.firstChild.textContent); // prosleđuje tekst prvog deteta TR elementa (koje sadrži ime) funkciji obrisi
        e.target.parentElement.parentElement.remove(); // targetira roditelja roditelja kliknutog elementa, u ovom slučaju TR element i remove ga briše sa strane
    });
}
function obrisi(rezevacija){
    var ind = -1;
    for (var i = 0; i < ls_putnik.length; i++){
        if (ls_putnik[i].ime == rezevacija){
            ind = i;
        }
    }
    ls_putnik.splice(ind, 1);
    localStorage.setItem('putnik', JSON.stringify(ls_putnik));
}
