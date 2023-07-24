import { getClient } from "../lib/apolloClient";
import { gql } from "@apollo/client";
import { AUTH_LOGIN_QUERY } from "../lib/constant";

export async function LoginController(username: string, password: string) {
  const query = gql`
    ${AUTH_LOGIN_QUERY}
  `;
  const { data } = await getClient().query({ query });

  console.log(data);
}
