"use client";

import { useState } from "react";

export default function Home() {
  const currentPageLocation = typeof window !== "undefined" && window.location.href;
  const apiBaseUrl = currentPageLocation?.toString().replace('3000', '3001');

  const [response, setResponse] = useState('');
  console.log('@@ response: ', response);

  return (
    <div className="flex flex-col gap-2 container">
      <h1 className="font-bold">Api Demo</h1>
      <p className="text-xs">Api at: {apiBaseUrl}</p>
      <textarea disabled className="border bg-slate-50 py-1 px-2 text-xs" value={response}>
      </textarea>
      <button className="border rounded-md bg-slate-50 py-1 px-2" onClick={async () => {
        const response = await fetch(`${apiBaseUrl}location`);
        const data = await response.text();
        console.log('@@ data: ', data);
        setResponse(data);
      }}>
        Fetch data from API
      </button>
    </div>
  );
}
