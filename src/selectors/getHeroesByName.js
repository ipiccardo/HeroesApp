import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLowerCase();
  //   return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
  //
  if (name === "") {
    return [];
  }
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
