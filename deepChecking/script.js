window.onload = () => {
    console.log('NaN: ', deepEqual(NaN, NaN));
    // console.log('numbers: ', deepEqual(0, 1));
    // console.log('strings: ', deepEqual('ab', 'c'));
    // console.log('null: ', deepEqual(null, null));
    // console.log('undefined: ', deepEqual(undefined, null));
    // console.log('Arrays: ', deepEqual([1, 2, [3,4, {a: 'abc'}]], [1, 2, [3,4, {a: 'abc'}]]));
    // console.log('Objects: ', deepEqual({a:34, b:'54'}, {a:34, b:54}));
    // console.log(NaN instanceof Object)
}

function deepEqual(a, b){

    // -------------------------------check Number
    if(typeof a === 'number' && typeof b === 'number' && !isNaN(a) && !isNaN(b)){
        console.log('numbersss')
        return a === b;
    }

    // -------------------------------check String
    if(typeof a === "string" && typeof b === "string"){
        console.log('stringggg');
        return a === b;
    }


    // -------------------------------check NaN
    else if(
        isNaN(a) && isNaN(b) &&
        a !== undefined && b !== undefined &&
        (!Array.isArray(a) || !Array.isArray(b)) &&
        a instanceof Object === false && b instanceof Object === false
    ){
        console.log('nannnnn')
        return true;
    }

    // -------------------------------check Nul
    else if(a === null && b === null){
        console.log('nulllll')
        return a === b;
    }

    // -------------------------------check Undefine
    else if(a === undefined && b === undefined && a !== NaN && b!== NaN) {
        console.log('undefineeee')
        return true;
    }

    // -------------------------------check Array
    else if(Array.isArray(a) && Array.isArray(b)) {
        if(a.length !== b.length) return false;
        let newA = a.flat(Infinity)
        let newB = b.flat(Infinity)
        let result = true;
        let objectValidation = true;
        newA.forEach((el, i) => {
            if(el !== newB[i] && !el instanceof Object) {
                result = false;
                return;
            };
            if(el !== newB[i] && el instanceof Object){
                let arrayOfKeysA = Object.keys(el);
                let arrayOfKeysB = Object.keys(newB[i]);
                let arrayOfValuesA = Object.values(el);
                let arrayOfValuesB = Object.values(newB[i]);
                arrayOfKeysA.forEach((key, j) =>{
                    if(key !== arrayOfKeysB[j]) objectValidation = false;
                    console.log('key', objectValidation);
                })
                if(objectValidation === true){
                    arrayOfValuesA.forEach((value, k) =>{
                        if(value !== arrayOfValuesB[k]){
                            objectValidation = false;
                            console.log('value', objectValidation);
                            return;
                        }
                    })
                }
            }
            if(objectValidation === true) result = true;
            else result = false;

        })
        console.log('arrayyyy')
        return result;
    }

    // -------------------------------check Object
    else if(a instanceof Object && b instanceof Object){
        let arrayOfKeysA = Object.keys(a);
        let arrayOfKeysB= Object.keys(b);
        let arrayOfValueA = Object.values(a);
        let arrayOfValueB= Object.values(b);
        let result = false;

        if(arrayOfKeysA.sort().join() === arrayOfKeysB.sort().join()){
            result = true;
        }
        // if(result){
        //
        // }

        // if(arrayOfKeysA.length === arrayOfKeysB.length)
        // arrayOfKeysA.forEach((key, i) => {
        //     if(key !== arrayOfKeysB[i]) return false;
        // })

    }
}

// let obj = {a: 1, b: 2}
// const keys = Object.keys(obj)
//
//
// keys.forEach(key => {
//     obj[key]
// })