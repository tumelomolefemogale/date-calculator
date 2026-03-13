alert('Enter the dates of your choice.');

const input1 = document.getElementById('date1');
const input2 = document.getElementById('date2');

const btn = document.getElementById('btn');
const displayInfo = document.getElementById('displayInfo');

btn.addEventListener('click', () => {
    const timestamp1 = Date.parse(input1.value);
    const timestamp2 = Date.parse(input2.value);

    if (Number.isNaN(timestamp1) || Number.isNaN(timestamp2)) {
        alert('Enter the dates of your choice.');
        return;
    };

    const date1 = new Date(input1.value);
    const date2 = new Date(input2.value);

    let difference = Math.abs(date2 - date1);

    const timeConversions = [
        1000 * 60 * 60 * 24 * 365.25,
        1000 * 60 * 60 * 24 * 30.44,
        1000 * 60 * 60 * 24 * 7,
        1000 * 60 * 60 * 24,
        1000 * 60 * 60,
        1000 * 60,
        1000,
        1
    ];

    const timeMetrics = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < timeMetrics.length; i++) {
        while (difference >= timeConversions[i]) {
            difference -= timeConversions[i]
            timeMetrics[i]++;
        }
    }

    displayInfo.style.display = 'block';
    displayInfo.innerHTML = `<pre>YEARS: ${timeMetrics[0]}\nMONTHS: ${timeMetrics[1]}\nWEEKS: ${timeMetrics[2]}\nDAYS: ${timeMetrics[3]}\nHOURS: ${timeMetrics[4]}\nMINUTES: ${timeMetrics[5]}\nSECONDS: ${timeMetrics[6]}\nMILLISECONDS: ${timeMetrics[7]}</pre>`;
});