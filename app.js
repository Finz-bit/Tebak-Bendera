// Database Negara Lengkap (100+ negara dengan tingkat kesulitan)
const COUNTRIES = [
    // Level 1-10 (Sangat Mudah)
    { country: "Indonesia", code: "id", hint: "Negara kepulauan terbesar di Asia Tenggara.", difficulty: 1 },
    { country: "Jepang", code: "jp", hint: "Negara Matahari Terbit di Asia Timur.", difficulty: 1 },
    { country: "Amerika Serikat", code: "us", hint: "Negara Paman Sam dengan bendera bintang-garis.", difficulty: 1 },
    { country: "Kanada", code: "ca", hint: "Terkenal dengan simbol daun maple.", difficulty: 1 },
    { country: "Inggris", code: "gb", hint: "Negara asal bendera Union Jack.", difficulty: 1 },
    { country: "Prancis", code: "fr", hint: "Negara Menara Eiffel di Eropa Barat.", difficulty: 1 },
    { country: "Jerman", code: "de", hint: "Negara industri di Eropa dengan tiga warna horizontal.", difficulty: 1 },
    { country: "Italia", code: "it", hint: "Negara berbentuk sepatu boot.", difficulty: 1 },
    { country: "Australia", code: "au", hint: "Negara benua sekaligus pulau di selatan.", difficulty: 1 },
    { country: "Brasil", code: "br", hint: "Negara sepak bola terkenal di Amerika Selatan.", difficulty: 1 },

    // Level 11-30 (Mudah - Menengah)
    { country: "Korea Selatan", code: "kr", hint: "Negara ginseng dengan lambang Taeguk di tengah.", difficulty: 2 },
    { country: "Argentina", code: "ar", hint: "Negara penghasil daging sapi dengan matahari di bendera.", difficulty: 2 },
    { country: "Meksiko", code: "mx", hint: "Negara Amerika Utara dengan lambang burung elang dan ular.", difficulty: 2 },
    { country: "Spanyol", code: "es", hint: "Negara matador di Semenanjung Iberia.", difficulty: 2 },
    { country: "Belanda", code: "nl", hint: "Negara kincir angin dan tulip.", difficulty: 2 },
    { country: "India", code: "in", hint: "Negara Asia Selatan dengan roda Ashok Chakra di tengah.", difficulty: 2 },
    { country: "Tiongkok", code: "cn", hint: "Negara berbendera merah dengan lima bintang kuning.", difficulty: 2 },
    { country: "Rusia", code: "ru", hint: "Negara terluas di dunia dengan tiga warna horizontal.", difficulty: 2 },
    { country: "Arab Saudi", code: "sa", hint: "Negara Hijau dengan tulisan kaligrafi syahadat.", difficulty: 2 },
    { country: "Afrika Selatan", code: "za", hint: "Negara ujung benua Afrika dengan bendera warna-warni.", difficulty: 2 },
    { country: "Malaysia", code: "my", hint: "Negara tetangga dengan lambang bulan sabit dan bintang.", difficulty: 2 },
    { country: "Singapura", code: "sg", hint: "Negara pulau maju di selatan Malaysia.", difficulty: 2 },
    { country: "Thailand", code: "th", hint: "Negara Gajah Putih di Asia Tenggara.", difficulty: 2 },
    { country: "Vietnam", code: "vn", hint: "Negara bendera merah dengan satu bintang kuning besar.", difficulty: 2 },
    { country: "Filipina", code: "ph", hint: "Negara kepulauan dengan matahari dan tiga bintang.", difficulty: 2 },
    { country: "Turki", code: "tr", hint: "Negara dua benua dengan bulan sabit putih.", difficulty: 2 },
    { country: "Swiss", code: "ch", hint: "Negara bendera palang putih berlatar merah.", difficulty: 2 },
    { country: "Swedia", code: "se", hint: "Negara Skandinavia dengan salib kuning di atas biru.", difficulty: 2 },
    { country: "Norwegia", code: "no", hint: "Negara Nordik dengan salib merah bergaris putih.", difficulty: 2 },
    { country: "Portugal", code: "pt", hint: "Negara asal Cristiano Ronaldo di Semenanjung Iberia.", difficulty: 2 },

    // Level 31-50 (Menengah)
    { country: "Selandia Baru", code: "nz", hint: "Negara Pasifik dengan lambang Salib Selatan.", difficulty: 3 },
    { country: "Mesir", code: "eg", hint: "Negara piramida dengan lambang Elang Saladin.", difficulty: 3 },
    { country: "Yunani", code: "gr", hint: "Negara asal mitologi kuno dengan garis biru-putih.", difficulty: 3 },
    { country: "Polandia", code: "pl", hint: "Negara Eropa Tengah dengan warna putih di atas merah.", difficulty: 3 },
    { country: "Ukraina", code: "ua", hint: "Negara dengan kombinasi warna biru langit dan kuning ladang gandum.", difficulty: 3 },
    { country: "Belgia", code: "be", hint: "Negara cokelat dengan tiga garis vertikal hitam-kuning-merah.", difficulty: 3 },
    { country: "Austria", code: "at", hint: "Negara Alpen dengan garis merah-putih-merah.", difficulty: 3 },
    { country: "Denmark", code: "dk", hint: "Negara Skandinavia pencipta Lego.", difficulty: 3 },
    { country: "Finlandia", code: "fi", hint: "Negara seribu danau dengan salib biru.", difficulty: 3 },
    { country: "Irlandia", code: "ie", hint: "Negara hijau-putih-oranye di Eropa barat.", difficulty: 3 },
    { country: "Kolombia", code: "co", hint: "Negara Amerika Selatan dengan warna kuning dominan.", difficulty: 3 },
    { country: "Chili", code: "cl", hint: "Negara panjang di barat Amerika Selatan.", difficulty: 3 },
    { country: "Peru", code: "pe", hint: "Negara situs Machu Picchu.", difficulty: 3 },
    { country: "Maroko", code: "ma", hint: "Negara Afrika Utara dengan bintang hijau bersegi lima.", difficulty: 3 },
    { country: "Aljazair", code: "dz", hint: "Negara Afrika utara dengan bulan sabit hijau.", difficulty: 3 },
    { country: "Nigeria", code: "ng", hint: "Negara Afrika barat dengan dua garis hijau dan putih di tengah.", difficulty: 3 },
    { country: "Kenya", code: "ke", hint: "Negara safari terkenal dengan perisai dan tombak Maasai.", difficulty: 3 },
    { country: "Pakistan", code: "pk", hint: "Negara Asia Selatan dengan bidang putih besar di sisi kiri.", difficulty: 3 },
    { country: "Bangladesh", code: "bd", hint: "Negara dengan lingkaran merah menyala di atas latar hijau.", difficulty: 3 },
    { country: "Iran", code: "ir", hint: "Negara Timur Tengah dengan lambang khusus di tengah.", difficulty: 3 },

    // Level 51-75 (Sulit)
    { country: "Kolombia", code: "co", hint: "Negara Amerika Selatan.", difficulty: 4 },
    { country: "Kroasia", code: "hr", hint: "Negara pecahan Yugoslavia dengan lambang papan catur merah-putih.", difficulty: 4 },
    { country: "Ceko", code: "cz", hint: "Negara Eropa Tengah dengan segitiga biru di sisi kiri.", difficulty: 4 },
    { country: "Hungaria", code: "hu", hint: "Tiga garis horizontal merah, putih, hijau.", difficulty: 4 },
    { country: "Rumania", code: "ro", hint: "Tiga garis vertikal biru, kuning, merah.", difficulty: 4 },
    { country: "Bulgaria", code: "bg", hint: "Tiga garis horizontal putih, hijau, merah.", difficulty: 4 },
    { country: "Serbia", code: "rs", hint: "Negara Eropa timur dengan lambang kerajaan kecil.", difficulty: 4 },
    { country: "Slowakia", code: "sk", hint: "Mirip Slovenia/Rusia tapi memiliki lambang perisai ganda.", difficulty: 4 },
    { country: "Lituania", code: "lt", hint: "Kuning, hijau, merah secara horizontal.", difficulty: 4 },
    { country: "Latvia", code: "lv", hint: "Merah marun dengan garis putih di tengah.", difficulty: 4 },
    { country: "Estonia", code: "ee", hint: "Biru, hitam, putih secara horizontal.", difficulty: 4 },
    { country: "Islandia", code: "is", hint: "Kebalikan dari bendera Norwegia (salib putih berbingkai merah).", difficulty: 4 },
    { country: "Luksemburg", code: "lu", hint: "Merah, putih, biru muda secara horizontal.", difficulty: 4 },
    { country: "Monako", code: "mc", hint: "Merah di atas, putih di bawah.", difficulty: 4 },
    { country: "Vatikan", code: "va", hint: "Kuning dan putih dengan lambang kunci silang.", difficulty: 4 },
    { country: "San Marino", code: "sm", hint: "Putih dan biru muda dengan lambang menara tiga.", difficulty: 4 },
    { country: "Malta", code: "mt", hint: "Putih-merah dengan salib George kecil di pojok.", difficulty: 4 },
    { country: "Andorra", code: "ad", hint: "Tiga garis vertikal biru, kuning, merah dengan lambang tengah.", difficulty: 4 },
    { country: "Liechtenstein", code: "li", hint: "Biru di atas, merah di bawah dengan mahkota kecil.", difficulty: 4 },
    { country: "Uruguay", code: "uy", hint: "Garis biru-putih dengan matahari di pojok.", difficulty: 4 },
    { country: "Paraguay", code: "py", hint: "Tiga warna horizontal dengan lambang negara di tengah.", difficulty: 4 },
    { country: "Bolivia", code: "bo", hint: "Merah, kuning, hijau dengan lambang negara.", difficulty: 4 },
    { country: "Ekuador", code: "ec", hint: "Kuning, biru, merah dengan lambang burung condor.", difficulty: 4 },
    { country: "Venezuela", code: "ve", hint: "Tiga warna dengan lengkungan bintang putih di tengah.", difficulty: 4 },
    { country: "Kuba", code: "cu", hint: "Garis biru-putih dengan segitiga merah dan bintang putih.", difficulty: 4 },

    // Level 76-100 (Sangat Sulit / Negara Kecil & Unik)
    { country: "Nepal", code: "np", hint: "Satu-satunya negara dengan bendera bukan persegi panjang.", difficulty: 5 },
    { country: "Bhutan", code: "bt", hint: "Negara Himalaya dengan gambar naga putih.", difficulty: 5 },
    { country: "Sri Lanka", code: "lk", hint: "Bendera bergambar singa memegang pedang.", difficulty: 5 },
    { country: "Kamboja", code: "kh", hint: "Bendera bergambar bangunan Angkor Wat.", difficulty: 5 },
    { country: "Laos", code: "la", hint: "Bendera dengan lingkaran putih besar di tengah bidang merah-biru.", difficulty: 5 },
    { country: "Myanmar", code: "mm", hint: "Tiga garis horizontal kuning, hijau, merah dengan bintang besar.", difficulty: 5 },
    { country: "Brunei", code: "bn", hint: "Kuning dengan lambang bulan sabit merah melintang.", difficulty: 5 },
    { country: "Mongolia", code: "mn", hint: "Merah-biru-merah dengan simbol Soyombo di sisi kiri.", difficulty: 5 },
    { country: "Kazakhstan", code: "kz", hint: "Biru muda dengan lambang matahari dan pola tradisional kuning.", difficulty: 5 },
    { country: "Uzbekistan", code: "uz", hint: "Biru, putih, hijau dengan bulan sabit dan bintang.", difficulty: 5 },
    { country: "Madagaskar", code: "mg", hint: "Putih vertikal di kiri, merah dan hijau horizontal di kanan.", difficulty: 5 },
    { country: "Ghana", code: "gh", hint: "Merah, kuning, hijau dengan bintang hitam di tengah.", difficulty: 5 },
    { country: "Senegal", code: "sn", hint: "Hijau, kuning, merah dengan bintang hijau di tengah.", difficulty: 5 },
    { country: "Kamerun", code: "cm", hint: "Hijau, merah, kuning vertikal dengan bintang emas.", difficulty: 5 },
    { country: "Etiopia", code: "et", hint: "Hijau, kuning, merah horizontal dengan lambang bintang biru.", difficulty: 5 },
    { country: "Tunisia", code: "tn", hint: "Merah dengan lingkaran putih dan bulan sabit merah di tengah.", difficulty: 5 },
    { country: "Zimbabwe", code: "zw", hint: "Tujuh garis horizontal dengan burung Zimbabwe di segitiga putih.", difficulty: 5 },
    { country: "Uganda", code: "ug", hint: "Garis hitam-kuning-merah berulang dengan burung bangau.", difficulty: 5 },
    { country: "Mozambik", code: "mz", hint: "Bendera unik bergambar buku, cangkul, dan senjata serbu.", difficulty: 5 },
    { country: "Angola", code: "ao", hint: "Merah dan hitam dengan lambang roda gigi dan parang.", difficulty: 5 },
    { country: "Fiji", code: "fj", hint: "Biru muda dengan lambang Union Jack dan perisai.", difficulty: 5 },
    { country: "Papua Nugini", code: "pg", hint: "Merah-hitam diagonal dengan burung cendrawasih.", difficulty: 5 },
    { country: "Samoa", code: "ws", hint: "Merah dengan bidang biru di pojok berisi 5 bintang.", difficulty: 5 },
    { country: "Tonga", code: "to", hint: "Merah dengan kotak putih di pojok berisi salib merah.", difficulty: 5 },
    { country: "Mauritius", code: "mu", hint: "Empat warna horizontal: merah, biru, kuning, hijau.", difficulty: 5 }
];

// State Game
let gameState = {
    score: 0,
    level: 1,
    lives: 3,
    streak: 0,
    bestStreak: 0,
    hints: 3,
    maxLevel: 100,
    soundEnabled: true,
    theme: 'dark',
    mode: 'classic',
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
        perfect: false,
        speedDemon: false,
        unstoppable: false
    }
};

let currentQuestion = null;
let timerInterval = null;
let timeLeft = 20;
let levelCorrectCount = 0;
let levelWrongCount = 0;
let levelStartTime = 0;

// Audio Context sederhana (Web Audio API)
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
            osc.frequency.setValueAtTime(587.33, now); // D5
            osc.frequency.setValueAtTime(880, now + 0.08); // A5
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

// Inisialisasi LocalStorage & Event
window.addEventListener('DOMContentLoaded', () => {
    loadGameData();
    applyTheme();
    initScreens();

    // Sembunyikan loading screen setelah 1 detik
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

// Navigasi Screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function hideScreen(screenId) {
    document.getElementById(screenId).classList.remove('active');
}

function initScreens() {
    // Tombol Menu Utama
    document.getElementById('btn-play').addEventListener('click', () => { playSound('click'); showScreen('mode-screen'); });
    document.getElementById('btn-leaderboard').addEventListener('click', () => { playSound('click'); renderLeaderboard(); showScreen('leaderboard-screen'); });
    document.getElementById('btn-stats').addEventListener('click', () => { playSound('click'); renderStats(); showScreen('stats-screen'); });
    document.getElementById('btn-settings').addEventListener('click', () => { playSound('click'); showScreen('settings-screen'); });
    document.getElementById('btn-help').addEventListener('click', () => { playSound('click'); showScreen('help-screen'); });

    // Tombol Kembali
    document.getElementById('back-to-menu-from-mode').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-lb').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-stats').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-settings').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('back-to-menu-from-help').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });

    // Mode Cards
    document.querySelectorAll('.mode-card').forEach(card => {
        card.addEventListener('click', (e) => {
            playSound('click');
            const mode = card.getAttribute('data-mode');
            startGameMode(mode);
        });
    });

    // Tombol Game Result / Over
    document.getElementById('btn-home').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('btn-go-home').addEventListener('click', () => { playSound('click'); showScreen('menu-screen'); });
    document.getElementById('btn-next-level').addEventListener('click', () => { playSound('click'); nextLevel(); });
    document.getElementById('btn-retry-level').addEventListener('click', () => { playSound('click'); startLevel(); });
    document.getElementById('btn-try-again').addEventListener('click', () => { playSound('click'); resetGameProgress(); showScreen('menu-screen'); });

    // Hint Button
    document.getElementById('btn-hint').addEventListener('click', () => { playSound('click'); useHint(); });

    // Settings Handler
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

// Logika Game & Level
function startGameMode(mode) {
    gameState.mode = mode;
    if (mode === 'classic') {
        // Lanjutkan dari level terakhir atau reset jika tamat
        if (gameState.level > 100) gameState.level = 1;
    } else {
        gameState.level = 1;
        gameState.score = 0;
        gameState.lives = mode === 'suddendath' ? 1 : 3;
    }
    gameState.streak = 0;
    gameState.hints = 3;
    showScreen('game-screen');
    startLevel();
}

function startLevel() {
    levelCorrectCount = 0;
    levelWrongCount = 0;
    levelStartTime = Date.now();
    loadNewQuestion();
}

function getFilteredCountriesForLevel() {
    let diff = 1;
    if (gameState.level > 75) diff = 5;
    else if (gameState.level > 50) diff = 4;
    else if (gameState.level > 30) diff = 3;
    else if (gameState.level > 10) diff = 2;

    let filtered = COUNTRIES.filter(c => c.difficulty <= diff);
    if (filtered.length < 4) filtered = COUNTRIES; // Fallback
    return filtered;
}

function loadNewQuestion() {
    document.getElementById('current-score').innerText = gameState.score;
    document.getElementById('current-level').innerText = gameState.level;
    document.getElementById('hint-count').innerText = gameState.hints;
    document.getElementById('streak-container').innerText = `🔥 ${gameState.streak}`;
    
    // Live lives
    let hearts = '';
    for(let i=0; i<gameState.lives; i++) hearts += '❤️';
    document.getElementById('lives-container').innerText = hearts;

    // Progress Bar
    let prog = ((gameState.level - 1) / 100) * 100;
    document.getElementById('progress-bar').style.width = `${prog}%`;

    // Pilih negara benar
    let pool = getFilteredCountriesForLevel();
    let correct = pool[Math.floor(Math.random() * pool.length)];

    // Pilih 3 salah
    let wrongPool = COUNTRIES.filter(c => c.country !== correct.country);
    let wrongOptions = [];
    while(wrongOptions.length < 3) {
        let rand = wrongPool[Math.floor(Math.random() * wrongPool.length)];
        if (!wrongOptions.includes(rand) && rand.country !== correct.country) {
            wrongOptions.push(rand);
        }
    }

    let options = [correct, ...wrongOptions];
    // Acak posisi pilihan
    options.sort(() => Math.random() - 0.5);

    currentQuestion = {
        correct: correct,
        options: options
    };

    // Tampilkan Bendera (Menggunakan CDN flagcdn.com)
    const imgEl = document.getElementById('flag-img');
    const loaderEl = document.getElementById('flag-loader');
    loaderEl.style.display = 'block';
    imgEl.src = '';

    let flagUrl = `https://flagcdn.com/w640/${correct.code.toLowerCase()}.png`;
    imgEl.onload = () => { loaderEl.style.display = 'none'; };
    imgEl.onerror = () => { 
        loaderEl.innerText = "Gagal memuat bendera, mencoba sumber 2...";
        imgEl.src = `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${correct.code.toLowerCase()}.svg`;
    };
    imgEl.src = flagUrl;

    // Render Pilihan
    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';
    options.forEach(opt => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.country;
        btn.addEventListener('click', () => selectAnswer(opt.country, btn));
        optContainer.appendChild(btn);
    });

    // Set Timer berdasarkan kesulitan level
    let timeLimit = 20;
    if (gameState.level > 50) timeLimit = 10;
    else if (gameState.level > 20) timeLimit = 15;

    startTimer(timeLimit);
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
        timerText.innerText = `${Math.ceil(timeLeft)}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOutAnswer();
        }
    }, 100);
}

function timeOutAnswer() {
    playSound('wrong');
    levelWrongCount++;
    gameState.streak = 0;
    gameState.lives--;
    
    // Highlight jawaban benar
    highlightCorrectAnswer();
    setTimeout(() => {
        checkGameStatusAfterAnswer();
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
        levelCorrectCount++;
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) gameState.bestStreak = gameState.streak;

        // Hitung poin bonus kecepatan
        let speedBonus = Math.ceil(timeLeft * 5);
        let comboBonus = gameState.streak >= 10 ? 300 : (gameState.streak >= 5 ? 200 : (gameState.streak >= 3 ? 150 : 100));
        gameState.score += comboBonus + speedBonus;

        gameState.stats.correct++;
        if (!gameState.stats.countriesGuessed.includes(currentQuestion.correct.country)) {
            gameState.stats.countriesGuessed.push(currentQuestion.correct.country);
        }

        checkAchievements();

        setTimeout(() => {
            finishLevelOrNext();
        }, 1000);
    } else {
        playSound('wrong');
        btnElement.classList.add('wrong');
        levelWrongCount++;
        gameState.streak = 0;
        gameState.lives--;
        gameState.score = Math.max(0, gameState.score - 25);
        gameState.stats.wrong++;

        highlightCorrectAnswer();

        setTimeout(() => {
            checkGameStatusAfterAnswer();
        }, 1200);
    }
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
        // Lanjut ke soal berikutnya dalam level yang sama atau selesai
        finishLevelOrNext();
    }
}

function finishLevelOrNext() {
    // Setiap level terdiri dari 5 soal untuk mode Classic
    if (levelCorrectCount + levelWrongCount >= 5 || gameState.mode !== 'classic') {
        if (gameState.mode === 'classic') {
            showLevelResult();
        } else {
            // Mode lain lanjut terus
            loadNewQuestion();
        }
    } else {
        loadNewQuestion();
    }
}

function showLevelResult() {
    let accuracy = Math.round((levelCorrectCount / (levelCorrectCount + levelWrongCount || 1)) * 100);
    document.getElementById('res-score').innerText = `+${gameState.score}`;
    document.getElementById('res-streak').innerText = gameState.streak;
    document.getElementById('res-correct').innerText = levelCorrectCount;
    document.getElementById('res-wrong').innerText = levelWrongCount;
    document.getElementById('res-accuracy').innerText = `${accuracy}%`;

    if (gameState.score > gameState.stats.highestScore) gameState.stats.highestScore = gameState.score;
    if (gameState.level > gameState.stats.highestLevel) gameState.stats.highestLevel = gameState.level;
    gameState.stats.totalPlayed++;

    saveGameData();
    showScreen('result-screen');
}

function nextLevel() {
    gameState.level++;
    if (gameState.level > 100) {
        alert("SELAMAT! Kamu telah menamatkan 100 level Tebak Bendera!");
        gameState.level = 1;
    }
    showScreen('game-screen');
    startLevel();
}

function triggerGameOver() {
    playSound('gameover');
    document.getElementById('go-score').innerText = gameState.score;
    document.getElementById('go-level').innerText = gameState.level;
    
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

    // Hapus 1 jawaban salah
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
        showAchievementPopup("🏆 First Step: Menyelesaikan jawaban pertama!");
    }
    if (gameState.stats.countriesGuessed.length >= 25 && !gameState.achievements.worldTraveler) {
        gameState.achievements.worldTraveler = true;
        showAchievementPopup("🏆 World Traveler: Menebak 25 negara berbeda!");
    }
    if (gameState.stats.countriesGuessed.length >= 100 && !gameState.achievements.flagMaster) {
        gameState.achievements.flagMaster = true;
        showAchievementPopup("🏆 Flag Master: Menebak 100 negara!");
    }
    if (gameState.streak >= 10 && !gameState.achievements.unstoppable) {
        gameState.achievements.unstoppable = true;
        showAchievementPopup("🏆 Unstoppable: Streak 10 jawaban benar!");
    }
}

function showAchievementPopup(msg) {
    console.log(msg); // Bisa diperluas dengan toast UI
}

function resetGameProgress() {
    gameState.score = 0;
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

// Statistik & Leaderboard Lokal
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
        <div class="ach-item"><span>🏆 Flag Master (100 Negara)</span> <b>${gameState.achievements.flagMaster ? '✅' : '🔒'}</b></div>
        <div class="ach-item"><span>🏆 Unstoppable (Streak 10)</span> <b>${gameState.achievements.unstoppable ? '✅' : '🔒'}</b></div>
    `;
}

function renderLeaderboard() {
    const lbList = document.getElementById('leaderboard-list');
    let lbData = JSON.parse(localStorage.getItem('tebak_bendera_lb')) || [
        { name: "Pemain Lokal", score: gameState.stats.highestScore }
    ];

    // Tambahkan skor saat ini jika belum ada
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
