// debug.js — Скрытый режим отладки

(function () {
  'use strict';

  // Настройки
  const DEBUG_CODE = 'DEBUG';
  const VALID_LOGIN = 'isha.pro';
  const VALID_PASSWORD = '@iogurt7531';

  // Состояние
  let typedCode = '';
  let isDebugActive = false;

  // Создание панели отладки (динамически)
  function createDebugPanel() {
    if (document.getElementById('debug-panel')) return; // Уже существует

    const panel = document.createElement('div');
    panel.id = 'debug-panel';
    panel.className = 'debug-panel hidden';
    panel.innerHTML = `
      <div class="debug-form">
        <input type="text" id="debug-login" placeholder="Логин" autocomplete="off">
        <input type="password" id="debug-password" placeholder="Пароль" autocomplete="off">
        <button id="debug-submit">Войти</button>
        <button id="debug-cancel">Отмена</button>
      </div>
    `;
    document.body.appendChild(panel);

    // Автоматическое заполнение полей
    document.getElementById('debug-login').value = VALID_LOGIN;
    document.getElementById('debug-password').value = VALID_PASSWORD;

    // Обработчики кнопок
    document.getElementById('debug-submit').addEventListener('click', handleLogin);
    document.getElementById('debug-cancel').addEventListener('click', () => {
      panel.classList.add('hidden');
    });
  }

  // Обработка входа
  function handleLogin() {
    const login = document.getElementById('debug-login').value.trim();
    const password = document.getElementById('debug-password').value.trim();

    if (login === VALID_LOGIN && password === VALID_PASSWORD) {
      isDebugActive = true;
      window.isDebugMode = true; // Глобальный флаг для других скриптов
      document.getElementById('debug-panel').classList.add('hidden');
      alert('✅ Режим отладки активирован!\nТеперь вы можете редактировать карту.');
      
      // Опционально: вызов колбэка, если он определён
      if (typeof window.onDebugModeActivated === 'function') {
        window.onDebugModeActivated();
      }
    } else {
      alert('❌ Неверный логин или пароль.');
    }
  }

  // Перехват ввода кода
  function handleKeyDown(e) {
    // Игнорируем, если уже в режиме отладки или в поле ввода
    if (isDebugActive || e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    // Только латинские заглавные буквы
    if (e.key.length === 1 && e.key >= 'A' && e.key <= 'Z') {
      typedCode = (typedCode + e.key).slice(-DEBUG_CODE.length);
      if (typedCode === DEBUG_CODE) {
        createDebugPanel();
        document.getElementById('debug-panel').classList.remove('hidden');
        typedCode = ''; // сбросить
      }
    }
  }

  // Инициализация
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyDown);
  });

})();