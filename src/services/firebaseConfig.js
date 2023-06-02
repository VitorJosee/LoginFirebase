
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDazUlD_przGM7hGecMMPUoq7UhSsLJ8cE",
  authDomain: "react-loginauth-13ee2.firebaseapp.com",
  projectId: "react-loginauth-13ee2",
  storageBucket: "react-loginauth-13ee2.appspot.com",
  messagingSenderId: "677874443329",
  appId: "1:677874443329:web:1e786e9c927c9d7e3692c0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);