const STORAGE_PREFIX = 'genshin_ver_23';

const DEFAULT_CHARACTERS = [
  { id: "c1", name: "空", rarity: 5, element: null, image: "001_空.png", owned: true },
  { id: "c2", name: "蛍", rarity: 5, element: null, image: "002_蛍.png", owned: true },
  { id: "c3", name: "ウェンティ", rarity: 5, element: "anemo", image: "003_ウェンティ.webp", owned: false },
  { id: "c4", name: "アンバー", rarity: 4, element: "pyro", image: "004_アンバー.webp", owned: true },
  { id: "c5", name: "ガイア", rarity: 4, element: "cryo", image: "005_ガイア.webp", owned: true },
  { id: "c6", name: "ジン", rarity: 5, element: "anemo", image: "006_ジン.webp", owned: false },
  { id: "c7", name: "リサ", rarity: 4, element: "electro", image: "007_リサ.webp", owned: true },
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
  { id: "c87", name: "ムアラニ", rarity: 5, element: "hydro", image: "087_ムアラニ.webp", owned: false },
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
  { id: "c121", name: "ヴェスナ", rarity: 5, element: "anemo", image: "121_ヴェスナ.webp", owned: false },
  { id: "c122", name: "ヴォジャニーツァ", rarity: 5, element: "hydro", image: "122_ヴォジャニーツァ.webp", owned: false },
  { id: "c123", name: "ミティヤ", rarity: 5, element: "electro", image: "123_ミティヤ.webp", owned: false },
  { id: "c124", name: "バレリー", rarity: 4, element: "electro", image: "124_バレリー.webp", owned: false },
   { id: "c125", name: "アナスターシャ", rarity: 5, element: "cryo", image: "125_アナスターシャ.webp", owned: false },
    { id: "c126", name: "ダニカ", rarity: 5, element: "electro", image: "126_ダニカ.webp", owned: false }
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
    easy: { name: "イージー", req: "8〜10人", sets: "2" },
    normal: { name: "ノーマル", req: "12〜14人", sets: "3" },
    hard: { name: "ハード", req: "16〜20人", sets: "4" },
    master: { name: "マスター", req: "22〜26人", sets: "5" },
    tsukiyomi: { name: "月諭", req: "28〜32人", sets: "5+2" }
  },
  roles: [
    { id: "attacker", name: "アタッカー" },
    { id: "sub_attacker", name: "サブアタッカー" },
    { id: "supporter", name: "サポーター" },
    { id: "healer", name: "ヒーラー" }
  ]
};

const storedCharacters = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}chars`));
const ownershipStorageKey = `${STORAGE_PREFIX}default_owned`;
const storedDefaultOwnership = JSON.parse(localStorage.getItem(ownershipStorageKey) || 'null');
const storedCharactersById = new Map(
  (Array.isArray(storedCharacters) ? storedCharacters : [])
    .filter(character => character && character.id)
    .map(character => [character.id, character])
);
const defaultCharacterIds = new Set(DEFAULT_CHARACTERS.map(character => character.id));
const defaultOwnership = Object.fromEntries(
  DEFAULT_CHARACTERS.map(character => [character.id, character.owned])
);
const reorderedCharacterIds = new Set(['c121', 'c122']);
const reorderedCharacterImageNames = new Set([
  '121_ヴェスナ.webp',
  '122_ヴォジャニーツァ.webp',
  '121_ヴォジャニーツァ.webp',
  '122_ヴェスナ.webp'
]);
const reorderedCharacterNames = new Set(['ヴェスナ', 'ヴォジャニーツァ']);
const hasStaleReorderedIdentity = character =>
  reorderedCharacterIds.has(character.id) &&
  reorderedCharacterNames.has(character.name) &&
  reorderedCharacterImageNames.has(character.image);
const hasMissingReorderedImage = character =>
  reorderedCharacterIds.has(character.id) &&
  (!character.image || !character.image.trim());
let characters = DEFAULT_CHARACTERS.map(character => {
  const storedCharacter = storedCharactersById.get(character.id);
  const hasUserOwnershipOverride = storedDefaultOwnership &&
    storedCharacter &&
    storedCharacter.owned !== storedDefaultOwnership[character.id];
  const hasStaleIdentity = storedCharacter && hasStaleReorderedIdentity(storedCharacter);
  const hasMissingImage = storedCharacter && hasMissingReorderedImage(storedCharacter);
  return {
    ...character,
    ...(storedCharacter || {}),
    ...(hasStaleIdentity ? {
      name: character.name,
      element: character.element,
      image: character.image
    } : {}),
    ...(hasMissingImage ? { image: character.image } : {}),
    owned: hasUserOwnershipOverride ? storedCharacter.owned : defaultOwnership[character.id]
  };
});
if (Array.isArray(storedCharacters)) {
  characters.push(...storedCharacters.filter(character =>
    character && character.id && !defaultCharacterIds.has(character.id)
  ));

  const needsCharacterSync = DEFAULT_CHARACTERS.some(character => {
    const stored = storedCharactersById.get(character.id);
    if (!stored) return true;
    const hasUserOverride = storedDefaultOwnership &&
      stored.owned !== storedDefaultOwnership[character.id];
    return hasStaleReorderedIdentity(stored) ||
      hasMissingReorderedImage(stored) ||
      (!hasUserOverride && stored.owned !== character.owned);
  });
  if (needsCharacterSync) {
    try {
      localStorage.setItem(`${STORAGE_PREFIX}chars`, JSON.stringify(characters));
    } catch (error) {
      console.error('標準キャラクターの情報を保存済みデータに同期できませんでした:', error);
    }
  }
}
try {
  localStorage.setItem(ownershipStorageKey, JSON.stringify(defaultOwnership));
} catch (error) {
  console.error('標準キャラクターの所持状態を保存できませんでした:', error);
}
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

  if (currentSettings.supportCast && currentSettings.openingCast.includes(currentSettings.supportCast)) {
    currentSettings.supportCast = null;
  } else if (currentSettings.supportCast) {
    seen.add(currentSettings.supportCast);
  }
}

normalizeCurrentCastSelections();

let sets = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}sets`)) || [
  { id: "set-1", name: "編成 1", slots: [ { role: "attacker", charId: null }, { role: "sub_attacker", charId: null }, { role: "supporter", charId: null }, { role: "healer", charId: null } ] }
];
sets = sets.map((set, index) => ({
  ...set,
  name: set.name === `パーティ ${String.fromCharCode(65 + index)}` ? `編成 ${index + 1}` : set.name,
  isOpen: set.isOpen !== false
}));

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

function getRewindTargetPointer() {
  const clearedActCount = currentActPointer - 1;
  if (clearedActCount > 6) return 7;
  if (clearedActCount > 3) return 4;
  return currentActPointer;
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
  initMobileMenu();
  initCharManagement();
  initConfigTab();
  initMainTab();
  initStageTab();
  initDataTransfer();
  initTutorialLinks();
  initHeaderHeight();
  renderAll();
});

function initMobileMenu() {
  const header = document.querySelector('.app-header');
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('header-menu');
  const closeMenu = () => {
    header.classList.remove('mobile-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'メニューを開く');
  };

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  menu.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('button')) {
      closeMenu();
    }
  });

  header.querySelector('.header-title-group').addEventListener('click', closeMenu);

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('mobile-menu-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) closeMenu();
  });
}

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

function getExportData() {
  return {
    format: 'imaginarium-theater-save',
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      characters,
      settings: currentSettings,
      sets,
      stageHand,
      stageActs,
      actPointer: currentActPointer,
      defaultOwnership: JSON.parse(localStorage.getItem(ownershipStorageKey) || 'null') || defaultOwnership
    }
  };
}

function validateImportData(save) {
  const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  if (!isRecord(save) || save.format !== 'imaginarium-theater-save' || save.version !== 1 || !isRecord(save.data)) {
    throw new Error('このツールのエクスポートJSONではありません。');
  }

  const { characters: importedCharacters, settings, sets: importedSets, stageHand: importedHand,
    stageActs: importedActs, actPointer, defaultOwnership: importedOwnership } = save.data;
  if (!Array.isArray(importedCharacters) || !isRecord(settings) || !Array.isArray(importedSets) ||
      !Array.isArray(importedHand) || !Array.isArray(importedActs) || !Number.isInteger(actPointer) ||
      !isRecord(importedOwnership)) {
    throw new Error('JSONの保存データ形式が正しくありません。');
  }
  if (!['easy', 'normal', 'hard', 'master', 'tsukiyomi'].includes(settings.difficulty) ||
      !Array.isArray(settings.activeElements) || !Array.isArray(settings.openingCast) ||
      !Array.isArray(settings.specialCast) || !Array.isArray(settings.rejectedCast) ||
      !(settings.supportCast == null || typeof settings.supportCast === 'string')) {
    throw new Error('今期設定の形式が正しくありません。');
  }
  if (!importedCharacters.every(character =>
    isRecord(character) && typeof character.id === 'string' && typeof character.name === 'string' &&
    typeof character.image === 'string' && typeof character.owned === 'boolean' &&
    [4, 5].includes(character.rarity) &&
    (character.element === null || Object.hasOwn(CONFIG_RULES.elements, character.element)))) {
    throw new Error('キャラクターデータの形式が正しくありません。');
  }
  if (!importedSets.every(set =>
    isRecord(set) && typeof set.id === 'string' && typeof set.name === 'string' &&
    Array.isArray(set.slots) && set.slots.length === 4 &&
    set.slots.every(slot => isRecord(slot) && typeof slot.role === 'string' &&
      (slot.charId === null || typeof slot.charId === 'string')))) {
    throw new Error('公演プランの形式が正しくありません。');
  }
  if (!importedActs.every(act =>
    isRecord(act) && typeof act.id === 'string' && typeof act.name === 'string' &&
    Array.isArray(act.slots) && act.slots.length === 4 &&
    act.slots.every(charId => charId === null || typeof charId === 'string'))) {
    throw new Error('上演準備データの形式が正しくありません。');
  }
  const validIds = values => values.every(id => id === null || typeof id === 'string');
  if (!validIds(settings.openingCast) || !validIds(settings.specialCast) ||
      !validIds(settings.rejectedCast) || !settings.activeElements.every(element => Object.hasOwn(CONFIG_RULES.elements, element)) ||
      !importedHand.every(charId => typeof charId === 'string') ||
      !Object.values(importedOwnership).every(owned => typeof owned === 'boolean')) {
    throw new Error('キャスト設定の形式が正しくありません。');
  }
  return save.data;
}

function downloadFile(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function getExportFilename(extension) {
  const now = new Date();
  const localDate = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
  const localTime = [now.getHours(), now.getMinutes(), now.getSeconds()].map(value => String(value).padStart(2, '0')).join('-');
  return `imaginarium-theater-${localDate}_${localTime}.${extension}`;
}

function initDataTransfer() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  const fileInput = document.getElementById('import-json-input');
  const ownershipFileInput = document.getElementById('import-ownership-json-input');
  document.getElementById('btn-data-transfer').addEventListener('click', () => {
    setCharacterSelectModalLayout(false);
    document.querySelector('#modal-overlay .modal-window').classList.add('data-transfer-modal');
    document.getElementById('modal-title').textContent = '共有';
    body.innerHTML = `
      <div class="data-transfer-actions">
        <section class="data-transfer-group">
          <h4>公演内容</h4>
          <div class="data-transfer-group-actions">
            <button id="btn-export-json" class="btn btn-primary">公演内容をエクスポート</button>
            <button id="btn-import-json" class="btn btn-secondary">公演内容をインポート</button>
          </div>
        </section>
        <section class="data-transfer-group">
          <h4>公演結果</h4>
          <button id="btn-export-stage-image" class="btn btn-secondary">公演結果を画像出力</button>
        </section>
        <section class="data-transfer-group">
          <h4>所持状況</h4>
          <p class="help-text">所持状況のみを保存・読み込みします。キャラクター情報や公演内容は変更されません。</p>
          <div class="data-transfer-group-actions">
            <button id="btn-export-ownership" class="btn btn-secondary">所持状況をエクスポート</button>
            <button id="btn-import-ownership" class="btn btn-secondary">所持状況をインポート</button>
          </div>
        </section>
        <p id="data-transfer-status" class="help-text" role="status"></p>
      </div>
    `;
    body.querySelector('#btn-export-json').addEventListener('click', () => {
      const json = JSON.stringify(getExportData(), null, 2);
      downloadFile(new Blob([json], { type: 'application/json' }), getExportFilename('json'));
    });
    body.querySelector('#btn-export-stage-image').addEventListener('click', async event => {
      const button = event.currentTarget;
      const status = body.querySelector('#data-transfer-status');
      await exportStageImage(button, status);
    });
    body.querySelector('#btn-import-json').addEventListener('click', () => fileInput.click());
    body.querySelector('#btn-export-ownership').addEventListener('click', () => {
      const data = {
        format: 'imaginarium-theater-ownership',
        version: 1,
        exportedAt: new Date().toISOString(),
        ownership: Object.fromEntries(characters.map(character => [character.id, character.owned]))
      };
      const json = JSON.stringify(data, null, 2);
      const filename = getExportFilename('json').replace('imaginarium-theater-', 'imaginarium-theater-ownership-');
      downloadFile(new Blob([json], { type: 'application/json' }), filename);
      body.querySelector('#data-transfer-status').textContent = '所持状況をJSONファイルに出力しました。';
    });
    body.querySelector('#btn-import-ownership').addEventListener('click', () => ownershipFileInput.click());
    overlay.classList.remove('hidden');
  });

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    fileInput.value = '';
    if (!file) return;
    const status = body.querySelector('#data-transfer-status');
    try {
      const imported = validateImportData(JSON.parse(await file.text()));
      if (!confirm('現在のキャラクター・設定・公演プラン・上演準備を、JSONの内容で置き換えます。よろしいですか？')) return;

      const storageKeys = [
        `${STORAGE_PREFIX}chars`, `${STORAGE_PREFIX}settings`, `${STORAGE_PREFIX}sets`,
        `${STORAGE_PREFIX}stage_hand`, `${STORAGE_PREFIX}stage_acts`,
        `${STORAGE_PREFIX}act_pointer`, ownershipStorageKey
      ];
      const previousStorage = new Map(storageKeys.map(key => [key, localStorage.getItem(key)]));
      const previousState = { characters, currentSettings, sets, stageHand, stageActs, currentActPointer };
      try {
        const importedCharacterIds = new Set(imported.characters.map(character => character.id));
        const missingTravelerCharacters = DEFAULT_CHARACTERS.filter(character =>
          ['c1', 'c2'].includes(character.id) && !importedCharacterIds.has(character.id)
        );
        characters = [...imported.characters, ...missingTravelerCharacters];
        currentSettings = imported.settings;
        if (currentSettings.supportCast == null) currentSettings.supportCast = null;
        sets = imported.sets.map(set => ({ ...set, isOpen: set.isOpen !== false }));
        stageHand = imported.stageHand;
        stageActs = imported.stageActs;
        currentActPointer = imported.actPointer;
        syncStageActsToDifficulty();
        clampActPointer();
        localStorage.setItem(ownershipStorageKey, JSON.stringify({
          ...imported.defaultOwnership,
          ...Object.fromEntries(missingTravelerCharacters.map(character => [character.id, character.owned]))
        }));
        saveData();
      } catch (error) {
        characters = previousState.characters;
        currentSettings = previousState.currentSettings;
        sets = previousState.sets;
        stageHand = previousState.stageHand;
        stageActs = previousState.stageActs;
        currentActPointer = previousState.currentActPointer;
        storageKeys.forEach(key => localStorage.removeItem(key));
        previousStorage.forEach((value, key) => {
          if (value !== null) localStorage.setItem(key, value);
        });
        renderAll();
        throw error;
      }
      overlay.classList.add('hidden');
    } catch (error) {
      const statusMessage = `インポートに失敗しました: ${error.message}`;
      if (status) status.textContent = statusMessage;
      else alert(statusMessage);
    }
  });

  ownershipFileInput.addEventListener('change', async () => {
    const file = ownershipFileInput.files[0];
    ownershipFileInput.value = '';
    if (!file) return;
    const status = body.querySelector('#data-transfer-status');
    try {
      const importedOwnership = validateOwnershipImport(JSON.parse(await file.text()));
      const matchingCharacterIds = new Set(characters
        .filter(character => Object.hasOwn(importedOwnership, character.id))
        .map(character => character.id));
      if (matchingCharacterIds.size === 0) {
        throw new Error('この図鑑に該当するキャラクターがありません。');
      }
      if (!confirm(`該当する${matchingCharacterIds.size}人の所持状況を更新します。キャラクター情報は変更されません。よろしいですか？`)) return;

      const updatedCharacters = characters.map(character => Object.hasOwn(importedOwnership, character.id)
        ? { ...character, owned: importedOwnership[character.id] }
        : character
      );
      persistOwnership(updatedCharacters);
      status.textContent = `${matchingCharacterIds.size}人の所持状況を取り込みました。JSONに含まれないキャラクターの所持状況は変更していません。`;
    } catch (error) {
      const statusMessage = `所持状況の取り込みに失敗しました: ${error.message}`;
      if (status) status.textContent = statusMessage;
      else alert(statusMessage);
    }
  });
}

async function exportStageImage(button, status) {
  button.disabled = true;
  status.textContent = '画像を作成しています…';
  try {
    const blob = await createStageResultImage();
    downloadFile(blob, getExportFilename('png'));
    status.textContent = 'PNG画像を出力しました。';
  } catch (error) {
    status.textContent = `画像を出力できませんでした: ${error.message}`;
  } finally {
    button.disabled = false;
  }
}

// ===============================================================
// 上演準備の画像出力
// ---------------------------------------------------------------
// ・サイトの .char-card / .party-slot と同じ寸法(110×140)・配色でCanvasに直接描く
// ・画像は fetch で読み込み → Blob 化してから描画するため、キャンバスが汚染(tainted)されない
//   （http(s):// で開いている場合のみ。file:// ではブラウザの仕様で不可能）
// ・SVG経由は外部画像が読み込まれず壊れるため使用しない
// ===============================================================

// true にすると、サイト上の表示と同じく「手札に入っていないキャラ」をグレー表示で出力する
const EXPORT_GRAY_NOT_IN_HAND = false;
const EXPORT_SCALE = 3; // 出力倍率（1論理px = 3px）

const EXPORT_COLORS = {
  panelBorder: '#403f79',
  mutedBorder: '#4b5563',
  accentGold: '#e5b869',
  textMain: '#e2e8f0',
  textSub: '#94a3b8',
  star5: '#c89d53',
  star4: '#9172bf',
  cardBg: 'rgba(25, 22, 46, 0.9)',
  cardSolid: '#19162E',
  slotBg: 'rgba(9, 9, 26, 0.7)',
  selectBg: 'rgba(8, 8, 26, 0.5)',
  sectionBg: 'rgba(25, 22, 46, 0.5)',
  headerBg: 'rgba(9, 9, 26, 0.45)',
  labelBg: 'rgba(0, 0, 0, 0.85)',
  iconBg: 'rgba(0, 0, 0, 0.75)'
};

const exportImageCache = new Map();

// file:// で開いている場合：assets フォルダを1回だけ選んでもらい、画像をブラウザ内(IndexedDB)に記憶する
const EXPORT_DB_NAME = 'imaginarium-export-assets';
const EXPORT_DB_STORE = 'kv';
const EXPORT_DB_KEY = 'assets';

function openExportDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(EXPORT_DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(EXPORT_DB_STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readExportAssetsFromDb() {
  try {
    const db = await openExportDb();
    return await new Promise((resolve, reject) => {
      const query = db.transaction(EXPORT_DB_STORE).objectStore(EXPORT_DB_STORE).get(EXPORT_DB_KEY);
      query.onsuccess = () => resolve(query.result || null);
      query.onerror = () => reject(query.error);
    });
  } catch (error) {
    return null;
  }
}

async function writeExportAssetsToDb(assets) {
  try {
    const db = await openExportDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(EXPORT_DB_STORE, 'readwrite');
      tx.objectStore(EXPORT_DB_STORE).put(assets, EXPORT_DB_KEY);
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
  } catch (error) {
    console.warn('画像の記憶に失敗しました（次回もフォルダ選択が必要になります）:', error);
  }
}

function pickExportAssetFiles() {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.webkitdirectory = true;
    input.style.display = 'none';
    input.addEventListener('change', () => {
      input.remove();
      resolve(Array.from(input.files));
    });
    input.addEventListener('cancel', () => {
      input.remove();
      reject(new Error('フォルダが選択されませんでした。'));
    });
    document.body.appendChild(input);
    input.click();
  });
}

function getExportMimeType(name) {
  const ext = name.split('.').pop().toLowerCase();
  return ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png' : ext === 'gif' ? 'image/gif' : 'image/jpeg';
}

let exportAssetDataPromise = null;
function loadExportAssetData() {
  if (!exportAssetDataPromise) {
    exportAssetDataPromise = (async () => {
      const stored = await readExportAssetsFromDb();
      if (stored && stored['assets/ui/theater_background.png']) return stored;

      alert('初回のみ：画像出力に使う画像を読み込みます。\nassets フォルダが入っているフォルダ（index.html があるフォルダ）を選んでください。');
      const files = await pickExportAssetFiles();
      const assets = {};
      for (const file of files) {
        const path = file.webkitRelativePath.normalize('NFC');
        const i = path.indexOf('assets/');
        const key = i >= 0 ? path.slice(i) : 'assets/' + path.split('/').slice(1).join('/');
        const ok = /^assets\/(characters|elements)\/[^/]+\.(webp|png|jpe?g|gif)$/i.test(key)
          || key === 'assets/ui/theater_background.png'
          || key === 'assets/ui/placeholder.png';
        if (!ok) continue;
        assets[key] = new Blob([await file.arrayBuffer()], { type: getExportMimeType(key) });
      }
      if (!assets['assets/ui/theater_background.png']) {
        throw new Error('選んだフォルダに assets/ui/theater_background.png がありません。index.html があるフォルダを選んでください。');
      }
      await writeExportAssetsToDb(assets);
      return assets;
    })();
    exportAssetDataPromise.catch(() => { exportAssetDataPromise = null; });
  }
  return exportAssetDataPromise;
}

function loadExportImage(src) {
  if (exportImageCache.has(src)) return exportImageCache.get(src);
  const promise = (async () => {
    let objectUrl = null;
    let url = src;
    if (!src.startsWith('data:')) {
      if (window.location.protocol === 'file:') {
        const key = src.replace(/^\.?\//, '').normalize('NFC');
        const assets = await loadExportAssetData();
        if (!assets[key]) throw new Error(`選んだフォルダに画像がありません: ${key}`);
        objectUrl = URL.createObjectURL(assets[key]);
        url = objectUrl;
      } else {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${src}`);
        objectUrl = URL.createObjectURL(await response.blob());
        url = objectUrl;
      }
    }
    try {
      return await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`画像を読み込めません: ${src.slice(0, 60)}`));
        image.src = url;
      });
    } finally {
      if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
    }
  })();
  exportImageCache.set(src, promise);
  promise.catch(() => exportImageCache.delete(src));
  return promise;
}

// キャラ画像が無い／読み込めない場合はプレースホルダー、それも無理なら null
async function loadExportImageSafe(src, fallback = './assets/ui/placeholder.png') {
  try {
    return await loadExportImage(src);
  } catch (error) {
    if (!fallback || fallback === src) return null;
    return loadExportImageSafe(fallback, null);
  }
}

function exportRoundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawExportCover(ctx, image, x, y, w, h) {
  const scale = Math.max(w / image.width, h / image.height);
  const dw = image.width * scale;
  const dh = image.height * scale;
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  ctx.drawImage(image, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  ctx.restore();
}

// キャラ名を最大2行に折り返す（site の .name-label と同様に文字単位で改行）
function wrapExportName(ctx, name, maxWidth) {
  const lines = [''];
  for (const ch of Array.from(name)) {
    const current = lines[lines.length - 1];
    if (ctx.measureText(current + ch).width <= maxWidth || current === '') {
      lines[lines.length - 1] = current + ch;
    } else if (lines.length < 2) {
      lines.push(ch);
    } else {
      lines[1] = lines[1].replace(/.$/, '…');
      break;
    }
  }
  return lines;
}

// 110×140 のキャラカード（.char-card / .party-slot.filled と同じ見た目）
function drawExportCard(ctx, x, y, char, images, gray) {
  const W = 110, H = 140, B = 2, R = 8;
  const c = EXPORT_COLORS;
  const borderColor = gray ? c.mutedBorder : (char.rarity === 5 ? c.star5 : c.star4);

  ctx.save();
  exportRoundRectPath(ctx, x, y, W, H, R);
  ctx.fillStyle = gray ? c.cardSolid : c.cardBg;
  ctx.fill();
  ctx.clip();

  const innerX = x + B, innerY = y + B, innerW = W - B * 2, innerH = H - B * 2;
  const labelH = 30;
  const avatarH = innerH - labelH;

  // 中身（グレー時は半透明＋モノクロ）
  ctx.save();
  if (gray) {
    ctx.globalAlpha = 0.35;
    if ('filter' in ctx) ctx.filter = 'grayscale(100%)';
  }
  if (images.avatar) {
    drawExportCover(ctx, images.avatar, innerX, innerY, innerW, avatarH);
  }
  // 名前ラベル
  ctx.fillStyle = c.labelBg;
  ctx.fillRect(innerX, innerY + avatarH, innerW, labelH);
  ctx.fillStyle = c.textMain;
  ctx.font = '400 12px "Zen Old Mincho", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lines = wrapExportName(ctx, char.name, innerW - 8);
  const lineH = 13.2;
  const labelCenter = innerY + avatarH + labelH / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, innerX + innerW / 2, labelCenter + (i - (lines.length - 1) / 2) * lineH);
  });
  // 元素アイコン（左上 4px / 24px 円 / padding 2px）
  ctx.fillStyle = c.iconBg;
  ctx.beginPath();
  ctx.arc(innerX + 4 + 12, innerY + 4 + 12, 12, 0, Math.PI * 2);
  ctx.fill();
  if (images.element) ctx.drawImage(images.element, innerX + 4 + 2, innerY + 4 + 2, 20, 20);
  ctx.restore();

  ctx.restore();

  // 枠線（border: 2px）
  ctx.save();
  exportRoundRectPath(ctx, x + B / 2, y + B / 2, W - B, H - B, R - 1);
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = B;
  ctx.stroke();
  ctx.restore();
}

// 空き枠（.party-slot の破線枠）
function drawExportEmptySlot(ctx, x, y, index) {
  const c = EXPORT_COLORS;
  ctx.save();
  exportRoundRectPath(ctx, x, y, 110, 140, 8);
  ctx.fillStyle = c.slotBg;
  ctx.fill();
  exportRoundRectPath(ctx, x + 1, y + 1, 108, 138, 7);
  ctx.setLineDash([6, 4]);
  ctx.strokeStyle = c.panelBorder;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = c.textSub;
  ctx.font = '400 12.8px "Zen Old Mincho", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`+ 枠 ${index + 1}`, x + 55, y + 70);
  ctx.restore();
}

async function createStageResultImage() {
  // file:// の場合は、クリック直後（フォルダ選択が許される間）に画像データを用意する
  if (window.location.protocol === 'file:') await loadExportAssetData();

  const c = EXPORT_COLORS;
  const cardW = 110, cardH = 140, slotGap = 24;
  const outerPad = 40, actPad = 12, actHeaderH = 40, actGap = 10, headerH = 100;
  const actW = actPad * 2 + cardW * 4 + slotGap * 3;
  const W = outerPad * 2 + actW;
  const actH = actHeaderH + actPad * 2 + cardH;
  const H = headerH + stageActs.length * (actH + actGap) + outerPad - actGap;
  const scale = Math.min(EXPORT_SCALE, 16000 / H);

  const canvas = document.createElement('canvas');
  canvas.width = Math.round(W * scale);
  canvas.height = Math.round(H * scale);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('画像を描画できません。');
  ctx.scale(scale, scale);
  ctx.imageSmoothingQuality = 'high';

  // フォント読み込みを待つ
  if (document.fonts && document.fonts.load) {
    await Promise.all([
      document.fonts.load('400 12px "Zen Old Mincho"', '幕あア'),
      document.fonts.load('700 12px "Zen Old Mincho"', '0123456789/'),
      document.fonts.load('900 28px "Zen Old Mincho"', '上演準備')
    ]).catch(() => {});
  }

  // 背景（サイトと同じ cover）
  // 背景が読めない場合は、原因が分かるようエラーにする（黙って画像なしで出力しない）
  let background;
  try {
    if (window.location.protocol === 'file:') await loadExportAssetData();
    background = await loadExportImage('./assets/ui/theater_background.png');
  } catch (error) {
    throw new Error(`背景画像を読み込めませんでした（${error.message}）`);
  }
  ctx.fillStyle = '#0f141d';
  ctx.fillRect(0, 0, W, H);
  if (background) drawExportCover(ctx, background, 0, 0, W, H);

  // ヘッダー帯
  ctx.fillStyle = c.headerBg;
  ctx.fillRect(0, 0, W, headerH - 14);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = c.accentGold;
  ctx.font = '900 28px "Zen Old Mincho", serif';
  ctx.fillText('上演準備', outerPad, 44);
  const difficulty = CONFIG_RULES.difficulties[currentSettings.difficulty];
  ctx.fillStyle = c.textSub;
  ctx.font = '400 14px "Zen Old Mincho", serif';
  ctx.fillText(`${difficulty ? difficulty.name : currentSettings.difficulty}　${new Date().toLocaleDateString('ja-JP')}`, outerPad, 68);

  // 使用回数・キャラ画像の事前読み込み
  const characterById = new Map(characters.map(ch => [ch.id, ch]));
  const usageCounts = {};
  const usedIds = new Set();
  stageActs.forEach(act => act.slots.forEach(id => {
    if (!id) return;
    usageCounts[id] = (usageCounts[id] || 0) + 1;
    usedIds.add(id);
  }));
  const imageSets = new Map();
  await Promise.all([...usedIds].map(async id => {
    const ch = characterById.get(id);
    if (!ch) return;
    const [avatar, element] = await Promise.all([
      loadExportImageSafe(getImgSrc(ch.image)),
      loadExportImageSafe(getElemImgSrc(ch.element), null)
    ]);
    imageSets.set(id, { avatar, element });
  }));

  // 各幕
  stageActs.forEach((act, actIndex) => {
    const top = headerH + actIndex * (actH + actGap);
    const left = outerPad;

    // パネル（.act-card）
    exportRoundRectPath(ctx, left, top, actW, actH, 6);
    ctx.fillStyle = c.selectBg;
    ctx.fill();
    ctx.save();
    exportRoundRectPath(ctx, left, top, actW, actH, 6);
    ctx.clip();
    ctx.fillStyle = c.sectionBg;
    ctx.fillRect(left, top, actW, actHeaderH);
    ctx.restore();
    exportRoundRectPath(ctx, left + 0.5, top + 0.5, actW - 1, actH - 1, 5.5);
    ctx.strokeStyle = c.panelBorder;
    ctx.lineWidth = 1;
    ctx.stroke();

    // 幕タイトル
    ctx.fillStyle = c.accentGold;
    ctx.font = '700 14.4px "Zen Old Mincho", serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`▼ ${act.name}`, left + 14, top + actHeaderH / 2);

    // 4枠
    for (let i = 0; i < 4; i++) {
      const x = left + actPad + i * (cardW + slotGap);
      const y = top + actHeaderH + actPad;
      const ch = characterById.get(act.slots[i]);
      if (!ch) {
        drawExportEmptySlot(ctx, x, y, i);
      } else {
        const gray = EXPORT_GRAY_NOT_IN_HAND && !stageHand.includes(ch.id);
        drawExportCard(ctx, x, y, ch, imageSets.get(ch.id) || {}, gray);
      }
    }
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error('PNGに変換できませんでした。'));
    }, 'image/png');
  });
}


function initTabs() {
  let titleScreenTimer = null;
  const titleScreenButton = document.querySelector('.title-tutorial-cta');
  const scheduleTitleScreenTransition = isTitleActive => {
    clearTimeout(titleScreenTimer);
    document.querySelector('.title-screen').classList.remove('show-tutorial-cta');
    titleScreenButton.disabled = true;
    titleScreenButton.setAttribute('aria-hidden', 'true');
    if (isTitleActive) {
      titleScreenTimer = setTimeout(() => {
        if (!document.getElementById('tab-title').classList.contains('active')) return;
        document.querySelector('.title-screen').classList.add('show-tutorial-cta');
        titleScreenButton.disabled = false;
        titleScreenButton.setAttribute('aria-hidden', 'false');
      }, 3000);
    }
  };

  document.querySelectorAll('.tab-btn, .header-title-group, .title-tutorial-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const activeTabButton = btn.matches('.title-tutorial-cta')
        ? document.querySelector(`.tab-btn[data-tab="${btn.dataset.tab}"]`)
        : btn;
      document.querySelectorAll('.tab-btn, .tab-content, .header-title-group').forEach(el => el.classList.remove('active'));
      activeTabButton.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      scheduleTitleScreenTransition(btn.dataset.tab === 'tab-title');
    });

    btn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        btn.click();
      }
    });
  });

  scheduleTitleScreenTransition(true);
}

// チュートリアル内の「＞」リンク／クイックガイド：クリックで該当タブ（または共有モーダル）へ移動する
// 固定ヘッダーの高さをCSS変数 --header-h に反映（チュートリアルの画面区切り・スクロール位置に使う）
function initHeaderHeight() {
  const header = document.querySelector('.app-header');
  if (!header) return;
  const update = () => document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
  update();
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(header);
  window.addEventListener('resize', update);
}

function initTutorialLinks() {
  document.querySelectorAll('#tab-tutorial [data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.goto;
      if (target === 'share') {
        document.getElementById('btn-data-transfer').click();
        return;
      }
      const tabButton = document.querySelector(`.tab-btn[data-tab="${target}"]`);
      if (!tabButton) return;
      tabButton.click();
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  });
}

function getImgSrc(filename) {
  if (!filename || filename.trim() === '') return './assets/ui/placeholder.png';
  if (filename.startsWith('data:image/')) return filename;
  return `./assets/characters/${filename}`;
}

document.addEventListener('error', event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.classList.contains('avatar') || image.dataset.fallbackApplied) return;
  image.dataset.fallbackApplied = 'true';
  image.src = './assets/ui/placeholder.png';
}, true);

function getElemImgSrc(elemKey) {
  return `./assets/elements/${elemKey || 'none'}.png`;
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
  let selectedImageFile = null;

  fileInput.addEventListener('change', (e) => {
    selectedImageFile = e.target.files[0] || null;
    if (selectedImageFile) {
      const name = selectedImageFile.name;
      fileLabel.innerText = `選択済: ${name}`;
    }
  });

  document.getElementById('form-add-char').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const image = selectedImageFile ? await imageFileToDataUrl(selectedImageFile) : '';
      const newChar = {
        id: 'char_' + Date.now(),
        name: document.getElementById('add-char-name').value,
        rarity: parseInt(document.getElementById('add-char-rarity').value),
        element: document.getElementById('add-char-element').value || null,
        image,
        owned: true
      };
      characters.push(newChar);
      e.target.reset();
      selectedImageFile = null;
      fileLabel.innerText = "＋ 画像を選択";
      imageNameInput.value = '';
      saveData();
    } catch (error) {
      console.error('キャラクター画像を登録できませんでした:', error);
      alert('画像の読み込みまたは保存に失敗しました。形式・サイズ（20MB以下）・ブラウザーの保存容量を確認してください。');
    }
  });

  ['filter-element', 'filter-ownership', 'filter-rarity'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderCharManagement);
  });

  initOwnershipTools();
}

async function imageFileToDataUrl(file) {
  if (!file.type.startsWith('image/')) {
    throw new Error('選択したファイルは画像ではありません。');
  }
  if (file.size > 20 * 1024 * 1024) {
    throw new Error('画像ファイルが20MBを超えています。');
  }

  const image = await createImageBitmap(file);
  try {
    const scale = Math.min(1, 512 / Math.max(image.width, image.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('画像を処理できません。');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/webp', 0.82);
  } finally {
    image.close();
  }
}

function renderCharManagement() {
  const container = document.getElementById('char-management-list');
  const elemF = document.getElementById('filter-element').value;
  const ownF = document.getElementById('filter-ownership').value;
  const rarF = document.getElementById('filter-rarity').value;
  const filtered = characters.filter(c => {
    if (elemF === 'none' && c.element !== null) return false;
    if (elemF !== 'all' && elemF !== 'none' && c.element !== elemF) return false;
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

function initOwnershipTools() {
  document.getElementById('btn-edit-ownership').addEventListener('click', openOwnershipEditor);
}

function validateOwnershipImport(data) {
  const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  if (!isRecord(data) || data.format !== 'imaginarium-theater-ownership' || data.version !== 1 ||
      !isRecord(data.ownership) ||
      !Object.values(data.ownership).every(owned => typeof owned === 'boolean')) {
    throw new Error('所持状況JSONの形式が正しくありません。');
  }
  return data.ownership;
}

function persistOwnership(updatedCharacters) {
  localStorage.setItem(`${STORAGE_PREFIX}chars`, JSON.stringify(updatedCharacters));
  characters = updatedCharacters;
  renderAll();
}

function openOwnershipEditor() {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  setCharacterSelectModalLayout(true);
  document.getElementById('modal-title').textContent = '所持状況を一括編集';

  body.innerHTML = `
    <div class="ownership-editor-tools">
      <label class="ownership-search-label" for="ownership-search">キャラクター名で絞り込み</label>
      <input id="ownership-search" class="input-text" type="search" placeholder="名前を入力">
    </div>
    <div id="ownership-editor-list" class="ownership-editor-list"></div>
    <div class="ownership-editor-bulk-actions">
      <span class="ownership-editor-bulk-title">一括変更</span>
      <span class="ownership-editor-bulk-help">検索結果に表示中のキャラクターをまとめて変更します。</span>
      <div class="ownership-editor-actions">
        <button id="btn-ownership-select-all" class="btn btn-secondary btn-sm" type="button">表示中をすべて所持</button>
        <button id="btn-ownership-clear-all" class="btn btn-secondary btn-sm" type="button">表示中をすべて未所持</button>
      </div>
    </div>
    <p id="ownership-editor-status" class="help-text ownership-editor-status" role="status"></p>
    <button id="btn-save-ownership" class="btn btn-primary" type="button">所持状況を保存</button>
  `;

  const list = body.querySelector('#ownership-editor-list');
  const search = body.querySelector('#ownership-search');
  const draftOwnership = new Map(characters.map(character => [character.id, character.owned]));
  const renderRows = () => {
    const query = search.value.trim().toLocaleLowerCase();
    list.replaceChildren();
    characters.forEach(character => {
      if (query && !character.name.toLocaleLowerCase().includes(query)) return;
      const card = document.createElement('div');
      card.setAttribute('role', 'button');
      card.tabIndex = 0;
      const owned = draftOwnership.get(character.id);
      card.className = `char-card ownership-editor-card star-${character.rarity}${owned ? ' active-selected' : ' ownership-unowned'}`;
      card.dataset.characterId = character.id;
      card.setAttribute('aria-pressed', String(owned));
      card.innerHTML = `
        <span class="elem-icon"><img src="${getElemImgSrc(character.element)}" class="elem-img"></span>
        <img src="${getImgSrc(character.image)}" class="avatar" alt="">
        <div class="name-label"></div>
        <span class="ownership-state"></span>
      `;
      card.querySelector('.name-label').textContent = character.name;
      card.querySelector('.ownership-state').textContent = owned ? '所持' : '未所持';
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
      card.addEventListener('click', () => {
        const owned = !draftOwnership.get(character.id);
        draftOwnership.set(character.id, owned);
        card.classList.toggle('active-selected', owned);
        card.classList.toggle('ownership-unowned', !owned);
        card.setAttribute('aria-pressed', String(owned));
        card.querySelector('.ownership-state').textContent = owned ? '所持' : '未所持';
      });
      list.append(card);
    });
  };
  const setVisibleOwnership = owned => {
    const cards = [...list.querySelectorAll('.ownership-editor-card')];
    if (cards.length === 0) return;
    const status = owned ? '所持' : '未所持';
    if (!confirm(`表示中の${cards.length}人をすべて「${status}」に変更しますか？`)) return;
    cards.forEach(card => {
      draftOwnership.set(card.dataset.characterId, owned);
      card.classList.toggle('active-selected', owned);
      card.classList.toggle('ownership-unowned', !owned);
      card.setAttribute('aria-pressed', String(owned));
      card.querySelector('.ownership-state').textContent = owned ? '所持' : '未所持';
    });
  };

  search.addEventListener('input', renderRows);
  body.querySelector('#btn-ownership-select-all').addEventListener('click', () => setVisibleOwnership(true));
  body.querySelector('#btn-ownership-clear-all').addEventListener('click', () => setVisibleOwnership(false));
  body.querySelector('#btn-save-ownership').addEventListener('click', () => {
    const updatedCharacters = characters.map(character => ({
      ...character,
      owned: draftOwnership.get(character.id)
    }));
    try {
      persistOwnership(updatedCharacters);
    } catch (error) {
      body.querySelector('#ownership-editor-status').textContent = `所持状況の保存に失敗しました: ${error.message}`;
      return;
    }
    overlay.classList.add('hidden');
  });

  renderRows();
  overlay.classList.remove('hidden');
}

function setCharacterSelectModalLayout(enabled, multiSelect = false) {
  const modalWindow = document.querySelector('#modal-overlay .modal-window');
  modalWindow.classList.remove('data-transfer-modal');
  modalWindow.classList.toggle('character-select-modal', enabled);
  modalWindow.classList.toggle('multi-select-modal', multiSelect);
}

window.openEditModal = function(id) {
  const c = characters.find(item => item.id === id);
  if (!c) return;

  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  setCharacterSelectModalLayout(false);
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
          <option value="" ${c.element === null ? 'selected' : ''}>未設定</option>
          ${Object.keys(CONFIG_RULES.elements).map(key => `
            <option value="${key}" ${c.element === key ? 'selected' : ''}>${CONFIG_RULES.elements[key]}</option>
          `).join('')}
        </select>
      </div>
      <div class="form-item">
        <label>画像ファイル</label>
        <label class="custom-file-upload">
          <input type="file" id="edit-char-file-input" accept="image/*">
          <span id="edit-char-file-label">${c.image ? '登録済み（変更できます）' : '＋ 画像を選択'}</span>
        </label>
        <input type="hidden" id="edit-char-image-name" value="${c.image || ''}">
        <small class="help-text">画像はこのブラウザーに保存されます（長辺512pxに縮小）。</small>
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

  let selectedImageFile = null;
  document.getElementById('edit-char-file-input').addEventListener('change', (e) => {
    selectedImageFile = e.target.files[0] || null;
    if (selectedImageFile) {
      const name = selectedImageFile.name;
      document.getElementById('edit-char-file-label').innerText = `変更: ${name}`;
    }
  });

  document.getElementById('form-edit-char').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const image = selectedImageFile
        ? await imageFileToDataUrl(selectedImageFile)
        : document.getElementById('edit-char-image-name').value;
      c.name = document.getElementById('edit-char-name').value;
      c.rarity = parseInt(document.getElementById('edit-char-rarity').value);
      c.element = document.getElementById('edit-char-element').value || null;
      c.image = image;
      c.owned = currentOwned;
      overlay.classList.add('hidden');
      saveData();
    } catch (error) {
      console.error('キャラクター画像を更新できませんでした:', error);
      alert('画像の読み込みまたは保存に失敗しました。形式・サイズ（20MB以下）・ブラウザーの保存容量を確認してください。');
    }
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
let teamSelectionContext = null;
let selectedTeamCharIds = [];

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
      name: `編成 ${sets.length + 1}`,
      isOpen: true,
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
  const requiredSetsLabel = document.getElementById('display-required-sets');
  if (requiredSetsLabel) requiredSetsLabel.innerText = `必要な編成数 : ${diffObj.sets}`;
  
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
        <button class="set-collapse-toggle" aria-expanded="${s.isOpen}" aria-controls="set-slots-main-${setIndex}" aria-label="${s.isOpen ? 'パーティを折り畳む' : 'パーティを展開'}" title="${s.isOpen ? '折り畳む' : '展開'}" onclick="event.stopPropagation(); toggleSetOpen(${setIndex})">${s.isOpen ? '▼' : '▶'}</button>
        <input type="text" value="${s.name}" onchange="updateSetName(${setIndex}, this.value)">
        <div class="set-header-actions">
          <button class="btn btn-secondary btn-sm" onclick="openTeamSelectionModal('set', ${setIndex})">選択</button>
          <button class="btn btn-danger btn-sm" onclick="removeSet(${setIndex})">削除</button>
        </div>
      </div>
      <div id="set-slots-main-${setIndex}" class="set-slots ${s.isOpen ? '' : 'hidden'}">
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

window.toggleSetOpen = function(setIndex) {
  sets[setIndex].isOpen = !sets[setIndex].isOpen;
  saveData();
};

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
  const btnActRewind = document.getElementById('btn-act-rewind');
  const btnResetStage = document.getElementById('btn-reset-stage');
  if (btnActRewind) {
    btnActRewind.addEventListener('click', () => {
      const rewindTarget = getRewindTargetPointer();
      if (rewindTarget !== currentActPointer) {
        currentActPointer = rewindTarget;
        saveData();
      }
    });
  }
  if (btnResetStage) {
    btnResetStage.addEventListener('click', () => {
      if (!confirm('上演準備の配置と手札を初期状態にリセットしますか？')) return;
      const todayCastIds = getTodayCastIds();
      stageActs = stageActs.map(act => ({ ...act, slots: act.slots.map(() => null) }));
      stageHand = currentSettings.openingCast.filter(id => id && todayCastIds.includes(id));
      currentActPointer = 1;
      saveData();
    });
  }

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
    const btnRewind = document.getElementById('btn-act-rewind');
    if (btnPrev) btnPrev.disabled = currentActPointer <= 1;
    if (btnNext) btnNext.disabled = currentActPointer >= maxPointer;
    if (btnRewind) btnRewind.disabled = getRewindTargetPointer() === currentActPointer;
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

  // 1. 中央列：公演プラン（手札に入っていないキャラはグレー表示）
  planContainer.innerHTML = sets.map((s, setIndex) => `
    <div class="set-card">
      <div class="set-header">
        <button class="set-collapse-toggle" aria-expanded="${s.isOpen}" aria-controls="set-slots-stage-${setIndex}" aria-label="${s.isOpen ? 'パーティを折り畳む' : 'パーティを展開'}" title="${s.isOpen ? '折り畳む' : '展開'}" onclick="toggleSetOpen(${setIndex})">${s.isOpen ? '▼' : '▶'}</button>
        <input type="text" value="${s.name}" readonly>
      </div>
      <div id="set-slots-stage-${setIndex}" class="set-slots ${s.isOpen ? '' : 'hidden'}">
        ${s.slots.map((slot) => {
          const char = characters.find(c => c.id === slot.charId);
          const grayClass = char ? grayIfNotInHand(char.id) : '';
          return `
            <div class="set-slot-item">
              <div class="party-slot ${char ? 'filled star-' + char.rarity : ''} ${grayClass}"
                   draggable="${!!char}"
                   data-plan-char-id="${char ? char.id : ''}">
                ${char ? `
                  <span class="vitality-badge">${vitalityMap[char.id] || 0}/2</span>
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

  // 2. 左列：出演可能キャスト
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
          <button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openTeamSelectionModal('act', ${actIdx})">選択</button>
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
  const act = stageActs[actIdx];
  act.isOpen = !act.isOpen;

  const actCard = document.querySelectorAll('#stage-acts-container .act-card')[actIdx];
  const title = actCard.querySelector('.act-title-text');
  const charNames = act.slots.map(id => {
    const character = characters.find(item => item.id === id);
    return character ? character.name : '—';
  });
  title.textContent = `${act.isOpen ? '▼' : '▶'} ${act.name} ${charNames.join('・')}`;
  actCard.querySelector('.act-body').classList.toggle('hidden', !act.isOpen);

  localStorage.setItem(`${STORAGE_PREFIX}stage_acts`, JSON.stringify(stageActs));
};

// 上演準備の枠：クリックで「本日のキャスト」から選択（公演プランと同じ方式）
window.openActSlotSelectModal = function(actIdx, slotIdx) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  setCharacterSelectModalLayout(true);
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

  document.querySelectorAll('#stage-plan-container .party-slot[draggable="true"]').forEach(slot => {
    slot.addEventListener('dragstart', (e) => {
      beginDrag(e, 'stage-plan-char');
      e.dataTransfer.setData('charId', slot.dataset.planCharId);
    });

    slot.addEventListener('dragend', () => {
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
      // 手札・公演プランからの配置、または幕内キャラの移動のみ受け付ける
      if (!isDragKind('stage-hand-char', 'stage-plan-char', 'act-slot-char')) return;
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

      if (type === 'stage-hand-char' || type === 'stage-plan-char') {
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
  setCharacterSelectModalLayout(true);
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
  setCharacterSelectModalLayout(true);
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
  setCharacterSelectModalLayout(false);

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
  setCharacterSelectModalLayout(true);
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
      if (c.id === selectedId) return true;
      if (!c.element || !currentSettings.activeElements.includes(c.element)) return false;
      return !chosenIds.has(c.id);
    });
  } else if (type === 'special') {
    selectedId = currentSettings.specialCast[targetIndex];
    candidates = characters.filter(c => {
      if (c.id === selectedId) return true;
      if (!c.element || currentSettings.activeElements.includes(c.element)) return false;
      return !chosenIds.has(c.id);
    });
  } else if (type === 'support') {
    selectedId = currentSettings.supportCast;
    candidates = characters.filter(c => {
      if (c.id === selectedId) return true;
      if (c.owned) return false;
      const isSpecialCast = currentSettings.specialCast.includes(c.id);
      if (!c.element || (!isSpecialCast && !currentSettings.activeElements.includes(c.element))) return false;
      if (currentSettings.openingCast.includes(c.id)) return false;
      return isSpecialCast || !chosenIds.has(c.id);
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

window.openTeamSelectionModal = function(type, targetIndex) {
  const target = type === 'set' ? sets[targetIndex] : stageActs[targetIndex];
  if (!target) return;

  const todayCastIds = new Set(getTodayCastIds());
  const currentCharIds = target.slots.map(slot => type === 'set' ? slot.charId : slot);
  const currentCharIdSet = new Set(currentCharIds.filter(Boolean));
  const vitalityMap = type === 'act' ? calculateVitality() : {};

  let assignedElsewhere = new Set();
  if (type === 'set') {
    assignedElsewhere = new Set(
      sets.flatMap((set, setIdx) => setIdx === targetIndex ? [] : set.slots.map(slot => slot.charId)).filter(Boolean)
    );
  }

  const allowedCharIds = new Set(characters
    .filter(char => {
      if (!todayCastIds.has(char.id)) return false;
      if (currentCharIdSet.has(char.id)) return true;
      if (type === 'set') return !assignedElsewhere.has(char.id);
      return (vitalityMap[char.id] || 0) < 2;
    })
    .map(char => char.id));

  teamSelectionContext = { type, targetIndex, slotCount: target.slots.length, allowedCharIds };
  selectedTeamCharIds = [...new Set(currentCharIds.filter(charId => charId && allowedCharIds.has(charId)))];

  const body = document.getElementById('modal-body');
  setCharacterSelectModalLayout(true, true);
  document.getElementById('modal-title').innerText = `${target.name}の編成を選択`;
  body.innerHTML = characters
    .filter(char => todayCastIds.has(char.id))
    .map(char => {
      const selectedIndex = selectedTeamCharIds.indexOf(char.id);
      const isSelected = selectedIndex !== -1;
      const isUnavailable = !allowedCharIds.has(char.id);
      return `
        <div class="char-card multi-select-card star-${char.rarity} ${isSelected ? 'active-selected' : ''} ${isUnavailable ? 'assigned' : ''}"
             data-char-id="${char.id}"
             ${isUnavailable ? '' : `onclick="toggleTeamSelectionChar('${char.id}')"`}>
          <span class="team-selection-order">${isSelected ? selectedIndex + 1 : ''}</span>
          <span class="elem-icon"><img src="${getElemImgSrc(char.element)}" class="elem-img"></span>
          <img src="${getImgSrc(char.image)}" class="avatar">
          <div class="name-label">${char.name}</div>
        </div>
      `;
    }).join('') + `
    <div class="team-selection-actions">
      <span class="team-selection-count" id="team-selection-count"></span>
      <button class="btn btn-primary" onclick="confirmTeamSelection()">登録</button>
    </div>
  `;
  updateTeamSelectionCount();
  document.getElementById('modal-overlay').classList.remove('hidden');
};

window.toggleTeamSelectionChar = function(charId) {
  if (!teamSelectionContext || !teamSelectionContext.allowedCharIds.has(charId)) return;

  const selectedIndex = selectedTeamCharIds.indexOf(charId);
  if (selectedIndex !== -1) {
    selectedTeamCharIds.splice(selectedIndex, 1);
  } else if (selectedTeamCharIds.length < teamSelectionContext.slotCount) {
    selectedTeamCharIds.push(charId);
  }

  document.querySelectorAll('#modal-body .multi-select-card').forEach(card => {
    const order = selectedTeamCharIds.indexOf(card.dataset.charId);
    card.classList.toggle('active-selected', order !== -1);
    card.querySelector('.team-selection-order').textContent = order === -1 ? '' : String(order + 1);
  });
  updateTeamSelectionCount();
};

function updateTeamSelectionCount() {
  if (!teamSelectionContext) return;
  const count = document.getElementById('team-selection-count');
  if (count) count.textContent = `${selectedTeamCharIds.length} / ${teamSelectionContext.slotCount}人`;
}

window.confirmTeamSelection = function() {
  if (!teamSelectionContext) return;
  const { type, targetIndex, slotCount } = teamSelectionContext;
  const selectedIds = selectedTeamCharIds.slice(0, slotCount);

  if (type === 'set') {
    sets[targetIndex].slots.forEach((slot, index) => {
      slot.charId = selectedIds[index] || null;
    });
  } else {
    stageActs[targetIndex].slots = Array.from({ length: slotCount }, (_, index) => selectedIds[index] || null);
  }

  teamSelectionContext = null;
  selectedTeamCharIds = [];
  document.getElementById('modal-overlay').classList.add('hidden');
  setCharacterSelectModalLayout(false);
  saveData();
};

window.openSlotSelectModal = function(setIdx, slotIdx) {
  const overlay = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  setCharacterSelectModalLayout(true);
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

  const canReuseSpecialCastForSupport = type === 'support'
    && currentSettings.specialCast.includes(charId)
    && !currentSettings.openingCast.includes(charId);
  if (selectedIds.has(charId) && charId !== currentSelected && !canReuseSpecialCastForSupport) {
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

// iPad用：公演タブの左右ペイン切り替え（表示のみ。768〜1400px以外ではCSSでタブごと非表示）
// 左右それぞれのタブで、出演可能キャスト(0)／公演プラン(1)／上演準備(2) のどれを表示するか選ぶ。
// 同じパネルを左右に出すことはできないため、相手側が表示中のパネルを選んだ場合は入れ替える。
(function initIpadStageTabs() {
  const grid = document.querySelector('.stage-3col-grid');
  if (!grid) return;
  const panels = [...grid.querySelectorAll(':scope > .stage-col')];
  const navs = {
    left: grid.querySelector('.ipad-stage-tabs[data-pane="left"]'),
    right: grid.querySelector('.ipad-stage-tabs[data-pane="right"]')
  };
  if (!navs.left || !navs.right) return;
  const state = { left: 0, right: 2 };

  const render = () => {
    panels.forEach((panel, i) => {
      if (state.left === i) panel.dataset.ipadPane = 'left';
      else if (state.right === i) panel.dataset.ipadPane = 'right';
      else delete panel.dataset.ipadPane;
    });
    Object.entries(navs).forEach(([pane, nav]) => {
      nav.querySelectorAll('.ipad-stage-tab').forEach((btn, i) => {
        const active = state[pane] === i;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    });
  };

  Object.entries(navs).forEach(([pane, nav]) => {
    const other = pane === 'left' ? 'right' : 'left';
    nav.querySelectorAll('.ipad-stage-tab').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (state[pane] === i) return;
        if (state[other] === i) state[other] = state[pane];
        state[pane] = i;
        render();
      });
    });
  });

  render();
})();

// スマホ用サブタブ：キャスト管理（本日のキャスト／公演プラン）、公演（出演可能キャスト／公演プラン／上演準備）
// 表示の切り替えのみを行い、データや描画処理には触れない。PC幅ではCSSでナビごと非表示になる。
(function initMobileSubnav() {
  document.querySelectorAll('[data-mobile-subnav]').forEach(nav => {
    const tab = nav.parentElement;
    const panels = [...tab.querySelectorAll(':scope > .main-layout-grid > .card-panel, :scope > .stage-3col-grid > .stage-col')];
    const buttons = [...nav.querySelectorAll('.mobile-subnav-btn')];
    const show = index => {
      panels.forEach((panel, i) => panel.classList.toggle('mobile-panel-active', i === index));
      buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
    };
    buttons.forEach((btn, i) => btn.addEventListener('click', () => {
      show(i);
      window.scrollTo({ top: 0 });
    }));
    show(0);
  });
})();
