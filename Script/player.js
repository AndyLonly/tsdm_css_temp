const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    preload: 'metadata',
    order: 'list',
    	preload: 'auto',
    	volume: 0.7,
    	mutex: true,
loop: 'all',
theme: '#ebd0c2',
    audio: [{
        name: 'unravel(acoustic version)',
        artist: 'TK from 凛として時雨; ',
        url: './unravel(acoustic version).flac',
        cover: './ab67616d00001e021084a0d39620b9564ee640a1.jpg',
	lrc:'./unravel.lrc'
    }]
});