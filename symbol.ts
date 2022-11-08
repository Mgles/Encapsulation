// const obj = {
//     data:20,
//     age:10,
//     price:25,
//     get:14,
//
//     [Symbol.iterator]: function () {
//         let lenght = Object.keys(obj)
//         let ind = 0;
//         return {
//             next: () => {
//                 let done = ind === lenght.length ;
//                 ind++;
//                 let key = lenght[ind]
//                 console.log(key)
//                 return {
//
//                     value:obj[key],
//                     done: done
//                 }
//             }
//         }
//     }
// }
//
// for (let item of obj) {
//     console.log(item, 'item');
// }



interface ICustomArrayState {
    [key: string]: number;
}


class CustomArray {
    public _state: ICustomArrayState = {};

    constructor() { }

    add(item:number): void {
        this._state[JSON.stringify(item)] = item;
    }

    [Symbol.iterator] = () => {
        let done = false;
        let index: number = 0;
        const keys = Object.keys(this._state);
        return {
            next: () => {
                const key = keys[index];
                if (index === keys.length) {
                    done = true;
                }
             let   val = keys[index + 1]

                index++;
                return {
                    value: this._state[key] +  this._state[val],
                    done
                }
            }
        }
    }

}




const customArray = new CustomArray();
customArray.add(13);
customArray.add(43);
customArray.add(14);
customArray.add(53);
customArray.add(23);

console.log(customArray._state)
for (let item of customArray) {
    console.log('item', item);
}
