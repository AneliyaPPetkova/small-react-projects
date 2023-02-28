export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
}

export interface Person {
  id: number;
  name: string;
  age: number;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  image: string;
  job: string;
  text: string;
}

export interface FAQ {
  id: number;
  title: string;
  info: string;
}

export interface Category {
  id: number;
  title: string;
}

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}
