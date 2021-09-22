const firebaseConfig = {
  apiKey: "AIzaSyBzzpoPqkHr5nRYzL0mEWJ-_R3WevGZl9M",
  authDomain: "fir-test-f90ea.firebaseapp.com",
  projectId: "fir-test-f90ea",
  storageBucket: "fir-test-f90ea.appspot.com",
  messagingSenderId: "106643549797",
  appId: "1:106643549797:web:83c036eb3f4628241fe08c",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

/* db.collection("junk")
  .doc()
  .set({
    note: "this is a test note",
    color: "violet",
  })
  .then(() => console.log("data written successfully"))
  .catch((err) => console.log(err));
 */

db.collection("notes")
  .orderBy("timestamp", "desc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const div = document.createElement("div");
      const text = document.createTextNode(`${doc.data().note}`);

      div.classList.add("container2");
      div.classList.add("noteText");

      if (doc.data().color === "violet") {
        div.classList.add("violetColor");
      } else if (doc.data().color === "indigo") {
        div.classList.add("indigoColor");
      } else if (doc.data().color === "blue") {
        div.classList.add("blueColor");
      } else if (doc.data().color === "green") {
        div.classList.add("greenColor");
      } else if (doc.data().color === "yellow") {
        div.classList.add("yellowColor");
      } else if (doc.data().color === "orange") {
        div.classList.add("orangeColor");
      } else if (doc.data().color === "red") {
        div.classList.add("redColor");
      } else {
        div.classList.add("whiteColor");
      }

      if (doc.data().bold == true) {
        console.log("checked");
        div.classList.add("boldDec");
        boldCheck = true;
      }
      if (doc.data().italic == true) {
        div.classList.add("italicDec");
        italicCheck = true;
      }

      if (doc.data().lineThrough == true) {
        div.classList.add("lineThruDec");
        lineThroughCheck = true;
      }
      div.classList.add("blur");
      div.appendChild(text);
      console.log(div);
      notes.append(div);
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
