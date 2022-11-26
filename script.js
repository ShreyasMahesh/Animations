gsap.from(".text1", {
	x: -10000,
	y: 0,
	delay: 1,
	duration: 2,
	ease: "strong.inOut",

})

gsap.from(".text4", {
	x: 10000,
	y: 0,
	delay: 1,
	duration: 2,
	ease: "power1.out",
})

gsap.fromTo(".image", {
	x: 0,
	y: 0,
	delay: 1,
	rotation: -20,
}, {
	x: -1810,
	y: 0,
	delay: 1,
	duration: 2,
	rotation: 0,
	ease: "strong.inOut",
})

gsap.from(".text3", {
	x: 0,
	y: -10000,
	delay: 1,
	duration: 2,
	ease: "power1.out",
})

gsap.fromTo(".navbar", {
	backgroundColor: "#FEBD01",
	ease: "strong.inOut",
	delay: 2,
	
	// x: 0,
	// y: 0
}, {
	delay: 2,
	
	backgroundColor: "red",
	ease: "strong.inOut",
	// x: -1820,
	// y: 0,
})

gsap.from(".bg", {
	delay: 1,
	scale: 3,
	ease: "expo.inOut",
});

gsap.from(".t1", {
	x: 0,
	y: -1000,
	delay: 2,
	duration: 2,
	ease: "strong.inOut",
})

gsap.from(".t2", {
	x: 0,
	y: -1000,
	delay: 3,
	duration: 2,
	ease: "strong.inOut",
})

gsap.from(".t3", {
	x: 0,
	y: -1000,
	delay: 4,
	duration: 2,
	ease: "strong.inOut",
})