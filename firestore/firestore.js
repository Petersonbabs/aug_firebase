import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD37mI-m1x1kfRRmR4loaJsNx-zz5Hv_84",
    authDomain: "augecommerce-769b9.firebaseapp.com",
    projectId: "augecommerce-769b9",
    storageBucket: "augecommerce-769b9.firebasestorage.app",
    messagingSenderId: "319596472019",
    appId: "1:319596472019:web:911f4158917a957b841626"
};

const app = initializeApp(firebaseConfig)
const DB = getFirestore(app)
const usersColRef = collection(DB, "users")

const addUser = async () => {
    console.log("Adding....")
    try {
        const docRef = await addDoc(usersColRef, {
            name: "John lopur ",
            age: 9,
            isAdmin: true
        })
        console.log(docRef)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("DONE!")
    }
}

// addUser()

const getUsersDocs = async () => {
    console.log("Fethching users....")
    try {
        const querySnapShot = await getDocs(usersColRef)
        console.log(querySnapShot)

        querySnapShot.forEach((ele, index) => {
            const user = ele.data()
            console.log(user)
        })
    } catch (error) {
        console.log(error)
    }
}

// getUsersDocs()

const getSingleUserDoc = async () => {
    try {
        const docRef = doc(usersColRef, "BFVRPXQiP6Q5uSYXEFUf")
        const docSnapShot = await getDoc(docRef)
        console.log(docSnapShot.id)
        console.log(docSnapShot.data())
    } catch (error) {
        console.log(error)
    }
}

// getSingleUserDoc()
// updateDoc
// setDoc

const updateUser = async () => {
    try {
        const docRef = doc(usersColRef, "BFVRPXQiP6Q5uSYXEFUf")
        await updateDoc(docRef, { age: 10 })
    } catch (error) {
        console.log(error)
    } finally {
        console.log("lkjh")
    }
}

// updateUser()

const setUserDoc = async () => {
    try {
        const docRef = doc(usersColRef, "abcdefg")
        await setDoc(docRef, { age: 10 })
    } catch (error) {
        console.log(error)
    } finally {
        console.log("lkjh")
    }
}

// setUserDoc()

const deleteUserDoc = async () => {
    try {
        const docRef = doc(usersColRef, "BFVRPXQiP6Q5uSYXEFUf")
        deleteDoc(docRef)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("lkjh")
    }
}

// deleteUserDoc()