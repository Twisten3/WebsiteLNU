# Виднокрай — мала енциклопедія

Невеликий статичний сайт українською мовою з чотирма статтями, пошуком, фільтрами та адаптивним дизайном. Зовнішні бібліотеки й сервер не потрібні.

## Як відкрити

Відкрий `index.html` у браузері. Якщо браузер обмежує локальні файли, запусти сервер у цій папці:

```bash
python3 -m http.server 8000
```

Потім перейди на <http://127.0.0.1:8000>.

## Публікація на GitHub Pages

Workflow автоматично публікує сайт із кореня репозиторію після змін у гілці `main`. Для першого запуску в **Settings → Pages** встанови **Build and deployment → Source: GitHub Actions**. Після цього сайт буде доступний за адресою <https://twisten3.github.io/WebsiteLNU/>.

Щоб запустити публікацію вручну, відкрий **Actions → Deploy Vydnokrai to GitHub Pages → Run workflow** і вибери гілку `main`.

## Фотографії

- Київ — Øyvind Nondal, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kyiv_city_view_24_October_2016.jpg).
- Говерла — Khoroshkov, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Гора_Говерла_після_заходу_сонця.jpg).
- Туманність Оріона — NASA, ESA та команда Hubble Orion Treasury Project, суспільне надбання, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg).
- Чорне море — Юлія Рядченко, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Odesa_Black_Sea_coast.jpg).
