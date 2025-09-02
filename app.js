((self) => {
    "use strict";

    let currentPosition = 0;
    let currentIndex = 0;

    const config = {
        stuff: {
            title: 'Araç Gereç Festivali',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-genel-02-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hepsipay-ek-10-kampanyasi-arac-gerec-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hepsipay-ek-10-kampanyasi-arac-gerec-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/bebek-arabasi-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/park-besik-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/mama-sandalyesi-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/oto-koltugu-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ana-kucagi-salincak-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kanguru-portbebe-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/aksesuar0109-dd.jpg',
                }
            ]
        },
        nursery: {
            title: 'Kreşe Dönüş!',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sehredonus-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sehredonus-0109-d.jpg',
                },
            ]
        },
        textile: {
            title: 'Tekstil',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/efsane-geri-dondu-59999-tl-den-baslayan-fiyatlar-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/mont-efsane-geri-dondu-59999-tl-den-baslayan-fiyatlar-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/kis-sonbahar-yeni-sezon-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kis-sonbahar-yeni-sezon-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/krese-geri-donus-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/krese-donus-25082025-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/alt-ust-takim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/alt-ust-takim-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/7-al-6-ode-beyaz-bodyler-12082025-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/7-al-6-ode-beyaz-bodyler-12082025-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/polar-urunlers-bggggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/polar-urunlers-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tulum-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tulum-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-60a-varan-indirim-19082025-bbggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-60a-varan-indirim-19082025-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/pijamaic-giyim-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/pijamaic-giyim-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/250tl-alti-sweatshirt-ve-esofman-alti-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/250tl-alti-sweatshirt-ve-esofman-alti-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/body-13082025-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/body-13082025-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/-bot-kislik-ayakkabi-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/-bot-kislik-ayakkabi-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/corap-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/corap-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/aksesuar-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/aksesuar-dd.jpg',
                },
            ]
        },
        toysbooks: {
            title: 'Oyuncak&Kitap',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/bayram-25-mayis-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-intex-deniz-urunlerinde-sepette-40-indirim-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-secili-yayinevlerinde-2-urune-50-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-secili-yayinevlerinde-2-urune-50-indirim-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dogan-cocuk-yayinlari-ada-serisinde-3-al-2-odeye-ek-9999-tl-yerine-7999-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kitap0109d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-2ye-50ye-ek-34999-tl-yerine-24999-tl-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-2ye-50ye-ek-34999-tl-yerine-24999-tl-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sincap-kitap-indirimleri-sincap-kitap-urunlerinde-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sincap-kitap-indirimleri-sincap-kitap-urunlerinde-sepette-net-40-indirim-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/net-cocuk-kitaplarinda-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/net-cocuk-kitaplarinda-sepette-net-40-indirim-ddd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yukselen-zeka-gunleri-yukselen-zeka-urunlerinde-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yukselen-zeka-gunleri-yukselen-zeka-urunlerinde-sepette-net-40-indirim-d.jpg',
                },
            ]
        },
        campaign: {
            title: 'Kampanyalar',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-plus-koruyucu-ve-kilitlerde-3-al-2-ode-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-plus-koruyucu-ve-kilitlerde-3-al-2-ode-0209d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sleepy-bio-natural-3x40-islak-mendilde-1-alana-2ncisi-hediye2808bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sleepy-bio-natural-3x40-islak-mendilde-1-alana-2ncisi-hediye2808d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-babyjem-banyo-saglik-ve-guvenlik-urunlerinde-net-20-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-babyjem-banyo-saglik-ve-guvenlik-urunlerinde-net-20-indirim-0209d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-sinek-kovar-urunlerinde-sepette-net-20-indirim0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-sinek-kovar-urunlerinde-sepette-net-20-indirim0209d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hammm-tarhana-ve-makarna-cesitlerinde-2urune-sepette-50-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hammm-tarhana-ve-makarna-cesitlerinde-2urune-sepette-50-indirim3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/philips-avent-4u-1-arada-buharli-pisirici-799999-tl-yerine-sepette-net-449999-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/philips-avent-4u-1-arada-buharli-pisirici-799999-tl-yerine-sepette-net-449999-tl3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-tum-brita-markali-urunlerde-net-25-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-tum-brita-markali-urunlerde-net-25-indirim-3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/zibin-body-15999yl-yerine-9999tl-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/zibin-body-15999yl-yerine-9999tl-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-mom-tekli-elektrikli-gogus-pompasi-129999-tl-yerine-49999tl-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/baby-mom-tekli-elektrikli-gogus-pompasi-129999-tl-yerine-49999tl-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-onecell-marka-pillerde-3-al-2-ode-1708-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-onecell-marka-pillerde-3-al-2-ode-1708-d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/ceysu-12x200-ml-dogal-kaynak-suyunda-4-al-3-ode1906.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ceysu-12x200-ml-dogal-kaynak-suyunda-4-al-3-ode1906d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/promalt-iceceklerde-12-al-6-ode-internete-ozel1906.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/promalt-iceceklerde-12-al-6-ode-internete-ozel1906d.jpg',
                },
            ]
        },
        furniture: {
            title: 'Mobilya',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-besikler-ve-karyolalarda-sepette-net-20-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-besikler-ve-karyolalarda-sepette-net-20-indirim-dd.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yatak3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yatak3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sevgiyle-tasarlanan-mobilya-urunleri-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sevgiyle-tasarlanan-mobilya-urunleri-dd.jpg',
                },
            ]
        },
        cleaning: {
            title: 'Bakım&Temizlik',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-0209d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-gunes-urunlerinde-net-40-indirimbg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-gunes-urunlerinde-net-40-indirim3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-dalin-bebek-bakim-urunlerinde-net-25-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-dalin-bebek-bakim-urunlerinde-net-25-indirim3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/siveno-bebek-bakim-urunlerinde-net-25-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/siveno-bebek-bakim-urunlerinde-net-25-indirim-3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/ecowell-bebek-bakim-urunlerinde-net-30-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ecowell-bebek-bakim-urunlerinde-net-30-indirim-3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hipp-bebek-bakim-urunlerinde-net-30-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hipp-bebek-bakim-urunlerinde-net-30-indirim3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-chicco-bebek-bakim-urunlerinde-net-30-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-chicco-bebek-bakim-urunlerinde-net-30-indirim3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-me-kolay-tarama-spreyi-5999-tl-yerine-sadece-4499-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/baby-me-kolay-tarama-spreyi-5999-tl-yerine-sadece-4499-tl3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sudocrem-400gr-bebek-bakim-kremi-69999-tl-yerine-51999-tl-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sudocrem-400gr-bebek-bakim-kremi-69999-tl-yerine-51999-tl-3108d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/um-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/um-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209d.jpg',
                },
            ]
        },
        discover: {
            title: 'Keşfet',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/jaju-baby-babynest-luks-tasarim-ortopedik-anne-yani-bebek-yatagi3008bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/jaju-baby-babynest-luks-tasarim-ortopedik-anne-yani-bebek-yatagi3008d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-01-09-25-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-01-09-25-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yapay-zeka-secti-annelik-yolculugunuzda-size-kolaylik-katacak-urunler-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yapay-zeka-secti-annelik-yolculugunuzda-size-kolaylik-katacak-urunler-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yenigelen-2708bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yenigelen-2708d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/pofy-27-08-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/pofy-28-08d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/gecen-haftanin-en-cok-tercih-edilen-50-urununu-kacirmayin-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/gecen-haftanin-en-cok-tercih-edilen-50-urununu-kacirmayin-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/miniklere-buyuk-masallar-kucuk-fiyatlarla-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/miniklere-buyuk-masallar-kucuk-fiyatlarla-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/cantamda-ne-var-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/cantamda-ne-var-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/lezzetli-ogunler-guclu-gelisim-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/lezzetli-ogunler-guclu-gelisim-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/minik-disler-icin-en-guvenli-yardimciyi-sec-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/minik-disler-icin-en-guvenli-yardimciyi-sec-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/gunluk-hayata-pratik-dokunus-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/gunluk-hayata-pratik-dokunus-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/bezden-bagimsizliga-ilk-adimlar-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/bezden-bagimsizliga-ilk-adimlar-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/rahat-nefes-mutlu-anlar-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/rahat-nefes-mutlu-anlar-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/minik-saclara-en-hassas-ilk-dokunus-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/minik-saclara-en-hassas-ilk-dokunus-01-09-des.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/su-hazir-yardimcilar-yaninda-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/su-hazir-yardimcilar-yaninda-01-09-des.jpg',
                },
            ]
        },
        announcement: {
            title: 'Duyuru',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/superbrands2506-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/superbrands0207d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-plus-bfl303bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/vurun-geri-cagirma-baby-plus-bfl303d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/geri2003-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/geri2003-d.jpg',
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/egericagirmagbbgbg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/geri-cagirma-duyurusuaaad.jpg',
                },
            ]
        }
    };

    const storageConfig = {};

    const eventConfig = {};

    const classes = {
        style: 'ins-custom-style',
        wrapper: 'ins-hero-wrapper',
        container: 'ins-container',
        navbar: 'ins-navbar',
        carouselWrapper: 'ins-carousel-wrapper',
        slider: 'ins-slider',
        sliderWrapper: 'ins-slider-wrapper',
        sliderItem: 'ins-slider-item',
        sliderImage: 'ins-slider-image',
        slideNav: 'ins-slide-nav',
        prevButton: 'ins-prev-button',
        nextButton: 'ins-next-button',
        thumbnailWrapper: 'ins-thumbnail-wrapper',
        thumbnailItem: 'ins-thumbnail-item',
        thumbnailImage: 'ins-thumbnail-image',
        navbarItem: 'ins-navbar-item',
        navLink: 'ins-nav-link',
        backgroundImage: 'ins-background-image',
        active: 'ins-active',
        thumbActive: 'ins-thumb-active',
    };

    const selectors = Object.keys(classes).reduce((createdSelector, key) => (
        createdSelector[key] = `.${classes[key]}`, createdSelector
    ), {})

    self.init = () => {
        if (typeof window.jQuery === 'undefined') {
            self.loadJQuery();
        } else {
            self.reset();
            self.buildCSS();
            self.buildHTML();
            self.setEvents();
        }
    };

    self.loadJQuery = () => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.onload = () => {
            self.init();
        };
        document.head.appendChild(script);
    };

    self.reset = () => {

    };

    self.buildCSS = () => {
        const { style } = classes;
        const { wrapper, backgroundImage, navbar, navbarItem, navLink, active, container, sliderWrapper,
            sliderItem, sliderImage, slider, carouselWrapper, prevButton, nextButton, thumbnailWrapper,
            thumbnailItem, thumbnailImage, slideNav, thumbActive } = selectors;

        const customStyle = `
            <style class="${style}">

                ${wrapper} {
                    width: 100vw;
                    position: relative;
                }

                ${wrapper} *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                ${container} {
                    padding: 12px 0 35px;
                }

                ${backgroundImage} {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }

                ${navbar} {
                    display: flex;
                    justify-content: center;
                    flex-wrap: nowrap;
                    margin-bottom: 11px;
                }

                ${navbarItem} {
                    margin-right: 5px;
                }

                ${navLink} {
                    font-family: 'Poppins', 'cursive';
                    font-size: 1.4rem;
                    font-weight: 600;
                    line-height: 2.86;
                    color: #fff;
                    text-transform: uppercase;
                    padding: 5px 32px;
                    white-space: nowrap;
                    background-color: transparent;
                }

                ${carouselWrapper} {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                ${slider} {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    max-width: 1168px;
                }

                ${sliderWrapper} {
                    display: flex;
                    flex-wrap: nowrap;
                    transition: transform .5s ease;
                    margin-bottom: 30px;
                }

                ${sliderItem} {
                    flex: 0 0 100%;
                    width: 100%;
                }

                ${sliderImage} {
                    width: 1168px;
                    height: auto;
                    border-radius: 40px;
                }

                ${slideNav} {
                    position: relative;
                }

                ${prevButton},
                ${nextButton} {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    top: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background-color: #fff;
                    border-radius: 50%;
                }

                ${prevButton}{
                    left: -70px;
                }

                ${nextButton}{
                    right: -105px;
                }
                
                ${thumbnailWrapper} {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                
                ${thumbnailItem} {
                    width: 120px;
                    height: 45px;
                    background-color: #fff;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-right: 15px;
                }
                
                ${thumbnailImage} {
                    width: 100%;
                    height: 100%;
                }
                

                ${active} {
                    border-style: none;
                    background-color: #fef6eb;
                    color: #f28e00;
                    border-radius: 30px;
                }

                ${thumbActive} {
                    height: 55px;
                }

            </style>
        `;
        $('head').append(customStyle);
    };

    self.buildHTML = () => {
        const { wrapper, container, navbar, carouselWrapper, slider, slideNav, backgroundImage,
            navbarItem, navLink, active, sliderWrapper, sliderItem, sliderImage, prevButton, nextButton,
            thumbnailWrapper, thumbnailItem, thumbnailImage, thumbActive } = classes;

        const outerHTML = `
            <div class="${wrapper}">
                <img src="${config.stuff.items[0].bgImage}" class="${backgroundImage}">
                <div class="${container}">
                    <div class="${navbar}">
                        ${Object.values(config).map((item, index) => `
                            <div class="${navbarItem}">
                                <button type="button" class="${navLink} ${index === 0 ? active : ''}">${item.title}</button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="${carouselWrapper}">
                        <div class="${slider}">
                            <div class="${sliderWrapper}">
                                ${config.stuff.items.map(item => `
                                    <div class="${sliderItem}">
                                        <img src="${item.image}" class="${sliderImage}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="${slideNav}">
                            <div class="${prevButton}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                                    <path d="M10.06.94A1.5 1.5 0 0 0 8.054.835L7.94.94l-7 7a1.5 1.5 0 0 0-.103 2.008l.103.114 7 7a1.5 1.5 0 0 0 2.225-2.008l-.103-.114L4.12 9l5.94-5.94a1.5 1.5 0 0 0 .103-2.007L10.06.94z" fill="#F28E00" fill-rule="nonzero"/>
                                </svg>
                            </div>
                            <div class="${nextButton}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18">
                                    <path d="M.94.94A1.5 1.5 0 0 1 2.946.835L3.06.94l7 7a1.5 1.5 0 0 1 .103 2.008l-.103.114-7 7a1.5 1.5 0 0 1-2.225-2.008l.103-.114L6.88 9 .939 3.06a1.5 1.5 0 0 1-.103-2.007L.94.94z" fill="#F28E00" fill-rule="nonzero"/>
                                </svg>
                            </div>
                            <div class="${thumbnailWrapper}">
                                ${config.stuff.items.map((item, index) => `
                                    <div class="${thumbnailItem} ${index === 0 ? thumbActive : ''}">
                                        <img src="${item.image}" class="${thumbnailImage}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('main').prepend(outerHTML);
    };

    self.setEvents = () => {
        const { prevButton, nextButton, thumbnailItem } = selectors;

        $(prevButton).on('click', () => self.goTo(currentIndex - 1));
        $(nextButton).on('click', () => self.goTo(currentIndex + 1));

        $(thumbnailItem).on('click', (event) => {
            const index = $(event.currentTarget).index();
            self.goTo(index);
        });
    };

    self.goTo = (index) => {
        const { sliderWrapper, thumbnailItem } = selectors;

        const total = $(sliderWrapper).children().length;
        const step = $(sliderWrapper).children().first().outerWidth();

        currentIndex = (index % total + total) % total;
        
        currentPosition = -(currentIndex * step);

        $(sliderWrapper).css('transform', `translateX(${currentPosition}px)`);

        $(thumbnailItem).removeClass(classes.thumbActive)
            .eq(currentIndex).addClass(classes.thumbActive);
    };

    self.init();
})({});