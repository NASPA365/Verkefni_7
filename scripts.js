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
    let count = 0;
    const text = str.toLowerCase("");

    for (const char of text) {
      if (VOWELS.includes(char)) {
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

function consonant(str) {
  if (isString(str)) {
    let count = 0;
    const text = str.toLowerCase("");

    for (const char of text) {
      if (CONSONANTS.includes(char)) {
        count++;
      }
    }
    return count;
  } else {
    return 0;
  }
}
console.assert(
  consonant("ignas PACEVICIUS") == 8,
  "consonant: tekur inn texta með bæði stóra og litla stafi sem skilar int margar íslenska samhljóða"
);
console.assert(
  consonant(false) == 0,
  "consonant: ef ekki stengur, skila int 0"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Sláðu inn streng með nokkrum orðum til að fá upplýsingar um:\n" +
    "- Lengsta orðið.\n" +
    "- Stysta orðið.\n" +
    "- Strenginn snúið við.\n" +
    "- Fjölda sérhljóða í streng.\n" +
    "- Fjölda samhljóða í streng.\n" +
    "- Hvort strengurinn er samhverfur."
  );

  const str = prompt("Sláðu inn streng:");


  if (isString(str) && !str =="") {
    let message =
    "Lengsta orðið er: " +
    longest(str) +
    "\n" +
    "Stysta orðið er: " +
    shortest(str) +
    "\n" +
    "Strengurinn snúinn við: " +
    reverse(str) +
    "\n" +
    "Fjöldi sérhljóða í streng: " +
    vowels(str) +
    "\n" +
    "Fjöldi samhljóða í streng: " +
    consonant(str) +
    "\n" +
    "Strengurinn er " +
    (palindrome(str) ? "" : "ekki ") +
    "samhverfur.";

    alert(message);

    const again = confirm("Viltu reyna aftur?");
    if (again) {
      start();
    } else {
      const sure = confirm("Ertu viss?");
      if (sure) {
      } 
      else {
        start();
      }
    }

  }else if (str.trim() === "") {
    const again = confirm("Viltu reyna aftur?");
    if (again) {
      start();
    } else {
      const sure = confirm("Ertu viss?");
      if (sure) {
      } 
      else {
        start();
      }
    }
  }

  }
