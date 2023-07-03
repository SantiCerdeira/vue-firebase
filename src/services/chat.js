import { db } from '../services/firebase';
import { collection, addDoc, getDocs, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";

function getChatReference() {
    return collection(db, 'mini-chat');
}

async function sendMessage({userId, username, message}) {
    const data = {
        userId,
        username,
        message,
        created_at: serverTimestamp()
    }

    const chatRef = getChatReference()

    return addDoc(chatRef, data)
        .then(docRef => {
            return docRef.id;
        })
        .catch(error => {
            console.log('[chat.js]', error);
            throw error;
        })
}


function subscribeToChatMessages(callback) {
    const chatRef = getChatReference()

    const q = query(chatRef, orderBy('created_at'));

    onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(doc => {
            return {
                userId: doc.data().userId,
                username: doc.data().username,
                message: doc.data().message,
                created_at: doc.data().created_at?.toDate()
            }
        })

        callback(data);
    })

}

export {
    sendMessage,
    subscribeToChatMessages
}