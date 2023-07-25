"use client";

import {
  AUTH_VERIFY_EMAIL_MUTATION,
  GRAPHQL_ENDPOINT,
} from "@/app/lib/constant";

import { useEffect, useState } from "react";

interface ResponseVerify {
  message: string;
}

export default function VerifyEmail({
  params,
}: {
  params: { unique: string };
}) {
  const [data, setData] = useState<ResponseVerify>();

  const VerifyEmail = async () => {
    const temp = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AUTH_VERIFY_EMAIL_MUTATION,
        variables: {
          token: params.unique,
        },
      }),
    });

    const fetchedData = await temp.json();
    console.log(fetchedData);
    if (fetchedData.data) {
      setData(fetchedData.data.verifyEmail);
    } else if (!fetchedData.data) {
      setData(fetchedData.errors[0]);
    }
  };

  useEffect(() => {
    VerifyEmail();
  }, []);

  return (
    <>
      {!data && (
        <>
          <h1 className="font-bold text-2xl">Loading...</h1>
        </>
      )}
      {data && (
        <>
          <h1 className="font-bold text-2xl">{data.message}</h1>
        </>
      )}
    </>
  );
}
