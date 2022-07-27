/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      rollNo
      notice {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        rollNo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotice = /* GraphQL */ `
  query GetNotice($id: ID!) {
    getNotice(id: $id) {
      id
      description
      createdAt
      updatedAt
      studentNoticeId
    }
  }
`;
export const listNotices = /* GraphQL */ `
  query ListNotices(
    $filter: ModelNoticeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        createdAt
        updatedAt
        studentNoticeId
      }
      nextToken
    }
  }
`;
