const links = [
  "https://www.lempire.com/",
  "https://www.lemlist.com/",
  "https://www.lemverse.com/",
  "https://www.lemstash.com/",
];

export const getRandomLink = () => {
  const randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
};
