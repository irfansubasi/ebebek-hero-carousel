((self) => {
    "use strict";

    let currentPosition = 0;
    let currentIndex = 0;
    let activeCategory = 'stuff';
    let isDragging = false;
    let startX = 0;
    let changedX = 0;
    let thumbDragging = false;
    let thumbStartX = 0;
    let thumbScrollLeft = 0;

    const config = {
        stuff: {
            title: 'Araç Gereç Festivali',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-genel-02-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-02-09-25-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hepsipay-ek-10-kampanyasi-arac-gerec-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hepsipay-ek-10-kampanyasi-arac-gerec-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/hepsipay-ek-10-kampanyasi-arac-gerec-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/bebek-arabasi-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/bebek-arabasi-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/park-besik-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/park-besik-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/mama-sandalyesi-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/mama-sandalyesi-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/oto-koltugu-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/oto-koltugu-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ana-kucagi-salincak-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/ana-kucagi-salincak-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kanguru-portbebe-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/kanguru-portbebe-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-arac-gerec-urunlerinde-net-25-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/aksesuar0109-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/aksesuar0109-mm.jpg'
                }
            ]
        },
        nursery: {
            title: 'Kreşe Dönüş!',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sehredonus-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sehredonus-0109-d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/sehredonus-0109-m.jpg',
                },
            ]
        },
        textile: {
            title: 'Tekstil',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/efsane-geri-dondu-59999-tl-den-baslayan-fiyatlar-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/mont-efsane-geri-dondu-59999-tl-den-baslayan-fiyatlar-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/mont-efsane-geri-dondu-79999-tl-den-baslayan-fiyatlar-030925-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/kis-sonbahar-yeni-sezon-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kis-sonbahar-yeni-sezon-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/kis-sonbahar-yeni-sezon-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/krese-geri-donus-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/krese-donus-25082025-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/krese-donus-25082025-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/alt-ust-takim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/alt-ust-takim-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/alt-ust-takim-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/7-al-6-ode-beyaz-bodyler-12082025-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/7-al-6-ode-beyaz-bodyler-12082025-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/7-al-6-ode-beyaz-bodyler-12082025mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/polar-urunlers-bggggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/polar-urunlers-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/polar-urunlers-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tulum-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tulum-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tulum-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-60a-varan-indirim-19082025-bbggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-60a-varan-indirim-19082025-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/secili-tekstil-urunlerinde-60a-varan-indirim-19082025-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/pijamaic-giyim-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/pijamaic-giyim-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/pijamaic-giyim-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/250tl-alti-sweatshirt-ve-esofman-alti-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/250tl-alti-sweatshirt-ve-esofman-alti-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/250tl-alti-sweatshirt-ve-esofman-alti-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/body-13082025-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/body-13082025-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/body-13082025-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/-bot-kislik-ayakkabi-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/-bot-kislik-ayakkabi-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/-bot-kislik-ayakkabi-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/corap-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/corap-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/corap-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/aksesuar-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/aksesuar-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/aksesuar-mm.jpg'
                }
            ]
        },
        toysbooks: {
            title: 'Oyuncak&Kitap',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/bayram-25-mayis-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-intex-deniz-urunlerinde-sepette-40-indirim-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-intex-deniz-urunlerinde-sepette-40-indirim-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-secili-yayinevlerinde-2-urune-50-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-secili-yayinevlerinde-2-urune-50-indirim-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/internete-ozel-secili-yayinevlerinde-2-urune-50-indirim-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dogan-cocuk-yayinlari-ada-serisinde-3-al-2-odeye-ek-9999-tl-yerine-7999-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/kitap0109d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/kitap0109m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-2ye-50ye-ek-34999-tl-yerine-24999-tl-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-2ye-50ye-ek-34999-tl-yerine-24999-tl-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/internete-ozel-dk-bebek-dokun-hisset-kitaplari-2ye-50ye-ek-34999-tl-yerine-24999-tl-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sincap-kitap-indirimleri-sincap-kitap-urunlerinde-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sincap-kitap-indirimleri-sincap-kitap-urunlerinde-sepette-net-40-indirim-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/sincap-kitap-indirimleri-sincap-kitap-urunlerinde-sepette-net-40-indirim-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/net-cocuk-kitaplarinda-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/net-cocuk-kitaplarinda-sepette-net-40-indirim-ddd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/net-cocuk-kitaplarinda-sepette-net-40-indirim-mmm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yukselen-zeka-gunleri-yukselen-zeka-urunlerinde-sepette-net-40-indirim-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yukselen-zeka-gunleri-yukselen-zeka-urunlerinde-sepette-net-40-indirim-d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/yukselen-zeka-gunleri-yukselen-zeka-urunlerinde-sepette-net-40-indirim-m.jpg'
                },
            ]
        },
        campaign: {
            title: 'Kampanyalar',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-plus-koruyucu-ve-kilitlerde-3-al-2-ode-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-plus-koruyucu-ve-kilitlerde-3-al-2-ode-0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-baby-plus-koruyucu-ve-kilitlerde-3-al-2-ode-0209m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sleepy-bio-natural-3x40-islak-mendilde-1-alana-2ncisi-hediye2808bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sleepy-bio-natural-3x40-islak-mendilde-1-alana-2ncisi-hediye2808d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/sleepy-bio-natural-3x40-islak-mendilde-1-alana-2ncisi-hediye2808m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-babyjem-banyo-saglik-ve-guvenlik-urunlerinde-net-20-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-babyjem-banyo-saglik-ve-guvenlik-urunlerinde-net-20-indirim-0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-babyjem-banyo-saglik-ve-guvenlik-urunlerinde-net-20-indirim-0209m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-sinek-kovar-urunlerinde-sepette-net-20-indirim0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-sinek-kovar-urunlerinde-sepette-net-20-indirim0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-sinek-kovar-urunlerinde-sepette-net-20-indirim0209m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hammm-tarhana-ve-makarna-cesitlerinde-2urune-sepette-50-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hammm-tarhana-ve-makarna-cesitlerinde-2urune-sepette-50-indirim3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/hammm-tarhana-ve-makarna-cesitlerinde-2urune-sepette-50-indirim3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/philips-avent-4u-1-arada-buharli-pisirici-799999-tl-yerine-sepette-net-449999-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/philips-avent-4u-1-arada-buharli-pisirici-799999-tl-yerine-sepette-net-449999-tl3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/philips-avent-4u-1-arada-buharli-pisirici-799999-tl-yerine-sepette-net-449999-tl3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/internete-ozel-tum-brita-markali-urunlerde-net-25-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/internete-ozel-tum-brita-markali-urunlerde-net-25-indirim-3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/internete-ozel-tum-brita-markali-urunlerde-net-25-indirim-3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/zibin-body-15999yl-yerine-9999tl-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/zibin-body-15999yl-yerine-9999tl-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/zibin-body-15999yl-yerine-9999tl-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-mom-tekli-elektrikli-gogus-pompasi-129999-tl-yerine-49999tl-bgg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/baby-mom-tekli-elektrikli-gogus-pompasi-129999-tl-yerine-49999tl-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/baby-mom-tekli-elektrikli-gogus-pompasi-129999-tl-yerine-49999tl-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-onecell-marka-pillerde-3-al-2-ode-1708-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-onecell-marka-pillerde-3-al-2-ode-1708-d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-onecell-marka-pillerde-3-al-2-ode-1708-m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/ceysu-12x200-ml-dogal-kaynak-suyunda-4-al-3-ode1906.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ceysu-12x200-ml-dogal-kaynak-suyunda-4-al-3-ode1906d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/ceysu-12x200-ml-dogal-kaynak-suyunda-4-al-3-ode1906m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/promalt-iceceklerde-12-al-6-ode-internete-ozel1906.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/promalt-iceceklerde-12-al-6-ode-internete-ozel1906d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/promalt-iceceklerde-12-al-6-ode-internete-ozel1906m.jpg'
                },
            ]
        },
        furniture: {
            title: 'Mobilya',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-besikler-ve-karyolalarda-sepette-net-20-indirim-bgggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-besikler-ve-karyolalarda-sepette-net-20-indirim-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-besikler-ve-karyolalarda-sepette-net-20-indirim-mm.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yatak3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yatak3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/yatak3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sevgiyle-tasarlanan-mobilya-urunleri-bggg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sevgiyle-tasarlanan-mobilya-urunleri-dd.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/sevgiyle-tasarlanan-mobilya-urunleri-mm.jpg'
                },
            ]
        },
        cleaning: {
            title: 'Bakım&Temizlik',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-0209m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-gunes-urunlerinde-net-40-indirimbg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-gunes-urunlerinde-net-40-indirim3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-gunes-urunlerinde-net-40-indirim3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-dalin-bebek-bakim-urunlerinde-net-25-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-dalin-bebek-bakim-urunlerinde-net-25-indirim3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-dalin-bebek-bakim-urunlerinde-net-25-indirim3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/siveno-bebek-bakim-urunlerinde-net-25-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/siveno-bebek-bakim-urunlerinde-net-25-indirim-3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/siveno-bebek-bakim-urunlerinde-net-25-indirim-3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/ecowell-bebek-bakim-urunlerinde-net-30-indirim-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/ecowell-bebek-bakim-urunlerinde-net-30-indirim-3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/ecowell-bebek-bakim-urunlerinde-net-30-indirim-3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/hipp-bebek-bakim-urunlerinde-net-30-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/hipp-bebek-bakim-urunlerinde-net-30-indirim3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/hipp-bebek-bakim-urunlerinde-net-30-indirim3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-chicco-bebek-bakim-urunlerinde-net-30-indirim3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-chicco-bebek-bakim-urunlerinde-net-30-indirim3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-chicco-bebek-bakim-urunlerinde-net-30-indirim3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-me-kolay-tarama-spreyi-5999-tl-yerine-sadece-4499-tl3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/baby-me-kolay-tarama-spreyi-5999-tl-yerine-sadece-4499-tl3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/baby-me-kolay-tarama-spreyi-5999-tl-yerine-sadece-4499-tl3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/sudocrem-400gr-bebek-bakim-kremi-69999-tl-yerine-51999-tl-3108bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/sudocrem-400gr-bebek-bakim-kremi-69999-tl-yerine-51999-tl-3108d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/sudocrem-400gr-bebek-bakim-kremi-69999-tl-yerine-51999-tl-3108m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-baby-mom-anne-kisisel-bakim-ve-hijyenik-pedlerde-sepette-net-20-indirim-m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/um-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/um-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/tum-baby-me-dis-macunu-ve-fircalarinda-2urune-sepette-net-50-indirim-0209m.jpg'
                },
            ]
        },
        discover: {
            title: 'Keşfet',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/jaju-baby-babynest-luks-tasarim-ortopedik-anne-yani-bebek-yatagi3008bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/jaju-baby-babynest-luks-tasarim-ortopedik-anne-yani-bebek-yatagi3008d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/jaju-baby-babynest-luks-tasarim-ortopedik-anne-yani-bebek-yatagi3008m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-01-09-25-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-01-09-25-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/en-sevilen-urunler-tek-sayfada-01-09-25-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yapay-zeka-secti-annelik-yolculugunuzda-size-kolaylik-katacak-urunler-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yapay-zeka-secti-annelik-yolculugunuzda-size-kolaylik-katacak-urunler-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/yapay-zeka-secti-annelik-yolculugunuzda-size-kolaylik-katacak-urunler-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/yenigelen-2708bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/yenigelen-2708d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/yenigelen-2708m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/pofy-27-08-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/pofy-28-08d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/pofy-28-08m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/gecen-haftanin-en-cok-tercih-edilen-50-urununu-kacirmayin-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/gecen-haftanin-en-cok-tercih-edilen-50-urununu-kacirmayin-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/gecen-haftanin-en-cok-tercih-edilen-50-urununu-kacirmayin-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/miniklere-buyuk-masallar-kucuk-fiyatlarla-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/miniklere-buyuk-masallar-kucuk-fiyatlarla-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/miniklere-buyuk-masallar-kucuk-fiyatlarla-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/cantamda-ne-var-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/cantamda-ne-var-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/cantamda-ne-var-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/lezzetli-ogunler-guclu-gelisim-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/lezzetli-ogunler-guclu-gelisim-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/lezzetli-ogunler-guclu-gelisim-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/minik-disler-icin-en-guvenli-yardimciyi-sec-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/minik-disler-icin-en-guvenli-yardimciyi-sec-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/minik-disler-icin-en-guvenli-yardimciyi-sec-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/gunluk-hayata-pratik-dokunus-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/gunluk-hayata-pratik-dokunus-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/gunluk-hayata-pratik-dokunus-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/bezden-bagimsizliga-ilk-adimlar-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/bezden-bagimsizliga-ilk-adimlar-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/bezden-bagimsizliga-ilk-adimlar-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/rahat-nefes-mutlu-anlar-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/rahat-nefes-mutlu-anlar-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/rahat-nefes-mutlu-anlar-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/minik-saclara-en-hassas-ilk-dokunus-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/minik-saclara-en-hassas-ilk-dokunus-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/minik-saclara-en-hassas-ilk-dokunus-01-09-mob.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/su-hazir-yardimcilar-yaninda-01-09-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/su-hazir-yardimcilar-yaninda-01-09-des.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/su-hazir-yardimcilar-yaninda-01-09-mob.jpg'
                },
            ]
        },
        announcement: {
            title: 'Duyuru',
            items: [
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/superbrands2506-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/superbrands0207d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/superbrands0207m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/baby-plus-bfl303bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/vurun-geri-cagirma-baby-plus-bfl303d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/vurun-geri-cagirma-baby-plus-bfl303m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/geri2003-bg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/geri2003-d.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/geri2003-m.jpg'
                },
                {
                    bgImage: 'https://cdn05.e-bebek.com/media/c/egericagirmagbbgbg.jpg',
                    image: 'https://cdn05.e-bebek.com/media/c/geri-cagirma-duyurusuaaad.jpg',
                    mobile: 'https://cdn05.e-bebek.com/media/c/geri-cagirma-duyurusuaaam.jpg'
                },
            ]
        },

    };

    const storageConfig = {
        cacheExpiry: 1,
        category: 'insActiveCategory',
    };

    const eventConfig = {
        eventName: '.ins-event',
    };

    const classes = {
        style: 'ins-custom-style',
        wrapper: 'ins-hero-wrapper',
        container: 'ins-container',
        navbar: 'ins-navbar',
        carouselWrapper: 'ins-carousel-wrapper',
        slider: 'ins-slider',
        sliderWrapper: 'ins-slider-wrapper',
        sliderItemWrapper: 'ins-slider-item-wrapper',
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
            const savedCategoryKey = self.getLocalStorage(storageConfig.category);
            if (savedCategoryKey && config[savedCategoryKey]) {
                activeCategory = savedCategoryKey;
            }
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
        const { wrapper, style } = selectors;
        const { eventName } = eventConfig;

        $(wrapper).remove();
        $(style).remove();
        $(document).off(`click${eventName}`);
        $(document).off(`mousedown${eventName}`);
        $(document).off(`mousemove${eventName}`);
        $(document).off(`mouseup${eventName}`);
        $(document).off(`touchstart${eventName}`);
        $(document).off(`touchmove${eventName}`);
        $(document).off(`touchend${eventName}`);
        $(document).off(`mouseleave${eventName}`);
    };

    self.buildCSS = () => {
        const { style } = classes;
        const { wrapper, backgroundImage, navbar, navbarItem, navLink, active, container, sliderWrapper,
            sliderItem, sliderImage, slider, carouselWrapper, prevButton, nextButton, thumbnailWrapper,
            thumbnailItem, thumbnailImage, slideNav, thumbActive, sliderItemWrapper } = selectors;

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
                    gap: 0;
                }

                ${sliderItemWrapper} {
                    flex: 0 0 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                ${sliderItem} {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                ${sliderImage} {
                    width: 1168px;
                    height: auto;
                    border-radius: 40px;
                }

                ${slideNav} {
                    position: relative;
                    max-width: 1290px;
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
                    overflow-x: auto;
                    overflow-y: hidden;
                    scroll-behavior: smooth;
                    -ms-overflow-style: none;
                    scrollbar-width: none; 
                }

                ${thumbnailWrapper}::-webkit-scrollbar{
                    display: none;
                }
                
                ${thumbnailItem} {
                    width: 120px;
                    height: 45px;
                    background-color: #fff;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-right: 15px;
                    flex: 0 0 120px;
                }
                
                ${thumbnailImage} {
                    width: 100%;
                    height: 100%;
                }
                

                ${active} {
                    border-style: none;
                    background-color: #fef6eb;
                    color: #f28e00!important;
                    border-radius: 30px;
                }

                ${thumbActive} {
                    height: 55px;
                }

                @media (max-width: 1535px) {

                    ${slideNav} {
                        max-width: 1266px;
                    }

                    ${navLink} {
                        padding: 5px 15px;
                    }
                }

                @media (max-width: 1480px){

                    ${slideNav} {
                        max-width: 1150px;
                    }

                    ${sliderImage} {
                        width: 1120px;
                    }
                }

                @media (max-width: 1024px){

                    ${container} {
                        padding: 15px 0 0 25px;
                    }

                    ${navbar} {
                        margin-bottom: 15px;
                        justify-content: flex-start;
                        overflow-x: auto;
                        overflow-y: hidden;
                        scroll-behavior: smooth;
                    }
                    ${navbar}::-webkit-scrollbar{ display: none; }
                    ${navbarItem}{ flex: 0 0 auto; }

                    ${carouselWrapper} {
                        padding: 0 5px 0 0;
                    }

                    ${slider} {
                        overflow: hidden;
                        border-radius: 4px 5px 5px 4px;
                    }

                    ${sliderWrapper} {
                        margin-bottom: 0;
                        gap: 10px;
                    }

                    ${slideNav} {
                        display: none;
                    }

                    ${navLink} {
                        padding: 12px 8px;
                        font-size: 1.2rem;
                        white-space: nowrap;
                        color: #6f6f6f;
                        line-height: 1;
                    }

                    ${backgroundImage} {
                        display: none;
                    }

                    ${sliderItemWrapper}{
                        flex: 0 0 93.926%;
                    }

                    ${sliderImage} {
                        width: 100%;
                        border-radius: 0;
                    }
                }
            </style>
        `;
        $('head').append(customStyle);
    };

    self.buildHTML = () => {
        const { wrapper, container, navbar, carouselWrapper, slider, slideNav, backgroundImage,
            navbarItem, navLink, active, sliderWrapper, sliderItem, sliderImage, prevButton, nextButton,
            thumbnailWrapper, thumbnailItem, thumbnailImage, thumbActive, sliderItemWrapper } = classes;

        const outerHTML = `
            <div class="${wrapper}">
                <img src="${config[activeCategory].items[0].bgImage}" class="${backgroundImage}">
                <div class="${container}">
                    <div class="${navbar}">
                        ${Object.entries(config).map(([key, item]) => `
                            <div class="${navbarItem}">
                                <button type="button" data-category="${key}" class="${navLink} ${key === activeCategory ? active : ''}">${item.title}</button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="${carouselWrapper}">
                        <div class="${slider}">
                            <div class="${sliderWrapper}">
                                ${config[activeCategory].items.map(item => `
                                    <div class="${sliderItemWrapper}">
                                        <div class="${sliderItem}">
                                            <img src="${self.getSlideSrc(item)}" class="${sliderImage}" draggable="false">
                                        </div>
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
                                ${config[activeCategory].items.map((item, index) => `
                                    <div class="${thumbnailItem} ${index === 0 ? thumbActive : ''}">
                                        <img src="${item.image}" class="${thumbnailImage}" draggable="false">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('.Section1').prepend(outerHTML);
    };

    self.setEvents = () => {
        const { prevButton, nextButton, thumbnailItem, navLink, sliderWrapper, thumbnailWrapper } = selectors;
        const { eventName } = eventConfig;

        $(document).on(`click${eventName}`, prevButton, () => self.goTo(currentIndex - 1));
        $(document).on(`click${eventName}`, nextButton, () => self.goTo(currentIndex + 1));

        $(document).on(`click${eventName}`, thumbnailItem, (event) => {
            const index = $(event.currentTarget).index();
            self.goTo(index);
        });

        $(document).on(`click${eventName}`, navLink, (event) => {
            const key = $(event.currentTarget).data('category');
            if (!key || key === activeCategory) return;
            self.switchCategory(key);
        });

        $(document).on(`mousedown${eventName} touchstart${eventName}`, sliderWrapper, (event) => {
            isDragging = true;
            startX = event.pageX || event.originalEvent.touches[0].pageX;

            $(sliderWrapper).css("transition", "none");
        });

        $(document).on(`mousemove${eventName} touchmove${eventName}`, (event) => {
            if (!isDragging) return;

            const x = event.pageX || event.originalEvent.touches[0].pageX;
            changedX = x - startX;

            $(sliderWrapper).css("transform", `translateX(${currentPosition + changedX}px)`);
        });

        $(document).on(`mouseup${eventName} touchend${eventName}`, () => {
            if (!isDragging) return;
            isDragging = false;

            $(sliderWrapper).css("transition", "transform .5s ease");

            if (changedX > 200) {
                self.goTo(currentIndex - 1);
            } else if (changedX < -200) {
                self.goTo(currentIndex + 1);
            } else {
                self.goTo(currentIndex);
            }
            changedX = 0;
        });

        $(document).on(`mousedown${eventName}`, thumbnailWrapper, (event) => {
            event.preventDefault();

            thumbDragging = true;
            thumbStartX = event.pageX;
            thumbScrollLeft = $(thumbnailWrapper)[0].scrollLeft;

            $(thumbnailWrapper).css("transform", "none");
        });

        $(document).on(`mousemove${eventName}`, (event) => {
            if (!thumbDragging) return;

            const walk = (event.pageX - thumbStartX) * -1;
            $(thumbnailWrapper)[0].scrollLeft = thumbScrollLeft + walk;
        });

        $(document).on(`mouseup${eventName} mouseleave${eventName}`, () => {
            thumbDragging = false;

            $(thumbnailWrapper).css("transform", "transform .5s ease");
        });
    };

    self.goTo = (index) => {
        const { sliderWrapper } = selectors;

        const total = $(sliderWrapper).children().length;

        if (index >= total) {
            const nextKey = self.getClosestCategoryKey('next');
            if (nextKey) return self.switchCategory(nextKey, 0);
        }
        if (index < 0) {
            const prevKey = self.getClosestCategoryKey('prev');
            if (prevKey) {
                const lastCount = (config[prevKey]?.items?.length) || 1;
                return self.switchCategory(prevKey, lastCount - 1);
            }
        }

        const first = $(sliderWrapper).children().first();
        const childWidth = first.outerWidth() || 0;
        const wrapperEl = $(sliderWrapper)[0];
        let gap = 0;
        
        if (wrapperEl && window.getComputedStyle) {
            const styles = getComputedStyle(wrapperEl);
            gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
        }
        const step = childWidth + gap;

        currentIndex = (index % total + total) % total;
        currentPosition = -(currentIndex * step);

        $(sliderWrapper).css('transform', `translateX(${currentPosition}px)`);

        self.updateThumbnail();
        self.updateBackground(activeCategory);
        self.updateThumbScroll();
    };

    self.updateThumbnail = () => {
        const { thumbnailItem } = selectors;
        const { thumbActive } = classes;

        $(thumbnailItem).removeClass(thumbActive)
            .eq(currentIndex).addClass(thumbActive);
    };

    self.updateBackground = (key) => {
        const { backgroundImage } = selectors;

        $(backgroundImage).attr('src', config[key].items[currentIndex].bgImage);
    };

    self.updateThumbScroll = () => {
        const { thumbnailWrapper, thumbnailItem } = selectors;

        const strip = $(thumbnailWrapper)[0];

        const element = $(thumbnailItem).get(currentIndex);

        const viewport = strip.clientWidth;
        const elementLeft = element.offsetLeft;
        const elementWidth = element.offsetWidth;

        let left = elementLeft - (viewport - elementWidth) / 2;
        if (left < 0) left = 0;

        const maxLeft = strip.scrollWidth - viewport;
        if (left > maxLeft) left = maxLeft;

        strip.scrollTo({ left, behavior: 'smooth' });

    };

    self.switchCategory = (key, initialIndex = 0) => {
        activeCategory = key;
        currentIndex = 0;

        self.setLocalStorage(storageConfig.category, key);

        self.updateNavbar(key);
        self.updateBackground(key);

        self.getSlidesHTML(key);
        self.getThumbnailsHTML(key);

        self.goTo(initialIndex);
    };

    self.updateNavbar = (key) => {
        const { navLink } = selectors;
        const { active } = classes;

        $(navLink).removeClass(active)
            .filter(`[data-category="${key}"]`).addClass(active);
    };

    self.getSlidesHTML = (key) => {
        const { sliderWrapper } = selectors;
        const { sliderItem, sliderImage, sliderItemWrapper } = classes;

        const slidesHTML = config[key].items.map(item => `
            <div class="${sliderItemWrapper}">
                <div class="${sliderItem}">
                    <img src="${self.getSlideSrc(item)}" class="${sliderImage}" draggable="false">
                </div>
            </div>
        `).join('');

        $(sliderWrapper).html(slidesHTML);
    };

    self.getThumbnailsHTML = (key) => {
        const { thumbnailWrapper } = selectors;
        const { thumbActive, thumbnailImage, thumbnailItem } = classes;

        const thumbnailsHTML = config[key].items.map((item, idx) => `
            <div class="${thumbnailItem} ${idx === 0 ? thumbActive : ''}">
                <img src="${item.image}" class="${thumbnailImage}" draggable="false">
            </div>
        `).join('');

        $(thumbnailWrapper).html(thumbnailsHTML);
    };

    self.getSlideSrc = (item) => {
        const isMobile = window.matchMedia && matchMedia('(max-width: 1024px)').matches;

        return (isMobile && item.mobile) ? item.mobile : item.image;
    };

    self.getClosestCategoryKey = (direction) => {
        const keys = Object.keys(config);
        
        const index = keys.indexOf(activeCategory);

        if (index === -1) return null;
        if (direction === 'next') return keys[(index + 1) % keys.length];
        if (direction === 'prev') return keys[(index - 1 + keys.length) % keys.length];
        return null;
    };

    self.setLocalStorage = (name, data, expiry = storageConfig.cacheExpiry) => {
        const expiryMs = expiry * 86400000;

        const toStore = {
            value: data,
            expiry: Date.now() + expiryMs,
        }

        localStorage.setItem(name, JSON.stringify(toStore));
    }

    self.getLocalStorage = (name) => {
        const stored = localStorage.getItem(name);

        if (!stored) return null;

        const parsed = JSON.parse(stored);

        if (!parsed.expiry || !parsed.value) return null;

        if (Date.now() > parsed.expiry) {
            localStorage.removeItem(name);
            return null;
        }

        return parsed.value;
    }

    self.init();
})({});