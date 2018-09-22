import { RouterState } from 'react-router-redux';
import {IPropertyState} from './modules/property/types'
export interface IRootState {
  router: RouterState;
}

export class RootState implements IRootState {
  public router: RouterState;
  public property: IPropertyState;
}