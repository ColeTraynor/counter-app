
class APIService {

  API_BASE;
  constructor() {
    this.API_BASE = "http://172.17.153.171:8082";
  }

  extractData(res) {
    return res.json() || {};
  }

  get(url) {
    return fetch(this.API_BASE + url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    }).then( res => this.extractData(res) )
    .catch(error => {
        console.log("error", error);
        return {
            success: false
        }
    });
  }

  post(url, args) {
    return fetch(this.API_BASE + url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(args)
    }).then( res => this.extractData(res) )
    .catch( error => {
      console.log(error);
        return {
            success: false
        }
    });
  }

}

export default new APIService();
