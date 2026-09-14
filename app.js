// Database Diperluas (Semua Negara & Wilayah di Dunia)
const COUNTRIES = [
    { country: "Indonesia", code: "id", hint: "Negara kepulauan terbesar di Asia Tenggara." },
    { country: "Jepang", code: "jp", hint: "Negara Matahari Terbit di Asia Timur." },
    { country: "Amerika Serikat", code: "us", hint: "Negara Paman Sam dengan bendera bintang-garis." },
    { country: "Kanada", code: "ca", hint: "Terkenal dengan simbol daun maple." },
    { country: "Inggris", code: "gb", hint: "Negara asal bendera Union Jack." },
    { country: "Prancis", code: "fr", hint: "Negara Menara Eiffel di Eropa Barat." },
    { country: "Jerman", code: "de", hint: "Negara industri di Eropa dengan tiga warna horizontal." },
    { country: "Italia", code: "it", hint: "Negara berbentuk sepatu boot." },
    { country: "Australia", code: "au", hint: "Negara benua sekaligus pulau di selatan." },
    { country: "Brasil", code: "br", hint: "Negara sepak bola terkenal di Amerika Selatan." },
    { country: "Korea Selatan", code: "kr", hint: "Negara ginseng dengan lambang Taeguk di tengah." },
    { country: "Spanyol", code: "es", hint: "Negara matador di Semenanjung Iberia." },
    { country: "Belanda", code: "nl", hint: "Negara kincir angin dan tulip." },
    { country: "India", code: "in", hint: "Negara Asia Selatan dengan roda Ashok Chakra di tengah." },
    { country: "Tiongkok", code: "cn", hint: "Negara berbendera merah dengan lima bintang kuning." },
    { country: "Argentina", code: "ar", hint: "Negara penghasil daging sapi dengan matahari di bendera." },
    { country: "Meksiko", code: "mx", hint: "Negara Amerika Utara dengan lambang burung elang dan ular." },
    { country: "Rusia", code: "ru", hint: "Negara terluas di dunia dengan tiga warna horizontal." },
    { country: "Arab Saudi", code: "sa", hint: "Negara Hijau dengan tulisan kaligrafi syahadat." },
    { country: "Afrika Selatan", code: "za", hint: "Negara ujung benua Afrika dengan bendera warna-warni." },
    { country: "Malaysia", code: "my", hint: "Negara tetangga dengan lambang bulan sabit dan bintang." },
    { country: "Singapura", code: "sg", hint: "Negara pulau maju di selatan Malaysia." },
    { country: "Thailand", code: "th", hint: "Negara Gajah Putih di Asia Tenggara." },
    { country: "Vietnam", code: "vn", hint: "Negara bendera merah dengan satu bintang kuning besar." },
    { country: "Filipina", code: "ph", hint: "Negara kepulauan dengan matahari dan tiga bintang." },
    { country: "Turki", code: "tr", hint: "Negara dua benua dengan bulan sabit putih." },
    { country: "Swiss", code: "ch", hint: "Negara bendera palang putih berlatar merah." },
    { country: "Swedia", code: "se", hint: "Negara Skandinavia dengan salib kuning di atas biru." },
    { country: "Norwegia", code: "no", hint: "Negara Nordik dengan salib merah bergaris putih." },
    { country: "Portugal", code: "pt", hint: "Negara asal Cristiano Ronaldo di Semenanjung Iberia." },
    { country: "Selandia Baru", code: "nz", hint: "Negara Pasifik dengan lambang Salib Selatan." },
    { country: "Mesir", code: "eg", hint: "Negara piramida dengan lambang Elang Saladin." },
    { country: "Yunani", code: "gr", hint: "Negara asal mitologi kuno dengan garis biru-putih." },
    { country: "Polandia", code: "pl", hint: "Negara Eropa Tengah dengan warna putih di atas merah." },
    { country: "Ukraina", code: "ua", hint: "Negara dengan kombinasi warna biru langit dan kuning ladang gandum." },
    { country: "Belgia", code: "be", hint: "Negara cokelat dengan tiga garis vertikal hitam-kuning-merah." },
    { country: "Austria", code: "at", hint: "Negara Alpen dengan garis merah-putih-merah." },
    { country: "Denmark", code: "dk", hint: "Negara Skandinavia pencipta Lego." },
    { country: "Finlandia", code: "fi", hint: "Negara seribu danau dengan salib biru." },
    { country: "Irlandia", code: "ie", hint: "Negara hijau-putih-oranye di Eropa barat." },
    { country: "Kolombia", code: "co", hint: "Negara Amerika Selatan dengan warna kuning dominan." },
    { country: "Chili", code: "cl", hint: "Negara panjang di barat Amerika Selatan." },
    { country: "Peru", code: "pe", hint: "Negara situs Machu Picchu." },
    { country: "Maroko", code: "ma", hint: "Negara Afrika Utara dengan bintang hijau bersegi lima." },
    { country: "Aljazair", code: "dz", hint: "Negara Afrika utara dengan bulan sabit hijau." },
    { country: "Nigeria", code: "ng", hint: "Negara Afrika barat dengan dua garis hijau dan putih di tengah." },
    { country: "Kenya", code: "ke", hint: "Negara safari terkenal dengan perisai dan tombak Maasai." },
    { country: "Pakistan", code: "pk", hint: "Negara Asia Selatan dengan bidang putih besar di sisi kiri." },
    { country: "Bangladesh", code: "bd", hint: "Negara dengan lingkaran merah menyala di atas latar hijau." },
    { country: "Iran", code: "ir", hint: "Negara Timur Tengah dengan lambang khusus di tengah." },
    { country: "Kroasia", code: "hr", hint: "Negara pecahan Yugoslavia dengan lambang papan catur merah-putih." },
    { country: "Ceko", code: "cz", hint: "Negara Eropa Tengah dengan segitiga biru di sisi kiri." },
    { country: "Hungaria", code: "hu", hint: "Tiga garis horizontal merah, putih, hijau." },
    { country: "Rumania", code: "ro", hint: "Tiga garis vertikal biru, kuning, merah." },
    { country: "Bulgaria", code: "bg", hint: "Tiga garis horizontal putih, hijau, merah." },
    { country: "Serbia", code: "rs", hint: "Negara Eropa timur dengan lambang kerajaan kecil." },
    { country: "Slowakia", code: "sk", hint: "Memiliki lambang perisai ganda di atas tiga warna." },
    { country: "Lituania", code: "lt", hint: "Kuning, hijau, merah secara horizontal." },
    { country: "Latvia", code: "lv", hint: "Merah marun dengan garis putih tipis di tengah." },
    { country: "Estonia", code: "ee", hint: "Biru, hitam, putih secara horizontal." },
    { country: "Islandia", code: "is", hint: "Kebalikan dari bendera Norwegia (salib putih berbingkai merah)." },
    { country: "Luksemburg", code: "lu", hint: "Merah, putih, biru muda secara horizontal." },
    { country: "Monako", code: "mc", hint: "Merah di atas, putih di bawah (mirip Polandia terbalik)." },
    { country: "Vatikan", code: "va", hint: "Kuning dan putih dengan lambang kunci silang." },
    { country: "San Marino", code: "sm", hint: "Putih dan biru muda dengan lambang menara tiga." },
    { country: "Malta", code: "mt", hint: "Putih-merah dengan salib George kecil di pojok." },
    { country: "Andorra", code: "ad", hint: "Tiga garis vertikal biru, kuning, merah dengan lambang tengah." },
    { country: "Liechtenstein", code: "li", hint: "Biru di atas, merah di bawah dengan mahkota kecil." },
    { country: "Uruguay", code: "uy", hint: "Garis biru-putih dengan matahari tersenyum di pojok." },
    { country: "Paraguay", code: "py", hint: "Tiga warna horizontal dengan lambang negara berbeda di tiap sisi." },
    { country: "Bolivia", code: "bo", hint: "Merah, kuning, hijau dengan lambang negara." },
    { country: "Ekuador", code: "ec", hint: "Kuning, biru, merah dengan lambang burung condor." },
    { country: "Venezuela", code: "ve", hint: "Tiga warna dengan lengkungan bintang putih di tengah." },
    { country: "Kuba", code: "cu", hint: "Garis biru-putih dengan segitiga merah dan bintang putih." },
    { country: "Kosta Rika", code: "cr", hint: "Biru, putih, merah, putih, biru dengan lambang tengah." },
    { country: "Panama", code: "pa", hint: "Empat kotak dengan bintang biru dan merah." },
    { country: "Dominika", code: "dm", hint: "Hijau dengan salib tiga warna dan burung sisserou." },
    { country: "Barbados", code: "bb", hint: "Tiga vertikal biru-kuning-biru dengan lambang Trisula hitam." },
    { country: "Jamaika", code: "jm", hint: "Salib diagonal berwarna kuning dengan segitiga hijau dan hitam." },
    { country: "Nepal", code: "np", hint: "Satu-satunya negara dengan bendera bukan persegi panjang." },
    { country: "Bhutan", code: "bt", hint: "Negara Himalaya dengan gambar naga putih." },
    { country: "Sri Lanka", code: "lk", hint: "Bendera bergambar singa memegang pedang." },
    { country: "Kamboja", code: "kh", hint: "Bendera bergambar bangunan Angkor Wat." },
    { country: "Laos", code: "la", hint: "Bendera dengan lingkaran putih besar di tengah bidang merah-biru." },
    { country: "Myanmar", code: "mm", hint: "Tiga garis horizontal kuning, hijau, merah dengan bintang besar." },
    { country: "Brunei", code: "bn", hint: "Kuning dengan lambang bulan sabit merah melintang." },
    { country: "Mongolia", code: "mn", hint: "Merah-biru-merah dengan simbol Soyombo di sisi kiri." },
    { country: "Kazakhstan", code: "kz", hint: "Biru muda dengan lambang matahari dan pola tradisional kuning." },
    { country: "Uzbekistan", code: "uz", hint: "Biru, putih, hijau dengan bulan sabit dan bintang." },
    { country: "Madagaskar", code: "mg", hint: "Putih vertikal di kiri, merah dan hijau horizontal di kanan." },
    { country: "Ghana", code: "gh", hint: "Merah, kuning, hijau dengan bintang hitam di tengah." },
    { country: "Senegal", code: "sn", hint: "Hijau, kuning, merah dengan bintang hijau di tengah." },
    { country: "Kamerun", code: "cm", hint: "Hijau, merah, kuning vertikal dengan bintang emas." },
    { country: "Etiopia", code: "et", hint: "Hijau, kuning, merah horizontal dengan lambang bintang biru." },
    { country: "Tunisia", code: "tn", hint: "Merah dengan lingkaran putih dan bulan sabit merah di tengah." },
    { country: "Zimbabwe", code: "zw", hint: "Tujuh garis horizontal dengan burung Zimbabwe di segitiga putih." },
    { country: "Uganda", code: "ug", hint: "Garis hitam-kuning-merah berulang dengan burung bangau." },
    { country: "Mozambik", code: "mz", hint: "Bendera unik bergambar buku, cangkul, dan senjata serbu." },
    { country: "Angola", code: "ao", hint: "Merah dan hitam dengan lambang roda gigi dan parang." },
    { country: "Fiji", code: "fj", hint: "Biru muda dengan lambang Union Jack dan perisai." },
    { country: "Papua Nugini", code: "pg", hint: "Merah-hitam diagonal dengan burung cendrawasih." },
    { country: "Samoa", code: "ws", hint: "Merah dengan bidang biru di pojok berisi 5 bintang." },
    { country: "Tonga", code: "to", hint: "Merah dengan kotak putih di pojok berisi salib merah." },
    { country: "Mauritius", code: "mu", hint: "Empat warna horizontal: merah, biru, kuning, hijau." },
    { country: "Seychelles", code: "sc", hint: "Pita warna-warni menyebar dari sudut kiri bawah." },
    { country: "Maladewa", code: "mv", hint: "Merah berbingkai hijau dengan bulan sabit putih di tengah." },
    { country: "Komoro", code: "km", hint: "Empat garis horizontal dengan segitiga hijau berisi bulan sabit." },
    { country: "Djibouti", code: "dj", hint: "Biru dan hijau dengan segitiga putih dan bintang merah." },
    { country: "Eritrea", code: "er", hint: "Segitiga merah besar dengan cabang zaitun emas." },
    { country: "Siprus", code: "cy", hint: "Pulau Mediterania dengan siluet peta pulau warna tembaga." },
    { country: "Montenegro", code: "me", hint: "Merah bertepi emas dengan lambang burung elang berkepala dua." },
    { country: "Albania", code: "al", hint: "Merah pekat dengan elang hitam berkepala dua di tengah." },
    { country: "Bosnia", code: "ba", hint: "Segitiga kuning besar dengan bintang putih di latar biru." },
    { country: "Makedonia Utara", code: "mk", hint: "Matahari bersinar kuning di atas latar merah." },
    { country: "Slovenia", code: "si", hint: "Putih, biru, merah dengan lambang gunung Triglav." },
    { country: "Qatar", code: "qa", hint: "Marun dengan batas bergerigi putih di sisi kiri." },
    { country: "Bahrain", code: "bh", hint: "Merah dan putih dengan sisi pembatas bergerigi." },
    { country: "Oman", code: "om", hint: "Putih, merah, hijau dengan lambang pedang bersilang di pojok." },
    { country: "Yaman", code: "ye", hint: "Tiga garis horizontal merah, putih, hitam." },
    { country: "Yordania", code: "jo", hint: "Hitam, putih, hijau dengan segitiga merah dan bintang bersudut tujuh." },
    { country: "Suriah", code: "sy", hint: "Merah, putih, hitam dengan dua bintang hijau di tengah." },
    { country: "Irak", code: "iq", hint: "Merah, putih, hitam dengan tulisan Takbir hijau di tengah." },
    { country: "Kuwait", code: "kw", hint: "Trapesium hitam di kiri dengan garis hijau, putih, merah." },
    { country: "Lebanon", code: "lb", hint: "Garis merah atas-bawah dengan pohon Cedar hijau di tengah." }
];

const COUNTRIES_PER_LEVEL = 5;
const TOTAL_LEVELS = Math.ceil(COUNTRIES.length / COUNTRIES_PER_LEVEL);

let gameState = {
    score: 0,
    scorePlayer1: 0,
    scorePlayer2: 0,
    level: 1,
    lives: 3,
    streak: 0,
    bestStreak: 0,
    hints: 3,
    maxLevel: TOTAL_LEVELS,
    soundEnabled: true,
    theme: 'dark',
    mode: 'classic',
    shuffledDeck: [],
    deckIndex: 0,
    currentLevelCountries: [],
    levelQuestionIndex: 0,
    timeAttackSeconds: 45,
    customTimeAttackDuration: 45,
    passAndPlayPlayer: 1,
    stats: {
        totalPlayed: 0,
        totalAnswered: 0,
        correct: 0,
        wrong: 0,
        highestScore: 0,
        highestLevel: 1,
        countriesGuessed: []
    },
    achievements: {
        firstStep: false,
        worldTraveler: false,
        flagMaster: false,
        unstoppable: false
    }
};

let currentQuestion = null;
let timerInterval = null;
let timeLeft = 12;

let audioCtx = null;
function playSound(type) {
    if (!gameState.soundEnabled) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        let now = audioCtx.currentTime;
        if (type === 'click') {
            osc.frequency.setValueAtTime(400, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'correct') {
            osc.frequency.setValueAtTime(587.33, now);
            osc.frequency.setValueAtTime(880, now + 0.08);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(200, now);
            osc.frequency.setValueAtTime(130, now + 0.1);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'gameover') {
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.5);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
        }
    } catch(e) {
        console.log("Audio error", e);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadGameData();
    applyTheme();
    initScreens();

    setTimeout(() => {
        hideScreen('loading-screen');
        showScreen('menu-screen');
    }, 1000);
});

function loadGameData() {
    const saved = localStorage.getItem('tebak_bendera_state');
    if (saved) {
        try {
            gameState = JSON.parse(saved);
        } catch(e) {
            console.error("Gagal memuat save data", e);
        }
    }
}

function saveGameData() {
    try {
        localStorage.setItem('tebak_bendera_state', JSON.stringify(gameState));
    } catch(e) {
        console.error("Gagal menyimpan data", e);
    }
}

function applyTheme() {
    const root = document.documentElement;
    let mode = gameState.theme;
    if (mode === 'system') {
        mode = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    if (mode === 'light') {
        root.setAttribute('data-theme', 'light');
    } else {
        root.removeAttribute('data-theme');
    }
    document.getElementById('theme-select').value = gameState.theme;
    document.getElementById('sound-toggle').checked = gameState.soundEnabled;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function hideScreen(screenId) {
    document.getElementById(screenId).classList.remove('active');
}

function initScreens() {
    document.getElementById('btn-play').addEventListener('click', () => { playSound('click'); showScreen('mode-screen'); });
    document.getElementById('btn-leaderboard').addEventListener('click', () => { playSound('click'); renderLeaderboard(); showScreen('leaderboard-screen'); });
    document.getElementById('btn-stats').addEventListener('click', () => { playSound('click'); renderStats(); showScreen('stats-screen'); });
    document.getElementById('btn-settings').addEventListener('click', () => { playSound('click'); showScreen('settings-screen'); });
    document.getElementById('btn-help').addEventListener('click', () => { playSound('click'); showScreen('help-screen'); });

    document.getElementById('back-to-menu-from-mode').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-lb').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-stats').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-settings').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-help').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });

    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click');
            const mode = card.getAttribute('data-mode');
            
            if (mode === 'timeattack') {
                let pilihan = prompt("Pilih durasi waktu Time Attack (dalam detik):\nContoh: 10, 20, 45, 60, 120", gameState.customTimeAttackDuration || 45);
                if (pilihan !== null) {
                    let parsed = parseInt(pilihan);
                    if (!isNaN(parsed) && parsed > 0) {
                        gameState.customTimeAttackDuration = parsed;
                    }
                } else {
                    return;
                }
            }
            
            startGameMode(mode);
        });
    });

    document.getElementById('btn-home').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('btn-go-home').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('btn-next-level').addEventListener('click', () => { playSound('click'); nextLevel(); });
    document.getElementById('btn-retry-level').addEventListener('click', () => { playSound('click'); startLevel(); });
    document.getElementById('btn-try-again').addEventListener('click', () => { playSound('click'); resetGameProgress(); showScreen('menu-screen'); });

    document.getElementById('btn-hint').addEventListener('click', () => { playSound('click'); useHint(); });

    document.getElementById('theme-select').addEventListener('change', (e) => {
        gameState.theme = e.target.value;
        applyTheme();
        saveGameData();
    });
    document.getElementById('sound-toggle').addEventListener('change', (e) => {
        gameState.soundEnabled = e.target.checked;
        saveGameData();
    });
    document.getElementById('btn-reset-progress').addEventListener('click', () => {
        if (confirm("Yakin ingin mereset seluruh progres dan statistik?")) {
            resetAllData();
            alert("Progres berhasil direset.");
            showScreen('menu-screen');
        }
    });
    document.getElementById('btn-reset-lb').addEventListener('click', () => {
        localStorage.removeItem('tebak_bendera_lb');
        renderLeaderboard();
    });
}

function startGameMode(mode) {
    gameState.mode = mode;
    gameState.level = 1;
    gameState.score = 0;
    gameState.scorePlayer1 = 0;
    gameState.scorePlayer2 = 0;
    gameState.lives = (mode === 'suddendath') ? 1 : 3;
    gameState.streak = 0;
    gameState.hints = 3;
    gameState.deckIndex = 0;
    gameState.levelQuestionIndex = 0;
    gameState.passAndPlayPlayer = 1;
    
    if (mode === 'timeattack') {
        gameState.timeAttackSeconds = gameState.customTimeAttackDuration;
    } else {
        gameState.timeAttackSeconds = 45;
    }
    
    gameState.shuffledDeck = [...COUNTRIES].sort(() => Math.random() - 0.5);

    if (mode === 'classic') {
        setupClassicLevelCountries();
    }

    showScreen('game-screen');
    startLevel();
}

function setupClassicLevelCountries() {
    let startIndex = (gameState.level - 1) * COUNTRIES_PER_LEVEL;
    
    if (startIndex >= gameState.shuffledDeck.length) {
        gameState.shuffledDeck = [...COUNTRIES].sort(() => Math.random() - 0.5);
    }

    gameState.currentLevelCountries = gameState.shuffledDeck.slice(startIndex, startIndex + COUNTRIES_PER_LEVEL);
    gameState.levelQuestionIndex = 0;
}

function startLevel() {
    loadNewQuestion();
}

function loadNewQuestion() {
    if (gameState.mode === 'passplay') {
        document.getElementById('current-score').innerText = `P1: ${gameState.scorePlayer1} | P2: ${gameState.scorePlayer2}`;
    } else {
        document.getElementById('current-score').innerText = gameState.score;
    }
    
    if (gameState.mode === 'classic') {
        document.getElementById('current-level').innerText = `Level ${gameState.level}/${gameState.maxLevel} (Soal ${gameState.levelQuestionIndex + 1}/${COUNTRIES_PER_LEVEL})`;
        let prog = ((gameState.level - 1) / gameState.maxLevel) * 100;
        document.getElementById('progress-bar').style.width = `${prog}%`;
    } else if (gameState.mode === 'timeattack') {
        document.getElementById('current-level').innerText = `⏱️ TIME ATTACK`;
    } else if (gameState.mode === 'passplay') {
        document.getElementById('current-level').innerText = `👥 Giliran Pemain ${gameState.passAndPlayPlayer}`;
    } else {
        document.getElementById('current-level').innerText = `SUDDEN DEATH`;
    }

    document.getElementById('hint-count').innerText = gameState.hints;
    document.getElementById('streak-container').innerText = `🔥 ${gameState.streak}`;
    
    let hearts = '';
    for(let i=0; i<gameState.lives; i++) hearts += '❤️';
    document.getElementById('lives-container').innerText = hearts;

    let correct;

    if (gameState.mode === 'classic') {
        if (!gameState.currentLevelCountries || gameState.levelQuestionIndex >= gameState.currentLevelCountries.length) {
            setupClassicLevelCountries();
        }
        correct = gameState.currentLevelCountries[gameState.levelQuestionIndex];
    } else {
        if (!gameState.shuffledDeck || gameState.shuffledDeck.length === 0 || gameState.deckIndex >= gameState.shuffledDeck.length) {
            gameState.shuffledDeck = [...COUNTRIES].sort(() => Math.random() - 0.5);
            gameState.deckIndex = 0;
        }
        correct = gameState.shuffledDeck[gameState.deckIndex];
        gameState.deckIndex++;
    }

    let wrongPool = COUNTRIES.filter(c => c.country !== correct.country);
    let wrongOptions = [];
    while(wrongOptions.length < 3) {
        let rand = wrongPool[Math.floor(Math.random() * wrongPool.length)];
        if (!wrongOptions.includes(rand) && rand.country !== correct.country) {
            wrongOptions.push(rand);
        }
    }

    let options = [correct, ...wrongOptions];
    options.sort(() => Math.random() - 0.5);

    currentQuestion = {
        correct: correct,
        options: options
    };

    const imgEl = document.getElementById('flag-img');
    const loaderEl = document.getElementById('flag-loader');
    loaderEl.style.display = 'block';
    imgEl.src = '';

    let flagUrl = `https://flagcdn.com/w640/${correct.code.toLowerCase()}.png`;
    imgEl.onload = () => { loaderEl.style.display = 'none'; };
    imgEl.onerror = () => { 
        loaderEl.innerText = "Memuat...";
        imgEl.src = `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${correct.code.toLowerCase()}.svg`;
    };
    imgEl.src = flagUrl;

    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';
    options.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.country;
        btn.addEventListener('click', () => selectAnswer(opt.country, btn));
        optContainer.appendChild(btn);
    });

    let questionTimeLimit = (gameState.mode === 'timeattack') ? 8 : 12;
    startTimer(questionTimeLimit);
}

function startTimer(seconds) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    const timerBar = document.getElementById('timer-bar');
    const timerText = document.getElementById('timer-text');
    let maxTime = seconds;

    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        let pct = (timeLeft / maxTime) * 100;
        timerBar.style.width = `${pct}%`;
        
        if (gameState.mode === 'timeattack') {
            timerText.innerText = `Sisa Waktu Global: ${Math.ceil(gameState.timeAttackSeconds)}s`;
        } else {
            timerText.innerText = `${Math.ceil(timeLeft)}s`;
        }

        if (gameState.mode === 'timeattack') {
            gameState.timeAttackSeconds -= 0.1;
            if (gameState.timeAttackSeconds <= 0) {
                clearInterval(timerInterval);
                triggerGameOver();
                return;
            }
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOutAnswer();
        }
    }, 100);
}

function timeOutAnswer() {
    playSound('wrong');
    gameState.streak = 0;
    gameState.lives--;
    gameState.stats.totalAnswered++;
    gameState.stats.wrong++;
    
    highlightCorrectAnswer();
    setTimeout(() => {
        if (gameState.mode === 'passplay') {
            triggerPassAndPlayTransition(false);
        } else {
            checkGameStatusAfterAnswer();
        }
    }, 1200);
}

function selectAnswer(selectedCountry, btnElement) {
    clearInterval(timerInterval);
    let isCorrect = (selectedCountry === currentQuestion.correct.country);
    
    gameState.stats.totalAnswered++;

    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => b.disabled = true);

    if (isCorrect) {
        playSound('correct');
        btnElement.classList.add('correct');
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) gameState.bestStreak = gameState.streak;

        let speedBonus = Math.ceil(timeLeft * 8);
        let comboBonus = gameState.streak >= 5 ? 200 : 100;
        let earnedPoints = comboBonus + speedBonus;

        if (gameState.mode === 'passplay') {
            if (gameState.passAndPlayPlayer === 1) {
                gameState.scorePlayer1 += earnedPoints;
            } else {
                gameState.scorePlayer2 += earnedPoints;
            }
        } else {
            gameState.score += earnedPoints;
        }

        if (gameState.mode === 'timeattack') {
            gameState.timeAttackSeconds += 3;
        }

        gameState.stats.correct++;
        if (!gameState.stats.countriesGuessed.includes(currentQuestion.correct.country)) {
            gameState.stats.countriesGuessed.push(currentQuestion.correct.country);
        }

        checkAchievements();

        setTimeout(() => {
            if (gameState.mode === 'classic') {
                handleClassicProgression();
            } else if (gameState.mode === 'passplay') {
                // Di mode pass-play, kalau BENAR tidak memunculkan modal, tapi langsung lanjut soal berikutnya dengan pemain yang sama!
                loadNewQuestion();
            } else {
                loadNewQuestion();
            }
        }, 800);
    } else {
        playSound('wrong');
        btnElement.classList.add('wrong');
        gameState.streak = 0;
        gameState.lives--;
        
        if (gameState.mode !== 'passplay') {
            gameState.score = Math.max(0, gameState.score - 30);
        }
        gameState.stats.wrong++;

        if (gameState.mode === 'timeattack') {
            gameState.timeAttackSeconds -= 4;
            if (gameState.timeAttackSeconds <= 0) {
                triggerGameOver();
                return;
            }
        }

        highlightCorrectAnswer();

        setTimeout(() => {
            if (gameState.mode === 'passplay') {
                // Modal Pass & Play HANYA MUNCUL KETIKA SALAH atau WAKTU HABIS
                triggerPassAndPlayTransition(false);
            } else {
                checkGameStatusAfterAnswer();
            }
        }, 1200);
    }
}

function triggerPassAndPlayTransition(wasCorrect = false) {
    const modal = document.getElementById('pass-play-modal');
    const titleEl = document.getElementById('pass-title');
    const descEl = document.getElementById('pass-desc');
    const btnEl = document.getElementById('btn-pass-action');

    let nextPlayer = gameState.passAndPlayPlayer === 1 ? 2 : 1;

    titleEl.innerText = `Sayang sekali, Pemain ${gameState.passAndPlayPlayer} Salah! ❌`;
    descEl.innerText = `Skor P1: ${gameState.scorePlayer1} | Skor P2: ${gameState.scorePlayer2}\nBerikan HP ke Pemain ${nextPlayer} untuk melanjutkan giliran.`;

    modal.style.display = 'flex';

    btnEl.onclick = () => {
        playSound('click');
        modal.style.display = 'none';
        gameState.passAndPlayPlayer = nextPlayer;

        if (gameState.lives <= 0) {
            triggerGameOver();
        } else {
            loadNewQuestion();
        }
    };
}

function highlightCorrectAnswer() {
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(b => {
        if (b.innerText === currentQuestion.correct.country) {
            b.classList.add('correct');
        }
    });
}

function checkGameStatusAfterAnswer() {
    if (gameState.lives <= 0 || gameState.mode === 'suddendath') {
        triggerGameOver();
    } else {
        if (gameState.mode === 'classic') {
            handleClassicProgression();
        } else {
            loadNewQuestion();
        }
    }
}

function handleClassicProgression() {
    gameState.levelQuestionIndex++;
    
    if (gameState.levelQuestionIndex >= gameState.currentLevelCountries.length) {
        showLevelResult();
    } else {
        showScreen('game-screen');
        startLevel();
    }
}

function showLevelResult() {
    let accuracy = Math.round((gameState.stats.correct / (gameState.stats.totalAnswered || 1)) * 100);
    document.getElementById('res-score').innerText = `+${gameState.score}`;
    document.getElementById('res-streak').innerText = gameState.streak;
    document.getElementById('res-correct').innerText = gameState.stats.correct;
    document.getElementById('res-wrong').innerText = gameState.stats.wrong;
    document.getElementById('res-accuracy').innerText = `${accuracy}%`;

    if (gameState.score > gameState.stats.highestScore) gameState.stats.highestScore = gameState.score;
    if (gameState.level > gameState.stats.highestLevel) gameState.stats.highestLevel = gameState.level;
    gameState.stats.totalPlayed++;

    saveGameData();
    showScreen('result-screen');
}

function nextLevel() {
    gameState.level++;
    if (gameState.level > gameState.maxLevel && gameState.mode === 'classic') {
        alert("LUAR BIASA! Kamu telah menamatkan seluruh level Classic Tebak Bendera dunia!");
        gameState.level = 1;
        gameState.shuffledDeck = [...COUNTRIES].sort(() => Math.random() - 0.5);
    }
    setupClassicLevelCountries();
    showScreen('game-screen');
    startLevel();
}

function triggerGameOver() {
    playSound('gameover');
    if (gameState.mode === 'passplay') {
        document.getElementById('go-score').innerText = `P1: ${gameState.scorePlayer1} pts | P2: ${gameState.scorePlayer2} pts`;
    } else {
        document.getElementById('go-score').innerText = gameState.score;
    }
    document.getElementById('go-level').innerText = (gameState.mode === 'classic') ? gameState.level : gameState.stats.correct;
    
    if (gameState.score > gameState.stats.highestScore) gameState.stats.highestScore = gameState.score;
    saveGameData();
    showScreen('gameover-screen');
}

function useHint() {
    if (gameState.hints <= 0) {
        alert("Hint kamu sudah habis!");
        return;
    }
    gameState.hints--;
    document.getElementById('hint-count').innerText = gameState.hints;

    const allButtons = document.querySelectorAll('.option-btn');
    let wrongBtns = Array.from(allButtons).filter(b => b.innerText !== currentQuestion.correct.country && !b.disabled);
    if (wrongBtns.length > 0) {
        let target = wrongBtns[Math.floor(Math.random() * wrongBtns.length)];
        target.disabled = true;
        target.style.opacity = '0.3';
    }
}

function checkAchievements() {
    if (gameState.stats.correct >= 1 && !gameState.achievements.firstStep) {
        gameState.achievements.firstStep = true;
    }
    if (gameState.stats.countriesGuessed.length >= 25 && !gameState.achievements.worldTraveler) {
        gameState.achievements.worldTraveler = true;
    }
    if (gameState.stats.countriesGuessed.length >= 50 && !gameState.achievements.flagMaster) {
        gameState.achievements.flagMaster = true;
    }
    if (gameState.streak >= 10 && !gameState.achievements.unstoppable) {
        gameState.achievements.unstoppable = true;
    }
}

function resetGameProgress() {
    gameState.score = 0;
    gameState.scorePlayer1 = 0;
    gameState.scorePlayer2 = 0;
    gameState.level = 1;
    gameState.lives = 3;
    gameState.streak = 0;
    gameState.hints = 3;
    saveGameData();
}

function resetAllData() {
    localStorage.removeItem('tebak_bendera_state');
    location.reload();
}

function renderStats() {
    const box = document.getElementById('stats-content');
    box.innerHTML = `
        <p>Total Permainan: <b>${gameState.stats.totalPlayed}</b></p>
        <p>Total Soal Dijawab: <b>${gameState.stats.totalAnswered}</b></p>
        <p>Jawaban Benar: <b>${gameState.stats.correct}</b></p>
        <p>Jawaban Salah: <b>${gameState.stats.wrong}</b></p>
        <p>Akurasi: <b>${Math.round((gameState.stats.correct / (gameState.stats.totalAnswered || 1)) * 100)}%</b></p>
        <p>Skor Tertinggi: <b>${gameState.stats.highestScore}</b></p>
        <p>Level Tertinggi: <b>${gameState.stats.highestLevel}</b></p>
        <p>Negara Ditebak: <b>${gameState.stats.countriesGuessed.length} / ${COUNTRIES.length}</b></p>
    `;

    const achList = document.getElementById('achievement-list');
    achList.innerHTML = `
        <div class="ach-item"><span>🏆 First Step</span> <b>${gameState.achievements.firstStep ? '✅' : '🔒'}</b></div>
        <div class="ach-item"><span>🏆 World Traveler (25 Negara)</span> <b>${gameState.achievements.worldTraveler ? '✅' : '🔒'}</b></div>
        <div class="ach-item"><span>🏆 Flag Master (50 Negara)</span> <b>${gameState.achievements.flagMaster ? '✅' : '🔒'}</b></div>
        <div class="ach-item"><span>🏆 Unstoppable (Streak 10)</span> <b>${gameState.achievements.unstoppable ? '✅' : '🔒'}</b></div>
    `;
}

function renderLeaderboard() {
    const lbList = document.getElementById('leaderboard-list');
    let lbData = JSON.parse(localStorage.getItem('tebak_bendera_lb')) || [
        { name: "Pemain Lokal", score: gameState.stats.highestScore }
    ];

    if (gameState.stats.highestScore > 0) {
        let existing = lbData.find(item => item.score === gameState.stats.highestScore);
        if (!existing) {
            lbData.push({ name: "Anda", score: gameState.stats.highestScore });
            lbData.sort((a,b) => b.score - a.score);
            localStorage.setItem('tebak_bendera_lb', JSON.stringify(lbData));
        }
    }

    lbList.innerHTML = '';
    lbData.forEach((item, index) => {
        let medal = index === 0 ? '🥇' : (index === 1 ? '🥈' : (index === 2 ? '🥉' : `#${index+1}`));
        let div = document.createElement('div');
        div.className = 'lb-item';
        div.innerHTML = `<span>${medal} ${item.name}</span> <b>${item.score} pts</b>`;
        lbList.appendChild(div);
    });
}
