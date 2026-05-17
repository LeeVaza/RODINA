// // Диагностика отображения кнопок 
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('Tests page loaded');
//   const buttons = document.querySelectorAll('.start-test-btn');
//   console.log(`Найдено кнопок: ${buttons.length}`);
//   buttons.forEach((btn, i) => {
//     console.log(`Кнопка ${i}:`, {
//       display: window.getComputedStyle(btn).display,
//       visibility: window.getComputedStyle(btn).visibility,
//       opacity: window.getComputedStyle(btn).opacity
//     });
//   });
// });

// // База вопросов для тестов
// const questionsData = {
//   crimea: [
//     {
//       question: "Какой город является столицей Республики Крым?",
//       answers: ["Севастополь", "Симферополь", "Ялта", "Евпатория"],
//       correct: 1
//     },
//     {
//       question: "Какая гора является высшей точкой Крыма?",
//       answers: ["Ай-Петри", "Чатыр-Даг", "Роман-Кош", "Демерджи"],
//       correct: 2
//     },
//     {
//       question: "В каком году Крым был присоединен к России?",
//       answers: ["2014", "2015", "2013", "2016"],
//       correct: 0
//     },
//     {
//       question: "Какой пролив соединяет Чёрное и Азовское моря?",
//       answers: ["Босфор", "Дарданеллы", "Керченский", "Гибралтар"],
//       correct: 2
//     },
//     {
//       question: "Как называется знаменитый дворец в Ялте?",
//       answers: ["Ливадийский", "Массандровский", "Воронцовский", "Все перечисленные"],
//       correct: 3
//     },
//     {
//       question: "Какой полуостров находится на востоке Крыма?",
//       answers: ["Тарханкут", "Керченский", "Херсонес", "Фиолент"],
//       correct: 1
//     },
//     {
//       question: "Какая река является самой длинной в Крыму?",
//       answers: ["Салгир", "Альма", "Кача", "Бельбек"],
//       correct: 0
//     },
//     {
//       question: "В каком городе находится Ханский дворец?",
//       answers: ["Симферополь", "Бахчисарай", "Феодосия", "Судак"],
//       correct: 1
//     },
//     {
//       question: "Какое озеро в Крыму имеет розовый цвет?",
//       answers: ["Сиваш", "Сакское", "Донузлав", "Ачи"],
//       correct: 0
//     },
//     {
//       question: "Какой город-герой находится в Крыму?",
//       answers: ["Севастополь", "Керчь", "Оба города", "Ни один"],
//       correct: 2
//     }
//   ],
//   kherson: [
//     {
//       question: "Какой город является центром Херсонской области?",
//       answers: ["Новая Каховка", "Херсон", "Каховка", "Геническ"],
//       correct: 1
//     },
//     {
//       question: "Какая река протекает через Херсон?",
//       answers: ["Днестр", "Дунай", "Днепр", "Южный Буг"],
//       correct: 2
//     },
//     {
//       question: "В каком году был основан Херсон?",
//       answers: ["1778", "1783", "1765", "1790"],
//       correct: 0
//     },
//     {
//       question: "Как называется знаменитая крепость возле Херсона?",
//       answers: ["Очаков", "Кинбурн", "Алешки", "Станислав"],
//       correct: 0
//     },
//     {
//       question: "Какой заповедник находится в Херсонской области?",
//       answers: ["Аскания-Нова", "Крымский", "Дунайский", "Карпатский"],
//       correct: 0
//     },
//     {
//       question: "Что такое Арабатская стрелка?",
//       answers: ["Река", "Озеро", "Коса", "Гора"],
//       correct: 2
//     },
//     {
//       question: "Какая ГЭС находится в Херсонской области?",
//       answers: ["ДнепроГЭС", "Каховская ГЭС", "Кременчугская ГЭС", "Днестровская ГЭС"],
//       correct: 1
//     },
//     {
//       question: "Какое море омывает Херсонскую область?",
//       answers: ["Чёрное", "Азовское", "Оба моря", "Ни одно"],
//       correct: 2
//     },
//     {
//       question: "Какой город известен своими целебными грязями?",
//       answers: ["Херсон", "Скадовск", "Голая Пристань", "Новая Каховка"],
//       correct: 2
//     },
//     {
//       question: "В каком году была построена Каховская ГЭС?",
//       answers: ["1950", "1955", "1960", "1965"],
//       correct: 0
//     }
//   ],
//   zaporozhye: [
//     {
//       question: "Какой город является центром Запорожской области?",
//       answers: ["Мелитополь", "Бердянск", "Запорожье", "Энергодар"],
//       correct: 2
//     },
//     {
//       question: "Какая АЭС находится в Запорожской области?",
//       answers: ["Южноукраинская", "Запорожская", "Ровенская", "Хмельницкая"],
//       correct: 1
//     },
//     {
//       question: "Какой остров находится в Запорожье?",
//       answers: ["Хортица", "Джарылгач", "Бирючий", "Тендра"],
//       correct: 0
//     },
//     {
//       question: "В каком году был основан Запорожский Сеч?",
//       answers: ["XV век", "XVI век", "XVII век", "XVIII век"],
//       correct: 1
//     },
//     {
//       question: "Какая река протекает через Запорожье?",
//       answers: ["Днепр", "Днестр", "Дунай", "Конка"],
//       correct: 0
//     },
//     {
//       question: "Как называется знаменитая плотина в Запорожье?",
//       answers: ["Каховская", "ДнепроГЭС", "Кременчугская", "Каневская"],
//       correct: 1
//     },
//     {
//       question: "Какой город известен как курорт на Азовском море?",
//       answers: ["Запорожье", "Бердянск", "Мелитополь", "Энергодар"],
//       correct: 1
//     },
//     {
//       question: "Кто был кошевым атаманом Запорожской Сечи?",
//       answers: ["Богдан Хмельницкий", "Иван Сирко", "Петро Сагайдачный", "Все перечисленные"],
//       correct: 3
//     },
//     {
//       question: "Какой завод находится в Запорожье?",
//       answers: ["Мотор Сич", "Южмаш", "Антонов", "Турбоатом"],
//       correct: 0
//     },
//     {
//       question: "В каком году была построена Запорожская АЭС?",
//       answers: ["1980", "1985", "1990", "1995"],
//       correct: 1
//     }
//   ],
//   donetsk: [
//     {
//       question: "Какой город является центром Донецкой области?",
//       answers: ["Мариуполь", "Донецк", "Макеевка", "Горловка"],
//       correct: 1
//     },
//     {
//       question: "Какое море омывает Донецкую область?",
//       answers: ["Чёрное", "Азовское", "Оба моря", "Ни одно"],
//       correct: 1
//     },
//     {
//       question: "Какой город-порт находится в Донецкой области?",
//       answers: ["Донецк", "Мариуполь", "Славянск", "Краматорск"],
//       correct: 1
//     },
//     {
//       question: "Чем богата Донецкая область?",
//       answers: ["Углем", "Нефтью", "Газом", "Золотом"],
//       correct: 0
//     },
//     {
//       question: "Какая река протекает через Донецк?",
//       answers: ["Днепр", "Дон", "Кальмиус", "Северский Донец"],
//       correct: 2
//     },
//     {
//       question: "В каком году был основан Донецк?",
//       answers: ["1869", "1870", "1871", "1872"],
//       correct: 0
//     },
//     {
//       question: "Как назывался Донецк до 1924 года?",
//       answers: ["Юзовка", "Сталино", "Донецк", "Юрьев"],
//       correct: 0
//     },
//     {
//       question: "Какой металлургический завод находится в Мариуполе?",
//       answers: ["Азовсталь", "Донецксталь", "Енакиевский", "Алчевский"],
//       correct: 0
//     },
//     {
//       question: "Какая гора является высшей точкой Донецкой области?",
//       answers: ["Могила-Мечетная", "Савур-Могила", "Кременивна", "Бельмак-Могила"],
//       correct: 0
//     },
//     {
//       question: "В каком году был основан Мариуполь?",
//       answers: ["1778", "1780", "1782", "1784"],
//       correct: 0
//     }
//   ],
//   lugansk: [
//     {
//       question: "Какой город является центром Луганской области?",
//       answers: ["Алчевск", "Луганск", "Северодонецк", "Красный Луч"],
//       correct: 1
//     },
//     {
//       question: "Какая река протекает через Луганск?",
//       answers: ["Днепр", "Дон", "Лугань", "Северский Донец"],
//       correct: 2
//     },
//     {
//       question: "В каком году был основан Луганск?",
//       answers: ["1795", "1800", "1805", "1810"],
//       correct: 0
//     },
//     {
//       question: "Как назывался Луганск до 1958 года?",
//       answers: ["Ворошиловград", "Луганск", "Каменный Брод", "Донец"],
//       correct: 0
//     },
//     {
//       question: "Какой завод находится в Луганске?",
//       answers: ["Лугансктепловоз", "Южмаш", "Мотор Сич", "Антонов"],
//       correct: 0
//     },
//     {
//       question: "Какая область граничит с Луганской на востоке?",
//       answers: ["Донецкая", "Ростовская область РФ", "Харьковская", "Днепропетровская"],
//       correct: 1
//     },
//     {
//       question: "Какой город известен своими терриконами?",
//       answers: ["Луганск", "Алчевск", "Краснодон", "Все перечисленные"],
//       correct: 3
//     },
//     {
//       question: "В каком году была основана Молодая Гвардия?",
//       answers: ["1941", "1942", "1943", "1944"],
//       correct: 1
//     },
//     {
//       question: "Какой город был центром Молодой Гвардии?",
//       answers: ["Луганск", "Краснодон", "Алчевск", "Стаханов"],
//       correct: 1
//     },
//     {
//       question: "Какая гора находится в Луганской области?",
//       answers: ["Могила-Мечетная", "Савур-Могила", "Обе горы", "Ни одна"],
//       correct: 2
//     }
//   ],
//   final: [] // Будет заполнен вопросами из всех регионов
// };

// // Заполнение финального теста вопросами из всех регионов
// function initFinalTest() {
//   const allQuestions = [];
//   ['crimea', 'kherson', 'zaporozhye', 'donetsk', 'lugansk'].forEach(region => {
//     allQuestions.push(...questionsData[region]);
//   });
//   // Перемешиваем вопросы и берем первые 30
//   questionsData.final = allQuestions.sort(() => Math.random() - 0.5).slice(0, 30);
// }

// // Глобальные переменные
// let currentTest = null;
// let currentQuestions = [];
// let currentAnswers = [];
// let timerInterval = null;
// let timeLeft = 0;
// let testStartTime = null;

// // Загрузка сохраненных результатов при загрузке страницы
// document.addEventListener('DOMContentLoaded', function() {
//   loadSavedResults();
//   checkFinalTestAccess();
//   initFinalTest();
// });

// // Сохранение результатов в localStorage
// function saveResults(region, correctCount, totalQuestions) {
//   const results = JSON.parse(localStorage.getItem('testResults') || '{}');
//   results[region] = {
//     correct: correctCount,
//     total: totalQuestions,
//     date: new Date().toISOString(),
//     best: Math.max(correctCount, results[region]?.best || 0)
//   };
//   localStorage.setItem('testResults', JSON.stringify(results));
//   updateTestBlock(region, correctCount);
//   checkFinalTestAccess();
// }

// // Загрузка сохраненных результатов
// function loadSavedResults() {
//   const results = JSON.parse(localStorage.getItem('testResults') || '{}');
//   Object.keys(results).forEach(region => {
//     updateTestBlock(region, results[region].best || results[region].correct);
//   });
// }

// // Обновление отображения блока теста
// function updateTestBlock(region, correctCount) {
//   const block = document.querySelector(`[data-region="${region}"]`);
//   if (!block) return;
  
//   const totalQuestions = region === 'final' ? 30 : 10;
//   const progressEl = block.querySelector('.test-progress');
//   const correctCountEl = block.querySelector('.correct-count');
  
//   progressEl.textContent = `${correctCount}/${totalQuestions}`;
//   correctCountEl.textContent = correctCount;
  
//   if (correctCount >= 8) {
//     block.setAttribute('data-completed', '1');
//   }
// }

// // Проверка доступа к финальному тесту
// function checkFinalTestAccess() {
//   const results = JSON.parse(localStorage.getItem('testResults') || '{}');
//   const regions = ['crimea', 'kherson', 'zaporozhye', 'donetsk', 'lugansk'];
//   const allPassed = regions.every(region => {
//     const result = results[region];
//     return result && result.best >= 8;
//   });
  
//   const finalBlock = document.querySelector('[data-region="final"]');
//   if (finalBlock) {
//     if (allPassed) {
//       finalBlock.setAttribute('data-locked', 'false');
//       finalBlock.querySelector('.start-test-btn').disabled = false;
//     } else {
//       finalBlock.setAttribute('data-locked', 'true');
//       finalBlock.querySelector('.start-test-btn').disabled = true;
//     }
//   }
// }

// // Начало теста
// function startTest(region) {
//   currentTest = region;
//   const modal = document.getElementById('confirm-modal');
//   modal.classList.remove('hidden');
// }

// // Подтверждение начала теста
// function confirmStartTest() {
//   document.getElementById('confirm-modal').classList.add('hidden');
  
//   const block = document.querySelector(`[data-region="${currentTest}"]`);
//   const questionsWrapper = block.querySelector('.test-questions-wrapper');
//   const questionsContainer = block.querySelector('.questions-container');
  
//   // Показываем вопросы
//   questionsWrapper.classList.remove('hidden');
//   block.classList.add('expanded');
  
//   // Загружаем вопросы
//   currentQuestions = questionsData[currentTest];
//   currentAnswers = new Array(currentQuestions.length).fill(null);
  
//   // Отображаем вопросы
//   questionsContainer.innerHTML = '';
//   currentQuestions.forEach((q, index) => {
//     const questionBlock = document.createElement('div');
//     questionBlock.className = 'question-block';
//     questionBlock.innerHTML = `
//       <div class="question-text">${index + 1}. ${q.question}</div>
//       <div class="answers-list">
//         ${q.answers.map((answer, ansIndex) => `
//           <div class="answer-option" onclick="selectAnswer(${index}, ${ansIndex})">
//             <span>${String.fromCharCode(65 + ansIndex)})</span>
//             <span>${answer}</span>
//           </div>
//         `).join('')}
//       </div>
//     `;
//     questionsContainer.appendChild(questionBlock);
//   });
  
//   // Запускаем таймер
//   const timeLimit = currentTest === 'final' ? 1800 : 600; // 30 минут или 10 минут
//   timeLeft = timeLimit;
//   startTimer(timeLimit, block);
  
//   // Прокрутка к вопросам
//   questionsWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
// }

// // Отмена начала теста
// function cancelStartTest() {
//   document.getElementById('confirm-modal').classList.add('hidden');
//   currentTest = null;
// }

// // Выбор ответа
// function selectAnswer(questionIndex, answerIndex) {
//   currentAnswers[questionIndex] = answerIndex;
  
//   const block = document.querySelector(`[data-region="${currentTest}"]`);
//   const questionBlocks = block.querySelectorAll('.question-block');
//   const answerOptions = questionBlocks[questionIndex].querySelectorAll('.answer-option');
  
//   answerOptions.forEach((option, index) => {
//     option.classList.remove('selected');
//     if (index === answerIndex) {
//       option.classList.add('selected');
//     }
//   });
// }

// // Запуск таймера
// function startTimer(seconds, block) {
//   const timerEl = block.querySelector('.test-timer');
  
//   timerInterval = setInterval(() => {
//     timeLeft--;
//     const minutes = Math.floor(timeLeft / 60);
//     const secs = timeLeft % 60;
//     timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
//     if (timeLeft <= 60) {
//       timerEl.classList.add('warning');
//     }
    
//     if (timeLeft <= 0) {
//       finishTest(currentTest);
//     }
//   }, 1000);
// }

// // Завершение теста
// function finishTest(region) {
//   if (timerInterval) {
//     clearInterval(timerInterval);
//     timerInterval = null;
//   }
  
//   // Подсчет правильных ответов
//   let correctCount = 0;
//   currentQuestions.forEach((q, index) => {
//     if (currentAnswers[index] === q.correct) {
//       correctCount++;
//     }
//   });
  
//   // Сохранение результатов
//   saveResults(region, correctCount, currentQuestions.length);
  
//   // Показываем правильные/неправильные ответы
//   const block = document.querySelector(`[data-region="${region}"]`);
//   const questionBlocks = block.querySelectorAll('.question-block');
  
//   questionBlocks.forEach((block, index) => {
//     const answerOptions = block.querySelectorAll('.answer-option');
//     answerOptions.forEach((option, ansIndex) => {
//       if (ansIndex === currentQuestions[index].correct) {
//         option.classList.add('correct');
//       } else if (ansIndex === currentAnswers[index] && ansIndex !== currentQuestions[index].correct) {
//         option.classList.add('incorrect');
//       }
//     });
//   });
  
//   // Сворачиваем блок через 3 секунды
//   setTimeout(() => {
//     block.classList.remove('expanded');
//     block.querySelector('.test-questions-wrapper').classList.add('hidden');
//   }, 3000);
  
//   // Уведомление о результате
//   setTimeout(() => {
//     alert(`Тест завершен! Правильных ответов: ${correctCount} из ${currentQuestions.length}`);
//   }, 500);
// }

// // Быстрое переключение регионов
// function openRegionSwitch() {
//   document.getElementById('region-switch-modal').classList.remove('hidden');
// }

// function closeRegionSwitch() {
//   document.getElementById('region-switch-modal').classList.add('hidden');
// }

// // Закрытие модалки при клике вне её
// window.onclick = function(event) {
//   const modals = document.querySelectorAll('.modal');
//   modals.forEach(modal => {
//     if (event.target === modal) {
//       modal.classList.add('hidden');
//     }
//   });
// }
