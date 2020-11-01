// Упражнение 1

const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};



// Упражнение 2

type TsArr = (number | string)[];

interface IwithData {
  howIDoIt: string;
  simeArray: TsArr;
}

interface IMyHometask {
  howIDoIt: string;
  simeArray: TsArr;
  withData: IwithData[];
}

const MyHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};



// Упражнение 3

interface MyArray<T> {
  [N: number]: T;
  reduce(fn: (el1: T, el2: T) => T): T;
}

const arr: MyArray<number> = [1, 2, 3, 4];

arr.reduce((a, b) => {
  return a + b;
});
