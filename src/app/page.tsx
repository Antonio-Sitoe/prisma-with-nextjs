"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { FormEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = React.useState("");
  const [result, setResult] = React.useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch("http://localhost:3000/api/create_teacher", {
      method: "POST",
      body: JSON.stringify({
        data: {
          name: name,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        if (json?.data) setResult(json?.data?.name);
      });
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#252525]">
      <form onSubmit={handleSubmit}>
        {result && <h3 className="text-white">{result}</h3>}
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button className="bg-white ">Mandar </button>
      </form>
    </main>
  );
}
