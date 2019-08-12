import {action, observable} from 'mobx';
import axios from 'axios';

const API_ROOT = 'https://poloniex.com/public';

class ObservableStore {
  @observable tickers = [];
  @observable isLoading = false;
  @observable error = null;

  @action.bound
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  };

  @action.bound
  setError(error) {
    this.error = error;
  };

  @action.bound
  fetchTickers(showLoader) {
    if (showLoader) {
      this.setIsLoading(true);
    }

    return axios.get(`${API_ROOT}?command=returnTicker`)
      .then(({data}) => {
        this.setError(null);
        if (data.error) {
          throw Error(JSON.stringify(data));
        }
        this.tickers =
          Object
            .keys(data)
            .reduce((acc, item) => {
              return [...acc, {
                ...data[item],
                name: item
              }];
            }, []);
      })
      .catch((error) => {
        console.log('Error occured: ', error);
        this.setError(error);
      })
      .finally(() => {
        if (showLoader) {
          this.setIsLoading(false);
        }
      });
  }
}

const observableStore = new ObservableStore();
export default observableStore;
