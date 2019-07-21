import axios from 'axios'

export default {
    created() {
        let url = "mysite.local/booker-server/api/events/";
        let requestParams = {
          day: this.date.getDate(),
          month: this.date.getMonth(),
          year: this.date.getFullYear()
        };
    
        axios.get(url, {
            params: requestParams
          }).then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error.response);
          });
      }
}