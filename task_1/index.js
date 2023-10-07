import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)


function decoded(constEn = encoded, constTr = translations) {
    const untouch = ["groupId", "service", "formatSize", "ca"];
    let arrayUnique = [];
    let keysT = Object.keys(constTr);
    
    for (let obj of constEn) {
        let keys = Object.keys(obj);
        for (let key of keys) {
            let flag = 0;
            if ((key.slice(-2) == "Id") && (!untouch.includes(key))) {
                for (let keyT of keysT) {
                    if (obj[key] == keyT) {
                        obj[key] = constTr[keyT];
                        flag++;
                    }
                }
            }
            if (flag == 0 && !arrayUnique.includes(key) && !untouch.includes(key)) {
                arrayUnique.push(key);
            }
        }
    }
    
    console.log(encoded, translations);
    console.log("Индивидуальные значения из encoded: " + arrayUnique);
}

decoded();

