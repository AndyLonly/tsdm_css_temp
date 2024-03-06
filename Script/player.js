const ap = new APlayer({
	container: document.getElementById('aplayer'),
	mini: false,
	autoplay: false,
	lrcType: 3,
	order: 'list',
	preload: 'auto',
    	volume: 0.7,
    	mutex: true,
	loop: 'all',
	theme: '#ebd0c2',
    audio: [{
        name: 'unravel(acoustic version)',
        artist: 'TK from 凛として時雨',
        url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdkRlTE5mSUdIc2dndmh3LXIwaUdiS2NoZmhjX3c_ZT02aXVIVG4.mp3',
        cover: './player_cache/unravel.jpg',
	lrc:'./player_cache/unravel.lrc'
    },{
        name: 'beauty is within us',
        artist: 'Scott Matthew',
        url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdkRlTE5mSUdIc2dndmh5YmlBUVE4cTUxZDFJNmc_ZT05SDJTOGg.mp3',
        cover: './player_cache/beauty is within us.jpg',
	lrc:'./player_cache/beauty is within us.lrc'
    }]
});
