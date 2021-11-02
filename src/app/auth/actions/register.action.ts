import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ActionTypes } from '../store/actionTypes';
import { BackendErrorsInterface } from '../types/backendErrors.interface';
import { RegisterRequestInterface } from '../types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
