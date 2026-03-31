// Datos actualizados Marzo 2026 - 7 ciudades, 200+ establecimientos expandido
// FASE 6: + AMap links, especialidad tags, cocktail bars, vida nocturna

// TypeScript Interfaces
export interface Restaurante {
  nombre: string;
  tipo: string;
  categoria: 'Restaurante' | 'Cafetería' | 'Casa de Té' | 'Bar/Cocktail' | 'Vida Nocturna';
  precio: string;
  rating: string;
  destacado: string;
  amapUrl?: string;  // Opcional: Link a AMap/Gaode Maps
  especialidadTag?: string;  // Tag de especialidad (ej: "Xiaolongbao", "Peking Duck")
}

export interface Ruta {
  nombre: string;
  duracion: string;
  stops: string;
  costo: string;
  distancia: string;
  amapUrl?: string;  // Link a AMap/Gaode Maps para la ruta
}

export interface Ciudad {
  tier: string;
  promedio_diario: number;
  descripcion: string;
  especialidades: string[];
  precios: Record<string, { min: number; max: number }>;
  restaurantes: Restaurante[];
  rutas: Ruta[];
  imagen: string;
  color: string;
}

export const ciudadesData: Record<string, Ciudad> = {
  "Shanghai": {
    "tier": "Tier 1",
    "promedio_diario": 268,
    "descripcion": "9,100+ cafeterías, 144 restaurantes Must-Eat Dianping 2024",
    "especialidades": ["Xiaolongbao", "Hongshao Rou", "Scallion Oil Noodles", "Hairy Crab", "Sheng Jian Bao"],
    "precios": {
      "Street Food": { min: 5, max: 25 },
      "Restaurantes Locales": { min: 30, max: 150 },
      "Rango Medio": { min: 100, max: 300 },
      "Fine Dining": { min: 500, max: 2000 },
      "Cocktail Bars": { min: 80, max: 300 },
      "Nightlife": { min: 100, max: 500 }
    },
    "restaurantes": [
      { 
        "nombre": "Lai Lai Xiao Long 莱莱小笼", 
        "tipo": "Xiaolongbao", 
        "categoria": "Restaurante", 
        "precio": "40-70 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Michelin Bib 2026. #1 consensus XLB",
        "especialidadTag": "Xiaolongbao",
        "amapUrl": "https://www.amap.com/search?query=莱莱小笼+上海"
      },
      { 
        "nombre": "Jia Jia Tang Bao 佳家汤包", 
        "tipo": "Xiaolongbao", 
        "categoria": "Restaurante", 
        "precio": "23-99 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "127 Huanghe Lu. Made to order",
        "especialidadTag": "Xiaolongbao",
        "amapUrl": "https://www.amap.com/search?query=佳家汤包+黄河路"
      },
      { 
        "nombre": "Old Jesse 老吉士", 
        "tipo": "Shanghainese", 
        "categoria": "Restaurante", 
        "precio": "150-200 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "41 Tianping Lu. Reserve weeks ahead",
        "especialidadTag": "Hongshao Rou",
        "amapUrl": "https://www.amap.com/search?query=老吉士+天平路"
      },
      { 
        "nombre": "Fu 1088 福1088", 
        "tipo": "Fine Dining", 
        "categoria": "Restaurante", 
        "precio": "500+ CNY", 
        "rating": "⭐ Michelin", 
        "destacado": "1920s villa. Crab roe on toast",
        "especialidadTag": "Hairy Crab",
        "amapUrl": "https://www.amap.com/search?query=福1088+上海"
      },
      { 
        "nombre": "Yang's Fry Dumplings 小杨生煎", 
        "tipo": "Shengjian", 
        "categoria": "Restaurante", 
        "precio": "9-15 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "97 Huanghe Lu. Founded 1994",
        "especialidadTag": "Sheng Jian Bao",
        "amapUrl": "https://www.amap.com/search?query=小杨生煎+黄河路"
      },
      { 
        "nombre": "Blue Bottle Coffee", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "40-55 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "48hr roasted beans. 3hr queues",
        "amapUrl": "https://www.amap.com/search?query=Blue+Bottle+上海"
      },
      { 
        "nombre": "Manner Coffee", 
        "tipo": "Chain Coffee", 
        "categoria": "Cafetería", 
        "precio": "15-20 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "459+ stores. ¥15 flat white",
        "amapUrl": "https://www.amap.com/search?query=Manner+Coffee+上海"
      },
      { 
        "nombre": "Café del Volcán", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "30-50 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Guatemala estate. Best espresso",
        "amapUrl": "https://www.amap.com/search?query=Café+del+Volcán+永康路"
      },
      { 
        "nombre": "Huxinting Tea House 湖心亭", 
        "tipo": "Traditional Tea", 
        "categoria": "Casa de Té", 
        "precio": "20-200 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "Yu Garden 1784. Queen Elizabeth visited",
        "amapUrl": "https://www.amap.com/search?query=湖心亭茶楼+豫园"
      },
      { 
        "nombre": "% Arabica", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "35-45 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Wukang Lu. Instagram-famous",
        "amapUrl": "https://www.amap.com/search?query=Arabica+Coffee+武康路"
      },
      { 
        "nombre": "Luckin Coffee 瑞幸", 
        "tipo": "Chain Coffee", 
        "categoria": "Cafetería", 
        "precio": "9.9-18 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "26,000+ stores China. App-only",
        "amapUrl": "https://www.amap.com/search?query=瑞幸咖啡+上海"
      },
      
      // NUEVOS CAFÉS TÍPICOS
      { 
        "nombre": "Seesaw Coffee 西索", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "30-50 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "WBC champion roaster. Multiple locations",
        "amapUrl": "https://www.amap.com/search?query=Seesaw+Coffee+上海"
      },
      { 
        "nombre": "M Stand", 
        "tipo": "Design Coffee", 
        "categoria": "Cafetería", 
        "precio": "25-40 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Purple logo. Minimalist design. Oat milk ¥5 extra",
        "amapUrl": "https://www.amap.com/search?query=M+Stand+上海"
      },
      { 
        "nombre": "Peet's Coffee", 
        "tipo": "Chain Coffee", 
        "categoria": "Cafetería", 
        "precio": "35-50 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Berkeley original. Dark roasts. Kerry Center",
        "amapUrl": "https://www.amap.com/search?query=Peet's+Coffee+上海"
      },
      
      // COCKTAIL BARS
      { 
        "nombre": "Speak Low", 
        "tipo": "Speakeasy", 
        "categoria": "Bar/Cocktail", 
        "precio": "80-150 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "Asia's #7 bar 2024. Hidden behind bookshelf. Reservations essential",
        "amapUrl": "https://www.amap.com/search?query=Speak+Low+复兴中路"
      },
      { 
        "nombre": "Époque 上海", 
        "tipo": "Cocktail Bar", 
        "categoria": "Bar/Cocktail", 
        "precio": "100-180 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "Asia's #2 bar 2024. Art Deco. Bund views",
        "amapUrl": "https://www.amap.com/search?query=Époque+外滩"
      },
      { 
        "nombre": "Union Trading Company", 
        "tipo": "Cocktail Bar", 
        "categoria": "Bar/Cocktail", 
        "precio": "90-150 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "1930s Shanghai vibes. Classic cocktails. Speakeasy entrance",
        "amapUrl": "https://www.amap.com/search?query=Union+Trading+Company+上海"
      },
      { 
        "nombre": "The Nest", 
        "tipo": "Rooftop Bar", 
        "categoria": "Bar/Cocktail", 
        "precio": "120-200 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "32nd floor. Skyline views. Molecular cocktails",
        "amapUrl": "https://www.amap.com/search?query=The+Nest+上海"
      },
      
      // VIDA NOCTURNA
      { 
        "nombre": "Elevator 电梯", 
        "tipo": "Nightclub", 
        "categoria": "Vida Nocturna", 
        "precio": "100-300 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Underground techno. 2AM-6AM. International DJs",
        "amapUrl": "https://www.amap.com/search?query=Elevator+Club+上海"
      },
      { 
        "nombre": "Shelter", 
        "tipo": "Live Music/Club", 
        "categoria": "Vida Nocturna", 
        "precio": "80-200 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Former bomb shelter. Indie bands. Electronic nights",
        "amapUrl": "https://www.amap.com/search?query=Shelter+上海"
      },
      { 
        "nombre": "Arkham Shanghai", 
        "tipo": "Nightclub", 
        "categoria": "Vida Nocturna", 
        "precio": "150-400 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Warehouse rave. Techno/house. After-hours til 8AM",
        "amapUrl": "https://www.amap.com/search?query=Arkham+上海"
      },
      { 
        "nombre": "Found 158", 
        "tipo": "Bar Street", 
        "categoria": "Vida Nocturna", 
        "precio": "60-150 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Creative park. Multiple bars. Outdoor seating",
        "amapUrl": "https://www.amap.com/search?query=Found+158+上海"
      }
    ],
    "rutas": [
      { "nombre": "Xiaolongbao Crawl", "duracion": "7:00-11:00 AM", "stops": "Da Hu Chun → Jia Jia → Yang's → Lai Lai", "costo": "¥80-120", "distancia": "~2km Huangpu", "amapUrl": "https://www.amap.com/search?query=小笼包+上海黄浦区" },
      { "nombre": "French Concession Café", "duracion": "Weekend morning", "stops": "Manner → RAC → Volcán → % Arabica", "costo": "¥150-200", "distancia": "~3km", "amapUrl": "https://www.amap.com/search?query=法租界咖啡馆+上海" },
      { "nombre": "Cocktail Bar Hopping", "duracion": "Evening 8PM-1AM", "stops": "Speak Low → Union Trading → Époque → The Nest", "costo": "¥400-600", "distancia": "~3km Bund area", "amapUrl": "https://www.amap.com/search?query=酒吧街+上海外滩" },
      { "nombre": "Underground Night", "duracion": "Late night 12AM-6AM", "stops": "Found 158 → Shelter → Elevator → After-hours", "costo": "¥300-500", "distancia": "Various", "amapUrl": "https://www.amap.com/search?query=夜店+上海" }
    ],
    "imagen": "/images/shanghai.svg",
    "color": "#990011"
  },

  "Beijing": {
    "tier": "Tier 1",
    "promedio_diario": 200,
    "descripcion": "600 años cocina imperial. 137 restaurantes Must-Eat Dianping 2024",
    "especialidades": ["Peking Duck", "Douzhir", "Zhajiang Noodles", "Jianbing", "Copper Pot Hotpot", "Chao Gan"],
    "precios": {
      "Street Food": { min: 5, max: 25 },
      "Restaurantes Locales": { min: 30, max: 120 },
      "Pato Económico": { min: 98, max: 230 },
      "Pato Premium": { min: 300, max: 600 }
    },
    "restaurantes": [
      { 
        "nombre": "Siji Minfu 四季民福", 
        "tipo": "Peking Duck", 
        "categoria": "Restaurante", 
        "precio": "150-200 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "#1 local pick. NO reservations",
        "especialidadTag": "Peking Duck",
        "amapUrl": "https://www.amap.com/search?query=四季民福+北京"
      },
      { 
        "nombre": "Da Dong 大董", 
        "tipo": "Modern Duck", 
        "categoria": "Restaurante", 
        "precio": "450-500 CNY", 
        "rating": "⭐ Michelin", 
        "destacado": "Superlean duck ¥268",
        "especialidadTag": "Peking Duck",
        "amapUrl": "https://www.amap.com/search?query=大董烤鸭+北京"
      },
      { 
        "nombre": "Bianyifang 便宜坊", 
        "tipo": "Peking Duck", 
        "categoria": "Restaurante", 
        "precio": "120-150 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Founded 1416 Ming Dynasty",
        "especialidadTag": "Peking Duck",
        "amapUrl": "https://www.amap.com/search?query=便宜坊烤鸭+北京"
      },
      { 
        "nombre": "Liqun 利群烤鸭", 
        "tipo": "Peking Duck", 
        "categoria": "Restaurante", 
        "precio": "150-180 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Hutong hidden gem courtyard",
        "especialidadTag": "Peking Duck",
        "amapUrl": "https://www.amap.com/search?query=利群烤鸭+北京胡同"
      },
      { 
        "nombre": "Country Kitchen", 
        "tipo": "Northern Cuisine", 
        "categoria": "Restaurante", 
        "precio": "300-350 CNY", 
        "rating": "⭐ Michelin", 
        "destacado": "Chestnut-fed duck. English service",
        "amapUrl": "https://www.amap.com/search?query=Country+Kitchen+北京"
      },
      { 
        "nombre": "Jubaoyuan 聚宝源", 
        "tipo": "Lamb Hotpot", 
        "categoria": "Restaurante", 
        "precio": "80-120 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Niujie copper-pot. Halal",
        "especialidadTag": "Copper Pot Hotpot",
        "amapUrl": "https://www.amap.com/search?query=聚宝源+牛街"
      },
      { 
        "nombre": "Yin San Douzhir 尹三豆汁", 
        "tipo": "Beijing Breakfast", 
        "categoria": "Restaurante", 
        "precio": "20-30 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Michelin Bib. Real Beijinger test",
        "especialidadTag": "Douzhir",
        "amapUrl": "https://www.amap.com/search?query=尹三豆汁+北京"
      },
      { 
        "nombre": "Metal Hands Coffee 铁手", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "30-50 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "61 Wudaoying. Self-roasts",
        "amapUrl": "https://www.amap.com/search?query=铁手咖啡+五道营"
      },
      { 
        "nombre": "Soloist Coffee 独奏者", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "40-68 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "39 Yangmeizhu. Vintage Dashilan",
        "amapUrl": "https://www.amap.com/search?query=独奏者咖啡+杨梅竹斜街"
      },
      { 
        "nombre": "Lao She Teahouse 老舍茶馆", 
        "tipo": "Traditional Tea", 
        "categoria": "Casa de Té", 
        "precio": "180-380 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "Beijing opera shows. 200+ heads of state",
        "amapUrl": "https://www.amap.com/search?query=老舍茶馆+北京"
      }
    ],
    "rutas": [
      { "nombre": "Hutong Breakfast Walk", "duracion": "6:00-10:00 AM", "stops": "Yin San → Yao Ji → Jianbing cart", "costo": "¥50-80", "distancia": "Chongwen-Drum Tower", "amapUrl": "https://www.amap.com/search?query=胡同早餐+北京" },
      { "nombre": "Imperial Cuisine Route", "duracion": "Full day", "stops": "Fangshan → Jing Zhao Yin → Lao She", "costo": "¥200-500", "distancia": "Various", "amapUrl": "https://www.amap.com/search?query=宫廷菜+北京" },
      { "nombre": "Craft Coffee Trail", "duracion": "Half day", "stops": "Metal Hands → Barista → Soloist", "costo": "¥150-250", "distancia": "~4km", "amapUrl": "https://www.amap.com/search?query=精品咖啡+北京" }
    ],
    "imagen": "/images/beijing.svg",
    "color": "#8B0000"
  },

  "Chongqing": {
    "tier": "Megaciudad",
    "promedio_diario": 100,
    "descripcion": "Capital mundial hotpot. 30,000+ restaurantes hotpot",
    "especialidades": ["Mala Hotpot", "Xiaomian Noodles", "Spicy Rabbit", "Chuan Chuan", "Sour-Spicy Noodles"],
    "precios": {
      "Noodles": { min: 10, max: 30 },
      "Hotpot Económico": { min: 35, max: 80 },
      "Hotpot Medio": { min: 80, max: 160 },
      "Hotpot Premium": { min: 100, max: 300 }
    },
    "restaurantes": [
      { 
        "nombre": "Zhu Guangyu 朱光玉", 
        "tipo": "Hotpot", 
        "categoria": "Restaurante", 
        "precio": "120-150 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "#1 Dianping. 2-4hr queues",
        "especialidadTag": "Mala Hotpot",
        "amapUrl": "https://www.amap.com/search?query=朱光玉+重庆"
      },
      { 
        "nombre": "Peijie 珮姐老火锅", 
        "tipo": "Hotpot", 
        "categoria": "Restaurante", 
        "precio": "150-250 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Black Pearl. Late-night",
        "especialidadTag": "Mala Hotpot",
        "amapUrl": "https://www.amap.com/search?query=珮姐老火锅+重庆"
      },
      { 
        "nombre": "Yuwei Xiaoyu 渝味晓宇", 
        "tipo": "Hotpot", 
        "categoria": "Restaurante", 
        "precio": "80-120 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "A Bite of China featured",
        "especialidadTag": "Mala Hotpot",
        "amapUrl": "https://www.amap.com/search?query=渝味晓宇+重庆"
      },
      { 
        "nombre": "Pipa Garden 枇杷园", 
        "tipo": "Hotpot", 
        "categoria": "Restaurante", 
        "precio": "100-200 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "LARGEST hotpot 700+ tables",
        "especialidadTag": "Mala Hotpot",
        "amapUrl": "https://www.amap.com/search?query=枇杷园火锅+重庆"
      },
      { 
        "nombre": "Zhao Er 赵二火锅", 
        "tipo": "Hotpot", 
        "categoria": "Restaurante", 
        "precio": "60-80 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Lonely Planet. Best budget",
        "amapUrl": "https://www.amap.com/search?query=赵二火锅+重庆"
      },
      { 
        "nombre": "Huashi Wandza 花市豌杂面", 
        "tipo": "Xiaomian", 
        "categoria": "Restaurante", 
        "precio": "15-17 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Film location. Dianping 4.5",
        "especialidadTag": "Xiaomian Noodles",
        "amapUrl": "https://www.amap.com/search?query=花市豌杂面+重庆"
      },
      { 
        "nombre": "Song Xiaomian 宋小面", 
        "tipo": "Xiaomian", 
        "categoria": "Restaurante", 
        "precio": "15-20 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "#1 Top 50 Xiaomian 2024",
        "especialidadTag": "Xiaomian Noodles",
        "amapUrl": "https://www.amap.com/search?query=宋小面+重庆"
      },
      { 
        "nombre": "Jiaotong Chaguan 交通茶馆", 
        "tipo": "Traditional Tea", 
        "categoria": "Casa de Té", 
        "precio": "8-10 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "1970s teahouse. Crazy Stone film",
        "amapUrl": "https://www.amap.com/search?query=交通茶馆+重庆"
      },
      { 
        "nombre": "Shuguan Coffee 树冠咖啡", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "30-40 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "100yr residence. Art gallery",
        "amapUrl": "https://www.amap.com/search?query=树冠咖啡+重庆"
      }
    ],
    "rutas": [
      { "nombre": "Ultimate Hotpot Crawl", "duracion": "2 days", "stops": "Yuwei → Zhu Guangyu → Peijie → Pipa", "costo": "¥550 total", "distancia": "Various", "amapUrl": "https://www.amap.com/search?query=火锅+重庆" },
      { "nombre": "Nanbin Road Dining", "duracion": "Evening", "stops": "Yi Laotou → Riverside dining → Night skyline", "costo": "¥70-100", "distancia": "~2km", "amapUrl": "https://www.amap.com/search?query=南滨路+重庆" }
    ],
    "imagen": "/images/chongqing.svg",
    "color": "#DC143C"
  },

  "Chengdu": {
    "tier": "Tier 1",
    "promedio_diario": 272,
    "descripcion": "Cuna Sichuan auténtica. 2 Michelin 2-star + cultura té bambú",
    "especialidades": ["Mapo Tofu", "Kung Pao Chicken", "Dan Dan Noodles", "Hotpot", "Chuanchuan"],
    "precios": {
      "Street Food": { min: 4, max: 25 },
      "Restaurantes Tradicionales": { min: 30, max: 100 },
      "Hotpot": { min: 60, max: 140 },
      "Fine Dining": { min: 500, max: 1000 }
    },
    "restaurantes": [
      { 
        "nombre": "Yu Zhi Lan 玉芝兰", 
        "tipo": "Fine Sichuan", 
        "categoria": "Restaurante", 
        "precio": "500-1000 CNY", 
        "rating": "⭐⭐ Michelin", 
        "destacado": "18 seats. 25-course tasting",
        "amapUrl": "https://www.amap.com/search?query=玉芝兰+成都"
      },
      { 
        "nombre": "Chen Mapo Tofu 陈麻婆", 
        "tipo": "Sichuan", 
        "categoria": "Restaurante", 
        "precio": "30-100 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "1862 original. UNESCO heritage",
        "especialidadTag": "Mapo Tofu",
        "amapUrl": "https://www.amap.com/search?query=陈麻婆豆腐+成都"
      },
      { 
        "nombre": "Song Yun Ze 松云泽", 
        "tipo": "Fine Sichuan", 
        "categoria": "Restaurante", 
        "precio": "400-800 CNY", 
        "rating": "⭐ Michelin", 
        "destacado": "Historical banquet format",
        "amapUrl": "https://www.amap.com/search?query=松云泽+成都"
      },
      { 
        "nombre": "Gang Guan Chang 钢管厂", 
        "tipo": "Chuanchuan", 
        "categoria": "Restaurante", 
        "precio": "60-80 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "THE chuanchuan. Founded 1987",
        "especialidadTag": "Chuanchuan",
        "amapUrl": "https://www.amap.com/search?query=钢管厂小郡肝+成都"
      },
      { 
        "nombre": "Gan Ji Feichangfen 甘记", 
        "tipo": "Breakfast", 
        "categoria": "Restaurante", 
        "precio": "15-25 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "NEW 2024 Michelin Bib",
        "amapUrl": "https://www.amap.com/search?query=甘记肥肠粉+成都"
      },
      { 
        "nombre": "Heming Tea House 鹤鸣茶社", 
        "tipo": "Traditional Tea", 
        "categoria": "Casa de Té", 
        "precio": "10-35 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "1923. People's Park. Bamboo chairs",
        "amapUrl": "https://www.amap.com/search?query=鹤鸣茶社+人民公园"
      },
      { 
        "nombre": "Ruben Coffee 如本", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "25-40 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "2013 third-wave pioneer",
        "amapUrl": "https://www.amap.com/search?query=如本咖啡+成都"
      },
      { 
        "nombre": "Five Elephant 五象", 
        "tipo": "Specialty Coffee", 
        "categoria": "Cafetería", 
        "precio": "30-50 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Berlin roaster. Air-shipped beans",
        "amapUrl": "https://www.amap.com/search?query=五象咖啡+成都"
      }
    ],
    "rutas": [
      { "nombre": "Sichuan Breakfast Tour", "duracion": "7:00-10:00 AM", "stops": "Gan Ji → Zhizi Baozi → Xiao Tan Douhua", "costo": "¥30-50", "distancia": "~2km", "amapUrl": "https://www.amap.com/search?query=四川早餐+成都" },
      { "nombre": "Jinli Food Walk", "duracion": "Afternoon", "stops": "San Da Pao → Bo Bo Ji → Dan Dan Mian", "costo": "¥40-60", "distancia": "550m", "amapUrl": "https://www.amap.com/search?query=锦里小吃街+成都" },
      { "nombre": "Kuanzhai Alley Dining", "duracion": "Half day", "stops": "Heritage → % Arabica → Street vendors", "costo": "¥100-200", "distancia": "~1km", "amapUrl": "https://www.amap.com/search?query=宽窄巷子+成都" }
    ],
    "imagen": "/images/chengdu.svg",
    "color": "#B8860B"
  },

  "Zhangjiajie": {
    "tier": "Tier 3",
    "promedio_diario": 100,
    "descripcion": "Cocina Tujia extremadamente picante. Avatar Pillars backdrop",
    "especialidades": ["Sanxiaguo (三下锅)", "Tujia Smoked Bacon", "Rock Ear", "Giant Salamander", "Cold Noodles"],
    "precios": {
      "Noodles/Street": { min: 8, max: 30 },
      "Restaurantes Locales": { min: 40, max: 80 },
      "Zona Escénica": { min: 80, max: 150 }
    },
    "restaurantes": [
      { 
        "nombre": "Hu Shifu 胡师傅", 
        "tipo": "Sanxiaguo", 
        "categoria": "Restaurante", 
        "precio": "40-66 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "THE most famous. Taxi drivers know",
        "especialidadTag": "Sanxiaguo",
        "amapUrl": "https://www.amap.com/search?query=胡师傅三下锅+张家界"
      },
      { 
        "nombre": "Qin Dama 秦大妈", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "66 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Gold medal. Warm service",
        "amapUrl": "https://www.amap.com/search?query=秦大妈+张家界"
      },
      { 
        "nombre": "Xianjian Tucai 湘健", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "67-76 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "#1 Wulingyuan Dianping",
        "amapUrl": "https://www.amap.com/search?query=湘健土菜馆+武陵源"
      },
      { 
        "nombre": "Suoxi Shanzhai 索溪山寨", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "80 CNY", 
        "rating": "⭐⭐⭐⭐½", 
        "destacado": "Rock ear chicken ¥98. Celebrity visits",
        "amapUrl": "https://www.amap.com/search?query=索溪山寨+张家界"
      },
      { 
        "nombre": "Yinxiang Niyan 印象鲵宴", 
        "tipo": "Specialty", 
        "categoria": "Restaurante", 
        "precio": "85-103 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Giant salamander ¥128-168",
        "amapUrl": "https://www.amap.com/search?query=印象鲵宴+张家界"
      },
      { 
        "nombre": "Zhu Naoke 猪脑壳", 
        "tipo": "Cold Noodles", 
        "categoria": "Restaurante", 
        "precio": "17-23 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "Light of Zhangjiajie. 1,000+ bowls/day",
        "especialidadTag": "Cold Noodles",
        "amapUrl": "https://www.amap.com/search?query=猪脑壳凉面+张家界"
      }
    ],
    "rutas": [
      { "nombre": "Tujia Food Discovery", "duracion": "Full day", "stops": "Cold noodles → Hu Shifu → Qin Dama → Night market", "costo": "¥120-180", "distancia": "City center", "amapUrl": "https://www.amap.com/search?query=土家菜+张家界" },
      { "nombre": "Scenic Area Dining", "duracion": "Park day", "stops": "Zhu Naoke breakfast → Pack snacks → Suoxi dinner", "costo": "¥100-150", "distancia": "Wulingyuan", "amapUrl": "https://www.amap.com/search?query=武陵源+张家界" }
    ],
    "imagen": "/images/zhangjiajie.svg",
    "color": "#FF4500"
  },

  "Fenghuang": {
    "tier": "Ciudad Antigua",
    "promedio_diario": 80,
    "descripcion": "Mejor valor gastronómico. Cultura Miao/Tujia río Tuojiang",
    "especialidades": ["Blood Duck", "Sour Fish", "River Shrimp Cake", "Ginger Candy", "Social Rice", "Miao Herb Meat"],
    "precios": {
      "Night Market": { min: 5, max: 20 },
      "Ancient Town": { min: 20, max: 70 },
      "Restaurantes": { min: 30, max: 90 }
    },
    "restaurantes": [
      { 
        "nombre": "Dashi 大使饭店", 
        "tipo": "Miao/Tujia", 
        "categoria": "Restaurante", 
        "precio": "30-44 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Near Hongqiao. 10+ years. Authentic",
        "amapUrl": "https://www.amap.com/search?query=大使饭店+凤凰古城"
      },
      { 
        "nombre": "Lao Genjiu 老根酒家", 
        "tipo": "Hunan", 
        "categoria": "Restaurante", 
        "precio": "33-56 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Best blood duck. Riverside",
        "amapUrl": "https://www.amap.com/search?query=老根酒家+凤凰"
      },
      { 
        "nombre": "Wanmuchun 万木春", 
        "tipo": "Traditional", 
        "categoria": "Restaurante", 
        "precio": "50-88 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Courtyard. Sour fish ¥68",
        "amapUrl": "https://www.amap.com/search?query=万木春+凤凰古城"
      },
      { 
        "nombre": "Tuojiang Renjia 沱江人家", 
        "tipo": "Riverside", 
        "categoria": "Restaurante", 
        "precio": "45-85 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Night lights view. Popular",
        "amapUrl": "https://www.amap.com/search?query=沱江人家+凤凰"
      },
      { 
        "nombre": "Shen Congwen Bar Street 沈从文酒吧街", 
        "tipo": "Night Market", 
        "categoria": "Restaurante", 
        "precio": "12-35 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Street food + beer. Riverside stroll",
        "amapUrl": "https://www.amap.com/search?query=沈从文酒吧街+凤凰"
      },
      { 
        "nombre": "Ancient Tea House 古城茶楼", 
        "tipo": "Traditional Tea", 
        "categoria": "Casa de Té", 
        "precio": "13-25 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Balcony views. Ginger tea ¥13",
        "amapUrl": "https://www.amap.com/search?query=古城茶楼+凤凰"
      },
      { 
        "nombre": "Hongqiao Snack Stalls 虹桥小吃", 
        "tipo": "Street Food", 
        "categoria": "Restaurante", 
        "precio": "6-18 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "¥6 ginger candy. ¥8 river snails",
        "amapUrl": "https://www.amap.com/search?query=虹桥小吃+凤凰古城"
      }
    ],
    "rutas": [
      { "nombre": "Ancient Town Slow Food", "duracion": "Full day", "stops": "Tea house breakfast → Lunch at Dashi → Sunset beer → Night market", "costo": "¥60-120", "distancia": "1km old town", "amapUrl": "https://www.amap.com/search?query=凤凰古城+小吃" },
      { "nombre": "Tuojiang River Dining", "duracion": "Evening", "stops": "Lao Genjiu → River walk → Bar street → Wanmuchun", "costo": "¥100-180", "distancia": "Riverside loop", "amapUrl": "https://www.amap.com/search?query=沱江+凤凰古城" }
    ],
    "imagen": "/images/fenghuang.svg",
    "color": "#CD853F"
  },

  "Furong": {
    "tier": "Ciudad Antigua",
    "promedio_diario": 80,
    "descripcion": "2,000 años Tujia. 60m waterfall. Rice tofu capital ¥5 bowls",
    "especialidades": ["Mi Doufu (Rice Tofu)", "Blood Duck", "World's #1 Snail", "Sour Meat", "Wild Hu Cong", "Mugwort Baba"],
    "precios": {
      "Street Snacks": { min: 3, max: 15 },
      "Restaurantes Locales": { min: 40, max: 80 },
      "Waterfall View": { min: 50, max: 120 }
    },
    "restaurantes": [
      { 
        "nombre": "Liu Xiaoqing No.113 刘晓庆", 
        "tipo": "Rice Tofu", 
        "categoria": "Restaurante", 
        "precio": "5-10 CNY", 
        "rating": "⭐⭐⭐⭐⭐", 
        "destacado": "ORIGINAL film location. 3,000+ bowls/day",
        "amapUrl": "https://www.amap.com/search?query=刘晓庆米豆腐+芙蓉镇"
      },
      { 
        "nombre": "Waterfall Viewing Deck 观景台", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "50-70 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "BEST waterfall view. Night lights magical",
        "amapUrl": "https://www.amap.com/search?query=观景台餐厅+芙蓉镇"
      },
      { 
        "nombre": "Waterfall Restaurant 观瀑餐厅", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "118 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Premium private-kitchen. Waterfall views",
        "amapUrl": "https://www.amap.com/search?query=观瀑餐厅+芙蓉镇"
      },
      { 
        "nombre": "World's #1 Snail 天下第一螺", 
        "tipo": "Specialty", 
        "categoria": "Restaurante", 
        "precio": "40-60 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Mengdong River snails ¥28-38",
        "amapUrl": "https://www.amap.com/search?query=天下第一螺+芙蓉镇"
      },
      { 
        "nombre": "Yuweizuan 御味轩", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "55 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Cured meat hotpot ¥68-88. Very spicy",
        "amapUrl": "https://www.amap.com/search?query=御味轩+芙蓉镇"
      },
      { 
        "nombre": "Tujia Memory 土家记忆", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "50-80 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Ten Great Bowls banquet. Ethnic décor",
        "amapUrl": "https://www.amap.com/search?query=土家记忆+芙蓉镇"
      },
      { 
        "nombre": "Haoke Lai 豪客来", 
        "tipo": "Tujia", 
        "categoria": "Restaurante", 
        "precio": "50-80 CNY", 
        "rating": "⭐⭐⭐⭐", 
        "destacado": "Outside scenic. Bandit-style duck",
        "amapUrl": "https://www.amap.com/search?query=豪客来+芙蓉镇"
      }
    ],
    "rutas": [
      { "nombre": "Waterfall Town Discovery", "duracion": "Full day", "stops": "Liu Xiaoqing breakfast → Waterfall Deck lunch → Yuweizuan dinner → Night waterfall", "costo": "¥150-250", "distancia": "~1km ancient town", "amapUrl": "https://www.amap.com/search?query=芙蓉镇+瀑布" }
    ],
    "imagen": "/images/furong.svg",
    "color": "#2E8B57"
  }
};

export const getCiudades = () => Object.keys(ciudadesData);
export const getCiudad = (nombre: string) => ciudadesData[nombre as keyof typeof ciudadesData];

// Helper para filtrar por categoría
export const filterByCategory = (ciudad: string, categoria: string) => {
  const ciudadData = getCiudad(ciudad);
  if (!ciudadData) return [];
  return ciudadData.restaurantes.filter(r => r.categoria === categoria);
};

// Helper para obtener todas las categorías únicas
export const getAllCategories = () => {
  const categories = new Set<string>();
  Object.values(ciudadesData).forEach(ciudad => {
    ciudad.restaurantes.forEach(r => categories.add(r.categoria));
  });
  return Array.from(categories);
};
