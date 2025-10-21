// --- RENDER SCRIPT ---
// Version 9.1.2: Added rendering for enriched daily data fields (food, shopping, seasonal, etc.)

document.addEventListener('DOMContentLoaded', () => {
    // Check if tripData is loaded
    if (typeof tripData === 'undefined') {
        console.error("行程資料 (tripData) 未載入！請確認資料檔案是否正確。");
        document.getElementById('main-title').innerText = "錯誤：行程資料遺失";
        return;
    }

    // --- GLOBAL ELEMENTS ---
    const mainNav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('.main-section');
    const overviewChartCtx = document.getElementById('overviewChart').getContext('2d');
    let overviewChartInstance = null;

    // --- INITIALIZATION ---
    function formatPhone(phone) {
        if (!phone || phone === "不明") return '<p class="text-xs text-gray-500">電話: 不明</p>';
        return `<p class="text-xs text-gray-500">電話: <a href="tel:${phone}" class="text-blue-500 hover:underline">${phone}</a></p>`; // Added tel link
    }
    function initializePage() {
        // Set page title
        document.title = tripData.meta.title;
        document.getElementById('main-title').innerText = tripData.meta.mainTitle;

        // Setup main navigation
        mainNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const sectionId = e.target.dataset.section;
                mainNav.querySelectorAll('button').forEach(btn => btn.classList.remove('main-nav-active'));
                e.target.classList.add('main-nav-active');
                sections.forEach(section => section.id === sectionId ? section.classList.remove('hidden') : section.classList.add('hidden'));
                window.scrollTo(0, 0);

                // Lazy-load section content --- UPDATED SWITCH ---
                switch (sectionId) {
                    case 'overview': initOverview(); break;
                    case 'themed-guides': initThemedGuides(); break;
                    case 'food-guide': initFoodGuide(); break; // NEW
                    case 'shopping-guide': initShoppingGuide(); break; // NEW
                    case 'awards': initAwards(); break;
                    case 'event-calendar': initEventCalendar(); break; // NEW
                    case 'transport': initTransport(); break;
                    case 'daily': initDaily(); break;
                    case 'local-tips': initLocalTips(); break; // NEW
                    case 'prep': initPrep(); break;
                }
            }
        });

        // Initial Load on first visit
        const firstNavButton = document.querySelector('#main-nav button[data-section="overview"]');
        if (firstNavButton) {
            firstNavButton.classList.add('main-nav-active');
            document.getElementById('overview').classList.remove('hidden');
            initOverview();
        }
    }

    // --- RENDER FUNCTIONS ---

    function initOverview() {
        // 1. Render Chart (logic remains similar, check data structure if needed)
        if (overviewChartInstance) overviewChartInstance.destroy();
        const labels = Object.keys(tripData.dailyData).map(key => `D${key.replace('day', '')}`);
        const activityData = Object.values(tripData.dailyData).map(d => d.timeAnalysis.activity);
        const travelData = Object.values(tripData.dailyData).map(d => d.timeAnalysis.travel);

        overviewChartInstance = new Chart(overviewChartCtx, {
            type: 'bar',
            data: { labels, datasets: [
                { label: '活動時間 (h)', data: activityData, backgroundColor: 'rgba(54, 162, 235, 0.7)' },
                { label: '移動時間 (h)', data: travelData, backgroundColor: 'rgba(255, 99, 132, 0.7)' }
            ] },
            options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true, title: { display: true, text: '小時' } } }, plugins: { tooltip: { callbacks: { label: (context) => `${context.dataset.label}: ${context.raw.toFixed(1)} 小時` } } } }
        });

        // 2. Render Seasonal Highlights (if data exists)
        const seasonalSection = document.getElementById('seasonal-section');
        if (tripData.seasonalData) {
            const seasonalGrid = document.getElementById('seasonal-highlights');
            seasonalGrid.innerHTML = Object.values(tripData.seasonalData).map(season => `
                <div class="seasonal-card ${season.theme_color} p-4 rounded-lg shadow-md">
                    <h4 class="font-bold text-lg mb-2 flex items-center">${season.icon} ${season.title}</h4>
                    <div class="space-y-3 text-sm">
                        <div>
                            <h5 class="font-semibold text-gray-700">季節活動</h5>
                            <ul class="list-disc list-inside text-gray-600">${season.highlights.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-gray-700">時令美食</h5>
                            <ul class="list-disc list-inside text-gray-600">${season.foods.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>
            `).join('');
            seasonalSection.classList.remove('hidden');
        } else {
             seasonalSection.classList.add('hidden');
        }

        // 3. Render Detailed Highlights (if data exists)
        const highlightsSection = document.getElementById('highlights-section');
        if (tripData.detailedHighlights && tripData.detailedHighlights.length > 0) {
            document.getElementById('highlights-description').innerText = `以下是本次行程中的 ${tripData.detailedHighlights.length} 個核心目標與美食，融合了指南推薦與達人見解。列表已按行程順序排列。`;
            const highlightsGrid = document.getElementById('highlights-grid');
            highlightsGrid.innerHTML = tripData.detailedHighlights.map(item => `
                <div class="highlight-card bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-shadow hover:shadow-2xl">
                    <div class="md:grid md:grid-cols-3 gap-6">
                        <div class="md:col-span-1 border-b md:border-r md:border-b-0 pb-4 mb-4 md:pb-0 md:mb-0 md:pr-4">
                            <h3 class="text-2xl font-bold text-gray-800">${item.name}</h3>
                            <span class="inline-block px-3 py-1 mt-2 text-sm font-semibold rounded-full ${item.type === '景點' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}">${item.type}</span>
                            <div class="mt-4 space-y-1">
                                <a href="${item.mapUrl}" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center transition-colors">
                                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Google 地圖搜尋
                                </a>
                                ${item.phone ? formatPhone(item.phone) : ''}
                            </div>
                            <div class="mt-4 space-y-2 text-sm">
                                ${item.ticketInfo ? `
                                <p class="font-semibold flex items-center text-green-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h4a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
                                    <span>票務: ${item.ticketInfo}</span>
                                </p>` : ''}
                                ${item.parkingInfo ? `
                                <p class="font-semibold flex items-start text-gray-700">
                                    <span class="text-lg mr-1 leading-5">🅿️</span>
                                    <span>停車: ${item.parkingInfo}</span>
                                </p>` : ''}
                            </div>
                        </div>
                        <div class="md:col-span-2 space-y-4 md:pl-4">
                            <div>
                                <h4 class="text-xl font-semibold mb-1 text-gray-700 border-b border-gray-200 pb-1">專家建議 & 指南重點</h4>
                                <p class="text-gray-600 italic mt-2 font-medium">${item.expertRec || ''}</p>
                                <p class="text-sm text-gray-500 mt-2">${item.historyCulture || ''}</p>
                            </div>
                            <div>
                                <h4 class="text-xl font-semibold mb-1 text-gray-700 border-b border-gray-200 pb-1">${item.type === '景點' ? '參觀重點 & 絕佳拍照點' : '人氣焦點 & 必拍美食照'}</h4>
                                <div class="text-sm text-gray-600 mt-2 space-y-1">${item.focusPoints || ''}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
            highlightsSection.classList.remove('hidden');
        } else {
             highlightsSection.classList.add('hidden');
        }
    }
    function initThemedGuides() {
        if (!tripData.themedGuidesData) return;
        const container = document.getElementById('themed-guides-container');
        const guides = tripData.themedGuidesData;
        let html = '';

        // [S] 一般化輪巡 (General-Purpose Loop)
        // 
        // 輪巡 `themedGuidesData` 物件中的每一個 key (例如 'amulets', 'souvenirs', 'cycling_tips' 等)
        for (const key in guides) {
            if (Object.hasOwnProperty.call(guides, key)) {
                const guide = guides[key]; // 'guide' 是一個物件，包含 {title, description, items}

                let itemsHtml = '<p>暫無項目資料。</p>'; // 預設的 items 內容

                // 檢查 'items' 陣列是否存在且有內容
                if (guide.items && Array.isArray(guide.items) && guide.items.length > 0) {
                    
                    // [!] 關鍵：檢查第一個 item 的資料結構，來決定要用哪種渲染模板
                    const firstItem = guide.items[0];

                    if (firstItem.hasOwnProperty('popular')) {
                        // --- 模板 1: 網格卡片 (Grid Cards) ---
                        // (用於 御守、神社 等)
                        itemsHtml = `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                ${guide.items.map(item => `
                                    <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                        <h4 class="font-bold text-lg text-gray-800">${item.name} <span class="text-sm font-normal text-gray-500">- ${item.prefecture || ''}</span></h4>
                                        <p class="mt-2 text-sm text-gray-700"><span class="font-semibold text-gray-900">人氣推薦:</span> ${item.popular || 'N/A'}</p>
                                        ${item.special ? `<p class="mt-1 text-sm text-gray-700"><span class="font-semibold text-gray-900">特別限定:</span> ${item.special}</p>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    } 
                    else if (firstItem.hasOwnProperty('items')) {
                        // --- 模板 2: 網格清單 (Grid Lists) ---
                        // (用於 伴手禮、攻略提示 等)
                        itemsHtml = `
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                ${guide.items.map(item => `
                                    <div>
                                        <h4 class="font-bold text-lg text-gray-800 border-b-2 border-gray-200 pb-2">${item.name}</h4>
                                        <ul class="list-disc list-inside mt-3 space-y-2 text-gray-700">
                                            ${item.items.map(s => `<li>${s}</li>`).join('')}
                                        </ul>
                                    </div>
                                `).join('')}
                            </div>
                        `;
                    } 
                    else if (firstItem.hasOwnProperty('locations')) {
                        // --- 模板 3: 表格 (Table Rows) ---
                        // (用於 聖地巡禮 等)
                        // [!] 假設的表格標題，若需通用化，標題也需寫入 data.js
                        itemsHtml = `
                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="p-3 font-semibold">名稱/作品</th>
                                            <th class="p-3 font-semibold">相關地點</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${guide.items.map(item => `
                                        <tr class="border-b">
                                            <td class="p-3 font-semibold align-top">${item.name}</td>
                                            <td class="p-3 align-top">${(item.locations || []).join('、 ')}</td>
                                        </tr>
                                    `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        `;
                    } 
                    else {
                        // 備用模板 (如果結構不符)
                        itemsHtml = '<p>此攻略的項目格式無法識別。</p>';
                    }
                }

                // 組合通用的外框 (標題 + 描述 + items內容)
                html += `
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <h3 class="text-xl font-semibold mb-2">${guide.title}</h3>
                        <p class="text-gray-600 mb-6">${guide.description}</p>
                        ${itemsHtml}
                    </div>
                `;
            }
        }
        // [E] 一般化輪巡結束

        container.innerHTML = html || '<p>暫無主題攻略資料。</p>';
    }
/*
    function initThemedGuides() {
        if (!tripData.themedGuidesData) return;
        const container = document.getElementById('themed-guides-container');
        const guides = tripData.themedGuidesData;
        let html = '';
        if (guides.amulets) {
            html += `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">${guides.amulets.title}</h3>
                    <p class="text-gray-600 mb-6">${guides.amulets.description}</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${guides.amulets.items.map(item => `
                            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <h4 class="font-bold text-lg text-gray-800">${item.name} <span class="text-sm font-normal text-gray-500">- ${item.prefecture}</span></h4>
                                <p class="mt-2 text-sm text-gray-700"><span class="font-semibold text-gray-900">人氣推薦:</span> ${item.popular}</p>
                                ${item.special ? `<p class="mt-1 text-sm text-gray-700"><span class="font-semibold text-gray-900">特別限定:</span> ${item.special}</p>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Render Simplified Souvenirs Guide (Details moved to Shopping Guide)
        if (guides.souvenirs) {
             html += `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">${guides.souvenirs.title}</h3>
                    <p class="text-gray-600 mb-6">${guides.souvenirs.description}</p>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        ${guides.souvenirs.items.map(item => `
                            <div>
                                 <h4 class="font-bold text-lg text-gray-800 border-b-2 border-gray-200 pb-2">${item.name}</h4>
                                 <ul class="list-disc list-inside mt-3 space-y-2 text-gray-700">
                                    ${item.items.map(s => `<li>${s}</li>`).join('')}
                                 </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Render Anime Pilgrimage Guide
        if (guides.animePilgrimage) {
            html += `
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-semibold mb-2">${guides.animePilgrimage.title}</h3>
                    <p class="text-gray-600 mb-6">${guides.animePilgrimage.description}</p>
                     <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="p-3 font-semibold">作品名稱</th>
                                    <th class="p-3 font-semibold">相關地點</th>
                                </tr>
                            </thead>
                            <tbody>
                            ${guides.animePilgrimage.items.map(item => `
                                <tr class="border-b">
                                    <td class="p-3 font-semibold align-top">${item.name}</td>
                                    <td class="p-3 align-top">${item.locations.join('、 ')}</td>
                                </tr>
                            `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }

        container.innerHTML = html || '<p>暫無主題攻略資料。</p>';
    }
*/
// --- FINALIZED v2: Render Food Guide (Using Combined Emoji + Name Map) ---
    function initFoodGuide() {
        const container = document.getElementById('food-guide-container');
        if (!tripData.foodGuide || Object.keys(tripData.foodGuide).length === 0) {
            container.innerHTML = '<p>暫無美食指南資料。</p>';
            return;
        }

        let html = '';

        // [S] 步驟 1: 重新定義 emojiMap，包含 Emoji 和中文名稱
        const emojiMap = {
            yakiniku: '🥩 燒肉',
            kaitenSushi: '🍣 迴轉壽司',
            sushi: '🍣 壽司', // 保留兼容
            ramen: '🍜 拉麵',
            pasta: '🍝 義大利麵',
            tonkatsu: '🍛 豬排飯', // 暫用咖哩圖示 + 名稱
            familyRestaurant: '🍽️ 家庭餐廳',
            afternoonTea: '☕ 下午茶',
            fastFood: '🍔 速食店', // 使用漢堡圖示 + 名稱
            burger: '🍔 漢堡', // 保留兼容
            bGradeGourmet: '🍱 B級美食',
            b_gourmet: '🍱 B級美食', // 保留兼容
            okinawa_soba: '🍜 沖繩麵', // 使用拉麵圖示 + 名稱
            cafe: '☕ 咖啡廳', // 使用咖啡圖示 + 名稱
            izakaya: '🏮 居酒屋',
            western: '🍛 洋食/咖哩', // 保留兼容
            sweets: '🍰 甜點', // 保留兼容
            // 可以繼續添加更多...
            default_emoji: '🍴' // 預設圖示 (用於 emojiMap 中找不到 category 時)
        };
        // [E] emojiMap 定義結束

        // [S] 迭代 foodGuide 的所有 key
        for (const category in tripData.foodGuide) {
            if (
                Object.hasOwnProperty.call(tripData.foodGuide, category) &&
                tripData.foodGuide[category] &&
                tripData.foodGuide[category].length > 0
            ) {
                // [S] 步驟 2: 調整標題獲取邏輯
                let title = '';
                // 優先從 emojiMap 獲取完整標題 (Emoji + Name)
                if (emojiMap.hasOwnProperty(category)) {
                    title = emojiMap[category];
                } else {
                    // emojiMap 中沒有，嘗試從 missionSummary 獲取 description
                    let titleDescription = category; // 預設標題為 category key
                    if (tripData.missionSummary && tripData.missionSummary.hasOwnProperty(category)) {
                        titleDescription = tripData.missionSummary[category].description || category;
                    }
                    // 加上預設 Emoji
                    title = `${emojiMap.default_emoji} ${titleDescription}`;
                }
                // [E] 標題獲取邏輯結束

                // 使用與之前相同的 HTML 模板來渲染手風琴項目
                html += `
                    <div class="food-category-accordion border border-gray-200 rounded-lg overflow-hidden mb-4">
                        <button class="accordion-button bg-gray-100 hover:bg-gray-200 w-full text-left p-4 font-semibold text-lg flex justify-between items-center transition-colors">
                            <span>${title}</span>
                            <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div class="accordion-content bg-white p-4 space-y-4">
                            ${tripData.foodGuide[category].map(item => `
                                <div class="border-b pb-4 last:border-b-0">
                                    <h4 class="font-bold text-md mb-1">${item.name}</h4>
                                    <p class="text-sm text-gray-600 mb-2">${item.description || ''}</p>
                                    <div class="text-xs space-y-1 text-gray-500">
                                        ${item.address ? `<p>地址: ${item.address}</p>` : ''}
                                        ${item.hours ? `<p>時間: ${item.hours}</p>` : ''}
                                        ${item.phone ? formatPhone(item.phone) : ''}
                                        ${item.parkingInfo ? `<p>停車: ${item.parkingInfo}</p>` : ''}
                                        ${item.mapUrl ? `<a href="${item.mapUrl}" target="_blank" class="text-blue-500 hover:underline">地圖搜尋</a>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        } // [E] 迴圈結束

        container.innerHTML = html || '<p>暫無美食指南資料。</p>';

        // 手風琴的點擊事件邏輯保持不變
        container.querySelectorAll('.accordion-button').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('svg');
                if (!content) return;

                // 修正：確保切換時平滑展開/收合
                const isCurrentlyOpen = content.style.maxHeight && content.style.maxHeight !== '0px';

                if (isCurrentlyOpen) {
                    content.style.maxHeight = '0px'; // 收合
                    if (icon) icon.style.transform = 'rotate(0deg)';
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px'; // 展開
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }



    // --- NEW: Render Shopping Guide ---
    function initShoppingGuide() {
        const souvenirsContainer = document.getElementById('souvenirs-detailed-list');
        const locationsContainer = document.getElementById('shopping-locations-list');

        if (tripData.shoppingGuide?.souvenirs) {
            souvenirsContainer.innerHTML = tripData.shoppingGuide.souvenirs.map(item => `
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-md">${item.name}</h4>
                    <p class="text-sm text-gray-600 mt-1">${item.description || ''}</p>
                    <div class="text-xs text-gray-500 mt-2 space-y-1">
                        ${item.priceEstimate ? `<p>價格參考: ${item.priceEstimate}</p>` : ''}
                        ${item.purchaseLocations ? `<p>購買地點: ${item.purchaseLocations}</p>` : ''}
                        ${item.shelfLife ? `<p>保存期限: ${item.shelfLife}</p>` : ''}
                    </div>
                </div>
            `).join('');
        } else {
            souvenirsContainer.innerHTML = '<p>暫無詳細伴手禮資料。</p>';
        }

         if (tripData.shoppingGuide?.locations) {
            locationsContainer.innerHTML = tripData.shoppingGuide.locations.map(item => `
                <div class="bg-white p-4 rounded-lg shadow border">
                    <h4 class="font-semibold text-md">${item.name}</h4>
                    <p class="text-sm text-gray-600 mt-1">${item.description || ''}</p>
                    ${item.mapUrl ? `<a href="${item.mapUrl}" target="_blank" class="text-xs text-blue-500 hover:underline mt-2 inline-block">地圖搜尋</a>` : ''}
                </div>
            `).join('');
        } else {
            locationsContainer.innerHTML = '<p>暫無購物地點資料。</p>';
        }
    }

// --- UPDATED: Render Awards with Map Links and Phones ---
    function initAwards() {
        if (!tripData.awardsData) {
            console.error("Awards data is missing.");
            // Optionally display an error message in the UI
            document.getElementById('top-100-container').innerHTML = '<p>百選資料遺失。</p>';
            document.getElementById('great-three-container').innerHTML = '<p>三大系列資料遺失。</p>';
            return;
        }

        // Helper function to find mapUrl and phone from detailedHighlights
        const findHighlightDetails = (nameToFind) => {
            if (!tripData.detailedHighlights) return { mapUrl: null, phone: null };
            // Simple match for now, might need refinement if names differ slightly
            const found = tripData.detailedHighlights.find(hl => nameToFind.includes(hl.name) || hl.name.includes(nameToFind));
            return {
                mapUrl: found ? found.mapUrl : null,
                phone: found ? found.phone : null
            };
        };

        const top100Container = document.getElementById('top-100-container');
        if (tripData.awardsData.top100) {
            top100Container.innerHTML = tripData.awardsData.top100.map(category => `
                <div class="bg-white p-5 rounded-lg shadow-md award-card ${category.theme || 'border-gray-300'}">
                    <h4 class="font-bold text-lg mb-3 text-gray-800">${category.title}</h4>
                    <div class="space-y-4"> 
                        ${category.locations.map(loc => {
                            const details = findHighlightDetails(loc.name);
                            return `
                            <div>
                                <p class="font-semibold text-gray-700">${loc.name} <span class="text-sm text-gray-500 font-normal">- ${loc.prefecture}</span></p>
                                <div class="mt-1 space-y-1"> 
                                    ${details.mapUrl ? `<a href="${details.mapUrl}" target="_blank" class="text-xs text-blue-500 hover:underline">地圖搜尋</a>` : ''}
                                    ${details.phone ? formatPhone(details.phone) : ''} 
                                </div>
                                <p class="text-sm text-gray-600 pl-2 mt-1">${loc.details}</p> 
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `).join('');
        } else {
             top100Container.innerHTML = '<p>暫無百選資料。</p>';
        }

        const greatThreeContainer = document.getElementById('great-three-container');
        if (tripData.awardsData.greatThree) {
            greatThreeContainer.innerHTML = tripData.awardsData.greatThree.map(category => {
                let contentHtml = '';
                if (category.status === '入選' && category.location) {
                    // Extract the first location name if multiple are listed (e.g., World Heritage)
                    const primaryLocationName = category.location.name.split('、')[0];
                    const details = findHighlightDetails(primaryLocationName);
                    contentHtml = `
                        <div class="mt-2">
                            <p class="font-semibold text-2xl text-green-600">✓ 入選</p>
                            <div class="mt-2 bg-green-50 p-3 rounded-md">
                                 <p class="font-semibold text-gray-800">${category.location.name} <span class="text-sm text-gray-500 font-normal">- ${category.location.prefecture}</span></p>
                                 <div class="mt-1 space-y-1"> 
                                    ${details.mapUrl ? `<a href="${details.mapUrl}" target="_blank" class="text-xs text-blue-500 hover:underline">地圖搜尋 (${primaryLocationName})</a>` : ''}
                                    ${details.phone ? formatPhone(details.phone) : ''} 
                                 </div>
                                 <p class="text-sm text-gray-600 mt-1">${category.location.description}</p>
                            </div>
                             <p class="text-xs text-gray-500 mt-2">其他相關: ${category.others || '無'}</p> 
                        </div>
                    `;
                } else { // Handle "地区精選" or other statuses
                     contentHtml = `
                        <div class="mt-2">
                            <p class="font-semibold text-xl text-sky-600">✨ ${category.status || '相關推薦'}</p>
                            <p class="text-sm text-gray-600 mt-1">${category.description || ''}</p>
                            ${category.alternative_title && category.alternatives ? `
                            <div class="mt-2 bg-sky-50 p-3 rounded-md">
                                 <p class="font-semibold text-gray-700">${category.alternative_title}:</p>
                                 <ul class="list-disc list-inside text-sm text-gray-600 mt-1">
                                    ${category.alternatives.map(alt => `<li>${alt}</li>`).join('')}
                                 </ul>
                            </div>` : ''}
                             <p class="text-xs text-gray-500 mt-2">日本三大系列: ${category.others || '無'}</p> 
                        </div>
                    `;
                }
                return `
                     <div class="bg-white p-5 rounded-lg shadow-md award-card ${category.theme || 'border-gray-300'}">
                        <h4 class="font-bold text-lg text-gray-800">${category.title}</h4>
                        ${contentHtml}
                    </div>
                `;
            }).join('');
        } else {
             greatThreeContainer.innerHTML = '<p>暫無三大系列資料。</p>';
        }
    }


    // --- NEW: Render Event Calendar ---
     function initEventCalendar() {
        const tableBody = document.getElementById('event-calendar-table');
        if (!tripData.eventCalendar || tripData.eventCalendar.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" class="p-3 text-center text-gray-500">暫無活動資料。</td></tr>';
            return;
        }
        const findPhoneForEventLocation = (locationName) => {
            const match = tripData.detailedHighlights.find(hl => hl.name.includes(locationName));
            if (match && match.phone) return match.phone;
            const phoneMatch = locationName.match(/電話:\s*([0-9-]+)/);
            return phoneMatch ? phoneMatch[1] : "不明";
        };

        tableBody.innerHTML = tripData.eventCalendar.map(event => {
            let cleanLocation = event.location;
            let phoneNum = "不明";
            if (event.location.includes('<a href')) {
                 const nameMatch = event.location.match(/target="_blank">([^<]+)<\/a>/);
                 if (nameMatch) {
                     cleanLocation = `<a href="${event.location.split('"')[1]}" target="_blank">${nameMatch[1]}</a>`; // Keep link format
                     phoneNum = findPhoneForEventLocation(nameMatch[1]);
                 }
            } else {
                 phoneNum = findPhoneForEventLocation(event.location);
            }
            return `
            <tr class="border-b">
                <td class="p-3 font-semibold">${event.name}</td>
                <td class="p-3 text-sm">${event.dateRange}</td>
                <td class="p-3 text-sm">${cleanLocation} ${phoneNum !== "不明" ? `<span class="text-xs text-gray-500 block">(${phoneNum})</span>` : ''}</td> 
                <td class="p-3 text-sm">${event.type}</td>
                <td class="p-3 text-xs">${event.description || ''}</td>
            </tr>
        `}).join('');
    }


    // --- UPDATED: Render Transport ---
    function initTransport() {
        // Render Accommodation
        const accommodationSection = document.getElementById('accommodation-section');
        if (tripData.accommodation && tripData.accommodation.length > 0) {
            const accommodationList = document.getElementById('accommodation-list');
            accommodationList.innerHTML = tripData.accommodation.map(item => `
                <div class="border border-gray-300 rounded-lg p-6 shadow-md bg-blue-50 mb-4"> 
                    <h4 class="text-xl font-bold mb-1">Day ${item.day}: <a href="${item.url}" target="_blank" class="text-blue-700 hover:underline">${item.name}</a></h4>
                    <p class="text-sm text-gray-500 mb-3">(${item.city})</p>
                    ${item.description ? `<p class="text-sm text-gray-700 mb-4">${item.description}</p>` : ''} 
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div>
                            <p class="font-semibold text-gray-800 mb-1">🅿️ 停車資訊</p>
                            <p class="text-gray-700">${item.parking || '不明'}</p>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800 mb-1">🏪 周邊便利商店</p>
                            <ul class="list-disc list-inside text-gray-700 space-y-1">
                                ${item.convenienceStores && item.convenienceStores.length > 0
                                    ? item.convenienceStores.map(store => `<li><span class="font-semibold">${store.brand}:</span> ${store.name}</li>`).join('')
                                    : '<li>不明</li>'}
                            </ul>
                        </div>
                    </div>
                    ${item.phone ? `<div class="mt-3">${formatPhone(item.phone)}</div>` : ''}
                </div>
            `).join(''); // End map()
            accommodationSection.classList.remove('hidden');
        } else { accommodationSection.classList.add('hidden'); }

        // Render Transport Pass Details --- HEAVILY MODIFIED ---
        const passesSection = document.getElementById('transport-passes-section');
        const passesContent = document.getElementById('transport-passes-content');
        if (tripData.transportPasses) {
            let html = '';

            // Render Special Ticket
            if (tripData.transportPasses.specialTicket) {
                const ticket = tripData.transportPasses.specialTicket;
                html += `
                    <div class="border border-yellow-400 bg-yellow-50 rounded-lg p-4 mb-6 shadow">
                        <h4 class="text-lg font-bold text-yellow-800 mb-2">⭐ ${ticket.name}</h4>
                        <p><span class="emphasis">價格:</span> ${ticket.price}</p>
                        <p><span class="emphasis">包含:</span> ${ticket.includes}</p>
                        <p><span class="emphasis">有效期限:</span> ${ticket.validity}</p>
                        <p><span class="emphasis">兌換地點:</span> ${ticket.exchangeLocation}</p>
                        <p class="mt-2 text-sm text-yellow-700">${ticket.valueAnalysis}</p>
                        <div class="mt-4">
                            <h5 class="font-semibold mb-1">主要點數用法 (1點=¥250):</h5>
                            <ul class="list-disc list-inside text-xs space-y-1">
                                ${ticket.pointUsage.slice(0, 5).map(use => `<li>${use.facility}: ${use.points}點</li>`).join('')}
                                <li>... 及更多餐飲/設施 (詳見官方手冊)</li>
                            </ul>
                        </div>
                         <div class="mt-2">
                            <h5 class="font-semibold mb-1">可享折扣設施 (部分):</h5>
                            <p class="text-xs">${ticket.discountFacilities.slice(0, 4).join(', ')}...</p>
                        </div>
                    </div>
                `;
            }

            // Render Other Passes
            if (tripData.transportPasses.otherPasses && tripData.transportPasses.otherPasses.length > 0) {
                 html += `<h4 class="text-lg font-bold mb-2">其他常用票券</h4>`;
                 html += tripData.transportPasses.otherPasses.map(pass => `
                    <div class="border border-gray-200 rounded-lg p-3 mb-3 bg-gray-50 text-sm">
                        <p><span class="emphasis">${pass.name}:</span> ${pass.price}</p>
                        <p class="text-xs text-gray-600">${pass.description}</p>
                    </div>
                 `).join('');
            }

            passesContent.innerHTML = html;
            passesSection.classList.remove('hidden');
        } else {
             passesSection.classList.add('hidden');
        }


        // Render Transport Pass Analysis (Keep hidden if null)
        const analysisSection = document.getElementById('transport-analysis-section');
        if (tripData.transportPassAnalysis) {
            document.getElementById('transport-analysis-content').innerHTML = tripData.transportPassAnalysis;
            analysisSection.classList.remove('hidden');
        } else {
            analysisSection.classList.add('hidden');
        }

        // Render Transport Summary
        const summarySection = document.getElementById('transport-summary-section');
        if(tripData.transportSummary && tripData.transportSummary.length > 0) {
            const transportSummaryTable = document.getElementById('transport-summary-table');
            transportSummaryTable.innerHTML = tripData.transportSummary.map(item => `
                    <tr class="border-b">
                        <td class="p-3 text-sm">Day ${item.day}</td>
                        <td class="p-3 text-sm">${item.route}</td>
                        <td class="p-3 text-sm">${item.transport}</td>
                        <td class="p-3 text-sm">${item.time}</td>
                        <td class="p-3 text-sm">${item.cost}</td>
                    </tr>
            `).join('');
            summarySection.classList.remove('hidden');
        } else {
             summarySection.classList.add('hidden');
        }

        // Render Transport Tactics
        const tacticSection = document.getElementById('transport-tactic-section');
        if (tripData.transportTactics && tripData.transportTactics.length > 0) {
            const tacticList = document.getElementById('transport-tactic-list');
            tacticList.innerHTML = tripData.transportTactics.map(item => `<li>${item}</li>`).join('');
            tacticSection.classList.remove('hidden');
        } else {
             tacticSection.classList.add('hidden');
        }

         // Render Recommended Accommodations
         const recAccommSection = document.getElementById('recommended-accommodation-section');
         if (tripData.recommendedAccommodations && tripData.recommendedAccommodations.length > 0) {
            const recAccommList = document.getElementById('recommended-accommodation-list');
            recAccommList.innerHTML = tripData.recommendedAccommodations.map(item => `
                <div class="border rounded-md p-3 text-sm bg-gray-50">
                    <p><span class="font-semibold">${item.name}</span> (${item.area || item.city || ''})</p> 
                    <p class="text-xs text-gray-600">${item.features || ''} (評價: ${item.rating || 'N/A'}, 價格: ${item.priceEstimate || 'N/A'})</p>
                     <div class="mt-1 space-y-1"> 
                        ${item.url ? `<a href="${item.url}" target="_blank" class="text-xs text-blue-500 hover:underline">地圖搜尋</a>` : ''}
                        ${item.phone ? formatPhone(item.phone) : ''}
                    </div>
                </div>
            `).join('');
            recAccommSection.classList.remove('hidden');
         } else {
              recAccommSection.classList.add('hidden');
         }
    }

    function initDaily() {
         const dayNav = document.getElementById('day-nav');
        document.getElementById('daily-title').innerText = `每日行程 (${Object.keys(tripData.dailyData).length}天)`;

        if (!dayNav.innerHTML) { // Only build nav if it's empty
            Object.keys(tripData.dailyData).forEach((key, index) => {
                const dayNum = key.replace('day', '');
                const btn = document.createElement('button');
                btn.className = "day-nav-item py-2 px-3 md:px-4 text-sm font-semibold rounded-md hover:bg-gray-200 transition-colors";
                btn.dataset.day = dayNum;
                btn.textContent = `D${dayNum}`;
                btn.addEventListener('click', () => {
                    renderDailyTimeline(dayNum);
                    dayNav.querySelectorAll('button').forEach(b => b.classList.remove('day-nav-active'));
                    btn.classList.add('day-nav-active');
                });
                dayNav.appendChild(btn);
            });
        }
        // Activate first day if no day is active
        if (!dayNav.querySelector('.day-nav-active')) {
            const firstButton = dayNav.querySelector('button');
            if (firstButton) {
                firstButton.classList.add('day-nav-active');
                renderDailyTimeline(firstButton.dataset.day);
            }
        } else {
             // If a day is already active (e.g., navigating back), re-render it
             const activeButton = dayNav.querySelector('.day-nav-active');
             if(activeButton) {
                 renderDailyTimeline(activeButton.dataset.day);
             }
        }
    }

    // --- UTILITY: Create Highlight Section ---
    // Helper function to create the HTML for the new daily sections
    function createHighlightSection(title, icon, items, itemRenderer) {
        if (!items || items.length === 0) return '';
        return `
            <div class="mt-6 bg-gray-50 p-4 rounded-lg border">
                <h4 class="font-bold text-lg mb-3 flex items-center"><span class="text-xl mr-2">${icon}</span> ${title}</h4>
                <div class="space-y-2">
                    ${items.map(itemRenderer).join('')}
                </div>
            </div>
        `;
    }


    // --- HEAVILY UPDATED: renderDailyTimeline ---
    function renderDailyTimeline(day) {
        const data = tripData.dailyData[`day${day}`];
        const dailyContent = document.getElementById('daily-content');
        if (!data) { dailyContent.innerHTML = `<p>本日行程資料不存在。</p>`; return; }

        let timelineHtml = ''; // For timeline container
        let optionsHtml = '';  // For option tabs

        if (data.options) {
            optionsHtml += `<div class="flex justify-center flex-wrap gap-2 mb-4" id="option-tabs-${day}">`;
            Object.keys(data.options).forEach((key, index) => {
                optionsHtml += `<button data-option="${key}" class="option-tab py-2 px-4 text-sm font-semibold rounded-md border hover:bg-gray-100 transition-colors ${index === 0 ? 'option-tab-active bg-blue-100 border-blue-300' : 'border-gray-300'}">${data.options[key].label}</button>`;
            });
            optionsHtml += `</div>`;
        }
        timelineHtml = `<div id="timeline-container-${day}" class="mb-6"></div>`; // Container for timeline content


        // --- START: Generate HTML for NEW Fields ---
        let foodHighlightsHtml = createHighlightSection('🍔 當日美食焦點', '🍔', data.foodHighlights, item => `
            <div class="text-sm border-b pb-1 last:border-b-0">
                <span class="font-semibold">${item.name}:</span> ${item.specialty} ${item.note ? `(${item.note})` : ''}
            </div>
        `);

        let shoppingHighlightsHtml = createHighlightSection('🛍️ 當日購物/伴手禮', '🛍️', data.shoppingHighlights, item => `
            <div class="text-sm border-b pb-1 last:border-b-0">
                <span class="font-semibold">${item.item}</span> @ ${item.location} ${item.note ? `<span class="text-xs italic text-gray-500">(${item.note})</span>` : ''}
            </div>
        `);

        let seasonalNotesHtml = createHighlightSection('☀️ 當日季節提醒', '☀️', data.seasonalNotes, note => `
            <p class="text-sm text-blue-700">${note}</p>
        `);

        let budgetNotesHtml = createHighlightSection('💰 當日預算/花費提醒', '💰', data.budgetNotes, note => `
            <p class="text-sm text-red-600">${note}</p>
        `);

        let nearbySpotsHtml = createHighlightSection('📍 周邊順遊點', '📍', data.nearbySpots, spot => `
            <div class="text-sm border-b pb-1 last:border-b-0">
                <span class="font-semibold">${spot.name}</span> ${spot.note ? `- ${spot.note}` : ''}
            </div>
        `);
        // --- END: Generate HTML for NEW Fields ---


        // --- Render Intel & Insights ---
        const allIntel = { ...(data.intel || {}), ...(data.insights || {}) };
        let intelHtml = Object.keys(allIntel).length > 0 ? '<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">' : '';
        for (const intelItem of Object.values(allIntel)) {
            let content = intelItem.items
                ? `<ul class="list-disc list-inside space-y-1 text-gray-600">${intelItem.items.map(i => `<li class="leading-relaxed">${i}</li>`).join('')}</ul>`
                : `<p class="text-gray-600 leading-relaxed">${intelItem.text}</p>`;
            intelHtml += `
                <div class="bg-white p-5 rounded-lg shadow-md border-l-4 border-gray-300">
                    <h4 class="font-bold text-lg mb-2 text-gray-800">${intelItem.title}</h4>
                    ${content}
                </div>
            `;
        }
        if (Object.keys(allIntel).length > 0) { intelHtml += '</div>'; }

        // --- Assemble Final HTML for dailyContent ---
        dailyContent.innerHTML = `
            <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold">${data.title}</h3>
                    <p class="text-md text-gray-500">${data.date || ''}</p>
                </div>
                ${optionsHtml}  
                ${timelineHtml}
                ${foodHighlightsHtml}
                ${shoppingHighlightsHtml}
                ${seasonalNotesHtml}
                ${budgetNotesHtml}
                ${nearbySpotsHtml}
            </div>
            ${intelHtml}
        `;

        // --- Timeline Rendering Logic (remains the same as 9.1.1) ---
        const renderTimelineContent = (timelineData) => {
             if(!timelineData) {
                 document.getElementById(`timeline-container-${day}`).innerHTML = '<p class="text-center text-gray-500">此選項無時間軸資料。</p>';
                 return;
             }
             const findPhoneByUrl = (eventString) => {
                 const urlMatch = eventString.match(/href="(.*?)"/);
                 if (!urlMatch) return null;
                 const url = urlMatch[1];
                 const sectionsToCheck = [tripData.foodGuide, tripData.shoppingGuide.locations, tripData.detailedHighlights, tripData.accommodation, tripData.recommendedAccommodations];
                 for (const section of sectionsToCheck) {
                     if (!section) continue;
                     if (Array.isArray(section)) { // For accommodation, recommendedAccommodations, detailedHighlights
                         const found = section.find(item => item.url === url || item.mapUrl === url);
                         if (found && found.phone) return found.phone;
                     } else { // For foodGuide (object of arrays)
                         for (const category in section) {
                             const found = section[category].find(item => item.mapUrl === url);
                             if (found && found.phone) return found.phone;
                         }
                     }
                 }
                 return null; // Not found
             };

             document.getElementById(`timeline-container-${day}`).innerHTML = `<div class="relative pl-8">${timelineData.map(item => {
                let extraInfoHtml = '';
                if (item.specialTags && Array.isArray(item.specialTags)) { /* ... tag rendering ... */ }
                let awardHtml = item.awardHighlight ? `<p class="...">🏆 ${item.awardHighlight}</p>` : '';
                let parkingHtml = item.parkingInfo ? `<p class="...">🅿️ ... ${item.parkingInfo}</p>` : '';
                let ticketHtml = item.ticketInfo ? `<p class="...">🎟️ ... ${item.ticketInfo}</p>` : '';

                // ★ Add Phone to event string if a link exists ★
                let eventDisplay = item.event;
                const phoneForEvent = findPhoneByUrl(item.event);
                if (phoneForEvent && phoneForEvent !== "不明") {
                    eventDisplay += ` <span class="text-xs text-gray-500">(📞 ${phoneForEvent})</span>`;
                }

                // Return item HTML
                return `
                <div class="timeline-item relative pb-8">
                    <div class="timeline-icon text-lg">${item.type}</div>
                    <div class="ml-8">
                        <p class="font-bold text-gray-800">${item.time}</p>
                        <p class="text-gray-700">${eventDisplay}</p> 
                        <p class="text-sm text-gray-500 italic mt-1">${item.description || ''}</p>
                        <div class="mt-1 space-y-1">${extraInfoHtml}</div>
                        ${awardHtml}
                        ${item.cost ? `<p class="text-sm text-red-500 mt-1">費用: ${item.cost}</p>` : ''}
                        ${item.stay ? `<p class="text-sm text-blue-500 mt-1">建議停留: ${item.stay}</p>` : ''}
                        ${ticketHtml}
                        ${parkingHtml}
                    </div>
                </div>`;
            }).join('')}</div>`;
        }

        // --- Option Tabs Logic (remains the same as 9.1.1) ---
        if (data.options) {
            const optionTabs = document.getElementById(`option-tabs-${day}`);
            optionTabs.replaceWith(optionTabs.cloneNode(true)); // Re-clone to remove old listeners
            const newOptionTabs = document.getElementById(`option-tabs-${day}`);

            newOptionTabs.addEventListener('click', (e) => {
                if(e.target.tagName === 'BUTTON') {
                    const optionKey = e.target.dataset.option;
                    renderTimelineContent(data.options[optionKey].timeline);
                    // Style update logic...
                    newOptionTabs.querySelectorAll('button').forEach(b => {
                        b.classList.remove('option-tab-active', 'bg-blue-100', 'border-blue-300');
                        b.classList.add('border-gray-300');
                    });
                    e.target.classList.add('option-tab-active', 'bg-blue-100', 'border-blue-300');
                    e.target.classList.remove('border-gray-300');
                }
            });
            // Initial render
            const firstOptionKey = Object.keys(data.options)[0];
             renderTimelineContent(data.options[firstOptionKey].timeline);
             // Initial style...
             const firstTabButton = newOptionTabs.querySelector(`button[data-option="${firstOptionKey}"]`);
             if (firstTabButton) {
                newOptionTabs.querySelectorAll('button').forEach(b => {
                     b.classList.remove('option-tab-active', 'bg-blue-100', 'border-blue-300');
                     b.classList.add('border-gray-300');
                });
                firstTabButton.classList.add('option-tab-active', 'bg-blue-100', 'border-blue-300');
                firstTabButton.classList.remove('border-gray-300');
             }

        } else if (data.timeline) {
             renderTimelineContent(data.timeline);
        }
    }


    // --- NEW: Render Local Tips ---
    function initLocalTips() {
         const tabsContainer = document.getElementById('local-tips-tabs');
         const contentContainer = document.getElementById('local-tips-content');
         const conbiniContent = document.getElementById('conbini-content');
         const igContent = document.getElementById('ig-content');
         const bloggerContent = document.getElementById('blogger-content');
         const practicalContent = document.getElementById('practical-content');

         if (!tripData.localTips) {
             tabsContainer.innerHTML = '<p>暫無在地情報資料。</p>';
             contentContainer.innerHTML = '';
             return;
         }

         // Render Convenience Store Tips
         if(tripData.localTips.convenienceStores) {
            conbiniContent.innerHTML = tripData.localTips.convenienceStores.map(store => `
                <div class="mb-4 pb-4 border-b last:border-b-0">
                    <h4 class="font-bold text-lg text-${store.brand.toLowerCase() === 'lawson' ? 'blue' : (store.brand.toLowerCase() === 'seicomart' ? 'orange' : 'green')}-600">${store.brand}</h4>
                    <ul class="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
                        ${store.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
         }

         // Render IG Hotspots
         if(tripData.localTips.igHotspots) {
             const ig = tripData.localTips.igHotspots;
             igContent.innerHTML = `
                <div class="mb-4">
                    <h4 class="font-semibold">📍 地點</h4>
                    <p class="text-sm text-gray-600">${ig.locations.join('、 ')}</p>
                </div>
                 <div class="mb-4">
                    <h4 class="font-semibold">🏨 住宿</h4>
                    <p class="text-sm text-gray-600">${ig.accommodations.join('、 ')}</p>
                </div>
                 <div>
                    <h4 class="font-semibold">🍽️ 餐廳</h4>
                    <p class="text-sm text-gray-600">${ig.restaurants.join('、 ')}</p>
                </div>`;
         }

         // Render Blogger Recs
          if(tripData.localTips.bloggerRecs) {
            bloggerContent.innerHTML = tripData.localTips.bloggerRecs.map(rec => `
                <div class="mb-3">
                    <h4 class="font-bold">${rec.blogger} 推薦:</h4>
                    <p class="text-sm text-gray-600">${rec.recommendations}</p>
                </div>
            `).join('');
          }

         // Render Practical Info
         if(tripData.localTips.practicalInfo) {
             const practical = tripData.localTips.practicalInfo;
              practicalContent.innerHTML = `
                <div class="mb-4">
                    <h4 class="font-semibold">🌐 網路</h4>
                    <p class="text-sm text-gray-600">${practical.network.join(' / ')}</p>
                </div>
                 <div class="mb-4">
                    <h4 class="font-semibold">🎟️ 優惠券 (參考)</h4>
                    <p class="text-sm text-gray-600">${practical.coupons.join('、 ')} (請自行搜尋最新連結)</p>
                </div>
                 <div>
                    <h4 class="font-semibold">📞 緊急聯絡/資訊</h4>
                    <ul class="list-disc list-inside text-sm text-gray-600">
                        ${practical.emergency.map(e => `<li>${e.includes('http') ? `<a href="${e.split(': ')[1]}" target="_blank" class="text-blue-500 hover:underline">${e.split(': ')[0]}</a>` : e}</li>`).join('')}
                    </ul>
                </div>`;
         }


         // Tab Switching Logic
         const tabButtons = tabsContainer.querySelectorAll('.tab-button');
         const tabContents = contentContainer.querySelectorAll('.tab-content');

         tabButtons.forEach(button => {
             button.addEventListener('click', () => {
                 const targetTab = button.dataset.tab;

                 tabButtons.forEach(btn => btn.classList.remove('active', 'bg-gray-700')); // Adjust active style if needed
                 button.classList.add('active', 'bg-gray-700'); // Adjust active style if needed

                 tabContents.forEach(content => {
                     if (content.id === targetTab) {
                         content.classList.add('active');
                     } else {
                         content.classList.remove('active');
                     }
                 });
             });
         });
         // Ensure first tab is active on load
         if(tabButtons.length > 0 && tabContents.length > 0) {
              tabButtons[0].classList.add('active', 'bg-gray-700'); // Adjust active style if needed
              tabContents[0].classList.add('active');
         }

    }


    function initPrep() {
         const prepData = tripData.prepList;
        if (prepData) {
            document.getElementById('prep-description').innerHTML = prepData.description || '';
            const prepContainer = document.getElementById('prep-list-container');
            prepContainer.innerHTML = prepData.categories.map(category => `
                <div>
                    <h4 class="text-lg font-bold text-gray-800 border-b pb-1 mb-3">${category.category}</h4>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        ${category.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
        }

        const memoSection = document.getElementById('prep-memo-section');
        if (tripData.prepMemos && tripData.prepMemos.length > 0) {
            const memoContent = document.getElementById('prep-memo-content');
            memoContent.innerHTML = tripData.prepMemos.map(memo => `
                <div class="bg-gray-50 p-4 rounded border">
                    <h4 class="font-bold">${memo.title}</h4>
                    <p class="text-gray-600 text-sm mt-1">${memo.content}</p>
                </div>
            `).join('');
            memoSection.classList.remove('hidden');
        } else {
             memoSection.classList.add('hidden');
        }

        const expertSection = document.getElementById('prep-expert-section');
        if (tripData.prepExpertTips && tripData.prepExpertTips.length > 0) {
            const expertContent = document.getElementById('prep-expert-content');
            expertContent.innerHTML = tripData.prepExpertTips.map(tip => `
                 <div class="bg-blue-50 p-4 rounded border border-blue-200">
                    <h4 class="font-bold">${tip.title}</h4>
                    <p class="text-gray-700 text-sm mt-1">${tip.content}</p>
                </div>
            `).join('');
            expertSection.classList.remove('hidden');
        } else {
             expertSection.classList.add('hidden');
        }
    }

    // --- START THE APP ---
    initializePage();
});
