import { doc, setDoc, getDoc, collection, getDocs,  } from "firebase/firestore"
import { db } from "./firebase.js"

async function getUserById(id) {
    const userRef = doc(db, "users", id);

    const user = await getDoc(userRef);

    if(!user.exists()) {
        return null;
    }

    return {
        id: user.id,
        name: user.data().name,
        lastName: user.data().lastName,
        email: user.data().email,
        role: user.data().role,
    }
}

async function getUsers() {
    try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);
        const users = querySnapshot.docs.map(doc => {
            return {id: doc.id, ...doc.data()}
        });
        return users;
    } catch (error) {
        console.error(error);
    }
}

export {
    getUsers,
    getUserById,
}