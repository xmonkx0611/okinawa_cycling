// Version 9.6.3 (Citations as Comments, Enriched Highlights, Updated Summaries)
const tripData = {
    // 1.0 Meta information for the page
    meta: {
        title: "沖繩7日單車環島",
        mainTitle: "沖繩7日單車環島"
    },

    // 2.1 Food Mission data
    missionSummary: {
        yakiniku: { completed: true, description: "燒肉" }, // Day 1 Dinner
        ramen: { completed: true, description: "拉麵店" }, // Day 6 Dinner (alternative)
        okinawa_soba: { completed: true, description: "沖繩麵" }, // Day 6 Lunch
        cafe: { completed: true, description: "海景咖啡廳" }, // Day 2 Lunch
        izakaya: { completed: true, description: "居酒屋" },
        b_gourmet: { completed: true, description: "B級美食" },
        sweets: { completed: true, description: "甜點" }
    },
    // 3.5 Food Guide
    // 3.5 Food Guide (★ URLs and Phones updated ★)
    foodGuide: {
        yakiniku: [
            { name: "やきにく華", description: "那霸市區高品質石垣牛燒肉店。", address: "沖縄県那覇市久茂地2-6-2 久茂地ガーデンビル", hours: "17:00～23:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJByAR0oJp5TQRNV2TL7pQkwQ", phone: "050-5448-6623", parkingInfo: "無專用停車場，請使用周邊付費停車場。" },
            { name: "島豬七輪燒肉滿味", description: "名護市知名Agu豬燒肉專賣店。", address: "沖縄県名護市伊差川251", hours: "17:00～23:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJz-l6_p1p5TQR9uzcOhvrf9U", phone: "0980-53-5383", parkingInfo: "有專用免費停車場。" }
        ],
        ramen: [
            { name: "琉球新麵 通堂 (本店)", description: "分為「男人麵」(豚骨)與「女人麵」(雞湯)的特色拉麵。", address: "沖縄県那覇市金城5-4-6", hours: "11:00～24:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJGaKzQLFp5TQRYmh800Fdr9o", phone: "098-857-5577", parkingInfo: "有專用免費停車場。" },
            { name: "暖暮拉麵 (那霸牧志店)", description: "九州拉麵總選舉第一名，國際通人氣排隊店。", address: "沖縄県那覇市牧志2-16-10", hours: "11:00～凌晨02:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJq6q-z3tp5TQR7_beBOTvC4Y", phone: "098-863-8331", parkingInfo: "無專用停車場。" },
            { name: "ラーメン鬼蔵 (RAMEN ONIZO)", description: "北部今歸仁附近的100%豚骨高湯拉麵店。", address: "沖縄県国頭郡今帰仁村字兼次73-1", hours: "11:30～15:30, 18:00～21:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJz2wJ345V5DQRsmrx-emQHVM", phone: "050-5487-3538", parkingInfo: "有專用免費停車場。" }
        ],
        okinawa_soba: [
             { name: "首里そば (Shuri Soba)", description: "首里城周邊的人氣沖繩麵店，麵條口感獨特。", address: "沖縄県那覇市首里赤田町1-7", hours: "11:30～14:00 (售完即止)", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJQQeQcf9r5TQRfq4D25cCKXI", phone: "098-884-0556", parkingInfo: "有專用停車場 (車位少)。" }
        ],
        cafe: [
            { name: "浜辺の茶屋", description: "南城市知名海景咖啡廳，滿潮時彷彿坐在海上。", address: "沖縄県南城市玉城字玉城2-1", hours: "10:00～17:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJAQCB-chv5TQRr3JnMK-hXcE", phone: "098-948-2073", parkingInfo: "有專用免費停車場。" },
            { name: "古宇利島海景咖啡廳", description: "古宇利島上有眾多選擇，可欣賞古宇利藍。(以5910 sa-ta-cafe為例)", address: "沖縄県国頭郡今帰仁村古宇利", hours: "依店家不同", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJm76XRyFZ5DQRsQbjaO-MmCI", phone: "090-6867-7196 (5910 sa-ta-cafe)", parkingInfo: "依店家不同" }
        ],
        izakaya: [
            { name: "じまんや 那覇店", description: "國際通人氣第一的居酒屋，需預約。", address: "沖縄県那覇市久茂地3-12-1", hours: "17:00～24:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJvZXT03tp5TQRSQwH5JHYoXw", phone: "098-943-2081", parkingInfo: "無專用停車場。" }
        ],
        b_gourmet: [
            { name: "ポーク玉子おにぎり本店 (豬肉蛋飯糰)", description: "那霸牧志市場旁的B級美食排隊名店。(匹配結果為ChouChou)", address: "沖縄県那覇市松尾2-8-35", hours: "07:00～17:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJe0fFxaBp5TQRvC8m4J9d4Pg", phone: "070-5275-3866", parkingInfo: "無停車場，僅限外帶。" },
            { name: "奥武島 中本鮮魚天婦羅店", description: "奥武島上最知名的沖繩天婦羅店，現炸美味。", address: "沖縄県南城市玉城奥武193", hours: "10:00～18:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJU-B5eJtv5TQR-7TL1E-Yfa0", phone: "098-948-3583", parkingInfo: "有免費停車場。" }
        ],
        sweets: [
             { name: "Okuma Private Beach & Resort 內甜點", description: "度假村內可能提供精緻下午茶或甜點。", address: "沖縄県国頭郡国頭村奥間913", hours: "依設施公告", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs", phone: "0980-41-2222", parkingInfo: "有停車場。" },
             { name: "Yuinchi Hotel Nanjo 內甜點", description: "飯店內餐廳或咖啡廳可能提供甜點。", address: "沖縄県南城市佐敷新里1688", hours: "依設施公告", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY", phone: "098-947-0111", parkingInfo: "有停車場。" }
        ]
    },
    // 3.6 Shopping Guide
    shoppingGuide: {
        souvenirs: [
            { name: "御菓子御殿 紅芋塔", description: "沖繩最經典的伴手禮，紫薯泥香甜。", priceEstimate: "約 ¥1,200 (10入)", purchaseLocations: "國際通、恩納村本店、機場", shelfLife: "常溫30天" },
            { name: "南風堂 雪塩金楚糕", description: "宮古島雪鹽製作，鹹甜口感，入口即化。", priceEstimate: "約 ¥1,000 (20入)", purchaseLocations: "國際通、各大伴手禮店、機場", shelfLife: "常溫約50天" },
            { name: "ROYCE' 石垣島海鹽巧克力", description: "沖繩限定口味，海鹽提升了巧克力的風味。", priceEstimate: "約 ¥800", purchaseLocations: "國際通、機場", shelfLife: "冷藏30天" },
            { name: "Lululun 沖繩限定面膜", description: "使用沖繩香檬、苦瓜等在地素材製作。", priceEstimate: "約 ¥1,600 (5包入)", purchaseLocations: "國際通藥妝店、伴手禮店", shelfLife: "N/A" },
            { name: "Calbee+ 沖繩香檬口味洋芋片", description: "地區限定的清爽酸味洋芋片。", priceEstimate: "約 ¥900 (8包入)", purchaseLocations: "國際通 Calbee+ 專賣店、機場", shelfLife: "常溫約3個月" }
        ],
        locations: [
            { name: "國際通", description: "那霸市最主要的觀光大街，集結所有伴手禮、藥妝、餐廳。", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJMS9BUXdp5TQRAl6RXvY5aY0", phone: "不明" },
            { name: "那霸機場", description: "國內線航廈2樓伴手禮區非常齊全，適合最後補貨。", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJjSyLjsRp5TQRkP5WN6rOTFA", phone: "098-840-1151" },
            { name: "沖繩輪業 (那霸前島店)", description: "沖繩最大的自行車連鎖店，可購買維修零件或補給品。", mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJo3BK03hp5TQRFribW3tPTLQ", phone: "098-868-0404"}
        ]
    },

    // 2.4 Themed Guides
    themedGuidesData: {
        cycling_tips: {
            title: "🚴 沖繩單車環島攻略",
            description: "針對沖繩環島的關鍵技巧與注意事項。",
            items: [
                { name: "路線方向", items: ['<span class="emphasis">建議順時針</span>: 官方推薦順時針騎行，可確保海景在左側 (靠海側)，拍照與欣賞風景更佳。'] },
                { name: "補給策略", items: ['<span class="emphasis">善用道之驛</span>: 沖繩的「道の駅」(道之驛) 是最佳補給點，如「許田」、「大宜味」。', '<span class="emphasis">便利商店</span>: 全家 (FamilyMart) 和 LAWSON 密度高，是補水和簡單熱食的好夥伴。'] },
                { name: "裝備提醒", items: ['<span class="emphasis">防曬與補水</span>: 沖繩紫外線極強，即使是10月也務必做好全套防曬。', '<span class="emphasis">維修工具</span>: 務必攜帶備胎、挖胎棒、打氣筒。', '<span class="emphasis">側風注意</span>: 海中道路、古宇利大橋等路段側風強勁，請務必小心。'] }
            ]
        },
        okinawa_shrines: {
            title: "⛩️ 琉球聖地與能量景點",
            description: "沖繩擁有獨特的琉球神道信仰，結合了自然崇拜與祖靈信仰。",
            items: [
                { name: "波上宮", prefecture: "沖繩縣那霸市", popular: "琉球八社之首，建在懸崖上的神社，是那霸市區的代表性聖地。", special: "以祈求航海安全、平安順遂聞名。" },
                { name: "齋場御嶽", prefecture: "沖繩縣南城市", popular: "琉球王國最高級別的聖地，被列為世界遺產。", special: "由巨大的鐘乳石構成，充滿神秘與莊嚴的氛圍，禁止觸摸。" },
                { name: "首里城", prefecture: "沖繩縣那霸市", popular: "琉球王國的政治文化中心，雖在重建中，其周邊的「守禮門」與城牆仍是重要象徵。", special: "周邊的玉陵、金城町石疊道共同構成了王國的歷史風貌。" }
            ]
        }
    },

    // 2.2 Awards Data
    awardsData: {
        top100: [
            {
                title: "🛣️ 日本之道100選",
                theme: "border-gray-400",
                locations: [
                    { name: "金城町石疊道", prefecture: "沖繩縣那霸市", details: "鋪滿琉球石灰岩的古道，長約300公尺，是感受首里城下町風情的歷史散步道。" }
                ]
            }
        ],
        greatThree: [
            {
                title: "🏛️ 世界遺產 (琉球王國的Gusuku及相關遺產群)",
                theme: "border-indigo-300",
                status: "入選",
                location: {
                    name: "今歸仁城跡、勝連城跡、齋場御嶽、首里城",
                    prefecture: "沖繩縣",
                    description: "本次行程將造訪其中四處。這些遺跡見證了琉球王國在14至18世紀間獨特的文化、信仰與政治結構。"
                },
                others: "座喜味城跡、中城城跡、園比屋武御嶽石門、玉陵、識名園"
            }
        ]
    },

    // 2.3 Seasonal Data
    seasonalData: {
        spring: {
            title: '春 (3-5月)',
            theme_color: 'bg-pink-100',
            icon: '🌸',
            highlights: [
                '<span class="emphasis">海炎祭</span>: 4月於宜野灣舉行，是日本最早的大型煙火大會。',
                '<span class="emphasis">黃金週</span>: 5月初日本長假，觀光景點人潮眾多。'
            ],
            foods: [
                '<span class="emphasis">時令海鮮</span>: 鮪魚、鰹魚。',
                '<span class="emphasis">蔬菜</span>: 苦瓜 (Goya) 開始盛產。'
            ]
        },
        summer: {
            title: '夏 (6-9月)',
            theme_color: 'bg-blue-100',
            icon: '☀️',
            highlights: [
                '<span class="emphasis">颱風季</span>: 需密切注意天氣預報，是騎行的主要風險。',
                '<span class="emphasis">Eisa太鼓舞</span>: 8月各地舉辦祭典，可欣賞傳統Eisa太鼓表演。'
            ],
            foods: [
                '<span class="emphasis">芒果</span>: 沖繩芒果的盛產季。',
                '<span class="emphasis">鳳梨</span>: 名護市周邊是鳳梨產地。',
                '<span class="emphasis">海葡萄</span>: 恩納村特產。'
            ]
        },
        autumn: {
            title: '秋 (10-11月)',
            theme_color: 'bg-orange-100',
            icon: '🚴',
            highlights: [
                '<span class="emphasis">最佳騎行季節</span>: 氣候涼爽，颱風季結束，是單車環島的黃金時期。',
                '<span class="emphasis">首里城祭</span>: 10月底至11月初舉行，有傳統的琉球王朝行列。',
                '<span class="emphasis">Tour de Okinawa</span>: 11月舉行，是日本重要單車賽事。'
            ],
            foods: [
                '<span class="emphasis">沖繩麵節</span>: 10月17日為「沖繩麵之日」。',
                '<span class="emphasis">シークワーサー</span>: 沖繩香檬盛產季。'
            ]
        },
        winter: {
            title: '冬 (12-2月)',
            theme_color: 'bg-indigo-100',
            icon: '🐳',
            highlights: [
                '<span class="emphasis">賞鯨</span>: 12月底至3月是座間味海域的賞鯨旺季。',
                '<span class="emphasis">日本最早櫻花</span>: 1月下旬至2月初，北部山原地區的緋寒櫻盛開。'
            ],
            foods: [
                '<span class="emphasis">Agu豬</span>: 涮涮鍋是冬季暖身美食。',
                '<span class="emphasis">泡盛</span>: 適合在微涼天氣小酌。'
            ]
        }
    },

    // 5.6 Event Calendar
    eventCalendar: [
        {
            name: "首里城祭",
            dateRange: "10月下旬 - 11月初",
            location: '<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJZ9v0bP5r5TQRi0-esrqficA" target="_blank">首里城公園</a> (電話: 098-886-2020), <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJMS9BUXdp5TQRAl6RXvY5aY0" target="_blank">國際通</a> (電話: 不明)', // Updated phone info
            description: "重現琉球王朝時代的「冊封使行列」與傳統藝能表演。",
            type: "祭典"
        },
        {
            name: "沖繩產業祭",
            dateRange: "10月下旬 (10/25-10/27)",
            location: '<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJq6rqhqNp5TQRL0Kvs0alP5o" target="_blank">奧武山公園</a> (電話: 098-858-2700)', // Updated phone info
            description: "沖繩縣最大的綜合產業展覽，可品嚐美食與購買特產。",
            type: "市集"
        },
        {
            name: "環沖繩自行車大會 (Tour de Okinawa)",
            dateRange: "2025/11/8 - 11/9",
            location: "名護市及本島北部", // Nago city - implicit phone via Oriental Hotel etc.
            description: "日本最大型的市民自行車賽事。",
            type: "運動"
        }
    ],

    // 3.2 Detailed Highlights
    detailedHighlights: [
        {
            name: "波上宮",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJdT8KUYVp5TQRrCRV4eFRanc",
            phone: "098-868-3697",
            ticketInfo: "免費參拜",
            parkingInfo: "設有少量參拜者專用免費停車場。",
            expertRec: "琉球八社之首，是那霸市區的信仰中心。建在懸崖上，可同時欣賞神社與海灘，是熱身騎行的絕佳終點。",
            historyCulture: "自古以來被尊為「當國第一神社」，祈求航海安全與豐收。神社的朱紅色建築與背景的藍海形成強烈對比。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：參拜後可步行至下方的「波之上海灘」，是那霸市區唯一的海灘。</li><li><span class="emphasis">御守推薦</span>：『紅型書包御守』(祈求交通安全) 非常有特色。</li><li><span class="emphasis">拍照點</span>：從旁邊的連結橋上拍攝懸崖上的神社全景。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' }
            ]
        },
        {
            name: "万座毛",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-adBh3gD5TQRGFnnzG897N8",
            phone: "098-966-8080",
            ticketInfo: "大人 100日圓 (設施維護費)",
            parkingInfo: "設有大型免費停車場。",
            expertRec: "Day 4 返回名護途中的經典西海岸景點。名稱意為「可供萬人乘坐的草原」。是欣賞象鼻岩和日落的好地方。",
            historyCulture: "琉球尚敬王來訪時，讚嘆此地之遼闊而得名。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：欣賞象鼻岩與斷崖下的清澈海水。</li><li><span class="emphasis">拍照點</span>：拍攝象鼻岩、斷崖另一側的度假飯店、以及夕陽海景 (若時間配合)。</li><li><span class="emphasis">設施</span>：新建的遊客中心內有餐飲和伴手禮店。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' }
            ]
        },
        {
            name: "古宇利大橋",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJyy0FRAhZ5DQRIfztLp8vdWc",
            phone: "不明",
            ticketInfo: "免費通行",
            parkingInfo: "大橋兩端均設有免費停車場與休息區。",
            expertRec: "Day 2 環島路線的核心亮點。全長近2公里的跨海大橋，騎行體驗絕佳。橋兩側海水透明度極高，被稱為「古宇利藍」。務必在此停留拍照。",
            historyCulture: "連接古宇利島與屋我地島，是沖繩縣內第二長的免費跨海大橋。",
            focusPoints: '<ul><li><span class="emphasis">行動指令</span>：在橋上騎行（注意安全），感受海風。</li><li><span class="emphasis">安全提醒</span>：橋上風勢強勁，請握緊把手，注意側風。</li><li><span class="emphasis">拍照點</span>：從本島側的南詰展望所拍攝大橋全景。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' },
                { type: 'recommendation', text: '🚴 單車必騎路線' }
            ]
        },
        {
            name: "今歸仁城跡",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk_KWO7b55DQRF6wOVeWpIDE",
            phone: "0980-56-4400",
            ticketInfo: "大人 600日圓",
            parkingInfo: "設有大型免費停車場。",
            expertRec: "Day 2 下午的文化重點 (若時間允許)。世界遺產，位於高地上，可俯瞰東海。其城牆曲線優美，是沖繩 Gusuku (城) 的代表之一。",
            historyCulture: "14世紀琉球「三山時代」中「北山王」的居城，規模宏大。每年一月底二月初也是著名的賞櫻名所。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：欣賞被稱為「百曲がり」的優美石牆，以及從主城郭（主郭）眺望的絕景。</li><li><span class="emphasis">拍照點</span>：從城牆高處拍攝蜿蜒的城牆線條與遠方海景。</li></ul>',
            specialTags: [
                { type: 'world_heritage', text: '🏛️ 世界遺產' }
            ]
        },
        {
            name: "海中道路",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ9eHmSbQJ5TQRsM-Ddc_UYWk",
            phone: "不明",
            ticketInfo: "免費通行",
            parkingInfo: "道路中點的「海の駅あやはし館」設有大型免費停車場。",
            expertRec: "雖然在此次「均衡里程版」Day 3 路線中可能不會直接經過，但它是沖繩中部東海岸的代表性景點。若 Day 3 行程因故提前結束於うるま市，可考慮隔天早上由此出發。",
            historyCulture: "連接與勝半島與平安座島等離島，全長約4.7公里。",
            focusPoints: '<ul><li><span class="emphasis">騎行體驗</span>：彷彿在海上騎行，視野開闊。</li><li><span class="emphasis">中途休息</span>：「海の駅あやはし館」是絕佳的休息、用餐、觀景點。</li><li><span class="emphasis">安全提醒</span>：風勢強勁，請注意安全。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' },
                { type: 'recommendation', text: '🚴 單車必騎路線' }
            ]
        },
        {
            name: "勝連城跡",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJmWkqdKYO5TQRviUZ4fY-ih4",
            phone: "098-978-2033",
            ticketInfo: "免費參觀",
            parkingInfo: "山腳下設有免費停車場及休息中心。",
            expertRec: "世界遺產。同樣地，在此次 Day 3 路線可能不會直接經過。若行程有變動，或對歷史有興趣，可安排參觀。登頂後視野極佳，可俯瞰海中道路。",
            historyCulture: "15世紀著名按司「阿麻和利」的居城，以其繁榮的海外貿易聞名。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：攀登至最高處的「一の曲輪」，欣賞360度全景。</li><li><span class="emphasis">拍照點</span>：從頂端拍攝海中道路及周邊海景。</li></ul>',
            specialTags: [
                { type: 'world_heritage', text: '🏛️ 世界遺產' }
            ]
        },
        {
            name: "Niraikanai橋 (ニライカナイ橋)",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJrZKCciJx5TQRw-i-Fjf8ecs",
            phone: "098-867-2941",
            ticketInfo: "免費通行",
            parkingInfo: "橋上方的隧道頂部設有展望台與少量免費停車位。",
            expertRec: "南部兜風、騎行的絕景路線。一座巨大的S型彎道橋，從展望台可拍下橋樑與太平洋的壯闊景色。",
            historyCulture: "Niraikanai是沖繩傳說中海的彼端的「理想鄉」。",
            focusPoints: '<ul><li><span class="emphasis">行動指令</span>：務必前往隧道上方的展望台拍照。</li><li><span class="emphasis">騎行注意</span>：下坡路段非常陡峭，請務必控制車速，檢查剎車。</li><li><span class="emphasis">拍照點</span>：展望台是拍攝S型彎道與海景的唯一地點。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' }
            ]
        },
        {
            name: "齋場御嶽 (せーふぁうたき)",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ32ERcPJx5TQRGVMsDCjNVDk",
            phone: "098-949-1899",
            ticketInfo: "大人 300日圓",
            parkingInfo: "需停在「南城市地域物產館」的免費停車場，購票後步行前往。",
            expertRec: "世界遺產之一，琉球王國最高級別的聖地。充滿莊嚴神聖的氛圍，是感受琉球自然崇拜的能量景點。",
            historyCulture: "由王國最高神女「聞得大君」掌管，至今仍是沖繩人的重要祈禱場所。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：由兩塊巨大鐘乳石形成的三角空間「三庫理」，可遙拜聖地「久高島」。</li><li><span class="emphasis">禮儀注意</span>：此為聖地，請保持安靜，勿觸摸岩石，勿打擾祈禱者。</li></ul>',
            specialTags: [
                { type: 'world_heritage', text: '🏛️ 世界遺產' },
                { type: 'recommendation', text: '🙏 能量景點' }
            ]
        },
        {
            name: "首里城公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJZ9v0bP5r5TQRi0-esrqficA",
            phone: "098-886-2020",
            ticketInfo: "免費區域+付費區域(大人 400日圓)",
            parkingInfo: "設有地下收費停車場。",
            expertRec: "琉球王國的象徵，世界遺產。雖正殿於2019年燒毀，目前正積極重建中，但周邊的城門與園區依然值得探訪。",
            historyCulture: "琉球王國近450年的政治、文化中心。其建築風格融合了中國與日本的特色。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：經典的「守禮門」、歡會門、以及參觀正殿的重建過程。</li><li><span class="emphasis">拍照點</span>：在守禮門前拍照留念。</li></ul>',
            specialTags: [
                { type: 'world_heritage', text: '🏛️ 世界遺產' },
                { type: 'event', text: '🎉 10月底: 首里城祭' }
            ]
        },
        {
            name: "金城町石疊道",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJs45DcVdp5TQR70a1msYXhl4",
            phone: "098-917-3501",
            ticketInfo: "免費參觀",
            parkingInfo: "無專用停車場，建議停在首里城停車場後步行前往。",
            expertRec: "「日本之道100選」之一，是首里城周邊的古道，鋪滿琉球石灰岩，極具歷史氛圍。",
            historyCulture: "琉球王朝時代連接首里城與那霸港的主要道路之一。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：感受古都風情，中途有「金城大Akaabu」(大赤木) 神木。</li><li><span class="emphasis">拍照點</span>：拍攝充滿年代感的石板路。</li></ul>',
            specialTags: [
                { type: 'top_100', text: '🏅 日本之道100選' }
            ]
        },
        {
            name: "辺戸岬 (Cape Hedo)",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJsVsyW1ts5DQRX7Fc17sFmHM",
            phone: "0980-41-2622",
            ticketInfo: "免費參觀",
            parkingInfo: "有免費停車場。",
            expertRec: "Day 3 環島的關鍵轉折點！沖繩本島最北端的海岬。天氣好時可遠眺鹿兒島縣的與論島。是進入艱苦東海岸路線前的最後主要景點。",
            historyCulture: "設有「祖国復帰闘争碑」，紀念二戰後沖繩脫離美軍統治、回歸日本的歷史。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：欣賞斷崖峭壁與太平洋、東海交匯的遼闊海景。</li><li><span class="emphasis">拍照點</span>：最北端石碑、祖国復帰闘争碑、茅打斷崖 (附近)。</li><li><span class="emphasis">補給提醒</span>：此處可能是進入東海岸前最後可靠的洗手間和販賣機點。</li></ul>',
            specialTags: [
                { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' }
            ]
        },
        {
            name: "福地川海浜公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJH1MWmfpP5DQRS-zFuF1gRik",
            phone: "0980-51-2301",
            ticketInfo: "免費入場",
            parkingInfo: "有免費停車場。",
            expertRec: "Day 3 皇后賽段東海岸路線上極為重要的「沙漠綠洲」。設有洗手間、自動販賣機，是極少數可以安全停靠休息的地方。務必在此休整。",
            historyCulture: "位於福地水壩下游出海口，是東村重要的親水公園。",
            focusPoints: '<ul><li><span class="emphasis">行動指令</span>：[關鍵] 務必在此充分休息，補充水分，為接下來的路程做準備。</li><li><span class="emphasis">設施</span>：洗手間、販賣機、小型沙灘。</li></ul>',
            specialTags: []
        },
        {
            name: "平和祈念公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJaaiFx39m5TQR_3vrJCFiQS8",
            phone: "098-997-2765",
            ticketInfo: "公園免費，平和祈念資料館收費 (大人 300日圓)",
            parkingInfo: "有大型免費停車場。",
            expertRec: "Day 4 南部路線的核心景點之一。位於沖繩戰役最激烈的摩文仁之丘，是悼念戰爭亡者、反思歷史、祈求和平的重要場所。",
            historyCulture: "園內的「平和の礎」刻有超過24萬名犧牲者的姓名，不分國籍。「平和祈念資料館」展示了沖繩戰役的慘痛歷史。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：平和祈念資料館 (建議預留至少1小時)、平和の礎、平和の火。</li><li><span class="emphasis">心靈沉澱</span>：此處氣氛莊嚴肅穆，請以尊敬的心情參觀。</li></ul>',
            specialTags: [
                { type: 'recommendation', text: '🕊️ 歷史反思' }
            ]
        },
        { // ★ Enriched ★
            name: "ひめゆりの塔 (姬百合之塔)",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJjwcPX_pm5TQRziOnh5XGoOU",
            phone: "098-997-2100",
            ticketInfo: "塔免費參拜，姬百合平和祈念資料館收費 (大人 450日圓)",
            parkingInfo: "周邊有收費停車場。",
            expertRec: "Day 4 南部路線的另一重要歷史地標。紀念沖繩戰役中犧牲的「姬百合學徒隊」女學生與教師。參觀資料館能更深入了解她們的故事。",
            historyCulture: "學徒隊在戰爭末期被動員擔任隨軍護士，在惡劣環境下照顧傷兵，最終多數犧牲於此地附近的洞窟。",
            focusPoints: '<ul><li><span class="emphasis">參觀重點</span>：獻花悼念、參觀旁邊的姬百合平和祈念資料館。</li><li><span class="emphasis">周邊</span>：附近有販售紀念品與小吃的店家。</li></ul>',
            specialTags: [
                { type: 'recommendation', text: '🕊️ 歷史反思' }
            ]
        }
    ],

    // 3.7 Accommodation
    accommodation: [
        {
            day: "1",
            city: "名護市",
            name: "Oriental Hotel Okinawa Resort & Spa",
            url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU",
            description: "大型度假村，擁有無邊際泳池和多樣設施。位於小山坡上，視野良好。單車友善，可將自行車帶入客房 (需確認最新政策)。",
            parking: "有 (大型免費停車場)。",
            convenienceStores: [ { brand: "FamilyMart", name: "步行約5分鐘" } ]
        },
        {
            day: "2", // Kunigami
            city: "国頭村",
            name: "オクマ プライベートビーチ ＆ リゾート (Okuma Private Beach & Resort)",
            url: "https://www.google.com/search?q=https://www.google.com/maps/search/%3Fapi%3D1%26query%3D%2520%26query_place_id%3DChIJz-l6_p1p5TQR9uzcOhvrf9U",
            description: "位於山原秘境的奢華度假村，擁有廣闊的私人沙灘和多種水上活動 [cite: 24]。房間寬敞舒適，適合長途騎行後徹底放鬆。注意周邊餐飲選擇較少，建議考慮飯店內用餐。",
            parking: "有 (住宿者免費)。",
            convenienceStores: [ { brand: "FamilyMart", name: "度假村內商店或附近 (距離稍遠)" } ]
        },
        {
            day: "3", // Nanjo
            city: "南城市",
            name: "ウェルネスリゾート沖縄 ユインチホテル南城 (Yuinchi Hotel Nanjo)",
            url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY",
            description: "★ 皇后賽段恢復關鍵！以天然溫泉「猿人之湯」聞名，對於緩解騎行疲勞效果極佳 。飯店對自行車友善，視野開闊可眺望海景。是環島中途恢復體力的理想據點。",
            parking: "有 (大型免費停車場)。",
            convenienceStores: [ { brand: "FamilyMart", name: "需開車或騎車約5分鐘" } ]
        },
        {
            day: "4", // Nago
            city: "名護市",
            name: "Oriental Hotel Okinawa Resort & Spa",
            url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU",
            description: "環島結束後返回此處，可再次利用其舒適設施。作為環島慶功的據點也很合適。",
            parking: "有 (大型免費停車場)。",
            convenienceStores: [ { brand: "FamilyMart", name: "步行約5分鐘" } ]
        },
        {
            day: "5", // Naha
            city: "那霸市",
            name: "JR九州飯店Blossom那霸",
            url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo",
            description: "現代新穎的市區飯店，地理位置極佳，緊鄰國際通，樓下即是LAWSON。距離單軌電車「美榮橋」站僅需步行數分鐘，是探索那霸市區的絕佳基地。",
            parking: "有 (機械式停車場，收費)。",
            convenienceStores: [ { brand: "LAWSON", name: "飯店樓下" }, { brand: "FamilyMart", name: "步行2分鐘內" } ]
        },
        {
            day: "6", // Naha
            city: "那霸市",
            name: "JR九州飯店Blossom那霸",
            url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo",
            description: "續住於此，方便利用單軌一日券進行市區文化觀光與購物。",
            parking: "有 (機械式停車場，收費)。",
            convenienceStores: [ { brand: "LAWSON", name: "飯店樓下" }, { brand: "FamilyMart", name: "步行2分鐘內" } ]
        }
    ],

    // 2.4 Recommended Accommodations (★ Updated ★)
    recommendedAccommodations: [
        { name: "沖繩Wisteria公寓酒店", area: "本部町", features: "近美麗海水族館、公寓式。", priceEstimate: "¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJwxbphMv75DQROIPdLb8MOy4", phone: "0980-51-7722" },
        { name: "国頭かりゆし荘", area: "国頭村", features: "運動員合宿設施、價格親民、單車友善。", priceEstimate: "¥", rating: "中", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-_cqglxD5DQR9iYVKomnC80", phone: "0980-50-1906" },
        { name: "民宿 みやぐゎーさ～", area: "国頭村", features: "在地體驗、家庭料理、溫馨氛圍。", priceEstimate: "¥", rating: "中", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJhX70lU1t5DQROwPzCjCTKWs", phone: "不明" },
        { name: "ザ・サザンリンクスリゾートホテル", area: "南城市", features: "懸崖海景房、高爾夫球場。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJLwBrre5l5TQRsfleNKjmo4Q", phone: "098-998-7001" },
        { name: "ユインチホテル南城", area: "南城市", features: "★天然溫泉療癒★、單車友善。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY", phone: "098-947-0111"}, // Updated Phone
        { name: "Oriental Hotel Okinawa Resort & Spa", area: "名護市", features: "大型度假村、無邊際泳池、親子友善。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU", phone: "0980-51-1000"}, // Updated Phone
        { name: "JR九州飯店Blossom那霸", area: "那霸市", features: "交通便利、近單軌站、新穎。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo", phone: "098-861-8700"} // Updated Phone
    ],

    // 4.1 Transport Passes
    transportPasses: {
         specialTicket: {
             name: "Yui Rail 一日券 (ゆいレール一日乗車券)",
             price: "大人 800日圓",
             validity: "購票後24小時內有效",
             includes: "沖繩都市單軌電車 (Yui Rail) 無限次搭乘",
             exchangeLocation: "Yui Rail 各站自動售票機",
             purchase: "現場購買",
             valueAnalysis: "單程最高370日圓。若當日搭乘3次以上 (例如：飯店→首里城→國際通→飯店) 即划算。",
             pointUsage: [],
             discountFacilities: [
                 "首里城 (團體票價優惠)", "玉陵 (團體票價優惠)", "沖繩縣立博物館・美術館 (團體票價優惠)"
             ]
         },
         otherPasses: [
             // None relevant for this specific itinerary
         ]
    },

    // 4.4 Transport Pass Analysis
    transportPassAnalysis: "本行程主要交通工具為「自行車」與前後的巴士接駁。僅在 Day 6 (那霸文化日) 推薦購買「Yui Rail 一日券」。", // Slightly updated wording

    // 4.0 Transport Summary
    transportSummary: [
        { day: 1, route: "那霸機場 → 名護市", transport: "高速巴士", time: "下午", cost: "約 ¥1,600 - ¥2,200" },
        { day: 2, route: "名護市 → 国頭村", transport: "🚴 自行車 (約 140km)", time: "全日", cost: "補給品費用" },
        { day: 3, route: "国頭村 → 南城市", transport: "🚴 自行車 (約 160km - Queen Stage)", time: "全日", cost: "補給品費用" },
        { day: 4, route: "南城市 → 名護市", transport: "🚴 自行車 (約 110km)", time: "全日", cost: "補給品費用" },
        { day: 5, route: "名護市 → 那霸市", transport: "高速巴士", time: "下午", cost: "約 ¥1,600 - ¥2,200" },
        { day: 6, route: "那霸市內 (首里/國際通)", transport: "Yui Rail 一日券", time: "全日", cost: "¥800" },
        { day: 7, route: "那霸市區 → 那霸機場", transport: "Yui Rail / 計程車", time: "上午", cost: "約 ¥300 - ¥2,000" }
    ],

    // 4.3 Transport Tactics
    transportTactics: [
        '<span class="emphasis">機場接駁:</span> Day 1 從那霸機場搭乘高速巴士直達名護市區飯店附近最為便捷。',
        '<span class="emphasis">行李轉送服務:</span> Day 2(Nago->Kunigami), Day 3(Kunigami->Nanjo), Day 4(Nanjo->Nago), Day 5(Nago->Naha) 早上都需安排飯店轉送行李，[關鍵任務]。',
        '<span class="emphasis">單車整備:</span> Day 1 抵達名護後組裝，Day 7 在那霸打包。',
        '<span class="emphasis">Yui Rail 一日券 (Day 6):</span> 在那霸市區觀光日使用。',
        '<span class="emphasis">Day 5 轉移:</span> 環島結束後，從名護搭乘高速巴士返回那霸市區。'
    ],

    // 7.1 Preparation List
    prepList: {
        description: "這份清單專為沖繩7日單車環島挑戰設計 (均衡里程版 D2-D4)，並參考 Fitz.hk 文章建議，請在出發前逐一確認。",
        categories: [
            {
                category: '重要文件與預訂',
                items: [
                    '<span class="emphasis">護照與電子機票</span>',
                    '<span class="emphasis">[關鍵任務] 飯店預訂</span>: 務必確認所有飯店 (Day 1: Nago, Day 2: Kunigami, Day 3: Nanjo, Day 4: Nago, Day 5-6: Naha) 皆已預訂，國頭村與南城市選項較少，需提早確認。',
                    '<span class="emphasis">[關鍵任務] 行李轉送確認</span>: 確認 Day 2, 3, 4, 5 飯店是否提供轉送服務。'
                ]
            },
            {
                category: '單車裝備 (關鍵)',
                items: [
                    '<span class="emphasis">[關鍵任務] 單車打包/裝箱</span>',
                    '<span class="emphasis">頭盔, 手套, 太陽眼鏡, 頭巾</span>',
                    '<span class="emphasis">水壺 x 3 (Day 3 建議)</span>', // Increased for Day 3
                    '<span class="emphasis">車燈 (前/後)</span>',
                    '<span class="emphasis">碼表/導航/手機架 (離線地圖!)</span>',
                    '<span class="emphasis">維修工具組</span>: 備胎x2+, 氣泵, 挖胎棒, 工具。'
                ]
            },
            {
                category: '個人衣物與裝備',
                items: [
                    '<span class="emphasis">車衣/車褲 (2-3套)</span>',
                    '<span class="emphasis">襪子 (3+對)</span>',
                    '<span class="emphasis">單車鞋/硬底運動鞋</span>',
                    '<span class="emphasis">袖套/腿套 (防曬)</span>',
                    '<span class="emphasis">快乾衣褲 (1-2套)</span>',
                    '<span class="emphasis">輕便防風/防水外套</span>',
                    '<span class="emphasis">拖鞋</span>'
                ]
            },
             {
                 category: '後勤與補給',
                 items: [
                     '<span class="emphasis">個人藥品</span>',
                     '<span class="emphasis">[關鍵任務] 大量能量膠/能量棒/鹽糖</span>: 特別是 Day 3 東海岸補給稀少。',
                     '<span class="emphasis">日圓現金</span>',
                     '<span class="emphasis">手機 & 充電器 & 行動電源</span>',
                     '<span class="emphasis">個人盥洗用品</span>',
                     '<span class="emphasis">密實袋 (防水打包用)</span>',
                     '<span class="emphasis">洗衣液 (小包裝)</span>'
                 ]
             },
        ]
    },

    // 7.0 Prep Memos
    prepMemos: [
        {
            title: "★ 騎行安全：左駕與側風",
            content: "日本為左側通行 (靠左騎)，與台灣相反，轉彎時務必再次確認。在古宇利大橋、海中道路等路段，強勁的側風可能導致車身不穩，請放低重心並握緊把手。"
        },
        {
            title: "補給站禮儀",
            content: "在「道之驛」或便利商店休息時，請將單車停放在不影響他人的地方。保持環境整潔。"
        },
        {
            title: "體力分配",
            content: "Day 2 (西海岸) 與 Day 4 (東海岸) 是長距離日 (超過110km)，請勿在前半段過度消耗體力。Day 3 (北部) 爬坡較多，需保留體力。"
        }
    ],

    // 7.0 Prep Expert Tips
    prepExpertTips: [
        {
            title: "通訊建議",
            content: "建議購買吃到飽流量的SIM卡或租借Pocket WiFi，以便隨時使用Google Maps導航。"
        },
        {
            title: "行李轉送方案",
            content: "若飯店無法協助，可使用「黑貓宅急便 (Yamato)」或「佐川急便 (Sagawa)」的飯店間轉送服務。通常今天寄，隔天會到。"
        },
        {
            title: "雨天備案 (Plan B)",
            content: "若遇大雨或颱風，切勿強行騎車。Plan B 是搭乘「やんばる急行バス」(山原急行巴士) 或「沖縄エアポートシャトル」(沖繩機場接駁巴士)，這兩者通常會行經國道58號線往返那霸與名護。"
        }
    ],

    // 2.4 Local Tips
    localTips: {
        convenienceStores: [
            { brand: "FamilyMart", highlights: ["沖繩限定豬肉蛋飯糰", "限定泡盛咖啡", "Blue Seal 冰淇淋"] },
            { brand: "LAWSON", highlights: ["沖繩限定黑糖點心", "在地便當"] }
        ],
        igHotspots: {
            locations: ["古宇利大橋", "海中道路", "Niraikanai橋", "萬座毛", "波上宮", "今歸仁城跡", "首里城守禮門"],
            accommodations: ["Oriental Hotel (無邊際泳池)", "ANA萬座毛洲際酒店", "Yuinchi Hotel Nanjo (海景)"],
            restaurants: ["浜辺の茶屋", "MAEDA BREEZE", "Cafe YABUSACHI", "ラーメン鬼蔵"]
        },
        bloggerRecs: [
            { blogger: "林氏璧", recommendations: "沖繩美麗海水族館, 國際通, 首里城" },
            { blogger: "工頭堅", recommendations: "沖繩單車環島, 深度文化探索" },
            { blogger: "哲青", recommendations: "琉球王國歷史遺跡 (首里城, 齋場御嶽)" }
        ],
        practicalInfo: {
            network: ["日本4G上網SIM卡", "日本4G虛擬eSIM卡"],
            coupons: ["唐吉軻德 (國際通)", "BIC CAMERA (那霸)", "札幌藥妝"],
            emergency: ["沖繩觀光會議局 (OCVB) 官方網站: https://www.visitokinawa.jp/", "那霸機場觀光案內所", "沖繩輪業 (單車維修)"]
        }
    },

    // 5.0 Daily Data (★ Updated for "Balanced Mileage" D2-D4 Cycling Challenge ★)
    dailyData: {
        day1: { // 2025/10/20 (Mon) - ★ Updated: Naha -> Nago ★
            title: '序章・抵達沖繩・前進名護基地',
            date: 'Day 1 (10/20 週一)',
            location: '那霸機場 → 名護市',
            timeAnalysis: { travel: 2.5, activity: 2.5 },
            timeline: [
                { time: '12:00', type: '✈️', event: '抵達 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJjSyLjsRp5TQRkP5WN6rOTFA" target="_blank">那霸機場</a> (OKA)，領取行李與單車箱。' },
                { time: '13:00', type: '🍽️', event: '午餐: 於那霸機場簡易用餐。' }, // Rule 6.1
                { time: '14:00-16:00', type: '🚌', event: '交通: 搭乘高速巴士 (やんばる急行バス 等) 前往名護市區。' },
                { time: '16:30', type: '🏨', event: '飯店Check-in: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa Resort & Spa</a>'}, // Rule 6.7
                { time: '17:00-19:00', type: '🚴', event: '單車組裝與整備。', stay: '約 2 小時' },
                { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJz-l6_p1p5TQR9uzcOhvrf9U" target="_blank">島豬七輪燒肉滿味</a> 或 飯店附近餐廳', description: '為明日儲備能量。' }, // Rule 6.1, 6.4
                { time: '21:00', type: '🏨', event: '返回飯店: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa</a>', description: '最後整備明日裝備。'} // Rule 6.7
            ],
            foodHighlights: [ { name: "島豬七輪燒肉滿味", specialty: "Agu豬燒肉", note: "晚餐" } ],
            shoppingHighlights: [], seasonalNotes: [],
            budgetNotes: [ "高速巴士車資 (約 ¥1600-2200)", "晚餐費用" ],
            nearbySpots: [],
            intel: {
                nago_base: { title: '戰略基地：名護', text: '選擇名護作為環島的起終點，符合官方路線設定，且方便銜接巴士交通。' },
                bike_assembly_nago: { title: '單車整備@名護', text: '抵達名護後首要任務是組裝單車並確認狀態，以便第二天一早出發。' },
                logistics: { title: '行李轉送', text: '本日無更換住宿，`不須轉送行李服務`。' } // Rule 7.2
            },
            insights: {
                first_day_strategy: { title: '<span class="emphasis">首日策略：整備與熱身</span>', text: '重點不在觀光，而在於完成單車整備。波上宮作為熱身點，距離適中且具代表性。' }
            }
        },
        day2: { // 2025/10/21 (Tue) - ★ Updated: Cycling D1 (Nago -> Kunigami, 140km) ★
            title: '環島 D1 - 本部巡航 & 山原序章 (約 140km)',
            date: 'Day 2 (10/21 週二)',
            location: '名護市 → 国頭村',
            timeAnalysis: { travel: 7.0, activity: 2.0 }, // Longer cycling day
            options: {
                optionA: {
                    label: '選項A: 晴天/小雨 (原定路線)',
                    timeline: [
                        { time: '06:30', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel</a>) 或 便利商店' }, // Rule 6.1, 6.3
                        { time: '07:15', type: '🧳', event: '行李轉送: Kunigami (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">Okuma Resort</a>/<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-_cqglxD5DQR9iYVKomnC80" target="_blank">Kariyushi-so</a>)。' }, // Rule 7.2
                        { time: '07:30', type: '🚴', event: '從名護市 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJKSo90mP_5DQRuhDwB7_irkM" target="_blank">21世紀の森体育館</a> 附近出發' },
                        { time: '09:00', type: '🌳', event: '(可選) 經過 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ6z_osjv65DQRNpoSOgG1iqM" target="_blank">備瀬のフクギ並木</a>' },
                        { time: '11:00', type: '🚴', event: '騎上 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJyy0FRAhZ5DQRIfztLp8vdWc" target="_blank">古宇利大橋</a>，進入古宇利島。' },
                        { time: '12:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJm76XRyFZ5DQRsQbjaO-MmCI" target="_blank">古宇利島海景咖啡廳</a> (例: 5910 sa-ta-cafe)。', description: '<span class="emphasis">【美食任務：海景咖啡廳 已達成】</span>' }, // Rule 6.1, 6.5
                        { time: '13:30', type: '🚴', event: '離開古宇利島，接回 国道58号 向北。' },
                        { time: '15:00', type: '🚴', event: '抵達 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJn8z8eIRb5DQRx00QTJcvRPg" target="_blank">道の駅おおぎみ</a>，重要補給！' },
                        { time: '17:30', type: '🏨', event: '抵達国頭村住宿點: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">オクマ プライベートビーチ ＆ リゾート</a> (或其他預訂住宿)' }, // Rule 6.7
                        { time: '19:00', type: '🍽️', event: '晚餐: 飯店內 或 附近餐廳' }, // Rule 6.1, 6.4
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">オクマ プライベートビーチ ＆ リゾート</a>'} // Rule 6.7
                    ]
                },
                optionB: {
                    label: '選項B: 大雨/強風備案 (巴士移動)',
                    timeline: [
                        { time: '08:00', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel</a>)' }, // Rule 6.1
                        { time: '09:00', type: '🧳', event: '行李轉送: 於飯店櫃檯辦理「行李轉送服務」至国頭村住宿點。' }, // Rule 7.2
                        { time: '09:30', type: '🚌', event: '(備案) 前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-e0h22j_5DQRum8XD8hJ6X8" target="_blank">名護巴士總站</a>。' },
                        { time: '10:00-12:00', type: '🚌', event: '搭乘 路線巴士 前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJnbDRyARD5DQRcNkSYU3hh_s" target="_blank">辺土名巴士總站</a>' },
                        { time: '12:30', type: '🚕', event: '從辺土名轉乘 計程車 前往 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">Okuma Resort</a>' },
                        { time: '13:30', type: '🏨', event: '提早抵達国頭村住宿點，寄放行李。'}, // Rule 6.7
                        { time: '14:00', type: '🍽️', event: '午餐: 飯店內 或 辺土名附近餐廳。' }, // Rule 6.1
                        { time: '15:00', type: '🚶', event: '(備案) 使用飯店設施 或 在辺土名周邊短暫散步。' },
                        { time: '19:00', type: '🍽️', event: '晚餐: 飯店內 或 附近餐廳。' }, // Rule 6.1
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">オクマ プライベートビーチ ＆ リゾート</a>'}
                    ]
                }
            },
            foodHighlights: [
                { name: "MAEDA BREEZE", specialty: "單車友善咖啡廳", note: "午餐 (Option A)" },
                { name: "島豬七輪燒肉滿味", specialty: "Agu豬燒肉", note: "晚餐" },
                { name: "古宇利島海景咖啡廳", specialty: "午餐與海景", note: "午餐" }, { name: "飯店/民宿晚餐", specialty: "国頭村選項", note: "晚餐" }
            ],
            shoppingHighlights: [],
            seasonalNotes: [],
            budgetNotes: [
                "補給品費用。",
                "行李轉送費用 (約 ¥1,500 - ¥2,000)。",
                "住宿費用 (Okuma Resort 可能較高)。",
                "備案B: 巴士車資。"
            ],
            nearbySpots: [
                { name: "豬肉蛋飯糰本店", note: "早餐替代選項" }, // Rule 6.3
                { name: "今歸仁城跡", note: "若時間充裕可繞道參觀。" }
            ],
            intel: {
                baggage_strategy: { title: '行李轉送策略', text: '今日為A點到B點長途移動日，[關鍵任務] 是早上準時寄出行李。' }, // Rule 7.2
                supply_points: { title: '補給點', text: '國道58號線沿途便利商店多，關鍵休息點為<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJj1oZ4oQR5TQRhEosxEhG2Ec" target="_blank">嘉手納</a>與<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJFfz3q_H_5DQRttsFg7-7wLE" target="_blank">許田</a>。' }
            },
            insights: {
                cycling_day1: { title: '<span class="emphasis">環島D1重點</span>', text: '本日是風景最經典的西海岸路線，路況良好但距離長。重點是控制配速，並在萬座毛、恩納村等景點適度休息。' },
                cycling_day1_bal: { title: '環島D1 (140km) 重點', text: '本日結合本部半島的海岸美景與国道58号北上的丘陵挑戰。里程長，是耐力的考驗。務必在大宜味村做好補給。' }
            }
        },
        day3: { // 2025/10/22 (Wed) - ★ Updated: Cycling D2 (Kunigami -> Nanjo, 160km Queen Stage) ★
            title: '環島 D2 - 終極皇后賽段 (約 160km)',
            date: 'Day 3 (10/22 週三)',
            location: '国頭村 → 南城市',
            timeAnalysis: { travel: 8.0, activity: 1.5 }, // Very long cycling day
            options: {
                optionA: {
                    label: '選項A: 晴天/小雨 (終極挑戰)',
                    timeline: [
                        { time: '06:30', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ4fzmbkZD5DQRxlMrLXszPDs" target="_blank">Okuma</a>) 或 提早準備' }, // Rule 6.1, 6.3
                        { time: '07:00', type: '🧳', event: '行李轉送: 轉送資訊: Kunigami (Okuma) -> Nanjo (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi</a>)。' }, // Rule 7.2
                        { time: '07:15', type: '🚴', event: '清晨出發！ 沿 国道58号 北上' },
                        { time: '08:30', type: '🚴', event: '抵達 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJsVsyW1ts5DQRX7Fc17sFmHM" target="_blank">辺戸岬</a>' },
                        { time: '09:00', type: '⚠️', event: '進入東海岸 県道70号 最後補給點: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJkWIU-GJr5DQR5BU0kNNeHuA" target="_blank">奥共同店</a>' },
                        { time: '12:00', type: '🍽️', event: '午餐: 簡易午餐' }, // Rule 6.1
                        { time: '13:30', type: '🚴', event: '休息點: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJH1MWmfpP5DQRS-zFuF1gRik" target="_blank">福地川海浜公園</a>。' },
                        { time: '15:30', type: '🚴', event: '銜接 国道331号/329号 南下' },
                        { time: '18:00', type: '🏨', event: '抵達南城市飯店: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">ユインチホテル南城</a>' }, // Rule 6.7
                        { time: '19:00', type: '♨️', event: '★ 關鍵恢復: 享受飯店的「猿人之湯」天然溫泉' },
                        { time: '20:00', type: '🍽️', event: '晚餐: 飯店內用餐 或 附近餐廳' }, // Rule 6.1, 6.4
                        { time: '21:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">ユインチホテル南城</a>'} // Rule 6.7
                    ]
                },
                optionB: {
                    label: '選項B: 大雨/強風備案',
                    timeline: [
                        { time: '08:00', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/search?q=https://www.google.com/maps/search/%3Fapi%3D1%26query%3D%2520%26query_place_id%3DChIJz-l6_p1p5TQR9uzcOhvrf9U" target="_blank">Okuma</a>)' }, // Rule 6.1
                        { time: '09:00', type: '🧳', event: '行李轉送: [關鍵] 確認是否能將行李轉送至南城市，或改送至那霸市飯店。' }, // Rule 7.2
                        { time: '09:30', type: '🚕', event: '(備案) 放棄騎行。預約 計程車 或 包車 前往名護巴士總站。', cost: '非常昂貴！'},
                        { time: '11:00-13:00', type: '🚌', event: '從名護搭乘 高速巴士 前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJcbABKZ9p5TQRdgVpfhCI6XI" target="_blank">那霸巴士總站</a>。' },
                        { time: '13:30', type: '🍽️', event: '午餐: 那霸巴士總站附近。' }, // Rule 6.1
                        { time: '14:30', type: '🚌', event: '從那霸巴士總站搭乘 路線巴士 前往南城市 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi Hotel</a> 附近' },
                        { time: '16:30', type: '🏨', event: '抵達南城市飯店 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi Hotel</a>。'}, // Rule 6.7
                        { time: '17:00', type: '♨️', event: '享受飯店溫泉。'},
                        { time: '19:00', type: '🍽️', event: '晚餐: 飯店內用餐。' }, // Rule 6.1
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">ユインチホテル南城</a>'} // Rule 6.7
                    ]
                }
            },
            foodHighlights: [
                { name: "ラーメン鬼蔵 (ONIZO)", specialty: "豚骨拉麵", note: "午餐 (Option A)" },
                { name: "A&W 漢堡 (名護店)", specialty: "沖繩限定美式漢堡", note: "晚餐選項" },
                { name: "自備行動糧", specialty: "東海岸必備", note: "午餐" }, { name: "飯店晚餐", specialty: "溫泉飯店", note: "晚餐" }
            ],
            shoppingHighlights: [],
            seasonalNotes: [],
            budgetNotes: [
                "今歸仁城跡門票 (¥600)",
                "備案B: 美麗海水族館門票 (¥2,180) 及交通費。",
            ],
            budgetNotes: [ "大量補給品費用！", "行李轉送費用。", "住宿費用。", "備案B: 交通費用" ],
            nearbySpots: [
            ],
            intel: {
                baggage_strategy: { title: '行李轉送策略', text: '[關鍵任務] 早上務必寄出行李至南城市。' }, // Rule 7.2
                cycling_day2_bal_queen: { title: '環島D2 (160km) - 皇后賽段', text: '本日是里程最長、爬升最多、補給最少的一天！ 穿越最北端和偏遠的東海岸 。[關鍵任務] 在奥共同店做好萬全補給 。務必控制體力，注意安全。' },
                 hot_spring_recovery: { title: '★ 溫泉恢復 ★', text: '抵達 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi Hotel</a> 後，務必利用其天然溫泉「猿人之湯」來加速肌肉恢復' }
            },
            insights: {
                east_coast_challenge: { title: '<span class="emphasis">東海岸的挑戰與回報</span>', text: '県道70号雖然艱辛，但能體驗到沖繩最原始、未經雕琢的亞熱帶雨林與太平洋海岸風光，是真正的秘境挑戰。' }
            }
        },
        day4: { // 2025/10/23 (Thu)
            title: '環島 D3 - 南部巡禮 & 凱旋之路 (約 110km)',
            date: 'Day 4 (10/23 週四)',
            location: '南城市 → 名護市',
            timeAnalysis: { travel: 5.5, activity: 3.0 },
            options: {
                optionA: {
                    label: '選項A: 晴天/小雨 (原定路線)',
                    timeline: [
                        { time: '07:30', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi</a>) 或 便利商店' }, // Rule 6.1, 6.3
                        { time: '08:15', type: '🧳', event: '行李轉送: 轉送資訊: Nanjo (Yuinchi) -> Nago (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental</a>)。' }, // Rule 7.2
                        { time: '08:30', type: '🚴', event: '從南城市出發，沿 国道331号 環繞南部。' },
                        { time: '09:30', type: '🍤', event: '補給點/美食: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJfz4dP5tv5TQRR7i-2XFu5bw" target="_blank">奥武島</a>', description: '品嚐<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJU-B5eJtv5TQR-7TL1E-Yfa0" target="_blank">現炸天婦羅</a>。<span class="emphasis">【美食任務：B級美食 (豬肉蛋飯糰/天婦羅) 已達成】</span>' }, // Rule 6.5
                        { time: '10:30', type: '🕊️', event: '(經過) <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJaaiFx39m5TQR_3vrJCFiQS8" target="_blank">平和祈念公園</a> / <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJjwcPX_pm5TQRziOnh5XGoOU" target="_blank">ひめゆりの塔</a>' },
                        { time: '12:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJF1gjUkhm5TQRIXljcKvPqxI" target="_blank">糸満市</a> 或 那霸市區餐廳。' }, // Rule 6.1
                        { time: '13:30', type: '🚴', event: '進入 国道58号，開始沿西海岸北上返回名護。' },
                        { time: '15:30', type: '🚴', event: '景點: 經過 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-adBh3gD5TQRGFnnzG897N8" target="_blank">萬座毛</a>。' },
                        { time: '17:30', type: '🏁', event: '抵達名護市 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJKSo90mP_5DQRuhDwB7_irkM" target="_blank">21世紀の森体育館</a>，完成環島！' },
                        { time: '18:00', type: '🏨', event: '入住名護市飯店: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa</a>' }, // Rule 6.7
                        { time: '19:00', type: '🍽️', event: '晚餐 (慶功宴): 名護市區餐廳。' }, // Rule 6.1, 6.4
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa</a>'} // Rule 6.7
                    ]
                },
                optionB: {
                    label: '選項B: 大雨/強風備案 (巴士優先)',
                    timeline: [
                        { time: '08:30', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">Yuinchi</a>)' }, // Rule 6.1
                        { time: '09:30', type: '🧳', event: '行李轉送: 於飯店櫃檯辦理「行李轉送服務」回名護市飯店。' }, // Rule 7.2
                        { time: '10:00', type: '🚌', event: '(備案) 搭乘 路線巴士 前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJcbABKZ9p5TQRdgVpfhCI6XI" target="_blank">那霸巴士總站</a>。' },
                        { time: '11:30', type: '🍽️', event: '午餐: 那霸巴士總站附近。' }, // Rule 6.1
                        { time: '12:30-14:30', type: '🚌', event: '從那霸巴士總站搭乘 高速巴士 前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ-e0h22j_5DQRum8XD8hJ6X8" target="_blank">名護巴士總站</a>。' },
                        { time: '15:00', type: '🏨', event: '抵達名護市飯店 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa</a>，領取行李。'}, // Rule 6.7
                        { time: '16:00', type: '🚶', event: '(備案) 飯店休息 或 名護市區散步。' },
                        { time: '19:00', type: '🍽️', event: '晚餐 (慶功宴): 名護市區餐廳。' }, // Rule 6.1
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel Okinawa</a>'} // Rule 6.7
                    ]
                }
            },
            foodHighlights: [ { name: "奥武島天婦羅", specialty: "現炸天婦羅", note: "補給/點心" }, { name: "名護市區餐廳", specialty: "慶功宴", note: "晚餐" } ],
            shoppingHighlights: [], seasonalNotes: [],
            budgetNotes: [ "行李轉送費用。", "備案B: 巴士費用。" ],
            nearbySpots: [ { name: "平和祈念公園", note: "南部歷史景點" }, { name: "ひめゆりの塔", note: "南部歷史景點" } ],
            intel: {
                baggage_strategy: { title: '行李轉送策略', text: '[關鍵任務] 早上寄出行李回名護市。' }, // Rule 7.2
                cycling_day3_bal: { title: '環島D3 (110km) - 凱旋之路', text: '本日路程最短、地勢最平緩 。可從容遊覽南部景點，並享受西海岸的便利補給 [cite: 66]。以輕鬆的心情完成最後一段路程。' }
            },
            insights: {
                south_history: { title: '<span class="emphasis">沖繩南部歷史</span>', text: '南部是沖繩戰役最慘烈的地區，平和祈念公園等地提醒著和平的珍貴，值得花時間感受。' }
            }
        },
        day5: { // 2025/10/24 (Fri) - ★ Updated: Recovery / Transfer Nago -> Naha ★
            title: '恢復日・轉移那霸基地',
            date: 'Day 5 (10/24 週五)',
            location: '名護市 → 那霸市',
            timeAnalysis: { travel: 2.0, activity: 4.0 },
            timeline: [
                { time: '09:00', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJ69P9oGUB5TQRDFVUKLyOeHU" target="_blank">Oriental Hotel</a>) 或 名護市區' }, // Rule 6.1, 6.3
                { time: '10:00', type: '🚶', event: '恢復活動: 或前往<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJPZ5hUjH65DQR_p_dD3CmCOo" target="_blank">美麗海水族館</a>' },
                { time: '12:00', type: '🍽️', event: '午餐: 名護市區餐廳。' }, // Rule 6.1
                { time: '14:00', type: '🏨', event: '飯店Check-out。'}, // Rule 6.7
                { time: '14:30', type: '🧳', event: '行李轉送: 於飯店櫃檯辦理「行李轉送服務」至那霸飯店。', description: '轉送資訊: Nago (Oriental) -> Naha (JR Kyushu Blossom)。' }, // Rule 7.2
                { time: '15:00-17:00', type: '🚌', event: '交通: 搭乘高速巴士返回那霸市區。' },
                { time: '17:30', type: '🏨', event: '抵達那霸飯店: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR九州飯店Blossom那霸</a>' }, // Rule 6.7
                { time: '19:00', type: '🍽️', event: '晚餐: 那霸市區 (例如: 國際通)。' }, // Rule 6.1, 6.4
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR九州飯店Blossom那霸</a>'} // Rule 6.7
            ],
            foodHighlights: [ { name: "那霸市區餐廳", specialty: "晚餐", note: "晚餐" } ],
            shoppingHighlights: [], seasonalNotes: [],
            budgetNotes: [ "高速巴士車資。", "行李轉送費用。" ],
            nearbySpots: [ { name: "美麗海水族館", note: "名護恢復日選項" } ],
            intel: {
                transfer_day: { title: '轉移日', text: '本日主要任務是從環島終點名護市，舒適地轉移回那霸市，為後兩天的市區行程做準備。' },
                logistics: { title: '行李轉送', text: '本日需將行李從名護轉送至那霸。' } // Rule 7.2
            },
            insights: {
                trade_off: { title: '<span class="emphasis">調整取捨</span>', text: '為了減少行李搬運，犧牲了入住溫泉飯店<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJk9UegFZu5TQRUf7Gz8JA6WY" target="_blank">(Yuinchi Hotel Nanjo)</a>的體驗以及部分交通便利性。請評估此取捨是否符合需求。' } // Added URL
            }
        },
        day6: { // 2025/10/25 (Sat)
            title: '文化體驗・首里城與國際通 (那霸出發)',
            date: 'Day 6 (10/25 週六)',
            location: '那霸市內',
            timeAnalysis: { travel: 1.5, activity: 6.5 },
            timeline: [
                { time: '08:30', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR Kyushu Blossom</a>) 享用早餐。' },
                { time: '09:30', type: '🚋', event: '購買「Yui Rail 一日券」(¥800)，從<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJgSMBBXlp5TQRFOEu6ebNRwM" target="_blank">「美榮橋」站</a> 搭乘至<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJifUiMQds5TQRYPQjh1JVhvI" target="_blank">「首里」站</a>。' }, // Rule 4.1
                { time: '10:00', type: '🚶', event: '景點: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJZ9v0bP5r5TQRi0-esrqficA" target="_blank">首里城公園</a>' }, // Rule 6.6
                { time: '11:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJQQeQcf9r5TQRfq4D25cCKXI" target="_blank">首里そば (Shuri Soba)</a>', description: '<span class="emphasis">【美食任務：沖繩麵 已達成】</span>' }, // Rule 6.1, 6.5
                { time: '12:30', type: '🚶', event: '景點: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJs45DcVdp5TQR70a1msYXhl4" target="_blank">金城町石疊道</a>' }, // Rule 6.6
                { time: '14:00', type: '🚋', event: '搭乘 Yui Rail (首里站 → <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJx6YcxmRp5TQRzDCiSlG0NUQ" target="_blank">牧志站</a>)' },
                { time: '14:30', type: '🛍️', event: '購物: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJMS9BUXdp5TQRAl6RXvY5aY0" target="_blank">國際通</a>', description: '採買伴手禮。', stay: '約 3 小時' },
                { time: '16:30', type: '☕', event: '下午茶: 國際通周邊咖啡廳' }, // Rule 6.1
                { time: '17:30', type: '🏨', event: '返回飯店: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR九州飯店Blossom那霸</a>', description: '稍作休息。'}, // Rule 6.7
                { time: '18:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJGaKzQLFp5TQRYmh800Fdr9o" target="_blank">琉球新麵 通堂</a> 或 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJq6q-z3tp5TQR7_beBOTvC4Y" target="_blank">暖暮拉麵</a>' }, // Rule 6.1, 6.4
                { time: '20:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR九州飯店Blossom那霸</a>'} // Rule 6.7
            ],
            foodHighlights: [
                { name: "首里そば", specialty: "沖繩麵", note: "午餐" },
                { name: "琉球新麵 通堂", specialty: "豚骨拉麵 (男人麵)", note: "晚餐" }
            ],
            shoppingHighlights: [
                { item: "御菓子御殿 (紅芋塔)", location: "國際通" },
                { item: "南風堂 (雪塩金楚糕)", location: "國際通" },
                { item: "Lululun 沖繩限定面膜", location: "國際通藥妝店" }
            ],
            seasonalNotes: [
                "本日 (10/25) 可能已進入「首里城祭」或「沖繩產業祭」期間，可多加留意活動資訊。" // Rule 5.7
            ],
            budgetNotes: [
                "Yui Rail 一日券 (¥800)",
                "首里城門票 (¥400，一日券折扣後 ¥340)",
            ],
            nearbySpots: [
                { name: "牧志公設市場", note: "國際通旁的傳統市場，正在整修，可逛周邊商店。" }
            ],
            intel: {
                yui_rail_pass: { title: '交通票券攻略', text: '本日是 Yui Rail 一日券 (¥800) 的最佳使用日。路線：美榮橋 → 首里(¥340) → 牧志(¥190) → 美榮橋(¥150)，總價已超過一日券價值，非常划算。' }, // Rule 4.2, 4.3
                logistics: { title: '行李轉送', text: '本日住宿點不變，`不須轉送行李服務`。' } // Rule 7.2
            },
            insights: {
                shuri_castle: { title: '<span class="emphasis">首里城重建</span>', text: '雖然正殿燒毀，但參觀重建過程本身就是一種獨特的見證。守禮門與周邊的世界遺產仍完整保留。' }
            }
        },
        day7: { // 2025/10/26 (Sun)
            title: '歸鄉・打包單車・那霸回憶',
            date: 'Day 7 (10/26 週日)',
            location: '那霸市區 → 那霸機場',
            timeAnalysis: { travel: 1.5, activity: 2.0 },
            timeline: [
                { time: '08:00', type: '☕', event: '早餐: 飯店 (<a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJG66LQHtp5TQRIiNK6_jKMmo" target="_blank">JR Kyushu Blossom</a>) 或 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJe0fFxaBp5TQRvC8m4J9d4Pg" target="_blank">豬肉蛋飯糰本店</a>', description: '<span class="emphasis">【美食任務：B級美食 (豬肉蛋飯糰/天婦羅) 已達成】</span>' }, // Rule 6.1, 6.3
                { time: '09:00-10:30', type: '🚴', event: '單車打包裝箱作業。', stay: '約 1.5 小時' },
                { time: '10:30', type: '🏨', event: '飯店Check-out。'}, // Rule 6.7
                { time: '11:00', type: '🧳', event: '行李移動: 將單車箱與大行李寄送至機場 (飯店櫃檯或搭乘計程車)。' }, // Rule 7.2
                { time: '11:00', type: '🛍️', event: '最後巡禮: 國際通或 <a href="https://www.google.com/maps/search/?api=1&query=%20&query_place_id=ChIJjSyLjsRp5TQRkP5WN6rOTFA" target="_blank">那霸機場</a> 國內線伴手禮區補貨。' },
                { time: '12:00', type: '🍽️', event: '午餐: 於機場享用。' }, // Rule 6.1
                { time: '13:00', type: '✈️', event: '辦理登機與行李託運手續。' },
                { time: '15:00', type: '✈️', event: '航班起飛: OKA → TPE' }
            ],
            foodHighlights: [
                { name: "豬肉蛋飯糰本店", specialty: "B級美食", note: "早餐選項" },
                { name: "機場餐廳", specialty: "最後的沖繩料理", note: "午餐" }
            ],
            shoppingHighlights: [
                { item: "那霸機場國內線2F", location: "ROYCE', 御菓子御殿等", note: "最後補貨機會" }
            ],
            seasonalNotes: [],
            budgetNotes: [
                "機場交通費 (Yui Rail ¥300 或 計程車)",
                "單車託運費用 (依各航空公司規定)"
            ],
            nearbySpots: [],
            intel: {
                bike_packing: { title: '單車打包 (關鍵任務)', text: '務必預留至少1.5小時進行打包。許多飯店(如JR Kyushu)可提供場地或借用工具，但最好自備。' }, // Rule 7.1
                airport_logistics: { title: '機場交通', text: '若單車箱過大，搭乘 Yui Rail 可能不便，建議直接預約「大型計程車」或「機場接送」服務前往機場。' }
            },
            insights: {
                reflection_bal: { title: '<span class="emphasis">旅程總結 (均衡版)</span>', text: '這趟均衡里程版的挑戰，將體能考驗集中在前段，換來更充裕的後期恢復與觀光時間。成功克服第二天的皇后賽段將是最大的成就！' } // Updated reflection
            }
        }
    }
};