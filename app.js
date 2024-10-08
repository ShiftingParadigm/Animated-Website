var tl = gsap.timeline();

tl.from("nav h1,nav h4,nav button",{
    y: -40,
    opacity: 0,
    delay : 1,
    duration : 0.7,
    stagger : 0.15,
})

tl.from(".center-1 h1",{
    x:-200,
    opacity: 0,
    duration : 0.5,
},"-=0.3")
tl.from(".center-1 p",{
    x:-100,
    opacity: 0,
    duration : 0.4,
})
tl.from(".center-1 button",{
    opacity: 0,
    duration : 0.4,
})

tl.from(".center-2 img",{
    opacity:0,
    duration:0.5,
},"-=0.3")  // delay insid timeline of 0.3s

gsap.from(".bottom img",{
    opacity: 0,
    y:30,
    stagger:0.3,
    duration: 0.9,
    scrollTrigger:{
        trigger : ".bottom img",
        scoller : "body",
        markers : true,
        start : "top 82%",
    }
})


var tl2 = gsap.timeline({
       scrollTrigger: {
            trigger : ".page2",
            scoller : "body",
            markers :true,
            start : "top 50%", end: "top 0",
            scub: 2,
        }
    
})

tl2.from(".services",{
    y:30,
    opacity:0,
},"anim1")

tl2.from(".elem.line1",{
    x:-300,
    opacity:0,
    duration : 1,
},"anim1")
tl2.from(".elem.sline1",{
    x:300,
    opacity:0,
    duration : 1,
},"anim")
tl2.from(".elem.sline2",{
    x:-300,
    opacity:0,
    duration : 1,
})
tl2.from(".elem.line2",{
    x:300,
    opacity:0,
    duration : 1,
},"anim")