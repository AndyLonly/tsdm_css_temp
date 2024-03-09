function getQueryParameterValue(parameterName, defaultValue) {
    //%2B
    //?startTime=2024-03-01T00:00:00%2B0800&endTime=2024-04-01T00:00:00%2B08:00
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(parameterName) ? new Date(urlParams.get(parameterName)) : new Date(defaultValue);
}

function updateCountdown() {
    const startTime = getQueryParameterValue('startTime', '2024-01-01T00:00:00+0800');
    const endTime = getQueryParameterValue('endTime', '2024-02-01T00:00:00+08:00');
    const currentTime = new Date();
    const options = {
        timeZone: 'Asia/Shanghai',
        hour12: false ,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    let timeDifference;
    let timeLeftMessage;

    const startTimeElement = document.getElementById('startTime');
    const endTimeElement = document.getElementById('endTime');

    startTimeElement.parentNode.title = `提示：已转换至本地时间，原本时间为${startTime.toLocaleString('zh-CN', options)}[+8时区/24小时制]`;
    endTimeElement.parentNode.title = `提示：已转换至本地时间，原本时间为${endTime.toLocaleString('zh-CN', options)}[+8时区/24小时制]`;

    startTimeElement.innerText = `活动开始时间: ${startTime.toLocaleString()}`;
    endTimeElement.innerText = `活动结束时间: ${endTime.toLocaleString()}`;

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
