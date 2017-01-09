//replace with .env
var config = {
  apiUrl: "http://192.168.0.14:8082"
}

class APIService {

  API_BASE;
  constructor() {
    this.API_BASE = config.apiUrl;
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
