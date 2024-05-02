type Color = {
    hairColor: string;
    eyeColor: string;
};

type Gen = {
    Generation: number;
};

type Miko = Color & Gen;

const sakuraMiko: Miko = {
    hairColor: "Pink",
    eyeColor: "Green",
    Generation: 0,
};

console.log(sakuraMiko.hairColor);
