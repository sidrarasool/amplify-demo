/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTasks = /* GraphQL */ `
  mutation CreateTasks(
    $input: CreateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    createTasks(input: $input, condition: $condition) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTasks = /* GraphQL */ `
  mutation UpdateTasks(
    $input: UpdateTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    updateTasks(input: $input, condition: $condition) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTasks = /* GraphQL */ `
  mutation DeleteTasks(
    $input: DeleteTasksInput!
    $condition: ModelTasksConditionInput
  ) {
    deleteTasks(input: $input, condition: $condition) {
      id
      userId
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUserEvents = /* GraphQL */ `
  mutation CreateUserEvents(
    $input: CreateUserEventsInput!
    $condition: ModelUserEventsConditionInput
  ) {
    createUserEvents(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateUserEvents = /* GraphQL */ `
  mutation UpdateUserEvents(
    $input: UpdateUserEventsInput!
    $condition: ModelUserEventsConditionInput
  ) {
    updateUserEvents(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserEvents = /* GraphQL */ `
  mutation DeleteUserEvents(
    $input: DeleteUserEventsInput!
    $condition: ModelUserEventsConditionInput
  ) {
    deleteUserEvents(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
