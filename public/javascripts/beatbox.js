var kick = new Howl({
	src: ['/beatbox/sounds/kick.wav']
})
var snare = new Howl({
	src: ['/beatbox/sounds/snare.wav']
})
var chh = new Howl({
	src: ['/beatbox/sounds/chh.wav']
})
var ohh = new Howl({
	src: ['/beatbox/sounds/ohh.wav']
})
var cymbal = new Howl({
	src: ['/beatbox/sounds/cymbal.wav']
})

document.addEventListener('touchstart', function(e){
	var pad = eval(e.target.id)
	pad.play()
})
