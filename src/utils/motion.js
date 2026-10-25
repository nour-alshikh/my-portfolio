// Each helper returns GSAP "from" vars: the hidden state an element animates in from.
// Framer's "spring" has no GSAP equivalent, so it maps to a back ease for a similar overshoot.
const toEase = (type) => (type === "spring" ? "back.out(1.4)" : "power2.out");

export const textVariant = (delay) => {
    return {
        y: -50,
        opacity: 0,
        duration: 1.25,
        delay: delay || 0,
        ease: toEase("spring"),
    };
};

export const fadeIn = (direction, type, delay, duration) => {
    return {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        delay: delay,
        duration: duration,
        ease: toEase(type),
    };
};

export const zoomIn = (delay, duration) => {
    return {
        scale: 0,
        opacity: 0,
        delay: delay,
        duration: duration,
        ease: "power2.out",
    };
};

export const slideIn = (direction, type, delay, duration) => {
    return {
        xPercent: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        yPercent: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        delay: delay,
        duration: duration,
        ease: toEase(type),
    };
};
