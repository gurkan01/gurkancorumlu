/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO - DATABASE MANAGER (db.js)
   ========================================================================== */

// Default Seed Data for Assets
const defaultAssets = [
    {
        id: "operatinglight-monster",
        title: "OperatingLight Monster",
        edition: "MEDICAL WASTE SERIES",
        tagClass: "red",
        image: "assets/images/operatinglight.jpg",
        category: "animation",
        categoryTR: "Rig & Animasyon",
        categoryEN: "Rig & Animation",
        descTR: "Tıbbi Atık Canavarları serisinin ilk üyesi: Korku oyunlarınız için tasarlanmış, tamamen riglenmiş ve parçalanmaya hazır ameliyat ışığı kafalı yaratık.",
        descEN: "The first entry in the Medical Waste Monsters series: A fully rigged, dismemberment-ready operating light headed creature designed for your horror games.",
        featuresTR: [
            "Parçalanmaya (Dismemberment) Hazır 8 Parçalı İskelet Yapısı",
            "41 Adet AAA Seviye Animasyon Seti",
            "Gelişmiş Işık Odaklı Savaş Mekanikleri",
            "Özel Efektler (Kan Sıçraması, Melee İzleri) Dahil"
        ],
        featuresEN: [
            "Dismemberment-ready 8-part skeletal mesh structure",
            "41 AAA-grade animation cycles",
            "Advanced light-based combat mechanics",
            "Custom VFX (Blood splatters, melee trails) included"
        ],
        specsTR: {
            "Poligon Sayısı": "16.338 Triangles",
            "Kaplamalar (Textures)": "PBR 4K Kaplamalar (Albedo, Normal, Mask)",
            "UV Düzeni": "Temiz Overlap edilmemiş UV",
            "Formatlar": "FBX, Unitypackage, Blend",
            "Kemik Yapısı (Rig)": "Humanoid & Epic Skeleton Uyumlu"
        },
        specsEN: {
            "Poly Count": "16,338 Triangles",
            "Textures": "PBR 4K Textures (Albedo, Normal, Mask)",
            "UV Layout": "Clean unwrapped UV mapping",
            "Formats": "FBX, Unitypackage, Blend",
            "Skeletal Rig": "Humanoid & Epic Skeleton compatible"
        },
        fabLink: "https://www.fab.com/portal/listings",
        unityLink: "https://assetstore.unity.com/packages/3d/characters/creatures/operatinglight-monster-medical-waste-series-389768",
        detailsTR: "Bring pure, surgical terror to your horror games with the OperatingLight Monster, the chilling first entry in the 'Medical Waste Monsters' series. Bu yüksek kaliteli ve tamamen animasyonlu karakter, modern korku oyunları için tasarlanmıştır. Ameliyat ışığı kafası ve özel ışık saldırıları ile kurbanlarını kör edebilir veya yavaşlatabilir. 8 bağımsız vücut parçası sayesinde dinamik uzuv kopma (dismemberment) sistemleriyle tam uyumludur.",
        detailsEN: "Bring pure, surgical terror to your horror games with the OperatingLight Monster, the chilling first entry in the 'Medical Waste Monsters' series. This high-quality, fully animated, and dismemberment-ready character is meticulously crafted for modern horror experiences, blending psychological dread with intense gameplay mechanics. Features a surgical light head capable of blinding, slowing, and draining the life force of victims.",
        animationsTR: [
            "Attack (Saldırı - 8 Çeşit)",
            "Attack Ground (Yerde Saldırı - 8 Çeşit)",
            "Attacked / Hit (Darbe Alma - 10 Çeşit)",
            "Buff (Güçlenme - 2 Çeşit)",
            "Dead (Ölüm - 2 Çeşit)",
            "Down / Fall (Düşme - 2 Çeşit)",
            "Movement Flying (Uçuş Hareketi - 8 Çeşit)",
            "Movement Ground (Yerde Hareket - 17 Çeşit)",
            "Stun (Sersemleme - 4 Çeşit)"
        ],
        animationsEN: [
            "Attack (8 variants)",
            "Attack Ground (8 variants)",
            "Attacked / Hit (10 variants)",
            "Buff (2 variants)",
            "Dead (2 variants)",
            "Down / Fall (2 variants)",
            "Movement Flying (8 variants)",
            "Movement Ground (17 variants)",
            "Stun (4 variants)"
        ]
    },
    {
        id: "amputee-wheelchair-monster",
        title: "Amputee Wheel Chair Monster",
        edition: "MEDICAL WASTE SERIES",
        tagClass: "red",
        image: "assets/images/whellchair.jpg",
        category: "animation",
        categoryTR: "Rig & Animasyon",
        categoryEN: "Rig & Animation",
        descTR: "Tıbbi Atık Canavarları serisinin ikinci üyesi: Tekerlekli sandalyeli, tamamen riglenmiş ve parçalanmaya hazır korku yaratığı karakteri.",
        descEN: "The second entry in the Medical Waste Monsters series: A fully rigged, dismemberment-ready wheelchair-bound horror creature.",
        featuresTR: [
            "Tekerlekli Sandalyeli Eşsiz Korku Canavarı Tasarımı",
            "Parçalanmaya (Dismemberment) Hazır İskelet Yapısı (Skeletal Mesh)",
            "Oyun İçi Kullanıma Hazır Korku Animasyonları Seti",
            "PBR Malzemeler ve Detaylı LOD Seviyeleri"
        ],
        featuresEN: [
            "Unique wheelchair-bound horror creature design",
            "Dismemberment-ready skeletal mesh structure",
            "Ready-to-use horror animation cycles",
            "PBR materials and detailed LOD configurations"
        ],
        specsTR: {
            "Poligon Sayısı": "Ortalama 18.000 Triangles",
            "Kaplamalar (Textures)": "PBR 4K Kaplamalar (Albedo, Normal, Mask)",
            "UV Düzeni": "Overlap edilmemiş temiz UV",
            "Formatlar": "FBX, Unitypackage, Blend",
            "Kemik Yapısı (Rig)": "Özel Tekerlekli Sandalye & Humanoid Rig Yapısı"
        },
        specsEN: {
            "Poly Count": "Average 18,000 Triangles",
            "Textures": "PBR 4K Textures (Albedo, Normal, Mask)",
            "UV Layout": "Clean unwrapped UV mapping",
            "Formats": "FBX, Unitypackage, Blend",
            "Skeletal Rig": "Custom wheelchair & humanoid joint setup"
        },
        fabLink: "https://www.fab.com/portal/listings",
        unityLink: "https://assetstore.unity.com/preview/401864/1455644",
        detailsTR: "Amputee Wheel Chair Monster, Tıbbi Atık Canavarları (Medical Waste Monsters) serisinin ikinci korkunç üyesidir. Tekerlekli sandalyesinde hareket eden bu canavar, oyuncular için son derece sıra dışı ve ürkütücü bir düşman dinamiği yaratır. Ameliyat izleri, paslanmış sandalye detayları ve yüksek çözünürlüklü kaplamaları ile hayatta kalma-korku oyunları için birebirdir. Dinamik parçalanma sistemleri ve ragdoll fizik yapılarıyla tam uyumludur.",
        detailsEN: "The Amputee Wheel Chair Monster is the second terrifying member of the 'Medical Waste Monsters' series. Moving on a wheelchair, this creature creates an unusual and scary enemy dynamic for players. Featuring surgical scars, rusted wheelchair details, and high-resolution textures, it is perfect for survival horror games. Fully compatible with dynamic dismemberment and ragdoll physics setups.",
        animationsTR: [
            "Sandalyede İlerleme (Movement)",
            "Saldırı Çeşitleri (Attacks)",
            "Darbe Alma (Hit Reactions)",
            "Ölüm ve Devrilme (Death & Roll-over)",
            "Bekleme (Idle)"
        ],
        animationsEN: [
            "Wheelchair movement cycles",
            "Attack animations",
            "Hit reactions",
            "Death and rollover states",
            "Idle animations"
        ]
    },
    {
        id: "magical-crystal-weapons",
        title: "Magical Crystal Weapons",
        edition: "DARK FANTASY EDITION",
        tagClass: "blue",
        image: "assets/images/weapons.jpg",
        category: "modeling",
        categoryTR: "Modelleme",
        categoryEN: "3D Modeling",
        categoryEN: "Rig & Animation",
        descTR: "Zırh ve pelerin simülasyonları destekleyen, oyun motorlarıyla tam uyumlu profesyonel savaşçı karakter rig sistemi.",
        descEN: "A professional warrior character rig system supporting armor and cape simulations, fully compatible with game engines.",
        featuresTR: [
            "İleri Seviye Humanoid Rig",
            "Pelerin ve Zırh Eklem Destekleri",
            "Kusursuz Skinning Ağırlıkları",
            "Unity ve Unreal Engine Uyumlu"
        ],
        featuresEN: [
            "Advanced Humanoid Rigging",
            "Cape and Armor Bone Addons",
            "Flawless Skinning Weights",
            "Unity & Unreal Engine Ready"
        ],
        specsTR: {
            "Kemik Sistemi": "Epic Skeleton & Unity Humanoid standartları",
            "Ekstra Kemikler": "12 adet pelerin ve omuzluk kemiği",
            "Maya Kontrol Paneli": "FK/IK geçişli gelişmiş rig kontrolcüleri",
            "Poligon": "12000 Triangles"
        },
        specsEN: {
            "Skeletal Standard": "Epic Skeleton & Unity Humanoid compatible",
            "Extra Bones": "12 helper bones for cape and shoulder armor",
            "Maya Control Rig": "Advanced controllers with FK/IK switching",
            "Poly Count": "12000 Triangles"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "İster kılıç dövüşleri ister büyü yapma animasyonları olsun, bu rig sistemi her türlü insansı hareketin hatasız bükülmelerle sergilenmesini sağlar. Pelerin ve ek zırh parçaları için yerleştirilen kemikler sayesinde fizik motorlarıyla uyumlu kumaş simülasyonları yapabilirsiniz.",
        detailsEN: "Whether for sword combat or spellcasting animations, this rigging system ensures all humanoid actions deform flawlessly. The bones added for the cape and armor pieces allow you to implement cloth simulations compatible with physics engines.",
        animationsTR: [],
        animationsEN: []
    }
];

// Default Seed Data for Journey
const defaultJourney = [
    {
        id: "journey-1",
        years: "2024 - 2026",
        roleTR: "Teknik Direktör (Unreal)",
        roleEN: "Technical Director (Unreal)",
        companyTR: "LucyRobot - Sanal Robotik Eğitim Simülatörü",
        companyEN: "LucyRobot - Virtual Robotics Training Simulator",
        descTR: "Projede gerçek zamanlı simülasyon mimarisini, arayüz sistemlerini, sinematik iş akışlarını ve animasyon sistemlerini tasarlayıp uygulayarak projenin geliştirme ekiplerine aktarımını sağladım.",
        descEN: "Designed and implemented full real-time simulation architecture, UI systems, cinematic workflows, and animation systems. Delivered full production pipeline independently and transferred project to senior engineering team with structured documentation."
    },
    {
        id: "journey-2",
        years: "2019 - 2024",
        roleTR: "Teknik Direktör / Proje Lideri",
        roleEN: "Technical Director / Project Lead",
        companyTR: "Roco Game Studio",
        companyEN: "Roco Game Studio",
        descTR: "MMORPG üretimi için tüm animasyon ve rig mimarisini tasarladım. Ölçeklenebilir Unreal Engine locomotion sistemini kurdum, karakter rig standartlarını ve animasyon iş akışlarını belirledim.",
        descEN: "Designed full animation and rigging architecture for MMORPG production. Built scalable Unreal locomotion system, established character rig standards, and animation workflows. Provided technical decision-making across UI, animation, shaders, and modeling."
    },
    {
        id: "journey-3",
        years: "2023 - 2024",
        roleTR: "Rig ve Animasyon Mimarı",
        roleEN: "Rigging & Animation Architect",
        companyTR: "ZeroSpace (Serbest Çalışan)",
        companyEN: "ZeroSpace (Freelance)",
        descTR: "Üretim dostu karakter rig sistemleri tasarladım ve animasyon hattı (pipeline) yapısını kurdum.",
        descEN: "Designed production-ready character rig systems and established animation pipeline structure."
    },
    {
        id: "journey-4",
        years: "2017 - 2019",
        roleTR: "Etkileşimli Uygulama Geliştiricisi (Unity)",
        roleEN: "Interactive Application Developer (Unity)",
        companyTR: "Müze İnteraktif Projeleri (Sanal Gerçeklik / Artırılmış Gerçeklik)",
        companyEN: "Museum Interactive Projects (VR/AR)",
        descTR: "Sürükleyici gerçek zamanlı etkileşimli sistemler tasarladım. Kinect tabanlı etkileşim mimarisini uyguladım ve çok lokasyonlu kurumsal enstalasyonlar kurdum.",
        descEN: "Designed immersive real-time interactive systems. Implemented Kinect-based interaction architecture and delivered multi-location institutional installations."
    },
    {
        id: "journey-5",
        years: "2010 - 2015",
        roleTR: "İnteraktif Uygulama Geliştiricisi ve Animatör (Unity)",
        roleEN: "Interactive Application Developer & Animator (Unity)",
        companyTR: "Dijital Sahne Şirketi",
        companyEN: "Dijital Sahne Company",
        descTR: "Büyük ölçekli projeler için interaktif sistemler ve Kinect tabanlı uygulamalar geliştirdim, animasyon ve etkileşim kurgularını hazırladım.",
        descEN: "Designed immersive real-time interactive systems. Implemented Kinect-based interaction architecture and delivered multi-location institutional installations."
    }
];

// Helper database controller
const db = {
    // --------------------------------------------------
    // INIT METHOD
    // --------------------------------------------------
    init() {
        if (!localStorage.getItem('assetsData')) {
            localStorage.setItem('assetsData', JSON.stringify(defaultAssets));
        }
        if (!localStorage.getItem('journeyData')) {
            localStorage.setItem('journeyData', JSON.stringify(defaultJourney));
        }
        // Force upgrade database to load CV entries automatically
        if (!localStorage.getItem('db_version_cv_updated_v3')) {
            localStorage.setItem('journeyData', JSON.stringify(defaultJourney));
            localStorage.setItem('db_version_cv_updated_v3', 'true');
        }
        // Force upgrade database to load GCstudio only real assets v5
        if (!localStorage.getItem('db_version_only_real_assets_v5')) {
            localStorage.setItem('assetsData', JSON.stringify(defaultAssets));
            localStorage.setItem('db_version_only_real_assets_v5', 'true');
        }
    },

    // --------------------------------------------------
    // ASSET CRUD
    // --------------------------------------------------
    getAssets() {
        this.init();
        return JSON.parse(localStorage.getItem('assetsData'));
    },

    saveAssets(assets) {
        localStorage.setItem('assetsData', JSON.stringify(assets));
    },

    addAsset(asset) {
        const assets = this.getAssets();
        assets.push(asset);
        this.saveAssets(assets);
    },

    updateAsset(id, updatedAsset) {
        let assets = this.getAssets();
        assets = assets.map(a => a.id === id ? { ...a, ...updatedAsset } : a);
        this.saveAssets(assets);
    },

    deleteAsset(id) {
        let assets = this.getAssets();
        assets = assets.filter(a => a.id !== id);
        this.saveAssets(assets);
    },

    // --------------------------------------------------
    // JOURNEY CRUD
    // --------------------------------------------------
    getJourney() {
        this.init();
        return JSON.parse(localStorage.getItem('journeyData'));
    },

    saveJourney(journey) {
        localStorage.setItem('journeyData', JSON.stringify(journey));
    },

    addJourneyItem(item) {
        const journey = this.getJourney();
        journey.push(item);
        this.saveJourney(journey);
    },

    updateJourneyItem(id, updatedItem) {
        let journey = this.getJourney();
        journey = journey.map(j => j.id === id ? { ...j, ...updatedItem } : j);
        this.saveJourney(journey);
    },

    deleteJourneyItem(id) {
        let journey = this.getJourney();
        journey = journey.filter(j => j.id !== id);
        this.saveJourney(journey);
    }
};

// Initialize on script load
db.init();

// Export to window object for global availability in client scripts
window.db = db;
window.assetsData = db.getAssets(); // Backward compatibility overlay
