'use client'
import React from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";



export default function App() {
  const router = useRouter()
  usePathname();
  useEffect(()=>{
      router.push('/home')   
  },[router]);
  return (
    <>
    </>
  );
}
