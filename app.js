// Family terms data
const familyTermsData = [
  {
    "category": "Immediate Family",
    "terms": [
      {"english": "father", "dutch": "vader", "traditional": "爸爸", "simplified": "爸爸", "pinyin": "bàba", "mandarin": "bàba", "cantonese": "bàhbā"},
      {"english": "mother", "dutch": "moeder", "traditional": "媽媽", "simplified": "妈妈", "pinyin": "māma", "mandarin": "māma", "cantonese": "màhmà"},
      {"english": "elder brother", "dutch": "oudere broer", "traditional": "哥哥", "simplified": "哥哥", "pinyin": "gēge", "mandarin": "gēge", "cantonese": "gòhgō"},
      {"english": "younger brother", "dutch": "jongere broer", "traditional": "弟弟", "simplified": "弟弟", "pinyin": "dìdi", "mandarin": "dìdi", "cantonese": "dàihdái"},
      {"english": "elder sister", "dutch": "oudere zus", "traditional": "姐姐", "simplified": "姐姐", "pinyin": "jiějie", "mandarin": "jiějie", "cantonese": "jèhjè"},
      {"english": "younger sister", "dutch": "jongere zus", "traditional": "妹妹", "simplified": "妹妹", "pinyin": "mèimei", "mandarin": "mèimei", "cantonese": "mùihmúi"},
      {"english": "son", "dutch": "zoon", "traditional": "兒子", "simplified": "儿子", "pinyin": "érzi", "mandarin": "érzi", "cantonese": "jái"},
      {"english": "daughter", "dutch": "dochter", "traditional": "女兒", "simplified": "女儿", "pinyin": "nǚ'ér", "mandarin": "nǚ'ér", "cantonese": "néui"},
      {"english": "husband", "dutch": "echtgenoot", "traditional": "丈夫", "simplified": "丈夫", "pinyin": "zhàngfu", "mandarin": "zhàngfu", "cantonese": "jeuhngfu"},
      {"english": "wife", "dutch": "echtgenote", "traditional": "妻子", "simplified": "妻子", "pinyin": "qīzi", "mandarin": "qīzi", "cantonese": "chàjí"}
    ]
  },
  {
    "category": "Paternal Family",
    "terms": [
      {"english": "paternal grandfather", "dutch": "opa (vaderskant)", "traditional": "爺爺", "simplified": "爷爷", "pinyin": "yéye", "mandarin": "yéye", "cantonese": "yèhyèh"},
      {"english": "paternal grandmother", "dutch": "oma (vaderskant)", "traditional": "奶奶", "simplified": "奶奶", "pinyin": "nǎinai", "mandarin": "nǎinai", "cantonese": "nàaihpòh"},
      {"english": "father's elder brother", "dutch": "oudere broer van vader", "traditional": "伯伯", "simplified": "伯伯", "pinyin": "bóbo", "mandarin": "bóbo", "cantonese": "baakbaak"},
      {"english": "father's younger brother", "dutch": "jongere broer van vader", "traditional": "叔叔", "simplified": "叔叔", "pinyin": "shūshu", "mandarin": "shūshu", "cantonese": "sūksūk"},
      {"english": "father's sister", "dutch": "zus van vader", "traditional": "姑姑", "simplified": "姑姑", "pinyin": "gūgu", "mandarin": "gūgu", "cantonese": "gūgū"},
      {"english": "elder male cousin (paternal)", "dutch": "oudere neef (vaderskant)", "traditional": "堂兄", "simplified": "堂兄", "pinyin": "táng xiōng", "mandarin": "táng xiōng", "cantonese": "tòhnghìng"},
      {"english": "younger male cousin (paternal)", "dutch": "jongere neef (vaderskant)", "traditional": "堂弟", "simplified": "堂弟", "pinyin": "táng dì", "mandarin": "táng dì", "cantonese": "tòhngdai"},
      {"english": "elder female cousin (paternal)", "dutch": "oudere nicht (vaderskant)", "traditional": "堂姐", "simplified": "堂姐", "pinyin": "táng jiě", "mandarin": "táng jiě", "cantonese": "tòhngjí"},
      {"english": "younger female cousin (paternal)", "dutch": "jongere nicht (vaderskant)", "traditional": "堂妹", "simplified": "堂妹", "pinyin": "táng mèi", "mandarin": "táng mèi", "cantonese": "tòhngmúi"}
    ]
  },
  {
    "category": "Maternal Family", 
    "terms": [
      {"english": "maternal grandfather", "dutch": "opa (moederskant)", "traditional": "外公", "simplified": "外公", "pinyin": "wàigōng", "mandarin": "wàigōng", "cantonese": "ngòihgūng"},
      {"english": "maternal grandmother", "dutch": "oma (moederskant)", "traditional": "外婆", "simplified": "外婆", "pinyin": "wàipó", "mandarin": "wàipó", "cantonese": "ngòihpòh"},
      {"english": "mother's brother", "dutch": "broer van moeder", "traditional": "舅舅", "simplified": "舅舅", "pinyin": "jiùjiu", "mandarin": "jiùjiu", "cantonese": "kàukàu"},
      {"english": "mother's sister", "dutch": "zus van moeder", "traditional": "姨媽", "simplified": "姨妈", "pinyin": "yímā", "mandarin": "yímā", "cantonese": "yìhmā"},
      {"english": "elder male cousin (maternal)", "dutch": "oudere neef (moederskant)", "traditional": "表哥", "simplified": "表哥", "pinyin": "biǎo gē", "mandarin": "biǎo gē", "cantonese": "bíugō"},
      {"english": "younger male cousin (maternal)", "dutch": "jongere neef (moederskant)", "traditional": "表弟", "simplified": "表弟", "pinyin": "biǎo dì", "mandarin": "biǎo dì", "cantonese": "bíudai"},
      {"english": "elder female cousin (maternal)", "dutch": "oudere nicht (moederskant)", "traditional": "表姐", "simplified": "表姐", "pinyin": "biǎo jiě", "mandarin": "biǎo jiě", "cantonese": "bíují"},
      {"english": "younger female cousin (maternal)", "dutch": "jongere nicht (moederskant)", "traditional": "表妹", "simplified": "表妹", "pinyin": "biǎo mèi", "mandarin": "biǎo mèi", "cantonese": "bíumúi"}
    ]
  },
  {
    "category": "In-laws & Other Relatives",
    "terms": [
      {"english": "husband's father", "dutch": "schoonvader (man)", "traditional": "公公", "simplified": "公公", "pinyin": "gōnggong", "mandarin": "gōnggong", "cantonese": "gūnggūng"},
      {"english": "husband's mother", "dutch": "schoonmoeder (man)", "traditional": "婆婆", "simplified": "婆婆", "pinyin": "pópo", "mandarin": "pópo", "cantonese": "pòhpòh"},
      {"english": "wife's father", "dutch": "schoonvader (vrouw)", "traditional": "岳父", "simplified": "岳父", "pinyin": "yuèfù", "mandarin": "yuèfù", "cantonese": "ngohkfú"},
      {"english": "wife's mother", "dutch": "schoonmoeder (vrouw)", "traditional": "岳母", "simplified": "岳母", "pinyin": "yuèmǔ", "mandarin": "yuèmǔ", "cantonese": "ngohkmóu"},
      {"english": "elder sister's husband", "dutch": "man van oudere zus", "traditional": "姐夫", "simplified": "姐夫", "pinyin": "jiěfū", "mandarin": "jiěfū", "cantonese": "jífū"},
      {"english": "younger sister's husband", "dutch": "man van jongere zus", "traditional": "妹夫", "simplified": "妹夫", "pinyin": "mèifū", "mandarin": "mèifū", "cantonese": "mùihfū"},
      {"english": "elder brother's wife", "dutch": "vrouw van oudere broer", "traditional": "嫂子", "simplified": "嫂子", "pinyin": "sǎozi", "mandarin": "sǎozi", "cantonese": "sóují"},
      {"english": "younger brother's wife", "dutch": "vrouw van jongere broer", "traditional": "弟媳", "simplified": "弟媳", "pinyin": "dìxí", "mandarin": "dìxí", "cantonese": "daimòuh"},
      {"english": "nephew (brother's son)", "dutch": "neef (zoon van broer)", "traditional": "侄子", "simplified": "侄子", "pinyin": "zhízi", "mandarin": "zhízi", "cantonese": "jaatjí"},
      {"english": "niece (brother's daughter)", "dutch": "nicht (dochter van broer)", "traditional": "侄女", "simplified": "侄女", "pinyin": "zhínǚ", "mandarin": "zhínǚ", "cantonese": "jatnéui"},
      {"english": "nephew (sister's son)", "dutch": "neef (zoon van zus)", "traditional": "外甥", "simplified": "外甥", "pinyin": "wàisheng", "mandarin": "wàisheng", "cantonese": "ngòihsāang"},
      {"english": "niece (sister's daughter)", "dutch": "nicht (dochter van zus)", "traditional": "外甥女", "simplified": "外甥女", "pinyin": "wàishengnǚ", "mandarin": "wàishengnǚ", "cantonese": "ngòihsāangnéui"}
    ]
  }
];

// Translation data
const translations = {
  en: {
    site_title: "The Complicated Chinese Family Tree",
    nav_family_tree: "Interactive Family Tree",
    nav_comparison: "Language Comparison",
    nav_quiz: "Quiz Section",
    nav_cultural: "Cultural Context",
    nav_about: "About",
    family_tree_title: "Interactive Family Tree",
    paternal_side: "Paternal Side",
    maternal_side: "Maternal Side",
    immediate_family: "Immediate Family",
    comparison_title: "Language Comparison",
    all_categories: "All Categories",
    paternal_family: "Paternal Family",
    maternal_family: "Maternal Family",
    inlaws_relatives: "In-laws & Other Relatives",
    english: "English",
    dutch: "Dutch",
    traditional: "Traditional",
    simplified: "Simplified",
    mandarin: "Mandarin",
    cantonese: "Cantonese",
    quiz_title: "Quiz Section",
    quiz_intro: "Test your knowledge of Chinese family relationships!",
    start_quiz: "Start Quiz",
    question: "Question",
    of: "of",
    next_question: "Next Question",
    quiz_complete: "Quiz Complete!",
    your_score: "Your score:",
    out_of: "/10",
    restart_quiz: "Restart Quiz",
    cultural_title: "Cultural Context",
    confucian_values: "Confucian Values and Filial Piety",
    confucian_description: "Chinese family terminology reflects deep-rooted Confucian values, particularly the concept of filial piety (孝). The precise distinctions between family relationships emphasize respect for elders and the importance of family hierarchy.",
    historical_background: "Historical Background",
    historical_description: "The Chinese family system has evolved over thousands of years, with terminology that distinguishes between paternal and maternal relatives, birth order, and generational relationships. This complexity reflects the traditional importance of clan structures in Chinese society.",
    western_comparison: "Western vs Chinese Family Terms",
    western_comparison_description: "While Western languages typically have one word for \"uncle\" or \"aunt,\" Chinese distinguishes between paternal and maternal relatives, older and younger siblings, and even the spouse's side of the family. This creates a rich but complex vocabulary that precisely defines relationships.",
    about_title: "About",
    complexity_title: "The Complexity of Chinese Family Relationships",
    complexity_description: "Chinese family terminology is notably more complex than most Western languages. Where English has 2 terms for uncles and aunts, Chinese has over 8 specific terms depending on the relationship.",
    family_terms: "Family Terms",
    languages: "Languages",
    dialects: "Chinese Dialects",
    footer_text: "© 2025 The Complicated Chinese Family Tree. Educational resource for understanding Chinese family relationships.",
    close: "Close",
    self: "Self",
    correct: "Correct!",
    incorrect: "Incorrect!",
    correct_answer: "Correct answer:"
  },
  nl: {
    site_title: "De Gecompliceerde Chinese Familieboom",
    nav_family_tree: "Interactieve Familieboom",
    nav_comparison: "Taalvergelijking",
    nav_quiz: "Quiz Sectie",
    nav_cultural: "Culturele Context",
    nav_about: "Over",
    family_tree_title: "Interactieve Familieboom",
    paternal_side: "Vaderskant",
    maternal_side: "Moederskant",
    immediate_family: "Directe Familie",
    comparison_title: "Taalvergelijking",
    all_categories: "Alle Categorieën",
    paternal_family: "Familie Vaderskant",
    maternal_family: "Familie Moederskant",
    inlaws_relatives: "Schoonfamilie & Andere Verwanten",
    english: "Engels",
    dutch: "Nederlands",
    traditional: "Traditioneel",
    simplified: "Vereenvoudigd",
    mandarin: "Mandarijn",
    cantonese: "Kantonees",
    quiz_title: "Quiz Sectie",
    quiz_intro: "Test je kennis van Chinese familierelaties!",
    start_quiz: "Start Quiz",
    question: "Vraag",
    of: "van",
    next_question: "Volgende Vraag",
    quiz_complete: "Quiz Voltooid!",
    your_score: "Je score:",
    out_of: "/10",
    restart_quiz: "Herstart Quiz",
    cultural_title: "Culturele Context",
    confucian_values: "Confuciaanse Waarden en Kinderlijke Plicht",
    confucian_description: "Chinese familieterminologie weerspiegelt diepgewortelde Confuciaanse waarden, vooral het concept van kinderlijke plicht (孝). De precieze onderscheidingen tussen familierelaties benadrukken respect voor ouderen en het belang van familiehiërarchie.",
    historical_background: "Historische Achtergrond",
    historical_description: "Het Chinese familiesysteem heeft zich duizenden jaren ontwikkeld, met terminologie die onderscheid maakt tussen verwanten van vaders- en moederskant, geboorteorde en generatierelaties. Deze complexiteit weerspiegelt het traditionele belang van clanstructuren in de Chinese samenleving.",
    western_comparison: "Westerse vs Chinese Familietermen",
    western_comparison_description: "Terwijl westerse talen meestal één woord hebben voor \"oom\" of \"tante,\" maakt het Chinees onderscheid tussen verwanten van vaders- en moederskant, oudere en jongere broers/zussen, en zelfs de kant van de echtgenoot. Dit creëert een rijke maar complexe vocabulaire die relaties precies definieert.",
    about_title: "Over",
    complexity_title: "De Complexiteit van Chinese Familierelaties",
    complexity_description: "Chinese familieterminologie is aanzienlijk complexer dan de meeste westerse talen. Waar het Engels 2 termen heeft voor ooms en tantes, heeft het Chinees meer dan 8 specifieke termen afhankelijk van de relatie.",
    family_terms: "Familietermen",
    languages: "Talen",
    dialects: "Chinese Dialecten",
    footer_text: "© 2025 De Gecompliceerde Chinese Familieboom. Educatieve bron voor het begrijpen van Chinese familierelaties.",
    close: "Sluiten",
    self: "Zelf",
    correct: "Correct!",
    incorrect: "Incorrect!",
    correct_answer: "Juiste antwoord:"
  },
  "zh-traditional": {
    site_title: "複雜的中文家族譜",
    nav_family_tree: "互動家族樹",
    nav_comparison: "語言比較",
    nav_quiz: "問答環節",
    nav_cultural: "文化背景",
    nav_about: "關於",
    family_tree_title: "互動家族樹",
    paternal_side: "父系",
    maternal_side: "母系",
    immediate_family: "直系親屬",
    comparison_title: "語言比較",
    all_categories: "所有類別",
    paternal_family: "父系家族",
    maternal_family: "母系家族",
    inlaws_relatives: "姻親及其他親屬",
    english: "英文",
    dutch: "荷蘭文",
    traditional: "繁體",
    simplified: "簡體",
    mandarin: "普通話",
    cantonese: "粵語",
    quiz_title: "問答環節",
    quiz_intro: "測試您對中文家族關係的認識！",
    start_quiz: "開始問答",
    question: "問題",
    of: "共",
    next_question: "下一題",
    quiz_complete: "問答完成！",
    your_score: "您的分數：",
    out_of: "/10",
    restart_quiz: "重新開始",
    cultural_title: "文化背景",
    confucian_values: "儒家價值觀與孝道",
    confucian_description: "中文家族術語反映了深層的儒家價值觀，特別是孝道概念。家族關係的精確區分強調對長輩的尊重和家族階層的重要性。",
    historical_background: "歷史背景",
    historical_description: "中國家族制度經過數千年的發展，其術語區分父系和母系親屬、出生順序和世代關係。這種複雜性反映了宗族結構在中國社會中的傳統重要性。",
    western_comparison: "西方與中文家族術語比較",
    western_comparison_description: "西方語言通常只有一個詞來表示「叔叔」或「阿姨」，而中文則區分父系和母系親屬、兄姐弟妹，甚至配偶的親屬。這創造了豐富但複雜的詞彙，精確地定義了關係。",
    about_title: "關於",
    complexity_title: "中文家族關係的複雜性",
    complexity_description: "中文家族術語明顯比大多數西方語言複雜。英文只有2個詞表示叔叔阿姨，而中文根據關係有超過8個特定術語。",
    family_terms: "家族術語",
    languages: "語言",
    dialects: "中文方言",
    footer_text: "© 2025 複雜的中文家族譜。了解中文家族關係的教育資源。",
    close: "關閉",
    self: "自己",
    correct: "正確！",
    incorrect: "錯誤！",
    correct_answer: "正確答案："
  },
  "zh-simplified": {
    site_title: "复杂的中文家族谱",
    nav_family_tree: "互动家族树",
    nav_comparison: "语言比较",
    nav_quiz: "问答环节",
    nav_cultural: "文化背景",
    nav_about: "关于",
    family_tree_title: "互动家族树",
    paternal_side: "父系",
    maternal_side: "母系",
    immediate_family: "直系亲属",
    comparison_title: "语言比较",
    all_categories: "所有类别",
    paternal_family: "父系家族",
    maternal_family: "母系家族",
    inlaws_relatives: "姻亲及其他亲属",
    english: "英文",
    dutch: "荷兰文",
    traditional: "繁体",
    simplified: "简体",
    mandarin: "普通话",
    cantonese: "粤语",
    quiz_title: "问答环节",
    quiz_intro: "测试您对中文家族关系的认识！",
    start_quiz: "开始问答",
    question: "问题",
    of: "共",
    next_question: "下一题",
    quiz_complete: "问答完成！",
    your_score: "您的分数：",
    out_of: "/10",
    restart_quiz: "重新开始",
    cultural_title: "文化背景",
    confucian_values: "儒家价值观与孝道",
    confucian_description: "中文家族术语反映了深层的儒家价值观，特别是孝道概念。家族关系的精确区分强调对长辈的尊重和家族阶层的重要性。",
    historical_background: "历史背景",
    historical_description: "中国家族制度经过数千年的发展，其术语区分父系和母系亲属、出生顺序和世代关系。这种复杂性反映了宗族结构在中国社会中的传统重要性。",
    western_comparison: "西方与中文家族术语比较",
    western_comparison_description: "西方语言通常只有一个词来表示「叔叔」或「阿姨」，而中文则区分父系和母系亲属、兄姐弟妹，甚至配偶的亲属。这创造了丰富但复杂的词汇，精确地定义了关系。",
    about_title: "关于",
    complexity_title: "中文家族关系的复杂性",
    complexity_description: "中文家族术语明显比大多数西方语言复杂。英文只有2个词表示叔叔阿姨，而中文根据关系有超过8个特定术语。",
    family_terms: "家族术语",
    languages: "语言",
    dialects: "中文方言",
    footer_text: "© 2025 复杂的中文家族谱。了解中文家族关系的教育资源。",
    close: "关闭",
    self: "自己",
    correct: "正确！",
    incorrect: "错误！",
    correct_answer: "正确答案："
  }
};

// Global variables
let currentLanguage = 'en';
let currentQuiz = [];
let currentQuestionIndex = 0;
let quizScore = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguageSelector();
  initializeFamilyTree();
  initializeComparisonTable();
  initializeNavigation();
  updateLanguage(currentLanguage);
});

// Language handling
function initializeLanguageSelector() {
  const languageSelect = document.getElementById('languageSelect');
  languageSelect.addEventListener('change', function() {
    currentLanguage = this.value;
    updateLanguage(currentLanguage);
  });
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      // Special handling for option elements to preserve their structure
      if (element.tagName === 'OPTION') {
        // Don't update the language selector options themselves
        if (element.parentElement.id !== 'languageSelect') {
          element.textContent = translations[lang][key];
        }
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  updateFamilyTreeTerms(lang);
  updateComparisonTable();
  updateCategoryFilterOptions(lang);
  document.documentElement.lang = lang.split('-')[0];
}

function updateCategoryFilterOptions(lang) {
  const categoryFilter = document.getElementById('categoryFilter');
  const options = categoryFilter.querySelectorAll('option');
  
  options.forEach(option => {
    const key = option.getAttribute('data-key');
    if (key && translations[lang] && translations[lang][key]) {
      option.textContent = translations[lang][key];
    }
  });
}

function updateFamilyTreeTerms(lang) {
  const members = document.querySelectorAll('.family-member .term');
  members.forEach(member => {
    const termData = getTermDataByEnglish(member.parentElement.parentElement.getAttribute('data-term'));
    if (termData) {
      switch(lang) {
        case 'en':
          member.textContent = termData.english;
          break;
        case 'nl':
          member.textContent = termData.dutch;
          break;
        case 'zh-traditional':
          member.textContent = termData.traditional;
          break;
        case 'zh-simplified':
          member.textContent = termData.simplified;
          break;
      }
    }
  });
}

// Family tree functionality
function initializeFamilyTree() {
  const tabs = document.querySelectorAll('.family-tree-tabs .btn');
  const trees = document.querySelectorAll('.family-tree');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      trees.forEach(t => t.classList.remove('active'));
      
      this.classList.add('active');
      const treeId = this.id.replace('Tab', 'Tree');
      document.getElementById(treeId).classList.add('active');
    });
  });
  
  // Add click handlers to family members
  const members = document.querySelectorAll('.family-member');
  members.forEach(member => {
    member.addEventListener('click', function() {
      const termName = this.getAttribute('data-term');
      showMemberDetails(termName);
    });
    
    // Add keyboard accessibility
    member.setAttribute('tabindex', '0');
    member.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const termName = this.getAttribute('data-term');
        showMemberDetails(termName);
      }
    });
  });
}

function showMemberDetails(termName) {
  const termData = getTermDataByEnglish(termName);
  if (!termData) return;
  
  const detailsCard = document.getElementById('memberDetails');
  const title = document.getElementById('memberTitle');
  const englishTerm = document.getElementById('englishTerm');
  const dutchTerm = document.getElementById('dutchTerm');
  const traditionalTerm = document.getElementById('traditionalTerm');
  const simplifiedTerm = document.getElementById('simplifiedTerm');
  const mandarinPron = document.getElementById('mandarinPron');
  const cantonesePron = document.getElementById('cantonesePron');
  
  title.textContent = termData.english;
  englishTerm.textContent = termData.english;
  dutchTerm.textContent = termData.dutch;
  traditionalTerm.textContent = termData.traditional;
  simplifiedTerm.textContent = termData.simplified;
  mandarinPron.textContent = termData.mandarin;
  cantonesePron.textContent = termData.cantonese;
  
  detailsCard.classList.remove('hidden');
  detailsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeMemberDetails() {
  document.getElementById('memberDetails').classList.add('hidden');
}

function getTermDataByEnglish(englishTerm) {
  for (const category of familyTermsData) {
    const term = category.terms.find(t => t.english === englishTerm);
    if (term) return term;
  }
  return null;
}

// Comparison table functionality
function initializeComparisonTable() {
  const categoryFilter = document.getElementById('categoryFilter');
  categoryFilter.addEventListener('change', updateComparisonTable);
  updateComparisonTable();
}

function updateComparisonTable() {
  const categoryFilter = document.getElementById('categoryFilter');
  const selectedCategory = categoryFilter.value;
  const tableBody = document.getElementById('comparisonTableBody');
  
  tableBody.innerHTML = '';
  
  familyTermsData.forEach(category => {
    if (selectedCategory === 'all' || selectedCategory === category.category) {
      category.terms.forEach(term => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${term.english}</td>
          <td>${term.dutch}</td>
          <td class="chinese-text">${term.traditional}</td>
          <td class="chinese-text">${term.simplified}</td>
          <td>${term.mandarin}</td>
          <td>${term.cantonese}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  });
}

// Quiz functionality
function startQuiz() {
  generateQuizQuestions();
  document.getElementById('quizStart').classList.add('hidden');
  document.getElementById('quizGame').classList.remove('hidden');
  currentQuestionIndex = 0;
  quizScore = 0;
  showQuestion();
  
  // Smooth scroll to quiz section without disrupting the view
  document.getElementById('quiz').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

function generateQuizQuestions() {
  const allTerms = [];
  familyTermsData.forEach(category => {
    allTerms.push(...category.terms);
  });
  
  currentQuiz = [];
  for (let i = 0; i < 10; i++) {
    const correctTerm = allTerms[Math.floor(Math.random() * allTerms.length)];
    const wrongOptions = allTerms.filter(t => t !== correctTerm)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    const options = [correctTerm, ...wrongOptions].sort(() => 0.5 - Math.random());
    
    currentQuiz.push({
      question: getQuestionText(correctTerm),
      correct: correctTerm,
      options: options
    });
  }
}

function getQuestionText(term) {
  const questions = {
    en: `What is "${term.english}" in Chinese?`,
    nl: `Wat is "${term.dutch}" in het Chinees?`,
    'zh-traditional': `「${term.traditional}」用英文怎麼說？`,
    'zh-simplified': `「${term.simplified}」用英文怎么说？`
  };
  return questions[currentLanguage] || questions.en;
}

function showQuestion() {
  const question = currentQuiz[currentQuestionIndex];
  document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
  document.getElementById('totalQuestions').textContent = currentQuiz.length;
  document.getElementById('questionText').textContent = question.question;
  
  const optionsContainer = document.getElementById('quizOptions');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.textContent = getOptionText(option);
    button.addEventListener('click', () => selectAnswer(option, question.correct));
    optionsContainer.appendChild(button);
  });
  
  document.getElementById('quizFeedback').classList.add('hidden');
}

function getOptionText(term) {
  switch(currentLanguage) {
    case 'zh-traditional':
    case 'zh-simplified':
      return term.english;
    default:
      return currentLanguage === 'zh-traditional' ? term.traditional : term.simplified;
  }
}

function selectAnswer(selected, correct) {
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.disabled = true;
    if (option.textContent === getOptionText(correct)) {
      option.classList.add('correct');
    } else if (option.textContent === getOptionText(selected) && selected !== correct) {
      option.classList.add('incorrect');
    }
  });
  
  const feedback = document.getElementById('quizFeedback');
  const feedbackText = document.getElementById('feedbackText');
  
  if (selected === correct) {
    quizScore++;
    feedback.className = 'quiz-feedback correct';
    feedbackText.textContent = translations[currentLanguage]?.correct || 'Correct!';
  } else {
    feedback.className = 'quiz-feedback incorrect';
    feedbackText.textContent = `${translations[currentLanguage]?.incorrect || 'Incorrect!'} ${translations[currentLanguage]?.correct_answer || 'Correct answer:'} ${getOptionText(correct)}`;
  }
  
  feedback.classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quizGame').classList.add('hidden');
  document.getElementById('quizResults').classList.remove('hidden');
  document.getElementById('finalScore').textContent = quizScore;
}

function restartQuiz() {
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizStart').classList.remove('hidden');
}

// Navigation functionality
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Export functionality for future use
window.familyTreeApp = {
  updateLanguage,
  showMemberDetails,
  closeMemberDetails,
  startQuiz,
  nextQuestion,
  restartQuiz
};