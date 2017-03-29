function makePhrasePigLatin(phrase) {
  var phraseArray = phrase.split(" ")
  var newPhraseArray = [];
  phraseArray.forEach(function(word) {
    parsedWord = convertPigLatin(word);
    newPhraseArray.push(parsedWord);
  });
  return newPhraseArray.join(" ");
}

function findVowelIndex(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        return i;
    };
  };
}

function convertPigLatin(word) {
  // consider qu case
  if (word.charAt(0) === "q" && word.charAt(1) === "u") {
    wordQu = word.slice(2);
    return wordQu + "quay";
  } else {
    //split word into array
    var splitWord = word.split("");
    // find vowel index
    var vowelIndex = findVowelIndex(splitWord);
    // move all indexes before vowel to the end and add ay
    if (vowelIndex >= 0) {
      var consonents = splitWord.slice(0, vowelIndex);
      splitWord.splice(0, vowelIndex);
      var combined = splitWord.concat(consonents);
      combined = combined.join("")
      return combined + "ay";
    };
  };
}

$(document).ready(function() {
  $("form").submit(function(event) {
    var phraseInput = $("#phrase").val();

    $("#output").append(makePhrasePigLatin(phraseInput));

    event.preventDefault();
  });
});
