import { gql } from "@apollo/client";
import {
  AUTH_LOGIN_QUERY,
  AUTH_REGISTER_MUTATION,
  GRAPHQL_ENDPOINT,
} from "../lib/constant";

export async function LoginController(username: string, password: string) {
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
    if (data.errors) {
      return data.errors[0].message;
    } else {
      return data.data.LoginAccount;
    }
  }
}

export async function RegisterController(
  username: string,
  password: string,
  confirmPassword: string,
  email: string
) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: AUTH_REGISTER_MUTATION,
      variables: {
        inputUser: {
          userId: "dummydummydummy",
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          role: "user",
        },
      },
    }),
  });

  if (response.ok) {
    const responseData = await response.json();
    if (responseData.errors) {
      return responseData.errors[0].message;
    } else {
      console.log(responseData);
      return responseData.data.createNewUser;
    }
  }
}
