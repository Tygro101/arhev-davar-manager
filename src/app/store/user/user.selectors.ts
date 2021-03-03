
import { createSelector } from '@ngrx/store';
import { AppState } from '../state';

export const getState = (state: AppState) => state;



export const getUser = createSelector(getState,
    (state: AppState) => {
        return state && state.user ? state.user : undefined;
    });