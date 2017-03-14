<template>    
  <div class="navbar-time-panel">
    <div>{{dateDisplay}}</div>
    <h1>{{timeDisplay}}</h1>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        _interval: null,
        time: this.$store.getters.currentTimestamp
      }
    },
    computed: {
      dateDisplay: function () {
        return this.formatDate(this.time)
      },
      timeDisplay: function () {
        return this.formatTime(this.time)
      }
    },
    methods: {
      updateTimestamp: function () {
        return this.$store.dispatch('updateTimestamp').then(() => {
          this.time = this.$store.getters.currentTimestamp
        })
      },
      updateTimestampProcessBackground: function () {
        this.updateTimestamp().then(() => {
          this._interval = setInterval(this.updateTimestamp, 1000)
        })
      },
      formatTime: function (date) {
        // var hours = date.getHours()
        var minutes = date.getMinutes()
        var second = date.getSeconds()

        return date.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (second < 10 ? '0' + second : second)
      },
      formatDate: function (date) {
        var monthNames = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ]

        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear()
      }
    },
    created: function () {
      this.updateTimestampProcessBackground()
    },
    beforeDestroy: function () {
      clearInterval(this._interval)
    }
  }

</script>

<style scoped>
  .navbar-time-panel {
    flex: 1;
    text-align: right
  }
</style>
