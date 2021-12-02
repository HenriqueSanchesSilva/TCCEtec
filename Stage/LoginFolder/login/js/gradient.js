var granimInstance = new Granim({
    element: '#Granim',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#A551FF', '#A356FF'],
                ['#A356FF', '#A551FF'],
                ['#A551FF', '#A356FF']
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
                ['#A356FF', '#A551FF'],
                ['#A551FF', '#A356FF'],
                ['#A356FF', '#A551FF']
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
                ['#A356FF', '#AE91D1'],
                ['#AE91D1', '#A356FF'],
                ['#A356FF', '#AE91D1']
            ]
        }
    }
});