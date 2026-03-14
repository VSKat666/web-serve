const tracks = [
    //радость
    "https://track.pinkamuz.pro/download/d33536b1b0303130358f3731353332b63432340600/2bbf3bdb31cdca7bf15cdda0da44995b/%D0%A1%D1%82%D1%80%D0%B0%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20-%20%D0%9F%D0%B5%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B0.%20%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%B3%D1%83%D0%BB%D1%8F%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%9C%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9.mp3",
    "https://track.pinkamuz.pro/download/33b53430b33034b1348d3731353332b63430370600/7221edd7bec71bc498f75a88692f0bea/%D0%99%20%D0%93%D0%B0%D0%B9%D0%B4%D0%BD%20-%20%D0%A1%D0%BE%D0%BD%D0%B0%D1%82%D0%B0%20%D0%A0%D0%B5%20%D0%BC%D0%B0%D0%B6%D0%BE%D1%80.%201%20%D1%87%D0%B0%D1%81%D1%82%D1%8C..mp3",
    "https://ruo.morsmusic.org/load/294701897/Valerii_Gergiev_Simfonicheskijj_orkestr_Mariinskogo_teatra_Modest_Petrovich_Musorgskijj_-_Progulka_iz_cikla_Kartinki_s_vystavki_v_orkestrovke_M_Ravelya_(musmore.org).mp3",
    "https://track.pinkamuz.pro/download/33b6b030b4343437b08c37313533323130b3300700/c5e4366e582155304b814f0c3c6c4680/%D0%A8%D0%BE%D0%BF%D0%B5%D0%BD%20-%20%D0%9F%D0%BE%D0%BB%D0%BE%D0%BD%D0%B5%D0%B7%20%D0%9B%D1%8F%20%D0%BC%D0%B0%D0%B6%D0%BE%D1%80.mp3",
    "https://track.pinkamuz.pro/download/3336303030b604827813533323634b43037300/e637b7d63d2245a7a5c715cb9cd0dce0/%D0%92.%D0%9C%D0%BE%D1%86%D0%B0%D1%80%D1%82%20-%20%D0%A2%D1%83%D1%80%D0%B5%D1%86%D0%BA%D0%B8%D0%B9%20%D0%BC%D0%B0%D1%80%D1%88.%20Rondo%20All%20Turka.mp,
    "https://track.pinkamuz.pro/download/3332b3b034333133368f3731353332313230320700/a2e2ebe17c462e8d2606be8531554d70/%D0%A8%D0%BE%D1%81%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%20-%20%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%8F%20%E2%84%967%201%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%2C%20%D0%93%D0%9F.mp3",
    "https://ru-d2.drivemusic.me/dl/o_MuCKULYSWHimY97f0T7w/1773557551/download_music/2011/12/mendelson-svadebnyjj-marsh.mp3",
    "https://track.pinkamuz.pro/download/33343334353431338d3731353332b63437b50400/2b83183a588fcdccf8fe816372dc442a/%D0%AD%D0%B4%D0%B2%D0%B0%D1%80%D0%B4%20%D0%93%D1%80%D0%B8%D0%B3%20-%20%D0%9F%D0%B5%D1%80%20%D0%93%D1%8E%D0%BD%D1%82.%20%D0%90%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D0%B0%D0%BD%D0%B5%D1%86.mp3",
    "https://track.pinkamuz.pro/download/333537313432b6b0308e373135333231b034300600/9d0919f0a2c860cacfbabbea9164db40/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%20-%20%D0%9A%D0%BD%D1%8F%D0%B7%D1%8C%20%D0%98%D0%B3%D0%BE%D1%80%D1%8C%20-%20%D0%BF%D1%80%D0%BE%D0%BB%D0%BE%D0%B3.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/db\/c2\/dbc274009aeb68210f6eedcc06048fbd\/65241872\/Lyudvig_van_Betkhoven_-_Oda_K_radosti_b128f0d413.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3c\/cd\/3ccdc543972ed4d77820786e817eda1d\/70980438\/CHajjkovskijj_Petr_Ilich_-_Tanec_malenkikh_lebedejj_b128f0d87.mp3",
    
    //грусть
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3c\/31\/3c31279ae95325f09fbc402d9c7babae\/63849474\/Bakh_-_KHoralnaya_prelyudiya_fa-minor_b128f0d190.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20190626\/SHopen_-_Noktyurn_fa_minor_65234177.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/fa\/93\/fa93f2c6acef740c09bb02bd96a16756\/63492630\/rans_shubert_-_Muzykalnyjj_moment_N3_fa-minor_D_780_b128f0d119.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/20\/f1\/20f17230210bc764f5ceb74ffe0f14dc\/48352571\/Vladimir_Sofronitzky_Aleksandr_Nikolaevich_Skryabin_-_JEtyud_re-diez_minor_Revolyucionnyjj_soch_8_12_b128f0d162.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20180817\/Ivan_Kozlovskijj_Modest_Petrovich_Musorgskijj_Orkestr_Bolshogo_teatra_SSSR_Nikolajj_Golovanov_-_Boris_Godunov_dejjstvie_IV_kartina_1_Scena_YUrodivogo_YUrodivyjj_Trrr_rrr_-_ZHeleznyjj_kolpak_Mesyac_edet_kotenok_plachet_O_chem_on_plachet_58036320.mp3",
    "https://track.pinkamuz.pro/download/333630313030b334b1883731353332b63432300100/ede5eda44e44673c77f44ef06dadc1f4/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9E%D0%BD%D0%B5%D0%B3%D0%B8%D0%BD%20-%20%D0%94%D1%83%D1%8D%D1%82%20%D0%9E%D0%BD%D0%B5%D0%B3%D0%B8%D0%BD%D0%B0%20%D0%B8%20%D0%9B%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B8%20%D1%81%D1%86%D0%B5%D0%BD%D0%B0%20%D0%B4%D1%83%D1%8D%D0%BB%D0%B8.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2b\/11\/2b11e4f16beeb0de7564f7df58133a12\/48113982\/Lyudvig_van_Betkhoven_-_Lunnaya_sonata_b128f0d331.mp3",
    "https://track.pinkamuz.pro/download/333433b434b5b430338c3731353332b63432300700/2131d843f383e9b418eac4e6fcc33897/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%20-%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%20%22%D0%9A%D0%BD%D1%8F%D0%B7%D1%8C%20%D0%98%D0%B3%D0%BE%D1%80%D1%8C%22%20-%20%D1%85%D0%BE%D1%80%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D0%B5%D1%86%D0%BA%D0%B8%D1%85%20%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA%20%28%D1%83%D0%BB%D0%B5%D1%82%D0%B0%D0%B9%20%D0%BD%D0%B0%20%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D1%8F%D1%85%20%D0%B2%D0%B5%D1%82%D1%80%D0%B0%29.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20221012\/Sergejj_Vasilevich_Rakhmaninov_-_Prelyudiya_do_diez_minor_74799110.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/63\/21\/63213aa845b7e5881de19dcbcdf6e528\/72195141\/Volfgang_Amadejj_Mocart_-_Requiem_in_D_Minor_K_626_Lacrimosa_b128f0d208.mp3",

    //релаксация
    "https:\/\/rus.hitmotop.com\/get\/music\/20150904\/JE_Grig_-_Utro_Per_Gyunt_isp_LKO_28504737.mp3",
    "https://track.pinkamuz.pro/download/33363434353735893731353332b63434360000/153dd564af1031368f250afc54a37786/%D0%94.%D0%A8%D0%BE%D1%81%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%20-%20%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D1%81%20%D0%B8%D0%B7%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B8%20%D0%BA%20%D0%BA%20%D1%84%20%D0%9E%D0%B2%D0%BE%D0%B4.mp3",
    "https://track.pinkamuz.pro/download/d3b5303431333437b28837363531b1343134340000/82495a6efd1ecfd482f3768a15690d81/8.17.%20%D0%A0%D0%B8%D0%BC%D1%81%D0%BA%D0%B8%D0%B9-%D0%9A%D0%BE%D1%80%D1%81%D0%B0%D0%BA%D0%BE%D0%B2%20%D0%9D.%D0%90.%20-%20%D1%81%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%81%D1%8E%D0%B8%D1%82%D0%B0%20%D0%A8%D0%B5%D1%85%D0%B5%D1%80%D0%B0%D0%B7%D0%B0%D0%B4%D0%B0%2C%20%D1%87.1.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20200902\/S_Rakhmaninov_-_romans_Siren_70793767.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20191211\/Sviridov_-_Romans_Metel_67579557.mp3",
    "https://track.pinkamuz.pro/download/33b63032343736b6b08c3731353332b63434350400/007fff562169c32cd31b97ae61d6d868/%D0%9B%D1%8E%D0%B4%D0%B2%D0%B8%D0%B3%20%D0%B2%D0%B0%D0%BD%20%D0%91%D0%B5%D1%82%D1%85%D0%BE%D0%B2%D0%B5%D0%BD%20-%20%D0%9A%20%D0%AD%D0%BB%D0%B8%D0%B7%D0%B5.mp3",

    //другое
    "https:\/\/rus.hitmotop.com\/get\/cuts\/47\/5e\/475e3c033b4d3d2b5e49d35684cecf21\/48350812\/Valerijj_Gergiev_Rotterdam_Philharmonic_Orchestra_Aleksandr_Porfirevich_Borodin_-_Simfoniya_2_Bogatyrskaya_I_chast_b128f0d476.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/e6\/01\/e601c5eef64fe86abf955b0f34f6b18d\/28503982\/JEdvard_Grig_-_V_Peshhere_Gornogo_Korolya_b128f0d154.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/55\/55\/5555c22106a7977ad1306d7e99c240c0\/28503940\/Sergejj_Prokofev_-_Tanec_rycarejj_b128f0d305.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/66\/9c\/669cb66451e103d8715433179d4aa2d7\/64669654\/Vilgelm_Rikhard_Vagner_-_Polet_Valkirijj_b128f0d326.mp3",
    "https:\/\/rus.hitmotop.com\/get\/music\/20200208\/Iogann_Sebastyan_Bakh_-_Tokkata_i_fuga_re_minor_organ_-_Valter_Kraft_68309978.mp3",
    "https://track.pinkamuz.pro/download/33b5b43433303635b78c3731353332b634b4340400/7d5412d8a1e5af9e196c419e83045da6/%D0%99.%20%D0%93%D0%B0%D0%B9%D0%B4%D0%BD%20-%20%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%8F%20%E2%84%96%20103%20%22%D0%A1%20%D1%82%D1%80%D0%B5%D0%BC%D0%BE%D0%BB%D0%BE%20%D0%BB%D0%B8%D1%82%D0%B0%D0%B2%D1%80%22%201%D1%87..mp3",
    "https://track.pinkamuz.pro/download/3332303030b23434b2348b373135333231b134350200/a4185ec97358717f9f0befcf5a3624f3/%D0%9F%D0%B5%D1%82%D1%80%20%D0%98%D0%BB%D1%8C%D0%B8%D1%87%20%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%28Petr%20Tchaikovsky%29%20-%20%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%8F%201%20.1%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%20%D0%93%D1%80%D1%91%D0%B7%D1%8B%20%D0%B7%D0%B8%D0%BC%D0%BD%D0%B5%D0%B9%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B9.mp3",
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2e\/54\/2e54eb11ad6eacf5aecb91367844cff2\/48349966\/Royal_Concertgebouw_Orchestra_Antal_Dorati_Pjotr_Ilich_CHajjkovskijj_-_Tanec_fei_Drazhe_iz_baleta_SHHelkunchik_b128f0d136.mp3",
    "https://track.pinkamuz.pro/download/333135b134b7303131893731353332b63434310300/6eca7d5cad6a05b164483198bde61fa6/%D0%9F%D1%80%D0%BE%D0%BA%D0%BE%D1%84%D1%8C%D0%B5%D0%B2%20%D0%9A%D0%B0%D0%BD%D1%82%D0%B0%D1%82%D0%B0%20%22%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%20%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%22%20-%204%20%D1%87%D0%B0%D1%81%D1%82%D1%8C%20%D0%92%D1%81%D1%82%D0%B0%D0%B2%D0%B0%D0%B9%D1%82%D0%B5%2C%20%D0%BB%D1%8E%D0%B4%D0%B8%20%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B5.mp3"
];

const audio = document.getElementById('audio');
const playbtn = document.getElementById('playButton');
const playIcon = `<svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M16 12 L16 36 L36 24 Z" fill="currentColor"/></svg>`;
const pauseIcon =  `<svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 V30 H7 V0 Z" stroke="#000" fill="#000"/>
                        <path d="M13 0 V30 H20 V0 Z" stroke="#000" fill="#000"/>
                    </svg>`;

const progressBar = document.getElementById('progressBar');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const buttons = document.querySelectorAll('.section-play');

let track = -1;

document.addEventListener('DOMContentLoaded', function(){
    durationElement.textContent = "0:00";
});

 
audio.addEventListener('loadstart', () => {
    durationElement.textContent = "0:00";});
audio.addEventListener('play', () => {
    startTrack();
    update();});
audio.addEventListener('pause', update);
audio.addEventListener('ended', nextTrack);
audio.addEventListener('timeupdate', updateTime);
progressBar.addEventListener('input', seek);


        function playTrack(index) {
            if (index >= 0 && index < tracks.length) {
                if (track !== index) {
                    track = index;
                    audio.src = tracks[track];
                    audio.load();
                    audio.play().catch(error => {console.error("Ошибка воспроизведения: ", error);});
                    update();
                    change(index);
                    updateMediaSessionMetadata(index);
                } else {
                    toggle();
                }
            }
        }

        function prevTrack() {
            const newIndex = (track - 1 + tracks.length) % tracks.length;
            playTrack(newIndex);
            updateMediaSessionMetadata(newIndex);
        }

        function nextTrack() {
            const newIndex = (track + 1) % tracks.length;
            playTrack(newIndex);
            updateMediaSessionMetadata(newIndex);
        }

        function toggle() {
            if (audio.paused || audio.ended) {
                audio.play().catch(error => {
                        console.error("Ошибка воспроизведения: ", error);
                    });
            } else {
                audio.pause();
            }
            update();
        }

        // изменение надписи кнопки play/pause
        function update() {
            if(audio.paused){
                playbtn.innerHTML = pauseIcon;
            } else {
                playbtn.innerHTML = playIcon;
            }
        }

            //добавление и обновление текущего исполнителя и названия трека во всплывающем виджете
        function updateMediaSessionMetadata(index) {
            const artist = buttons[index].getAttribute('data-artist');
            const trackName = buttons[index].getAttribute('data-track');

            if (artist && trackName) {
                if ('mediaSession' in navigator) {
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: trackName,
                        artist: artist,
                    });
                }
            }
        }


        
        function startTrack() {
            resetProgress();
            checkDuration();
            updateTime();
        }

        function resetProgress() {
            progressBar.value = 0;
            currentTimeElement.textContent = "0:00";
        }
        
        // Проверяем длину трека перед началом воспроизведения
        function checkDuration() {
            if (isNaN(audio.duration)) {
                setTimeout(checkDuration, 100);
            }
        }

        function updateTime() {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            // Форматирование времени
            const formatTime = (time) => {
                const minutes = Math.floor(time / 60);
                const seconds = Math.floor(time % 60);
                return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            };

            currentTimeElement.textContent = formatTime(currentTime);
            durationElement.textContent = formatTime(duration);

            // Обновление ползунка
            if (!isNaN(duration)) {
                progressBar.value = (currentTime / duration) * 100;
            }
        }

        // Перемотка трека
        function seek(event) {
            const value = event.target.value;
            audio.currentTime = (value / 100) * audio.duration;
        }

        //подсветка текущего трека
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                change(index);
            });
        });

        function change(index) {
            buttons.forEach((btn, i) => {
                btn.style.backgroundColor = i === index ? btn.dataset.color : '';
            });
            updateMediaSessionMetadata(index);
        }


        // управление с помощью клавиатуры
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Space') {
                event.preventDefault();
                toggle();
            } else if (event.code === 'ArrowRight') {
                nextTrack();
            } else if (event.code === 'ArrowLeft') {
                prevTrack();
            }
        })


        //управление с помощью наушников
        if ('mediaSession' in navigator) {
        
            navigator.mediaSession.setActionHandler('play', () => {
                audio.play();
                update();
            });
            navigator.mediaSession.setActionHandler('pause', () => {
                audio.pause();
                update();
            });
            navigator.mediaSession.setActionHandler('previoustrack', () => {
                prevTrack();
            });
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                nextTrack();
            });
        }









// Исходный цвет звезд
const ORIGINAL = "#c4cfd6";
// Состояние звездочек: хранит, выбрана ли звезда как любимая для каждой отдельно
const stars = Array.from(document.querySelectorAll('.star'));

// Модель состояния по каждому элементу
const state = new Map(); // key: element, value: boolean (liked)

// Init
stars.forEach(star => {
  star.style.fill = ORIGINAL;
  state.set(star, false);
  star.addEventListener('click', () => {
    // переключение состояния конкретной звезды
    const isLiked = state.get(star);
    const newState = !isLiked;
    state.set(star, newState);
    star.style.fill = newState ? "#ffd966" : ORIGINAL; // желтый при добавлении
    showToast(newState ? "Tрек добавлен в любимое!" : "Удалено!");
  });
});

// Функция показа сообщения у мини-окна снизу на 3 секунды
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  // автоудаление через 3 секунды
  clearTimeout(toast._hideTimeout);
  toast._hideTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}



