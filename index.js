let input = document.getElementById("input-text");
let output = document.getElementById("output-text");
let encrypt = document.getElementById("encrypt-btn");
let decrypt = document.getElementById("decrypt-btn");

const keys = {
    "e":"enter",
    "i":"imes",
    "a":"ai",
    "o":"ober",
    "u":"ufat"
};



const Cryptography = (text)=>{
    const keys = {
        "e":"enter",
        "i":"imes",
        "a":"ai",
        "o":"ober",
        "u":"ufat"
    };

    let newtext = ''
    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        newtext += keys[letter] || letter;
      }
      return newtext;
};

const Decryption = (text) => {
    const keys = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };

    let newtext = text;
    for (let key in keys) {
      const pattern = new RegExp(key, 'g');
      newtext = newtext.replace(pattern, keys[key]);
    }

    return newtext;
  }




console.log(Cryptography("parabens por encarar esse desafio e ter finalizado ele com sucesso!"))
console.log(Decryption("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"))


