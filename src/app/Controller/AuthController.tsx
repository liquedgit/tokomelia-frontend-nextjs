import { ApolloError, gql, useQuery } from "@apollo/client";
import { client } from "../layout";
import { AUTH_LOGIN_QUERY, GRAPHQL_ENDPOINT } from "../lib/constant";
import axios from "axios";

export async function LoginController(username: string, password: string) {
  const query = gql`
    ${AUTH_LOGIN_QUERY}
  `;

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AUTH_LOGIN_QUERY,
      variables: {
        username: username,
        password: password,
      },
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    if (data.errors) {
      return data.errors[0].message;
    } else {
      return data.data.LoginAccount;
    }
  }
}

export async function RegisterController() {}
