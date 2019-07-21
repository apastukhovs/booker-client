import axios from 'axios'

export default {
    user:"",

    methods: {
        getUsers() {
            return new Promise((resolve, reject) => {
                axios
                .get("http://mysite.local/booker-server/api/users/")
                    .then(response => {
                        let users = response.data;
                        users.forEach(user => {
                            user.is_active = (user.is_active === '1');
                            user.is_admin = (user.is_admin === '1');
                            resolve(users);
                            console.log(users);
                        })
                    })
                    .catch(error => {
                        reject(error.response);
                    });
            });
        },
        login(user) {
            return new Promise((resolve, reject) => {
                axios
                .put("http://mysite.local/booker-server/api/users/", user)
                    .then(response => {
                        resolve(response.data);
                        console.log(response.data);
                    })
                    .catch(error => {
                        reject(error.response);
                    });
            });
        }
    }
}