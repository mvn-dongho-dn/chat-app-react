import { signInWithEmailAndPassword, getAuth, signOut, createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore"; 
import db from './../firebase/config';

const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();
  const auth = getAuth();

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(e => {
      const getUserInfo = async () => {
        const q = query(collection(db, 'users'), where('uid', '==', e.user.uid));
        const getUser = await getDocs(q);
        getUser.forEach(doc => {
          setUser(doc.data());
          localStorage.setItem('user', JSON.stringify(doc.data()));
          history.push('/');
        });
      };
      getUserInfo();
    }).catch(err => {
      console.log(err);
    });
  };

  const register = (data) => {
    const {email, password, firstName, lastName} = data;
    createUserWithEmailAndPassword(auth, email, password).then(e => {
      const user = {
        email: e.user.email,
        uid: e.user.uid,
        displayName: e.user.displayName || `${firstName} ${lastName}`,
        photoURL: e.user.photoURL || 'https://joeschmoe.io/api/v1/random'
      };
      try {
        const callAdd = async () => {
          await addDoc(collection(db, "users"), user);
          history.push('/auth/login');
        }
        callAdd();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }).catch(err => {
      console.log(err);
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('user');
      setIsLogged(false);
      history.push('/auth/login');
    }).catch((error) => {
      // An error happened.
    });
  };

  return {isLogged, user, login, logout, register};
}

export default useAuth;
