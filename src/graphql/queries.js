/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTasks = /* GraphQL */ `
  query GetTasks($id: ID!) {
    getTasks(id: $id) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTasksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserEvents = /* GraphQL */ `
  query GetUserEvents($id: ID!) {
    getUserEvents(id: $id) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const listUserEvents = /* GraphQL */ `
  query ListUserEvents(
    $filter: ModelUserEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
