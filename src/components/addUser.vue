<template>
    <div>
        <h2>Users</h2> 
        <div class="opt-button">
           <router-link to="/adduser">
             <button>Back</button>
            </router-link>
        </div>
        <div class="employee-data">
          <div class="field-row">
            <label for="fullname">1. Enter new user full name</label>
            <input id="fullname" type="text" v-model="user.fullname"/>
          </div>

          <div class="field-row">
            <label for="email">2. Enter new user e-mail</label>
            <input id="email" type="email" v-model="user.email"/>
          </div>

          <div class="field-row">
            <label for="username">3. Enter new username</label>
            <input id="username" type="text" v-model="user.username"/>
          </div>
          <div class="field-row">
            <label for="password">4. Enter new user password</label>
            <input id="password" type="password" v-model="user.password"/>
          </div>
          <div class="is-admin">
            <input id="is_admin" type="checkbox" v-model="user.is_admin"/>
            <label for="password">Is Admin</label>
          </div>
          <button class="btn" @click="save">Save</button>
        </div>
    </div>
</template>

<script>




</script>