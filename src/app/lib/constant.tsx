export const AUTH_LOGIN_QUERY = `query LoginAuth($username : String!, $password : String!){
    LoginAccount(username:$username, password : $password){
      message
      token
    }
}`;

export const AUTH_REGISTER_MUTATION = `mutation CreateAccount($inputUser : NewUser!){
    createNewUser(input:$inputUser){
      id
      username
      role
    }
}`;

export const AUTH_VERIFY_EMAIL_MUTATION = `mutation VerifyUser($token : String!){
    verifyEmail(token: $token){
      message
    }
  }`;

export const GET_ALL_USERS_QUERY = `query GetAllUser{
    GetAllUser{
      id
      username
      email
      role
    }
  }`;

export const GRAPHQL_ENDPOINT = "http://localhost:9785/query";
