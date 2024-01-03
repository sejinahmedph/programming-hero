import app from './data/firebase.init';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(app);


const FirebaseFirestore = () => {

    const AddDocumentToFirestore = async (displayName, photoURL, userID) => {
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                name: displayName,
                photo: photoURL,
                uid: userID,
            });
            console.log("Document written with ID: ", docRef.id);
          } 
          catch (error) {
            console.log(error.message);
          }
    }

    return AddDocumentToFirestore;
};



export default FirebaseFirestore;