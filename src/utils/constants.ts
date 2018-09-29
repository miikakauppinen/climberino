export const routes = {
  heroes: '/heroes'
};


export interface IHero {
  name: string,
  image: string
}

export const heroes: IHero[] = [
  {
    image: 'https://placeimg.com/300/300/people',
    name: 'Härmälä'
  },
  {
    image: 'https://placeimg.com/300/300/people',
    name: 'Migluuu'
  },
  {
    image: 'https://placeimg.com/300/300/people',
    name: 'Jorma'
  }
];
