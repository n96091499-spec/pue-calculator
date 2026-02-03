// ============ 氣象數據 - 從 Excel 讀取 ============
const WEATHER_DATA = {
    newtaipei: {
        wet: [
            { temp: 5, hours: 8 }, { temp: 6, hours: 37 }, { temp: 7, hours: 35 },
            { temp: 8, hours: 84 }, { temp: 9, hours: 201 }, { temp: 10, hours: 208 },
            { temp: 11, hours: 204 }, { temp: 12, hours: 301 }, { temp: 13, hours: 396 },
            { temp: 14, hours: 416 }, { temp: 15, hours: 366 }, { temp: 16, hours: 392 },
            { temp: 17, hours: 409 }, { temp: 18, hours: 419 }, { temp: 19, hours: 369 },
            { temp: 20, hours: 311 }, { temp: 21, hours: 519 }, { temp: 22, hours: 467 },
            { temp: 23, hours: 696 }, { temp: 24, hours: 1056 }, { temp: 25, hours: 851 },
            { temp: 26, hours: 675 }, { temp: 27, hours: 315 }, { temp: 28, hours: 25 }
        ],
        dry: [
            { temp: 7, hours: 5 }, { temp: 8, hours: 22 }, { temp: 9, hours: 48 },
            { temp: 10, hours: 92 }, { temp: 11, hours: 154 }, { temp: 12, hours: 191 },
            { temp: 13, hours: 239 }, { temp: 14, hours: 312 }, { temp: 15, hours: 368 },
            { temp: 16, hours: 346 }, { temp: 17, hours: 374 }, { temp: 18, hours: 391 },
            { temp: 19, hours: 440 }, { temp: 20, hours: 419 }, { temp: 21, hours: 355 },
            { temp: 22, hours: 422 }, { temp: 23, hours: 389 }, { temp: 24, hours: 465 },
            { temp: 25, hours: 684 }, { temp: 26, hours: 633 }, { temp: 27, hours: 513 },
            { temp: 28, hours: 433 }, { temp: 29, hours: 326 }, { temp: 30, hours: 234 },
            { temp: 31, hours: 248 }, { temp: 32, hours: 241 }, { temp: 33, hours: 252 },
            { temp: 34, hours: 136 }, { temp: 35, hours: 26 }, { temp: 36, hours: 2 }
        ]
    },
    taoyuan: {
        wet: [
            { temp: 29, hours: 1 }, { temp: 28, hours: 148 }, { temp: 27, hours: 938 },
            { temp: 26, hours: 1113 }, { temp: 25, hours: 927 }, { temp: 24, hours: 550 },
            { temp: 23, hours: 404 }, { temp: 22, hours: 417 }, { temp: 21, hours: 341 },
            { temp: 20, hours: 350 }, { temp: 19, hours: 370 }, { temp: 18, hours: 331 },
            { temp: 17, hours: 297 }, { temp: 16, hours: 387 }, { temp: 15, hours: 412 },
            { temp: 14, hours: 405 }, { temp: 13, hours: 330 }, { temp: 12, hours: 269 },
            { temp: 11, hours: 226 }, { temp: 10, hours: 164 }, { temp: 9, hours: 189 },
            { temp: 8, hours: 123 }, { temp: 7, hours: 35 }, { temp: 6, hours: 33 },
            { temp: 5, hours: 0 }, { temp: 4, hours: 0 }, { temp: 3, hours: 0 }, { temp: 2, hours: 0 }
        ],
        dry: [
            { temp: 36, hours: 2 }, { temp: 35, hours: 16 }, { temp: 34, hours: 21 },
            { temp: 33, hours: 66 }, { temp: 32, hours: 207 }, { temp: 31, hours: 491 },
            { temp: 30, hours: 516 }, { temp: 29, hours: 705 }, { temp: 28, hours: 728 },
            { temp: 27, hours: 577 }, { temp: 26, hours: 478 }, { temp: 25, hours: 337 },
            { temp: 24, hours: 389 }, { temp: 23, hours: 374 }, { temp: 22, hours: 415 },
            { temp: 21, hours: 399 }, { temp: 20, hours: 398 }, { temp: 19, hours: 349 },
            { temp: 18, hours: 300 }, { temp: 17, hours: 375 }, { temp: 16, hours: 421 },
            { temp: 15, hours: 388 }, { temp: 14, hours: 270 }, { temp: 13, hours: 264 },
            { temp: 12, hours: 161 }, { temp: 11, hours: 70 }, { temp: 10, hours: 33 },
            { temp: 9, hours: 10 }, { temp: 8, hours: 0 }, { temp: 7, hours: 0 }
        ]
    },
    taichung: {
        wet: [
            { temp: 29, hours: 0 }, { temp: 28, hours: 72 }, { temp: 27, hours: 445 },
            { temp: 26, hours: 1106 }, { temp: 25, hours: 1245 }, { temp: 24, hours: 926 },
            { temp: 23, hours: 487 }, { temp: 22, hours: 449 }, { temp: 21, hours: 379 },
            { temp: 20, hours: 335 }, { temp: 19, hours: 373 }, { temp: 18, hours: 288 },
            { temp: 17, hours: 356 }, { temp: 16, hours: 431 }, { temp: 15, hours: 433 },
            { temp: 14, hours: 354 }, { temp: 13, hours: 361 }, { temp: 12, hours: 204 },
            { temp: 11, hours: 168 }, { temp: 10, hours: 160 }, { temp: 9, hours: 107 },
            { temp: 8, hours: 46 }, { temp: 7, hours: 23 }, { temp: 6, hours: 4 },
            { temp: 5, hours: 6 }, { temp: 4, hours: 2 }, { temp: 3, hours: 0 }, { temp: 2, hours: 0 }
        ],
        dry: [
            { temp: 44, hours: 0 }, { temp: 43, hours: 0 }, { temp: 42, hours: 0 },
            { temp: 41, hours: 0 }, { temp: 40, hours: 0 }, { temp: 39, hours: 0 },
            { temp: 38, hours: 0 }, { temp: 37, hours: 0 }, { temp: 36, hours: 1 },
            { temp: 35, hours: 6 }, { temp: 34, hours: 44 }, { temp: 33, hours: 242 },
            { temp: 32, hours: 400 }, { temp: 31, hours: 397 }, { temp: 30, hours: 430 },
            { temp: 29, hours: 635 }, { temp: 28, hours: 717 }, { temp: 27, hours: 691 },
            { temp: 26, hours: 680 }, { temp: 25, hours: 627 }, { temp: 24, hours: 458 },
            { temp: 23, hours: 347 }, { temp: 22, hours: 335 }, { temp: 21, hours: 335 },
            { temp: 20, hours: 281 }, { temp: 19, hours: 321 }, { temp: 18, hours: 348 },
            { temp: 17, hours: 380 }, { temp: 16, hours: 338 }, { temp: 15, hours: 279 },
            { temp: 14, hours: 165 }, { temp: 13, hours: 133 }, { temp: 12, hours: 109 },
            { temp: 11, hours: 32 }, { temp: 10, hours: 23 }, { temp: 9, hours: 5 },
            { temp: 8, hours: 1 }, { temp: 7, hours: 0 }, { temp: 6, hours: 0 }, { temp: 5, hours: 0 }
        ]
    },
    kaohsiung: {
        wet: [
            { temp: 29, hours: 25 }, { temp: 28, hours: 359 }, { temp: 27, hours: 1095 },
            { temp: 26, hours: 1231 }, { temp: 25, hours: 998 }, { temp: 24, hours: 678 },
            { temp: 23, hours: 473 }, { temp: 22, hours: 409 }, { temp: 21, hours: 351 },
            { temp: 20, hours: 317 }, { temp: 19, hours: 377 }, { temp: 18, hours: 354 },
            { temp: 17, hours: 418 }, { temp: 16, hours: 421 }, { temp: 15, hours: 346 },
            { temp: 14, hours: 336 }, { temp: 13, hours: 202 }, { temp: 12, hours: 129 },
            { temp: 11, hours: 96 }, { temp: 10, hours: 86 }, { temp: 9, hours: 27 },
            { temp: 8, hours: 13 }, { temp: 7, hours: 10 }, { temp: 6, hours: 9 },
            { temp: 5, hours: 0 }, { temp: 4, hours: 0 }, { temp: 3, hours: 0 }, { temp: 2, hours: 0 }
        ],
        dry: [
            { temp: 36, hours: 0 }, { temp: 35, hours: 0 }, { temp: 34, hours: 32 },
            { temp: 33, hours: 181 }, { temp: 32, hours: 403 }, { temp: 31, hours: 448 },
            { temp: 30, hours: 513 }, { temp: 29, hours: 656 }, { temp: 28, hours: 700 },
            { temp: 27, hours: 760 }, { temp: 26, hours: 838 }, { temp: 25, hours: 648 },
            { temp: 24, hours: 427 }, { temp: 23, hours: 388 }, { temp: 22, hours: 350 },
            { temp: 21, hours: 292 }, { temp: 20, hours: 316 }, { temp: 19, hours: 311 },
            { temp: 18, hours: 304 }, { temp: 17, hours: 327 }, { temp: 16, hours: 294 },
            { temp: 15, hours: 250 }, { temp: 14, hours: 131 }, { temp: 13, hours: 96 },
            { temp: 12, hours: 39 }, { temp: 11, hours: 32 }, { temp: 10, hours: 11 },
            { temp: 9, hours: 11 }, { temp: 8, hours: 2 }, { temp: 7, hours: 0 }
        ]
    },
    newtaipei: {
        wet: [
            { temp: 5, hours: 8 }, { temp: 6, hours: 37 }, { temp: 7, hours: 35 },
            { temp: 8, hours: 84 }, { temp: 9, hours: 207 }, { temp: 10, hours: 211 },
            { temp: 11, hours: 219 }, { temp: 12, hours: 301 }, { temp: 13, hours: 396 },
            { temp: 14, hours: 416 }, { temp: 15, hours: 366 }, { temp: 16, hours: 392 },
            { temp: 17, hours: 409 }, { temp: 18, hours: 419 }, { temp: 19, hours: 369 },
            { temp: 20, hours: 311 }, { temp: 21, hours: 519 }, { temp: 22, hours: 467 },
            { temp: 23, hours: 696 }, { temp: 24, hours: 1056 }, { temp: 25, hours: 851 },
            { temp: 26, hours: 675 }, { temp: 27, hours: 315 }, { temp: 28, hours: 25 }
        ],
        dry: [
            { temp: 7, hours: 5 }, { temp: 8, hours: 22 }, { temp: 9, hours: 48 },
            { temp: 10, hours: 98 }, { temp: 11, hours: 157 }, { temp: 12, hours: 195 },
            { temp: 13, hours: 249 }, { temp: 14, hours: 313 }, { temp: 15, hours: 368 },
            { temp: 16, hours: 346 }, { temp: 17, hours: 374 }, { temp: 18, hours: 391 },
            { temp: 19, hours: 440 }, { temp: 20, hours: 419 }, { temp: 21, hours: 355 },
            { temp: 22, hours: 422 }, { temp: 23, hours: 389 }, { temp: 24, hours: 465 },
            { temp: 25, hours: 684 }, { temp: 26, hours: 633 }, { temp: 27, hours: 513 },
            { temp: 28, hours: 433 }, { temp: 29, hours: 326 }, { temp: 30, hours: 234 },
            { temp: 31, hours: 248 }, { temp: 32, hours: 241 }, { temp: 33, hours: 252 },
            { temp: 34, hours: 136 }, { temp: 35, hours: 26 }, { temp: 36, hours: 2 }
        ]
    }
};

// ============ 經驗範圍值建議 ============
const SUGGESTED_VALUES = {
    power: {
        'distribution-loss': { min: 0.01, max: 0.03, desc: '配電損耗' },
        'transformer-loss': { min: 0.005, max: 0.015, desc: '變壓器損耗' },
        'generator-power': { min: 0.005, max: 0.01, desc: '發電機用電' },
        'other-power': { min: 0.005, max: 0.01, desc: '其他電力設施' }
    },
    cooling: {
        'cdu-power': { min: 0.01, max: 0.03, desc: 'CDU 冷卻分配單元' },
        'crac-power': { min: 0.03, max: 0.08, desc: 'CRAH/CRAC/FWU 機組' },
        'pump-fan-power': { min: 0.02, max: 0.05, desc: '幫浦與風扇' },
        'other-cooling': { min: 0.01, max: 0.02, desc: '其他冷卻設備' }
    },
    other: {
        'lighting-power': { min: 0.005, max: 0.01, desc: '照明用電' },
        'fire-system-power': { min: 0.002, max: 0.005, desc: '消防系統' },
        'security-power': { min: 0.001, max: 0.003, desc: '保全系統' },
        'office-power': { min: 0.01, max: 0.03, desc: '辦公室用電' },
        'misc-power': { min: 0.005, max: 0.01, desc: '其他雜項用電' }
    }
};

const REGION_NAMES = {
    newtaipei: '新北',
    taoyuan: '桃園',
    taichung: '台中',
    kaohsiung: '高雄',
    newtaipei: '新北'
};

let currentSystem = 'water';
let currentRegion = 'newtaipei';
let currentWeatherData = null;

document.addEventListener('DOMContentLoaded', function() {
    selectSystem('water');
});

function suggestValue(inputId, category) {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) {
        alert('請先輸入 IT 設備用電量！');
        document.getElementById('it-power').focus();
        return;
    }
    const suggestion = SUGGESTED_VALUES[category][inputId];
    if (suggestion) {
        const midValue = (suggestion.min + suggestion.max) / 2;
        const suggested = itPower * midValue;
        document.getElementById(inputId).value = suggested.toFixed(1);
    }
}

// 自動生成整個類別的建議值
function autoFillCategory(category) {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) {
        alert('請先輸入 IT 設備用電量！');
        document.getElementById('it-power').focus();
        return;
    }
    
    const categoryValues = SUGGESTED_VALUES[category];
    let filledCount = 0;
    
    for (const [inputId, suggestion] of Object.entries(categoryValues)) {
        const input = document.getElementById(inputId);
        const currentValue = parseFloat(input?.value) || 0;
        
        // 只填寫尚未填寫的格子（值為0或空）
        if (currentValue === 0) {
            const midValue = (suggestion.min + suggestion.max) / 2;
            const suggested = itPower * midValue;
            input.value = suggested.toFixed(1);
            filledCount++;
        }
    }
    
    if (filledCount > 0) {
        // 展開該區塊讓使用者看到結果
        const detailsId = category === 'power' ? 'power-details' : 
                         category === 'cooling' ? 'cooling-details' : 'other-details';
        const detailsSection = document.getElementById(detailsId);
        const toggleBtn = detailsSection.previousElementSibling.querySelector('.toggle-btn');
        
        if (detailsSection.classList.contains('collapsed')) {
            detailsSection.classList.remove('collapsed');
            toggleBtn.textContent = '收起 ▲';
        }
    } else {
        alert('所有項目都已經填寫過了！');
    }
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    const button = element.previousElementSibling.querySelector('.toggle-btn');
    if (element.classList.contains('collapsed')) {
        element.classList.remove('collapsed');
        button.textContent = '收起 ▲';
    } else {
        element.classList.add('collapsed');
        button.textContent = '展開 ▼';
    }
}

function selectSystem(system) {
    currentSystem = system;
    document.querySelectorAll('.system-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.system === system) {
            btn.classList.add('active');
        }
    });
    const description = document.getElementById('system-description');
    if (system === 'water') {
        description.innerHTML = `<p>選擇水冷系統 - 使用 <strong>濕球溫度</strong> 進行計算</p>`;
        // 隱藏濕球分布圖（因為水冷只用一個分布圖）
        document.getElementById('wet-stats-section').classList.add('hidden');
    } else {
        description.innerHTML = `<p>選擇風冷系統 - 冷水機組使用 <strong>乾球溫度</strong>，冷卻水塔使用 <strong>濕球溫度</strong></p>`;
    }
    document.getElementById('region-section').classList.remove('hidden');
    if (currentRegion) {
        selectRegion(currentRegion);
    }
}

function selectRegion(region) {
    currentRegion = region;
    document.querySelectorAll('.region-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.region === region) {
            btn.classList.add('active');
        }
    });
    
    // 更新乾球溫度分布圖
    const dryWeatherData = WEATHER_DATA[region].dry;
    currentWeatherData = dryWeatherData;
    updateStatsDisplay('dry', '乾球');
    
    // 如果是風冷系統，額外生成濕球溫度分布圖和表格
    if (currentSystem === 'air') {
        updateWetStatsDisplay(region);
        generatePowerInputTables(region);
    } else {
        generatePowerInputTable();
    }
}

function updateStatsDisplay() {
    if (!currentWeatherData) return;
    const regionName = REGION_NAMES[currentRegion];
    const tempLabel = currentSystem === 'water' ? '濕球' : '乾球';
    document.getElementById('region-title').textContent = regionName;
    document.getElementById('temp-type').textContent = tempLabel;
    const totalHours = currentWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const maxHours = Math.max(...currentWeatherData.map(d => d.hours));
    const chartContainer = document.getElementById('temp-chart');
    const sortedData = [...currentWeatherData].sort((a, b) => a.temp - b.temp);
    chartContainer.innerHTML = sortedData.map(item => {
        const width = maxHours > 0 ? (item.hours / maxHours * 100) : 0;
        const percent = totalHours > 0 ? (item.hours / totalHours * 100).toFixed(1) : '0.0';
        let colorClass = 'low';
        if (currentSystem === 'air') {
            if (item.temp >= 32) colorClass = 'high';
            else if (item.temp >= 28) colorClass = 'medium';
        } else {
            if (item.temp >= 24) colorClass = 'high';
            else if (item.temp >= 20) colorClass = 'medium';
        }
        return `<div class="temp-chart-row"><div class="temp-chart-label">${item.temp}°C</div><div class="temp-bar-container"><div class="temp-bar-fill ${colorClass}" style="width: ${width}%;"></div></div><div class="temp-chart-value">${item.hours}h (${percent}%)</div></div>`;
    }).join('');
    document.getElementById('total-hours').textContent = totalHours.toLocaleString();
    document.getElementById('stats-section').classList.remove('hidden');
}

// 風冷系統專用：更新濕球溫度分布圖
function updateWetStatsDisplay(region) {
    // 更新濕球溫度分布的標題區域
    const regionName = REGION_NAMES[region];
    document.getElementById('wet-region-title').textContent = regionName;
    
    const wetWeatherData = WEATHER_DATA[region].wet;
    const totalHours = wetWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const maxHours = Math.max(...wetWeatherData.map(d => d.hours));
    const chartContainer = document.getElementById('wet-temp-chart');
    const sortedData = [...wetWeatherData].sort((a, b) => a.temp - b.temp);
    
    chartContainer.innerHTML = sortedData.map(item => {
        const width = maxHours > 0 ? (item.hours / maxHours * 100) : 0;
        const percent = totalHours > 0 ? (item.hours / totalHours * 100).toFixed(1) : '0.0';
        let colorClass = 'low';
        if (item.temp >= 24) colorClass = 'high';
        else if (item.temp >= 20) colorClass = 'medium';
        return `<div class="temp-chart-row"><div class="temp-chart-label">${item.temp}°C</div><div class="temp-bar-container"><div class="temp-bar-fill ${colorClass}" style="width: ${width}%;"></div></div><div class="temp-chart-value">${item.hours}h (${percent}%)</div></div>`;
    }).join('');
    
    document.getElementById('wet-total-hours').textContent = totalHours.toLocaleString();
    document.getElementById('wet-stats-section').classList.remove('hidden');
}

// 水冷系統：冷水機組和冷卻水塔都使用濕球溫度
function generatePowerInputTable() {
    const container = document.getElementById('power-input-tables');
    const tempLabel = '濕球';
    const wetData = WEATHER_DATA[currentRegion].wet;
    const sortedData = [...wetData].sort((a, b) => a.temp - b.temp);
    const activeTemps = sortedData.filter(d => d.hours > 0);
    
    // 生成冷水機組表格
    let chillerTableHTML = generatePowerTableHTML('chiller', '❄️ 冷水機組耗電量 (kW)', tempLabel, activeTemps, 'chiller-avg-power');
    
    // 生成冷卻水塔表格（風冷系統也用濕球）
    let towerTableHTML = generatePowerTableHTML('tower', '🏭 冷卻水塔耗電量 (kW)', tempLabel, activeTemps, 'tower-avg-power');
    
    container.innerHTML = chillerTableHTML + towerTableHTML;
    document.getElementById('power-tables-section').classList.remove('hidden');
}

// 風冷系統：冷水機組用乾球，冷卻水塔用濕球
function generatePowerInputTables(region) {
    const container = document.getElementById('power-input-tables');
    
    // 乾球數據 - 冷水機組
    const dryData = WEATHER_DATA[region].dry;
    const drySorted = [...dryData].sort((a, b) => a.temp - b.temp);
    const dryActive = drySorted.filter(d => d.hours > 0);
    
    // 濕球數據 - 冷卻水塔
    const wetData = WEATHER_DATA[region].wet;
    const wetSorted = [...wetData].sort((a, b) => a.temp - b.temp);
    const wetActive = wetSorted.filter(d => d.hours > 0);
    
    // 生成冷水機組表格（乾球）
    let chillerTableHTML = generatePowerTableHTML('chiller', '❄️ 冷水機組耗電量 (kW)', '乾球', dryActive, 'chiller-avg-power');
    
    // 生成冷卻水塔表格（濕球）
    let towerTableHTML = generatePowerTableHTML('tower', '🏭 冷卻水塔耗電量 (kW)', '濕球', wetActive, 'tower-avg-power');
    
    container.innerHTML = chillerTableHTML + towerTableHTML;
    document.getElementById('power-tables-section').classList.remove('hidden');
}

// 生成表格的通用函數
function generatePowerTableHTML(prefix, title, tempLabel, activeTemps, avgId) {
    let html = `
        <div class="power-table-section">
            <h3>${title}</h3>
            <div class="power-table-scroll">
                <table class="power-table">
                    <thead>
                        <tr>
                            <th>${tempLabel}溫度 (°C)</th>
                            <th>時數 (小時/年)</th>
                            <th>耗電量 (kW)</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    
    activeTemps.forEach(item => {
        const id = `${prefix}-temp-${item.temp}`;
        html += `
            <tr>
                <td><strong>${item.temp}°C</strong></td>
                <td>${item.hours}</td>
                <td><input type="number" id="${id}" class="power-input" placeholder="0" step="0.1" value="0" oninput="updateWeightedAverages()"></td>
            </tr>
        `;
    });
    
    html += `
                    </tbody>
                </table>
            </div>
            <div class="table-summary">
                <span>平均耗電量: <strong id="${avgId}">0</strong> kW</span>
                <button type="button" class="auto-fill-btn-large" onclick="${prefix === 'chiller' ? 'autoFillChiller()' : 'autoFillTower()'}">自動生成其他</button>
            </div>
        </div>
    `;
    
    return html;
}

function updateWeightedAverages() {
    if (!currentWeatherData) return;
    
    let chillerTotal = 0, chillerHours = 0;
    let towerTotal = 0, towerHours = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        
        // 冷水機組 - 乾球
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
            }
        });
        
        // 冷卻水塔 - 濕球
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    }
    
    const chillerAvg = chillerHours > 0 ? chillerTotal / chillerHours : 0;
    const towerAvg = towerHours > 0 ? towerTotal / towerHours : 0;
    document.getElementById('chiller-avg-power').textContent = chillerAvg.toFixed(2);
    document.getElementById('tower-avg-power').textContent = towerAvg.toFixed(2);
}

// 線性插值自動填充冷水機組
function autoFillChiller() {
    if (currentSystem === 'water') {
        autoFillByPrefix('chiller-temp-', WEATHER_DATA[currentRegion].wet);
    } else {
        autoFillByPrefix('chiller-temp-', WEATHER_DATA[currentRegion].dry);
    }
}

// 線性插值自動填充冷卻水塔
function autoFillTower() {
    if (currentSystem === 'water') {
        autoFillByPrefix('tower-temp-', WEATHER_DATA[currentRegion].wet);
    } else {
        autoFillByPrefix('tower-temp-', WEATHER_DATA[currentRegion].wet);
    }
}

// 通用線性插值函數
function autoFillByPrefix(prefix, weatherData) {
    // 收集已輸入的數據點
    const dataPoints = [];
    const sortedData = [...weatherData].sort((a, b) => a.temp - b.temp);
    
    sortedData.forEach(item => {
        const input = document.getElementById(`${prefix}${item.temp}`);
        const value = parseFloat(input?.value);
        if (!isNaN(value) && value > 0) {
            dataPoints.push({ temp: item.temp, power: value });
        }
    });
    
    // 需要至少1個點才能進行插值
    if (dataPoints.length < 1) {
        alert('至少需要輸入 1 個溫度點的耗電量！');
        return;
    }
    
    // 對數據點按溫度排序
    dataPoints.sort((a, b) => a.temp - b.temp);
    
    // 填充所有空白格子
    sortedData.forEach(item => {
        const input = document.getElementById(`${prefix}${item.temp}`);
        const currentValue = parseFloat(input?.value);
        
        // 只填充尚未填寫的格子
        if ((isNaN(currentValue) || currentValue === 0) && item.hours > 0) {
            const interpolatedValue = linearInterpolation(item.temp, dataPoints);
            if (interpolatedValue !== null) {
                input.value = interpolatedValue.toFixed(1);
            }
        }
    });
    
    // 更新加權平均值
    updateWeightedAverages();
}

// 線性插值計算
function linearInterpolation(temp, dataPoints) {
    // 對數據點按溫度排序
    dataPoints.sort((a, b) => a.temp - b.temp);
    
    // 如果只有1個點，無法插值
    if (dataPoints.length === 1) {
        return dataPoints[0].power;
    }
    
    // 如果只有2個點，直接用這兩點計算線性關係
    if (dataPoints.length === 2) {
        const p1 = dataPoints[0];
        const p2 = dataPoints[1];
        // 線性關係：power = slope * temp + intercept
        const slope = (p2.power - p1.power) / (p2.temp - p1.temp);
        const intercept = p1.power - slope * p1.temp;
        return slope * temp + intercept;
    }
    
    // 找到 temp 所在的區間
    for (let i = 0; i < dataPoints.length - 1; i++) {
        if (temp >= dataPoints[i].temp && temp <= dataPoints[i + 1].temp) {
            const lower = dataPoints[i];
            const upper = dataPoints[i + 1];
            // 線性插值公式: y = y1 + (y2 - y1) * (x - x1) / (x2 - x1)
            const ratio = (temp - lower.temp) / (upper.temp - lower.temp);
            return lower.power + (upper.power - lower.power) * ratio;
        }
    }
    
    // temp 低於所有數據點：用最低溫度點進行線性外推
    if (temp < dataPoints[0].temp) {
        const p1 = dataPoints[0];
        const p2 = dataPoints[1];
        const slope = (p2.power - p1.power) / (p2.temp - p1.temp);
        const intercept = p1.power - slope * p1.temp;
        return slope * temp + intercept;
    }
    
    // temp 高於所有數據點：用最高溫度點進行線性外推
    const last = dataPoints[dataPoints.length - 1];
    const secondLast = dataPoints[dataPoints.length - 2];
    const slope = (last.power - secondLast.power) / (last.temp - secondLast.temp);
    const intercept = last.power - slope * last.temp;
    return slope * temp + intercept;
}

function calculatePUE() {
    const itPower = parseFloat(document.getElementById('it-power').value) || 0;
    if (itPower <= 0) { alert('請輸入 IT 設備用電量！'); return; }
    
    // 收集電力設施用電
    const distributionLoss = parseFloat(document.getElementById('distribution-loss').value) || 0;
    const transformerLoss = parseFloat(document.getElementById('transformer-loss').value) || 0;
    const generatorPower = parseFloat(document.getElementById('generator-power').value) || 0;
    const otherPower = parseFloat(document.getElementById('other-power').value) || 0;
    const powerFacilityPower = distributionLoss + transformerLoss + generatorPower + otherPower;
    
    // 收集其他空調設備用電
    const cduPower = parseFloat(document.getElementById('cdu-power').value) || 0;
    const cracPower = parseFloat(document.getElementById('crac-power').value) || 0;
    const pumpFanPower = parseFloat(document.getElementById('pump-fan-power').value) || 0;
    const otherCooling = parseFloat(document.getElementById('other-cooling').value) || 0;
    
    let chillerTotal = 0, chillerHours = 0;
    let towerTotal = 0, towerHours = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        
        // 冷水機組 - 乾球
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                chillerTotal += chillerPower * item.hours;
                chillerHours += item.hours;
            }
        });
        
        // 冷卻水塔 - 濕球
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                towerTotal += towerPower * item.hours;
                towerHours += item.hours;
            }
        });
    }
    
    const chillerAvgPower = chillerHours > 0 ? chillerTotal / chillerHours : 0;
    const towerAvgPower = towerHours > 0 ? towerTotal / towerHours : 0;
    
    // 計算其他用電
    const lightingPower = parseFloat(document.getElementById('lighting-power').value) || 0;
    const fireSystemPower = parseFloat(document.getElementById('fire-system-power').value) || 0;
    const securityPower = parseFloat(document.getElementById('security-power').value) || 0;
    const officePower = parseFloat(document.getElementById('office-power').value) || 0;
    const miscPower = parseFloat(document.getElementById('misc-power').value) || 0;
    const otherPowerTotal = lightingPower + fireSystemPower + securityPower + officePower + miscPower;
    
    // 計算總冷卻用電 (加權平均 + 其他固定設備)
    const totalCoolingPower = chillerAvgPower + towerAvgPower + cduPower + cracPower + pumpFanPower + otherCooling;
    
    // 計算總設施用電
    const totalFacilityPower = itPower + powerFacilityPower + totalCoolingPower + otherPowerTotal;
    
    // 計算 PUE
    const pue = totalFacilityPower / itPower;
    
    // 計算年度 CLF (加權平均)
    let weightedCLF = 0;
    
    if (currentSystem === 'water') {
        // 水冷系統：兩者都使用濕球
        const wetData = WEATHER_DATA[currentRegion].wet;
        wetData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                const towerPower = parseFloat(towerInput?.value) || 0;
                const totalPower = chillerPower + towerPower;
                if (totalPower > 0) {
                    const clf = totalPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
    } else {
        // 風冷系統：冷水機組用乾球，冷卻水塔用濕球
        const dryData = WEATHER_DATA[currentRegion].dry;
        const wetData = WEATHER_DATA[currentRegion].wet;
        const totalHours = dryData.reduce((sum, d) => sum + d.hours, 0);
        
        // 乾球 - 冷水機組
        dryData.forEach(item => {
            if (item.hours > 0) {
                const chillerInput = document.getElementById(`chiller-temp-${item.temp}`);
                const chillerPower = parseFloat(chillerInput?.value) || 0;
                if (chillerPower > 0) {
                    const clf = chillerPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
        
        // 濕球 - 冷卻水塔
        wetData.forEach(item => {
            if (item.hours > 0) {
                const towerInput = document.getElementById(`tower-temp-${item.temp}`);
                const towerPower = parseFloat(towerInput?.value) || 0;
                if (towerPower > 0) {
                    const clf = towerPower / itPower;
                    weightedCLF += clf * item.hours;
                }
            }
        });
    }
    
    const totalHours = currentWeatherData.reduce((sum, item) => sum + item.hours, 0);
    const avgCLF = totalHours > 0 ? weightedCLF / totalHours : 0;
    
    // 計算年度節能潛力
    const annualSavingsKWh = avgCLF * itPower * 8760;
    
    displayResults({
        pue,
        itPower,
        totalFacilityPower,
        powerFacilityPower,
        totalCoolingPower,
        chillerAvgPower,
        towerAvgPower,
        otherPowerTotal,
        avgCLF,
        annualSavingsKWh,
        currentSystem,
        currentRegion
    });
}

function displayResults(data) {
    const resultSection = document.getElementById('result-section');
    resultSection.classList.add('show');
    const total = data.totalFacilityPower;
    const pueElement = document.getElementById('pue-value');
    const pueIndicator = document.getElementById('pue-indicator');
    pueElement.textContent = data.pue.toFixed(3);
    pueIndicator.className = 'pue-indicator';
    if (data.pue <= 1.4) pueIndicator.classList.add('excellent');
    else if (data.pue <= 1.6) pueIndicator.classList.add('good');
    else if (data.pue <= 2.0) pueIndicator.classList.add('average');
    else pueIndicator.classList.add('poor');
    document.getElementById('total-facility-power').textContent = total.toFixed(1);
    document.getElementById('total-it-power').textContent = data.itPower.toFixed(1);
    updateChart(data, total);
    document.getElementById('chiller-result').textContent = data.chillerAvgPower.toFixed(2);
    document.getElementById('tower-result').textContent = data.towerAvgPower.toFixed(2);
    document.getElementById('clf-result').textContent = data.avgCLF.toFixed(4);
    document.getElementById('energy-savings-result').textContent = Math.round(data.annualSavingsKWh).toLocaleString();
    updateDetailTable(data, total);
    updateRecommendations(data);
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function updateChart(data, total) {
    const itBar = document.getElementById('it-bar'), coolingBar = document.getElementById('cooling-bar');
    const powerBar = document.getElementById('power-bar'), otherBar = document.getElementById('other-bar');
    const itPercent = data.itPower / total * 100;
    itBar.querySelector('.bar-fill').style.width = Math.max(itPercent, 5) + '%';
    itBar.querySelector('.bar-value').textContent = data.itPower.toFixed(1) + ' kW (' + itPercent.toFixed(1) + '%)';
    const coolingPercent = data.totalCoolingPower / total * 100;
    coolingBar.querySelector('.bar-fill').style.width = Math.max(coolingPercent, 5) + '%';
    coolingBar.querySelector('.bar-value').textContent = data.totalCoolingPower.toFixed(1) + ' kW (' + coolingPercent.toFixed(1) + '%)';
    const powerPercent = data.powerFacilityPower / total * 100;
    powerBar.querySelector('.bar-fill').style.width = Math.max(powerPercent, 5) + '%';
    powerBar.querySelector('.bar-value').textContent = data.powerFacilityPower.toFixed(1) + ' kW (' + powerPercent.toFixed(1) + '%)';
    const otherPercent = data.otherPowerTotal / total * 100;
    otherBar.querySelector('.bar-fill').style.width = Math.max(otherPercent, 5) + '%';
    otherBar.querySelector('.bar-value').textContent = data.otherPowerTotal.toFixed(1) + ' kW (' + otherPercent.toFixed(1) + '%)';
}

function updateDetailTable(data, total) {
    const tbody = document.getElementById('detail-tbody');
    const items = [
        { name: 'IT 設備用電', value: data.itPower },
        { name: '冷水機組 (加權平均)', value: data.chillerAvgPower },
        { name: '冷卻水塔 (加權平均)', value: data.towerAvgPower },
        { name: 'CDU 冷卻分配單元', value: parseFloat(document.getElementById('cdu-power').value) || 0 },
        { name: 'CRAH/CRAC/FWU 機組', value: parseFloat(document.getElementById('crac-power').value) || 0 },
        { name: '幫浦與風扇', value: parseFloat(document.getElementById('pump-fan-power').value) || 0 },
        { name: '配電系統損耗', value: parseFloat(document.getElementById('distribution-loss').value) || 0 },
        { name: '變壓器損耗', value: parseFloat(document.getElementById('transformer-loss').value) || 0 },
        { name: '發電機用電', value: parseFloat(document.getElementById('generator-power').value) || 0 },
        { name: '照明用電', value: parseFloat(document.getElementById('lighting-power').value) || 0 },
        { name: '其他', value: data.otherPowerTotal }
    ];
    tbody.innerHTML = items.map(item => {
        if (item.value === 0 && item.name !== '其他' && item.name !== 'IT 設備用電') return '';
        const percent = total > 0 ? (item.value / total * 100).toFixed(1) : '0.0';
        return `<tr><td>${item.name}</td><td>${item.value.toFixed(1)} kW</td><td>${percent}%</td></tr>`;
    }).join('') + `<tr><td><strong>總計</strong></td><td><strong>${total.toFixed(1)} kW</strong></td><td><strong>100.0%</strong></td></tr>`;
}

function updateRecommendations(data) {
    const content = document.getElementById('recommendations-content');
    const recommendations = [];
    const coolingPercent = data.totalCoolingPower / data.totalFacilityPower * 100;
    if (coolingPercent > 40) {
        recommendations.push({ type: 'warning', icon: '❄️', text: `冷卻用電佔比 ${coolingPercent.toFixed(1)}%，偏高。建議優化冷水機組效率或增加免費冷卻時數。` });
    } else if (coolingPercent < 20) {
        recommendations.push({ type: 'good', icon: '✅', text: `冷卻用電佔比 ${coolingPercent.toFixed(1)}%，表現優異！` });
    }
    if (data.pue > 1.6) {
        recommendations.push({ type: 'danger', icon: '🎯', text: `PUE 值 ${data.pue.toFixed(3)}，有改善空間。目標應控制在 1.4 以下。` });
    } else if (data.pue <= 1.4) {
        recommendations.push({ type: 'good', icon: '🏆', text: `PUE 值 ${data.pue.toFixed(3)}，達到高效節能標準！` });
    }
    if (data.currentSystem === 'air') {
        recommendations.push({ type: 'info', icon: '🌬️', text: '風冷系統在高溫環境下效率較低，可考慮在水冷系統可用時切換。' });
    } else {
        recommendations.push({ type: 'info', icon: '💧', text: '水冷系統在低濕球溫度時段可達到更佳節能效果，善用免費冷卻。' });
    }
    if (data.currentRegion === 'kaohsiung') {
        recommendations.push({ type: 'info', icon: '🌡️', text: '高雄氣候炎熱，建議優先改善冷卻系統或考慮海水冷卻技術。' });
    } else if (data.currentRegion === 'taichung') {
        recommendations.push({ type: 'info', icon: '🌤️', text: '台中氣候適中，是三個地區中免費冷卻時數較高的區域。' });
    } else {
        recommendations.push({ type: 'info', icon: '🌧️', text: '桃園氣候濕潤，水冷系統效率需注意除濕負荷。' });
    }
    content.innerHTML = recommendations.map(rec => `<div class="recommendation-item ${rec.type}"><span class="recommendation-icon">${rec.icon}</span><span>${rec.text}</span></div>`).join('');
}

function resetForm() {
    document.getElementById('pue-form').reset();
    document.getElementById('result-section').classList.remove('show');
    document.querySelectorAll('.details-section').forEach(el => el.classList.add('collapsed'));
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.textContent = '展開 ▼');
    document.getElementById('power-tables-section').classList.add('hidden');
    document.getElementById('wet-stats-section').classList.add('hidden');
    if (currentRegion) {
        selectRegion(currentRegion);
    }
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            calculatePUE();
        }
    }
});

// 產生 PDF 報告
function generatePDFReport() {
    // 確保計算結果已顯示
    const resultSection = document.getElementById('result-section');
    if (!resultSection.classList.contains('show')) {
        alert('請先計算 PUE！');
        return;
    }
    
    // 設定報告日期
    const now = new Date();
    const dateStr = now.getFullYear() + '/' + 
                   String(now.getMonth() + 1).padStart(2, '0') + '/' + 
                   String(now.getDate()).padStart(2, '0') + ' ' + 
                   String(now.getHours()).padStart(2, '0') + ':' + 
                   String(now.getMinutes()).padStart(2, '0');
    resultSection.setAttribute('data-date', dateStr);
    
    // 設定報告資訊
    const regionName = REGION_NAMES[currentRegion];
    const systemName = currentSystem === 'water' ? '水冷冰機系統' : '風冷冰機系統';
    const itPower = document.getElementById('it-power').value;
    document.getElementById('report-meta').innerHTML = 
        `產生日期: ${dateStr} | 地區: ${regionName} | 冷卻系統: ${systemName} | IT 用電: ${itPower} kW`;
    
    // 使用瀏覽器的列印功能產生 PDF
    window.print();
}
