<template>
    <div class="container">
        <div class="rooms">
            <div>
                <ul>
                    <li v-for="(room, index) in rooms" :key="index">
                        <a href="#" @click="selectRoom(room)">Boardroom {{index+1}}</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(room, index) in rooms" :key="index">
                        <a href="#" @click="selectRoom(room)"> {{room.name}}</a> 
                    </li>
                </ul>
            </div>
        </div>
    <nav>
        <router-link to="/format">
            <button class="btn">Format</button>
        </router-link>
        <router-link to="/book">
            <button class="btn">Book It!</button>
        </router-link>
         <router-link to="/admin">
            <button class="btn">Add User</button>
        </router-link>
    </nav>    
       <div class="calendar">
            <div class="cal-head">
                <div class="month-buttons">
                    <div class="prev-month" @click="month--"> </div>
                        <span class="selected-room">{{ currentRoom.name }}</span>
                    <div class="next-month" @click="month++"></div>
                </div>
                <div class="toggle">
                    <label for="month">Month</label>
                    <select name="" id="month" v-model="month">
                        <option value="0">January</option>
                        <option value="1">February</option>
                        <option value="2">March</option>
                        <option value="3">April</option>
                        <option value="4">May</option>
                        <option value="5">June</option>
                        <option value="6">July</option>
                        <option value="7">August</option>
                        <option value="8">September</option>
                        <option value="9">October</option>
                        <option value="10">November</option>
                        <option value="11">December</option>
                    </select>
                    <label for="year">Year</label>
                    <input type="number" v-model="year"/>
                    <span class="show-date">{{ showedDate | formatDate}}</span>
                </div>
            </div>
        <div class="cal-main">
            <table  border="1px"> 
                <tr>
                <td v-for="(dayName,index) in weekDayNames" :key="index">
                    {{dayName}}
                </td>
                </tr>

                <tr
                v-for="(week, indexWeek) in daysArray" 
                :key="indexWeek">
                <day
                    v-for="(date,index) in week" 
                    :date="date"
                    :key="index"
                    v-on:select-day="selectDay"
                    v-on:show-event="showEvent"
                >
                </day>
                </tr>
            </table>
        </div>
    </div>
    </div>
</template>


<script>
import calendar from "../calendar/calendar";

import Day from "./Day";
export default {
  data: function() {
    return {
      day: calendar.today.getDate(),
      month: calendar.today.getMonth(),
      year: calendar.today.getFullYear(),
      events: [],
      isMondayFirst: calendar.isMondayFirst,
      isTime24: calendar.isTime24
    };
  },
  watch: {
    day: function(val) {
      calendar.currentMonthDate.setDate(val);
      this.day = calendar.currentMonthDate.getDate();
    },
    month: function(val) {
      calendar.currentMonthDate.setMonth(val);
      this.month = calendar.currentMonthDate.getMonth();
      this.year = calendar.currentMonthDate.getFullYear();
    },
    year: function(val) {
      calendar.currentMonthDate.setFullYear(val);
      this.year = calendar.currentMonthDate.getFullYear();
    },
    isMondayFirst: function(val) {
      calendar.isMondayFirst = val;
    },
    isTime24: function(val) {
      calendar.isTime24 = val;
    }
  },

  created(){
    if (calendar.currentMonthDate){
      this.day= calendar.currentMonthDate.getDate();
      this.month= calendar.currentMonthDate.getMonth();
      this.year= calendar.currentMonthDate.getFullYear();
    }
  },

  components: {
    Day
  },

  computed: {
    showedDate() {
      return calendar.currentMonthDate;
    },
    dayChecked() {
      return calendar.selectedDate;
    },
    daysArray() {
      return calendar.currentMonthDays(this.year, this.month);
    },
    rooms() {
      return calendar.rooms;
    },
    currentRoom() {
      return calendar.currentRoom;
    },
    weekDayNames() {
      if (calendar.isMondayFirst) {
        return [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ];
      } else {
        return [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];
      }
    }
  },

  filters: {
    formatDate(date) {
      let timeFormat = { day: "2-digit", month: "short", year: "numeric" };
      return date.toLocaleDateString("en-US", timeFormat);
    },
    formatDateFull(date) {
      let timeFormat = { day: "numeric", month: "long", year: "numeric" };
      return date.toLocaleDateString("en-GB", timeFormat);
    }
  },

  methods: {
    selectDay(date, tasks) {
      calendar.selectedDate = date;
      calendar.currentMonthDate = date;
      this.day = date.getDate();
      this.month = date.getMonth();
      this.year = date.getFullYear();
    },

    selectRoom(room) {
      calendar.currentRoom = room;
      calendar.getEvents();
    },

    getEvents() {
      this.events = calendar.events; 
    },
    showEvent(event) {
      alert("Event: " + event.description);
    }
  }
};
</script>

<style>
body{
  background: #FFFFFF;
}

nav {
    padding: 10px 0;
}

.rooms {
  margin: 0px;
  text-align: center;
}
.rooms ul {
  display: inline-block;
  margin-bottom: 0px;
}

.rooms ul li {
  display: inline-block;
}

.rooms li:before {
  content: " | ";
  display: inline;
}

.rooms ul li:first-child:before {
  content: "";
  display: none;
}

.options {
  margin-left: 50px;
}

.calendar {
  max-width: 800px;
  background: #4CAF50;
  padding: 20px;
  border: 1px solid rgb(40, 40, 70);
  color: #FFFFFF;
}

.event-panel {
  margin-top: 20px;
  margin-left: 50px;
  padding: 5px;
  float: left;
}

.event-detail {
  border: 1px solid rgb(40, 40, 70);
  background: rgb(207, 222, 160);
  padding: 20px;
}

.event-form {
  padding: 20px;
}

.prev-month {
  float: left;
}

.next-month {
  float: right;
}

.prev-month {
    width: 0;
	height: 0;
	border-top: 20px solid transparent;
	border-right: 20px solid #fff;
	border-bottom: 20px solid transparent;
    cursor: pointer;
}

.next-month {
    width: 0;
	height: 0;
	border-top: 20px solid transparent;
	border-left: 20px solid #fff;
	border-bottom: 20px solid transparent;
    cursor: pointer;
	-margin-left:  10px;
}
.show-date {
  border: 1px solid rgb(40, 40, 70);
  background: #4CAF50;
  text-align: center;
  margin-left: 10px;
  padding: 5px;
}


.selected-room {
  background: rgb(218, 213, 238);
  margin-left: 33%;
  text-align: center;
  border: 1px solid rgb(40, 40, 70);
  padding: 5px;
}

.toggle{
  padding: 30px;
  text-align: center;
}

td {
  border: 1px solid rgb(157, 157, 224);
  vertical-align: top;
}

.day {
  background: #FFFFFF;
  color: #4CAF50;
  padding: 5px;
  width: 81px;
  height: 81px;
  font-size: 11pt;
}

.day ul {
  margin: 0;
  padding: 0;
  margin-top: 5px;
  text-align: left;
}
.day li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.day-number {
  text-align: right;
  vertical-align: top;
}
.restDay {
  background: rgb(214, 182, 200);
  color: white;
}

.hasEvent {
  background: rgb(212, 189, 165);
}
.passedEvent{
  background: rgb(195, 186, 168);
}

.otherMonth {
  color: #A9A9A9;
  opacity: 0.5;
}

.currentDay {
  font-weight: bold;
  border: 4px solid rgb(57, 6, 124);
  color: rgb(30, 8, 75);
}

.day:hover {
  opacity: 0.5;
}

.selected.day:hover,
.selected {
  background: #4CAF50;
  color: #FFFFFF;   
}


.right-panel {
   margin-top: 40px;
  margin-left: 50px;
  float: left;
}
.opt-button{
  padding: 5px;
}

.btn {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  border: 0;
  padding: 10px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer; 
  opacity: 0.7;
}

.btn:hover {
    opacity: 1;
}

.cal-main {
    padding-left: 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>