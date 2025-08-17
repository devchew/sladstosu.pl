const log = (text) => { console.log(`%c${text}`,"font-family:monospace; font-size: 14px")};
const head = (text) => { console.log(`%c${text}`,"font-family:monospace; font-size: 20px")};

window.historie = [];
let dzien = sessionStorage.getItem('z_dnia_informatyka') || 0;
let predkosc_czytania = 1000;

const nastepny_dzien = () => {
    try {
        window.historie[dzien]();
        sessionStorage.setItem('z_dnia_informatyka', dzien);
    } catch(e) {
        log('To był mój ostatni dzień w tej pracy');
    }
    return;
}
const nastepny = () => {console.log('%cnastepny_dzien()', "font-family:monospace; font-size: 20px")};

let ile_to_juz_dni = 0;
const dodaj_dzien = (historia) => {
    window.historie.push(() => {
        console.clear();
        historia.split('\n').map((tekst, linia, linie) => {
            setTimeout(() => (linia ? log : head)(tekst), linia * predkosc_czytania);
            if (linia + 1 == linie.length) {
                setTimeout(nastepny, (linia + 1) * predkosc_czytania);
            } 
        });
        dzien++;
        return;
    });
}

const dzien1 = nastepny_dzien;