"use client";

import { useState, useEffect, createContext, ReactNode } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const DataContext = createContext([]);

export function DataContextProvider({ children }: { children: ReactNode }) {
  const [firebaseData, setFirebaseData] = useState([]);

  useEffect(() => {
    const firebaseDataRef = ref(db, "timelogs");
    onValue(firebaseDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const firebaseDataArray = Object.values(data);
        setFirebaseData(firebaseDataArray as any);
      }
    });
  }, []);

  return (
    <DataContext.Provider value={firebaseData}>{children}</DataContext.Provider>
  );
}
