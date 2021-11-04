import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ActionTypes } from '../actionTypes';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
