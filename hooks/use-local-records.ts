"use client";
import { useEffect, useState } from "react";
export function useLocalRecords<T>(key: string) {
  const [records, setRecords] = useState<T[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "[]");
      setRecords(Array.isArray(value) ? value : []);
    } catch {
      setRecords([]);
    }
    setReady(true);
  }, [key]);
  function save(next: T[]) {
    try {
      localStorage.setItem(key, JSON.stringify(next));
      setRecords(next);
      setError("");
      return true;
    } catch {
      setError(
        "Your browser could not save this information. Check available storage and try again.",
      );
      return false;
    }
  }
  return { records, save, ready, error };
}
