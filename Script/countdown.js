function updateCountdown() {
    const queryParams = new URLSearchParams(window.location.search);
    const startParam = queryParams.get('startTime'); 
    const endParam = queryParams.get('endTime'); 

    const startTime = new Date(startParam || '2024-04-01T00:00:00+0800');
    const endTime = new Date(endParam || '2024-05-01T00:00:00+08:00');
    const currentTime = new Date();
    let timeDifference;
    let timeLeftMessage;

    document.getElementById('startTime').innerText = `活动开始时间: ${startTime.toLocaleString()}`;
    document.getElementById('endTime').innerText = `活动结束时间: ${endTime.toLocaleString()}`;

    if (currentTime < startTime) {
        // 活动尚未开始
        timeDifference = startTime - currentTime;
        timeLeftMessage = '距离活动开始还有: ';
    } else if (currentTime >= startTime && currentTime <= endTime) {
        // 活动进行中
        timeDifference = endTime - currentTime;
        timeLeftMessage = '距离活动结束还有: ';
    } else {
        // 活动已结束
        document.getElementById('timeLeft').innerText = '活动已结束';
        clearInterval(interval);
        return;
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById('timeLeft').innerText = timeLeftMessage + `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);
