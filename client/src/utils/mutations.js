import {gql} from '@apollo/client'

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation saveBook($input: SavedBookInput) {
  saveBook(input: $input) {
    username
    _id
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
 }
`
export const REMOVE_BOOK = gql`
mutation removeBook($bookid: String!) {
  removeBook(bookId: $bookId) {
    username
    _id
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
  }
}
`