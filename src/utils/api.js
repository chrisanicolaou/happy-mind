import db from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const getInterests = async () => {
  try {
    const docRef = doc(db, "Interests", "Interests List");
    const docSnap = await getDoc(docRef);
    return docSnap;
  } catch (err) {
    console.log(err);
  }
};
