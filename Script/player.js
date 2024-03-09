const ap = new APlayer({
	container: document.getElementById('aplayer'),
	mini: false,
	autoplay: false,
	lrcType: 3,
    order: 'random',
	preload: 'auto',
    volume: 0.7,
    mutex: true,
	loop: 'all',
    theme: '#ebd0c2',
    listMaxHeight: 90,
    audio: [{
        name: 'beauty is within us',
        artist: 'Scott Matthew',
        url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdkRlTE5mSUdIc2dndmh5YmlBUVE4cTUxZDFJNmc_ZT05SDJTOGg.mp3',
        cover: './Player_cache/beauty is within us.jpg',
        lrc:'./Player_cache/beauty is within us.lrc'
    },{
        name: 'Gotta knock a little harder',
        artist: '山根麻以',
        url: "https://webcache.blackcode.app/Gotta%20knock%20a%20little%20harder%20-%20%E5%B1%B1%E6%A0%B9%E9%BA%BB%E4%BB%A5.COWBOY%20BEBOP%20Knockin'on%20heaven's%20O.S.T%20FUTURE%20BLUES%20(%E5%88%9D%E5%9B%9E%E7%94%9F%E7%94%A3%E9%99%90%E5%AE%9A%E7%9B%A4)_01.mp3",
        cover: "./Player_cache/Gotta knock a little harder.jpg",
        lrc: "./Player_cache/Gotta knock a little harder.lrc"
    },{
        name: 'unravel(acoustic version)',
        artist: 'TK from 凛として時雨',
        url: 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdkRlTE5mSUdIc2dndmh3LXIwaUdiS2NoZmhjX3c_ZT02aXVIVG4.mp3',
        cover: './Player_cache/unravel(acoustic version).jpg'
    },{
        name: "Quiet's Theme",
        artist: 'Stefanie Joosten',
        url: "https://webcache.blackcode.app/Quiet's%20Theme%20-%20Stefanie%20Joosten_01.mp3",
        cover: "./Player_cache/Quiet's%20Theme.jpg",
        lrc: "./Player_cache/Quiet's Theme.lrc"
    },{
        name: 'Speed of Light',
        artist: '塞壬唱片-MSR',
        url: 'https://webcache.blackcode.app/Speed%20of%20Light%20-%20%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CDJ%20Okawari%2C%E4%BA%8C%E5%AE%AE%E6%84%9B_01.mp3',
        cover: './Player_cache/Speed of Light.jpg',
        lrc: './Player_cache/Speed of Light.lrc'
    },{
        name: 'On My Own',
        artist: '岩崎太整',
        url: 'https://webcache.blackcode.app/OnMyOwn.mp3',
        cover: './Player_cache/on my own.jpg'
    },{
        name: '白い雪',
        artist: 'KOKIA',
        url: 'https://webcache.blackcode.app/%E7%99%BD%E3%81%84%E9%9B%AA.mp3',
        cover: './Player_cache/白い雪.jpg',
        lrc: './Player_cache/白い雪.lrc'
    }]
});
