// 【初期キャラクターデータ設定】
// 今後キャラクターや画像名を一括で差し替えたい場合は、この配列データを編集してください。
const DEFAULT_CHARACTERS = [
  { id: "c3", name: "ウェンティ", rarity: 5, element: "anemo", image: "003_ウェンティ.webp", owned: false },
  { id: "c4", name: "アンバー", rarity: 4, element: "pyro", image: "004_アンバー.webp", owned: false },
  { id: "c5", name: "ガイア", rarity: 4, element: "cryo", image: "005_ガイア.webp", owned: false },
  { id: "c6", name: "ジン", rarity: 5, element: "anemo", image: "006_ジン.webp", owned: false },
  { id: "c7", name: "リサ", rarity: 4, element: "electro", image: "007_リサ.webp", owned: false },
  { id: "c8", name: "ディルック", rarity: 5, element: "pyro", image: "008_ディルック.webp", owned: false },
  { id: "c9", name: "バーバラ", rarity: 4, element: "hydro", image: "009_バーバラ.webp", owned: false },
  { id: "c10", name: "香菱", rarity: 4, element: "pyro", image: "010_香菱.webp", owned: false },
  { id: "c11", name: "レザー", rarity: 4, element: "electro", image: "011_レザー.webp", owned: false },
  { id: "c12", name: "凝光", rarity: 4, element: "geo", image: "012_凝光.webp", owned: false },
  { id: "c13", name: "行秋", rarity: 4, element: "hydro", image: "013_行秋.webp", owned: false },
  { id: "c14", name: "七七", rarity: 5, element: "cryo", image: "014_七七.webp", owned: false },
  { id: "c15", name: "刻晴", rarity: 5, element: "electro", image: "015_刻晴.webp", owned: false },
  { id: "c16", name: "北斗", rarity: 4, element: "electro", image: "016_北斗.webp", owned: false },
  { id: "c17", name: "ベネット", rarity: 4, element: "pyro", image: "017_ベネット.webp", owned: false },
  { id: "c18", name: "ノエル", rarity: 4, element: "geo", image: "018_ノエル.webp", owned: false },
  { id: "c19", name: "フィッシュル", rarity: 4, element: "electro", image: "019_フィッシュル.webp", owned: false },
  { id: "c20", name: "スクロース", rarity: 4, element: "anemo", image: "020_スクロース.webp", owned: false },
  { id: "c21", name: "モナ", rarity: 5, element: "hydro", image: "021_モナ.webp", owned: false },
  { id: "c22", name: "重雲", rarity: 4, element: "cryo", image: "022_重雲.webp", owned: false },
  { id: "c23", name: "クレー", rarity: 5, element: "pyro", image: "023_クレー.webp", owned: false },
  { id: "c24", name: "タルタリヤ", rarity: 5, element: "hydro", image: "024_タルタリヤ.webp", owned: false },
  { id: "c25", name: "ディオナ", rarity: 4, element: "cryo", image: "025_ディオナ.webp", owned: false },
  { id: "c26", name: "鍾離", rarity: 5, element: "geo", image: "026_鍾離.webp", owned: false },
  { id: "c27", name: "辛炎", rarity: 4, element: "pyro", image: "027_辛炎.webp", owned: false },
  { id: "c28", name: "アルベド", rarity: 5, element: "geo", image: "028_アルベド.webp", owned: false },
  { id: "c29", name: "甘雨", rarity: 5, element: "cryo", image: "029_甘雨.webp", owned: false },
  { id: "c30", name: "魈", rarity: 5, element: "anemo", image: "030_魈.webp", owned: false },
  { id: "c31", name: "胡桃", rarity: 5, element: "pyro", image: "031_胡桃.webp", owned: false },
  { id: "c32", name: "ロサリア", rarity: 4, element: "cryo", image: "032_ロサリア.webp", owned: false },
  { id: "c33", name: "煙緋", rarity: 4, element: "pyro", image: "033_煙緋.webp", owned: false },
  { id: "c34", name: "エウルア", rarity: 5, element: "cryo", image: "034_エウルア.webp", owned: false },
  { id: "c35", name: "楓原万葉", rarity: 5, element: "anemo", image: "035_楓原万葉.webp", owned: false },
  { id: "c36", name: "神里綾華", rarity: 5, element: "cryo", image: "036_神里綾華.webp", owned: false },
  { id: "c37", name: "宵宮", rarity: 5, element: "pyro", image: "037_宵宮.webp", owned: false },
  { id: "c38", name: "早柚", rarity: 4, element: "anemo", image: "038_早柚.webp", owned: false },
  { id: "c39", name: "雷電将軍", rarity: 5, element: "electro", image: "039_雷電将軍.webp", owned: false },
  { id: "c40", name: "九条裟羅", rarity: 4, element: "electro", image: "040_九条裟羅.webp", owned: false },
  { id: "c41", name: "アーロイ", rarity: 5, element: "cryo", image: "041_アーロイ.webp", owned: false },
  { id: "c42", name: "珊瑚宮心海", rarity: 5, element: "hydro", image: "042_珊瑚宮心海.webp", owned: false },
  { id: "c43", name: "トーマ", rarity: 4, element: "pyro", image: "043_トーマ.webp", owned: false },
  { id: "c44", name: "荒瀧一斗", rarity: 5, element: "geo", image: "044_荒瀧一斗.webp", owned: false },
  { id: "c45", name: "ゴロー", rarity: 4, element: "geo", image: "045_ゴロー.webp", owned: false },
  { id: "c46", name: "申鶴", rarity: 5, element: "cryo", image: "046_申鶴.webp", owned: false },
  { id: "c47", name: "雲菫", rarity: 4, element: "geo", image: "047_雲菫.webp", owned: false },
  { id: "c48", name: "八重神子", rarity: 5, element: "electro", image: "048_八重神子.webp", owned: false },
  { id: "c49", name: "神里綾人", rarity: 5, element: "hydro", image: "049_神里綾人.webp", owned: false },
  { id: "c50", name: "夜蘭", rarity: 5, element: "hydro", image: "050_夜蘭.webp", owned: false },
  { id: "c51", name: "久岐忍", rarity: 4, element: "electro", image: "051_久岐忍.webp", owned: false },
  { id: "c52", name: "鹿野院平蔵", rarity: 4, element: "anemo", image: "052_鹿野院平蔵.webp", owned: false },
  { id: "c53", name: "ティナリ", rarity: 5, element: "dendro", image: "053_ティナリ.webp", owned: false },
  { id: "c54", name: "コレイ", rarity: 4, element: "dendro", image: "054_コレイ.webp", owned: false },
  { id: "c55", name: "ドリー", rarity: 4, element: "electro", image: "055_ドリー.webp", owned: false },
  { id: "c56", name: "セノ", rarity: 5, element: "electro", image: "056_セノ.webp", owned: false },
  { id: "c57", name: "キャンディス", rarity: 4, element: "hydro", image: "057_キャンディス.webp", owned: false },
  { id: "c58", name: "ニィロウ", rarity: 5, element: "hydro", image: "058_ニィロウ.webp", owned: false },
  { id: "c59", name: "ナヒーダ", rarity: 5, element: "dendro", image: "059_ナヒーダ.webp", owned: false },
  { id: "c60", name: "レイラ", rarity: 4, element: "cryo", image: "060_レイラ.webp", owned: false },
  { id: "c61", name: "放浪者", rarity: 5, element: "anemo", image: "061_放浪者.webp", owned: false },
  { id: "c62", name: "ファルザン", rarity: 4, element: "anemo", image: "062_ファルザン.webp", owned: false },
  { id: "c63", name: "アルハイゼン", rarity: 5, element: "dendro", image: "063_アルハイゼン.webp", owned: false },
  { id: "c64", name: "ヨォーヨ", rarity: 4, element: "dendro", image: "064_ヨォーヨ.webp", owned: false },
  { id: "c65", name: "ディシア", rarity: 5, element: "pyro", image: "065_ディシア.webp", owned: false },
  { id: "c66", name: "ミカ", rarity: 4, element: "cryo", image: "066_ミカ.webp", owned: false },
  { id: "c67", name: "白朮", rarity: 5, element: "dendro", image: "067_白朮.webp", owned: false },
  { id: "c68", name: "カーヴェ", rarity: 4, element: "dendro", image: "068_カーヴェ.webp", owned: false },
  { id: "c69", name: "綺良々", rarity: 4, element: "dendro", image: "069_綺良々.webp", owned: false },
  { id: "c70", name: "リネ", rarity: 5, element: "pyro", image: "070_リネ.webp", owned: false },
  { id: "c71", name: "リネット", rarity: 4, element: "anemo", image: "071_リネット.webp", owned: false },
  { id: "c72", name: "フレミネ", rarity: 4, element: "cryo", image: "072_フレミネ.webp", owned: false },
  { id: "c73", name: "ヌヴィレット", rarity: 5, element: "hydro", image: "073_ヌヴィレット.webp", owned: false },
  { id: "c74", name: "リオセスリ", rarity: 5, element: "cryo", image: "074_リオセスリ.webp", owned: false },
  { id: "c75", name: "フリーナ", rarity: 5, element: "hydro", image: "075_フリーナ.webp", owned: false },
  { id: "c76", name: "シャルロット", rarity: 4, element: "cryo", image: "076_シャルロット.webp", owned: false },
  { id: "c77", name: "ナヴィア", rarity: 5, element: "geo", image: "077_ナヴィア.webp", owned: false },
  { id: "c78", name: "シュヴルーズ", rarity: 4, element: "pyro", image: "078_シュヴルーズ.webp", owned: false },
  { id: "c79", name: "閑雲", rarity: 5, element: "anemo", image: "079_閑雲.webp", owned: false },
  { id: "c80", name: "嘉明", rarity: 4, element: "pyro", image: "080_嘉明.webp", owned: false },
  { id: "c81", name: "千織", rarity: 5, element: "geo", image: "081_千織.webp", owned: false },
  { id: "c82", name: "アルレッキーノ", rarity: 5, element: "pyro", image: "082_アルレッキーノ.webp", owned: false },
  { id: "c83", name: "クロリンデ", rarity: 5, element: "electro", image: "083_クロリンデ.webp", owned: false },
  { id: "c84", name: "シグウィン", rarity: 5, element: "hydro", image: "084_シグウィン.webp", owned: false },
  { id: "c85", name: "セトス", rarity: 4, element: "electro", image: "085_セトス.webp", owned: false },
  { id: "c86", name: "エミリエ", rarity: 5, element: "dendro", image: "086_エミリエ.webp", owned: false },
  { id: "c87", name: "ナヒーダ", rarity: 5, element: "hydro", image: "087_ナヒーダ.webp", owned: false },
  { id: "c88", name: "カチーナ", rarity: 4, element: "geo", image: "088_カチーナ.webp", owned: false },
  { id: "c89", name: "キィニチ", rarity: 5, element: "dendro", image: "089_キィニチ.webp", owned: false },
  { id: "c90", name: "シロネン", rarity: 5, element: "geo", image: "090_シロネン.webp", owned: false },
  { id: "c91", name: "チャスカ", rarity: 5, element: "anemo", image: "091_チャスカ.webp", owned: false },
  { id: "c92", name: "オロルン", rarity: 4, element: "electro", image: "092_オロルン.webp", owned: false },
  { id: "c93", name: "マーヴィカ", rarity: 5, element: "pyro", image: "093_マーヴィカ.webp", owned: false },
  { id: "c94", name: "シトラリ", rarity: 5, element: "cryo", image: "094_シトラリ.webp", owned: false },
  { id: "c95", name: "藍硯", rarity: 4, element: "anemo", image: "095_藍硯.webp", owned: false },
  { id: "c96", name: "夢見月瑞希", rarity: 5, element: "anemo", image: "096_夢見月瑞希.webp", owned: false },
  { id: "c97", name: "ヴァレサ", rarity: 5, element: "electro", image: "097_ヴァレサ.webp", owned: false },
  { id: "c98", name: "イアンサ", rarity: 4, element: "electro", image: "098_イアンサ.webp", owned: false },
  { id: "c99", name: "エスコフィエ", rarity: 5, element: "cryo", image: "099_エスコフィエ.webp", owned: false },
  { id: "c100", name: "イファ", rarity: 4, element: "anemo", image: "100_イファ.webp", owned: false },
  { id: "c101", name: "スカーク", rarity: 5, element: "cryo", image: "101_スカーク.webp", owned: false },
  { id: "c102", name: "ダリア", rarity: 4, element: "hydro", image: "102_ダリア.webp", owned: false },
  { id: "c103", name: "イネファ", rarity: 5, element: "electro", image: "103_イネファ.webp", owned: false },
  { id: "c104", name: "ラウマ", rarity: 5, element: "dendro", image: "104_ラウマ.webp", owned: false },
  { id: "c105", name: "アイノ", rarity: 4, element: "hydro", image: "105_アイノ.webp", owned: false },
  { id: "c106", name: "フリンズ", rarity: 5, element: "electro", image: "106_フリンズ.webp", owned: false },
  { id: "c107", name: "ネフェル", rarity: 5, element: "dendro", image: "107_ネフェル.webp", owned: false },
  { id: "c108", name: "ドゥリン", rarity: 5, element: "pyro", image: "108_ドゥリン.webp", owned: false },
  { id: "c109", name: "ヤフォダ", rarity: 4, element: "anemo", image: "109_ヤフォダ.webp", owned: false },
  { id: "c110", name: "コロンビーナ", rarity: 5, element: "hydro", image: "110_コロンビーナ.webp", owned: false },
  { id: "c111", name: "兹白", rarity: 5, element: "geo", image: "111_兹白.webp", owned: false },
  { id: "c112", name: "イルーガ", rarity: 4, element: "geo", image: "112_イルーガ.webp", owned: false },
  { id: "c113", name: "ファルカ", rarity: 5, element: "anemo", image: "113_ファルカ.webp", owned: false },
  { id: "c114", name: "リンネア", rarity: 5, element: "geo", image: "114_リンネア.webp", owned: false },
  { id: "c115", name: "ニコ", rarity: 5, element: "pyro", image: "115_ニコ.webp", owned: false },
  { id: "c116", name: "ローエン", rarity: 5, element: "cryo", image: "116_ローエン.webp", owned: false },
  { id: "c117", name: "プルーネ", rarity: 4, element: "anemo", image: "117_プルーネ.webp", owned: false },
  { id: "c118", name: "サンドローネ", rarity: 5, element: "cryo", image: "118_サンドローネ.webp", owned: false },
  { id: "c119", name: "オデット", rarity: 5, element: "cryo", image: "119_オデット.webp", owned: false },
  { id: "c120", name: "アリョーシャ", rarity: 4, element: "electro", image: "120_アリョーシャ.webp", owned: false },
  { id: "c121", name: "ヴォジャニーツァ", rarity: 5, element: "hydro", image: "121_ヴォジャニーツァ.webp", owned: false },
  { id: "c122", name: "ヴェスナ", rarity: 5, element: "anemo", image: "122_ヴェスナ.webp", owned: false }
];

const DEFAULT_SETTINGS = {
  difficulty: "normal",
  activeElements: [], // 指定元素を未選択（空）にする
  openingCast: [null, null, null, null, null, null], // 開幕キャスト6枠分を空にする
  specialCast: [null, null, null, null], // 特別招待キャスト4枠分を空にする
  supportCast: null // サポートキャストを未設定にする
};

const CONFIG_RULES = {
  elements: {
    pyro: "炎", hydro: "水", anemo: "風", electro: "雷", dendro: "草", cryo: "氷", geo: "岩"
  },
  difficulties: {
    easy: { name: "イージー", req: "8〜10人" },
    normal: { name: "ノーマル", req: "12〜14人" },
    hard: { name: "ハード", req: "16〜20人" },
    master: { name: "マスター", req: "22〜26人" },
    tsukiyomi: { name: "月諭", req: "28〜32人" }
  },
  roles: [
    { id: "attacker", name: "アタッカー" },
    { id: "sub_attacker", name: "サブアタッカー" },
    { id: "supporter", name: "サポーター" },
    { id: "healer", name: "ヒーラー" }
  ]
};

let characters = JSON.parse(localStorage.getItem('gt_chars')) || DEFAULT_CHARACTERS;
let currentSettings = JSON.parse(localStorage.getItem('gt_settings')) || JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
let sets = JSON.parse(localStorage.getItem('gt_sets')) || [
  { id: "set-1", name: "パーティ A", slots: [ { role: "attacker", charId: null }, { role: "sub_attacker", charId: null }, { role: "supporter", charId: null }, { role: "healer", charId: null } ] }
];

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initCharManagement();
  initConfigTab();
  initMainTab();
  renderAll();
});

function saveData() {
  localStorage.setItem('gt_chars', JSON.stringify(characters));
  localStorage.setItem('gt_settings', JSON.stringify(currentSettings));
  localStorage.setItem('gt_sets', JSON.stringify(sets));
  renderAll();
}

function renderAll() {
  renderMainCast();
  renderSets();
  renderConfigUI();
  renderCharManagement();
}

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

// キャラクター画像パス取得（UIは .webp）
function getImgSrc(filename) {
  if (!filename || filename.trim() === '') {
    return './assets/ui/main.webp'; 
  }
  return `./assets/characters/${filename}`;
}

// 元素アイコンパス取得（元素は .png）
function getElemImgSrc(elemKey) {
  return `./assets/elements/${elemKey}.png`;
}

// キャラクター管理
function initCharManagement() {
  const fileInput = document.getElementById('add-char-file-input');
  const fileLabel = document.getElementById('add-char-file-label');
  const imageNameInput = document.getElementById('add-char-image-name');

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const name = e.target.files[0].name;
      fileLabel.innerText = `選択済: ${name}`;
      imageNameInput.value = name;
    }
  });

  document.getElementById('form-add-char').addEventListener('submit', (e) => {
    e.preventDefault();
    const newChar = {
      id: 'char_' + Date.now(),
      name: document.getElementById('add-char-name').value,
      rarity: parseInt(document.getElementById('add-char-rarity').value),
      element: document.getElementById('add-char-element').value,
      image: imageNameInput.value || '',
      owned: true
    };
    characters.push(newChar);
    e.target.reset();
    fileLabel.innerText = "＋ 画像を選択";
    imageNameInput.value = '';
    saveData();
  });

  ['filter-element', 'filter-ownership', 'filter-rarity'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderCharManagement);
  });
}

function renderCharManagement() {
  const container = document.getElementById('char-management-list');
  const elemF = document.getElementById('filter-element').value;
  const ownF = document.getElementById('filter-ownership').value;
  const rarF = document.getElementById('filter-rarity').value;

  const filtered = characters.filter(c => {
    if (elemF !== 'all' && c.element !== elemF) return false;
    if (ownF === 'owned' && !c.owned) return false;
    if (ownF === 'unowned' && c.owned) return false;
    if (rarF !== 'all' && c.rarity.toString() !== rarF) return false;
    return true;
  });

  container.innerHTML = filtered.map(c => `
    <div class="char-card star-${c.rarity}" onclick="openEditModal('${c.id}')">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label">${c.name}</div>
    </div>
  `).join('');
}

// デザインモーダル (編集・削除)
window.openEditModal = function(id) {
  const c = characters.find(item => item.id === id);
  if (!c) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "キャラクター編集";

  body.innerHTML = `
    <form id="form-edit-char" class="char-form" style="width:100%;">
      <div class="form-item">
        <label>名前</label>
        <input type="text" id="edit-char-name" class="input-text" value="${c.name}" required>
      </div>
      <div class="form-item">
        <label>レアリティ</label>
        <select id="edit-char-rarity" class="input-select">
          <option value="5" ${c.rarity === 5 ? 'selected' : ''}>★5</option>
          <option value="4" ${c.rarity === 4 ? 'selected' : ''}>★4</option>
        </select>
      </div>
      <div class="form-item">
        <label>元素</label>
        <select id="edit-char-element" class="input-select">
          ${Object.keys(CONFIG_RULES.elements).map(key => `
            <option value="${key}" ${c.element === key ? 'selected' : ''}>${CONFIG_RULES.elements[key]}</option>
          `).join('')}
        </select>
      </div>
      <div class="form-item">
        <label>画像ファイル</label>
        <label class="custom-file-upload">
          <input type="file" id="edit-char-file-input" accept="image/*">
          <span id="edit-char-file-label">${c.image ? '変更: ' + c.image : '＋ 画像を選択'}</span>
        </label>
        <input type="hidden" id="edit-char-image-name" value="${c.image || ''}">
      </div>
      <div class="form-item">
        <label>所持状態</label>
        <div class="toggle-group">
          <button type="button" id="btn-toggle-owned" class="toggle-btn ${c.owned ? 'active-owned' : ''}">所持</button>
          <button type="button" id="btn-toggle-unowned" class="toggle-btn ${!c.owned ? 'active-unowned' : ''}">未所持</button>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block" style="margin-top:10px;">保存する</button>
      <button type="button" class="btn btn-danger btn-block" onclick="deleteChar('${c.id}')">このキャラクターを削除する</button>
    </form>
  `;

  let currentOwned = c.owned;
  const btnOwned = document.getElementById('btn-toggle-owned');
  const btnUnowned = document.getElementById('btn-toggle-unowned');

  btnOwned.addEventListener('click', () => {
    currentOwned = true;
    btnOwned.className = 'toggle-btn active-owned';
    btnUnowned.className = 'toggle-btn';
  });

  btnUnowned.addEventListener('click', () => {
    currentOwned = false;
    btnOwned.className = 'toggle-btn';
    btnUnowned.className = 'toggle-btn active-unowned';
  });

  document.getElementById('edit-char-file-input').addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      const name = e.target.files[0].name;
      document.getElementById('edit-char-file-label').innerText = `変更: ${name}`;
      document.getElementById('edit-char-image-name').value = name;
    }
  });

  document.getElementById('form-edit-char').addEventListener('submit', (e) => {
    e.preventDefault();
    c.name = document.getElementById('edit-char-name').value;
    c.rarity = parseInt(document.getElementById('edit-char-rarity').value);
    c.element = document.getElementById('edit-char-element').value;
    c.image = document.getElementById('edit-char-image-name').value;
    c.owned = currentOwned;
    overlay.classList.add('hidden');
    saveData();
  });

  overlay.classList.remove('hidden');
};

window.deleteChar = function(id) {
  if (confirm('本当に削除しますか？')) {
    characters = characters.filter(c => c.id !== id);
    document.getElementById('modal-overlay').classList.add('hidden');
    saveData();
  }
};

// 今期の設定画面
function initConfigTab() {
  renderElementSelector();
  document.getElementById('config-difficulty').addEventListener('change', (e) => {
    currentSettings.difficulty = e.target.value;
    saveData();
  });

  // リセットボタン実装
  document.getElementById('btn-reset-config').addEventListener('click', () => {
    if (confirm('今期の設定を初期状態にリセットしますか？')) {
      currentSettings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      saveData();
    }
  });
}

function renderElementSelector() {
  const elemGroup = document.getElementById('element-selector');
  elemGroup.innerHTML = Object.keys(CONFIG_RULES.elements).map(key => `
    <button class="elem-btn ${currentSettings.activeElements.includes(key) ? 'active' : ''}" data-elem="${key}">
      <img src="${getElemImgSrc(key)}" class="elem-btn-icon">${CONFIG_RULES.elements[key]}
    </button>
  `).join('');

  elemGroup.querySelectorAll('.elem-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const elem = btn.dataset.elem;
      if (currentSettings.activeElements.includes(elem)) {
        if (currentSettings.activeElements.length > 1) {
          currentSettings.activeElements = currentSettings.activeElements.filter(e => e !== elem);
        }
      } else if (currentSettings.activeElements.length < 3) {
        currentSettings.activeElements.push(elem);
      }
      saveData();
    });
  });
}

function renderConfigUI() {
  document.getElementById('config-difficulty').value = currentSettings.difficulty;
  renderElementSelector();

  const openContainer = document.getElementById('opening-cast-container');
  let openHTML = '';
  for (let i = 0; i < 6; i++) {
    const charId = currentSettings.openingCast[i];
    const char = characters.find(c => c.id === charId);
    openHTML += `
      <div class="party-slot ${char ? 'filled' : ''}" onclick="openCastSelectModal('opening', ${i})">
        ${char ? `
          <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
          <img src="${getImgSrc(char.image)}" class="avatar">
          <div class="name-label">${char.name}</div>
        ` : `<span class="slot-placeholder">+ 枠 ${i+1}</span>`}
      </div>
    `;
  }
  openContainer.innerHTML = openHTML;

  const specContainer = document.getElementById('special-cast-container');
  let specHTML = '';
  for (let i = 0; i < 4; i++) {
    const charId = currentSettings.specialCast[i];
    const char = characters.find(c => c.id === charId);
    specHTML += `
      <div class="party-slot ${char ? 'filled' : ''}" onclick="openCastSelectModal('special', ${i})">
        ${char ? `
          <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
          <img src="${getImgSrc(char.image)}" class="avatar">
          <div class="name-label">${char.name}</div>
        ` : `<span class="slot-placeholder">+ 招待 ${i+1}</span>`}
      </div>
    `;
  }
  specContainer.innerHTML = specHTML;
}

// メイン画面処理
function initMainTab() {
  document.getElementById('btn-add-set').addEventListener('click', () => {
    sets.push({
      id: 'set-' + Date.now(),
      name: `パーティ ${String.fromCharCode(65 + sets.length)}`,
      slots: [
        { role: "attacker", charId: null },
        { role: "sub_attacker", charId: null },
        { role: "supporter", charId: null },
        { role: "healer", charId: null }
      ]
    });
    saveData();
  });

  document.getElementById('btn-select-support').addEventListener('click', () => {
    openCastSelectModal('support', 0);
  });

  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.add('hidden');
  });
}

function renderMainCast() {
  const container = document.getElementById('cast-groups-container');
  const assignedIds = sets.flatMap(s => s.slots.map(sl => sl.charId)).filter(Boolean);

  const diffObj = CONFIG_RULES.difficulties[currentSettings.difficulty];
  document.getElementById('display-difficulty').innerText = `${diffObj.name} (${diffObj.req})`;
  
  const supportChar = characters.find(c => c.id === currentSettings.supportCast);
  document.getElementById('display-support-name').innerText = supportChar ? supportChar.name : "未設定";

  // 特別招待キャスト枠（null を保持したオブジェクト構造）
  const specialCastChars = currentSettings.specialCast.map(id => characters.find(c => c.id === id) || null);
  const validSpecialChars = specialCastChars.filter(Boolean);
  const ownedSpecialChars = validSpecialChars.filter(c => c.owned);
  
  // 招待キャストが全枠 null（未設定）かどうか
  const isSpecialAllNull = specialCastChars.every(c => c === null);

  // 表示条件: 全て未設定（従来通りの空枠維持）、または設定されているキャラのうち最低1人を所持している場合
  const showSpecialSection = isSpecialAllNull || ownedSpecialChars.length > 0;

  // 【修正】開幕キャスト: 所持・未所持に関係なく設定されたキャラをそのまま取得
  const openingList = currentSettings.openingCast.map(id => characters.find(c => c.id === id)).filter(Boolean);

  // 【修正】待機キャスト: 開幕・特別招待に含まれない指定元素キャラ（所持しているもののみ）
  const standbyList = characters.filter(c => {
    if (!c.owned) return false;
    if (currentSettings.openingCast.includes(c.id)) return false;
    if (currentSettings.specialCast.includes(c.id)) return false;
    return currentSettings.activeElements.includes(c.element);
  });

// 修正後：サポートキャストに識別フラグを付与して追加
  if (supportChar && !standbyList.some(c => c.id === supportChar.id)) {
    standbyList.unshift({ ...supportChar, isSupport: true });
  }

  // キャスト数計算: 所持している特別招待キャラのみをカウント対象にする
  let totalCastCount = openingList.length + ownedSpecialChars.length + standbyList.length;
  document.getElementById('display-cast-count').innerText = `${totalCastCount} 人`;

  let html = '';

  if (showSpecialSection) {
    html += `<div class="cast-group-section"><div class="cast-group-title">特別招待キャスト</div><div class="cast-grid">`;
    html += specialCastChars.map((c, index) => {
      if (!c) {
        return `<div class="party-slot"><span class="slot-placeholder">+ 招待 ${index + 1}</span></div>`;
      }
      return renderCardHTML(c, assignedIds);
    }).join('');
    html += `</div></div>`;
  }

html += `<div class="cast-group-section"><div class="cast-group-title">開幕キャスト</div><div class="cast-grid">`;
  // 第3引数に true を渡して開幕キャストのドラッグと表示を強制許可
  html += openingList.map(c => renderCardHTML(c, assignedIds, true)).join('');
  html += `</div></div>`;

// 修正後：サポートキャスト（c.isSupport）の場合も forceDraggable = true を渡す
  html += `<div class="cast-group-section"><div class="cast-group-title">待機キャスト</div><div class="cast-grid">`;
  html += standbyList.map(c => renderCardHTML(c, assignedIds, c.isSupport || false)).join('');
  html += `</div></div>`;

  container.innerHTML = html;
  setupDragAndDrop();
}

// renderCardHTML 関数の修正
function renderCardHTML(c, assignedIds, forceDraggable = false) {
  const isAssigned = assignedIds.includes(c.id);
  const isOwned = c.owned;
  
  // 開幕キャスト（forceDraggable=true）または所持キャラであればドラッグ可能
  const isDraggable = (forceDraggable || isOwned) && !isAssigned;
  const unownedStyle = (!isOwned && !forceDraggable) ? 'filter: grayscale(1); opacity: 0.5; cursor: not-allowed;' : '';

  return `
    <div class="char-card star-${c.rarity} ${isAssigned ? 'assigned' : ''}" 
         draggable="${isDraggable}" 
         data-id="${c.id}"
         style="${unownedStyle}">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label" title="${c.name}">${c.name}</div>
    </div>
  `;
}

function renderSets() {
  const container = document.getElementById('sets-container');
  container.innerHTML = sets.map((s, setIndex) => `
    <div class="set-card">
      <div class="set-header">
        <input type="text" value="${s.name}" onchange="updateSetName(${setIndex}, this.value)">
        <button class="btn btn-danger btn-sm" onclick="removeSet(${setIndex})">削除</button>
      </div>
      <div class="set-slots">
        ${s.slots.map((slot, slotIndex) => {
          const char = characters.find(c => c.id === slot.charId);
          return `
            <div class="set-slot-item">
              <select onchange="updateSlotRole(${setIndex}, ${slotIndex}, this.value)">
                ${CONFIG_RULES.roles.map(r => `<option value="${r.id}" ${r.id === slot.role ? 'selected' : ''}>${r.name}</option>`).join('')}
              </select>
              <div class="party-slot ${char ? 'filled star-' + char.rarity : ''}" 
                   data-set="${setIndex}" 
                   data-slot="${slotIndex}"
                   onclick="openSlotSelectModal(${setIndex}, ${slotIndex})">
                ${char ? `
                  <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
                  <img src="${getImgSrc(char.image)}" class="avatar">
                  <div class="name-label">${char.name}</div>
                ` : `<span class="slot-placeholder">+ 選択</span>`}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  setupDropTargets();
}

// ドラッグ＆ドロップ実装
function setupDragAndDrop() {
  document.querySelectorAll('.char-card[draggable="true"]').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.dataset.id);
    });
  });
}

function setupDropTargets() {
  document.querySelectorAll('.party-slot').forEach(slot => {
    slot.addEventListener('dragover', (e) => {
      e.preventDefault();
      slot.classList.add('drag-over');
    });

    slot.addEventListener('dragleave', () => {
      slot.classList.remove('drag-over');
    });

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('drag-over');
      const charId = e.dataTransfer.getData('text/plain');
      const setIdx = slot.dataset.set;
      const slotIdx = slot.dataset.slot;
      if (setIdx !== undefined && slotIdx !== undefined && charId) {
        sets[setIdx].slots[slotIdx].charId = charId;
        saveData();
      }
    });
  });
}

window.updateSetName = (index, val) => { sets[index].name = val; saveData(); };
window.removeSet = (index) => { sets.splice(index, 1); saveData(); };
window.updateSlotRole = (sIdx, slIdx, val) => { sets[sIdx].slots[slIdx].role = val; saveData(); };

// モーダル選択処理（選択されたカードを発光表示）
window.openCastSelectModal = function(type, targetIndex) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "キャラクターを選択";
  let candidates = [];
  let selectedId = null;

  if (type === 'opening') {
    candidates = characters.filter(c => currentSettings.activeElements.includes(c.element));
    selectedId = currentSettings.openingCast[targetIndex];
  } else if (type === 'special') {
    candidates = characters.filter(c => !currentSettings.activeElements.includes(c.element));
    selectedId = currentSettings.specialCast[targetIndex];
  } else if (type === 'support') {
    candidates = characters.filter(c => !c.owned && !currentSettings.openingCast.includes(c.id) && currentSettings.activeElements.includes(c.element));
    selectedId = currentSettings.supportCast;
  }

  body.innerHTML = candidates.map(c => `
    <div class="char-card star-${c.rarity} ${c.id === selectedId ? 'active-selected' : ''}" onclick="selectModalChar('${type}', ${targetIndex}, '${c.id}')">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label">${c.name}</div>
    </div>
  `).join('');

  overlay.classList.remove('hidden');
};

window.openSlotSelectModal = function(setIdx, slotIdx) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "枠にセットするキャラクターを選択";

  const assignedIds = sets.flatMap(s => s.slots.map(sl => sl.charId)).filter(Boolean);
  const available = characters.filter(c => c.owned || c.id === currentSettings.supportCast);
  const currentSlotCharId = sets[setIdx].slots[slotIdx].charId;

  body.innerHTML = `
    <div class="party-slot" onclick="selectSlotChar(${setIdx}, ${slotIdx}, null)">
      <span class="slot-placeholder">クリア (空枠)</span>
    </div>
  ` + available.map(c => {
    const isAssigned = assignedIds.includes(c.id) && c.id !== currentSlotCharId;
    const isCurrent = c.id === currentSlotCharId;
    return `
      <div class="char-card star-${c.rarity} ${isAssigned ? 'assigned' : ''} ${isCurrent ? 'active-selected' : ''}" 
           ${!isAssigned ? `onclick="selectSlotChar(${setIdx}, ${slotIdx}, '${c.id}')"` : ''}>
        <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
        <img src="${getImgSrc(c.image)}" class="avatar">
        <div class="name-label">${c.name}</div>
      </div>
    `;
  }).join('');

  overlay.classList.remove('hidden');
};

window.selectModalChar = function(type, targetIndex, charId) {
  if (type === 'opening') currentSettings.openingCast[targetIndex] = charId;
  if (type === 'special') currentSettings.specialCast[targetIndex] = charId;
  if (type === 'support') currentSettings.supportCast = charId;
  document.getElementById('modal-overlay').classList.add('hidden');
  saveData();
};

window.selectSlotChar = function(setIdx, slotIdx, charId) {
  sets[setIdx].slots[slotIdx].charId = charId;
  document.getElementById('modal-overlay').classList.add('hidden');
  saveData();
};