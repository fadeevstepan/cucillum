function afterNextPropagation(callback) {
    requestAnimationFrame(callback);
}

// Usage
afterNextPropagation(() => {
    console.log('Callback executed after the next propogation.');
});
