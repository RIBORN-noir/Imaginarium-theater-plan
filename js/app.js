const STORAGE_PREFIX = 'genshin_ver_23';

const DEFAULT_CHARACTERS = [
  { id: "c3", name: "ウェンティ", rarity: 5, element: "anemo", image: "003_ウェンティ.webp", owned: false },
  { id: "c4", name: "アンバー", rarity: 4, element: "pyro", image: "004_アンバー.webp", owned: true },
  { id: "c5", name: "ガイア", rarity: 4, element: "cryo", image: "005_ガイア.webp", owned: true },
  { id: "c6", name: "ジン", rarity: 5, element: "anemo", image: "006_ジン.webp", owned: true },
  { id: "c7", name: "リサ", rarity: 4, element: "electro", image: "007_リサ.webp", owned: true },
  { id: "c8", name: "ディルック", rarity: 5, element: "pyro", image: "008_ディルック.webp", owned: true },
  { id: "c9", name: "バーバラ", rarity: 4, element: "hydro", image: "009_バーバラ.webp", owned: true },
  { id: "c10", name: "香菱", rarity: 4, element: "pyro", image: "010_香菱.webp", owned: true },
  { id: "c11", name: "レザー", rarity: 4, element: "electro", image: "011_レザー.webp", owned: true },
  { id: "c12", name: "凝光", rarity: 4, element: "geo", image: "012_凝光.webp", owned: false },
  { id: "c13", name: "行秋", rarity: 4, element: "hydro", image: "013_行秋.webp", owned: true },
  { id: "c14", name: "七七", rarity: 5, element: "cryo", image: "014_七七.webp", owned: true },
  { id: "c15", name: "刻晴", rarity: 5, element: "electro", image: "015_刻晴.webp", owned: true },
  { id: "c16", name: "北斗", rarity: 4, element: "electro", image: "016_北斗.webp", owned: true },
  { id: "c17", name: "ベネット", rarity: 4, element: "pyro", image: "017_ベネット.webp", owned: true },
  { id: "c18", name: "ノエル", rarity: 4, element: "geo", image: "018_ノエル.webp", owned: true },
  { id: "c19", name: "フィッシュル", rarity: 4, element: "electro", image: "019_フィッシュル.webp", owned: true },
  { id: "c20", name: "スクロース", rarity: 4, element: "anemo", image: "020_スクロース.webp", owned: true },
  { id: "c21", name: "モナ", rarity: 5, element: "hydro", image: "021_モナ.webp", owned: false },
  { id: "c22", name: "重雲", rarity: 4, element: "cryo", image: "022_重雲.webp", owned: true },
  { id: "c23", name: "クレー", rarity: 5, element: "pyro", image: "023_クレー.webp", owned: false },
  { id: "c24", name: "タルタリヤ", rarity: 5, element: "hydro", image: "024_タルタリヤ.webp", owned: false },
  { id: "c25", name: "ディオナ", rarity: 4, element: "cryo", image: "025_ディオナ.webp", owned: true },
  { id: "c26", name: "鍾離", rarity: 5, element: "geo", image: "026_鍾離.webp", owned: false },
  { id: "c27", name: "辛炎", rarity: 4, element: "pyro", image: "027_辛炎.webp", owned: false },
  { id: "c28", name: "アルベド", rarity: 5, element: "geo", image: "028_アルベド.webp", owned: false },
  { id: "c29", name: "甘雨", rarity: 5, element: "cryo", image: "029_甘雨.webp", owned: false },
  { id: "c30", name: "魈", rarity: 5, element: "anemo", image: "030_魈.webp", owned: false },
  { id: "c31", name: "胡桃", rarity: 5, element: "pyro", image: "031_胡桃.webp", owned: false },
  { id: "c32", name: "ロサリア", rarity: 4, element: "cryo", image: "032_ロサリア.webp", owned: true },
  { id: "c33", name: "煙緋", rarity: 4, element: "pyro", image: "033_煙緋.webp", owned: true },
  { id: "c34", name: "エウルア", rarity: 5, element: "cryo", image: "034_エウルア.webp", owned: false },
  { id: "c35", name: "楓原万葉", rarity: 5, element: "anemo", image: "035_楓原万葉.webp", owned: false },
  { id: "c36", name: "神里綾華", rarity: 5, element: "cryo", image: "036_神里綾華.webp", owned: false },
  { id: "c37", name: "宵宮", rarity: 5, element: "pyro", image: "037_宵宮.webp", owned: false },
  { id: "c38", name: "早柚", rarity: 4, element: "anemo", image: "038_早柚.webp", owned: false },
  { id: "c39", name: "雷電将軍", rarity: 5, element: "electro", image: "039_雷電将軍.webp", owned: false },
  { id: "c40", name: "九条裟羅", rarity: 4, element: "electro", image: "040_九条裟羅.webp", owned: true },
  { id: "c41", name: "アーロイ", rarity: 5, element: "cryo", image: "041_アーロイ.webp", owned: false },
  { id: "c42", name: "珊瑚宮心海", rarity: 5, element: "hydro", image: "042_珊瑚宮心海.webp", owned: false },
  { id: "c43", name: "トーマ", rarity: 4, element: "pyro", image: "043_トーマ.webp", owned: true },
  { id: "c44", name: "荒瀧一斗", rarity: 5, element: "geo", image: "044_荒瀧一斗.webp", owned: false },
  { id: "c45", name: "ゴロー", rarity: 4, element: "geo", image: "045_ゴロー.webp", owned: true },
  { id: "c46", name: "申鶴", rarity: 5, element: "cryo", image: "046_申鶴.webp", owned: false },
  { id: "c47", name: "雲菫", rarity: 4, element: "geo", image: "047_雲菫.webp", owned: true },
  { id: "c48", name: "八重神子", rarity: 5, element: "electro", image: "048_八重神子.webp", owned: false },
  { id: "c49", name: "神里綾人", rarity: 5, element: "hydro", image: "049_神里綾人.webp", owned: false },
  { id: "c50", name: "夜蘭", rarity: 5, element: "hydro", image: "050_夜蘭.webp", owned: false },
  { id: "c51", name: "久岐忍", rarity: 4, element: "electro", image: "051_久岐忍.webp", owned: false },
  { id: "c52", name: "鹿野院平蔵", rarity: 4, element: "anemo", image: "052_鹿野院平蔵.webp", owned: false },
  { id: "c53", name: "ティナリ", rarity: 5, element: "dendro", image: "053_ティナリ.webp", owned: true },
  { id: "c54", name: "コレイ", rarity: 4, element: "dendro", image: "054_コレイ.webp", owned: true },
  { id: "c55", name: "ドリー", rarity: 4, element: "electro", image: "055_ドリー.webp", owned: true },
  { id: "c56", name: "セノ", rarity: 5, element: "electro", image: "056_セノ.webp", owned: false },
  { id: "c57", name: "キャンディス", rarity: 4, element: "hydro", image: "057_キャンディス.webp", owned: true },
  { id: "c58", name: "ニィロウ", rarity: 5, element: "hydro", image: "058_ニィロウ.webp", owned: false },
  { id: "c59", name: "ナヒーダ", rarity: 5, element: "dendro", image: "059_ナヒーダ.webp", owned: false },
  { id: "c60", name: "レイラ", rarity: 4, element: "cryo", image: "060_レイラ.webp", owned: true },
  { id: "c61", name: "放浪者", rarity: 5, element: "anemo", image: "061_放浪者.webp", owned: false },
  { id: "c62", name: "ファルザン", rarity: 4, element: "anemo", image: "062_ファルザン.webp", owned: true },
  { id: "c63", name: "アルハイゼン", rarity: 5, element: "dendro", image: "063_アルハイゼン.webp", owned: false },
  { id: "c64", name: "ヨォーヨ", rarity: 4, element: "dendro", image: "064_ヨォーヨ.webp", owned: true },
  { id: "c65", name: "ディシア", rarity: 5, element: "pyro", image: "065_ディシア.webp", owned: true },
  { id: "c66", name: "ミカ", rarity: 4, element: "cryo", image: "066_ミカ.webp", owned: true },
  { id: "c67", name: "白朮", rarity: 5, element: "dendro", image: "067_白朮.webp", owned: false },
  { id: "c68", name: "カーヴェ", rarity: 4, element: "dendro", image: "068_カーヴェ.webp", owned: true },
  { id: "c69", name: "綺良々", rarity: 4, element: "dendro", image: "069_綺良々.webp", owned: true },
  { id: "c70", name: "リネ", rarity: 5, element: "pyro", image: "070_リネ.webp", owned: false },
  { id: "c71", name: "リネット", rarity: 4, element: "anemo", image: "071_リネット.webp", owned: true },
  { id: "c72", name: "フレミネ", rarity: 4, element: "cryo", image: "072_フレミネ.webp", owned: true },
  { id: "c73", name: "ヌヴィレット", rarity: 5, element: "hydro", image: "073_ヌヴィレット.webp", owned: true },
  { id: "c74", name: "リオセスリ", rarity: 5, element: "cryo", image: "074_リオセスリ.webp", owned: false },
  { id: "c75", name: "フリーナ", rarity: 5, element: "hydro", image: "075_フリーナ.webp", owned: true },
  { id: "c76", name: "シャルロット", rarity: 4, element: "cryo", image: "076_シャルロット.webp", owned: true },
  { id: "c77", name: "ナヴィア", rarity: 5, element: "geo", image: "077_ナヴィア.webp", owned: false },
  { id: "c78", name: "シュヴルーズ", rarity: 4, element: "pyro", image: "078_シュヴルーズ.webp", owned: true },
  { id: "c79", name: "閑雲", rarity: 5, element: "anemo", image: "079_閑雲.webp", owned: false },
  { id: "c80", name: "嘉明", rarity: 4, element: "pyro", image: "080_嘉明.webp", owned: true },
  { id: "c81", name: "千織", rarity: 5, element: "geo", image: "081_千織.webp", owned: false },
  { id: "c82", name: "アルレッキーノ", rarity: 5, element: "pyro", image: "082_アルレッキーノ.webp", owned: false },
  { id: "c83", name: "クロリンデ", rarity: 5, element: "electro", image: "083_クロリンデ.webp", owned: false },
  { id: "c84", name: "シグウィン", rarity: 5, element: "hydro", image: "084_シグウィン.webp", owned: false },
  { id: "c85", name: "セトス", rarity: 4, element: "electro", image: "085_セトス.webp", owned: true },
  { id: "c86", name: "エミリエ", rarity: 5, element: "dendro", image: "086_エミリエ.webp", owned: false },
  { id: "c87", name: "ムアラニ", rarity: 5, element: "hydro", image: "087_ムアラニ.webp", owned: true },
  { id: "c88", name: "カチーナ", rarity: 4, element: "geo", image: "088_カチーナ.webp", owned: true },
  { id: "c89", name: "キィニチ", rarity: 5, element: "dendro", image: "089_キィニチ.webp", owned: true },
  { id: "c90", name: "シロネン", rarity: 5, element: "geo", image: "090_シロネン.webp", owned: true },
  { id: "c91", name: "チャスカ", rarity: 5, element: "anemo", image: "091_チャスカ.webp", owned: false },
  { id: "c92", name: "オロルン", rarity: 4, element: "electro", image: "092_オロルン.webp", owned: false },
  { id: "c93", name: "マーヴィカ", rarity: 5, element: "pyro", image: "093_マーヴィカ.webp", owned: true },
  { id: "c94", name: "シトラリ", rarity: 5, element: "cryo", image: "094_シトラリ.webp", owned: true },
  { id: "c95", name: "藍硯", rarity: 4, element: "anemo", image: "095_藍硯.webp", owned: false },
  { id: "c96", name: "夢見月瑞希", rarity: 5, element: "anemo", image: "096_夢見月瑞希.webp", owned: true },
  { id: "c97", name: "ヴァレサ", rarity: 5, element: "electro", image: "097_ヴァレサ.webp", owned: false },
  { id: "c98", name: "イアンサ", rarity: 4, element: "electro", image: "098_イアンサ.webp", owned: true },
  { id: "c99", name: "エスコフィエ", rarity: 5, element: "cryo", image: "099_エスコフィエ.webp", owned: true },
  { id: "c100", name: "イファ", rarity: 4, element: "anemo", image: "100_イファ.webp", owned: true },
  { id: "c101", name: "スカーク", rarity: 5, element: "cryo", image: "101_スカーク.webp", owned: false },
  { id: "c102", name: "ダリア", rarity: 4, element: "hydro", image: "102_ダリア.webp", owned: true },
  { id: "c103", name: "イネファ", rarity: 5, element: "electro", image: "103_イネファ.webp", owned: true },
  { id: "c104", name: "ラウマ", rarity: 5, element: "dendro", image: "104_ラウマ.webp", owned: false },
  { id: "c105", name: "アイノ", rarity: 4, element: "hydro", image: "105_アイノ.webp", owned: true },
  { id: "c106", name: "フリンズ", rarity: 5, element: "electro", image: "106_フリンズ.webp", owned: true },
  { id: "c107", name: "ネフェル", rarity: 5, element: "dendro", image: "107_ネフェル.webp", owned: false },
  { id: "c108", name: "ドゥリン", rarity: 5, element: "pyro", image: "108_ドゥリン.webp", owned: false },
  { id: "c109", name: "ヤフォダ", rarity: 4, element: "anemo", image: "109_ヤフォダ.webp", owned: true },
  { id: "c110", name: "コロンビーナ", rarity: 5, element: "hydro", image: "110_コロンビーナ.webp", owned: true },
  { id: "c111", name: "兹白", rarity: 5, element: "geo", image: "111_兹白.webp", owned: false },
  { id: "c112", name: "イルーガ", rarity: 4, element: "geo", image: "112_イルーガ.webp", owned: true },
  { id: "c113", name: "ファルカ", rarity: 5, element: "anemo", image: "113_ファルカ.webp", owned: false },
  { id: "c114", name: "リンネア", rarity: 5, element: "geo", image: "114_リンネア.webp", owned: true },
  { id: "c115", name: "ニコ", rarity: 5, element: "pyro", image: "115_ニコ.webp", owned: true },
  { id: "c116", name: "ローエン", rarity: 5, element: "cryo", image: "116_ローエン.webp", owned: false },
  { id: "c117", name: "プルーネ", rarity: 4, element: "anemo", image: "117_プルーネ.webp", owned: true },
  { id: "c118", name: "サンドローネ", rarity: 5, element: "cryo", image: "118_サンドローネ.webp", owned: true },
  { id: "c119", name: "オデット", rarity: 5, element: "cryo", image: "119_オデット.webp", owned: true },
  { id: "c120", name: "アリョーシャ", rarity: 4, element: "electro", image: "120_アリョーシャ.webp", owned: true },
  { id: "c121", name: "ヴォジャニーツァ", rarity: 5, element: "hydro", image: "121_ヴォジャニーツァ.webp", owned: false },
  { id: "c122", name: "ヴェスナ", rarity: 5, element: "anemo", image: "122_ヴェスナ.webp", owned: false },
];

const DEFAULT_SETTINGS = {
  difficulty: "normal",
  activeElements: [],
  openingCast: [null, null, null, null, null, null],
  specialCast: [null, null, null, null],
  supportCast: null,
  rejectedCast: []
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

let characters = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}chars`)) || DEFAULT_CHARACTERS;
let currentSettings = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}settings`)) || JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
if (!currentSettings.rejectedCast) { currentSettings.rejectedCast = []; }

function normalizeCurrentCastSelections() {
  const seen = new Set();
  const dedupe = (arr = []) => {
    const result = [];
    arr.forEach(id => {
      if (!id || seen.has(id)) return;
      seen.add(id);
      result.push(id);
    });
    return result;
  };

  currentSettings.openingCast = dedupe(currentSettings.openingCast);
  currentSettings.specialCast = dedupe(currentSettings.specialCast);

  if (currentSettings.supportCast && seen.has(currentSettings.supportCast)) {
    currentSettings.supportCast = null;
  } else if (currentSettings.supportCast) {
    seen.add(currentSettings.supportCast);
  }
}

normalizeCurrentCastSelections();

let sets = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}sets`)) || [
  { id: "set-1", name: "パーティ A", slots: [ { role: "attacker", charId: null }, { role: "sub_attacker", charId: null }, { role: "supporter", charId: null }, { role: "healer", charId: null } ] }
];

let stageHand = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}stage_hand`)) || [];
let stageActs = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}stage_acts`)) || [];

// 「現在の幕」ポインタ（時間移動）：この幕より前は「クリア済み」として扱う
// 例: currentActPointer=3 の場合、第1幕・第2幕はクリア済み、第3幕は未クリア
let currentActPointer = parseInt(localStorage.getItem(`${STORAGE_PREFIX}act_pointer`), 10) || 1;

// ===============================================================
// ドラッグ&ドロップ 共通状態管理
// ---------------------------------------------------------------
// このツールには複数系統のD&Dがあるため、「今どの種類をドラッグ中か」を
// 1か所で保持し、ドラッグ終了時に必ず解除する。
// ここが解除されないまま残ると「ドラッグ中」の状態が居座り、
// 以降のD&D操作がおかしくなる原因になる。
// ===============================================================

// 現在ドラッグ中の種類
// 'char' | 'slot-char' | 'set-card' | 'slot-sort' | 'stage-hand-char' | 'act-slot-char'
let currentDragKind = null;

// 公演プラン：セット内4枠の並び替え用
let draggedSlot = null;

// 公演プラン：セットカードの並び替え用
let draggedSetIndex = null;

// ドラッグ開始時に種類を登録する（dataTransferへの 'type' 設定もここで行う）
function beginDrag(e, kind) {
  currentDragKind = kind;
  e.dataTransfer.setData('type', kind);
}

// dragover時に「このドロップ先が受け付ける種類か」を判定する
function isDragKind(...kinds) {
  return currentDragKind !== null && kinds.includes(currentDragKind);
}

// D&D状態を完全に解除する（内部状態＋見た目のクラスを全部戻す）
function resetDragState() {
  currentDragKind = null;
  draggedSlot = null;
  draggedSetIndex = null;
  document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  document.querySelectorAll('.drag-over-set').forEach(el => el.classList.remove('drag-over-set'));
  document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
}

// 保険：どこでドラッグが終わっても（途中キャンセル・画面外でのドロップを含む）必ず解除する。
// dragend はドラッグ元で必ず発火するため、正常にドロップできなかった場合もここで回収できる。
document.addEventListener('dragend', resetDragState);
document.addEventListener('drop', resetDragState);

function clampActPointer() {
  const maxPointer = stageActs.length + 1; // 幕数+1 = 全幕クリア状態
  if (currentActPointer < 1) currentActPointer = 1;
  if (currentActPointer > maxPointer) currentActPointer = maxPointer;
}

// 難易度ごとの基本幕数（チュートリアル記載の値）
const DIFFICULTY_ACT_COUNTS = {
  easy: 3,
  normal: 6,
  hard: 8,
  master: 10,
  tsukiyomi: 10
};

// 難易度に応じた幕の名称リストを生成（月諭のみ+2幕＝アルカナ1・アルカナ2）
function getActNamesForDifficulty(difficulty) {
  const baseCount = DIFFICULTY_ACT_COUNTS[difficulty] || DIFFICULTY_ACT_COUNTS.normal;
  const names = [];
  for (let i = 1; i <= baseCount; i++) {
    names.push(`第${i}幕`);
  }
  if (difficulty === 'tsukiyomi') {
    names.push('アルカナ1');
    names.push('アルカナ2');
  }
  return names;
}

// 現在の難易度に合わせて幕の数・名称を同期（既存の配置データは可能な限り保持）
function syncStageActsToDifficulty() {
  const names = getActNamesForDifficulty(currentSettings.difficulty);
  stageActs = names.map((name, idx) => {
    const existing = stageActs[idx];
    return {
      id: existing ? existing.id : ('act-' + Date.now() + '-' + idx),
      name: name,
      isOpen: existing ? existing.isOpen : (idx === 0),
      slots: existing ? existing.slots : [null, null, null, null]
    };
  });
}

syncStageActsToDifficulty();
clampActPointer();

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initCharManagement();
  initConfigTab();
  initMainTab();
  initStageTab();
  renderAll();
});

function saveData() {
  localStorage.setItem(`${STORAGE_PREFIX}chars`, JSON.stringify(characters));
  localStorage.setItem(`${STORAGE_PREFIX}settings`, JSON.stringify(currentSettings));
  localStorage.setItem(`${STORAGE_PREFIX}sets`, JSON.stringify(sets));
  localStorage.setItem(`${STORAGE_PREFIX}stage_hand`, JSON.stringify(stageHand));
  localStorage.setItem(`${STORAGE_PREFIX}stage_acts`, JSON.stringify(stageActs));
  localStorage.setItem(`${STORAGE_PREFIX}act_pointer`, String(currentActPointer));
  renderAll();
}

function renderAll() {
  renderMainCast();
  renderSets();
  renderStageTab();
  renderConfigUI();
  renderCharManagement();
}

function initTabs() {
  document.querySelectorAll('.tab-btn, .header-title-group').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn, .tab-content, .header-title-group').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });

    btn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        btn.click();
      }
    });
  });
}

function getImgSrc(filename) {
  if (!filename || filename.trim() === '') return './assets/ui/placeholder.png';
  return `./assets/characters/${filename}`;
}

function getElemImgSrc(elemKey) {
  return `./assets/elements/${elemKey}.png`;
}

// 本日のキャスト（IDリスト）を取得するヘルパー関数
function getTodayCastIds() {
  const rejectedSet = new Set(currentSettings.rejectedCast || []);
  const todayIds = [];

  // 開幕キャスト
  currentSettings.openingCast.forEach(id => {
    if (id && !rejectedSet.has(id)) todayIds.push(id);
  });

  // 特別招待キャスト（所持のみ）
  currentSettings.specialCast.forEach(id => {
    if (id && !rejectedSet.has(id)) {
      const c = characters.find(item => item.id === id);
      if (c && c.owned) todayIds.push(id);
    }
  });

  // 待機キャスト（所持、要素合致、開幕/特別に含まれない、不採用でない）
  const standbyList = characters.filter(c => {
    if (!c.owned) return false;
    if (currentSettings.openingCast.includes(c.id)) return false;
    if (currentSettings.specialCast.includes(c.id)) return false;
    if (rejectedSet.has(c.id)) return false;
    return currentSettings.activeElements.includes(c.element);
  });
  standbyList.forEach(c => todayIds.push(c.id));

  // サポートキャスト
  if (currentSettings.supportCast && !rejectedSet.has(currentSettings.supportCast)) {
    if (!todayIds.includes(currentSettings.supportCast)) {
      todayIds.push(currentSettings.supportCast);
    }
  }

  return todayIds;
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
  const assignedIds = sets.flatMap(set => set.slots.map(slot => slot.charId)).filter(Boolean);

  const filtered = characters.filter(c => {
    if (elemF !== 'all' && c.element !== elemF) return false;
    if (ownF === 'owned' && !c.owned) return false;
    if (ownF === 'unowned' && c.owned) return false;
    if (rarF !== 'all' && c.rarity.toString() !== rarF) return false;
    return true;
  });

  container.innerHTML = filtered.map(c => `
    <div class="char-card star-${c.rarity} ${assignedIds.includes(c.id) ? 'assigned' : ''}" onclick="openEditModal('${c.id}')">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label">${c.name}</div>
    </div>
  `).join('');
}

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

// 今期の設定
function initConfigTab() {
  renderElementSelector();
  document.getElementById('config-difficulty').addEventListener('change', (e) => {
    currentSettings.difficulty = e.target.value;
    syncStageActsToDifficulty();
    clampActPointer();
    saveData();
  });

  document.getElementById('btn-reset-config').addEventListener('click', () => {
    if (confirm('今期の設定を初期状態にリセットしますか？')) {
      currentSettings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      syncStageActsToDifficulty();
      currentActPointer = 1;
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

// キャスト管理画面
// 「不採用を選択」モード用の状態
let rejectMode = false;
let selectedForReject = new Set();
// 不採用エリアの「戻すキャストを選択」モード用の状態
let restoreMode = false;
let selectedForRestore = new Set();
// 折りたたみ状態（特別招待／開幕／待機／不採用）
let collapsedGroups = new Set();

window.toggleCollapseGroup = function(key) {
  if (collapsedGroups.has(key)) {
    collapsedGroups.delete(key);
  } else {
    collapsedGroups.add(key);
  }
  renderMainCast();
};

function updateRejectModeUI() {
  const btnToggle = document.getElementById('btn-toggle-reject');
  const btnExec = document.getElementById('btn-exec-reject');
  if (!btnToggle || !btnExec) return;
  btnToggle.classList.toggle('active-mode', rejectMode);
  btnToggle.innerText = rejectMode ? '選択をやめる' : '不採用を選択';
  btnExec.style.display = rejectMode ? 'inline-block' : 'none';
}

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

  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal-overlay').classList.add('hidden');
  });

  const dropReturnZone = document.getElementById('cast-drop-return-zone');
  if (dropReturnZone) {
    dropReturnZone.addEventListener('dragover', (e) => {
      // 公演プラン内キャラの取り消しのみ受け付ける
      if (!isDragKind('slot-char')) return;
      e.preventDefault();
    });
    dropReturnZone.addEventListener('drop', (e) => {
      const type = e.dataTransfer.getData('type');
      if (type === 'slot-char') {
        e.preventDefault();
        const setIdx = e.dataTransfer.getData('setIdx');
        const slotIdx = e.dataTransfer.getData('slotIdx');
        if (setIdx !== "" && slotIdx !== "") {
          sets[setIdx].slots[slotIdx].charId = null;
          saveData();
        }
      }
    });
  }

  // 「不採用を選択」ボタン：押している間だけ待機キャストをクリックで選択できるモードにする
  const btnToggleReject = document.getElementById('btn-toggle-reject');
  const btnExecReject = document.getElementById('btn-exec-reject');
  if (btnToggleReject && btnExecReject) {
    btnToggleReject.addEventListener('click', () => {
      rejectMode = !rejectMode;
      if (!rejectMode) {
        selectedForReject.clear();
        document.querySelectorAll('#cast-groups-container .char-card.active-selected').forEach(c => c.classList.remove('active-selected'));
      }
      updateRejectModeUI();
    });

    btnExecReject.addEventListener('click', () => {
      selectedForReject.forEach(id => {
        if (!currentSettings.rejectedCast.includes(id)) {
          currentSettings.rejectedCast.push(id);
        }
      });
      selectedForReject.clear();
      rejectMode = false;
      updateRejectModeUI();
      saveData();
    });
  }

  // 「本日のキャスト」パネル全体にクリックを委任（待機キャストの選択／不採用エリアの選択の両方をここで拾う）
  const castGroupsContainer = document.getElementById('cast-groups-container');
  if (castGroupsContainer) {
    castGroupsContainer.addEventListener('click', (e) => {
      const card = e.target.closest('.char-card');
      if (!card || !card.dataset.id) return;
      const groupSection = card.closest('.cast-group-section');
      const groupType = groupSection ? groupSection.dataset.groupType : null;
      const charId = card.dataset.id;

      if (rejectMode && groupType === 'standby') {
        // 割り当て済み・サポートキャストは不採用選択の対象外
        if (card.classList.contains('assigned') || card.dataset.isSupport === 'true') return;
        toggleCardSelection(selectedForReject, charId, card);
      } else if (restoreMode && groupType === 'rejected') {
        toggleCardSelection(selectedForRestore, charId, card);
      }
    });
  }
}

function toggleCardSelection(set, id, card) {
  if (set.has(id)) {
    set.delete(id);
    card.classList.remove('active-selected');
  } else {
    set.add(id);
    card.classList.add('active-selected');
  }
}

// 不採用エリアの「戻すキャストを選択」モード（動的に再生成されるボタンのためグローバル関数として定義）
window.toggleRestoreMode = function() {
  restoreMode = !restoreMode;
  if (!restoreMode) {
    selectedForRestore.clear();
  }
  renderMainCast();
};

window.execRestoreSelected = function() {
  selectedForRestore.forEach(id => {
    currentSettings.rejectedCast = currentSettings.rejectedCast.filter(rid => rid !== id);
  });
  selectedForRestore.clear();
  restoreMode = false;
  saveData();
};

function renderMainCast() {
  const container = document.getElementById('cast-groups-container');
  const assignedIds = sets.flatMap(s => s.slots.map(sl => sl.charId)).filter(Boolean);

  const diffObj = CONFIG_RULES.difficulties[currentSettings.difficulty];
  document.getElementById('display-difficulty').innerText = `${diffObj.name} (${diffObj.req})`;
  
  const supportChar = characters.find(c => c.id === currentSettings.supportCast);

  const specialCastChars = currentSettings.specialCast.map(id => characters.find(c => c.id === id) || null);
  const validSpecialChars = specialCastChars.filter(Boolean);
  const ownedSpecialChars = validSpecialChars.filter(c => c.owned);
  const isSpecialAllNull = specialCastChars.every(c => c === null);
  const showSpecialSection = isSpecialAllNull || ownedSpecialChars.length > 0;

  const openingList = currentSettings.openingCast.map(id => characters.find(c => c.id === id)).filter(Boolean);

  // サポートキャストは別枠で表示するため、通常の待機キャスト一覧には含めない
  const standbyList = characters.filter(c => {
    if (!c.owned) return false;
    if (currentSettings.openingCast.includes(c.id)) return false;
    if (currentSettings.specialCast.includes(c.id)) return false;
    if (c.id === currentSettings.supportCast) return false;
    return currentSettings.activeElements.includes(c.element);
  });

  const rejectedSet = new Set(currentSettings.rejectedCast || []);

  const specialListFiltered = specialCastChars.map(c => (c && rejectedSet.has(c.id)) ? null : c);
  const standbyListFiltered = standbyList.filter(c => !rejectedSet.has(c.id));

  const rejectedList = Array.from(rejectedSet)
    .filter(id => !currentSettings.openingCast.includes(id))
    .map(id => characters.find(c => c.id === id))
    .filter(Boolean);

  const todayCastIds = getTodayCastIds();
  document.getElementById('display-cast-count').innerText = `${todayCastIds.length}人`;

  let html = '';

  if (showSpecialSection) {
    html += `<div class="cast-group-section" data-group-type="special"><div class="cast-group-title ${collapsedGroups.has('special') ? 'collapsed' : ''}" onclick="toggleCollapseGroup('special')"><span>特別招待キャスト</span><span class="collapse-arrow">▼</span></div><div class="cast-grid main-cast-drop-zone ${collapsedGroups.has('special') ? 'collapsed' : ''}">`;
    html += specialListFiltered.map((c, index) => {
      if (!c) return `<div class="party-slot"><span class="slot-placeholder">+ 招待 ${index + 1}</span></div>`;
      return renderCardHTML(c, assignedIds, false, false);
    }).join('');
    html += `</div></div>`;
  }

  html += `<div class="cast-group-section" data-group-type="opening"><div class="cast-group-title ${collapsedGroups.has('opening') ? 'collapsed' : ''}" onclick="toggleCollapseGroup('opening')"><span>開幕キャスト</span><span class="collapse-arrow">▼</span></div><div class="cast-grid main-cast-drop-zone ${collapsedGroups.has('opening') ? 'collapsed' : ''}">`;
  html += openingList.map(c => renderCardHTML(c, assignedIds, true, true)).join('');
  html += `</div></div>`;

  // 待機キャスト：冒頭にサポートキャスト枠（未選択なら＋選択枠、選択済みならクリックで変更できる通常カード）
  html += `<div class="cast-group-section" data-group-type="standby"><div class="cast-group-title ${collapsedGroups.has('standby') ? 'collapsed' : ''}" onclick="toggleCollapseGroup('standby')"><span>待機キャスト</span><span class="collapse-arrow">▼</span></div><div class="cast-grid main-cast-drop-zone ${collapsedGroups.has('standby') ? 'collapsed' : ''}">`;
  if (supportChar) {
    html += renderCardHTML(supportChar, assignedIds, true, false, false, `onclick="openCastSelectModal('support', 0)"`, true, false);
  } else {
    html += `<div class="char-card support-slot" onclick="openCastSelectModal('support', 0)">
      <span class="plus-icon">＋</span>
      <span class="support-label">サポート<br>キャスト選択</span>
    </div>`;
  }
  html += standbyListFiltered.map(c => renderCardHTML(c, assignedIds, false, false, false, '', false, selectedForReject.has(c.id))).join('');
  html += `</div></div>`;

  html += `<div class="cast-group-section" data-group-type="rejected">
    <div class="cast-group-title">
      <span class="collapse-toggle" onclick="toggleCollapseGroup('rejected')"><span>不採用</span><span class="collapse-arrow">${collapsedGroups.has('rejected') ? '▶' : '▼'}</span></span>
      <div class="header-actions">
        <button class="btn btn-secondary btn-sm ${restoreMode ? 'active-mode' : ''}" onclick="toggleRestoreMode()">${restoreMode ? '選択をやめる' : '戻すキャストを選択'}</button>
        <button class="btn btn-primary btn-sm" style="display:${restoreMode ? 'inline-block' : 'none'};" onclick="execRestoreSelected()">選択分を戻す</button>
      </div>
    </div>
    <div class="cast-grid rejected-drop-zone ${collapsedGroups.has('rejected') ? 'collapsed' : ''}" id="rejected-cast-zone">`;
  html += rejectedList.map(c => renderCardHTML(c, assignedIds, false, false, true, '', false, selectedForRestore.has(c.id))).join('');
  html += `</div></div>`;

  container.innerHTML = html;
  setupDragAndDrop();
  updateRejectModeUI();
}

function renderCardHTML(c, assignedIds, forceDraggable = false, isOpening = false, isRejected = false, extraOnClick = '', isSupport = false, forceSelected = false) {
  const isAssigned = assignedIds.includes(c.id);
  const isOwned = c.owned;
  
  const isDraggable = (forceDraggable || isOwned || isRejected) && !isAssigned;
  const unownedStyle = (!isOwned && !forceDraggable && !isRejected) ? 'filter: grayscale(1); opacity: 0.5; cursor: default;' : '';
  const rejectedClass = isRejected ? 'rejected-card' : '';
  const selectedClass = forceSelected ? 'active-selected' : '';

  return `
    <div class="char-card star-${c.rarity} ${isAssigned ? 'assigned' : ''} ${rejectedClass} ${selectedClass}" 
         draggable="${isDraggable}" 
         data-id="${c.id}"
         data-is-opening="${isOpening}"
         data-is-rejected="${isRejected}"
         data-is-support="${isSupport}"
         style="${unownedStyle}"
         ${extraOnClick}>
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label" title="${c.name}">${c.name}</div>
    </div>
  `;
}

function renderSets() {
  const container = document.getElementById('sets-container');
  container.innerHTML = sets.map((s, setIndex) => `
    <div class="set-card" draggable="true" data-set-index="${setIndex}">
      <div class="set-header">
        <input type="text" value="${s.name}" onchange="updateSetName(${setIndex}, this.value)">
        <button class="btn btn-danger btn-sm" onclick="removeSet(${setIndex})">削除</button>
      </div>
      <div class="set-slots">
        ${s.slots.map((slot, slotIndex) => {
          const char = characters.find(c => c.id === slot.charId);
          return `
            <div class="set-slot-item" draggable="true" data-slot-sort-set="${setIndex}" data-slot-sort-idx="${slotIndex}">
              <div class="party-slot ${char ? 'filled star-' + char.rarity : ''}" 
                   draggable="${!!char}"
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
  setupSetCardDragAndDrop();
  setupSlotSortDragAndDrop(); // 2.2 公演プラン内（4人）の並び替え機能
}

// 2.2 公演プラン内4枠の並び替え（同一セット内のみ）
function setupSlotSortDragAndDrop() {
  // draggedSlot はグローバル（共通状態管理）側で保持する

  document.querySelectorAll('.set-slot-item[draggable="true"]').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      // select操作や、内側のキャラ枠（party-slot）から始まったドラッグは
      // setupDropTargets 側の処理に任せ、ここでは何もしない（イベント競合防止）
      const tag = e.target.tagName ? e.target.tagName.toLowerCase() : '';
      if (tag === 'select' || (e.target.closest && e.target.closest('.party-slot'))) {
        return;
      }
      draggedSlot = {
        setIdx: parseInt(item.dataset.slotSortSet),
        slotIdx: parseInt(item.dataset.slotSortIdx)
      };
      beginDrag(e, 'slot-sort');
    });

    // ドラッグが終わったら（成否に関わらず）状態を解除する
    item.addEventListener('dragend', () => {
      resetDragState();
    });

    item.addEventListener('dragover', (e) => {
      // 枠の並び替え以外のドラッグは、ここでは受け付けない
      if (!isDragKind('slot-sort') || !draggedSlot) return;
      const targetSetIdx = parseInt(item.dataset.slotSortSet);
      if (draggedSlot.setIdx === targetSetIdx) {
        e.preventDefault();
      }
    });

    item.addEventListener('drop', (e) => {
      if (!draggedSlot) return;
      const type = e.dataTransfer.getData('type');
      if (type !== 'slot-sort') return;

      const targetSetIdx = parseInt(item.dataset.slotSortSet);
      const targetSlotIdx = parseInt(item.dataset.slotSortIdx);

      // 同一セット内のみ並び替えを許可（セットをまたいだ移動はしない）
      if (draggedSlot.setIdx === targetSetIdx && draggedSlot.slotIdx !== targetSlotIdx) {
        e.preventDefault();
        const slotsArr = sets[targetSetIdx].slots;
        const movedItem = slotsArr.splice(draggedSlot.slotIdx, 1)[0];
        slotsArr.splice(targetSlotIdx, 0, movedItem);
        resetDragState();
        saveData();
      } else {
        resetDragState();
      }
    });
  });
}

function setupDragAndDrop() {
  document.querySelectorAll('.char-card[draggable="true"]').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', card.dataset.id);
      beginDrag(e, 'char');
      e.dataTransfer.setData('is-opening', card.dataset.isOpening);
      e.dataTransfer.setData('is-support', card.dataset.isSupport || 'false');
    });

    // ドラッグが終わったら（成否に関わらず）状態を解除する
    card.addEventListener('dragend', () => {
      resetDragState();
    });
  });

  const rejectedZone = document.getElementById('rejected-cast-zone');
  if (rejectedZone) {
    rejectedZone.addEventListener('dragover', (e) => {
      // キャラクターのドラッグのみ受け付ける
      if (!isDragKind('char')) return;
      e.preventDefault();
      rejectedZone.classList.add('drag-over');
    });

    rejectedZone.addEventListener('dragleave', () => rejectedZone.classList.remove('drag-over'));

    rejectedZone.addEventListener('drop', (e) => {
      e.preventDefault();
      rejectedZone.classList.remove('drag-over');
      const charId = e.dataTransfer.getData('text/plain');
      const isOpening = e.dataTransfer.getData('is-opening') === 'true';
      const isSupport = e.dataTransfer.getData('is-support') === 'true';

      if (charId && !isOpening && !isSupport) {
        if (!currentSettings.rejectedCast.includes(charId)) {
          currentSettings.rejectedCast.push(charId);
          saveData();
        }
      }
    });
  }

  document.querySelectorAll('.main-cast-drop-zone').forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      // キャラクターのドラッグのみ受け付ける
      if (!isDragKind('char')) return;
      e.preventDefault();
    });
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      const charId = e.dataTransfer.getData('text/plain');
      if (charId && currentSettings.rejectedCast.includes(charId)) {
        currentSettings.rejectedCast = currentSettings.rejectedCast.filter(id => id !== charId);
        saveData();
      }
    });
  });
}

function setupSetCardDragAndDrop() {
  // draggedSetIndex はグローバル（共通状態管理）側で保持する

  document.querySelectorAll('.set-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      if (['input', 'select', 'button'].includes(e.target.tagName.toLowerCase())) {
        e.preventDefault();
        return;
      }
      draggedSetIndex = parseInt(card.dataset.setIndex);
      beginDrag(e, 'set-card');
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      // 内部状態（draggedSetIndex / currentDragKind）も必ず解除する
      card.classList.remove('dragging');
      document.querySelectorAll('.set-card').forEach(c => c.classList.remove('drag-over-set'));
      resetDragState();
    });

    card.addEventListener('dragover', (e) => {
      // セットカードの並び替え以外のドラッグは、ここでは受け付けない
      if (!isDragKind('set-card') || draggedSetIndex === null) return;
      e.preventDefault();
      card.classList.add('drag-over-set');
    });

    card.addEventListener('dragleave', () => card.classList.remove('drag-over-set'));

    card.addEventListener('drop', (e) => {
      const type = e.dataTransfer.getData('type');
      if (type === 'set-card' && draggedSetIndex !== null) {
        e.preventDefault();
        card.classList.remove('drag-over-set');
        const targetIndex = parseInt(card.dataset.setIndex);
        if (draggedSetIndex !== targetIndex) {
          const movedSet = sets.splice(draggedSetIndex, 1)[0];
          sets.splice(targetIndex, 0, movedSet);
          resetDragState();
          saveData();
          return;
        }
      }
      resetDragState();
    });
  });
}

function setupDropTargets() {
  document.querySelectorAll('#sets-container .party-slot').forEach(slot => {
    slot.addEventListener('dragstart', (e) => {
      const setIdx = slot.dataset.set;
      const slotIdx = slot.dataset.slot;
      const charId = sets[setIdx].slots[slotIdx].charId;
      if (charId) {
        beginDrag(e, 'slot-char');
        e.dataTransfer.setData('setIdx', setIdx);
        e.dataTransfer.setData('slotIdx', slotIdx);
        e.dataTransfer.setData('charId', charId);
        // 親要素（set-slot-item）の並び替えドラッグと競合しないようにする
        e.stopPropagation();
      } else {
        // 空の枠からはドラッグを開始させない
        e.preventDefault();
      }
    });

    // ドラッグが終わったら（成否に関わらず）状態を解除する
    slot.addEventListener('dragend', () => {
      resetDragState();
    });

    slot.addEventListener('dragover', (e) => {
      // キャラクター、または公演プラン内キャラの移動のみ受け付ける
      if (!isDragKind('char', 'slot-char')) return;
      e.preventDefault();
      slot.classList.add('drag-over');
    });

    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      slot.classList.remove('drag-over');
      const type = e.dataTransfer.getData('type');
      const targetSetIdx = parseInt(slot.dataset.set);
      const targetSlotIdx = parseInt(slot.dataset.slot);

      if (type === 'char') {
        const charId = e.dataTransfer.getData('text/plain');
        if (charId) {
          sets[targetSetIdx].slots[targetSlotIdx].charId = charId;
          saveData();
        }
      } else if (type === 'slot-char') {
        const srcSetIdx = parseInt(e.dataTransfer.getData('setIdx'));
        const srcSlotIdx = parseInt(e.dataTransfer.getData('slotIdx'));
        const srcCharId = e.dataTransfer.getData('charId');

        if (srcSetIdx === targetSetIdx) {
          if (srcSlotIdx === targetSlotIdx) {
            sets[targetSetIdx].slots[targetSlotIdx].charId = null;
          } else {
            const targetCharId = sets[targetSetIdx].slots[targetSlotIdx].charId;
            sets[targetSetIdx].slots[targetSlotIdx].charId = srcCharId;
            sets[srcSetIdx].slots[srcSlotIdx].charId = targetCharId;
          }
          saveData();
        }
      }

      // このdropは stopPropagation() しているため、共通の解除処理まで届かない。
      // ここで明示的にD&D状態を解除する。
      resetDragState();
    });
  });
}

window.updateSetName = (index, val) => { sets[index].name = val; saveData(); };
window.removeSet = (index) => { sets.splice(index, 1); saveData(); };
window.updateSlotRole = (sIdx, slIdx, val) => { sets[sIdx].slots[slIdx].role = val; saveData(); };

// 公演画面
function initStageTab() {
  document.getElementById('btn-add-hand-char').addEventListener('click', () => {
    openAddHandModal();
  });

  const btnRemoveHand = document.getElementById('btn-remove-hand-char');
  if (btnRemoveHand) {
    btnRemoveHand.addEventListener('click', () => {
      openRemoveHandModal();
    });
  }

  // 上演準備の「現在の幕」ポインタ（時間移動）
  const btnActPrev = document.getElementById('btn-act-prev');
  const btnActNext = document.getElementById('btn-act-next');
  if (btnActPrev) {
    btnActPrev.addEventListener('click', () => {
      currentActPointer -= 1;
      clampActPointer();
      saveData();
    });
  }
  if (btnActNext) {
    btnActNext.addEventListener('click', () => {
      currentActPointer += 1;
      clampActPointer();
      saveData();
    });
  }

  // 手札から予備キャストエリアへドラッグすることで、手札からの「取り消し」処理を実行
  const reserveZone = document.getElementById('stage-reserve-container');
  if (reserveZone) {
    reserveZone.addEventListener('dragover', (e) => {
      // 手札（出演可能キャスト）のドラッグのみ受け付ける
      if (!isDragKind('stage-hand-char')) return;
      e.preventDefault();
    });
    reserveZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const type = e.dataTransfer.getData('type');
      if (type === 'stage-hand-char') {
        const charId = e.dataTransfer.getData('charId');
        if (charId && stageHand.includes(charId)) {
          stageHand = stageHand.filter(id => id !== charId);
          saveData();
        }
      }
    });
  }

  // 上演準備の枠から出演可能キャストへドラッグすることで、その配置を「取り消し」（公演プランと同じ挙動）
  const handContainer = document.getElementById('stage-hand-container');
  if (handContainer) {
    handContainer.addEventListener('dragover', (e) => {
      // 上演準備の枠からの取り消しのみ受け付ける
      if (!isDragKind('act-slot-char')) return;
      e.preventDefault();
    });
    handContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const type = e.dataTransfer.getData('type');
      if (type === 'act-slot-char') {
        const actIdx = parseInt(e.dataTransfer.getData('actIdx'));
        const slotIdx = parseInt(e.dataTransfer.getData('slotIdx'));
        if (!isNaN(actIdx) && !isNaN(slotIdx)) {
          stageActs[actIdx].slots[slotIdx] = null;
          saveData();
        }
      }
    });
  }
}

function calculateVitality() {
  // 手札に入っているかどうかに関わらず、実際に幕へ配置された回数を数える
  // （待機状態＝グレーのままでも仮配置できるため、上限判定は配置実績で行う）
  const usageMap = {};
  stageActs.forEach(act => {
    act.slots.forEach(id => {
      if (id) {
        usageMap[id] = (usageMap[id] || 0) + 1;
      }
    });
  });
  return usageMap;
}

// 「現在の幕」より前（クリア済み扱いの幕）だけを対象にした活力消費数
// これが2に達したキャラは、実際のゲーム進行上すでに出番を使い切っているとみなし、
// 出演可能キャストから「出演済みキャスト」へ一時的に移す。
function calculateClearedVitality() {
  const clearedCount = Math.max(0, Math.min(currentActPointer - 1, stageActs.length));
  const usageMap = {};
  stageActs.slice(0, clearedCount).forEach(act => {
    act.slots.forEach(id => {
      if (id) {
        usageMap[id] = (usageMap[id] || 0) + 1;
      }
    });
  });
  return usageMap;
}

function renderStageTab() {
  const planContainer = document.getElementById('stage-plan-container');
  const reserveContainer = document.getElementById('stage-reserve-container');
  const handContainer = document.getElementById('stage-hand-container');
  const actsContainer = document.getElementById('stage-acts-container');
  const performedSection = document.getElementById('stage-performed-section');
  const performedContainer = document.getElementById('stage-hand-performed-container');
  const pointerLabel = document.getElementById('act-pointer-label');

  if (!planContainer) return;

  clampActPointer();
  if (pointerLabel) {
    const maxPointer = stageActs.length + 1;
    if (currentActPointer > stageActs.length) {
      pointerLabel.textContent = '全幕クリア';
    } else {
      pointerLabel.textContent = stageActs[currentActPointer - 1].name;
    }
    const btnPrev = document.getElementById('btn-act-prev');
    const btnNext = document.getElementById('btn-act-next');
    if (btnPrev) btnPrev.disabled = currentActPointer <= 1;
    if (btnNext) btnNext.disabled = currentActPointer >= maxPointer;
  }

  const todayCastIds = getTodayCastIds();

  // 開幕キャスト（有効なもの）を自動的に手札（stageHand）へ追加
  const openingValidIds = currentSettings.openingCast.filter(id => id && todayCastIds.includes(id));
  let handUpdated = false;
  openingValidIds.forEach(id => {
    if (!stageHand.includes(id)) {
      stageHand.push(id);
      handUpdated = true;
    }
  });

  // 本日のキャストに含まれなくなったキャラを手札から除去
  const filteredHand = stageHand.filter(id => todayCastIds.includes(id));
  if (filteredHand.length !== stageHand.length) {
    stageHand = filteredHand;
    handUpdated = true;
  }

  if (handUpdated) {
    localStorage.setItem(`${STORAGE_PREFIX}stage_hand`, JSON.stringify(stageHand));
  }

  const vitalityMap = calculateVitality();
  const clearedVitalityMap = calculateClearedVitality();

  // 手札(stageHand)に入っていないキャラの見た目（グレーアウト）を共通化するヘルパー
  function grayIfNotInHand(charId) {
    return (charId && !stageHand.includes(charId)) ? 'is-grayed' : '';
  }

  // 1. 左列：公演プラン（手札に入っていないキャラはグレー表示）
  planContainer.innerHTML = sets.map((s) => `
    <div class="set-card">
      <div class="set-header">
        <input type="text" value="${s.name}" readonly>
      </div>
      <div class="set-slots">
        ${s.slots.map((slot) => {
          const char = characters.find(c => c.id === slot.charId);
          const grayClass = char ? grayIfNotInHand(char.id) : '';
          return `
            <div class="set-slot-item">
              <div class="party-slot ${char ? 'filled star-' + char.rarity : ''} ${grayClass}">
                ${char ? `
                  <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
                  <img src="${getImgSrc(char.image)}" class="avatar">
                  <div class="name-label">${char.name}</div>
                ` : `<span class="slot-placeholder">空</span>`}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');

  // 1. 下部：予備キャスト（本日のキャストのうち公演プランの編成枠に含まれていないキャラ）
  //    公演プラン・上演準備と同様、手札に入っていないキャラはグレーアウト表示する
  const planAssignedIds = sets.flatMap(s => s.slots.map(sl => sl.charId)).filter(Boolean);
  const reserveList = characters.filter(c => todayCastIds.includes(c.id) && !planAssignedIds.includes(c.id));
  reserveContainer.innerHTML = reserveList.map(c => `
    <div class="char-card star-${c.rarity} ${grayIfNotInHand(c.id)}">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label">${c.name}</div>
    </div>
  `).join('');

  // 2. 中央列：出演可能キャスト
  //   ・手札(stageHand)に未追加のキャラ → グレーアウト表示（待機キャスト状態）
  //   ・手札に追加済みのキャラ         → 通常カラー
  //   ・活力カウントは、グレー／カラーに関わらず常に表示する
  //   ・2/2（使用済み）でも、グレーアウト／ダークアウトは行わない（ドラッグ制御のみ裏で制御）
  //   ・クリックすると追加／取り消しメニュー（モーダル）を開く（ドラッグ操作ができない端末向け）
  //   ・「現在の幕」より前で活力を使い切ったキャラは、出演済みキャストとして下段に分離する
  const todayCastChars = todayCastIds.map(id => characters.find(c => c.id === id)).filter(Boolean);
  const availableChars = [];
  const performedChars = [];
  todayCastChars.forEach(c => {
    const clearedUsage = clearedVitalityMap[c.id] || 0;
    if (clearedUsage >= 2) {
      performedChars.push(c);
    } else {
      availableChars.push(c);
    }
  });

  function renderHandCard(c) {
    const isAdded = stageHand.includes(c.id);
    const usage = vitalityMap[c.id] || 0;
    const isExhausted = usage >= 2;

    // 未追加キャラのみグレーアウト。追加済みは2/2に達しても通常表示のまま。
    const grayClass = !isAdded ? 'is-grayed' : '';
    // 使用済み(2/2)のキャラは、新規のドラッグ配置のみ不可にする（カーソルも矢印に）
    const isDraggable = !isExhausted;
    const cursorStyle = isDraggable ? '' : 'cursor: default;';

    return `
      <div class="char-card star-${c.rarity} ${grayClass}" 
           draggable="${isDraggable}" 
           data-stage-char-id="${c.id}"
           style="${cursorStyle}"
           onclick="openHandCardActionModal('${c.id}')">
        <span class="vitality-badge">${usage}/2</span>
        <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
        <img src="${getImgSrc(c.image)}" class="avatar">
        <div class="name-label">${c.name}</div>
      </div>
    `;
  }

  handContainer.innerHTML = availableChars.map(renderHandCard).join('');

  if (performedSection && performedContainer) {
    if (performedChars.length > 0) {
      performedSection.style.display = '';
      performedContainer.innerHTML = performedChars.map(renderHandCard).join('');
    } else {
      performedSection.style.display = 'none';
      performedContainer.innerHTML = '';
    }
  }

  // 3. 右列：上演準備（手札に入っていないキャラはグレー表示。枠クリックで選択モーダルを開く。活力も表示）
  actsContainer.innerHTML = stageActs.map((act, actIdx) => {
    const charNames = act.slots.map(id => {
      const c = characters.find(item => item.id === id);
      return c ? c.name : '—';
    });

    const summaryText = `${act.isOpen ? '▼' : '▶'} ${act.name} ${charNames.join('・')}`;

    return `
      <div class="act-card">
        <div class="act-header" onclick="toggleActOpen(${actIdx})">
          <span class="act-title-text">${summaryText}</span>
        </div>
        <div class="act-body ${act.isOpen ? '' : 'hidden'}">
          ${act.slots.map((charId, slotIdx) => {
            const char = characters.find(c => c.id === charId);
            const grayClass = char ? grayIfNotInHand(char.id) : '';
            const usage = char ? (vitalityMap[char.id] || 0) : 0;
            return `
              <div class="party-slot ${char ? 'filled star-' + char.rarity : ''} ${grayClass}"
                   draggable="${!!char}"
                   data-act-idx="${actIdx}"
                   data-slot-idx="${slotIdx}"
                   onclick="openActSlotSelectModal(${actIdx}, ${slotIdx})">
                ${char ? `
                  <span class="vitality-badge">${usage}/2</span>
                  <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
                  <img src="${getImgSrc(char.image)}" class="avatar">
                  <div class="name-label">${char.name}</div>
                ` : `<span class="slot-placeholder">+ 枠 ${slotIdx + 1}</span>`}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  setupStageDragAndDrop();
}

window.toggleActOpen = function(actIdx) {
  stageActs[actIdx].isOpen = !stageActs[actIdx].isOpen;
  saveData();
};

// 上演準備の枠：クリックで「本日のキャスト」から選択（公演プランと同じ方式）
window.openActSlotSelectModal = function(actIdx, slotIdx) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "枠にセットするキャラクターを選択";

  const todayCastIds = getTodayCastIds();
  const candidates = characters.filter(c => todayCastIds.includes(c.id));
  const currentSlotCharId = stageActs[actIdx].slots[slotIdx];
  const vitalityMap = calculateVitality();

  body.innerHTML = `
    <div class="party-slot" onclick="selectActSlotChar(${actIdx}, ${slotIdx}, null)">
      <span class="slot-placeholder">クリア (空枠)</span>
    </div>
  ` + candidates.map(c => {
    const usage = vitalityMap[c.id] || 0;
    const isCurrent = c.id === currentSlotCharId;
    const isExhausted = usage >= 2 && !isCurrent;
    return `
      <div class="char-card star-${c.rarity} ${isExhausted ? 'assigned' : ''} ${isCurrent ? 'active-selected' : ''}"
           ${!isExhausted ? `onclick="selectActSlotChar(${actIdx}, ${slotIdx}, '${c.id}')"` : ''}>
        <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
        <img src="${getImgSrc(c.image)}" class="avatar">
        <div class="name-label">${c.name}</div>
      </div>
    `;
  }).join('');

  overlay.classList.remove('hidden');
};

window.selectActSlotChar = function(actIdx, slotIdx, charId) {
  stageActs[actIdx].slots[slotIdx] = charId;
  document.getElementById('modal-overlay').classList.add('hidden');
  saveData();
};

function setupStageDragAndDrop() {
  document.querySelectorAll('#stage-hand-container .char-card[draggable="true"]').forEach(card => {
    card.addEventListener('dragstart', (e) => {
      beginDrag(e, 'stage-hand-char');
      e.dataTransfer.setData('charId', card.dataset.stageCharId);
    });

    // ドラッグが終わったら（成否に関わらず）状態を解除する
    card.addEventListener('dragend', () => {
      resetDragState();
    });
  });

  document.querySelectorAll('#stage-acts-container .party-slot').forEach(slot => {
    slot.addEventListener('dragstart', (e) => {
      const actIdx = slot.dataset.actIdx;
      const slotIdx = slot.dataset.slotIdx;
      const charId = stageActs[actIdx].slots[slotIdx];
      if (charId) {
        beginDrag(e, 'act-slot-char');
        e.dataTransfer.setData('actIdx', actIdx);
        e.dataTransfer.setData('slotIdx', slotIdx);
        e.dataTransfer.setData('charId', charId);
      } else {
        // 空の枠からはドラッグを開始させない
        e.preventDefault();
      }
    });

    // ドラッグが終わったら（成否に関わらず）状態を解除する
    slot.addEventListener('dragend', () => {
      resetDragState();
    });

    slot.addEventListener('dragover', (e) => {
      // 手札からの配置、または幕内キャラの移動のみ受け付ける
      if (!isDragKind('stage-hand-char', 'act-slot-char')) return;
      e.preventDefault();
      slot.classList.add('drag-over');
    });

    slot.addEventListener('dragleave', () => slot.classList.remove('drag-over'));

    slot.addEventListener('drop', (e) => {
      e.preventDefault();
      slot.classList.remove('drag-over');
      const type = e.dataTransfer.getData('type');
      const targetActIdx = parseInt(slot.dataset.actIdx);
      const targetSlotIdx = parseInt(slot.dataset.slotIdx);

      if (type === 'stage-hand-char') {
        const charId = e.dataTransfer.getData('charId');
        const vitalityMap = calculateVitality();
        if ((vitalityMap[charId] || 0) < 2) {
          // 手札に入っているかどうかに関わらず配置できる（未追加のキャラはグレーのまま仮配置される）
          stageActs[targetActIdx].slots[targetSlotIdx] = charId;
          saveData();
        }
      } else if (type === 'act-slot-char') {
        const srcActIdx = parseInt(e.dataTransfer.getData('actIdx'));
        const srcSlotIdx = parseInt(e.dataTransfer.getData('slotIdx'));
        const srcCharId = e.dataTransfer.getData('charId');

        if (srcActIdx === targetActIdx) {
          if (srcSlotIdx === targetSlotIdx) {
            stageActs[targetActIdx].slots[targetSlotIdx] = null;
          } else {
            const targetCharId = stageActs[targetActIdx].slots[targetSlotIdx];
            stageActs[targetActIdx].slots[targetSlotIdx] = srcCharId;
            stageActs[srcActIdx].slots[srcSlotIdx] = targetCharId;
          }
          saveData();
        }
      }
    });
  });
}

// モーダル：手札へ追加（本日のキャストのうち、まだ手札に入っていない待機・特別・サポートキャストを選択）
function openAddHandModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "手札（出演可能キャスト）へ追加";

  const todayCastIds = getTodayCastIds();
  // 開幕キャスト（常に手札固定）と、既に手札に追加済みのキャラは候補から除外。
  // ここに表示されるのは「まだグレー状態」のキャラのみ。
  const candidates = characters.filter(c =>
    todayCastIds.includes(c.id) &&
    !currentSettings.openingCast.includes(c.id) &&
    !stageHand.includes(c.id)
  );

  body.innerHTML = candidates.map(c => `
    <div class="char-card star-${c.rarity}" onclick="addHandChar('${c.id}')">
      <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
      <img src="${getImgSrc(c.image)}" class="avatar">
      <div class="name-label">${c.name}</div>
    </div>
  `).join('');

  overlay.classList.remove('hidden');
}

window.addHandChar = function(charId) {
  if (!stageHand.includes(charId)) {
    stageHand.push(charId);
  }
  // 追加すると候補から消えるので、モーダルを再描画する
  openAddHandModal();
  saveData();
};

// モーダル：手札からまとめて取り消し（開幕キャストは対象外）
function openRemoveHandModal() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "手札からまとめて取り消し";

  const candidates = stageHand
    .filter(id => !currentSettings.openingCast.includes(id))
    .map(id => characters.find(c => c.id === id))
    .filter(Boolean);

  if (candidates.length === 0) {
    body.innerHTML = `<p class="help-text">取り消せるキャラがいません。</p>`;
  } else {
    body.innerHTML = candidates.map(c => `
      <div class="char-card star-${c.rarity}" onclick="removeHandCharBulk('${c.id}')">
        <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
        <img src="${getImgSrc(c.image)}" class="avatar">
        <div class="name-label">${c.name}</div>
      </div>
    `).join('');
  }

  overlay.classList.remove('hidden');
}

window.removeHandCharBulk = function(charId) {
  stageHand = stageHand.filter(id => id !== charId);
  // 取り消すと候補から消えるので、モーダルを再描画する
  openRemoveHandModal();
  saveData();
};

// 出演可能キャストのカードをクリックした際のアクションメニュー（ドラッグ操作ができない端末向け）
// カード本体を縦に大きく表示し、その下にボタンを1つ配置する縦向きレイアウト
window.openHandCardActionModal = function(charId) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  const c = characters.find(ch => ch.id === charId);
  if (!c) return;

  document.getElementById('modal-title').innerText = c.name;

  const isAdded = stageHand.includes(charId);
  const isOpening = currentSettings.openingCast.includes(charId);

  let actionHtml = `
    <div class="hand-action-panel">
      <div class="char-card star-${c.rarity}">
        <span class="elem-icon"><img src="${getElemImgSrc(c.element)}" class="elem-img"></span>
        <img src="${getImgSrc(c.image)}" class="avatar">
        <div class="name-label">${c.name}</div>
      </div>
  `;

  if (isOpening) {
    actionHtml += `<p class="help-text">開幕キャストは常に手札に含まれるため、取り消しできません。</p>`;
  } else if (isAdded) {
    actionHtml += `<button class="btn btn-danger btn-block" onclick="removeFromHandAction('${charId}')">手札から取り消す</button>`;
  } else {
    actionHtml += `<button class="btn btn-primary btn-block" onclick="addHandCharFromCardModal('${charId}')">手札に追加する</button>`;
  }

  actionHtml += `</div>`;

  body.innerHTML = actionHtml;
  overlay.classList.remove('hidden');
};

window.addHandCharFromCardModal = function(charId) {
  if (!stageHand.includes(charId)) {
    stageHand.push(charId);
  }
  document.getElementById('modal-overlay').classList.add('hidden');
  saveData();
};

window.removeFromHandAction = function(charId) {
  stageHand = stageHand.filter(id => id !== charId);
  document.getElementById('modal-overlay').classList.add('hidden');
  saveData();
};

window.openCastSelectModal = function(type, targetIndex) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = "キャラクターを選択";
  let candidates = [];
  let selectedId = null;

  const chosenIds = new Set([
    ...currentSettings.openingCast.filter(Boolean),
    ...currentSettings.specialCast.filter(Boolean),
    ...(currentSettings.supportCast ? [currentSettings.supportCast] : [])
  ]);

  if (type === 'opening') {
    selectedId = currentSettings.openingCast[targetIndex];
    candidates = characters.filter(c => {
      if (!currentSettings.activeElements.includes(c.element)) return false;
      if (c.id === selectedId) return true;
      return !chosenIds.has(c.id);
    });
  } else if (type === 'special') {
    selectedId = currentSettings.specialCast[targetIndex];
    candidates = characters.filter(c => {
      if (currentSettings.activeElements.includes(c.element)) return false;
      if (c.id === selectedId) return true;
      return !chosenIds.has(c.id);
    });
  } else if (type === 'support') {
    selectedId = currentSettings.supportCast;
    candidates = characters.filter(c => {
      if (c.id === selectedId) return true;
      if (c.owned || !currentSettings.activeElements.includes(c.element)) return false;
      return !chosenIds.has(c.id);
    });
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
  const todayCastIds = getTodayCastIds();
  const available = characters.filter(c => todayCastIds.includes(c.id));
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
  const currentSelected = type === 'opening' ? currentSettings.openingCast[targetIndex] : type === 'special' ? currentSettings.specialCast[targetIndex] : currentSettings.supportCast;
  if (charId === currentSelected) {
    document.getElementById('modal-overlay').classList.add('hidden');
    return;
  }

  const selectedIds = new Set([
    ...currentSettings.openingCast.filter(Boolean),
    ...currentSettings.specialCast.filter(Boolean),
    ...(currentSettings.supportCast ? [currentSettings.supportCast] : [])
  ]);

  if (selectedIds.has(charId) && charId !== currentSelected) {
    document.getElementById('modal-overlay').classList.add('hidden');
    return;
  }

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
