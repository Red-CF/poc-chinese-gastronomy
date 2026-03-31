# Gastronomía China 2026

Guía gastronómica de 7 ciudades chinas construida con Astro + TailwindCSS.

## Ciudades

- Shanghai (上海) - Xiaolongbao, cocktail bars, French Concession cafés
- Beijing (北京) - Peking Duck, hutong breakfast, imperial cuisine
- Chongqing (重庆) - Hotpot capital, mala spicy, street noodles
- Chengdu (成都) - Sichuan fine dining, Mapo Tofu, teahouses
- Zhangjiajie (张家界) - Tujia cuisine, Avatar pillars
- Fenghuang (凤凰古城) - Ancient town, blood duck, riverside dining
- Furong (芙蓉镇) - Rice tofu, waterfall town, Tujia specialties

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

El deploy automático se realiza a GitHub Pages mediante GitHub Actions cuando se hace push a `main`.

Configuración requerida en GitHub:
1. Settings → Pages → Build and deployment
2. Source: GitHub Actions
3. El workflow `.github/workflows/deploy.yml` se encarga del resto
