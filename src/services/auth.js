import {auth, db} from './firebase.js'
import {onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword} from 'firebase/auth'
import { doc, setDoc, getDoc} from 'firebase/firestore';

let user = {
    id: null,
    email: null,
    name: null,
    lastName: null,
    role: null,
}

const handleAuthStateChanged = (newUser) => {
    user.id = newUser ? newUser.id : null
    user.email = newUser ? newUser.email : null
    user.name = newUser ? newUser.name : null
    user.lastName = newUser ? newUser.lastName : null
    user.role = newUser ? newUser.role : null

    notifyAll()
}

onAuthStateChanged(auth, handleAuthStateChanged)

const register = async ({email, password, name, lastName}) => {
    try {
        const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
        const userDocRef = doc(db, "users", firebaseUser.uid);
        await setDoc(userDocRef, {
            name,
            lastName,
            role: 2,
            email,
            id: firebaseUser.uid,
        });
    
        user.id = firebaseUser.uid;
        user.email = email;
        user.name = name;
        user.lastName = lastName;
        user.role = 2;
        
        handleAuthStateChanged(user);

        return firebaseUser;
    } catch (error) {
        throw new Error(error);
    }
};

const login = async ({email, password}) => {
    return await signInWithEmailAndPassword(auth, email, password)
    .then(async userCredentialS => {
        const userDocRef = doc(db, "users", userCredentialS.user.uid);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        const user = {
            id: userCredentialS.user.uid,
            email: userCredentialS.user.email,
            name: userData.name,
            lastName: userData.lastName,
            role: userData.role,
        }

        handleAuthStateChanged(user);

        return user;
    })
    .catch(error => {
        console.log(error);
        throw new Error (error.message);
    })
}

const logout = async () => {
    return await signOut(auth)
        .catch(error => {
            console.log(error);
        })
}

let observers = []

const subscribeToAuth = (observer) => {
    observers.push(observer)

    notify(observer)
}

const notify = (observer) => {
    observer({...user})
}

const notifyAll = (observer) => {
    observers.forEach(observer => notify(observer))
}

export {
    login,
    logout,
    register,
    subscribeToAuth
}