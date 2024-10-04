function seededRandom(seed: number) {
    var m = 0x80000000; // 2**31
    var a = 1103515245;
    var c = 12345;

    seed = seed % m;

    return function () {
        seed = (a * seed + c) % m;
        return seed / m;
    };
}

const rand = seededRandom(10000);

function shuffleArray(array: any[], randomFunc: () => number) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(randomFunc() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const originalColors = ["red", "peach", "green", "blue", "pink", "mauve"];
let colors = [...originalColors];

shuffleArray(colors, rand);

export const getRandomColor = () => {
    if (colors.length === 0) {
        colors = [...originalColors];
        shuffleArray(colors, rand);
    }
    return colors.pop();
};