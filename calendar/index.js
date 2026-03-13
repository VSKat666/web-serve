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
    "https://ru-d3.drivemusic.me/dl/RY2fe1AKw7Qalf6FNGsegA/1773278395/download_music/2013/12/imagine-dragons-demons.mp3", //9
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
    "https://ru-d2.drivemusic.me/dl/yi8Bc9Mljw_t7-9VCs0tVA/1773364279/download_music/2019/05/zemljane-trava-u-doma.mp3", //3
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
    "https://rmr.muzmo.cc/get/music/20251022/Starset_-_DARK_THINGS_80041231.mp3",
    "https://ru-d3.drivemusic.me/dl/7ktJ8T55s3bKW_XHNndG9Q/1773368751/download_music/2015/02/imagine-dragons-im-so-sorry.mp3", //29


    //march
    "https://ruo.morsmusic.org/load/1166341245/Soltwine_-_Prishla_vesna_(musmore.org).mp3", //1
    "https://ru-d2.drivemusic.me/dl/uX967RQM2r1DLJmASmpMhw/1773369291/download_music/2025/01/undervud-konstantin-khabenskijj-polnochnyjj-trollejjbus.mp3", //2
    "https://ruo.morsmusic.org/load/1232228770/TryHardNinja_-_Its_Me_(musmore.org).mp3", //3
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ec\/e8\/ece8a8f01fddc3d10f81ab1bee3b54fe\/71849100\/aljona_shvec_-_pervoe_svidanie_b128f0d152.mp3", //4
    "https:\/\/rus.hitmotop.com\/get\/music\/20221129\/Bambee_-_Bumble_Bee_75179717.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/music\/20250921\/Tanin_Jazz_-_Virtualnaya_lyubov_79817779.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2b\/11\/2b11e4f16beeb0de7564f7df58133a12\/48113982\/Lyudvig_van_Betkhoven_-_Lunnaya_sonata_b128f0d331.mp3", //7
    "https://track.pinkamuz.pro/download/333232b5b434b13432883731353332b63430320200/87b067625367737f612a337ab508eefa/Jazzdauren%20-%20%D0%94%D0%B0%D1%80%D0%B8%D1%82%D0%B5%20%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%D0%BC%20%D1%86%D0%B2%D0%B5%D1%82%D1%8B%20%28%D0%A6%D0%B2%D0%B5%D1%82%D1%8B%29%20%D0%91%D0%B5%D0%B7%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D0%B0%20%D0%B8%20%D0%B1%D0%B5%D0%B7%20%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D1%8B.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9d\/6f\/9d6fb23d6e52d2bfdb575f023f37b4b8\/47880782\/STIGMATA_-_Cunami_b128f0d253.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3e\/66\/3e66a152cf9e6e210bc0b71cb7c8d18c\/65356641\/Ljosha_Svik_-_Luna_b128f0d276.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/cuts\/25\/d5\/25d5041be6e67b452c8129c464497335\/73949726\/Imagine_Dragons_-_Bones_b128f0d165.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/7d\/21\/7d21c4643b08c4b8f30f10c555354ce4\/72848717\/Poshlaya_Molli_-_Kontrakt_b128f0d205.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1f\/54\/1f5447dd17ca7ba48af0e7e829bef9ec\/73273874\/Starset_-_DREAMCATCHER_b128f0d293.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/music\/20241102\/Gym_Class_Heroesl_-_Stereo_Hearts_speed_up_78451273.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/eb\/dc\/ebdc9527c3e34ce1381ebd99febd9591\/59223269\/GAYAZOV_BROTHER_-_Kredo_b128f0d202.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/0c\/f8\/0cf8fe3105fdc1873b9dd87a860f37a4\/65505752\/Egor_Krid_-_Serdceedka_b128f0d185.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/music\/20170904\/LOrchestra_Cinematique_-_Test_Drive_From_How_to_Train_Your_Dragon_48146923.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a7\/1b\/a71b68b83cb4dbbd841f3e1abdf24d6b\/55527255\/Kino_-_KHochu_peremen_b128f0d295.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d9\/3c\/d93c6e9067b9c1a0eb2e19e6d0c2e985\/72864238\/Mneskin_-_I_WANNA_BE_YOUR_SLAVE_b128f0d173.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/16\/84\/16847098340b728dc3d47e9d6c626ae7\/47835736\/JOlka_-_Provans_b128f0d206.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/c8\/84\/c884856e218cd424d62bc4c07de32b3d\/47828871\/Linkin_Park_-_Crawling_b128f0d210.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1e\/ef\/1eef1508c74da96be5db8fa363af171c\/48035644\/Otpetye_moshenniki_-_Lyubi_menya_lyubi_b128f0d245.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a6\/24\/a62465240d94d129ef589c04416f9d71\/79094571\/ATLXS_-_PASSO_BEM_SOLTO_b128f0d116.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3f\/8e\/3f8e3143e664cc3901b7aeca8bfb4b47\/47998418\/Ricky_Martin_-_Livin_La_Vida_Loca_b128f0d186.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/be\/af\/beafbab04434096f95a19a371894e8ca\/74691821\/Ansambl_Vesjolye_rebyata_-_V_poslednijj_raz_b128f0d190.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/music\/20240525\/ADUSHKINA_-_Tanceterapiya_77852496.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f9\/1f\/f91fce1ae2802a740801b7ba7e0e2cc9\/55936287\/Artur_Pirozhkov_-_CHika_b128f0d217.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f9\/56\/f95654903162295ea4098003cdc370fe\/48035690\/Aleksejj_Vorobjov_-_Sumasshedshaya_b128f0d180.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/7f\/f5\/7ff5ae861b1731c0d274a0c819009d8c\/48126204\/Evgenijj_Krylatov_-_Prekrasnoe_daljoko_b128f0d250.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b6\/50\/b650dd2863a4a294fe16dd11f566d499\/47951311\/Melnica_-_Obryad_b128f0d292.mp3", //30
    "https:\/\/rus.hitmotop.com\/get\/cuts\/fe\/f6\/fef61cf240e030bf2bf8ddea151efa15\/47957899\/Bullet_For_My_Valentine_-_Hearts_Burst_into_Fire_b128f0d297.mp3", //31


    //april
    "https:\/\/rus.hitmotop.com\/get\/music\/20250817\/SHKEL_-_Kotiki_79468134.mp3", //1
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8a\/c0\/8ac0d864b7bd2da1d28c2cadefe02cd7\/63121915\/Rammstein_-_Engel_b128f0d264.mp3", //2
    "https:\/\/rus.hitmotop.com\/get\/cuts\/cf\/48\/cf48a24efa5c3fb9124763d586579bd0\/47911858\/Alan_Walker_-_Faded_b128f0d212.mp3", //3
    "https:\/\/rus.hitmotop.com\/get\/cuts\/16\/35\/16350ecb5acfc23e6e8decb772e01e7b\/79522040\/Gradent_-_CHto_takoe_lyubov_b128f0d189.mp3", //4
    "https:\/\/rus.hitmotop.com\/get\/music\/20250828\/JubyPhonic_-_Miss_Wanna_Die_feat_Master_Andross_79585886.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/cuts\/73\/26\/7326326ec03f87f3b6d9b199ca3509b9\/74695225\/Merk_Kremont_DNCE_-_Hands_Up_b128f0d166.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f1\/15\/f11502e5a5b4266a5bb1617c85b349ac\/47836281\/Picca_-_Oruzhie_b128f0d207.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/music\/20220524\/barabariki_-_chto_takoe_dobrota_74332940.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/16\/59\/1659fb21236bd0b3adfeada1d0fbf9c9\/47969689\/Bolshojj_detskijj_khor_CT_i_VR_Tanya_Melikhova_-_Krylatye_kacheli_b128f0d195.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b6\/1b\/b61b72a62655af6e84b4c478c39c038f\/47829688\/Zemfira_-_Romashki_b128f0d207.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/music\/20250711\/THE_HATTERS_-_KHmuryjj_79280870.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f9\/aa\/f9aa460add03d7fa63c22759fe41d11c\/62876990\/Ajjdamir_Mugu_-_CHernye_glaza_b128f0d269.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/bb\/ee\/bbee204aa52377f566e6900ccb92cfe1\/80189806\/The_Living_Tombstone_-_Its_Been_So_Long_b128f0d174.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ca\/61\/ca61998c65735175bfffbf94d6912c50\/56774125\/Starset_-_It_Has_Begun_b128f0d317.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/40\/fe\/40fe9bf1062a74e2303ada2393d42677\/48201167\/Lady_Gaga_-_Judas_b128f0d250.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b7\/43\/b74328006b3a4d2255210725b80eb809\/48614900\/Skillet_-_Feel_Invincible_b128f0d229.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/music\/20231127\/Ryokuoushoku_Shakai_-_Hana_ni_Natte_-_Be_a_flower_76972325.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/music\/20210728\/DIGIMORTAL_-_Digimortal_73067117.mp3", //18
    "https://ru-d1.drivemusic.me/dl/d4c0OOQlbbSVQVlppnMREA/1770526009/download_music/2024/11/scally-milano-feat.-uglystephan-dajj-mne-shans.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a4\/30\/a43050846d79ae756a37b689daacbf9f\/55441014\/Khalid_Billie_Eilish_-_lovely_b128f0d200.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5e\/b2\/5eb209d370567e0c4e44f8a9aa1225aa\/72397875\/Nervy_-_Schaste_b128f0d196.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f1\/3b\/f13b8707a8ea1da23e10c93b67bec70f\/14089\/Myuzikl_-_Koroli_nochnojj_Verony_b128f0d188.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/35\/a3\/35a3adf25989e8ed2586476d56dc124a\/48058598\/Gradusy_-_KHochetsya_b128f0d180.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/cuts\/86\/6b\/866b31d1d0f317464dbd655078deac85\/55527311\/Kino_-_Ty_mog_by_b128f0d214.mp3", //24
    "https://ru-cdn2.drivemusic.me/dl/online/Pjqi5TJgfvyzwqISWqexrw/1750396524/download_music/2025/04/soltwine-pesnja-pro-kota.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a8\/34\/a834a811c73647698edf797ec35042f8\/73088438\/ENHYPEN_-_Drunk-Dazed_b128f0d193.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/eb\/c2\/ebc2b692d8a6db0bd0daae4205a43fa2\/73134613\/Starset_-_INFECTED_b128f0d190.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5f\/e3\/5fe375ab4fc77f0c716ab2c510565a7a\/47828699\/Twenty_One_Pilots_-_Stressed_Out_b128f0d202.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/cd\/38\/cd387ecb1924c47a5246ad0ad5529d17\/48198578\/Vyacheslav_Butusov_-_Devushka_po_gorodu_b128f0d196.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/music\/20221020\/Neizvestnyjj_-_Himi_speed_up_74876182.mp3", //30


    //may
    "https://ru-d1.drivemusic.me/dl/A_ourDA2zAZLRvrOWkG9xg/1773347674/download_music/2025/04/maitre-gims-est-ce-que-tu-m039aimes-sped-up.mp3", //1
    "https://track.pinkamuz.pro/download/33b430b63431b230338e3731353332313131320300/bf211c2f1460eb6dfbbd4cb86939275a/Starset%20-%20Brave%20New%20World.mp3", //2
    "https://rmr.muzmo.cc/get/music/20180301/Queen_of_Darts_-_Bad_Karma_54203144.mp3", //3
    "https://ru-d2.drivemusic.me/dl/vVL-rRdSgT6gZNgBNTdnsQ/1773347917/download_music/2014/05/dima-bilan-nochnojj-khuligan.mp3", //4
    "https://ru-d1.drivemusic.me/dl/zmYyD3WrmjMvMTUf2yaWZw/1773347963/download_music/2024/04/carla-bim-bam-toi.mp3", //5
    "https://ru-d2.drivemusic.me/dl/o0LjYAe_xId1vEEqpVANmg/1773348052/download_music/2017/07/kino-ranshe-v-tvoikh-glazakh....mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/cd\/eb\/cdebbc95ca2ce446f51e96d2822c86c1\/68945399\/Picca_-_Ulybka_b128f0d184.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1c\/d5\/1cd5ab0c1664792107413ba99936dcc2\/75132249\/Polina_Gagarina_-_Babochki_b128f0d188.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/93\/c2\/93c221909c442acce4a812e947781563\/61703582\/YUlya_Parshuta_-_Mesyac_majj_b128f0d218.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a4\/79\/a479b5c26ea450ce57375d122977ae8a\/47835999\/MakSim_-_Znaesh_li_ty_b128f0d242.mp3", //10
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
    "https:\/\/rus.hitmotop.com\/get\/music\/20251024\/Mot_-_Den_i_noch_80058755.mp3", //1
    "https:\/\/rus.hitmotop.com\/get\/cuts\/e1\/b3\/e1b3afd212f6908ca7842c7869575d80\/70516527\/aljona_shvec_-_skejjter_b128f0d131.mp3", //2
    "https:\/\/rus.hitmotop.com\/get\/cuts\/65\/52\/6552b6f596eaef39b12b8b9841e457bf\/79469607\/Clean_Bandit_-_Solo_feat_Demi_Lovato_b128f0d223.mp3", //3
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d5\/d6\/d5d66f57850c1fd3bde5b9120eeb0af7\/47828795\/Imagine_Dragons_-_Cha-Ching_Till_We_Grow_Older_b128f0d249.mp3", //4
    "https:\/\/rus.hitmotop.com\/get\/cuts\/4f\/f9\/4ff99e36f18242c17821bb6345672ccb\/69827131\/GAYAZOV_BROTHER_-_YA_TY_i_MORE_b128f0d208.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/music\/20241102\/Mot_and_Zivert_-_Parusa_78454685.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ab\/a9\/aba9b24981976915b27209f8335a37ad\/73186221\/Black_Gryph0n_Baasik_-_Insane_b128f0d160.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/cuts\/e2\/c0\/e2c057a20c6afd16fc58bbcd924dcb08\/51289904\/Ray_Parker_Jr_-_Ghostbusters_b128f0d245.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/96\/3f\/963f97b3f97d3afae85652b5582915d7\/70519846\/Dabro_-_Vse_za_odnogo_b128f0d205.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d1\/f4\/d1f4f9b34cc0dee5b047671ab485fa28\/52088067\/Amega_-_Letet_b128f0d270.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/music\/20250109\/Nu_pogodi_-_zastavka_polnaya_versiya_78906085.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2a\/79\/2a792188b66fd3c7e50286648159e3b7\/53474944\/Oleg_Gazmanov_-_Vperjod_Rossiya_b128f0d198.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/music\/20250906\/GRANRODEO_-_TRASH_CANDY_79677580.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ab\/ae\/abaee6e0646eef3eef0c336211d34394\/65045885\/Skillet_-_Save_Me_b128f0d223.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/30\/07\/30077c25ae641f71d730a959fb5f4b52\/47894349\/Linkin_Park_-_New_Divide_b128f0d268.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/63\/e8\/63e8b2f096a251257f8b72aabc44e2c7\/1003819\/Nervy_-_YA_razryvayu_nervy_b128f0d155.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/75\/1d\/751d49b737fc094aa488d467abda279f\/66106316\/OGEL_-_LETO_17_b128f0d202.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/music\/20240408\/LONGMAN_Mushoku_Tensei_Isekai_Ittara_Honki_Dasu_2_OP_-_spiral_Reinkarnaciya_bezrabotnogo_Istoriya_o_priklyucheniyakh_v_drugom_mire_77699089.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/33\/7d\/337d69935050a27d5d1100c6d69fca48\/68991081\/GROT_Lena_Avgust_-_Vetry_b128f0d301.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/59\/c7\/59c7ee255fbc60f9be2d701d3da3be7d\/47828991\/Maks_Korzh_-_ZHit_v_kajjf_b128f0d174.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ee\/30\/ee30a3b22bfb0400456f46e29ffd18c0\/72969637\/Mot_JONY_-_Lilii_b128f0d199.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3a\/9c\/3a9c236213f522da3053cc02e46107d9\/47921221\/9_gramm_-_Rapapam_b128f0d334.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/59\/50\/5950980c959721272d89ff63beafcf0f\/59996943\/Ariya_-_Bespechnyjj_angel_b128f0d238.mp3", //23
    "https://ruo.morsmusic.org/load/283486048/Lind_Erebros_-_Ninja_in_the_Night_(musmore.org).mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/52\/24\/522476af5c30cdea04b00dfe7ab4a1f9\/47950443\/OneRepublic_-_Counting_Stars_b128f0d257.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/cuts\/88\/44\/88443b16c4e28d9d4ac7cb71c975cf98\/71758000\/347aidan_-_Dancing_in_My_Room_b128f0d180.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/music\/20250812\/Teriyaki_Boyz_-_Tokyo_Drift_Fast_Furious_From_The_Fast_And_The_Furious_Tokyo_Dr_79407836.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ca\/b7\/cab7f18720d8999336560774d0f745d9\/67608429\/Mjevl_-_Patamushka_b128f0d139.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5c\/1e\/5c1e226f4a9f94cd57630e9f875e2198\/59996857\/Bullet_For_My_Valentine_-_Radioactive_b128f0d193.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/e3\/bb\/e3bb44ae3a16e09ef4431cc195dc7ebb\/47956049\/System_of_a_Down_-_Darts_b128f0d162.mp3", //30


    //july
    "https://ru-d2.drivemusic.me/dl/8o3yXbZBZxgLWgWROZN3ow/1773179911/download_music/2019/06/the-hatters-tancy.mp3", //1
    "https://track.pinkamuz.pro/download/3334373633b33030318d3731353332b634b4300400/22007096c7b135b6d664e12d7450b232/Naughty%20Boy%20-%20LaLaLa%20feat.%20Sam%20Smith%202013.mp3", //2
    "https://track.pinkamuz.pro/download/3336373437313531b5883731353335b0b434320600/7151b7881bc08dc036d08c28b51408db/%D0%91%D0%BB%D0%B5%D1%81%D1%82%D1%8F%D1%89%D0%B8%D0%B5%20-%20%D0%92%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F%20%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0.mp3", //3
    "https://track.pinkamuz.pro/download/33313731b1b434b4348d37313533333133b0300000/9b03dda487f862e9c77919f5fb1c2d7e/Dabro%20-%20%D0%9F%D0%BE%D0%BB%D1%8E%D0%B1%D0%B8%D0%BB%20%D1%82%D0%B5%D0%B1%D1%8F.mp3", //4
    "https://track.pinkamuz.pro/download/33313731b1b4343232883731353333363232340600/8cae1a9e1c41242c848f0de9eafadc9e/%D0%9E%D0%BA%D1%81%D0%B0%D0%BD%D0%B0%20%D0%9F%D0%BE%D1%87%D0%B5%D0%BF%D0%B0%20%28%D0%90%D0%BA%D1%83%D0%BB%D0%B0%29%20-%20%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D1%82%D0%BD%D1%8B%D0%B9%20DJ.mp3", //5
    "https://track.pinkamuz.pro/download/33313731b1b43432358a3731353333333730300100/e97ffc63082ea78387a94fd08e9b3499/%D0%A1%D0%BD%D1%8B%20%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D0%BD%D0%B4%D1%80%D1%8B%20-%20%D0%A3%20%D1%85%D0%BE%D0%B7%D1%8F%D0%B8%D0%BD%D0%B0%20%D0%B1%D0%BE%D0%BB%D0%BE%D1%82%D0%B0.mp3", //6
    "https://track.pinkamuz.pro/download/3332b234b630328b3731353332313430340700/e9bda83e05d648dd05e2c91512955161/Sam%20Tinnesz%2C%20Yacht%20Money%20feat.%20Yacht%20Money%20-%20Play%20With%20Fire.mp3", //7
    "https://track.pinkamuz.pro/download/33b5b03036b5308b3731353332b63435b00000/57dd067bfdc619ab6eebf5c4d9590eb7/FixEye%20-%20%D0%9B%D1%83%D0%BA%20%D0%91%D0%B0%D1%82%D1%83%D0%BD.mp3", //8
    "https://track.pinkamuz.pro/download/3334343035b7b434883731353332b63434b40400/e493534c2ec33a0b67e0a27c49168727/FixPlay%20-%20%D0%9A%D0%BE%D0%B6%D0%B0%D0%BD%D1%8B%D0%B5%20%D1%88%D1%82%D0%B0%D0%BD%D1%8B%20%5Bmp3uk.net%5D.mp3", //9
    "https://track.pinkamuz.pro/download/3335303536303133338e3731353332b63430b10400/99cb5fd3cd0c8e82a837bb43ea4b63d9/%D0%9D%D0%B5%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%B5%D0%BD%20-%20%D0%BA%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%83%D0%BA%D0%B8%D0%B5.mp3", //10
    "https://track.pinkamuz.pro/download/33363132333689373335b6b03037b10400/95308ccd08c9f04c0dbf0e1b94761314/%D0%A1%D0%B5%D0%BA%D1%80%D0%B5%D1%82%20-%20%D0%9C%D0%BE%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%20%D0%BD%D0%B0%205%20%D1%8D%D1%82%D0%B0%D0%B6%D0%B5.mp3", //11
    "https://ruo.morsmusic.org/load/861747337/Stigmata_-_Adrenalin_(musmore.org).mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5e\/ad\/5eadb9fbbb007304b0bef2c631277886\/71516710\/Daniela_-_Pust_pugaet_groznyjj_veter_nachinaetsya_groza_b128f0d303.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/cuts\/57\/a3\/57a3792e1dafd0e1fbfcac390e36a9db\/47958417\/Skillet_-_Monster_b128f0d177.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/68\/7e\/687e151cd998749a2411cb43a171174b\/47846653\/Pianobojj_-_Vedma_b128f0d274.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/music\/20191110\/Lowa_-_140_67232343.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8e\/fa\/8efaf32e8e754177c2d9d463117ce4bf\/62571704\/Korol_i_SHut_-_Lesnik_b128f0d192.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a4\/16\/a41644a8b96aefb7454ff0e84d7a36b5\/79149322\/Artemas_-_i_like_the_way_you_kiss_me_b128f0d143.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b9\/51\/b9519987b0f075c4dc159f4e167e9190\/55527282\/Kino_-_Videli_noch_b128f0d189.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/music\/20211112\/Open_Kids_-_Davajj_poletaem_chto_li_73311222.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/cf\/4f\/cf4f51a8afec401d5062424c1ca8cfa5\/47829251\/Nirvana_-_Lithium_b128f0d257.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8b\/8b\/8b8bad23e69d8f2c1e614b9b50cf121f\/69577931\/Dabro_-_YUnost_b128f0d220.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f8\/9e\/f89e519f4a0fe5e14af04b7d7e23f102\/48213741\/Lyubje_-_Kon_b128f0d217.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/cuts\/38\/c3\/38c3fa1ee86e67c777f24e9959a68ff6\/64403124\/Picca_-_Na_vsyu_planetu_Zemlya_b128f0d216.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/70\/de\/70dee81c20cc1845f2dfdedbe0382722\/56305555\/MONATIK_-_Kruzhit_b128f0d198.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/music\/20230617\/OSD_Gorizont_-_Krasnaya_nit_76149916.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8c\/ac\/8cac304e09661ec595652787a562bce2\/73067116\/DIGIMORTAL_-_Odin_b128f0d259.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b5\/d0\/b5d0a6637cb197bea2daac8459d84768\/48093227\/Oleg_Mityaev_-_Kak_zdorovo_b128f0d194.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/4b\/0a\/4b0a488f4374b526b8f47aebd0c971a4\/48614905\/Skillet_-_I_Want_to_Live_b128f0d208.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/83\/37\/833718b8da844f0c54a92f4700e9be12\/69037826\/MACAN_-_Kino_b128f0d184.mp3", //30
    "https:\/\/rus.hitmotop.com\/get\/music\/20210222\/NANSI_SIDOROV_-_A_mozhet_da_a_mozhet_net_72753523.mp3", //31


    //august
    "https:\/\/rus.hitmotop.com\/get\/music\/20150904\/JE_Grig_-_Utro_Per_Gyunt_isp_LKO_28504737.mp3", //1
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d6\/66\/d6667f67cd8e720198258bdf555e7986\/77657355\/Basta_MONA_Tri_dnya_dozhdya_Vladimir_Presnyakov_-_Luch_solnca_zolotogo_b128f0d176.mp3", //2
    "https:\/\/rus.hitmotop.com\/get\/cuts\/af\/f2\/aff2e5320e991d651e4452d17dc0c036\/47828794\/Imagine_Dragons_-_Nothing_Left_To_Say_Rocks_b128f0d536.mp3", //3
    "https:\/\/rus.hitmotop.com\/get\/music\/20190525\/LOrchestra_Cinematique_-_Sweden_From_Minecraft_Piano_Rendition_64492898.mp3", //4
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f0\/1e\/f01efbbee991bd184e8913a8136cf20e\/63656951\/Maksim_-_Solnyshko_luchistoe_b128f0d185.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/music\/20190825\/Dj_Leonid_Rudenko_-_YAblochko_66265862.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/92\/ba\/92baa566221e2e1d56c011db151e9755\/63644711\/Mashina_vremeni_-_Ne_stoit_progibatsya_pod_izmenchivyjj_mir_b128f0d195.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/music\/20250811\/The_Living_Tombstone_-_Five_Nights_at_Freddys_79393930.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/0a\/78\/0a78891e3fbb595abcdbb071f6dd283e\/64351533\/Hard_Bass_School_-_Nash_gimn_b128f0d216.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/df\/7c\/df7c8fb3e6468c461b48f317874b2bbe\/48057880\/IOWA_-_Ulybajjsya_b128f0d218.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/music\/20190624\/KHLEB_-_JEba_Sanya_65198314.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2b\/8c\/2b8cb6adfb9f584c3369fe767c4f825c\/70693181\/Miyagi_JEndshpil_-_BadaBum_b128f0d229.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1c\/8d\/1c8dace8988a359663ca91968cd0d9be\/76552149\/DaBro_-_Ty_znaesh_mam_b128f0d211.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/music\/20170830\/Gradusy_-_Rezhisser_47837710.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b2\/9a\/b29a49104bcc148c60c1ccfbc92bd05a\/73174531\/Dabro_-_Uslyshit_ves_rajjon_b128f0d196.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5a\/c9\/5ac9baa7532c26dc623451aa8a3c1e92\/47846103\/Serebryanaya_svadba_-_YA_zhizn_lyublyu_b128f0d192.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5e\/98\/5e987bb102b474767c3c4ca64cc2cda9\/48614937\/Skillet_-_The_Resistance_b128f0d232.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9e\/6b\/9e6b6eb39949db2c0a394502238de983\/47837674\/tATu_-_All_The_Things_She_Said_b128f0d213.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/19\/ca\/19ca6e620f7a5b6b785d71ff2925a59b\/55527268\/Kino_-_Spokojjnaya_noch_b128f0d384.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/59\/41\/594154b445b19734844149571d05e40a\/64510515\/Mozgi_-_Vertolet_b128f0d285.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8a\/d2\/8ad273afbaf98f6b84dc1c770d33f8bd\/66242942\/5_Seconds_of_Summer_-_Teeth_b128f0d205.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8d\/f7\/8df75d17a57fea376e6ec99a314a4f4a\/47828996\/Maks_Korzh_-_JEndorfin_b128f0d268.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/music\/20230410\/Shadrow_-_Never_Be_Alone_75751101.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/music\/20251119\/KENTUKKI_-_Zamigaet_svet_80267884.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9a\/a1\/9aa1370069c1ed667c4bf00f3344e608\/47958404\/Skillet_-_Forgiven_b128f0d218.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9c\/9f\/9c9ff8b9026bc9cbe89d03869bdce139\/36088651\/Bratya_Grimm_-_Kusturica_b128f0d174.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5c\/6b\/5c6bcc5943d2f30e8b447ead07a1e780\/48162617\/Zveri_-_Do_skorojj_vstrechi_b128f0d255.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/29\/c6\/29c6c8b80e7fcf60c7a68d331bde3ad7\/53300539\/Ruki_Vverkh_-_Kogda_my_byli_molodymi_b128f0d273.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1f\/e0\/1fe0a16fc1c8437339b2f548c11dacf6\/73793426\/EGOR_KRID_MakSim_-_Otpuskayu_b128f0d193.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5d\/41\/5d41caeab99ad0f9fea40f90736e733c\/72940130\/Lolita_-_Na_Titanike_b128f0d233.mp3", //30
    "https:\/\/rus.hitmotop.com\/get\/cuts\/0f\/fd\/0ffd267315f250e18d31be3694d299aa\/70723326\/Lalis_Dream_-_Poslednijj_den_leta_b128f0d152.mp3", //31


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
    "https:\/\/rus.hitmotop.com\/get\/music\/20240210\/ONE_OK_ROCK_-_Cry_Out_77422524.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/a9\/ca\/a9caa18078230d44384e0f8de344ca2d\/74741375\/lampabikt_JElli_na_makovom_pole_-_nemereno_b128f0d205.mp3", //12
    "https://track.pinkamuz.pro/download/333335303035b33034893731353332b63430360300/e2346fec751abb26161548567ba36a8a/%D0%93%D0%B8%D0%BC%D0%BD%20-%20%D0%9D%D0%B0%D1%88%20%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA.mp3", //13
    "https://ru-d1.drivemusic.me/dl/ptW8bhLypeRkKP66lcc_Cw/1773279819/download_music/2014/09/fall-out-boy-centuries.mp3", //14
    "https://ruo.morsmusic.org/load/332912417/Alan_Walker_-_Spectre_(musmore.org).mp3", //15
    "https://ru-d3.drivemusic.me/dl/ny2xDn__QKpSVhQJXtTqFw/1773280453/download_music/2022/09/one-ok-rock-taking-off.mp3", //16
    "https://ru-d3.drivemusic.me/dl/qW8WmiY9qpJuNAK-amEbbA/1773280526/download_music/2024/05/chernyjj-obelisk-osen.mp3", //17
    "https://ruo.morsmusic.org/load/472779114/aljona_shvec_-_v_kabinete_u_direktora_(musmore.org).mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2a\/9e\/2a9e9f9bb80a899e2281b192ac4f1945\/47828894\/Viktor_Cojj_-_Pachka_sigaret_b128f0d268.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9d\/c5\/9dc5fbbc34bf6be58bffa0062db07e77\/66751495\/Zivert_-_Credo_b128f0d184.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/61\/d8\/61d8f95b662275bef3de23e68c6996ca\/74898613\/Kenji_Younezus_Chainsaw_Man_OP_-_KICKBACK_CHelovek-benzopila_opening_b128f0d194.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/93\/2c\/932c82e4bce376305e5a11c60d8cafce\/48872026\/IOWA_-_Plokho_tancevat_b128f0d203.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/0e\/4e\/0e4e338aaf7f84c8f6f7e647fe2ea3e1\/64576013\/Set_It_Off_Ash_Costello_-_Partners_in_Crime_Ash_Costello_b128f0d211.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/cuts\/15\/06\/15061e386d2a8a1e3892dc40403a1334\/47829460\/Nirvana_-_Something_In_The_Way_b128f0d232.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d7\/fe\/d7feb8ac013e57c35cda435355d1add5\/60046523\/ONE_OK_ROCK_-_Memories_b128f0d200.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/music\/20220501\/pesnya_-_A_na_kukhne_sup_mojj_stynet_v_golove_odno_ya_tebya_lyublyu_74169951.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/23\/ec\/23ec0831f2eeee9d163e3e96bbfd3682\/47950197\/DDT_-_CHto_takoe_osen_b128f0d297.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/79\/31\/7931af7e6bc52bbaa7296f7aa16c7e3d\/56774126\/Starset_-_My_Demons_b128f0d288.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/52\/e7\/52e7cdce37eb6a3b563f15522cac5d50\/47828842\/Kino_-_Zvezda_po_imeni_Solnce_b128f0d226.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/4f\/39\/4f3977acb64190a5e054d7571b0d9413\/74273756\/The_Rare_Occasions_-_Notion_b128f0d195.mp3", //30


    //october
    "https:\/\/rus.hitmotop.com\/get\/cuts\/40\/dd\/40ddd44684a77f7852ee8b94ffb96634\/62445563\/Nervy_-_Zazhigalki_b128f0d179.mp3", //1
    "https:\/\/rus.hitmotop.com\/get\/cuts\/56\/e1\/56e1a571c7baca0e19399cfa7ceca4bc\/68398361\/Dajjte_tank_-_Lyudi_b128f0d162.mp3", //2
    "https:\/\/rus.hitmotop.com\/get\/cuts\/98\/b3\/98b31439c23421b5400b3a4cff1a4e8e\/50498861\/Stigmata_-_Na_povtor_b128f0d193.mp3", //3
    "https:\/\/rus.hitmotop.com\/get\/cuts\/46\/dc\/46dc9fca72b21570d7d19b60414c9f55\/48804627\/Oleg_Mityaev_-_rancuzhenka_b128f0d192.mp3", //4
    "https:\/\/rus.hitmotop.com\/get\/cuts\/47\/4d\/474d204801a20f26e8b5c4f0acb4b243\/62570559\/Korol_i_SHut_-_Vedma_i_Osel_b128f0d178.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/music\/20190509\/Groundbreaking_-_The_Foxy_Song_64060913.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5c\/42\/5c42f3cd8b005edb1d2f19e306a61367\/64714984\/Dajjte_tank_-_Malenkijj_b128f0d245.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/cuts\/7b\/33\/7b33e100a12afbc22a5d70d8bdb93457\/47960474\/Little_Big_-_Life_in_da_Trash_b128f0d201.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/80\/a5\/80a5f47249bda01884587dcdb578e16f\/80032558\/Hazbin_Hotel_-_Gravity_b128f0d113.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/music\/20250811\/Slipknot_-_Custer_79394266.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/music\/20241012\/Poshlaya_Molli_-_Proklya_Tabyla_78318329.mp3", //11
    "https://track.pinkamuz.pro/download/33313731b1b434343688373135333131b2b4300500/6106d2b7e4a934855f9de25056967437/%D0%90%D0%91%D0%95%D0%A0%D0%A0%D0%9E%D0%9D%20-%20%D0%94%D0%B5%D0%BD%D1%8C%20%D0%BE%D0%B6%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D0%BC%D0%B5%D1%80%D1%82%D0%B2%D0%B5%D1%86%D0%BE%D0%B2.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/8f\/f4\/8ff41964c6d0020d08f68be3ae705faa\/72140963\/Dima_Bilan_-_Pro_belye_rozy_b128f0d218.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/cuts\/18\/56\/1856c28c2bd1ef79529428877c74671a\/618222113\/Set_It_Off_-_Dancing_With_The_Devil_b128f0d203.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/0f\/b4\/0fb4b5705c3f3b1eaae9606852204b48\/47880623\/STIGMATA_-_Radio_smert_b128f0d297.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/music\/20170904\/TryHardNinja_-_Follow_Me_48148823.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/6d\/41\/6d41fc45cbc20b8cf2cd361b938ab80b\/72852279\/Soltwine_-_Stav_chajjnik_b128f0d160.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/music\/20240407\/Ivasi_-_Akh_vremya_vremya_77699009.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f4\/c2\/f4c2cf0ecba88f012ad0f3842bf94a83\/47958455\/Linkin_Park_-_Lost_In_The_Echo_b128f0d205.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2d\/c0\/2dc02169bca7262349bffbd0edea1603\/66728789\/girl_in_red_-_we_fell_in_love_in_october_b128f0d184.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/15\/c8\/15c8b974b0b92256f7d6859459eb161d\/48247925\/Picca_-_Romans_b128f0d233.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f1\/b6\/f1b601ece34af7d6cfdd35b18ed406eb\/47828874\/Linkin_Park_-_In_The_End_b128f0d219.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/86\/03\/86035bb4642ab78129af18698118f8f1\/73131793\/Stray_Kids_-_Red_Lights_Bang_Chan_Hyunjin_b128f0d190.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/music\/20250903\/Tally_Hall_-_The_Bidding_79650988.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/cuts\/31\/5a\/315ad8fabb63c2e0288a9fcc62aebd2e\/57679169\/Alec_Benjamin_-_Let_Me_Down_Slowly_b128f0d169.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/cuts\/15\/b6\/15b6ecd84f717dad0bc859f8be662532\/62741962\/Nervy_-_Stanciya_tuman_b128f0d221.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5f\/c4\/5fc4011068cb9da4ed56562cfd69a74b\/64616399\/Bi-2_Agata_Kristi_i_Lyumen_-_A_my_ne_angely_paren_b128f0d193.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/66\/02\/66025bb8f4da66774d4f8e773185134d\/59254910\/Starset_-_Monster_b128f0d256.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ea\/f1\/eaf126913b2aaa6f973c305ffba1d914\/47828783\/Imagine_Dragons_-_Radioactive_b128f0d188.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1e\/98\/1e986c03dbc85fd478272b5815d207f0\/78204838\/Poshlaya_Molli_-_Adskaya_kolybelnaya_b128f0d178.mp3", //30
    "https:\/\/rus.hitmotop.com\/get\/music\/20190316\/ELP_Musorgskijj_Kartinki_s_vystavki_Emerson_Lake_Palmer_-_Baba_YAga_62821906.mp3", //31


    //november
    "https:\/\/rus.hitmotop.com\/get\/cuts\/ac\/4d\/ac4d681dbb256220e84430d8af32729e\/47837699\/tATu_-_Nas_ne_dogonyat_b128f0d261.mp3", //1
    "https:\/\/rus.hitmotop.com\/get\/cuts\/19\/aa\/19aa304c44b9812800adbe2704516263\/72097810\/20TOKENS_-_YA_SOSHEL_S_UMA_b128f0d143.mp3", //2
    "https:\/\/rus.hitmotop.com\/get\/cuts\/5f\/18\/5f18bcee38be4fc4eb0a3d27c0510349\/47830059\/ACDC_-_Highway_to_Hell_b128f0d208.mp3", //3
    "https://Imusic.kz/api/download/297846", //4
    "https:\/\/rus.hitmotop.com\/get\/cuts\/9c\/5b\/9c5b919faa6d802d73a2f49053b3c63c\/48035647\/A_-_Studio_-_Uletayu_b128f0d200.mp3", //5
    "https:\/\/rus.hitmotop.com\/get\/music\/20200713\/Zivert_-_Beverly_Hills_70239416.mp3", //6
    "https:\/\/rus.hitmotop.com\/get\/cuts\/7c\/42\/7c4205d489791c89b3bf97b1ca1241fb\/47829307\/Imagine_Dragons_-_Monster_b128f0d249.mp3", //7
    "https:\/\/rus.hitmotop.com\/get\/cuts\/10\/43\/1043fa73b7e5a0d1ffec8679f9ca6a89\/48182429\/Korol_i_SHut_-_Durak_i_molniya_b128f0d114.mp3", //8
    "https:\/\/rus.hitmotop.com\/get\/cuts\/17\/71\/17713851aaadc62a16f407ebce41db0b\/60241187\/Dima_Bilan_-_Molniya_b128f0d182.mp3", //9
    "https:\/\/rus.hitmotop.com\/get\/cuts\/63\/ea\/63ea7db29cf8a2407fb8d201cf462b6d\/78478837\/Stray_Kids_-_LALALALA_Rock_Ver_b128f0d188.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/cuts\/b4\/f0\/b4f024690192816da6aef4d0f3cc00e4\/52465307\/Blestyashhie_-_A_ya_vsjo_letala_b128f0d235.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/music\/20230514\/FNaF_2_-_The_Bonnie_Song_75972983.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/6f\/c0\/6fc05e4edfe9f151ca1703f8a88f76c3\/47885099\/Evanescence_-_Bring_Me_To_Life_b128f0d237.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/music\/20240126\/MONATIK_-_Vtamn_D_77352155.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/music\/20200404\/ONE_OK_ROCK_-_I_Was_King_e_69053151.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/3a\/0d\/3a0d147c1a802367929121fb2bc0e828\/28504714\/Alfred_Garrievich_SHnitke_-_Tango_v_sumasshedshem_dome_b128f0d175.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f8\/9f\/f89fb7b0f81d7fba485b588f6d08b16b\/47829290\/Imagine_Dragons_-_Friction_b128f0d201.mp3", //17
    "https:\/\/rus.hitmotop.com\/get\/cuts\/26\/aa\/26aa78ac87dfc7aa96dab6c685346e7a\/64644182\/ONE_OK_ROCK_-_Bedroom_Warfare_b128f0d202.mp3", //18
    "https:\/\/rus.hitmotop.com\/get\/cuts\/1a\/ea\/1aeacb74b8c47b330fb086da31c8018d\/67854314\/Sny_Salamandry_-_JEkzorcizm_b128f0d166.mp3", //19
    "https:\/\/rus.hitmotop.com\/get\/cuts\/cf\/4d\/cf4d155d81698c2e050f4c02fa969278\/48275317\/Britney_Spears_william_-_Scream_Shout_b128f0d252.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/e5\/7e\/e57edd955432147fe21a0be05786ff7f\/47835236\/Vremya_i_Steklo_-_Kafel_b128f0d208.mp3", //21
    "https:\/\/rus.hitmotop.com\/get\/cuts\/55\/f9\/55f91e251ae567f636d0b58454d65c4a\/78625270\/EGOR_KRID_Basta_-_Zavtra_b128f0d197.mp3", //22
    "https:\/\/rus.hitmotop.com\/get\/cuts\/c5\/c8\/c5c88df0c1b6877e4e204807929cada9\/50342105\/Stigmata_-_Protiv_pravil_b128f0d275.mp3", //23
    "https:\/\/rus.hitmotop.com\/get\/music\/20240605\/NUEKI_TOLCHONOV_Ravens_Rock_-_SO_TIRED_ROCK_77921004.mp3", //24
    "https:\/\/rus.hitmotop.com\/get\/music\/20220512\/scp_3008_-_Friday_theme_74230033.mp3", //25
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f8\/9e\/f89efc80dcccfa4aa12d71064191fb1d\/53184490\/Nautilus_Pompilius_-_Skovannye_odnojj_cepyu_b128f0d232.mp3", //26
    "https:\/\/rus.hitmotop.com\/get\/cuts\/d8\/42\/d842d84f3a8ad6d0bda3b80fbf1c5951\/77596364\/ZHenya_Trofimov_Komnata_kultury_-_Poezda_b128f0d180.mp3", //27
    "https:\/\/rus.hitmotop.com\/get\/cuts\/67\/43\/6743b3b65a4a84909fe8d861f74b0623\/73780528\/The_Walters_-_I_Love_You_So_b128f0d160.mp3", //28
    "https:\/\/rus.hitmotop.com\/get\/cuts\/08\/29\/0829656c3083e253dbcdb8bf238e8310\/50342103\/Stigmata_-_Paraplany_b128f0d215.mp3", //29
    "https:\/\/rus.hitmotop.com\/get\/cuts\/c4\/40\/c440c380429618861a6265351aa09dc5\/75704918\/Kravc_Gio_Pika_-_Gde_proshla_ty_b128f0d168.mp3", //30


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
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f4\/ef\/f4ef75d1fd281df5c25604c39ba9fa76\/79379955\/Sergejj_Lazarev_-_JEto_vsjo_ona_b128f0d226.mp3", //10
    "https:\/\/rus.hitmotop.com\/get\/cuts\/84\/8c\/848c61d1b75001aafe7cd6f35ffed299\/48143728\/Monster_High_-_Monster_High_Fright_Song_b128f0d169.mp3", //11
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f2\/6a\/f26ab5364db41de7fbf3ec9988f3b44e\/73067118\/DIGIMORTAL_-_Gravitaciya_b128f0d262.mp3", //12
    "https:\/\/rus.hitmotop.com\/get\/cuts\/2c\/8c\/2c8cfe0d3e5b454ca8f00dfd35dfcf11\/66563247\/Starset_-_TELEKINETIC_b128f0d313.mp3", //13
    "https:\/\/rus.hitmotop.com\/get\/cuts\/bc\/4e\/bc4ee310a7987c46aa7fc71af944cdac\/68744504\/Surf_Curse_-_Freaks_b128f0d147.mp3", //14
    "https:\/\/rus.hitmotop.com\/get\/cuts\/f5\/dd\/f5dd1b7c3d8fe759d55e1d33049d23ac\/54769016\/Consoul_Trainin_Consoul_Trainin_feat_Steven_Aderinto_DuoViolins_S_-_Obsession_b128f0d182.mp3", //15
    "https:\/\/rus.hitmotop.com\/get\/cuts\/29\/45\/2945fdb931b2568d4a0b9129bd2c177d\/57632352\/Valerijj_Meladze_-_Inostranec_b128f0d246.mp3", //16
    "https:\/\/rus.hitmotop.com\/get\/cuts\/07\/e7\/07e78a5c33915deff88a02ff38eef96b\/48615091\/Nervy_-_Kofe_mojj_drug_b128f0d187.mp3", //17
    "https://track.pinkamuz.pro/download/3335b534b43035b3348c3731353332313134b30400/3995d594f8285fed380e6bbe529328f5/G3OX%20EM%20-%20GIGACHAD%20THEME.mp3", //18
    "https://track.pinkamuz.pro/download/33313731b1b43436308937313533b7b03434b50400/b10ae85bdb2ca20d4dabf963d6154264/nyan.mp3%20-%20%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B0%D0%BC%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D1%8B%20%D0%BD%D0%B5%20%D0%BD%D1%80%D0%B0%D0%B2%D1%8F%D1%82%D1%81%D1%8F.mp3", //19
    "https://track.pinkamuz.pro/download/33313731b1b43432318f37313533353436b6300200/6e881f3f3dd3ff6f9f84af7c77f2aa27/Soltwine%20-%20%D0%92%D0%B5%D1%87%D0%BD%D0%BE%D0%B5%20%D1%81%D0%B8%D1%8F%D0%BD%D0%B8%D0%B5%20%D1%87%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D0%B7%D1%83%D0%BC%D0%B0.mp3", //20
    "https:\/\/rus.hitmotop.com\/get\/cuts\/73\/3e\/733e389b5058b25ad4c687a15930cecf\/66793065\/Ssshhhiiittt_-_Tancy_b128f0d175.mp3",
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





























