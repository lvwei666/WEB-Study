import { combineReducers } from "redux";
import { repositoriesReducer } from "./repositories";
import { RepositoryEntity } from "../model";

export interface State {
  repositories: RepositoryEntity[]
}

export const state = combineReducers<State>({
  repositories: repositoriesReducer
})