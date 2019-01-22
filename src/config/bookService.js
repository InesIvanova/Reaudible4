let firebase = require('firebase')

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots:true
});
module.exports = {
    getBook: (id) => {
        const path = 'books/' + id + '';
        return db.collection('books').get()
    },
    postABook: (book) => {
        return db.collection('requestedBooks').add(book);
    }
}