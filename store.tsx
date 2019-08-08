//curl "https://poloniex.com/public?command=returnTicker"
import { action, observable } from 'mobx';
class ObservableStore {
  @observable property = 'hell131';

  @action.bound setProperty(newProperty: string) {
    this.property = (new Date()).toString();
  }
}

const observableStore = new ObservableStore();
export default observableStore;