//1
const concat = (str1: string, str2: string): string => str1 + str2;
//2
interface myHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: [{ howIDoIt: string; simeArray: [string, number] }];
}
//2 test
const myHometask: myHometaskInterface = {
  howIDoIt: 'fast',
  simeArray: ['bla', 'blabla', 23],
  withData: [{ howIDoIt: 'slow', simeArray: ['eh', 12] }],
};
//3
interface MyArrayInterface<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, curr: T, currIndex: number, array: T[]) => U, initialValue: U): U;
}
//3 test
const testArray: MyArrayInterface<number> = [1,2,3,4]
const test1 = testArray.reduce((acc , curr)=> acc += curr,0)
const test2 = testArray.reduce((acc , curr, i)=> ({[acc] : curr}),{})

const stringArray: MyArrayInterface<string> = ['a','b','c']
const testString = testArray.reduce((acc , curr)=> `${acc} ${curr}`,``)
