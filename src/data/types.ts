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