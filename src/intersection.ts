interface Name {
  name: string;
}

interface Age {
  age: number;
}

export type Person = Name & Age;
