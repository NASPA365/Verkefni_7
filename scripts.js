/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const split = str.split(" ");

    let longest = split[0];

    for (const word of split) {
      if (word.length > longest.length) {
        longest = word;
      }
    }

    return longest;
  } else {
    return null;
  }
}
console.assert(
  longest("Ignas Pacevicius") === "Pacevicius",
  "longest: finnur lengsta orðið"
);
console.assert(
  longest(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function shortest(str) {
  if (isString(str)) {
    const split = str.split(" ");

    let shortest = split[0];

    for (const word of split) {
      if (word.length < shortest.length) {
        shortest = word;
      }
    }

    return shortest;
  } else {
    return null;
  }
}
console.assert(
  shortest("Ignas Pacevicius") === "Ignas",
  "shortest: finnur stysta orðið"
);
console.assert(
  longest(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  } else {
    return null;
  }
}
console.assert(
  reverse("halló heimur") === "rumieh óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function palindrome(str) {
  if (!isString(str) || str === '') {
    return false;
  }
  else{
    const text = str.toLowerCase();

    const reversed = text.split("").reverse().join("");

    return reversed === text;

  } 
}
console.assert(
  palindrome('civic') == true,
  "palindrome: þegar það er skrifað orð sem er eins þegar það er snúið því við, skila int 1"
);
console.assert(
  palindrome('Civic') == true,
  "palindrome: skiptir ekki máli ef það er stór eða lítill stafur"
);

function vowels(str) {
  if (isString(str)) {
    let vowel = "A,a,Á,á,E,e,É,é,I,i,O,o,Ó,ó,U,u,Ú,ú,Y,y,Ý,ý,Æ,æ";
    let count = 0;

    for (const char of str) {
      if (vowel.includes(char)) {
        count++;
      }
    }
    return count;
  } else {
    return 0;
  }
}
console.assert(
  vowels("ignas PACEVICIUS") == 7,
  "vowels: tekur inn texta með bæði stóra og litla stafi sem skilar int margar íslenska sérhjlóða"
);
console.assert(vowels(false) == 0, "vowel: ef ekki stengur, skila int 0");

function consonants(str) {
  if (isString(str)) {
    let consonants =
      "B,b,D,d,Ð,ð,F,f,G,g,H,h,J,j,K,k,L,l,M,m,N,n,P,p,R,r,S,s,T,t,V,v,X,x,Þ,þ";
    let count = 0;

    for (const char of str) {
      if (consonants.includes(char)) {
        count++;
      }
    }
    return count;
  } else {
    return 0;
  }
}
console.assert(
  //ég er með c í nafninu mínu þannig að það telst ekki með sem samhljóði né sérhljóði :(
  consonants("ignas PACEVICIUS") == 6,
  "consonants: tekur inn texta með bæði stóra og litla stafi sem skilar int margar íslenska samhljóða"
);
console.assert(
  consonants(false) == 0,
  "consonants: ef ekki stengur, skila int 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
