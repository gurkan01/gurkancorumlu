/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO - DATABASE MANAGER (db.js)
   ========================================================================== */

// Default Seed Data for Assets
const defaultAssets = [
    {
        id: "medieval-weapons",
        title: "Medieval Weapons Pack",
        edition: "STANDARD EDITION",
        tagClass: "",
        image: "assets/images/project_preview.png",
        category: "modeling",
        categoryTR: "Modelleme",
        categoryEN: "3D Modeling",
        descTR: "Oyunlarınız için hazır, düşük poligonlu ve yüksek kaliteli PBR kaplamalara sahip 15 parçalık Orta Çağ silah seti.",
        descEN: "A 15-piece medieval weapon set with low-poly optimization and high-quality PBR textures, ready for your games.",
        featuresTR: [
            "Düşük Poligon (Low-Poly) Modeller",
            "2K & 4K PBR Metalness Kaplamalar",
            "Özel Collider ve Pivot Noktaları",
            "Unity Prefab & URP Uyumlu"
        ],
        featuresEN: [
            "Low-Poly Mesh Geometry",
            "2K & 4K PBR Metalness Textures",
            "Custom Colliders & Pivot Points",
            "Unity Prefab & URP Compatible"
        ],
        specsTR: {
            "Poligon Sayısı": "Ort. Paket başı 1200 - 3500 Triangles",
            "Kaplamalar (Textures)": "PBR Albedo, Normal, Metallic/Smoothness (2048x2048)",
            "UV Düzeni": "Overlap Yapılmamış Temiz UV Map",
            "Formatlar": "FBX, Unitypackage, Blend",
            "Collider Türü": "Özel Mesh Collider"
        },
        specsEN: {
            "Poly Count": "Avg. 1200 - 3500 Triangles per asset",
            "Textures": "PBR Albedo, Normal, Metallic/Smoothness (2048x2048)",
            "UV Layout": "Clean Unwrapped UV Map (No overlapping)",
            "Formats": "FBX, Unitypackage, Blend",
            "Collider Type": "Custom Mesh Colliders"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "Bu paket, tarihi savaş ve RPG oyunlarında kullanılmak üzere tasarlanmış 15 adet tarihi Orta Çağ silahı içerir (Kılıçlar, baltalar, kalkanlar, mızraklar ve yaylar). Tüm nesneler oyun içi performansı maksimumda tutacak şekilde düşük poligon sayıları ve LOD seviyeleriyle optimize edilmiştir. Substance Painter yardımıyla üretilen PBR kaplamaları hem gerçekçi hem de stylized projelerde üst düzey duracak esnekliktedir.",
        detailsEN: "This pack features 15 historical medieval weapons including swords, axes, shields, spears, and bows designed for historical combat and RPG games. All assets are optimized with low polygon counts and LOD support to maximize in-game performance. The PBR texture sets produced with Substance Painter provide the flexibility to look outstanding in both realistic and stylized projects.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "modular-scifi",
        title: "Modular Sci-Fi Base Kit",
        edition: "DELUXE EDITION",
        tagClass: "gold",
        image: "assets/images/project_preview.png",
        category: "modeling",
        categoryTR: "Modelleme",
        categoryEN: "3D Modeling",
        descTR: "Snap-to-grid uyumlu parçalar ile kendi bilim kurgu üslerinizi ve koridorlarınızı tasarlayabileceğiniz modüler çevre paketi.",
        descEN: "A modular environment pack allowing you to design your own sci-fi bases and corridors with snap-to-grid compatible parts.",
        featuresTR: [
            "Snap-to-Grid Uyumlu Mesh Yapısı",
            "Yüksek Detaylı UV Düzenleri",
            "LOD (Level of Detail) Desteği",
            "Unity URP/HDRP & Unreal Engine Hazır"
        ],
        featuresEN: [
            "Snap-to-Grid Mesh Layout",
            "High-Detail UV Configurations",
            "LOD (Level of Detail) Support",
            "Unity URP/HDRP & Unreal Engine Ready"
        ],
        specsTR: {
            "Modüler Parça Sayısı": "45 adet (Duvarlar, tavanlar, zeminler, kapılar, sütunlar)",
            "Kaplamalar (Textures)": "PBR Channel Packed (Albedo, Normal, Mask (Metallic, AO, Smoothness)) (4096x4096)",
            "UV Düzeni": "Dikişsiz Modüler UV Atlasing",
            "LOD Seviyeleri": "LOD0, LOD1, LOD2 entegreli",
            "Oyun Motoru": "Unity & Unreal Engine için hazır prefabs"
        },
        specsEN: {
            "Modular Parts": "45 pieces (Walls, ceilings, floors, doors, pillars)",
            "Textures": "PBR Channel Packed (Albedo, Normal, Mask (Metallic, AO, Smoothness)) (4096x4096)",
            "UV Layout": "Seamless Modular UV Atlasing",
            "LOD Levels": "LOD0, LOD1, LOD2 integrated",
            "Engine Support": "Ready prefabs for Unity & Unreal Engine"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "Modular Sci-Fi Base Kit, iç mekân uzay istasyonları, bilim kurgu laboratuvarları ve fütüristik sığınaklar oluşturmak için eksiksiz bir mimari kittir. Grid sistemine tam oturan (snap-to-grid) tasarımı sayesinde dakikalar içinde benzersiz haritalar tasarlayabilirsiniz. Malzemeler, draw call sayısını minimize edecek şekilde tek bir atlas üzerinden okunur, bu da mobil ve VR projelerinde bile mükemmel performans sunar.",
        detailsEN: "The Modular Sci-Fi Base Kit is a complete architectural set for creating interior space stations, sci-fi labs, and futuristic bunkers. With its design snapping perfectly to the grid, you can assemble unique maps in minutes. Materials read from a single atlas to minimize draw calls, providing excellent performance even in mobile and VR projects.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "stylized-dragon",
        title: "Stylized Dragon Set",
        edition: "COMPLETE EDITION",
        tagClass: "red",
        image: "assets/images/project_preview.png",
        category: "animation",
        categoryTR: "Rig & Animasyon",
        categoryEN: "Rig & Animation",
        descTR: "Tamamen riglenmiş ve 18 adet hazır animasyona sahip (uçuş, saldırı, kükreme vb.) stylized ejderha karakter seti.",
        descEN: "A stylized dragon character set, fully rigged with 18 ready-to-use animations (flight, combat, roar, etc.).",
        featuresTR: [
            "El Yapımı (Hand-painted) Kaplamalar",
            "Komple Karakter Kemik Sistemi (Rig)",
            "18 Adet Hazır Animasyon Seti",
            "Unity Animator Controller Dahil"
        ],
        featuresEN: [
            "Hand-Painted Stylized Textures",
            "Complete Character Rig System",
            "18 Ready Animation Cycles",
            "Unity Animator Controller Included"
        ],
        specsTR: {
            "Kemik Sayısı (Bones)": "52 Eklem (İleri seviye kanat ve kuyruk rigleri dahil)",
            "Poligon Sayısı": "8500 Triangles (Oyun içi düşman ve binek optimizasyonlu)",
            "Kaplamalar (Textures)": "Stylized Hand-painted Albedo, Emissive Map (2048x2048)",
            "IK/FK Desteği": "Maya Control Rig dosyaları dahil",
            "Animator Controller": "Hazır durum geçiş ağacı (Idle, Flight, Attack, Death)"
        },
        specsEN: {
            "Bone Count": "52 Joints (Including advanced wing and tail rigs)",
            "Poly Count": "8500 Triangles (Optimized for in-game enemies and mounts)",
            "Textures": "Stylized Hand-painted Albedo, Emissive Map (2048x2048)",
            "IK/FK Support": "Maya source files included",
            "Animator Controller": "Ready state transition machine (Idle, Flight, Attack, Death)"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "Bu paket, fantezi ve RPG oyunları için tasarlanmış el boyaması (hand-painted) kaplamalı stylized bir ejderha karakteridir. İleri düzey rig sistemi sayesinde kanat bükülmeleri, kuyruk dalgalanmaları ve çene kemikleri kusursuz şekilde hareket eder. Paketle birlikte gelen 18 adet el yapımı (keyframe) animasyon seti, ejderhanın tüm oyun içi ihtiyaçlarını karşılayacak çeşitliliktedir.",
        detailsEN: "This pack features a hand-painted stylized dragon character designed for fantasy and RPG games. The advanced rigging system provides seamless wing bends, tail swings, and jaw movements. The package includes 18 handcrafted (keyframe) animation cycles, covering all in-game behaviors required for a complete creature setup.",
        animationsTR: [
            "Idle (Ayakta Bekleme)",
            "Fly Idle (Havada Bekleme)",
            "Walk (Yürüme)",
            "Fly Forward (Uçuş)",
            "Breathe Fire (Ateş Püskürme)",
            "Breathe Fire Fly (Havada Ateş Püskürme)",
            "Claw Attack (Pençe Saldırısı)",
            "Tail Whip (Kuyruk Saldırısı)",
            "Roar (Kükreme)",
            "Take Damage (Hasar Alma)",
            "Die (Ölüm)",
            "Fly Die (Uçarken Düşme)"
        ],
        animationsEN: [
            "Idle",
            "Fly Idle",
            "Walk",
            "Fly Forward",
            "Breathe Fire",
            "Breathe Fire Fly",
            "Claw Attack",
            "Tail Whip",
            "Roar",
            "Take Damage",
            "Die",
            "Fly Die"
        ]
    },
    {
        id: "cyberpunk-props",
        title: "Cyberpunk City Props",
        edition: "STANDARD EDITION",
        tagClass: "",
        image: "assets/images/project_preview.png",
        category: "modeling",
        categoryTR: "Modelleme",
        categoryEN: "3D Modeling",
        descTR: "Neon tabelalar, havalandırma üniteleri ve sokak bariyerleri içeren 25 parçalık Cyberpunk sokak dekorasyonu seti.",
        descEN: "A 25-piece Cyberpunk street decoration set containing neon signs, ventilation units, and street barriers.",
        featuresTR: [
            "Emissive Neon Işıklı Dokular",
            "Yıpranmış Metal PBR Dokuları",
            "Modüler Sokak Elemanları",
            "Collider ve Prefab Kurulumu Yapılmış"
        ],
        featuresEN: [
            "Emissive Neon Glowing Textures",
            "Weathered Metal PBR Textures",
            "Modular Street Elements",
            "Pre-configured Colliders & Prefabs"
        ],
        specsTR: {
            "Parça Sayısı": "25 adet dekorasyon nesnesi",
            "Poligon Aralığı": "500 - 2500 Triangles",
            "Kaplamalar (Textures)": "PBR Albedo, Normal, Emissive, Roughness (2048x2048)",
            "UV Düzeni": "Optimize edilmiş tek bir kanalda açılmış UV"
        },
        specsEN: {
            "Asset Count": "25 decoration items",
            "Poly Range": "500 - 2500 Triangles",
            "Textures": "PBR Albedo, Normal, Emissive, Roughness (2048x2048)",
            "UV Layout": "Optimized UV unwrapped in a single channel"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "Cyberpunk fütüristik sokak ortamları tasarlamak için ideal olan bu paketteki tüm nesneler yüksek kaliteli yıpranma detayları ve neon ışıklandırmaları (emissive maps) ile donatılmıştır. Oyun sahnelerinizde performans dostu arka plan detayları oluşturmanızı sağlar.",
        detailsEN: "Ideal for designing Cyberpunk futuristic street environments, all assets in this pack come equipped with high-quality weathering details and glowing neon lighting (emissive maps). It helps you build performance-friendly background details for your scenes.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "fantasy-warrior-rig",
        title: "Fantasy Warrior Rig",
        edition: "DELUXE EDITION",
        tagClass: "gold",
        image: "assets/images/project_preview.png",
        category: "rigging",
        categoryTR: "Rig & Animasyon",
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
    },
    {
        id: "humanoid-anim-pack",
        title: "Humanoid Animation Pack",
        edition: "COMPLETE EDITION",
        tagClass: "red",
        image: "assets/images/project_preview.png",
        category: "animation",
        categoryTR: "Rig & Animasyon",
        categoryEN: "Rig & Animation",
        descTR: "Herhangi bir humanoid karaktere anında uygulayabileceğiniz 25 adet temel hareket ve dövüş animasyonu döngüsü.",
        descEN: "25 essential movement and combat animation loops that can be applied to any humanoid character instantly.",
        featuresTR: [
            "Kök Hareket (Root Motion) Desteği",
            "Kusursuz Başlangıç/Bitiş Döngüleri",
            "Unity Mecanim Animator Kurulumu",
            "FBX Kaynak Animasyon Dosyaları"
        ],
        featuresEN: [
            "Root Motion Support Included",
            "Seamless Start/End Loop Cycles",
            "Unity Mecanim Animator Setup",
            "FBX Source Animation Files"
        ],
        specsTR: {
            "Animasyon Sayısı": "25 adet el yapımı animasyon",
            "FPS Değeri": "60 FPS fırınlanmış veri",
            "Root Motion": "Aktif / İnaktif sürümleri dahil",
            "Dosya Formatları": "FBX, Unitypackage, Maya animasyon kaynakları"
        },
        specsEN: {
            "Animations": "25 handcrafted animation files",
            "Frame Rate": "60 FPS baked motion data",
            "Root Motion": "Both Enabled / Disabled versions provided",
            "File Formats": "FBX, Unitypackage, Maya source files"
        },
        fabLink: "https://www.fab.com",
        unityLink: "https://assetstore.unity.com",
        detailsTR: "Yürüme, koşma, zıplama, yuvarlanma, kılıç çekme, iki farklı kombo saldırısı ve ölüm gibi temel oyun mekaniklerini içeren bu paket, oyun prototiplerinizi veya bitmiş projelerinizi canlandırmak için en hızlı çözümdür.",
        detailsEN: "Including core game mechanics such as walking, running, jumping, rolling, drawing sword, two combo attacks, and death, this package is the fastest solution to breathe life into your game prototypes or finished projects.",
        animationsTR: [
            "Locomotion Idle (Bekleme)",
            "Run Forward (İleri Koşu)",
            "Walk Forward (Yürüme)",
            "Sprint (Hızlı Koşu)",
            "Jump Start (Zıplama Başlangıç)",
            "Jump Loop (Zıplama Havada)",
            "Jump Land (Yere İniş)",
            "Roll Forward (Takla)",
            "Equip Sword (Kılıç Çekme)",
            "Sword Idle (Kılıçlı Bekleme)",
            "Slash Combo A (Kombo A)",
            "Slash Combo B (Kombo B)",
            "Get Hit (Darbe Alma)",
            "Death (Ölüm)"
        ],
        animationsEN: [
            "Locomotion Idle",
            "Run Forward",
            "Walk Forward",
            "Sprint",
            "Jump Start",
            "Jump Loop",
            "Jump Land",
            "Roll Forward",
            "Equip Sword",
            "Sword Idle",
            "Slash Combo A",
            "Slash Combo B",
            "Get Hit",
            "Death"
        ]
    }
];

// Default Seed Data for Journey
const defaultJourney = [
    {
        id: "journey-1",
        years: "2024 - BUGÜN",
        roleTR: "Bağımsız 3D Varlık Yayıncısı",
        roleEN: "Independent 3D Publisher",
        companyTR: "Fab & Unity Asset Store",
        companyEN: "Fab & Unity Asset Store",
        descTR: "Oyun geliştiricileri için hazır paketler tasarlıyorum. Modellerin optimizasyonu, UV açılımı, rig ve animasyon süreçlerinin tamamını kendim üstlenerek mağazalarda yayınlıyorum.",
        descEN: "Designing ready-to-use packs for game developers. I manage the entire pipeline including modeling optimization, UV mapping, rigging, and animations for publishing on asset stores."
    },
    {
        id: "journey-2",
        years: "2022 - 2024",
        roleTR: "Teknik Animasyon Sorumlusu",
        roleEN: "Technical Animator",
        companyTR: "Oyun Stüdyoları",
        companyEN: "Game Studios",
        descTR: "Karakterlerin rig sistemlerini kurdum, animasyon döngüleri hazırladım. Unity ve Unreal Engine içerisinde animasyon geçiş ağaçlarını (Animator Controller) optimize ettim.",
        descEN: "Built rigging systems for characters and crafted animation loops. Optimized state transitions and animation blend trees (Animator Controller) in Unity and Unreal Engine."
    },
    {
        id: "journey-3",
        years: "2020 - 2022",
        roleTR: "3D Modelleme ve UV Sanatçısı",
        roleEN: "3D Modeling & UV Artist",
        companyTR: "Serbest Çalışan (Freelance)",
        companyEN: "Freelance",
        descTR: "Çeşitli indie oyun projeleri için hard-surface çevre modelleri ve karakter tasarımları yaptım. Temiz UV açılımı ve Substance Painter ile dokulandırma işlerini yürüttüm.",
        descEN: "Created hard-surface environments and character designs for various indie game projects. Conducted clean UV mapping and texturing workflows using Substance Painter."
    },
    {
        id: "journey-4",
        years: "2016 - 2020",
        roleTR: "Görsel Tasarım ve Animasyon Eğitimi",
        roleEN: "Visual Design & Animation",
        companyTR: "Güzel Sanatlar Akademisi",
        companyEN: "Academy of Fine Arts",
        descTR: "3D modelleme prensipleri, kemik sistemleri (rigging), anatomi, animasyonun 12 kuralı ve oyun motoru entegrasyonu üzerine akademik ve pratik eğitim aldım.",
        descEN: "Received academic and practical training on 3D modeling principles, skeletal rigging systems, anatomy, the 12 rules of animation, and game engine deployment."
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
