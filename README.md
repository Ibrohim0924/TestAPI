# Test API bilan ishlash loyihasi

Bu loyiha test API bilan ishlash va HTTP so'rovlarni amalga oshirish imkoniyatlarini ko'rsatish uchun yaratilgan.

## Loyiha haqida

Dastur quyidagi vazifalarni bajaradi:

1. POST so'rovi orqali birinchi kod qismini olish
2. Webhook orqali ikkinchi kod qismini olish
3. Ikki qismni birlashtirish
4. GET so'rovi orqali yakuniy natijani olish

## O'rnatish

1. Loyihani yuklab oling:
```bash
git clone [sizning-github-repo-manzilingiz]
cd interview-test
```

2. Kerakli paketlarni o'rnating:
```bash
npm install
```

3. Webhook.site sahifasidan yangi URL oling:
   - [webhook.site](https://webhook.site/) sahifasiga kiring
   - Sahifa ochilganda sizga unique URL beriladi
   - Ushbu URL ni `index.js` faylidagi `requestData.url` ga qo'ying

## Ishlatish

1. Dasturni ishga tushiring:
```bash
npm start
```

2. Dastur quyidagi ketma-ketlikda ishlaydi:
   - Birinchi POST so'rovi yuboriladi va birinchi kod qismi (`part1`) olinadi
   - Webhook.site sahifasida yangi so'rov paydo bo'ladi, undan ikkinchi kod qismi (`part2`) olinadi
   - `part2` ni dasturga kiritasiz
   - Dastur ikkala qismni birlashtiradi va GET so'rov orqali natijani oladi

## Texnik ma'lumot

- **API manzil**: https://test.icorp.uz/interview.php
- **So'rov turlari**:
  - POST: Birinchi qismni olish uchun
  - GET: Yakuniy natijani olish uchun
- **Webhook**: Ikkinchi qism kodini olish uchun

## Foydalanilgan texnologiyalar

- Node.js
- Axios (HTTP so'rovlar uchun)
- Webhook.site (Callback URL uchun)

## Xatoliklarni bartaraf etish

Agar dastur ishga tushirilganda xatolik yuz bersa:

1. Internet aloqasini tekshiring
2. Webhook.site URL to'g'ri kiritilganini tekshiring
3. Barcha kod qismlarini to'g'ri nusxalab olganingizni tekshiring

## Litsenziya

MIT