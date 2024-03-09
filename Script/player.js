async function loadPlaylistAndInitAPlayer() {
    const queryParams = new URLSearchParams(window.location.search);
    const playlistId = queryParams.has('playlist') ?queryParams.get('playlist') : 1;
    const playlistUrl = {
        1:"./Player_cache/playlist_1.json"
    };

    if (!playlistUrl.hasOwnProperty(playlistId)) {
        playlistId = '1'; 
    }
    const jsonUrl = playlistUrl[playlistId];

    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // 使用读取到的播放列表数据初始化APlayer
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            mini: false,
            autoplay: false,
            lrcType: 3,
            order: 'random',
            preload: 'metadata',
            volume: 0.7,
            mutex: true,
            loop: 'all',
            theme: '#ebd0c2',
            listMaxHeight: 90,
            audio: data // 使用变量
        });
    } catch (error) {
        console.error('Error fetching and parsing data: ', error);
    }
}

loadPlaylistAndInitAPlayer();