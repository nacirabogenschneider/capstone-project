import { schoolRef } from '../firebase'

export function getCards() {
  return fetchCards()
}

export function postCard(data) {
  return schoolRef
    .add(data)
    .then(docRef => {
      const documentId = docRef.id

      schoolRef.doc(documentId).update({
        _id: documentId,
        needsPractice: false,
        isBookmarked: false,
      })

      return documentId
    })
    .then(documentId => {
      return schoolRef
        .doc(documentId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

export function patchCard(documentId, data) {
  return schoolRef
    .doc(documentId)
    .update(data)
    .then(() => {
      return schoolRef
        .doc(documentId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
}

function fetchCards() {
  return cardsRef.get().then(querySnapshot => {
    let cardsData = []
    querySnapshot.forEach(doc => {
      cardsData.push(doc.data())
    })

    return cardsData
  })
}
