import { Action } from '@ngrx/store';


export const LOAD_FROM_STORAGE = "Load From Persist Storage";


export class LoadPersistData implements Action{
    readonly type = LOAD_FROM_STORAGE;
}
