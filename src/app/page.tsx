"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [token, setToken] = useState("");

  const handleGet = () => {
    axios.get(
      `https://api.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`
    );
  };
  const getToken = async () => {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(res);
    setToken(res.data.access_token);
  };
  console.log(token);

  const getData = async () => {
    const res = await axios.get(
      "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res);
  };

  return (
    <main>
      <button
        className="bg-purple-700 h-16 w-16 rounded-xl"
        onClick={() => getToken()}
      >
        fetch me
      </button>

      <button
        className="bg-purple-700 h-16 w-16 rounded-xl"
        onClick={() => getData()}
      >
        GET DATA
      </button>
    </main>
  );
}
