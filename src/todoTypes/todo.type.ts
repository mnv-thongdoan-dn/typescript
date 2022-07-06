export interface TodoTypes {
  todo: {
    id: number,
    content?: string
  }[]
}

export interface TodoAction {
  type: "CREATE" | "EDIT" | "DELETE",
  payload: TodoTypes
}
