let value1: unknown = 1; //unknown型なのでどんな値でも代入可能

//NG
let value2: number = value1; //unknown型の変数を代入することはできない
//Debugger attached.
//no3-9.ts:4:5 - error TS2322: Type 'unknown' is not assignable to type 'number'.
//4 let value2: number = value1; //unknown型の変数を代入することはできない
