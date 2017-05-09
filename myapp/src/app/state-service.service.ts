import { Injectable } from '@angular/core';

@Injectable()
export class StateService{
  state: String;

  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state: String) {
    this.state = state;
  }

}
