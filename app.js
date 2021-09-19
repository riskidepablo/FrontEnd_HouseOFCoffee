const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".nav_brand", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".nav_links", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });
tl.fromTo(".greeting", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.25 });