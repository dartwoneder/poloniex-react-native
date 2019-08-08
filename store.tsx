import {action, observable} from 'mobx';
import axios from 'axios';

class ObservableStore {
  @observable tickers = [];
  @observable isLoading = false;

  constructor() {
    this.fetchTickers();
    setTimeout(() => {
      this.fetchTickers();
    }, 4000)
  }

  @action.bound
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  };

  @action.bound
  fetchTickers() {
    this.setIsLoading(true);
    axios.get('https://poloniex.com/public?command=returnTicker')
      .then(({data}) => {
        this.tickers =
          Object
            .keys(data)
            .reduce((acc, item) => [...acc,{...data[item], name: item}], []);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        this.setIsLoading(false);
        // always executed
      });
  }
}

const observableStore = new ObservableStore();
export default observableStore;