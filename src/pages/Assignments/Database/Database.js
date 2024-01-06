// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer
// This file is for developer


import { useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import app from '../../Login/Authentication/data/firebase.init';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(app);
const database = getDatabase(app);



const Database = () => {
    // const [user, setUser] = useState(null);
    const [userID, setUserID] = useState('');

    onAuthStateChanged(auth, user => {
        if (user) {
            // setUser(user);
            setUserID(user.uid);
        }
    })


    let allAssignments = [];
    let assignment = {};
    const getData = () => {
        const starCountRef = ref(database, `assignments/${userID}`);
        onValue(starCountRef, (snapshot) => {
        snapshot.forEach(childSnapshot => {
            let data = childSnapshot.val();
            const id = data.id;
            const repo = data.repository;
            const livesite = data.link;
            allAssignments.push({"id": id, "repository": repo, "link": livesite});
            allAssignments.forEach(singleAssignment => {
                assignment = singleAssignment;
            });
            console.log(assignment)
        })
      });
    };
    getData();

    return (
        <main>
            
        </main>
    );

    
};

export default Database;