var tl=gsap.timeline()

 tl.from("#nav #tag,#nav #tab h2 , #tan h3, #nav button ", {
    y: -80,
    duration:1,
    delay: 0.5,
    opacity: 1,
    stagger: 1,
})
// t1.to("#page1 h1,#page1 h2,#page1 button,#page1 btn",{
//     y: 100,
//     duration:1,
//     delay: 0.5,
//     opacity: 0,
//     // stagger: 1,

// })