var granimInstance = new Granim({
    element: '#Granim',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#38305F', '#A356FF'],
                ['#A356FF', '#38305F'],
                ['#38305F', '#A356FF']
            ]
        }
    }
});

var granimInstance = new Granim({
    element: '#Granim_T',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#A356FF', '#38305F'],
                ['#38305F', '#A356FF'],
                ['#A356FF', '#38305F']
            ]
        }
    }
});

var granimInstance = new Granim({
    element: '#Granim_b',
    direction: 'radial',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#A356FF', '#38305F'],
                ['#38305F', '#A356FF'],
                ['#A356FF', '#38305F']
            ]
        }
    }
});