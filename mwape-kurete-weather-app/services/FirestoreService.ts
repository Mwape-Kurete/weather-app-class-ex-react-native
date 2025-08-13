import { addDoc, collection, doc } from "firebase/firestore";
import { Reading } from "../interface/Reading";
import { db } from "../firebase";
import { getDocs } from "firebase/firestore/lite";
import { Day } from "../interface/Days";

export const addReading = async (reading: Reading, selectedDay: string) => {
  // TODO: Add reading to specific day

  //var ref = collection(db, `days/${selectedDay}/readings`);

  var dayRef = doc(db, `day`, selectedDay);
  var readingRef = collection(dayRef, "readings");

  var docRef = await addDoc(readingRef, reading);
};

export const getAllDays = async () => {
  var allDays: Day[] = []; //I want to return this

  // TODO: return the days that we want to read
  const querySnapshot = await getDocs(collection(db, "days"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    var day: Day = {
      name: doc.data().name,
      icon: doc.data().icon,
      id: doc.id,
    };

    allDays.push(day);
  });

  return allDays;
};

export const getDayReading = async (dayId: string) => {
  var allReadings: Reading[] = [];

  const { collection, getDocs } = require("firebase/firestore");
  // Query a reference to a subcollection
  const querySnapshot = await getDocs(
    collection(db, "days", dayId, "readings")
  );
  querySnapshot.forEach(
    (doc: {
      id: any;
      data: () => { (): any; new (): any; temp: any; time: any };
    }) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      var reading: Reading = {
        temp: doc.data().temp,
        time: doc.data().time,
        id: doc.id,
      };

      allReadings.push(reading);
    }
  );
};
