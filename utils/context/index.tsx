"use client";

import { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

type FirebaseDataProps = {
  id: string;
  loggedTimeIn?: number;
  name?: string;
  role?: string;
  scheduledTimeOut?: number;
  notified: boolean;
  emergencies: boolean;
  currentlyWorn: boolean;
  status: string;
  latitude?: number;
  longitude?: number;
  altitude?: number;
};

type DataContextProps = {
  firebaseData: FirebaseDataProps[];
  accidents: number;
  warnings: number;
  workers: number;
  notifiedWorkers: number;
  emergencies: number;
  currentlyWorn?: number;
};

export const DataContext = createContext<DataContextProps>({
  firebaseData: [],
  accidents: 0,
  warnings: 0,
  workers: 0,
  notifiedWorkers: 0,
  emergencies: 0,
  currentlyWorn: 1,
});

export function DataContextProvider({ children }: { children: ReactNode }) {
  const [firebaseData, setFirebaseData] = useState<FirebaseDataProps[]>([]);

  const [accidents, setAccidents] = useState(0);
  const [warnings, setWarnings] = useState(0);
  const [workers, setWorkers] = useState(0);
  const [notifiedWorkers, setNotifiedWorkers] = useState(0);
  const [emergencies, setEmergencies] = useState(0);
  const [currentlyWorn, setCurrentlyWorn] = useState(0);

  const memoizedFirebaseData = useMemo(() => firebaseData, [firebaseData]);

  function getAccidents() {
    const accidents = Object.values(memoizedFirebaseData).filter(
      (data: FirebaseDataProps) => data.status === "danger"
    );
    setAccidents(accidents.length);
  }

  function getWarnings() {
    const warnings = Object.values(memoizedFirebaseData).filter(
      (data: FirebaseDataProps) => data.status === "warning"
    );
    setWarnings(warnings.length);
  }

  function getNotifiedWorkers() {
    const notifiedWorkers = Object.values(memoizedFirebaseData).filter(
      (data: FirebaseDataProps) => data.notified === true
    );
    setNotifiedWorkers(notifiedWorkers.length);
  }

  function getEmergencies() {
    const emergencies = Object.values(memoizedFirebaseData).filter(
      (data: FirebaseDataProps) => data.emergencies === true
    );
    setEmergencies(emergencies.length);
  }

  function getNHU() {
    const currentlyWorn = Object.values(memoizedFirebaseData).filter(
      (data: FirebaseDataProps) => data.currentlyWorn === false
    );
    setCurrentlyWorn(currentlyWorn.length);
  }

  useEffect(() => {
    const firebaseDataRef = ref(db, "timelogs");
    onValue(firebaseDataRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        const firebaseDataArray = Object.values(data) as FirebaseDataProps[];
        setFirebaseData(firebaseDataArray);
      }
    });
  }, []);

  useEffect(() => {
    setWorkers(memoizedFirebaseData.length);
    getAccidents();
    getWarnings();
    getNotifiedWorkers();
    getEmergencies();
    getNHU();
  }, [memoizedFirebaseData]);

  return (
    <DataContext.Provider
      value={{
        firebaseData,
        accidents,
        warnings,
        workers,
        notifiedWorkers,
        emergencies,
        currentlyWorn,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
