## Требования

Разработка велась на
node-js v10.16.3, npm 6.9.0

## Установка

```bash
npm ci
npm run build
```

Домен направляем в /build
/build/index.html точка входа

## Разработка

- npm run start (запуск лохального сервера)

## Деплой

- При пуше или мерджах в мастер

```bash
git pull
npm ci
npm run build
```
