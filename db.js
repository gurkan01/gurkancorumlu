/* ==========================================================================
   GÜRKAN ÇORUMLU PORTFOLIO - DATABASE MANAGER (db.js)
   Product data mirrors the live listings on Fab (seller: Gcorum) and
   Unity Asset Store (publisher: GCstudio).
   ========================================================================== */

const STORE_LINKS = {
    fab: "https://www.fab.com/sellers/Gcorum",
    unity: "https://assetstore.unity.com/publishers/150432"
};

const IMG = (slug, n) => `assets/images/products/${slug}/${n}.jpg`;
const GALLERY = (slug, count) => Array.from({ length: count }, (_, i) => IMG(slug, `g${i + 1}`));

// Default Seed Data for Assets
const defaultAssets = [
    {
        id: "operatinglight-monster",
        title: "OperatingLight Monster",
        edition: "MEDICAL WASTE SERIES",
        tagClass: "red",
        image: IMG("operatinglight-monster", "cover"),
        gallery: GALLERY("operatinglight-monster", 6),
        category: "models",
        categoryTR: "Karakter & Animasyon",
        categoryEN: "Character & Animation",
        engines: ["Unreal Engine", "Unity (URP)"],
        descTR: "Medical Waste Monsters serisinin ilk karakteri: ameliyat lambası kafalı, tamamen animasyonlu ve parçalanmaya hazır bir korku yaratığı.",
        descEN: "The first entry in the Medical Waste Monsters series: a fully animated, dismemberment-ready horror creature with a surgical-light head.",
        featuresTR: [
            "8 iskelet mesh (1 tam vücut + 7 kopabilir parça)",
            "41 animasyon (UE) / 50 animasyon (Unity)",
            "Işık tabanlı saldırılar için kafa soketi ve FX",
            "Kan, iz ve kesilmiş uzuv efektleri dahil"
        ],
        featuresEN: [
            "8 skeletal meshes (1 full body + 7 severable parts)",
            "41 animations (UE) / 50 animations (Unity)",
            "Head socket and FX for light-based attacks",
            "Blood, weapon-trail and severed-limb FX included"
        ],
        specsTR: {
            "Üçgen Sayısı": "16.338 tris (tam vücut)",
            "Vertex Sayısı": "14.324",
            "LOD": "4 seviye",
            "Kaplamalar": "42 doku, karakter için 4096×4096 PBR",
            "Animasyon": "Root Motion ve In-Place",
            "Motorlar": "Unreal Engine (Fab) · Unity URP (Asset Store)"
        },
        specsEN: {
            "Triangle Count": "16,338 tris (full body)",
            "Vertex Count": "14,324",
            "LODs": "4 levels",
            "Textures": "42 textures, 4096×4096 PBR on the character",
            "Animation": "Root Motion & In-Place",
            "Engines": "Unreal Engine (Fab) · Unity URP (Asset Store)"
        },
        fabLink: "https://www.fab.com/listings/1c35c27d-80b7-4446-a4e9-4f7a563aee08",
        unityLink: "https://assetstore.unity.com/packages/3d/characters/creatures/operatinglight-monster-medical-waste-series-389768",
        videoLink: "https://youtu.be/Zkypjb3VpwA",
        detailsTR: "OperatingLight Monster, \"Medical Waste Monsters\" serisinin ilk karakteri. Kafasındaki ameliyat lambasıyla kurbanlarını kör eden, yavaşlatan ve canını emen bu yaratık, modern korku oyunları için tasarlandı. Karakter 1 tam vücut ve 7 ayrı parçadan oluşan 8 iskelet mesh ile gelir; fizik ve ragdoll ayarları hazır olduğu için dinamik uzuv kopma sistemlerine doğrudan bağlanır. Uyuyan ve uyanmış/şarj olmuş iki durumlu davranış seti, yön bazlı darbe tepkileri ve özel \"Light Blast\" menzilli saldırısı pakete dahildir.",
        detailsEN: "OperatingLight Monster is the first entry in the \"Medical Waste Monsters\" series. Its surgical-light head blinds, slows and drains the life of its victims, built for modern horror games. The character ships as 8 skeletal meshes (1 full body + 7 separate parts) with physics and ragdoll already configured, so it plugs straight into dynamic dismemberment systems. A two-state behaviour set (asleep vs. awake/charged), directional hit reactions and a dedicated \"Light Blast\" ranged attack are included.",
        animationsTR: [
            "Saldırı (8)",
            "Yerde saldırı (8)",
            "Darbe alma (10)",
            "Güçlenme (2)",
            "Ölüm (2)",
            "Düşme (2)",
            "Uçarak hareket (8)",
            "Yerde hareket (17)",
            "Sersemleme (4)"
        ],
        animationsEN: [
            "Attack (8)",
            "Attack ground (8)",
            "Hit reactions (10)",
            "Buff (2)",
            "Death (2)",
            "Down / fall (2)",
            "Flying movement (8)",
            "Ground movement (17)",
            "Stun (4)"
        ]
    },
    {
        id: "amputee-wheelchair-monster",
        title: "Amputee Wheelchair Monster",
        edition: "MEDICAL WASTE SERIES",
        tagClass: "red",
        image: IMG("amputee-wheelchair-monster", "cover"),
        gallery: GALLERY("amputee-wheelchair-monster", 2),
        category: "models",
        categoryTR: "Karakter & Animasyon",
        categoryEN: "Character & Animation",
        engines: ["Unreal Engine", "Unity (URP)"],
        descTR: "Medical Waste Monsters serisinin ikinci karakteri: eski bir tekerlekli sandalyeye bağlı, yakın mesafede acımasızca saldıran bir korku yaratığı.",
        descEN: "The second entry in the Medical Waste Monsters series: a horror creature bound to an old wheelchair that hunts players at close range.",
        featuresTR: [
            "33 animasyon: bekleme, hareket, saldırı, darbe, ölüm",
            "Root Motion ve In-Place sürümleri",
            "Özel collision ve 4 LOD seviyesi",
            "Ek eklenti gerektirmez"
        ],
        featuresEN: [
            "33 animations: idle, movement, attack, hit, death",
            "Root Motion and In-Place versions",
            "Custom collision and 4 LOD levels",
            "No additional plugins required"
        ],
        specsTR: {
            "Vertex Sayısı": "11.699",
            "LOD": "4 seviye (LOD0–LOD3)",
            "Materyaller": "10 materyal, 21 materyal örneği",
            "Kaplamalar": "42 doku, 4096×4096'ya kadar",
            "Collision": "Özel",
            "Motorlar": "Unreal Engine 4.26–5.8 · Unity URP"
        },
        specsEN: {
            "Vertex Count": "11,699",
            "LODs": "4 levels (LOD0–LOD3)",
            "Materials": "10 materials, 21 material instances",
            "Textures": "42 textures, up to 4096×4096",
            "Collision": "Custom",
            "Engines": "Unreal Engine 4.26–5.8 · Unity URP"
        },
        fabLink: "https://www.fab.com/listings/3edaa8b5-4b7c-478d-816a-7b3234ad6712",
        unityLink: "https://assetstore.unity.com/packages/3d/characters/creatures/amputee-wheel-chair-monster-medical-waste-series-401864",
        videoLink: "",
        detailsTR: "Amputee Wheelchair Monster, \"Medical Waste Monsters\" serisinin ikinci karakteri. Eski bir tekerlekli sandalyeye bağlı bu yaratık, oyuncuyu hızlı ve sert yakın dövüş saldırılarıyla kovalayarak sürekli gerilim yaratır. Hayatta kalma-korku, FPS ve aksiyon oyunlarında; terk edilmiş hastane, akıl hastanesi ve karanlık temalı ortamlarda kullanılmak üzere tasarlandı. 33 animasyonun hem Root Motion hem In-Place sürümü pakette yer alır.",
        detailsEN: "Amputee Wheelchair Monster is the second entry in the \"Medical Waste Monsters\" series. Bound to an old wheelchair, it chases players with fast, brutal melee attacks and keeps the tension constant. It is built for survival horror, FPS and action games set in abandoned hospitals, asylums and other dark environments. All 33 animations come in both Root Motion and In-Place versions.",
        animationsTR: [
            "Bekleme (Idle)",
            "Sandalyeyle hareket",
            "Yakın dövüş saldırıları",
            "Darbe tepkileri",
            "Ölüm animasyonları"
        ],
        animationsEN: [
            "Idle",
            "Wheelchair movement",
            "Melee attacks",
            "Hit reactions",
            "Death animations"
        ]
    },
    {
        id: "magical-crystal-weapons",
        title: "Magical Crystal Weapons",
        edition: "DARK FANTASY",
        tagClass: "blue",
        image: IMG("magical-crystal-weapons", "cover"),
        gallery: GALLERY("magical-crystal-weapons", 6),
        category: "models",
        categoryTR: "3D Model & Silah",
        categoryEN: "3D Model & Weapons",
        engines: ["Unreal Engine"],
        descTR: "Kristal enerjisiyle parlayan karanlık fantazi silah seti; VFX, ses efektleri ve animasyonlarla birlikte gelir.",
        descEN: "A dark fantasy weapon set glowing with crystal energy, shipped with VFX, sound effects and animations.",
        featuresTR: [
            "Tüfek, arbalet, asa, bıçak ve revolver (ok ve mermi dahil)",
            "26 animasyon, 4 Niagara sistemi",
            "9 ses efekti: ateşleme, uğultu, isabet",
            "3 LOD seviyesi, collision hazır"
        ],
        featuresEN: [
            "Rifle, crossbow, staff, knife and revolver (arrows and bullets included)",
            "26 animations, 4 Niagara systems",
            "9 sound effects: firing, idle hum, impacts",
            "3 LOD levels, collision ready"
        ],
        specsTR: {
            "Mesh Sayısı": "9 (4 iskelet, 5 statik)",
            "Üçgen Sayısı": "Silah başına 2.069–5.873 tris",
            "LOD": "3 seviye",
            "Kaplamalar": "28 doku, 4096×4096 (BaseColor, Normal, Emissive, ORM)",
            "VFX & Ses": "4 Niagara sistemi, 9 ses dosyası",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Mesh Count": "9 (4 skeletal, 5 static)",
            "Triangle Count": "2,069–5,873 tris per weapon",
            "LODs": "3 levels",
            "Textures": "28 textures, 4096×4096 (BaseColor, Normal, Emissive, ORM)",
            "VFX & Audio": "4 Niagara systems, 9 sound waves",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/0ac68787-0d3d-4c74-915d-d988cd8f73e4",
        unityLink: "",
        videoLink: "https://youtu.be/7kWJyLN_UxE",
        detailsTR: "Magical Crystal Weapons, karanlık fantazi ve korku estetiğiyle tasarlanmış büyülü silahlardan oluşur: koyu ahşap, bozulmuş parlayan kristaller ve eski rünler. Her silah kristal büyü efektleri ve özel ses efektleriyle birlikte gelir; doğrudan oyun motoruna sürüklenip kullanılabilir. Karanlık RPG'ler ve hayatta kalma-korku oyunları için uygundur.",
        detailsEN: "Magical Crystal Weapons is a set of magical weapons with a dark fantasy and horror look: dark wood, glowing corrupted crystals and ancient runes. Every weapon comes with crystal spell effects and custom sound effects and is ready to drop into your project. A good fit for dark RPGs and survival horror games.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "medieval-rpg-vfx",
        title: "Medieval RPG VFX",
        edition: "160 NIAGARA EFFECTS",
        tagClass: "gold",
        image: IMG("medieval-rpg-vfx", "cover"),
        gallery: GALLERY("medieval-rpg-vfx", 6),
        category: "vfx",
        categoryTR: "Niagara VFX",
        categoryEN: "Niagara VFX",
        engines: ["Unreal Engine"],
        descTR: "Ortaçağ fantazi oyunları için 160 stilize Niagara efekti: 8 elementte büyüler, yakın dövüş ve okçuluk, buff/debuff ve ortam efektleri.",
        descEN: "160 stylized Niagara effects for medieval fantasy games: spells in 8 elements, melee and archery, buffs/debuffs and ambience.",
        featuresTR: [
            "8 element büyüsü (76): ateş, buz, şimşek, kutsal, gölge…",
            "Dövüş (29): kılıç kombo, ok izleri, gizlilik",
            "Buff, debuff ve durum efektleri (14)",
            "Ortam (24) ve oyun geri bildirimi (17)"
        ],
        featuresEN: [
            "Spells in 8 elements (76): fire, ice, lightning, holy, shadow…",
            "Combat (29): sword combos, arrow trails, stealth",
            "Buffs, debuffs and status effects (14)",
            "Ambience (24) and gameplay feedback (17)"
        ],
        specsTR: {
            "Efekt Sayısı": "160 Niagara sistemi",
            "Özelleştirme": "Belgelenmiş User Parameter'lar",
            "Kategoriler": "Büyü, dövüş, durum, ortam, geri bildirim",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Effect Count": "160 Niagara systems",
            "Customization": "Documented User Parameters",
            "Categories": "Spells, combat, status, ambience, feedback",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/17a4b8ff-6368-4e68-a09e-040ea1b30f60",
        unityLink: "",
        videoLink: "https://youtu.be/hrZo653fhxs",
        detailsTR: "Medieval RPG VFX, ortaçağ fantazi oyunları için tutarlı bir efekt kütüphanesi. Her element için Cast, Projectile, Impact, Nova, Zone ve Aura efektlerinin yanında Meteor, Blizzard, Chain Lightning, Resurrect, Summoning Portal gibi imza büyüler bulunur. Kılıç kombo ve ok efektlerinden meşale, kamp ateşi, sis ve portal gibi ortam efektlerine, ganimet ışını ve görev işaretçisi gibi oyun geri bildirimlerine kadar her efekt belgelenmiş parametrelerle özelleştirilebilir.",
        detailsEN: "Medieval RPG VFX is a consistent effect library for medieval fantasy games. Each element has Cast, Projectile, Impact, Nova, Zone and Aura effects, plus signature spells such as Meteor, Blizzard, Chain Lightning, Resurrect and Summoning Portal. From sword combos and arrow effects to torches, campfires, fog and portals, and gameplay feedback like loot beams and quest markers, every effect is customizable through documented parameters.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "fps-mobile-vfx",
        title: "FPS Mobile VFX",
        edition: "MOBILE OPTIMIZED",
        tagClass: "",
        image: IMG("fps-mobile-vfx", "cover"),
        gallery: GALLERY("fps-mobile-vfx", 6),
        category: "vfx",
        categoryTR: "Niagara VFX",
        categoryEN: "Niagara VFX",
        engines: ["Unreal Engine"],
        descTR: "Nişancı oyunları için mobil uyumlu 50 stilize Niagara efekti: namlu alevleri, mermi izleri, isabetler, patlamalar.",
        descEN: "50 stylized, mobile-optimized Niagara effects for shooters: muzzle flashes, tracers, impacts and explosions.",
        featuresTR: [
            "12 silah efekti ve 6 iz/mermi efekti",
            "11 yüzeye özel isabet efekti",
            "Tek Blueprint düğümüyle yüzeye göre isabet seçimi",
            "Mobile HDR açık/kapalı otomatik uyum"
        ],
        featuresEN: [
            "12 weapon effects and 6 tracers/projectiles",
            "Impact effects for 11 surfaces",
            "One Blueprint node picks the impact by surface",
            "Adapts automatically to Mobile HDR on/off"
        ],
        specsTR: {
            "Efekt Sayısı": "50 Niagara sistemi",
            "Simülasyon": "Yalnızca CPU, sabit bounds",
            "İçerik": "Kod ve eklenti yok, dokular özgün",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Effect Count": "50 Niagara systems",
            "Simulation": "CPU only, fixed bounds",
            "Content": "No code or plugins, original textures",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/b0aaba10-58cf-4633-aab0-2a1b27d930ce",
        unityLink: "",
        videoLink: "https://youtu.be/GoW7SAiVmtw",
        detailsTR: "FPS Mobile VFX, mobil nişancı oyunları için hazırlanmış 50 efektlik bir paket. Tabanca, tüfek, pompalı ve keskin nişancı namlu alevleri; mermi izleri, roket ve lazer; beton, metal, ahşap, kar, cam, su gibi yüzeylere özel isabetler; el bombası, C4, molotof ve flashbang patlamaları içerir. SpawnSurfaceImpact(Hit) düğümü, isabet edilen yüzeyin fiziksel materyaline göre doğru efekti otomatik seçer. Bir atış poligonu demo haritası dahildir.",
        detailsEN: "FPS Mobile VFX is a 50-effect pack for mobile shooters. It covers pistol, rifle, shotgun and sniper muzzle flashes; tracers, rockets and lasers; surface-specific impacts for concrete, metal, wood, snow, glass, water and more; and grenade, C4, molotov and flashbang explosions. The SpawnSurfaceImpact(Hit) node picks the right effect from the hit's physical material. A firing-range showcase map is included.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "toonfx-top-down-shooter",
        title: "ToonFX – Top-Down Shooter VFX",
        edition: "50 NIAGARA EFFECTS",
        tagClass: "",
        image: IMG("toonfx-top-down-shooter", "cover"),
        gallery: GALLERY("toonfx-top-down-shooter", 6),
        category: "vfx",
        categoryTR: "Niagara VFX",
        categoryEN: "Niagara VFX",
        engines: ["Unreal Engine"],
        descTR: "Twin-stick, arena ve roguelite oyunlar için yukarıdan bakışta okunaklı, cel-shaded 50 çizgi film tarzı efekt.",
        descEN: "50 bold, cel-shaded cartoon effects that stay readable from a top-down camera in twin-stick, arena and roguelite games.",
        featuresTR: [
            "Namlu alevleri, mermiler ve ışınlar",
            "İsabetler ve 8 çeşit patlama",
            "Düşman, oyuncu yeteneği ve ganimet efektleri",
            "Takım veya nadirlik renkleri için tek tık renklendirme"
        ],
        featuresEN: [
            "Muzzle flashes, projectiles and beams",
            "Impacts and 8 explosion types",
            "Enemy, player ability and loot effects",
            "Quick recolouring for teams or rarity"
        ],
        specsTR: {
            "Efekt Sayısı": "50 Niagara sistemi",
            "Stil": "Kalın kontur, cel-shaded",
            "Özelleştirme": "Belgelenmiş User Parameter'lar",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Effect Count": "50 Niagara systems",
            "Style": "Thick outlines, cel-shaded",
            "Customization": "Documented User Parameters",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/378bf642-95c9-4c95-87a6-d14d3277c443",
        unityLink: "",
        videoLink: "https://youtu.be/ey8gpYXCJsw",
        detailsTR: "ToonFX, yukarıdan bakışlı oyunlar için tasarlanmış cesur ve okunaklı bir efekt kütüphanesi. Sert kenarlı cel-shaded dumanlar, net toon halkalar ve düz parlak renkler, aksiyon ne kadar yoğun olursa olsun ekranı okunur tutar. Namlu alevleri, plazma ve lazer mermileri, dondurucu ve zehirli patlamalar, düşman doğma portalı, boss şarj efekti, kalkan, iyileşme ve seviye atlama gibi oyuncu efektleri ile ganimet ışınları pakete dahildir.",
        detailsEN: "ToonFX is a bold, readable effect library built for games viewed from above. Hard-edged cel-shaded puffs, crisp toon rings and flat bright colours keep the screen readable however busy the action gets. It includes muzzle flashes, plasma and laser projectiles, freeze and toxic explosions, enemy spawn portals, boss charge-ups, player effects such as shields, heals and level-ups, and loot beams.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "stylized-fluid-vfx",
        title: "Stylized Fluid VFX",
        edition: "79 LIQUID EFFECTS",
        tagClass: "blue",
        image: IMG("stylized-fluid-vfx", "cover"),
        gallery: GALLERY("stylized-fluid-vfx", 6),
        category: "vfx",
        categoryTR: "Niagara VFX",
        categoryEN: "Niagara VFX",
        engines: ["Unreal Engine"],
        descTR: "79 stilize sıvı efekti: damlalar, akışlar, şelaleler, sıçramalar ve ayak izleri; su, çamur, bal, lav, asit ve daha fazlası.",
        descEN: "79 stylized liquid effects: drips, pours, waterfalls, splashes and footsteps in water, mud, honey, lava, acid and more.",
        featuresTR: [
            "Canlı Viskozite parametresi (su → bal)",
            "Ayak şeklinde iz ve dalga efektleri (14)",
            "Havuzlar, fıskiyeler, fırlatılan sıvılar",
            "Renk parametreleriyle yeni sıvılar üretme"
        ],
        featuresEN: [
            "Live Viscosity parameter (water → honey)",
            "Foot-shaped prints and waves (14)",
            "Pools, sprays, thrown liquids",
            "Create new liquids via colour parameters"
        ],
        specsTR: {
            "Efekt Sayısı": "79 Niagara sistemi",
            "Sıvılar": "Su, çamur, slime, bal, yağ, lav, asit, kan, boya",
            "Özelleştirme": "Ölçek, yoğunluk, renk, viskozite",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Effect Count": "79 Niagara systems",
            "Liquids": "Water, mud, slime, honey, oil, lava, acid, blood, paint",
            "Customization": "Scale, intensity, colour, viscosity",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/1b5a74ab-35f8-4d4f-8de1-ac2b04bd4c8d",
        unityLink: "",
        videoLink: "https://youtu.be/ebtVlwaxvCQ",
        detailsTR: "Stylized Fluid VFX'teki her sıvı sisteminin canlı bir Viskozite parametresi vardır: 0 su, 1 bal veya lav gibi davranır. Bu değer sıçrama hızını ve yüksekliğini, damla uzamasını, birikinti yayılmasını ve damlama zamanlamasını değiştirir. Renk parametreleriyle birleştirerek süt, mürekkep, katran veya iksir gibi yeni sıvılar oluşturabilirsiniz. Damlalar, akışlar, sıçramalar, ayak izleri, havuzlar, fıskiyeler, fırlatılan sıvılar ve dökülmeler olmak üzere 8 kategori içerir.",
        detailsEN: "Every liquid system in Stylized Fluid VFX has a live Viscosity parameter: 0 behaves like water, 1 like honey or lava. It changes splash speed and height, drop stretching, puddle spreading and drip timing. Combine it with the colour parameters to make milk, ink, tar, potions or any other liquid. Content spans 8 categories: drips, pours, splashes, footsteps, pools, sprays, thrown liquids and spills.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "christmas-vfx",
        title: "Christmas VFX",
        edition: "HOLIDAY PACK",
        tagClass: "red",
        image: IMG("christmas-vfx", "cover"),
        gallery: GALLERY("christmas-vfx", 6),
        category: "vfx",
        categoryTR: "Niagara VFX",
        categoryEN: "Niagara VFX",
        engines: ["Unreal Engine"],
        descTR: "Kış ve yılbaşı sahneleri için 24 hazır Niagara sistemi: kar, aurora, havai fişek, hediye kutusu, şömine ve buz efektleri.",
        descEN: "24 ready-to-use Niagara systems for winter and holiday scenes: snow, aurora, fireworks, gift boxes, fireplace and ice.",
        featuresTR: [
            "Hava: kar yağışı, tipi, kar küresi, aurora",
            "Kutlama: hediye açma, konfeti, havai fişek",
            "Ateş ve buz: şömine, mum, kartopu, buz kırılması",
            "Kategori etiketli vitrin haritası"
        ],
        featuresEN: [
            "Weather: snowfall, blizzard, snow globe, aurora",
            "Celebration: gift open, confetti, fireworks",
            "Fire & ice: fireplace, candle, snowball, ice shatter",
            "Labelled showcase map"
        ],
        specsTR: {
            "Efekt Sayısı": "24 Niagara sistemi + 6 demo döngüsü",
            "Materyaller": "6 master, 19 materyal örneği",
            "Simülasyon": "Yoğun emitter'lar GPU, diğerleri CPU",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Effect Count": "24 Niagara systems + 6 demo loops",
            "Materials": "6 master, 19 material instances",
            "Simulation": "Heavy emitters on GPU, others on CPU",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/a3cfa527-1591-482c-82ce-6be3dd2571c3",
        unityLink: "",
        videoLink: "https://youtu.be/V5nlIqtllss",
        detailsTR: "Christmas VFX, kış ve yılbaşı sahneleri için 24 Niagara sisteminden oluşur. Her efekt Scale, Color, Density ve Wind gibi parametrelerle, asset'i açmadan Niagara bileşeninden veya Blueprint'ten ayarlanabilir. Tüm dokular özgün ve prosedürel olarak üretildi; paket yalnızca motorun kendi Niagara modüllerini kullanır, kod veya eklenti içermez.",
        detailsEN: "Christmas VFX is a set of 24 Niagara systems for winter and holiday scenes. Every effect exposes parameters such as Scale, Color, Density and Wind, adjustable on the Niagara component or from Blueprint without opening the asset. All textures are original and procedurally generated; the pack uses only the engine's own Niagara modules, with no code or plugins.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "toon-materials",
        title: "ToonMaterials",
        edition: "200 MATERIALS",
        tagClass: "gold",
        image: IMG("toon-materials", "cover"),
        gallery: GALLERY("toon-materials", 6),
        category: "systems",
        categoryTR: "Materyal & Shader",
        categoryEN: "Materials & Shaders",
        engines: ["Unreal Engine"],
        descTR: "Çizgi film ve cel-shaded oyunlar için 18 özelleştirilebilir master materyal üzerine kurulu 200 hazır materyal örneği.",
        descEN: "200 ready-to-use material instances on 18 customizable master materials for cartoon and cel-shaded games.",
        featuresTR: [
            "Post process cel shading ve kontur çizgileri",
            "Halftone, kalem tarama, noir gibi stil geçişleri",
            "Inverted-hull kontur, mobil uyumlu",
            "El boyaması tarzında duvar, zemin ve arazi yüzeyleri"
        ],
        featuresEN: [
            "Post-process cel shading and ink outlines",
            "Stylize passes: halftone, hatching, noir and more",
            "Inverted-hull outlines, mobile friendly",
            "Hand-painted style walls, floors and terrain"
        ],
        specsTR: {
            "Materyal Örneği": "200",
            "Master Materyal": "18",
            "Post Process": "Cel shading (4), kontur (4), stil (6)",
            "Motor": "Unreal Engine"
        },
        specsEN: {
            "Material Instances": "200",
            "Master Materials": "18",
            "Post Process": "Cel shading (4), outlines (4), stylize (6)",
            "Engine": "Unreal Engine"
        },
        fabLink: "https://www.fab.com/listings/08e54362-55c0-48d0-a7c5-aa3cc1258142",
        unityLink: "",
        videoLink: "https://youtu.be/nf-2MbmB1KU",
        detailsTR: "ToonMaterials, çizgi film ve stilize oyunlar için eksiksiz bir materyal kiti. Bir volume'a iki post process materyali eklediğinizde tüm seviye toon görünüme geçer: gerçek ışık ve gölgeler net bantlara ayrılır, her silüet mürekkep konturu kazanır. Ardından tuğla, taş, kale, zindan, çim, kum, kar, parke taşı gibi 200 el boyaması tarzı yüzeyle dünyanızı giydirebilirsiniz.",
        detailsEN: "ToonMaterials is a complete material kit for cartoon and stylized games. Add two post-process materials to a volume and the whole level turns toon: real lights and shadows snap into crisp bands and every silhouette gets an ink outline. Then dress the world with 200 hand-painted style surfaces such as brick, stone, castle, dungeon, grass, sand, snow and cobblestone.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "stylized-snow-system",
        title: "Stylized Snow System",
        edition: "DYNAMIC WEATHER",
        tagClass: "blue",
        image: IMG("stylized-snow-system", "cover"),
        gallery: GALLERY("stylized-snow-system", 6),
        category: "systems",
        categoryTR: "Oyun Sistemi",
        categoryEN: "Game System",
        engines: ["Unreal Engine"],
        descTR: "Herhangi bir sahneyi saniyeler içinde kışa çeviren dinamik kar sistemi: kar örtüsü, buz, sarkıtlar ve tipi.",
        descEN: "A dynamic snow system that turns any scene into winter in seconds: snow cover, ice, icicles and blizzards.",
        featuresTR: [
            "Mevcut materyallere dokunmadan kalın kar katmanı",
            "Saçak altlarında otomatik buz sarkıtları",
            "7 hazır ayar + özel sıcaklık/rüzgâr/erime",
            "19 Niagara sistemi"
        ],
        featuresEN: [
            "Thick snow layer without touching your materials",
            "Automatic icicles under overhangs",
            "7 presets + custom temperature/wind/melt",
            "19 Niagara systems"
        ],
        specsTR: {
            "Kurulum": "BP_SNW_SnowManager'ı sahneye sürükle",
            "İçerik": "Blueprint + materyal + Niagara, C++ yok",
            "Çalışma Zamanı": "SetPreset ile ayarlar arası geçiş",
            "Motor": "Unreal Engine (Niagara)"
        },
        specsEN: {
            "Setup": "Drag BP_SNW_SnowManager into the level",
            "Content": "Blueprint + materials + Niagara, no C++",
            "Runtime": "Blend presets with SetPreset",
            "Engine": "Unreal Engine (Niagara)"
        },
        fabLink: "https://www.fab.com/listings/daeda245-b66d-4a3b-97ab-14889822a1f3",
        unityLink: "",
        videoLink: "https://youtu.be/74ps0ML5zfY",
        detailsTR: "Stylized Snow System tamamen dinamik, yalnızca içerikten oluşan bir kar sistemi. BP_SNW_SnowManager'ı seviyeye sürükleyip Light Snow, Heavy Snow, Blizzard, Deep Freeze, Partial Melt, Thaw veya Clear ayarlarından birini seçmeniz yeterli. Açıya göre kar örtüsü, dik yüzeylerde kırağı, saçak altlarında sarkıtlar, rüzgârla şekillenen kar yığınları ve kısmi erime otomatik oluşur. Kar yağışı ve tipi kamerayı takip eder; sıcaklık 0°C'nin altına inince kar birikir, üstüne çıkınca erir.",
        detailsEN: "Stylized Snow System is a fully dynamic, content-only snow system. Drag BP_SNW_SnowManager into the level and pick a preset: Light Snow, Heavy Snow, Blizzard, Deep Freeze, Partial Melt, Thaw or Clear. Angle-based snow cover, frost on steep faces, icicles under overhangs, wind-cut drifts and partial melting are generated automatically. Snowfall and blizzards follow the camera; snow accumulates below 0°C and melts above it.",
        animationsTR: [],
        animationsEN: []
    },
    {
        id: "stylized-desert-system",
        title: "Stylized Desert System",
        edition: "DYNAMIC WEATHER",
        tagClass: "gold",
        image: IMG("stylized-desert-system", "cover"),
        gallery: GALLERY("stylized-desert-system", 6),
        category: "systems",
        categoryTR: "Oyun Sistemi",
        categoryEN: "Game System",
        engines: ["Unreal Engine"],
        descTR: "Sahneyi saniyeler içinde stilize bir çöle çeviren sistem: rüzgâr tozu, kum yığınları, ayak izleri ve kum fırtınası.",
        descEN: "Turns any scene into a stylized desert in seconds: wind dust, sand piles, footprints and sandstorms.",
        featuresTR: [
            "Rüzgâr yönünü izleyen toz ve kum katmanı",
            "Köşelerde kum yığınları ve kumullar",
            "Bot, çıplak ayak, sandalet ve deve izleri",
            "7 hazır ayar + 19 Niagara efekti"
        ],
        featuresEN: [
            "Dust and sand that follow the wind direction",
            "Sand piles in corners and dune fields",
            "Boot, bare foot, sandal and camel footprints",
            "7 presets + 19 Niagara effects"
        ],
        specsTR: {
            "Kurulum": "BP_DST_DesertManager'ı sahneye sürükle",
            "Materyal": "Kendi materyalleriniz için MF_DST_DustLayer",
            "Demo": "2 harita + ayrıntılı README",
            "Motor": "Unreal Engine (Niagara)"
        },
        specsEN: {
            "Setup": "Drag BP_DST_DesertManager into the level",
            "Material": "MF_DST_DustLayer for your own materials",
            "Demo": "2 maps + detailed README",
            "Engine": "Unreal Engine (Niagara)"
        },
        fabLink: "https://www.fab.com/listings/fa741ec6-081e-4346-b60b-57dd465cca70",
        unityLink: "",
        videoLink: "https://youtu.be/T78IXcCkQDo",
        detailsTR: "Stylized Desert System materyal değişikliği gerektirmez: BP_DST_DesertManager'ı seviyeye sürükleyin, bir ayar seçin, gerisini rüzgâr halletsin. Rüzgâra bakan yüzeylerde toz filmi, çatı ve pencere pervazlarında kum birikintisi, duvar diplerinde kum bandı, köşelerde kum yığınları ve rüzgâra hizalı kumullar oluşur. Ayak izi bileşeni her karakter veya yapay zekâ ile çalışır; izler zamanla rüzgârla dolar. Kum fırtınası, sıcak hava dalgası ve ekran kum efekti gibi hava durumları da dahildir.",
        detailsEN: "Stylized Desert System needs no material changes: drag BP_DST_DesertManager into the level, pick a preset and let the wind do the rest. Wind-facing surfaces get a dust film, roofs and window sills collect sand, walls get a sand band at the base, corners fill with sand piles and dunes align with the wind. The footprint component works on any character or AI, and prints fill in with sand over time. Weather such as sandstorms, heat haze and screen sand grit is included.",
        animationsTR: [],
        animationsEN: []
    }
];

// Default Seed Data for Journey (newest first)
const defaultJourney = [
    {
        id: "journey-1",
        years: "2024 - 2026",
        roleTR: "Teknik Direktör (Unreal Engine)",
        roleEN: "Technical Director (Unreal Engine)",
        companyTR: "LucyRobot - Sanal Robotik Eğitim Simülatörü",
        companyEN: "LucyRobot - Virtual Robotics Training Simulator",
        descTR: "Gerçek zamanlı simülasyon mimarisini, arayüz sistemlerini, sinematik iş akışlarını ve animasyon sistemlerini tasarlayıp uyguladım. Üretim hattının tamamını tek başıma teslim ettim ve projeyi yapılandırılmış dokümantasyonla kıdemli mühendislik ekibine devrettim.",
        descEN: "Designed and implemented the full real-time simulation architecture, UI systems, cinematic workflows and animation systems. Delivered the complete production pipeline independently and handed the project over to the senior engineering team with structured documentation."
    },
    {
        id: "journey-3",
        years: "2023 - 2024",
        roleTR: "Rig ve Animasyon Mimarı",
        roleEN: "Rigging & Animation Architect",
        companyTR: "ZeroSpace (Serbest)",
        companyEN: "ZeroSpace (Freelance)",
        descTR: "Üretime hazır karakter rig sistemleri tasarladım ve animasyon üretim hattının yapısını kurdum.",
        descEN: "Designed production-ready character rig systems and set up the animation pipeline structure."
    },
    {
        id: "journey-2",
        years: "2019 - 2024",
        roleTR: "Teknik Direktör / Proje Lideri",
        roleEN: "Technical Director / Project Lead",
        companyTR: "Roco Game Studio",
        companyEN: "Roco Game Studio",
        descTR: "Bir MMORPG üretimi için tüm animasyon ve rig mimarisini tasarladım. Ölçeklenebilir bir Unreal Engine locomotion sistemi kurdum, karakter rig standartlarını ve animasyon iş akışlarını belirledim. Arayüz, animasyon, shader ve modelleme alanlarında teknik kararları yönettim.",
        descEN: "Designed the full animation and rigging architecture for an MMORPG production. Built a scalable Unreal Engine locomotion system and established character rig standards and animation workflows. Led technical decisions across UI, animation, shaders and modeling."
    },
    {
        id: "journey-4",
        years: "2017 - 2019",
        roleTR: "Etkileşimli Uygulama Geliştiricisi (Unity)",
        roleEN: "Interactive Application Developer (Unity)",
        companyTR: "Müze İnteraktif Projeleri (VR / AR)",
        companyEN: "Museum Interactive Projects (VR / AR)",
        descTR: "Sürükleyici, gerçek zamanlı etkileşimli sistemler tasarladım. Kinect tabanlı etkileşim mimarisini uyguladım ve birden fazla lokasyonda kurumsal enstalasyonlar teslim ettim.",
        descEN: "Designed immersive real-time interactive systems. Implemented a Kinect-based interaction architecture and delivered institutional installations across multiple locations."
    },
    {
        id: "journey-5",
        years: "2010 - 2015",
        roleTR: "İnteraktif Uygulama Geliştiricisi ve Animatör (Unity)",
        roleEN: "Interactive Application Developer & Animator (Unity)",
        companyTR: "Dijital Sahne",
        companyEN: "Dijital Sahne",
        descTR: "Büyük ölçekli projeler için interaktif sistemler ve Kinect tabanlı uygulamalar geliştirdim; animasyon ve etkileşim kurgularını hazırladım.",
        descEN: "Developed interactive systems and Kinect-based applications for large-scale projects, and produced the animation and interaction design."
    }
];

// Bump this whenever the seed data above changes, so returning visitors
// get the new content instead of their cached localStorage copy.
const DB_VERSION = "store-sync-2026-11-24";

// Helper database controller
const db = {
    // --------------------------------------------------
    // INIT METHOD
    // --------------------------------------------------
    init() {
        try {
            if (localStorage.getItem('db_version') !== DB_VERSION) {
                localStorage.setItem('assetsData', JSON.stringify(defaultAssets));
                localStorage.setItem('journeyData', JSON.stringify(defaultJourney));
                localStorage.setItem('db_version', DB_VERSION);
            }
            if (!localStorage.getItem('assetsData')) {
                localStorage.setItem('assetsData', JSON.stringify(defaultAssets));
            }
            if (!localStorage.getItem('journeyData')) {
                localStorage.setItem('journeyData', JSON.stringify(defaultJourney));
            }
        } catch (e) {
            // Storage blocked (private mode etc.) - fall back to defaults in memory
        }
    },

    _read(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    },

    _write(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { /* ignore */ }
    },

    // --------------------------------------------------
    // ASSET CRUD
    // --------------------------------------------------
    getAssets() {
        this.init();
        return this._read('assetsData', defaultAssets);
    },

    saveAssets(assets) {
        this._write('assetsData', assets);
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
        return this._read('journeyData', defaultJourney);
    },

    saveJourney(journey) {
        this._write('journeyData', journey);
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
window.STORE_LINKS = STORE_LINKS;
window.assetsData = db.getAssets(); // Backward compatibility overlay
