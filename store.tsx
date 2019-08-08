import {action, observable} from 'mobx';
import axios from 'axios';

class ObservableStore {
  @observable tickers = [];
  @observable isLoading = false;

  constructor() {
    this.fetchTickers();
  }

  @action.bound
  setIsLoading(isLoading){
    this.isLoading = isLoading;
  };

  @action.bound
  fetchTickers() {
    this.setIsLoading(true);
    setTimeout(() => {
      axios.get('https://poloniex.com/public?command=returnTicker')
        .then(({data}) => {
          this.tickers =
            Object
              .keys(data)
              .reduce((acc, item) => [{...data[item], name: item}, ...acc], []);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(() => {
          this.setIsLoading(false);
          // always executed
        });
    }, 3000);
  }
}

const observableStore = new ObservableStore();
export default observableStore;