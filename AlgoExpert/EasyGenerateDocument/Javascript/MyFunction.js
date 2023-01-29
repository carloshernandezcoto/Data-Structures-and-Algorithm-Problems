//Time: O(m + n) worst case, O(m) best case.
//Space: O(m)
//n: Size of characters, m: Size of document

function generateDocument(characters, document) {
  if (document.length === 0) return true;
  let docDictionary = new Map();

  for (let i = 0; i < document.length; i++) {
    if (!docDictionary.has(document[i])) docDictionary.set(document[i], 0);
    docDictionary.set(document[i], docDictionary.get(document[i]) + 1);
  }

  for (let j = 0; j < characters.length; j++) {
    if (docDictionary.has(characters[j])) {
      docDictionary.set(characters[j], docDictionary.get(characters[j]) - 1);
      if (docDictionary.get(characters[j]) === 0) {
        docDictionary.delete(characters[j]);
        if (docDictionary.size === 0) return true;
      }
    }
  }
  return false;
}

exports.generateDocument = generateDocument;
