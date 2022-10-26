<template>
  <div>
    <div class="top-box">
      <div class="title-box">数字孪生青衣江</div>
      <div class="station-box">
        当前站点:
        <el-dropdown split-button type="primary">
          {{ currentStation }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeStation('楼方电站')">楼方电站</el-dropdown-item>
              <el-dropdown-item @click="changeStation('水津关电站')">水津关电站</el-dropdown-item>
              <el-dropdown-item @click="changeStation('大兴电站')">大兴电站</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="weather-box">
        天气:
        <el-dropdown split-button type="primary">
          {{ currentWeather }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeWeather('晴天')">晴天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('阴天')">阴天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('雨天')">雨天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('雪天')">雪天</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="left-box">aa</div>
    <div class="right-box">bb</div>

  </div>
</template>

<script>
console.log(ue);
ue.interface.click = function (val) {
  alert("aaa")
  console.log("aaaaaaaa")
}

export default {
  name: "MainView",
  data() {
    return {
      currentStation: "水津关电站",
      currentWeather: "晴天"
    }
  },
  methods: {
    btnClick() {
      console.log(ue);
      console.log(ue5);
      ue5("debug", "123")
    },
    changeStation(station) {
      this.currentStation = station
      ue5("changeStation", station)

    },
    changeWeather(weather) {
      this.currentWeather = weather
      ue5("changeWeather", weather)

    },


  },
  mounted() {

  },

}
</script>
<style scoped>

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.top-box {
  display: flex;
  flex-direction: row;
  width: 100vw;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4));
  color: white;

}

.title-box {
  flex: 1;
  font-size: 48px;
}

.station-box {
  flex: 1;
}

.weather-box {
  flex: 1;
}
</style>
