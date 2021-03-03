
import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getState = (state: AppState) => state;



export const getUsersData = createSelector(getState,
    (state: AppState) => {
        return state && state.applicationUsers && state.applicationUsers.users ? state.applicationUsers.users : undefined;
    });

export const getTitlesSet = createSelector(getState,
    (state: AppState) => {
        return state && state.applicationUsers && state.applicationUsers.titles ? state.applicationUsers.titles : undefined;
    });