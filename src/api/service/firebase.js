import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  child,
  set,
  get,
  update,
  push,
} from "firebase/database";
import { v4 as uuidV4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const dbRef = ref(getDatabase());
const database = getDatabase();
provider.setCustomParameters({ prompt: "select_account" });

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

export const onUserStateChanged = (callback) => {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
};

const adminUser = async (user) => {
  return get(child(dbRef, "admins"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const isAdmin = snapshot.val().includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const addNewProduct = (product, image) => {
  const id = uuidV4();
  const { desc, title, price, category, options } = product;
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    category,
    desc,
    image: image,
    options: options.split(","),
    price: parseInt(price),
    title,
  });
};

export const getProducts = async () => {
  return get(child(dbRef, "products"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
