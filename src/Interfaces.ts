export interface AppNameProps {
  name?: string;
}

export interface Student {
    name: string;
    surname: string;
    age?: number;
    address?: Address;
    level: string;
  };

export interface Address {
  houseNo: number;
  street: string;
  town: string;
}

export enum Level {
  Undergraduate = 'Undergraduate',
  Postgraduate = 'Postgraduate'
}