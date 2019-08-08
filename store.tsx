import {action, observable} from 'mobx';
import axios from 'axios';
import {fromJS} from 'immutable';

class ObservableStore {
  @observable tickers = [];
  @observable isLoading = false;

  constructor() {
    this.fetchTickers();
    setInterval(() => {
      this.fetchTickers();
    }, 3000)
  }

  @action.bound
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  };

  @action.bound
  fetchTickers() {
    //this.setIsLoading(true);
    axios.get('https://poloniex.com/public?command=returnTicker')
      .then(({data}) => {
        this.tickers =
          Object
            .keys(data)
            .reduce((acc, item, index) => [...acc, fromJS({
              ...data[item],
              //last: index < 3 ? data[item].last * 2 : data[item].last,
              //last: data[item].last * 2,
              name: item
            })], []);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        //this.setIsLoading(false);
        // always executed
      });
  }
}

const observableStore = new ObservableStore();
export default observableStore;