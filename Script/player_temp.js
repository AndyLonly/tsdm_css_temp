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
        name: 'Snake Eater',
        artist: '安迪',
        url: 'https://webcache.blackcode.app/snake%20eater_2Mix.wav',
        cover: './Player_cache/Snake_eater.jpg',
        lrc: './Player_cache/Snake_eater.lrc'
    }]
});
