/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTasks = /* GraphQL */ `
  subscription OnCreateTasks($filter: ModelSubscriptionTasksFilterInput) {
    onCreateTasks(filter: $filter) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTasks = /* GraphQL */ `
  subscription OnUpdateTasks($filter: ModelSubscriptionTasksFilterInput) {
    onUpdateTasks(filter: $filter) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTasks = /* GraphQL */ `
  subscription OnDeleteTasks($filter: ModelSubscriptionTasksFilterInput) {
    onDeleteTasks(filter: $filter) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserEvents = /* GraphQL */ `
  subscription OnCreateUserEvents(
    $filter: ModelSubscriptionUserEventsFilterInput
  ) {
    onCreateUserEvents(filter: $filter) {
      userId
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserEvents = /* GraphQL */ `
  subscription OnUpdateUserEvents(
    $filter: ModelSubscriptionUserEventsFilterInput
  ) {
    onUpdateUserEvents(filter: $filter) {
      userId
      count
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserEvents = /* GraphQL */ `
  subscription OnDeleteUserEvents(
    $filter: ModelSubscriptionUserEventsFilterInput
  ) {
    onDeleteUserEvents(filter: $filter) {
      userId
      count
      id
      createdAt
      updatedAt
    }
  }
`;
