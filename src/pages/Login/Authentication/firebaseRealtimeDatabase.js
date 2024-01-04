import app from './data/firebase.init';
import { getDatabase, set, ref, onValue } from "firebase/database";
const database = getDatabase(app);
const FirebaseRealtimeDatabase = () => {
    const AddDocumentToDatabase = (displayName, userID, email, photoURL, phoneNumber) => {
      set(ref(database, 'users/' + userID), {
        displayName: displayName,
        email: email,
        photoURL: photoURL,
        phoneNumber: phoneNumber,
        uid: userID,
      })
    };
    let allUsers = [];
    let user = {};
    const getFirebaseDatabaseInfo = () => {
      const starCountRef = ref(database, 'users/');
      onValue(starCountRef, (snapshot) => {
        snapshot.forEach(childSnapshot => {
          let keyName = childSnapshot.key;
          let data = childSnapshot.val();
          const name = data.displayName;
          const email = data.email;
          const photoURL = data.photoURL;
          const phoneNumber = data.phoneNumber;
          const uid = data.uid;
          allUsers.push(
            {
              "key": keyName, 
              "name": name, 
              "email": email, 
              "photo": photoURL, 
              "phoneNumber": phoneNumber, 
              "uid": uid,
            }
          );
          allUsers.forEach(getUser => {
            user = getUser;
          });
        })
      });
    }
    getFirebaseDatabaseInfo();
    return {AddDocumentToDatabase, user};
};
export default FirebaseRealtimeDatabase;