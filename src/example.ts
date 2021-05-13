//
// enum MethodEnum {
//     add,
//     sub,
//     div,
// }
//
// function calculate(method: MethodEnum, first: number, second: number): number {
//     switch (method) {
//         case MethodEnum.add: return first + second
//         case MethodEnum.sub: return first - second
//         case MethodEnum.div: return first / second
//     }
// }
//
// calculate(MethodEnum.sub, 3,5)
//
// type TypeFn = () => number;
// type TypeDefaultFn = () => void;
//
// const ArrowFunc: TypeDefaultFn = () => console.log('Hi')
//
// interface MyArray<T> {
//     [n: number]: T;
//
//     map<U>(fn: (el: T) => U): U[];
// }
// const tsArr: Array<number> = [1,2,3,4]
//
// tsArr.map((i) => i +1);
// tsArr.map((i) => `${i} +1`);
//
// function getLen<T extends Array<any>>(arr: T):number {return arr.length}
//
// getLen([1,2,3])

const concat = (str1: string, str2: string): string => str1 + str2;

interface myHometaskInterface {
  howIDoIt: string;
  simeArray: (string | number)[];
  withData: [{ howIDoIt: string; simeArray: [string, number] }];
}
const myHometask: myHometaskInterface = {
  howIDoIt: 'fast',
  simeArray: ['bla', 'blabla', 23],
  withData: [{ howIDoIt: 'slow', simeArray: ['eh', 12] }],
};

interface MyArray<T> {
  [N: number]: T;
}
