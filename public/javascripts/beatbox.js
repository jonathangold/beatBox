let kick = new Howl({
	src: ['/sounds/kick.wav']
})
let snare = new Howl({
	src: ['/sounds/snare.wav']
})
let chh = new Howl({
	src: ['/sounds/chh.wav']
})
let ohh = new Howl({
	src: ['/sounds/ohh.wav']
})
let cymbal = new Howl({
	src: ['/sounds/cymbal.wav']
})

function isTouchDevice (){
	return 'ontouchstart' in document.documentElement
}

let pads = document.getElementsByTagName('button')

//attach event handlers to buttons

for (i=0;i<pads.length;i++) {

	let pad = pads[i]
	let sound = eval(pad.id)
	
	if (isTouchDevice()){
		pad.addEventListener('touchstart', function(){
			sound.play()
		})
	}
	else {
		pad.addEventListener('click', function(){
			sound.play()
		})
	}
}
