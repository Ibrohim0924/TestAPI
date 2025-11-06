const axios = require('axios');
const readline = require('readline');

const API_URL = 'https://test.icorp.uz/interview.php';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function logRequest(method, url, data = null) {
    console.log(`\n→ ${method} so'rovi yuborilmoqda: ${url}`);
    if (data) {
        console.log('  Ma\'lumotlar:', JSON.stringify(data, null, 2));
    }
}

function logResponse(response) {
    console.log('\n← Server javobi:', JSON.stringify(response.data, null, 2));
}

const requestData = {
    msg: "Salom, bu test xabar",
    url: "https://webhook.site/bf2817b5-9634-4a9d-8f0e-64a462ed1a31"
};

async function main() {
    try {
        console.log('\n=== 1-QADAM: Birinchi qismni olish ===');
        logRequest('POST', API_URL, requestData);
        
        const firstResponse = await axios.post(API_URL, requestData);
        logResponse(firstResponse);

        if (!firstResponse.data || !firstResponse.data.part1) {
            throw new Error("Serverdan birinchi qism kod olinmadi");
        }

        const firstCode = firstResponse.data.part1;
        console.log('\n=== OLINGAN MA\'LUMOT ===');
        console.log('Birinchi qism:', firstCode);

        console.log('\n=== 2-QADAM: Ikkinchi qismni olish ===');
        console.log('Webhook.site dan part2 ni olish uchun:');
        console.log('1. https://webhook.site/bf2817b5-9634-4a9d-8f0e-64a462ed1a31 sahifasiga kiring');
        console.log('2. Eng oxirgi kelgan so\'rovni toping (yuqoridan birinchi)');
        console.log('3. So\'rov tanasida part2 qiymatini nusxalab oling');

        const secondCode = await new Promise((resolve) => {
            rl.question('\nPart2 qiymatini kiriting: ', (answer) => {
                resolve(answer.trim());
            });
        });
        
        if (!secondCode) {
            throw new Error("Ikkinchi qism kod kiritilmagan");
        }
        
        rl.close();

        console.log('\n=== 3-QADAM: Kodlarni birlashtirish ===');
        const fullCode = firstCode + secondCode;
        console.log('To\'liq kod:', fullCode);

        console.log('\n=== 4-QADAM: Kodni tekshirish ===');
        logRequest('GET', `${API_URL}?code=${encodeURIComponent(fullCode)}`);
        
        const finalResponse = await axios.get(`${API_URL}?code=${encodeURIComponent(fullCode)}`);
        logResponse(finalResponse);

        console.log('\n=== YAKUNIY NATIJA ===');
        if (finalResponse.data.msg) {
            console.log('✅ Xabaringiz muvaffaqiyatli yuborildi va qaytarib olindi!');
            console.log('Qaytgan xabar:', finalResponse.data.msg);
        } else {
            console.log('❌ Serverdan kutilmagan javob:', finalResponse.data);
        }

    } catch (error) {
        console.error('\n❌ XATOLIK YUZ BERDI');
        if (error.response) {
            console.error('Server xatoligi:', error.response.data);
            console.error('Status kod:', error.response.status);
        } else if (error.request) {
            console.error('So\'rov yuborishda xatolik:', error.message);
        } else {
            console.error('Xatolik:', error.message);
        }
    }
}

console.log('=== TEST API DASTURI ===');
main();