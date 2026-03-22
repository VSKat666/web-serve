const alertBox = document.getElementById("alertBox");
        const alertClose = document.getElementById("alertClose");

        window.alert = function(message) {
            document.getElementById("alertMessage").innerHTML = message;
            alertClose.onclick = closeAlertBox;
        }
        function closeAlertBox(){
            alertBox.style.visibility = "hidden";
            alertClose.style.visibility = "hidden";
        }
        alert("Предупреждение! Во избежание недопониманий информируем вас, что у некоторых треков неполностью указан состав исполнителей. Полный состав исполнителей вы можете посмотреть, наведя компьютерной мышью на неполно указанного исполнителя.");

const tracks = [
    //january
    "https://track.pinkamuz.pro/download/3334313532b734b334893731353332b63435350100/1dbfe056d67b2c712c2354dbbdf076d6/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F%20%D0%BF%D0%B5%D1%81%D0%B5%D0%BD%D0%BA%D0%B0%20-%20%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%B3%D0%BE%D0%B4%2C%20%D0%B5%D0%BB%D0%BA%D0%B0%2C%20%D1%88%D0%B0%D1%80%D0%B8%D0%BA%D0%B8%2C%20%D1%85%D0%BB%D0%BE%D0%BF%D1%83%D1%88%D0%BA%D0%B8.mp3", //1
    "https://track.pinkamuz.pro/download/3332373031303330348c3736b6343635b534350600/530beaa24216a5b51d191313756cff4e/019%20%D0%9B%D0%95%D0%9F%D0%A1%20-%20%D0%A0%D1%8E%D0%BC%D0%BA%D0%B0%20%D0%B2%D0%BE%D0%B4%D0%BA%D0%B8%20%D0%BD%D0%B0%20%D1%81%D1%82%D0%BE%D0%BB%D0%B5.mp3",
    "https://track.pinkamuz.pro/download/333332343236313735893731353332b63434360400/a4cba2c7a712ef299cdce3756a8a16b5/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9%20%D0%B3%D1%83%D0%B1%D0%B8%D0%BD%21%20-%203%D0%B8%D0%BC%D0%B0%20%D1%85%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0.mp3",
    "https://track.pinkamuz.pro/download/333534353130373589b7b43030303236340400/34298153b874c7524f524b2999c675f0/%D0%98%D0%B2%D0%B0%D1%81%D0%B8%20-%20%D0%91%D0%B5%D1%80%D0%B5%D0%B6%D0%BA%D0%B0%D1%80%D0%B8%D0%BA%D0%B8.mp3", //4
    "https://ruo.morsmusic.org/load/866648099/Lida_GSPD_-_Evrobit_(musmore.org).mp3", //5
    "https://ru-d1.drivemusic.me/dl/OT8kIFf_-i9h_XOPNJO-Qw/1773278093/download_music/2013/12/kipelov-ja-svoboden.mp3", //6
    "https://ru-d2.drivemusic.me/dl/TJTczBizZgTPc6Ppl6VnGg/1773278216/download_music/2017/04/igor-nikolaev-malinovoe-vino.mp3", //7
    "https://ruo.morsmusic.org/load/551498262/YUrijj_SHatunov_-_Sedaya_noch_(musmore.org).mp3", //8
    "https://muz.zvukofon.com/dl/42166285/Imagine_Dragons_-_Demons_(musportal.org).mp3", //9
    "https://ruo.morsmusic.org/load/2101526762/Egor_Krid_-_Devochka_s_kartinki_(musmore.org).mp3", //10
    "https://ruo.morsmusic.org/load/2014265934/Nervy_-_Rodnojj_gorod_(musmore.org).mp3",
    "https://ruo.morsmusic.org/load/58945962/Lind_Erebros_-_Shadow_Lady_(musmore.org).mp3", //12
    "https://ru-d1.drivemusic.me/dl/TQi6ip-fRhAyMhlEjUxCAQ/1773279044/download_music/2022/09/one-ok-rock-feat.-5-seconds-of-summer-take-what-you-want.mp3",
    "https://ruo.morsmusic.org/load/1686773778/BREDISH_-_Na_rukakh_(musmore.org).mp3",
    "https://ruo.morsmusic.org/load/1727842944/Jackie-O_-_Fuyu_No_Hanashi_From_Given_(musmore.org).mp3", //15
    "https://ruo.morsmusic.org/load/1594150421/SLOT_-_Mjortvye_zvjozdy_(musmore.org).mp3", //16
    "https://ru-d2.drivemusic.me/dl/_ejLLm1qPDaYkBlKNwSSOg/1773275359/download_music/2025/01/jahmal-tgk-cherno-belyjj-tankograd.mp3",
    "https://ru-d1.drivemusic.me/dl/C7QOG-7hb52_ONNRM9gnzw/1773275304/download_music/2021/07/the-kid-laroi-feat.-justin-bieber-stay.mp3", //18
    "https://ru-d2.drivemusic.me/dl/SZq4LSb8BPmGoxis7UEDPg/1773274908/download_music/2012/01/polina-gagarina-spektakl-okonchen.mp3", //19
    "https://ru-d2.drivemusic.me/dl/8RIhmVWFCz4Py0geTXlbzw/1773274860/download_music/2020/04/skillet-finish-line.mp3", //20
    "https://ru-d2.drivemusic.me/dl/IUSxjF63fIJfsCB-CTjkQw/1773274796/download_music/2016/06/twenty-one-pilots-heathens.mp3", //21
    "https://ruo.morsmusic.org/load/1733192588/Jagwar_Twin_-_Happy_Face_(musmore.org).mp3", //22
    "https://ru-d3.drivemusic.me/dl/eNw8v-vgq8p5j_5SliarsQ/1773274642/download_music/2022/09/set-it-off-killer-in-the-mirror.mp3", //23
    "https://ru-d3.drivemusic.me/dl/RgP2n6ttmc2m7NSobWcdjQ/1773274583/download_music/2012/12/vintazh-eva.mp3", //24
    "https://ruo.morsmusic.org/load/1105508209/CHjornyjj_Obelisk_-_Oborona_(musmore.org).mp3",
    "https://ru-d3.drivemusic.me/dl/n97SbF1Sqe83I278FGpO9A/1773274427/download_music/2018/03/imagine-dragons-shots.mp3",
    "https://ruo.morsmusic.org/load/1152640169/Mneskin_-_CORALINE_(musmore.org).mp3", //27
    "https://ru-d1.drivemusic.me/dl/rR8C0PCedU2bOBNZiE5X4A/1773274112/download_music/2014/02/zemfira-khochesh.mp3",
    "https://ru-d2.drivemusic.me/dl/Td9iZJFh_V-inn5HPAvDKw/1773273937/download_music/2023/05/korol-i-shut-kukla-kolduna.mp3", //29
    "https://ru-d2.drivemusic.me/dl/-zEUvbOfbut7sTk49vR-9g/1773273884/download_music/2022/09/one-ok-rock-bombs-away.mp3",
    "https://track.pinkamuz.pro/download/33313731b1b43432b188373135330162732300/6106d2b7e4a934855f9de25056967437/%D0%90%D0%91%D0%95%D0%A0%D0%A0%D0%9E%D0%9D%20-%20%D0%92%D0%B5%D1%82%D0%B5%D1%80.mp3",

    //february
    "https://ru-d1.drivemusic.me/dl/OKUPWmtck-7hHyILtOSWBg/1773364158/download_music/2017/01/imagine-dragons-believer.mp3",
    "https://ru-d3.drivemusic.me/dl/0OvxDuxEUduGb9PQZrsvRA/1773364224/download_music/2019/02/the-score-born-for-this.mp3", //2
    "https://track.pinkamuz.pro/download/3332b13030343537308d3731353332313037340500/2f93b54aca173a79ff5915f5c3edd071/%D0%97%D0%B5%D0%BC%D0%BB%D1%8F%D0%BD%D0%B5%20-%20%D0%A2%D1%80%D0%B0%D0%B2%D0%B0%20%D1%83%20%D0%B4%D0%BE%D0%BC%D0%B0.mp3", //3
    "https://ru-d3.drivemusic.me/dl/pQzgm3nXbNGvMBMJRJHB9w/1773364319/download_music/2012/04/linkin-park-burn-it-down.mp3", //4
    "https://ru-d3.drivemusic.me/dl/B_xbEITN1tSEfFkL70-Ktw/1773364370/download_music/2024/11/jelektroforez-zlo.mp3", //5
    "https://ru-d3.drivemusic.me/dl/E3BJu12gku_iyHFbuT0Owg/1773364429/download_music/2014/07/imagine-dragons-it039s-time.mp3",
    "https://ruo.morsmusic.org/load/929321279/TK_from_Ling_tosite_sigure_-_Unravel_(musmore.org).mp3",
    "https://track.pinkamuz.pro/download/3336b13432b7303432893731353332313031300400/d29306176cd14cb222ff3ddfb1780630/Lind%20Erebros%20-%20The%20Master%20of%20the%20Skills.mp3",
    "https://muz.zvukofon.com/dl/909837417/Camellia_-_Final-Boss-Chan_(musportal.org).mp3",
    "https://track.pinkamuz.pro/download/333230303032353236308f3731353332313530b40400/d9d90b5cd672c0036df36425aa2f8b97/%D0%9C%D0%B0%D1%80%D0%B8%D1%8F%20%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%20-%20%D0%9F%D0%B0%D0%B4%D0%B0%D0%B5%D0%BC%20%D0%B8%20%D0%B2%D0%B7%D0%BB%D0%B5%D1%82%D0%B0%D0%B5%D0%BC.mp3",
    "https://ru-d2.drivemusic.me/dl/G91uG-Z4NZk4VxZCC2mgsw/1773364740/download_music/2022/09/one-ok-rock-good-goodbye.mp3",
    "https://ru-d1.drivemusic.me/dl/INb15xWfoB4rD2g6yx7E7Q/1773364861/download_music/2021/01/rammstein-sonne.mp3", //12
    "https://ru-d1.drivemusic.me/dl/9neKFOSThQRRPmQGbvIFUw/1773364928/download_music/2022/09/starset-perfect-machine.mp3",
    "https://ru-d1.drivemusic.me/dl/Ww76kRof1V5mSIfjIj76KQ/1773364990/download_music/2020/02/zivert-jatl.mp3",
    "https://vskat666.github.io/web-serve/img/%D0%9F%D0%BE%D0%BB%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8_-_%D1%8F%D1%80%D1%87%D0%B5_%D0%B7%D0%B2%D0%B5%D0%B7%D0%B4__%D0%91%D0%B5%D0%B7_%D0%BC%D0%B0%D1%82%D0%B0___speed_up___TikTok_remix_.mp3", //15
    "https://ruo.morsmusic.org/load/559126444/Dajjte_tank_-_My_(musmore.org).mp3",
    "https://ru-d3.drivemusic.me/dl/DZ3J3S9XrA977csuJAyt5A/1773366163/download_music/2015/02/imagine-dragons-it-comes-back-to-you.mp3", //17
    "https://track.pinkamuz.pro/download/333233343633303537883731353332313430b60000/dba497cb9375821007242110face63ca/bahroma%20-%20%D0%BF%D0%BE%D0%BA%D0%B0-%D0%BF%D0%BE%D1%80%D0%B0%20%28speed%20up%29.mp3", //18
    "https://ru-d1.drivemusic.me/dl/ueqzsUsgGScXCaPs4QzBqQ/1773366416/download_music/2020/10/scorpions-rock-you-like-a-hurricane.mp3", //19
    "https://track.pinkamuz.pro/download/33b5343636b334b0b08c373135333231b030b40400/3c75161cf9d249a0b2a2badea27e40e8/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD%20-%20Tyler%2C%20The%20Creator%20NEW%20MAGIC%20WAND%20Instrumental%20FNAF%20Remix.mp3", //20
    "https://ru-d1.drivemusic.me/dl/Nr7OfJw3MRLFAhVkiMob3A/1773273049/download_music/2020/03/led-zeppelin-rock-and-roll.mp3",
    "https://ru-d1.drivemusic.me/dl/jEXuWLL6E9KQhCz9FjBMPQ/1773273210/download_music/2014/09/iowa-marshrutka.mp3", //22
    "https://ruo.morsmusic.org/load/1593353507/KINO_-_Gruppa_krovi_(musmore.org).mp3",
    "https://ru-d3.drivemusic.me/dl/0w55I6M5-js7joVu-KGZHw/1773273456/download_music/2024/09/poshlaja-molli-non-stop.mp3",
    "https://ru-d3.drivemusic.me/dl/GEAu9e3fJfNgqUuzPCiI_w/1773366480/download_music/2025/07/marino-devil-in-disguise.mp3", //25
    "https://ru-d1.drivemusic.me/dl/304d2_sVXiDeVAPlAP3wcg/1773366532/download_music/2020/12/zveri-rajjony-kvartaly.mp3",
    "https://ruo.morsmusic.org/load/1900105710/DIGIMORTAL_-_Krovyu_(musmore.org).mp3",
    "https://muz.zvukofon.com/dl/1737907860/Starset_-_dark_things_(musportal.org).mp3",
    "https://ru-d3.drivemusic.me/dl/7ktJ8T55s3bKW_XHNndG9Q/1773368751/download_music/2015/02/imagine-dragons-im-so-sorry.mp3", //29


    //march
    "https://ruo.morsmusic.org/load/1166341245/Soltwine_-_Prishla_vesna_(musmore.org).mp3", //1
    "https://ru-d2.drivemusic.me/dl/uX967RQM2r1DLJmASmpMhw/1773369291/download_music/2025/01/undervud-konstantin-khabenskijj-polnochnyjj-trollejjbus.mp3", //2
    "https://ruo.morsmusic.org/load/1232228770/TryHardNinja_-_Its_Me_(musmore.org).mp3", //3
    "https://ru-cdn3.drivemusic.me/dl/online/truga-Ds4i6a4sXWd4gaSQ/1773948010/download_music/2020/12/aljona-shvec-pervoe-svidanie.mp3", //4
    "https://ru-cdn3.drivemusic.me/dl/online/23hdsPgSaH3oljZZOv3ltg/1773948062/download_music/2024/05/bambee-bumble-bee.mp3", //5
    "https://track.pinkamuz.pro/download/33313731b1b43434b68837313533353433b5300700/87af0cfe2014e7654d29cd7f3069c135/Tanin%20Jazz%20-%20%D0%92%D0%B8%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C.mp3", //6
    "https://ru-cdn1.drivemusic.me/dl/online/ifM9oPUB8ENJBJwkDIYbiw/1773948274/download_music/2015/06/betkhoven-lunnaja-sonata.mp3", //7
    "https://track.pinkamuz.pro/download/333232b5b434b13432883731353332b63430320200/87b067625367737f612a337ab508eefa/Jazzdauren%20-%20%D0%94%D0%B0%D1%80%D0%B8%D1%82%D0%B5%20%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%D0%BC%20%D1%86%D0%B2%D0%B5%D1%82%D1%8B%20%28%D0%A6%D0%B2%D0%B5%D1%82%D1%8B%29%20%D0%91%D0%B5%D0%B7%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D0%B0%20%D0%B8%20%D0%B1%D0%B5%D0%B7%20%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B.mp3", //8
    "https://ru-cdn1.drivemusic.me/dl/online/mbqtdOnxMKcHxfxIaM7MAQ/1773948397/download_music/2022/09/stigmata-cunami.mp3", //9
    "https://ruo.morsmusic.org/load/1780962227/Ljosha_Svik_-_Luna_(musmore.org).mp3", //10
    "https://ru-cdn2.drivemusic.me/dl/online/iWwiP-gU8qPX-ElZ7yeDhA/1773948651/download_music/2022/03/imagine-dragons-bones.mp3", //11
    "https://ru-cdn3.drivemusic.me/dl/online/Hl8-zwGcKVs1czvboKap5Q/1773948686/download_music/2024/05/poshlaja-molli-kontrakt.mp3", //12
    "https://muz.zvukofon.com/dl/1663839917/Starset_-_DREAMCATCHER_(musportal.org).mp3", //13
    "https://track.pinkamuz.pro/download/33313332333730b434883731353332353636350600/fc1882ad82f27d57d9fcd05aee226917/Gym%20Class%20Heroesl%20-%20Stereo%20Hearts..%20speed%20up.mp3", //14
    "https://ruo.morsmusic.org/load/1694750237/GAYAZOV_BROTHER_-_Kredo_(musmore.org).mp3", //15
    "https://muz.zvukofon.com/dl/1115861547/Egor_Krid_-_Serdceedka_(musportal.org).mp3", //16
    "https://ruo.morsmusic.org/load/1128406125/LOrchestra_Cinematique_-_Test_Drive_From_How_to_Train_Your_Dragon_(musmore.org).mp3", //17
    "https://ruo.morsmusic.org/load/1116628341/KINO_-_Peremen_(musmore.org).mp3", //18
    "https://ruo.morsmusic.org/load/1060817261/Mneskin_-_I_WANNA_BE_YOUR_SLAVE_(musmore.org).mp3", //19
    "https://ruo.morsmusic.org/load/1261702794/JOlka_-_Provans_(musmore.org).mp3", //20
    "https://muz.zvukofon.com/dl/406679706/Linkin_Park_-_Crawling_(musportal.org).mp3", //21
    "https://ruo.morsmusic.org/load/1205423408/Otpetye_moshenniki_-_Lyubi_menya_lyubi_(musmore.org).mp3", //22
    "https://ru-d2.drivemusic.me/dl/ZDr-XS_KJYQHM1BqvwgAbA/1774139050/download_music/2025/05/atlxs-passo-bem-solto-slowed.mp3", //23
    "https://ru-cdn2.drivemusic.me/dl/online/5gfVOjjIZ0n_yCjKlea0gg/1774139183/download_music/2019/03/ricky-martin-livin039-la-vida-loca.mp3", //24
    "https://ru-cdn2.drivemusic.me/dl/online/xz4emKqCHAg8aQEf3m1XNw/1774139256/download_music/2019/05/veselye-rebjata-v-poslednijj-raz.mp3", //25
    "https://ru-cdn2.drivemusic.me/dl/online/81GCZIl-OcO2qkxC0ZbUow/1774139315/download_music/2024/04/katja-adushkina-tanceterapija.mp3", //26
    "https://ruo.morsmusic.org/load/1311463092/Artur_Pirozhkov_-_CHika_(musmore.org).mp3", //27
    "https://ru-cdn3.drivemusic.me/dl/online/zaZVx22FkrRquGGLpEWEYQ/1774139573/download_music/2015/07/aleksejj-vorobjov-sumasshedshaja.mp3", //28
    "https://track.pinkamuz.pro/download/333537b230343232338f3731353332313132b30000/0872bc881e81fb51b0712b91ee431acf/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9A%D1%80%D1%8B%D0%BB%D0%B0%D1%82%D0%BE%D0%B2%20%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%20%D0%94%D0%B0%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20-%20%D0%9F%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%B0%D0%BB%D1%91%D0%BA%D0%BE.mp3", //29
    "https://ru-cdn1.drivemusic.me/dl/online/ddLJ7osyr7VKnyK2r8wCsQ/1774139750/download_music/2023/08/melnica-obrjad.mp3", //30
    "https://ruo.morsmusic.org/load/976923472/Bullet_For_My_Valentine_-_Hearts_Burst_into_Fire_(musmore.org).mp3", //31


    //april
    "https://muz.zvukofon.com/dl/1644689030/SHKEL_-_Kotiki_(musportal.org).mp3", //1
    "https://ru-cdn3.drivemusic.me/dl/online/WBKqqWyzVJNWsYyBz6UzfA/1774139932/download_music/2021/01/rammstein-engel.mp3", //2
    "https://ruo.morsmusic.org/load/629909498/Alan_Walker_-_Faded_(musmore.org).mp3", //3
    "https://ruo.morsmusic.org/load/1885153073/Gradent_-_CHto_takoe_lyubov_(musmore.org).mp3", //4
    "https://muz.zvukofon.com/dl/424819937/JubyPhonic_-_Miss_Wanna_Die_feat_Master_Andross_(musportal.org).mp3", //5
    "https://ru-cdn3.drivemusic.me/dl/online/on1LIsZNxRHMYN6bW7PdAg/1774140724/download_music/2018/04/merk-kremont-feat.-dnce-hands-up.mp3", //6
    "https://ru-cdn3.drivemusic.me/dl/online/HYQNDomMAcA82bOezx3dNw/1774140763/download_music/2013/04/picca-oruzhie.mp3", //7
    "https://track.pinkamuz.pro/download/b33432b6b0b03431893731353332b634b0300400/01d7030130a43d7aa77cba307ba95b1e/%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D0%B8%D0%BA%D0%B8%20-%20%D0%A7%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%B4%D0%BE%D0%B1%D1%80%D0%BE%D1%82%D0%B0%20%28%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%29.mp3", //8
    "https://track.pinkamuz.pro/download/b3343233333331378a3731353332b6b430320100/464269ca175a25a5de77ff959eb0e8b2/%D0%A1%D0%A1%D0%A1%D0%A0%20-%20%D0%9A%D1%80%D1%8B%D0%BB%D0%B0%D1%82%D1%8B%D0%B5%20%D0%BA%D0%B0%D1%87%D0%B5%D0%BB%D0%B8.mp3", //9
    "https://ruo.morsmusic.org/load/1419680626/Zemfira_-_Romashki_(musmore.org).mp3", //10
    "https://ru-cdn3.drivemusic.me/dl/online/NVrIbQmtH_CEIniqkR5odg/1774141071/download_music/2025/04/the-hatters-khmuryjj.mp3", //11
    "https://ruo.morsmusic.org/load/615197089/Ajjdamir_Mugu_-_CHjornye_glaza_(musmore.org).mp3", //12
    "https://ruo.morsmusic.org/load/506718751/The_Living_Tombstone_-_Its_Been_So_Long_(musmore.org).mp3", //13
    "https://track.pinkamuz.pro/download/33313731b1b434b2308c37313533b6b0b430340600/bd306bc2cbea08815f145b5aa50394af/STARSET%20-%20It%20Has%20Begun.mp3", //14
    "https://ruo.morsmusic.org/load/1937173268/Lady_Gaga_-_Judas_(musmore.org).mp3", //15
    "https://ru-cdn2.drivemusic.me/dl/online/rgcZBUnO-pk7hI3qU9IM5w/1774141601/download_music/2016/05/skillet-feel-invincible.mp3", //16
    "https://track.pinkamuz.pro/download/3337333636363033338f3731353332b63432320000/b360478b7d0a1f1445108474944ee97e/%E7%B7%91%E9%BB%84%E8%89%B2%E7%A4%BE%E4%BC%9A%20%28%D0%9C%D0%BE%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%20%D1%84%D0%B0%D1%80%D0%BC%D0%B0%D1%86%D0%B5%D0%B2%D1%82%D0%B0%20%D0%BE%D0%BF%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%29%20-%20%E8%8A%B1%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%20-%20Be%20a%20flower%20%28Kusuriya%20no%20Hitorigoto%20OPENING%29.mp3", //17
    "https://muz.zvukofon.com/dl/2132626672/DIGIMORTAL_-_Digimortal_(musportal.org).mp3", //18
    "https://ru-d1.drivemusic.me/dl/d4c0OOQlbbSVQVlppnMREA/1770526009/download_music/2024/11/scally-milano-feat.-uglystephan-dajj-mne-shans.mp3", //19
    "https://ru-cdn1.drivemusic.me/dl/online/vu0wj6FjLLnzF_1rfF8hsg/1774142142/download_music/2018/04/billie-eilish-feat.-khalid-lovely.mp3", //20
    "https://ru-cdn2.drivemusic.me/dl/online/_VfwND2ICj-OsTNAtwmM8w/1774142245/download_music/2015/04/nervy-schaste.mp3", //21
    "https://track.pinkamuz.pro/download/3334373333b0b034368f3731303137b13031310200/9b120c6bf2fac73f54b353f15c0b7b7e/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B8%20%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9%20%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D1%8B%20-%20%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B8%20%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9%20%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D1%8B%20%D0%98%D0%B7%20%D0%A0%D0%BE%D0%BC%D0%B5%D0%BE%20%D0%98%20%D0%94%D0%B6%D1%83%D0%BB%D1%8C%D0%B5%D1%82%D1%82%D0%B0.mp3", //22
    "https://ru-cdn1.drivemusic.me/dl/online/gukHp2TP9YLhnOqlr-4MsQ/1774142652/download_music/2016/06/gradusy-khochetsja.mp3", //23
    "https://ru-cdn2.drivemusic.me/dl/online/sqYgZwr5j4Zs4Wdh_yGVTA/1774142700/download_music/2020/06/kino-ty-mog-by....mp3", //24
    "https://ru-cdn2.drivemusic.me/dl/online/Pjqi5TJgfvyzwqISWqexrw/1750396524/download_music/2025/04/soltwine-pesnja-pro-kota.mp3", //25
    "https://ru-d1.drivemusic.me/dl/rS3mvXv1ffddriygscGpkA/1774142772/download_music/2021/04/enhypen-drunk-dazed.mp3", //26
    "https://ruo.morsmusic.org/load/1958774545/Starset_-_INFECTED_(musmore.org).mp3", //27
    "https://ru-d2.drivemusic.me/dl/oeM-RsPk4XiLxhrNLSur9w/1774143101/download_music/2015/05/twenty-one-pilots-stressed-out.mp3", //28
    "https://ruo.morsmusic.org/load/1951727506/Vyacheslav_Butusov_-_Devushka_po_gorodu_(musmore.org).mp3", //29
    "https://mp3seven.net/getmp3/MC9NVGt5T0RVNU16ZzVYelExTmpJME1UQXhPRjgyTVdVME56ZzBPREpsTW1WbFlXTmlOVFZmT0dFMU4yWXpOREUwTW1JNVpUQXpaVGhrTHp3aGZDRS1XeUpuY3lJc015d2lSeTFGWVhwNUsyRnVaQ3RJWVd4elpYa3JKVVV5SlRnd0pUa3pLMGhwYlN0aGJtUXJTU3NsTWpoemNHVmxaQ3QxY0NVeU9TSXNNU3h1ZFd4c0xEQXNOakFzTUYwPS8lRDAlOUQlRDAlQjUlRDAlQjglRDAlQjclRDAlQjIlRDAlQjUlRDElODElRDElODIlRDAlQjUlRDAlQkQrLStIaW0rYW5kK0krJTI4U3BlZCt1cCUyOStHLUVhenkrZnQrSGFsc2V5XyhtcDNzZXZlbi5uZXQpLyVEMCU5RCVEMCVCNSVEMCVCOCVEMCVCNyVEMCVCMiVEMCVCNSVEMSU4MSVEMSU4MiVEMCVCNSVEMCVCRCslRTIlODAlOTMrSGltK2FuZCtJKyUyOFNwZWQrdXAlMjkrRy1FYXp5K2Z0K0hhbHNleV8obXAzc2V2ZW4ubmV0KT9zPXZrJnI9JmNvb2tpZXM9Nzk5OTExNzg1NTNfMS5jb29raWU=.mp3", //30


    //may
    "https://ru-d1.drivemusic.me/dl/A_ourDA2zAZLRvrOWkG9xg/1773347674/download_music/2025/04/maitre-gims-est-ce-que-tu-m039aimes-sped-up.mp3", //1
    "https://track.pinkamuz.pro/download/33b430b63431b230338e3731353332313131320300/bf211c2f1460eb6dfbbd4cb86939275a/Starset%20-%20Brave%20New%20World.mp3", //2
    "https://muz.zvukofon.com/dl/1423327995/Queen_of_Darts_-_Bad_Karma_(musportal.org).mp3", //3
    "https://ru-d2.drivemusic.me/dl/vVL-rRdSgT6gZNgBNTdnsQ/1773347917/download_music/2014/05/dima-bilan-nochnojj-khuligan.mp3", //4
    "https://ru-d1.drivemusic.me/dl/zmYyD3WrmjMvMTUf2yaWZw/1773347963/download_music/2024/04/carla-bim-bam-toi.mp3", //5
    "https://ruo.morsmusic.org/load/291452486/KINO_-_Ranshe_v_tvoikh_glazakh_(musmore.org).mp3", //6
    "https://ru-d3.drivemusic.me/dl/DgEXWX35R0cW6kGX1n4L-Q/1773556501/download_music/2020/03/picca-ulybka.mp3", //7
    "https://ruo.morsmusic.org/load/660530620/Polina_Gagarina_-_Babochki_(musmore.org).mp3", //8
    "https://ruo.morsmusic.org/load/1670709927/YUlya_Parshuta_-_Mesyac_majj_(musmore.org).mp3", //9
    "https://ru-d2.drivemusic.me/dl/sXVASKZcns6sFJ4dYky-8Q/1773556775/download_music/2013/12/maksim-znaesh-li-ty.mp3", //10
    "https://track.pinkamuz.pro/download/3331b03430b730b2348f3731353332b63437350100/68378061165a33c29139944f8379cba6/%D0%9B%D1%83%D0%BD%D1%82%D0%B8%D0%BA%20-%20%D0%9F%D0%BE%D0%BB%D0%BD%D0%B0%D1%8F%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F%20%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B8%20%D0%B2%20%D1%82%D0%B8%D1%82%D1%80%D0%B0%D1%85.mp3", //11
    "https://track.pinkamuz.pro/download/33313731b1b43432348c373135b330323534370300/8705a673505dc744fb99535522f7b6fb/%D0%A3%D0%BD%D0%B4%D0%B5%D1%80%D0%B2%D1%83%D0%B4%20-%20%D0%9D%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B%20%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%80%D0%BA%D0%B5%D1%81%D1%82%D1%80%D0%B8%D0%BA.mp3", //12
    "https://track.pinkamuz.pro/download/33313731b1b43432b68837313503b1cc8c00/f7fa78914ae46a27b6ffff5b42eb676b/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%84%D0%BE%D1%80%D0%B5%D0%B7%20-%20%D0%92%D1%81%D1%91%20%D0%B1%D1%8B%D0%BB%D0%BE%20%D1%82%D0%B0%D0%BA.mp3", //13
    "https://track.pinkamuz.pro/download/33353433323132b6308c373105b20c0c4d2c00/f80e4b01e303493c0992c5605bdeb778/Official%20HIGE%20DANdism%20-%20Cry%20Baby%20%28tiktok%20version%29.mp3", //14
    "https://track.pinkamuz.pro/download/d33536b1b0303130358f3731353332b63432340600/2bbf3bdb31cdca7bf15cdda0da44995b/%D0%A1%D1%82%D1%80%D0%B0%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%20-%20%D0%9F%D0%B5%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B0.%20%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5%20%D0%B3%D1%83%D0%BB%D1%8F%D0%BD%D0%B8%D1%8F%20%D0%BD%D0%B0%20%D0%9C%D0%B0%D1%81%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9.mp3", //15
    "https://ruo.morsmusic.org/load/15912899/Matvejj_Knyazev_-_Vozmi_(musmore.org).mp3", //16
    "https://track.pinkamuz.pro/download/3336373437313531368f373135333130041200/7369e75195d0473342930eb153187ab1/Quest%20Pistols%20-%20%D0%A2%D1%8B%20%D1%82%D0%B0%D0%BA%20%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0.mp3", //17
    "https://track.pinkamuz.pro/download/33313731b1b43436348837313533b1343635370100/2870646bda592be662a82938fb964cd8/Dabro%20-%20%D0%9D%D0%B0%20%D0%BA%D1%80%D1%8B%D1%88%D0%B5.mp3", //18
    "https://track.pinkamuz.pro/download/33313731b1b43434b38c3731353333323233320600/f001f09df03b9646ba0e316261f47dbb/%D0%A1%D1%82%D0%B0%D1%81%20%D0%9C%D0%BE%D1%80%D0%B5%20-%20%D0%91%D1%83%D0%B4%D1%8C%20%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%BC%21.mp3", //19
    "https://track.pinkamuz.pro/download/33313731b1b43434318a3731353331363736360000/607fcc5fce9cd73d48bb359b515f8ec2/Fujii%20Kaze%20-%20Shinunoga%20E-Wa.mp3", //20
    "https://track.pinkamuz.pro/download/33333137b134b230308f3731353332b63435320600/8c3bfca5cc0410cbec841bc31a26c9e3/%D0%92%D0%B0%D0%BB%D1%8F%20%D0%9A%D0%B0%D1%80%D0%BD%D0%B0%D0%B2%D0%B0%D0%BB%20-%20%D1%80%D0%BE%D0%BC%D0%B0%D1%88%D0%BA%D0%B8.mp3", //21
    "https://ru-d1.drivemusic.me/dl/fUOFV8Lr8cCq8v1zRFkQoQ/1773345686/download_music/2023/08/nervy-batarei.mp3", //22
    "https://ru-d2.drivemusic.me/dl/8OMquSGNfchHwtc2Jxjbkg/1773345816/download_music/2014/02/bon-jovi-its-my-life.mp3", //23
    "https://ru-d1.drivemusic.me/dl/_qHFuS8y9ZKYPTpRWZ6k7A/1773345868/download_music/2016/05/basta-vypusknojj-medljachok.mp3", //24
    "https://ru-d1.drivemusic.me/dl/MsBGaP0g6IC1dttNnVHUgw/1773346398/download_music/2022/09/one-ok-rock-stuck-in-the-middle.mp3", //25
    "https://ruo.morsmusic.org/load/294701897/Valerii_Gergiev_Simfonicheskijj_orkestr_Mariinskogo_teatra_Modest_Petrovich_Musorgskijj_-_Progulka_iz_cikla_Kartinki_s_vystavki_v_orkestrovke_M_Ravelya_(musmore.org).mp3", //26
    "https://ruo.morsmusic.org/load/385233355/VIA_Dobry_molodcy_-_CHastushki_Babok_JOzhek_(musmore.org).mp3", //27
    "https://track.pinkamuz.pro/download/333230303035303335348a3731353332b63437310200/39f336f7314adc928bcf5e0160840274/%D0%98.%D0%A1.%20%D0%91%D0%B0%D1%85%20-%20%D0%A5%D0%BE%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D1%80%D0%B5%D0%BB%D1%8E%D0%B4%D0%B8%D1%8F%20%D1%84%D0%B0%20%D0%BC%D0%B8%D0%BD%D0%BE%D1%80.mp3", //28
    "https://track.pinkamuz.pro/download/33313731b1b434b2348937313533313132b5300200/6106d2b7e4a934855f9de25056967437/%D0%90%D0%91%D0%95%D0%A0%D0%A0%D0%9E%D0%9D%20-%20%D0%AF%20%D0%B7%D0%B4%D0%B5%D1%81%D1%8C.mp3", //29
    "https://ru-d1.drivemusic.me/dl/2LQUXxY-Vi6roOzOO0H3Ww/1773347372/download_music/2021/05/dabro-na-chasakh-nol-nol.mp3", //30
    "https://ru-d1.drivemusic.me/dl/VDtALoEmKOhM4uUSrPKuVQ/1773347589/download_music/2020/08/jony-ty-pari.mp3", //31


    //june
    "https://ru-d2.drivemusic.me/dl/3NIrdPkOQ9aPoB5cPsQbAQ/1773556045/download_music/2015/06/mot-den-i-noch.mp3", //1
    "https://ru-d2.drivemusic.me/dl/F5W7ASsZSbwt55sYJZBarw/1773555957/download_music/2024/09/alena-shvec-skejjter.mp3", //2
    "https://ru-cdn1.drivemusic.me/dl/online/0UpkzA-r_yFu2obFjyJQeg/1774140120/download_music/2013/05/serebro-malo-tebja.mp3", //3
    "https://muz.zvukofon.com/dl/520467046/Imagine_Dragons_-_Cha-Ching_Till_We_Grow_Older_(musportal.org).mp3", //4
    "https://ruo.morsmusic.org/load/2118088286/GAYAZOV_BROTHER_-_YA_TY_i_MORE_(musmore.org).mp3", //5
    "https://ru-d3.drivemusic.me/dl/PsKjBy1OwxvU6u9tR8FLvA/1773555153/download_music/2019/06/mot-feat.-zivert-parusa.mp3", //6
    "https://muz.zvukofon.com/dl/489157981/Black_Gryph0n_Baasik_-_Insane_(musportal.org).mp3", //7
    "https://ru-d2.drivemusic.me/dl/x1wnWf1HGgXqRmz5ez52Kw/1773554680/download_music/2023/07/ray-parker-jr.-ghostbusters.mp3", //8
    "https://ru-d3.drivemusic.me/dl/-br91pz8qgzfxh7kZWHkpg/1773554635/download_music/2020/08/dabro-vse-za-odnogo.mp3", //9
    "https://ru-d3.drivemusic.me/dl/7qCjVLyIcuPqwEj02p7Hkw/1773554501/download_music/2023/06/amega-letet.mp3", //10
    "https://track.pinkamuz.pro/download/33b5343434333235b4883731353332b63432b50400/e907df966c8b45e661e946abd2ad30e2/%D0%9D%D1%83%2C%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B8%20-%20%D0%97%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0.mp3", //11
    "https://ruo.morsmusic.org/load/320363162/Oleg_Gazmanov_-_Vpered_Rossiya_(musmore.org).mp3", //12
    "https://muz.zvukofon.com/dl/1488451731/Grandrodeo_-_Trash_Candy_(musportal.org).mp3", //13
    "https://ru-d2.drivemusic.me/dl/cETUg884thv0wS8GB5Mh3g/1773553374/download_music/2022/09/skillet-save-me.mp3", //14
    "https://ru-d1.drivemusic.me/dl/gOoyRzmUul9BRAM8_acHLQ/1773553253/download_music/2014/07/linkin-park-new-divide.mp3", //15
    "https://muz.zvukofon.com/dl/1714279030/Nervy_-_YA_razryvayu_nervy_(musportal.org).mp3", //16
    "https://ruo.morsmusic.org/load/1909524053/OGEL_-_Leto_17_(musmore.org).mp3", //17
    "https://track.pinkamuz.pro/download/3337353635333530308d3731353332b634b2340600/ffb7104de5a95a768b254de6a69ee809/LONGMAN%20-%20spiral.mp3", //18
    "https://track.pinkamuz.pro/download/33313731b1b43434328b3731353331323333330100/fca5a8ea80af5db1542baef37fb7567b/%D0%93%D0%A0%D0%9E%D0%A2%20feat.%20%D0%9B%D0%B5%D0%BD%D0%B0%20%D0%90%D0%B2%D0%B3%D1%83%D1%81%D1%82%20-%20%D0%92%D0%B5%D1%82%D1%80%D1%8B.mp3", //19
    "https://ru-d1.drivemusic.me/dl/GdWFj9TswnIkek1cqY5wJA/1773552823/download_music/2013/08/maks-korzh-zhit-v-kajjf.mp3", //20
    "https://ru-d3.drivemusic.me/dl/og2AhaTT4QSllyBlq-ogsw/1773552674/download_music/2021/03/mot-jony-lilii.mp3", //21
    "https://ru-d2.drivemusic.me/dl/J0SKYe4fGYSipb_R04LNWw/1773552442/download_music/2016/04/miyagi-jendshpil-feat.-9-gramm-rapapam.mp3", //22
    "https://ru-d2.drivemusic.me/dl/kRdPVhc5gpP-_o_xVQyAbw/1773552141/download_music/2024/11/arija-bespechnyjj-angel.mp3", //23
    "https://ruo.morsmusic.org/load/283486048/Lind_Erebros_-_Ninja_in_the_Night_(musmore.org).mp3", //24
    "https://ru-d2.drivemusic.me/dl/M9oeuCV5DQZzkW7BAcwVOw/1773552083/download_music/2014/07/onerepublic-counting-stars.mp3", //25
    "https://ruo.morsmusic.org/load/917137504/347aidan_-_Dancing_in_My_Room_(musmore.org).mp3", //26
    "https://ruo.morsmusic.org/load/893953249/Teriyaki_Boyz_-_Tokyo_Drift_Fast_Furious_(musmore.org).mp3", //27
    "https://ru-d2.drivemusic.me/dl/Cyqt8HY8OM0e5MseyoIRYw/1773551844/download_music/2019/12/mjevl-patamushka.mp3", //28
    "https://ru-d2.drivemusic.me/dl/67r1r-X_N-9ggpP5Usa95A/1773551801/download_music/2024/01/bullet-for-my-valentine-radioactive.mp3", //29
    "https://muz.zvukofon.com/dl/1187381900/System_of_a_Down_-_Darts_(musportal.org).mp3", //30


    //july
    "https://ru-d2.drivemusic.me/dl/8o3yXbZBZxgLWgWROZN3ow/1773179911/download_music/2019/06/the-hatters-tancy.mp3", //1
    "https://track.pinkamuz.pro/download/3334373633b33030318d3731353332b634b4300400/22007096c7b135b6d664e12d7450b232/Naughty%20Boy%20-%20LaLaLa%20feat.%20Sam%20Smith%202013.mp3", //2
    "https://track.pinkamuz.pro/download/3336373437313531b5883731353335b0b434320600/7151b7881bc08dc036d08c28b51408db/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B5%20-%20%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0.mp3", //3
    "https://track.pinkamuz.pro/download/33313731b1b434b4348d37313533333133b0300000/9b03dda487f862e9c77919f5fb1c2d7e/Dabro%20-%20%D0%9F%D0%BE%D0%BB%D1%8E%D0%B1%D0%B8%D0%BB%20%D1%82%D0%B5%D0%B1%D1%8F.mp3", //4
    "https://track.pinkamuz.pro/download/33313731b1b4343232883731353333363232340600/8cae1a9e1c41242c848f0de9eafadc9e/%D0%9E%D0%BA%D1%81%D0%B0%D0%BD%D0%B0%20%D0%9F%D0%BE%D1%87%D0%B5%D0%BF%D0%B0%20%28%D0%90%D0%BA%D1%83%D0%BB%D0%B0%29%20-%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%BD%D1%8B%D0%B9%20DJ.mp3", //5
    "https://track.pinkamuz.pro/download/33313731b1b43432358a3731353333333730300100/e97ffc63082ea78387a94fd08e9b3499/%D0%A1%D0%BD%D1%8B%20%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%20-%20%D0%A3%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B8%D0%BD%D0%B0%20%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%B0.mp3", //6
    "https://track.pinkamuz.pro/download/3332b234b630328b3731353332313430340700/e9bda83e05d648dd05e2c91512955161/Sam%20Tinnesz%2C%20Yacht%20Money%20feat.%20Yacht%20Money%20-%20Play%20With%20Fire.mp3", //7
    "https://track.pinkamuz.pro/download/33b5b03036b5308b3731353332b63435b00000/57dd067bfdc619ab6eebf5c4d9590eb7/FixEye%20-%20%D0%9B%D1%83%D0%BA%20%D0%91%D0%B0%D1%82%D1%83%D0%BD.mp3", //8
    "https://ruo.morsmusic.org/load/259982644/iks_-_Kozhanye_shtany_(musmore.org).mp3", //9
    "https://track.pinkamuz.pro/download/3335303536303133338e3731353332b63430b10400/99cb5fd3cd0c8e82a837bb43ea4b63d9/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD%20-%20%D0%BA%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%83%D0%BA%D0%B8%D0%B5.mp3", //10
    "https://track.pinkamuz.pro/download/33363132333689373335b6b03037b10400/95308ccd08c9f04c0dbf0e1b94761314/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%20-%20%D0%9C%D0%BE%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%20%D0%BD%D0%B0%205%20%D1%8D%D1%82%D0%B0%D0%B6%D0%B5.mp3", //11
    "https://ruo.morsmusic.org/load/861747337/Stigmata_-_Adrenalin_(musmore.org).mp3", //12
    "https://track.pinkamuz.pro/download/b3b0b0303133363630893731353332b63433320100/3204a5a27139da531266f657cd6f5848/Daniela%20-%20%D0%9F%D0%B8%D1%80%D0%B0%D1%82%D1%8B.mp3", //13
    "https://ru-d2.drivemusic.me/dl/n6JY11wIqKaPI8Vu6giT3Q/1773878047/download_music/2014/02/skillet-monster.mp3", //14
    "https://ruo.morsmusic.org/load/900725800/Pianobojj_-_Vedma_(musmore.org).mp3", //15
    "https://track.pinkamuz.pro/download/3335373333363137358d373135333231b030330700/bd47488eb236d5ae6eb9aff00c25d6ed/Lowa%20-%20140.mp3", //16
    "https://ru-d3.drivemusic.me/dl/oKnAzXdrPyl83Ogg-gTOZw/1773878380/download_music/2021/01/korol-i-shut-lesnik.mp3", //17
    "https://ru-d1.drivemusic.me/dl/KFuGJRNqjBSpslTErSnOpQ/1773878435/download_music/2024/03/artemas-i-like-the-way-you-kiss-me.mp3", //18
    "https://ru-d1.drivemusic.me/dl/Ye0KSQ5QbRGfWIFhhfEY4Q/1773878536/download_music/2012/06/viktor-cojj-videli-noch.mp3", //19
    "https://ru-d1.drivemusic.me/dl/9T6wHqbhIEBsnPG1vegE9A/1773878585/download_music/2014/07/open-kids-na-desert.mp3", //20
    "https://ru-d3.drivemusic.me/dl/PWrqF_y-Layt15lg9adWQA/1773878679/download_music/2022/09/nirvana-lithium.mp3", //21
    "https://ru-d3.drivemusic.me/dl/Z5voBHFa-rVxbY3Tn7LjQQ/1773878727/download_music/2020/05/dabro-junost.mp3", //22
    "https://ru-d1.drivemusic.me/dl/nECOysv5CEHSsYXsWmaq_Q/1773878791/download_music/2013/01/ljubje-kon.mp3", //23
    "https://ru-d1.drivemusic.me/dl/lMn7IvOKASwjNsuGmdS-Xg/1773878865/download_music/2014/07/picca-na-vsju-planetu-zemlja.mp3", //24
    "https://ru-d2.drivemusic.me/dl/1bX92GxgwADVhFzRueTDlg/1773878948/download_music/2016/05/monatik-kruzhit.mp3", //25
    "https://track.pinkamuz.pro/download/3333b43034363132378a3731353332b63434b30400/74945f744f45be4629ce4a214667ed13/%D0%9E%D0%A1%D0%94%20%22%D0%93%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%22%20-%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%B8%D1%82%D1%8C.mp3", //26
    "https://muz.zvukofon.com/dl/282929431/DIGIMORTAL_-_Odin_(musportal.org).mp3", //27
    "https://ruo.morsmusic.org/load/477922739/Oleg_Mityaev_-_Kak_zdorovo_(musmore.org).mp3", //28
    "https://ru-d2.drivemusic.me/dl/Or1MhTBLo52RIGD-Rmdomg/1773879843/download_music/2016/07/skillet-i-want-to-live.mp3", //29
    "https://ru-d2.drivemusic.me/dl/rV3znAMPlFdP6DLaOFhsLQ/1773879916/download_music/2020/04/macan-kino.mp3", //30
    "https://muz.zvukofon.com/dl/1122368302/NANSI_SIDOROV_-_A_mozhet_da_a_mozhet_net_(musportal.org).mp3", //31


    //august
    "https://track.pinkamuz.pro/download/d33534b33434373237368b3731353332b63434330200/92aba179e36dd2f32a50b7eb0250c681/%D0%AD%D0%B4%D0%B2%D0%B0%D1%80%D0%B4%20%D0%93%D1%80%D0%B8%D0%B3%20-%20%D0%A3%D1%82%D1%80%D0%BE.mp3", //1
    "https://ruo.morsmusic.org/load/1714537369/Basta_MONA_Tri_dnya_dozhdya_Vladimir_Presnyakov_-_Luch_solnca_zolotogo_(musmore.org).mp3", //2
    "https://muz.zvukofon.com/dl/1369412553/Imagine_Dragons_-_Nothing_Left_To_Say_Rocks_Medley_(musportal.org).mp3", //3
    "https://track.pinkamuz.pro/download/333335363236343333883731353332b63432330100/c1ecb950e65b5cf3ada1a711262695d7/C418%20-%20Sweden.mp3", //4
    "https://ruo.morsmusic.org/load/131701944/MakSim_-_Doroga_(musmore.org).mp3", //5
    "https://track.pinkamuz.pro/download/33b1b0303237333533883731353332b63430320700/a62e5842890abdde9e27877d30aa6156/DJ%20%D0%9B%D0%B5%D0%BE%D0%BD%D0%B8%D0%B4%20%D0%A0%D1%83%D0%B4%D0%B5%D0%BD%D0%BA%D0%BE%20-%20%D0%AF%D0%B1%D0%BB%D0%BE%D1%87%D0%BA%D0%BE.mp3", //6
    "https://ru-cdn3.drivemusic.me/dl/online/WlJe7ICdhK--UfBVzeZUpg/1773945407/download_music/2014/02/mashina-vremeni-odnazhdy-mir-prognjotsja-pod-nas.mp3", //7
    "https://ruo.morsmusic.org/load/101674661/The_Living_Tombstone_-_Five_Nights_at_Freddys_(musmore.org).mp3", //8
    "https://ruo.morsmusic.org/load/2111922235/Hard_Bass_School_-_Nash_gimn_(musmore.org).mp3", //9
    "https://ru-cdn2.drivemusic.me/dl/online/vptvSujJO5oBoWyvh70lRA/1773945583/download_music/2024/09/iowa-ulybajjsja.mp3", //10
    "https://ruo.morsmusic.org/load/140871630/KHLEB_-_JEba_(musmore.org).mp3", //11
    "https://ruo.morsmusic.org/load/1997462734/Miyagi_JEndshpil_-_BadaBum_(musmore.org).mp3", //12
    "https://ruo.morsmusic.org/load/444737456/Dabro_-_Ty_znaesh_mam_(musmore.org).mp3", //13
    "https://ruo.morsmusic.org/load/1345317500/Gradusy_-_Rezhisser_(musmore.org).mp3", //14
    "https://ru-cdn3.drivemusic.me/dl/online/ihY9_qpNh-r1mD1YrH2x8g/1773945843/download_music/2021/09/dabro-uslyshit-ves-rajjon.mp3", //15
    "https://ruo.morsmusic.org/load/2110244394/Serebryanaya_svadba_-_YA_zhizn_lyublyu_(musmore.org).mp3", //16
    "https://ru-cdn3.drivemusic.me/dl/online/O4Z7kviUcJaRabDkoNq9Jw/1773945930/download_music/2020/04/skillet-the-resistance.mp3", //17
    "https://ruo.morsmusic.org/load/496790842/tATu_-_All_The_Things_She_Said_(musmore.org).mp3", //18
    "https://ruo.morsmusic.org/load/177578957/KINO_-_Spokojjnaya_noch_(musmore.org).mp3", //19
    "https://ru-cdn2.drivemusic.me/dl/online/58roAShxMxVjQSrtssKGMQ/1773946148/download_music/2015/07/mozgi-vertoljot.mp3", //20
    "https://ruo.morsmusic.org/load/1087704775/5_Seconds_of_Summer_-_Teeth_(musmore.org).mp3", //21
    "https://ru-cdn2.drivemusic.me/dl/online/N29TmMjszFs09-oJ8xlG1w/1773946255/download_music/2013/10/maks-korzh-jendorfin.mp3", //22
    "https://ru-cdn1.drivemusic.me/dl/online/VWWBIJ5ngUCwoW_R-clF7A/1773946379/download_music/2025/02/shadrow-never-be-alone.mp3", //23
    "https://ruo.morsmusic.org/load/1399035823/KENTUKKI_-_Zamigaet_svet_(musmore.org).mp3", //24
    "https://ru-cdn1.drivemusic.me/dl/online/Q-Yn6w7Ph3azc53NpFxbeQ/1773946485/download_music/2020/05/skillet-forgiven.mp3", //25
    "https://ru-cdn2.drivemusic.me/dl/online/YqkrhyvjS1jaN8A4IBMdOQ/1773946543/download_music/2025/01/bratja-grim-kusturica.mp3", //26
    "https://ru-cdn1.drivemusic.me/dl/online/lDcJsw3OeIQqT1edaWgodA/1773946590/download_music/2013/12/zveri-do-skorojj-vstrechi.mp3", //27
    "https://ru-cdn3.drivemusic.me/dl/online/mse5LaIX5LEmSSGmlU7jaw/1773946624/download_music/2016/10/ruki-vverkh-kogda-my-byli-molodymi.mp3", //28
    "https://ruo.morsmusic.org/load/1768283864/EGOR_KRID_MakSim_-_Otpuskayu_(musmore.org).mp3", //29
    "https://muz.zvukofon.com/dl/1513897053/Lolita_-_Na_Titanike_(musportal.org).mp3", //30
    "https://muz.zvukofon.com/dl/912640708/LALIS_DREAM_-_Poslednijj_den_leta_razbitye_korabli_(musportal.org).mp3", //31


    //september
    "https://ru-d3.drivemusic.me/dl/CXd66FhT4lsoOFcflYwPfQ/1773280744/download_music/2012/09/nervy-majj-bay.mp3", //1
    "https://ru-d1.drivemusic.me/dl/fYEu23j6jOR6rRzAnJ_yCw/1773280790/download_music/2017/05/imagine-dragons-whatever-it-takes.mp3", //2
    "https://ru-d2.drivemusic.me/dl/BB0unDm-Ex56BCMcj1wp5A/1773280853/download_music/2020/03/mikhail-shufutinskijj-trete-sentjabrja.mp3", //3
    "https://ru-d2.drivemusic.me/dl/guMndsM1LgSSMbulDBMAag/1773280908/download_music/2014/05/imagine-dragons-tiptoe.mp3", //4
    "https://ruo.morsmusic.org/load/1411483038/william_-_I_Like_To_Move_It_(musmore.org).mp3", //5
    "https://ru-d2.drivemusic.me/dl/tqBqbCAuT6PXJyRJmYO5gQ/1773281042/download_music/2023/03/system-of-a-down-lonely-day.mp3", //6
    "https://track.pinkamuz.pro/download/3332343336323635328937313533323132b4300000/a4a6c964d7e05ab9b480c82a1f4fd20f/GiVEN%20-%20Fuyu%20No%20Hanashi%20%28Mafuyu%20Song%20%29.mp3", //7
    "https://ru-d2.drivemusic.me/dl/zkhyt7b4uP2xuIgz-c_syw/1773281290/download_music/2014/02/linkin-park-numb.mp3", //8
    "https://ruo.morsmusic.org/load/1977852115/Stigmata_-_Sentyabr_(musmore.org).mp3", //9
    "https://ru-d2.drivemusic.me/dl/8iJGmV28KDB3EXzy1K9z9Q/1773281670/download_music/2020/10/nirvana-smells-like-teen-spirit.mp3", //10
    "https://ru-cdn2.drivemusic.me/dl/online/ZN-oQM_WqwVbvmQ2_gLpQA/1773946948/download_music/2022/09/one-ok-rock-cry-out.mp3", //11
    "https://muz.zvukofon.com/dl/336997026/lampabikt_JElli_na_makovom_pole_-_nemereno_(musportal.org).mp3", //12
    "https://track.pinkamuz.pro/download/333335303035b33034893731353332b63430360300/e2346fec751abb26161548567ba36a8a/%D0%93%D0%B8%D0%BC%D0%BD%20-%20%D0%9D%D0%B0%D1%88%20%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA.mp3", //13
    "https://ru-d1.drivemusic.me/dl/ptW8bhLypeRkKP66lcc_Cw/1773279819/download_music/2014/09/fall-out-boy-centuries.mp3", //14
    "https://ruo.morsmusic.org/load/332912417/Alan_Walker_-_Spectre_(musmore.org).mp3", //15
    "https://ru-d3.drivemusic.me/dl/ny2xDn__QKpSVhQJXtTqFw/1773280453/download_music/2022/09/one-ok-rock-taking-off.mp3", //16
    "https://ru-d3.drivemusic.me/dl/qW8WmiY9qpJuNAK-amEbbA/1773280526/download_music/2024/05/chernyjj-obelisk-osen.mp3", //17
    "https://ruo.morsmusic.org/load/472779114/aljona_shvec_-_v_kabinete_u_direktora_(musmore.org).mp3", //18
    "https://ru-cdn3.drivemusic.me/dl/online/x63ChDJxxuPZaqYQIyI5Lw/1773947092/download_music/2013/01/kino-pachka-sigaret.mp3", //19
    "https://ru-cdn1.drivemusic.me/dl/online/ciRd66TW9De5v4AGFgZN7Q/1773947131/download_music/2019/09/zivert-credo.mp3", //20
    "https://muz.zvukofon.com/dl/1059509160/128/Kenji_Younezus_Chainsaw_Man_OP_-_KICKBACK_CHelovek-benzopila_opening_(muz.zvukofon.com).mp3", //21
    "https://ru-cdn2.drivemusic.me/dl/online/Y-xjs6S5GoAuqUbIwh-bSw/1773947282/download_music/2017/09/iowa-plokho-tancevat.mp3", //22
    "https://ruo.morsmusic.org/load/972732411/Set_It_Off_Ash_Costello_-_Partners_in_Crime_Ash_Costello_(musmore.org).mp3", //23
    "https://ru-cdn1.drivemusic.me/dl/online/1KD8k1u5LTsVat8GGD1bUA/1773947461/download_music/2022/09/nirvana-something-in-the-way.mp3", //24
    "https://ru-cdn3.drivemusic.me/dl/online/hiFDaXlWWjyECL1rMsaq5Q/1773947518/download_music/2022/09/one-ok-rock-memories.mp3", //25
    "https://ruo.morsmusic.org/load/844483432/Gde_antom_-_YA_tebya_lyublyu_(musmore.org).mp3", //26
    "https://ru-cdn3.drivemusic.me/dl/online/3oRN2w2TcH0_vpDPGMQq_Q/1773947691/download_music/2023/05/ddt-chto-takoe-osen.mp3", //27
    "https://ruo.morsmusic.org/load/1969781512/Starset_-_My_Demons_(musmore.org).mp3", //28
    "https://ru-cdn3.drivemusic.me/dl/online/w4xT6-OA6uZuWqQhiS9siQ/1773947786/download_music/2015/10/viktor-cojj-zvezda-po-imeni-solnce.mp3", //29
    "https://ruo.morsmusic.org/load/92610170/The_Rare_Occasions_-_Notion_(musmore.org).mp3", //30


    //october
    "https://ru-cdn3.drivemusic.me/dl/online/yOahJxQ5hGGPeAbgeKrDUQ/1773941027/download_music/2023/08/nervy-zazhigalki.mp3", //1
    "https://ruo.morsmusic.org/load/516023861/Dajjte_tank_-_Lyudi_(musmore.org).mp3", //2
    "https://ru-cdn1.drivemusic.me/dl/online/CEmEGBsShcLg5Admo90kqQ/1773941128/download_music/2022/09/stigmata-na-povtor.mp3", //3
    "https://ru-cdn2.drivemusic.me/dl/online/LKDYTWvM3lCqFBt5osrVGA/1773941166/download_music/2021/08/oleg-mitjaev-francuzhenka.mp3", //4
    "https://ru-cdn1.drivemusic.me/dl/online/eUetsmeV51i4QtJxIZtlBg/1773941218/download_music/2024/08/korol-i-shut-vedma-i-osel.mp3", //5
    "https://muz.zvukofon.com/dl/1471255645/Groundbreaking_-_The_Foxy_Song_(musportal.org).mp3", //6
    "https://ruo.morsmusic.org/load/1366902076/Dajjte_tank_-_Malenkijj_(musmore.org).mp3", //7
    "https://ruo.morsmusic.org/load/290500057/Little_Big_-_Life_in_da_Trash_(musmore.org).mp3", //8
    "https://muz.zvukofon.com/dl/325825173/Hazbin_Hotel_-_Gravity_(musportal.org).mp3", //9
    "https://ruo.morsmusic.org/load/1279063440/ZHuki_-_Batarejjka_(musmore.org).mp3", //10
    "https://ruo.morsmusic.org/load/980389252/Poshlaya_Molli_-_Proklya_Tabyla_(musmore.org).mp3", //11
    "https://track.pinkamuz.pro/download/33313731b1b434343688373135333131b2b4300500/6106d2b7e4a934855f9de25056967437/%D0%90%D0%91%D0%95%D0%A0%D0%A0%D0%9E%D0%9D%20-%20%D0%94%D0%B5%D0%BD%D1%8C%20%D0%BE%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D0%BC%D0%B5%D1%80%D1%82%D0%B2%D0%B5%D1%86%D0%BE%D0%B2.mp3", //12
    "https://ru-cdn1.drivemusic.me/dl/online/x5MEv-MP0rw2-dPl-MQoow/1773941544/download_music/2019/05/dima-bilan-pro-belye-rozy.mp3", //13
    "https://ru-cdn3.drivemusic.me/dl/online/J64cdvEOJVuFmamgGvRKxA/1773941589/download_music/2018/12/set-it-off-dancing-with-the-devil.mp3", //14
    "https://ru-cdn2.drivemusic.me/dl/online/jSMtcAOKgmnh4I89MAGVDw/1773941651/download_music/2022/09/stigmata-radio-smert.mp3", //15
    "https://ruo.morsmusic.org/load/408787623/TryHardNinja_-_Follow_Me_(musmore.org).mp3", //16
    "https://ruo.morsmusic.org/load/1338576623/Soltwine_-_Stav_chajjnik_(musmore.org).mp3", //17
    "https://muz.zvukofon.com/dl/522711906/Ivasi_-_Akh_Vremya_Vremya_(musportal.org).mp3", //18
    "https://ru-d2.drivemusic.me/dl/21faik5sUE4XIHyBWnrtNA/1773939845/download_music/2016/02/linkin-park-lost-in-the-echo.mp3", //19
    "https://ruo.morsmusic.org/load/428953406/girl_in_red_-_we_fell_in_love_in_october_(musmore.org).mp3", //20
    "https://ruo.morsmusic.org/load/457508494/PIZZA_-_Romans_(musmore.org).mp3", //21
    "https://ru-d3.drivemusic.me/dl/nEKHNUamhKbN-MgfXw--Sw/1773940013/download_music/2014/07/linkin-park-in-the-end.mp3", //22
    "https://ruo.morsmusic.org/load/736486025/Stray_Kids_-_Red_Lights_Bang_Chan_Hyunjin_(musmore.org).mp3", //23
    "https://ruo.morsmusic.org/load/1397336909/Tally_Hall_-_The_Bidding_(musmore.org).mp3", //24
    "https://ru-d2.drivemusic.me/dl/JtXNwf9_QDRRtjP4d2AqBw/1773940282/download_music/2018/06/alec-benjamin-let-me-down-slowly.mp3", //25
    "https://muz.zvukofon.com/dl/1043701237/Nervy_-_Stanciya_tuman_(musportal.org).mp3", //26
    "https://muz.zvukofon.com/dl/1891246893/Bi2_-_A_my_ne_angely_paren_(musportal.org).mp3", //27
    "https://ru-d2.drivemusic.me/dl/5suiP5qVYmDousHBid0lyw/1773940573/download_music/2022/09/starset-monster.mp3", //28
    "https://ruo.morsmusic.org/load/2022281566/Imagine_Dragons_-_Radioactive_(musmore.org).mp3", //29
    "https://ru-cdn1.drivemusic.me/dl/online/E4VvVLlqsS3gkHtqz-l6Dg/1773940721/download_music/2024/09/poshlaja-molli-adskaja-kolybelnaja.mp3", //30
    "https://track.pinkamuz.pro/download/33b434303431368a373230b030323634330300/7a069e7b24fa7439156e23da39eebe80/%D0%9C%D1%83%D1%81%D0%BE%D1%80%D0%B3%D1%81%D0%BA%D0%B8%D0%B9%20-%20%D0%91%D0%B0%D0%B1%D0%B0%20-%20%D0%AF%D0%B3%D0%B0%28%20%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8%20%D1%81%20%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B8%29%D0%A0%D0%BE%D0%BA%20-%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0.mp3", //31


    //november
    "https://ruo.morsmusic.org/load/1332299349/tATu_-_Nas_ne_dogonyat_(musmore.org).mp3", //1
    "https://track.pinkamuz.pro/download/3334b234b234b7b4b0883731353332313030340700/eca07700446c6ce599284664957580e6/20TOKENS%20-%20%D0%AF%20%D0%A1%D0%9E%D0%A8%D0%95%D0%9B%20%D0%A1%20%D0%A3%D0%9C%D0%90%20%28t.a.t.u%20remix%29.mp3", //2
    "https://ru-d3.drivemusic.me/dl/l98vS_X2uElMEON3F2zoFA/1773709494/download_music/2020/03/ac-dc-highway-to-hell.mp3", //3
    "https://ruo.morsmusic.org/load/330946456/ZXKAI_SLXUGHTER_-_NO_BATIDO_(musmore.org).mp3", //4
    "https://ruo.morsmusic.org/load/49533884/AStudio_-_Uletayu_(musmore.org).mp3", //5
    "https://ru-d1.drivemusic.me/dl/yIhFf9VFIGH__rWRiXDOSw/1773709829/download_music/2019/09/zivert-beverly-hills.mp3", //6
    "https://ru-d2.drivemusic.me/dl/qySxYlE7o_eFkJiM-DUlhQ/1773709868/download_music/2013/09/imagine-dragons-monster.mp3", //7
    "https://ru-d1.drivemusic.me/dl/tbRH4PQMqlXQ8t4trIpBfg/1773709947/download_music/2021/01/korol-i-shut-durak-i-molnija.mp3", //8
    "https://ru-d3.drivemusic.me/dl/v13YBdiGRRajMmOniqJMZA/1773709993/download_music/2018/11/dima-bilan-molnija.mp3", //9
    "https://rus.musrocket.net/load/1686846329/Stray_Kids_-_LALALALA_Rock_Ver_(musrocket.com).mp3", //10
    "https://ru-cdn3.drivemusic.me/dl/online/l-SgeW0XDhllUGbqhFpm1A/1773942183/download_music/2016/04/blestjashhie-a-ja-vse-letala.mp3", //11
    "https://muz.zvukofon.com/dl/1066488411/FNaF_2_-_The_Bonnie_Song_(musportal.org).mp3", //12
    "https://ru-cdn1.drivemusic.me/dl/online/C8D1PWF2ytfk_X_SVz3Szw/1773942352/download_music/2012/10/evanescence-bring-me-to-life.mp3", //13
    "https://ru-cdn1.drivemusic.me/dl/online/hmi5Ke_ryYI4DuIv-e4qaw/1773942397/download_music/2017/07/monatik-vitamin-d.mp3", //14
    "https://ru-cdn3.drivemusic.me/dl/online/2JLGodl-Bs6Dvji7o_GK8w/1773942435/download_music/2022/09/one-ok-rock-i-was-king.mp3", //15
    "https://track.pinkamuz.pro/download/3332303636b030b5883731353332b63431310100/0a539ab7fd071b38dbd4d706c3281ef9/%D0%A8%D0%BD%D0%B8%D1%82%D0%BA%D0%B5%20-%20%D0%A2%D0%B0%D0%BD%D0%B3%D0%BE%20%D0%B2%20%D1%81%D1%83%D0%BC%D0%B0%D1%81%D1%88%D0%B5%D0%B4%D1%88%D0%B5%D0%BC%20%D0%B4%D0%BE%D0%BC%D0%B5%20%28%D1%84%D1%80%D0%B0%D0%B3%D0%BC%D0%B5%D0%BD%D1%82%20%D0%B8%D0%B7%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20V.%20%D0%A0%D0%BE%D0%BD%D0%B4%D0%BE%20Concerto%20Grosso%20%E2%84%961%29.mp3", //16
    "https://muz.zvukofon.com/dl/1624760310/Imagine_Dragons_-_friction_(musportal.org).mp3", //17
    "https://ru-cdn1.drivemusic.me/dl/online/S8-7vmYIFDAsJt1I2q3w0g/1773942716/download_music/2022/09/one-ok-rock-bedroom-warfare.mp3", //18
    "https://ru-cdn2.drivemusic.me/dl/online/N1hv6x78mZ8cx6mue9hVXQ/1773942824/download_music/2024/06/sny-salamandry-jekzorcizm.mp3", //19
    "https://ruo.morsmusic.org/load/423322989/william_Britney_Spears_-_Scream_Shout_(musmore.org).mp3", //20
    "https://ruo.morsmusic.org/load/2023493070/Vremya_i_Steklo_-_Kafel_(musmore.org).mp3", //21
    "https://ruo.morsmusic.org/load/1179357860/EGOR_KRID_Basta_-_Zavtra_(musmore.org).mp3", //22
    "https://ru-cdn3.drivemusic.me/dl/online/yFLOj1YbH7PoWeDEL_S0MA/1773943091/download_music/2022/09/stigmata-protiv-pravil.mp3", //23
    "https://track.pinkamuz.pro/download/33b6303731313036348f3731353332313433320200/373a9fadc68b269f371f7c6cc4afa9df/NUEKI%2C%20TOLCHONOV%2C%20Ravens%20Rock%20-%20SO%20TIRED%20ROCK.mp3", //24
    "https://track.pinkamuz.pro/download/b3303433373130b5348e3731353332b63430320000/da35fe7531214585fe17093deb587c41/Friday%20-%20Roblox%20SCP-3008.mp3", //25
    "https://ru-cdn1.drivemusic.me/dl/online/1pAIQPg67y2iyBNrMANe7g/1773943459/download_music/2021/06/nautilus-pompilius-skovannye-odnojj-cepju.mp3", //26
    "https://ruo.morsmusic.org/load/1152694470/ZHenya_Trofimov_Komnata_kultury_-_Poezda_(musmore.org).mp3", //27
    "https://ruo.morsmusic.org/load/1075507704/The_Walters_-_I_Love_You_So_(musmore.org).mp3", //28
    "https://ru-cdn2.drivemusic.me/dl/online/z8BWOp4TKb-BaZxGtX-qLw/1773943822/download_music/2022/09/stigmata-paraplany.mp3", //29
    "https://ru-cdn2.drivemusic.me/dl/online/-WRg7ikMHSjsyfwUxgyKmw/1773943863/download_music/2023/05/kravc-feat.-gio-pika-gde-proshla-ty.mp3", //30


    //december
    "https://ru-d1.drivemusic.me/dl/lHXDpxPTC9icSX8lmTN1Fw/1773183264/download_music/2015/11/egor-krid-budilnik.mp3", //1
    "https://ru-d2.drivemusic.me/dl/WbUy0qxE1znNQT4-M-dZ3Q/1773183430/download_music/2018/03/bruno-mars-talking-to-the-moon.mp3", //2
    "https://track.pinkamuz.pro/download/33313731b1b43432b2883731353336333032370000/435cada8484f11f4c2ef65c5ba1bbb42/%D0%91%D0%B8-2%20feat.%20%D0%AE%D0%BB%D0%B8%D1%8F%20%D0%A7%D0%B8%D1%87%D0%B5%D1%80%D0%B8%D0%BD%D0%B0%20-%20%D0%9C%D0%BE%D0%B9%20%D1%80%D0%BE%D0%BA-%D0%BD-%D1%80%D0%BE%D0%BB%D0%BB.mp3", //3
    "http://babysongs.ru/music/barbariki-razukrasim-vse-planetyi.mp3", //4
    "https://track.pinkamuz.pro/download/b3b030303630313534883731353332b63436b30000/4fb4998969cbc14adda5fb1c3596996c/%D0%9B%D0%B5%D1%80%D0%BE4%D0%BA%D0%B0%20-%20%D0%AF%20%D0%B2%D1%8B%D0%B1%D0%B8%D1%80%D0%B0%D1%8E%20%D0%B1%D1%8B%D1%82%D1%8C%20%D0%B1%D0%B5%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%BD%D0%BE%20%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9.mp3", //5
    "https://track.pinkamuz.pro/download/33313731b1b43432368c373135b33434b134340500/bdcecc1624207dcc1d6237da8ea90812/STANDOFF%202%2C%20Sava%20Tsurkanu%20-%20Syndicate%20%28Season%20X%29.mp3", //6
    "https://track.pinkamuz.pro/download/33313731b1b434b2308c3731353333343635b20400/bb99384460c00d9634e95d1b46e7395a/%D0%90%D0%94%D0%9B%D0%98%D0%9D%20-%20Dead%20Inside.mp3", //7
    "https://track.pinkamuz.pro/download/3332b33435b23032368e373135333231b1b4300000/b89dcf13d771f11c4b84809b62a25d5a/%D0%91%D0%B0%D0%BB%D0%BA%D0%BE%D0%BD%20-%20%D0%92%D0%B5%D0%B4%D1%8C%D0%BC%D1%8B.mp3", //8
    "https://track.pinkamuz.pro/download/3336373437313531318b3731353331323036370600/e3edf5748b8d1a3e0ced08b73e308407/STARSET%20-%20Unbecoming.mp3", //9
    "https://ruo.morsmusic.org/load/992685281/Sergejj_Lazarev_-_JEto_vsjo_ona_(musmore.org).mp3", //10
    "https://ruo.morsmusic.org/load/855020461/Monster_High_-_Monster_High_Fright_Song_(musmore.org).mp3", //11
    "https://muz.zvukofon.com//dl/1180525265/DIGIMORTAL_-_Gravitaciya_(musportal.org).mp3", //12
    "https://ru-cdn3.drivemusic.me/dl/online/jetzyLAia4zJoev-5nuadA/1773944842/download_music/2022/09/starset-telekinetic.mp3", //13
    "https://ruo.morsmusic.org/load/765168365/Surf_Curse_-_Freaks_(musmore.org).mp3", //14
    "https://ruo.morsmusic.org/load/2117545614/Consoul_Trainin_DuoViolins_Steven_Aderinto_-_Obsession_(musmore.org).mp3", //15
    "https://ru-cdn2.drivemusic.me/dl/online/G47Rq1S3IPuurO8Rh4lo5A/1773945036/download_music/2012/12/valerijj-meladze-inostranec.mp3", //16
    "https://ruo.morsmusic.org/load/597476907/Nervy_-_Kofe_mojj_drug_(musmore.org).mp3", //17
    "https://track.pinkamuz.pro/download/3335b534b43035b3348c3731353332313134b30400/3995d594f8285fed380e6bbe529328f5/G3OX%20EM%20-%20GIGACHAD%20THEME.mp3", //18
    "https://track.pinkamuz.pro/download/33313731b1b43436308937313533b7b03434b50400/b10ae85bdb2ca20d4dabf963d6154264/nyan.mp3%20-%20%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D1%8B%20%D0%BD%D0%B5%20%D0%BD%D1%80%D0%B0%D0%B2%D1%8F%D1%82%D1%81%D1%8F.mp3", //19
    "https://track.pinkamuz.pro/download/33313731b1b43432318f37313533353436b6300200/6e881f3f3dd3ff6f9f84af7c77f2aa27/Soltwine%20-%20%D0%92%D0%B5%D1%87%D0%BD%D0%BE%D0%B5%20%D1%81%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5%20%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%B0.mp3", //20
    "https://ruo.morsmusic.org/load/1972320346/ssshhhiiittt_-_Tancy_(musmore.org).mp3",
    "https://ru-d3.drivemusic.me/dl/2cRUvMSFI7YQZUwDcKmpcA/1773208476/download_music/2022/09/one-ok-rock-fight-the-night.mp3", //22
    "https://ru-d3.drivemusic.me/dl/CjIabuuNuvBjpptSdstc3Q/1773179237/download_music/2017/06/imagine-dragons-rise-up.mp3", //23
    "https://track.pinkamuz.pro/download/33313731b1b43436328a373135b334b03035300600/aa768f41496fd92cb1c9d09e5d6c931b/STIGMATA%20-%20%D0%A1%D0%B8%D1%80%D0%B5%D0%BD%D1%8B.mp3", //24
    "https://ru-d2.drivemusic.me/dl/WYptpr2W8aOcIx7YeVWrZQ/1773208536/download_music/2017/01/ed-sheeran-shape-of-you.mp3", //25
    "https://track.pinkamuz.pro/download/33333230b7343630368b3731353332b63432340400/82ca2bde1a2782dbce338fe4825e37fc/%D0%92%D0%B0%D0%BB%D1%8C%D1%81%20-%20%D0%90%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D1%81%D0%B8%D1%8F%20-%20%D0%9E%D0%B4%D0%BD%D0%B0%D0%B6%D0%B4%D1%8B%20%D0%B2%20%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D0%B5.mp3", //26
    "https://track.pinkamuz.pro/download/33313731b1b43436348d37313533373331b4300300/6a4cbf244c1b56414611758459673940/%D0%9D%D0%B5%D1%80%D0%B2%D1%8B%20-%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.mp3", //27
    "https://track.pinkamuz.pro/download/33313731b1b434b2308937313533b3303630350300/d1e668e98a691a11d3c2dea9e1668a67/Dabro%20-%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%20%D0%B7%D0%B0%D0%BF%D0%BE%D1%91%D0%BC.mp3", //28
    "https://ruo.morsmusic.org/load/1968177103/Artur_Pirozhkov_-_Samo_Sobojj_(musmore.org).mp3", //29
    "https://track.pinkamuz.pro/download/3336373437313531b18c37313533b2343035340300/7003eef4de28cd159f6794fe94197dcc/%D0%94%D0%B8%D1%81%D0%BA%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%20%D0%90%D0%B2%D0%B0%D1%80%D0%B8%D1%8F%20-%20%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%D1%8F.mp3", //30
    "https://ru-d2.drivemusic.me/dl/-534byk41Hf-FyrXaA_JRg/1773207010/download_music/2025/12/ruki-vverkh-novyjj-god.mp3"
    ];

    const audio = document.getElementById('audio');
    const playbtn = document.getElementById('playButton');
    const playIcon = `<svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M16 12 L16 36 L36 24 Z" fill="currentColor"/></svg>`;
    const pauseIcon = `<svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0 V30 H7 V0 Z" stroke="#000" fill="#000"/>
    <path d="M13 0 V30 H20 V0 Z" stroke="#000" fill="#000"/>
    </svg>`;
    const progressBar = document.getElementById('progressBar');
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const buttons = document.querySelectorAll('.td__button');
    let track = -1;
    document.addEventListener('DOMContentLoaded', function(){
        // Обеспечиваем установку правильного значения времени при начальной загрузке
        durationElement.textContent = "0:00"; // Установили стартовое значение времени
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






























