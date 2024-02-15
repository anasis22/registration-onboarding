import React, { useContext, useEffect, useRef, useState } from "react";
import { auth, db } from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const mobileNoRef = useRef();
  const addressRef = useRef();
  const countryRef = useRef();
  const bankNoRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const [myborder, setmyBorder] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [user, setUser] = useState();
  const [usersData, setUsersData] = useState();
  const [fResult, setFResult] = useState();
  const [loading, setLoading] = useState(true);
  const [gEmail,setGEmail] = useState();
  const [gName,setGName] = useState();
  const collectionRef = collection(db, "users");

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setData = async (documentName) => {
    const user = await addDoc(collectionRef, documentName);
    setUser(user);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const getData = async () => {
    const snapshot = await getDocs(collectionRef);
    const results = [];
    snapshot.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    setUsersData(results);
  };

  const login = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

  useEffect(() => {
    getData();
    const unsubscriber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscriber;
  }, []);

  const value = {
    nameRef,
    emailRef,
    passwordRef,
    mobileNoRef,
    addressRef,
    countryRef,
    myborder,
    setmyBorder,
    showPassword,
    setShowPassword,
    signup,
    currentUser,
    setUser,
    setData,
    logOut,
    bankNoRef,
    usersData,
    user,
    getData,
    fResult,
    setFResult,
    login,
    loginEmailRef,
    loginPasswordRef,
    gEmail,
    setGEmail,
    gName,
    setGName
  };
  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
};
