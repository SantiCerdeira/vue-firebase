import { addDoc, collection, serverTimestamp, query, where, limit, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

async function sendPrivateChatMessage({from, to, message}) {
    const chatRef = await getPrivateChatRef(from, to);

    const messagesRef = collection(db, `private-chats/${chatRef.id}/messages`);

    return addDoc(messagesRef, {
        userId: from,
        message,
        created_at: serverTimestamp(),
        })
}

async function getPrivateChatRef(from, to) {
    const privateChatRef = collection(db, "private-chats");

    const users = {
        [from]: true,
        [to]: true,
    }

    const chatQuery = query(privateChatRef, where("users", "==", users), limit(1));

    const querySnapshot = await getDocs(chatQuery);

    if(querySnapshot.empty) {   
        return await addDoc(privateChatRef, {
            users
        })
    }

    return querySnapshot.docs[0];
}

async function subscribeToPrivateChatMessages({from, to}, callback) {
    const chatRef = await getPrivateChatRef(from, to);

    const messagesRef = collection(db, `private-chats/${chatRef.id}/messages`);
    const messagesQuery = query(messagesRef, orderBy("created_at", "asc"));

    return onSnapshot(messagesQuery, querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                userId: data.userId,
                message: data.message,
                created_at: data.created_at?.toDate(),
            }
        })
        callback(messages);
    })
}

export {
    sendPrivateChatMessage,
    subscribeToPrivateChatMessages,
}