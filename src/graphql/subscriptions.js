/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateNotice = /* GraphQL */ `
  subscription OnCreateNotice {
    onCreateNotice {
      id
      description
      createdAt
      updatedAt
      studentNoticeId
    }
  }
`;
export const onUpdateNotice = /* GraphQL */ `
  subscription OnUpdateNotice {
    onUpdateNotice {
      id
      description
      createdAt
      updatedAt
      studentNoticeId
    }
  }
`;
export const onDeleteNotice = /* GraphQL */ `
  subscription OnDeleteNotice {
    onDeleteNotice {
      id
      description
      createdAt
      updatedAt
      studentNoticeId
    }
  }
`;
