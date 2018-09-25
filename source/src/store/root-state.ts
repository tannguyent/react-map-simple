import { RouterState } from 'react-router-redux';
import {IPropertyState} from './property/types'
export interface IRootState {
  router: RouterState;
}

export class RootState implements IRootState {
  public router: RouterState;
  public property: IPropertyState;
}