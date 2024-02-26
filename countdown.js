function updateCountdown() {
    const startTime = new Date('2024-02-26T00:00:00');
    const endTime = new Date('2024-03-01T00:00:00');
    const currentTime = new Date();
    const timeDifference = endTime - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('startTime').innerText = startTime.toLocaleString();
    document.getElementById('endTime').innerText = endTime.toLocaleString();
    document.getElementById('timeLeft').innerText = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;

    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById('timeLeft').innerText = '活动已结束';
    }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
