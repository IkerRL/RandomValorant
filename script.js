// --- CONFIGURACIÓN DE IMÁGENES (Pega tus enlaces aquí) ---
const shieldImages = [
    "https://valorantinfo.com/images/es/grafiti-peligro_valorant_transparent_icon_4509.webp", "https://itzmrblox.github.io/ValorantRandom/assets/weapons/lightshields.png", "https://static.wikia.nocookie.net/valorant/images/a/aa/Regen_Shield.png", "https://static.wikia.nocookie.net/valorant/images/6/62/Heavy_Armor.png"
];

const randomImages = [
    "https://valorantinfo.com/images/es/grafiti-nanomight_valorant_transparent_icon_107829.webp", "https://valorantinfo.com/images/es/grafiti-tecnicamente_valorant_transparent_icon_107809.webp", "https://valorantinfo.com/images/es/grafiti-recibido-cuac_valorant_transparent_icon_105484.webp", "https://valorantinfo.com/images/es/grafiti-marcate-un-baile_valorant_gif_98518.gif", "https://valorantinfo.com/images/es/grafiti-gato-avergonzado_valorant_transparent_icon_95077.webp",
    "https://valorantinfo.com/images/es/grafiti-bombastico_valorant_gif_80238.gif", "https://valorantinfo.com/images/es/grafiti-valiant-hero_valorant_gif_61992.gif", "https://valorantinfo.com/images/es/grafiti-ya-veo_valorant_transparent_icon_59166.webp", "https://valorantinfo.com/images/es/grafiti-hasta-nunqui_valorant_gif_53241.gif", "r10.png"
];

const weaponImages = [
    "https://valorantinfo.com/images/es/grafiti-ni-un-credito_valorant_transparent_icon_55901.webp", "https://static.wikia.nocookie.net/valorant/images/5/57/Classic.png", "https://static.wikia.nocookie.net/valorant/images/7/77/Shorty.png", "https://static.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png", "https://static.wikia.nocookie.net/valorant/images/a/ab/Ghost.png",
    "https://static.wikia.nocookie.net/valorant/images/1/1f/Bandit.png", "https://static.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png", "https://static.wikia.nocookie.net/valorant/images/b/b6/Stinger.png", "https://static.wikia.nocookie.net/valorant/images/9/90/Spectre.png", "https://static.wikia.nocookie.net/valorant/images/e/eb/Bucky.png",
    "https://static.wikia.nocookie.net/valorant/images/8/8a/Judge.png", "https://static.wikia.nocookie.net/valorant/images/0/07/Bulldog.png", "https://static.wikia.nocookie.net/valorant/images/f/fd/Guardian.png", "https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png", "https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png",
    "https://static.wikia.nocookie.net/valorant/images/b/b9/Marshal.png", "https://static.wikia.nocookie.net/valorant/images/f/f0/Outlaw.png", "https://static.wikia.nocookie.net/valorant/images/1/17/Operator.png", "https://static.wikia.nocookie.net/valorant/images/0/05/Ares.png", "https://static.wikia.nocookie.net/valorant/images/5/58/Odin.png"
];

// --- LÓGICA ---
const lever = document.getElementById('lever');
const statusText = document.getElementById('status-text');

const sImg = document.getElementById('shield-img');
const rImg = document.getElementById('random-img');
const wImg = document.getElementById('weapon-img');

const sPh = document.getElementById('shield-placeholder');
const rPh = document.getElementById('random-placeholder');
const wPh = document.getElementById('weapon-placeholder');

let isSpinning = false;

lever.addEventListener('click', () => {
    if (isSpinning) return;
    
    isSpinning = true;
    lever.classList.add('lever-active');
    statusText.innerText = "SORTEANDO EQUIPAMIENTO...";

    // Preparamos los slots
    sPh.style.display = "none";
    rPh.style.display = "none";
    wPh.style.display = "none";
    sImg.style.display = "block";
    rImg.style.display = "block";
    wImg.style.display = "block";

    setTimeout(() => {
        lever.classList.remove('lever-active');
        startSpin();
    }, 400);
});

function startSpin() {
    let counts = 0;
    const interval = setInterval(() => {
        // Giro aleatorio simultáneo
        sImg.src = shieldImages[Math.floor(Math.random() * shieldImages.length)];
        rImg.src = randomImages[Math.floor(Math.random() * randomImages.length)];
        wImg.src = weaponImages[Math.floor(Math.random() * weaponImages.length)];
        
        counts++;
        if (counts > 25) {
            clearInterval(interval);
            isSpinning = false;
            statusText.innerText = "CONFIGURACIÓN LISTA";
        }
    }, 80);
}
