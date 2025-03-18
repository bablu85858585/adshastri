// Lottie Animation Loader Function
const initLottie = (elementId, animationPath) => {
    lottie.loadAnimation({
        container: document.getElementById(elementId), // Target HTML element
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath // Path to JSON animation file
    });
};

// Example usage: Load 'animations/loading.json' into the 'lottie-container' div
initLottie('lottie-container', 'animations/loading.json');
