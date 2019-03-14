
function snimi(putnik){
    var ls_putnik;
    if (localStorage.getItem('putnik') == null){
        ls_putnik = [];
    } else {
        ls_putnik = JSON.parse(localStorage.getItem('putnik'));
    } 
    ls_putnik.push(putnik);
    localStorage.setItem('putnik', JSON.stringify(ls_putnik));
    var ime_prezime = document.querySelector('#ime_prezime').value = ''; 
    var broj_osoba = document.querySelector('#broj_osoba').value = '';
    var mail = document.querySelector('#mail').value = '';
}

document.querySelector('.posalji').addEventListener('click', function(e){
    e.preventDefault(); // sprečava proveru na email inputu ali i da toga nema prikazala bi se poruka da email nije validan i sve jedno bi upisao u LS
    var ime_prezime = document.querySelector('#ime_prezime').value;
    var broj_osoba = document.querySelector('#broj_osoba').value;
    var mail = document.querySelector('#mail').value;     
    var opcija = parseInt(document.querySelector('#polazak').value);
    var datum_polaska;
    switch(opcija){
        case 1: datum_polaska = '25.05.2019.';break;
        case 2: datum_polaska = '15.06.2019.';break;
        case 3: datum_polaska = '10.07.2019.';break;
        case 4: datum_polaska = '05.08.2019.';break;
        default: datum_polaska = '25.05.2019.' ;
    }
    /* provera da li su uneti podaci u poljima */
    if (ime_prezime.trim() == '' || broj_osoba.trim() == '' || mail.trim() == ''){
        alert('Sva polja su obavezna!');
        return;
    }
    
    document.querySelector("#rez").innerHTML = ('Rezervacija je uspešno obavljena, hvala!');

    var putnik = {
    ime:ime_prezime,
    broj:broj_osoba,
    mail:mail,
    datum:datum_polaska,
    destinacija: document.querySelector('h1').innerHTML
    };
    snimi(putnik);
});
        
