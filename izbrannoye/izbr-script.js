const firstContent = document.querySelector('.content');
const secondContent = document.querySelector('.ccontent');

// Плавное раскрытие секций подборок
function toggleContent(header) {
    const textTag = header.nextElementSibling;
    const content = textTag ? textTag.nextElementSibling : null;

    if (content && (content.classList.contains('content') || content.classList.contains('ccontent'))) {
        const isOpen = content.classList.contains('show');

        if (isOpen) {
            content.classList.remove('show');
            content.classList.remove('content-music');
        } else {
            content.classList.add('show');
            content.classList.add('content-music');
        }
    }
}

// Вывод сообщений об отсутствии треков
function updateEmptyMessages() {
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');

    if (firstContent && message1) {
        const firstTracks = firstContent.querySelectorAll('.section-player');
        message1.style.display = firstTracks.length === 0 ? 'block' : 'none';
    }

    if (secondContent && message2) {
        const secondTracks = secondContent.querySelectorAll('.section-player');
        message2.style.display = secondTracks.length === 0 ? 'block' : 'none';
    }
}

// Данные
const trackData = {
    0: {
        src: "https://track.pinkamuz.pro/download/3334313532b734b334893731353332b63435350100/1dbfe056d67b2c712c2354dbbdf076d6/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F%20%D0%BF%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D0%B0%20-%20%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4%2C%20%D0%B5%D0%BB%D0%BA%D0%B0%2C%20%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8%2C%20%D1%85%D0%BB%D0%BE%D0%BF%D1%83%D1%88%D0%BA%D0%B8.mp3",
        title: 'Новогодняя',
        artist: 'А. А. Пряжников'
    },
    1: {
        src: "https://track.pinkamuz.pro/download/3332373031303330348c3736b6343635b534350600/530beaa24216a5b51d191313756cff4e/019%20%D0%9B%D0%95%D0%9F%D0%A1%20-%20%D0%A0%D1%8E%D0%BC%D0%BA%D0%B0%20%D0%B2%D0%BE%D0%B4%D0%BA%D0%B8%20%D0%BD%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB%D0%B5.mp3",
        title: 'Рюмка водки на столе',
        artist: 'Григорий Лепс'
    },
    2: {
        src: "https://track.pinkamuz.pro/download/333332343236313735893731353332b63434360400/a4cba2c7a712ef299cdce3756a8a16b5/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9%20%D0%B3%D1%83%D0%B1%D0%B8%D0%BD%21%20-%203%D0%B8%D0%BC%D0%B0%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0.mp3",
        title: 'Зима-холода',
        artist: 'Андрей Губин'
    },
    3: {
        src: "https://track.pinkamuz.pro/download/333534353130373589b7b43030303236340400/34298153b874c7524f524b2999c675f0/%D0%98%D0%B2%D0%B0%D1%81%D0%B8%20-%20%D0%91%D0%B5%D1%80%D0%B5%D0%B6%D0%BA%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.mp3",
        title: 'Бережкарики',
        artist: 'Иваси'
    },
    4: {
        src: "https://ruo.morsmusic.org/load/866648099/Lida_GSPD_-_Evrobit_(musmore.org).mp3",
        title: 'Евробит',
        artist: 'Lida, GSPD'
    },
    5: {
        src: "https://ru-d1.drivemusic.me/dl/OT8kIFf_-i9h_XOPNJO-Qw/1773278093/download_music/2013/12/kipelov-ja-svoboden.mp3",
        title: 'Я свободен',
        artist: 'Кипелов'
    },
    6: {
        src: "https://ru-d2.drivemusic.me/dl/TJTczBizZgTPc6Ppl6VnGg/1773278216/download_music/2017/04/igor-nikolaev-malinovoe-vino.mp3",
        title: 'Малиновое вино',
        artist: 'Игорь Николаев'
    },
    7: {
        src: "https://ruo.morsmusic.org/load/551498262/YUrijj_SHatunov_-_Sedaya_noch_(musmore.org).mp3",
        title: 'Седая ночь',
        artist: 'Юрий Шатунов'
    },
    8: {
        src: "https://ru-d3.drivemusic.me/dl/RY2fe1AKw7Qalf6FNGsegA/1773278395/download_music/2013/12/imagine-dragons-demons.mp3",
        title: 'Demons',
        artist: 'Imagine Dragons'
    },
    9: {
        src: "https://ruo.morsmusic.org/load/2101526762/Egor_Krid_-_Devochka_s_kartinki_(musmore.org).mp3",
        title: 'Девочка с картинки',
        artist: 'Егор Крид'
    },
    366: {
        src: "https://ru.hitmoz.org/get/music/20190622/Stravinskijj_I_-_Balet_Petrushka_1_kartina_Narodnye_gulyanya_na_maslyanojj_nedele_65171513.mp3",
        title: 'Петрушка',
        artist: 'Игорь Стравинский'
    },
    367: {
        src: "https://fine.sunproxy.net/file/Q0ZkZEdJREM1czZQVTViRThSSm9CMVJBTU5GZ3Y1NldhU0JON0xLaXM1RnRid1pIS1pZR0NMamUwSlh0c3NHYWFQbXBhalU3bHdCOHNMN3JZYithNm1haW1KVm9IY3Z2NU0rd2RwWEhiYzg9/Jozef_Gajdn_-_Sonata_re_mazhor_ch.1_(TheMP3.Info).mp3",
        title: 'Соната ре мажор (1 часть)',
        artist: 'Йозеф Гайдн'
    },
    368: {
        src: "https://ruo.morsmusic.org/load/294701897/Valerii_Gergiev_Simfonicheskijj_orkestr_Mariinskogo_teatra_Modest_Petrovich_Musorgskijj_-_Progulka_iz_cikla_Kartinki_s_vystavki_v_orkestrovke_M_Ravelya_(musmore.org).mp3",
        title: 'Прогулка из цикла "Картинки с выставки"',
        artist: 'Модест Мусоргский'
    },
    369: {
         src: "https://track.pinkamuz.pro/download/33b6b030b4343437b08c37313533323130b3300700/c5e4366e582155304b814f0c3c6c4680/%D0%A8%D0%BE%D0%BF%D0%B5%D0%BD%20-%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%BD%D0%B5%D0%B7%20%D0%9B%D1%8F%20%D0%BC%D0%B0%D0%B6%D0%BE%D1%80.mp3",
         title: 'Полонез ля мажор',
         artist: 'Фридерик Шопен'
    },
    370: {
         src: "https://ru.hitmoz.org/get/cuts/94/36/9436fbf338409b68cca2c884a2aa90cd/71530795/Mocart_-_Tureckijj_marsh_-_fortepiano_-_Tureckijj_marsh_b128f0d211.mp3",
         title: 'Соната ля мажор, "Турецкий марш"',
         artist: 'Вольфганг Амадей Моцарт'
    },
    371: {
         src: "https://track.pinkamuz.pro/download/3332b3b034333133368f3731353332313230320700/a2e2ebe17c462e8d2606be8531554d70/%D0%A8%D0%BE%D1%81%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%20-%20%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%8F%20%E2%84%967%201%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%93%D0%9F.mp3",
         title: 'Симфония №7 "Ленинградская" (1 часть)',
         artist: 'Дмитрий Шостакович'
    },
    372: {
         src: "https://ru-d2.drivemusic.me/dl/o_MuCKULYSWHimY97f0T7w/1773557551/download_music/2011/12/mendelson-svadebnyjj-marsh.mp3",
         title: 'Свабедный марш',
         artist: 'Феликс Мендельсон'
    },
    373: {
         src: "https://track.pinkamuz.pro/download/33343334353431338d3731353332b63437b50400/2b83183a588fcdccf8fe816372dc442a/%D0%AD%D0%B4%D0%B2%D0%B0%D1%80%D0%B4%20%D0%93%D1%80%D0%B8%D0%B3%20-%20%D0%9F%D0%B5%D1%80%20%D0%93%D1%8E%D0%BD%D1%82.%20%D0%90%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D0%B0%D0%BD%D0%B5%D1%86.mp3",
         title: 'Опера "Пер Гюнт", Арабский танец',
         artist: 'Эдвард Григ'
    },
    374: {
         src: "https://track.pinkamuz.pro/download/333537313432b6b0308e373135333231b034300600/9d0919f0a2c860cacfbabbea9164db40/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%20-%20%D0%9A%D0%BD%D1%8F%D0%B7%D1%8C%20%D0%98%D0%B3%D0%BE%D1%80%D1%8C%20-%20%D0%BF%D1%80%D0%BE%D0%BB%D0%BE%D0%B3.mp3",
         title: 'Опера "Князь Игорь", хор "Солнцу красному слава"',
         artist: 'Александр Бородин'
    },
    375: {
         src: "https://track.pinkamuz.pro/download/33323030303137333630883731353332313134320100/d878b1e1d9b9e1d8f73d9fd910ac6219/%D0%91%D0%B5%D1%82%D1%85%D0%BE%D0%B2%D0%B5%D0%BD%20-%20%D0%9E%D0%B4%D0%B0%20%22%D0%9A%20%D1%80%D0%B0%D0%B4%D0%BE%D1%81%D1%82%D0%B8%22.mp3",
         title: 'Ода к радости',
         artist: 'Людвиг ван Бетховен'
    },
    376: {
         src: "https://track.pinkamuz.pro/download/33b2b0303634318837b6343630373130300000/6a316f8a789e4674b22aa3d203e4bb63/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B7%D0%B5%D1%80%D0%BE.%D0%9F.%D0%98.%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.%20-%20%D0%A2%D0%B0%D0%BD%D0%B5%D1%86%20%D0%B1%D0%B5%D0%BB%D1%8B%D1%85%20%D0%BB%D0%B5%D0%B1%D0%B5%D0%B4%D0%B5%D0%B9.mp3",
         title: 'Балет "Лебединое озеро", Танец маленьких лебедей',
         artist: 'Пётр Чайковский'
    },
    377: {
         src: "https://track.pinkamuz.pro/download/33333434b230318b3732373632363337b40000/953b0340b1fffb3e7b062cb96eb549a6/%D0%90%D1%80%D0%B0%D0%BC%20%D0%A5%D0%B0%D1%87%D0%B0%D1%82%D1%83%D1%80%D1%8F%D0%BD%20-%20%D0%A2%D0%B0%D0%BD%D0%B5%D1%86%20%D1%81%20%D1%81%D0%B0%D0%B1%D0%BB%D1%8F%D0%BC.mp3",
         title: 'Танец с саблями',
         artist: 'Арам Хачатурян'
    },
    378: {
         src: "https://ru.hitmoz.org/get/music/20190412/Boris_Godunov_-_Prolog_KHor_Slava_63478597.mp3",
         title: 'Опера "Борис Годунов", хор "Слава"',
         artist: 'Модест Мусоргский'
    }
};

const activeDivs = (JSON.parse(localStorage.getItem('activeDivs')) || [])
    .map(Number)
    .filter(Number.isFinite);

const playButton = document.getElementById('playButton');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

let visibleTracks = [];
let currentTrackIndex = -1;
let currentAudio = null;
let currentTrackButton = null;


// Выбор контейнера
function getContentContainer(index) {
    const numIndex = Number(index);

    if (!Number.isFinite(numIndex)) return null;

    return numIndex <= 365 ? firstContent : secondContent;
}

// Проверка: индекс активен
function isActiveIndex(index) {
    const numIndex = Number(index);
    return Number.isFinite(numIndex) && activeDivs.includes(numIndex);
}


document.querySelectorAll('.section-player').forEach(section => {
    const index = Number(section.getAttribute('data-index'));

    if (!Number.isFinite(index) || !activeDivs.includes(index)) {
        if (currentAudio && section.contains(currentAudio)) {
            currentAudio.pause();
            currentAudio = null;
            currentTrackIndex = -1;
            currentTrackButton = null;
        }
        section.remove();
    }
});

// Создаём недостающие секции только для activeDivs
activeDivs.forEach(index => {
    const numIndex = Number(index);

    if (!Number.isFinite(numIndex)) return;

    const existing = document.querySelector(`.section-player[data-index="${numIndex}"]`);

    if (!existing && isActiveIndex(numIndex)) {
        const data = trackData[numIndex];

        if (!data) {
            console.warn(`Нет данных для trackData[${numIndex}]`);
            return;
        }

        const container = getContentContainer(numIndex);

        if (!container) {
            console.warn(`Контейнер для index ${numIndex} не найден`);
            return;
        }

        const section = document.createElement('section');
        section.className = 'section-player';
        section.setAttribute('data-index', numIndex);

        section.innerHTML = `
            <audio src="${data.src}"></audio>
            <div class="section-flex">
                <button class="section-play" onclick="playtrack(this)">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12 L16 36 L36 24 Z" fill="#191e2d"/>
                    </svg>
                </button>
                <div class="section-data">
                    <strong>${data.title}</strong>
                    <p>${data.artist}</p>
                </div>
            </div>
            <div class="section-info">
                <a class="section-info__a" href="${data.src}">
                    <svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.736 7.65582L8.29589 11.8317C8.17905 11.9477 7.94536 11.9477 7.82852 11.8317L3.27161 7.65582" stroke="#191e2d" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                        <path d="M8.06226 0V7.42382V11.8317" stroke="#191e2d" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                        <path d="M0 16.0381H16.0076" stroke="#191e2d" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
                    </svg>
                </a>
            </div>
        `;

        container.appendChild(section);
    }
});

// Получаем список треков
function updateVisibleTracks() {
    visibleTracks = Array.from(document.querySelectorAll('.section-player'));
}

// Формат времени
function formatTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Подсветка активной кнопки
function setActiveButton(button) {
    if (currentTrackButton && currentTrackButton !== button) {
        currentTrackButton.style.backgroundColor = '';
    }

    currentTrackButton = button;

    if (currentTrackButton) {
        currentTrackButton.style.backgroundColor = '#cbb5ff';
    }
}

// Обновление общей панели
function updatePlayerUI() {
    if (!currentAudio) {
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';
        progressBar.value = 0;
        playButton.innerHTML = `
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16 12 L16 36 L36 24 Z" fill="#191e2d"/>
            </svg>
        `;
        return;
    }

    currentTimeEl.textContent = formatTime(currentAudio.currentTime);
    durationEl.textContent = formatTime(currentAudio.duration);

    if (currentAudio.duration) {
        progressBar.value = (currentAudio.currentTime / currentAudio.duration) * 100;
    } else {
        progressBar.value = 0;
    }

    playButton.innerHTML = currentAudio.paused
        ? `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
               <path d="M16 12H22V36H16V12Z" fill="#191e2d"/>
               <path d="M26 12H32V36H26V12Z" fill="#191e2d"/>
           </svg>`
        : `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
               <path d="M16 12 L16 36 L36 24 Z" fill="#191e2d"/>
           </svg>`;
}

// Запуск трека
function playtrack(button) {
    const section = button.closest('.section-player');

    if (section) {
        const audio = section.querySelector('audio');

        if (audio) {
            if (currentAudio === audio) {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
                updatePlayerUI();
            } else {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                }

                currentAudio = audio;
                updateVisibleTracks();
                currentTrackIndex = visibleTracks.indexOf(section);
                setActiveButton(button);

                audio.play();
                updatePlayerUI();

                audio.ontimeupdate = () => updatePlayerUI();
                audio.onloadedmetadata = () => updatePlayerUI();
                audio.onended = () => nextTrack();
            }
        }
    }
}

// Общая кнопка play/pause
playButton.addEventListener('click', () => {
    if (!currentAudio) {
        if (visibleTracks.length > 0) {
            const firstSection = visibleTracks[0];
            const firstButton = firstSection.querySelector('.section-play');
            playtrack(firstButton);
        }
    } else {
        if (currentAudio.paused) {
            currentAudio.play();
        } else {
            currentAudio.pause();
        }
        updatePlayerUI();
    }
});

// Перемотка
progressBar.addEventListener('input', () => {
    if (currentAudio && currentAudio.duration) {
        const newTime = (progressBar.value / 100) * currentAudio.duration;
        currentAudio.currentTime = newTime;
        updatePlayerUI();
    }
});

// Следующий / предыдущий трек
function nextTrack() {
    updateVisibleTracks();

    if (visibleTracks.length > 0) {
        if (currentTrackIndex === -1) {
            currentTrackIndex = 0;
        } else {
            currentTrackIndex = (currentTrackIndex + 1) % visibleTracks.length;
        }

        const nextSection = visibleTracks[currentTrackIndex];
        const nextButton = nextSection.querySelector('.section-play');
        playtrack(nextButton);
    }
}

function prevTrack() {
    updateVisibleTracks();

    if (visibleTracks.length > 0) {
        if (currentTrackIndex === -1) {
            currentTrackIndex = 0;
        } else {
            currentTrackIndex = (currentTrackIndex - 1 + visibleTracks.length) % visibleTracks.length;
        }

        const prevSection = visibleTracks[currentTrackIndex];
        const prevButton = prevSection.querySelector('.section-play');
        playtrack(prevButton);
    }
}

// Клава
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        playButton.click();
    }

    if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevTrack();
    }

    if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextTrack();
    }
});

// Наушники
if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => {
        playButton.click();
    });

    navigator.mediaSession.setActionHandler('pause', () => {
        playButton.click();
    });

    navigator.mediaSession.setActionHandler('previoustrack', () => {
        prevTrack();
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => {
        nextTrack();
    });
}

updateEmptyMessages();
updateVisibleTracks();
updatePlayerUI();
