<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
          <dv-decoration-10 style="width:35%;height:5px;" />
            <li class="title">
              <dv-decoration-7 style="width:400px;height:30px;"><span>机电设备电子档案</span></dv-decoration-7>
            </li>
          <dv-decoration-10 style="width:35%;height:5px;" />
      </div>
      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">

          <Left-Chart-1 />
          <Left-Chart-2 />
          <Left-Chart-3 />

        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">

              <Center-Cmp />

            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">

                <Right-Chart-1 />

              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">

                <Right-Chart-2 />

              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">

            <Bottom-Charts />

          </dv-border-box-4>
        </div>
      </dv-border-box-1>

    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from './LeftChart1.vue'
import LeftChart2 from './LeftChart2.vue'
import LeftChart3 from './LeftChart3.vue'

import CenterCmp from './CenterCmp.vue'

import RightChart1 from './RightChart1.vue'
import RightChart2 from './RightChart2.vue'

import BottomCharts from './BottomCharts.vue'

export default {
  name: 'DataView',
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2,
    BottomCharts
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/bg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content:space-between;
    align-items:center;
   .title{
      list-style: none;
      span{
        margin: 0 12px;
        font-size: 32px;
        font-weight: bold;
      }
    }
    .mh-left {
      font-size: 20px;
      color: rgb(1,134,187);

      a:visited {
        color: rgb(1,134,187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");
    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1, .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
