const uniqueRand = (min, max, prev) => {
  let next = prev;

  const rand = (min, max) => Math.floor(Math.random() * (max - min * 1) + min);

  while (prev === next) next = rand(min, max);

  return next;
};

const getDataSet = (wrapper) => {
  const configurationIndex = uniqueRand(0, 5, prevConfigurationIndex),
    roundnessIndex = uniqueRand(0, 4, prevRoundnessIndex),
    colorIndex = uniqueRand(0, 3, prevColorIndex);

  const configuration = configurations[configurationIndex];
  const color = colors[colorIndex];
  const roundness = roundnesss[roundnessIndex];

  wrapper.dataset.configuration = configuration;
  wrapper.dataset.color = color;
  wrapper.dataset.roundness = roundness;

  prevConfigurationIndex = configurationIndex;
  prevColorIndex = colorIndex;
  prevRoundnessIndex = roundnessIndex;
};

const configurations = [1, 2, 3, 5, 6];
const colors = [1, 2, 3];
const roundnesss = [1, 2, 3, 4];

let prevConfigurationIndex = 2;
let prevColorIndex = 1;
let prevRoundnessIndex = 3;

setInterval(() => {
  const wrappers = [...document.getElementsByClassName("hero-wrapper")];

  wrappers.forEach((wrapper) => {
    getDataSet(wrapper);
  });
}, 2000);
