<template>
  <div class="main-box">
    <div class="top-box">
      <div class="title-box">数字孪生青衣江</div>
      <div class="station-box">
        预设场景:
        <el-dropdown split-button type="primary">
          {{ currentStation }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeStation('楼方电站')">楼方电站</el-dropdown-item>
              <el-dropdown-item @click="changeStation('水津关电站')">水津关电站</el-dropdown-item>
              <el-dropdown-item @click="changeStation('大兴电站')">大兴电站</el-dropdown-item>
              <el-dropdown-item @click="changeStation('雨城')">雨城</el-dropdown-item>
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
              <el-dropdown-item @click="changeWeather('clear')">晴天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('overcast')">阴天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('rain')">雨天</el-dropdown-item>
              <el-dropdown-item @click="changeWeather('snow')">雪天</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div>
        看板显示
        <el-switch v-model="chartSwitch"/>
        闸门开关
        <el-switch v-model="switchState"/>

        <!--        <el-button @click="changeDoor1('open')">开闸</el-button>-->
        <!--        <el-button @click="changeDoor1('close')">关闸</el-button>-->
        <el-button @click="changeWater('up')">洪水演进</el-button>
        <!--        <el-button @click="changeWater('down')">退水</el-button>-->
      </div>
      <div class="time-box">{{ date + " " + time }}</div>
    </div>
    <div class="center-box" v-show="chartSwitch">
      <div class="left-box">
        <div class="chart-box">
          <div class="border-left-top"></div>
          <div class="border-left-down"></div>
          <div class="border-right-top"></div>
          <div class="border-right-down"></div>
          <div class="line-chart" style="width:500px; height: 400px" ref="chart"></div>
        </div>
        <div class="chart-box">
          <div class="border-left-top"></div>
          <div class="border-left-down"></div>
          <div class="border-right-top"></div>
          <div class="border-right-down"></div>
          <div class="ring-chart" style="width:500px; height: 400px" ref="ringChart"></div>
        </div>
      </div>
      <div class="middle-box">
        <div class="switch-box" v-show="switchState">
          <el-switch v-model="door1" active-text="闸门1开" size="large" @change="doorSwitch1()" inline-prompt
                     inactive-text="闸门1关"/>
          <el-switch v-model="door2" active-text="闸门2开" size="large" @change="doorSwitch2()" inline-prompt
                     inactive-text="闸门2关"/>
          <el-switch v-model="door3" active-text="闸门3开" size="large" @change="doorSwitch3()" inline-prompt
                     inactive-text="闸门3关"/>
          <el-switch v-model="door4" active-text="闸门4开" size="large" @change="doorSwitch4()" inline-prompt
                     inactive-text="闸门4关"/>
          <el-switch v-model="door5" active-text="闸门5开" size="large" @change="doorSwitch5()" inline-prompt
                     inactive-text="闸门5关"/>
        </div>
      </div>
      <div class="right-box">
        <div class="chart-box">
          <div class="border-left-top"></div>
          <div class="border-left-down"></div>
          <div class="border-right-top"></div>
          <div class="border-right-down"></div>
          <div class="right-line-chart" style="width:500px; height: 400px" ref="rightBar"></div>
        </div>
        <div class="chart-box">
          <div class="border-left-top"></div>
          <div class="border-left-down"></div>
          <div class="border-right-top"></div>
          <div class="border-right-down"></div>
          <div class="right-ring-chart" style="width:500px; height: 400px" ref="rightRing"></div>
        </div>
      </div>
    </div>


    <el-dialog
        v-model="dialogVisible"
        title="站点信息"
        width="30%"
    >

      <div class="info-box" v-show="stationName == 'dx'">
        <div class="info-item">
          <div>名称:</div>
          <div>大兴电站</div>
        </div>
        <div class="info-item">
          <div>所属行政区划:</div>
          <div>四川省雅安市雨城区大兴街道</div>
        </div>
        <div class="info-item">
          <div>开发方式:</div>
          <div>坝式</div>
        </div>
        <div class="info-item">
          <div>总装机容量（万kW）:</div>
          <div>7.5</div>
        </div>
        <div class="info-item">
          <div>多年平均发电量（GW·h）:</div>
          <div>0.33</div>
        </div>
        <div class="info-item">
          <div>生态达标流量（m3/s）:</div>
          <div>44</div>
        </div>
        <el-image style="width: 80%; height: 300px" :src="dx" :preview-src-list="dxList"/>

      </div>
      <div v-show="stationName == 'sjg'">
        <div class="info-item">
          <div>名称:</div>
          <div>水津关电站</div>
        </div>
        <div class="info-item">
          <div>所属行政区划:</div>
          <div>四川省雅安市雨城区草坝镇</div>
        </div>
        <div class="info-item">
          <div>开发方式:</div>
          <div>坝式</div>
        </div>
        <div class="info-item">
          <div>总装机容量（万kW）:</div>
          <div>6.3</div>
        </div>
        <div class="info-item">
          <div>多年平均发电量（GW·h）:</div>
          <div> 296.86</div>
        </div>
        <div class="info-item">
          <div>生态达标流量（m3/s）:</div>
          <div>43.2</div>
        </div>
        <el-image style="width: 80%; height: 300px" :src="sjg" :preview-src-list="sjgList"/>
      </div>

      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确定        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
import dx from "../assets/dx.jpg"
import sjg from "../assets/sjg.jpg"
import G6 from "@antv/g6"

let dialogVisible = false
// console.log(ue);


export default {
  name: "MainView",
  data() {
    return {
      dx: dx,
      dxList: [dx],
      sjg: sjg,
      sjgList: [sjg],
      door1: false,
      door2: false,
      door3: false,
      door4: false,
      door5: false,

      stationName: '',
      chartSwitch: true,
      switchState: false,
      dialogVisible: false,
      currentStation: "水津关电站",
      currentWeather: "晴天",
      chart: null,
      ringChart: null,
      date: "2022-10-26",
      time: "12:00:00",
      weather: "晴",
      rightBar: null,
      rightRing: null
    }
  },
  methods: {

    btnClick() {
      console.log(ue);
      console.log(ue5);
      ue5("debug", "123")
    },
    changeWater(type) {
      ue5("changeWater", "up")
      setTimeout(() => {
        ue5("changeWater", "down")
      }, 5000)
    },
    changeDoor1(state) {
      ue5("changeDoor1", state)
      console.log(state)
    },
    doorSwitch1() {
      console.log(this.door1);
      if (this.door1 == false) {
        ue5("changeDoor1", "close")
      }
      if (this.door1 == true) {
        ue5("changeDoor1", "open")
      }
    },
    doorSwitch2() {
      console.log(this.door2);
      if (this.door2 == false) {
        ue5("changeDoor2", "close")
      }
      if (this.door2 == true) {
        ue5("changeDoor2", "open")
      }
    },
    doorSwitch3() {
      console.log(this.door3);
      if (this.door3 == false) {
        ue5("changeDoor3", "close")
      }
      if (this.door3 == true) {
        ue5("changeDoor3", "open")
      }
    },
    doorSwitch4() {
      console.log(this.door4);
      if (this.door4 == false) {
        ue5("changeDoor4", "close")
      }
      if (this.door4 == true) {
        ue5("changeDoor4", "open")
      }
    },
    doorSwitch5() {
      console.log(this.door5);
      if (this.door5 == false) {
        ue5("changeDoor5", "close")
      }
      if (this.door5 == true) {
        ue5("changeDoor5", "open")
      }
    },
    changeStation(station) {
      this.currentStation = station
      ue5("changeStation", station)

    },
    changeWeather(weather) {
      if (weather == 'clear') {
        this.currentWeather = "晴天"

      }
      if (weather == 'overcast') {
        this.currentWeather = "阴天"

      }
      if (weather == 'rain') {
        this.currentWeather = "雨天"

      }
      if (weather == 'snow') {
        this.currentWeather = "雪天"

      }

      // this.currentWeather = weather
      ue5("changeWeather", weather)

    },
    init() {
      //2.初始化
      this.chart = this.$echarts.init(this.$refs.chart);
      //3.配置数据
      let option = {
        color: ['#ee6666'],

        title: {
          text: "生态流量",
          textStyle: {
            color: "#FFF",
            fontSize: 20,
            height: 30
          }
        },
        xAxis: {
          type: 'category',
          data: ['小关子电站', '花滩电站', '甘溪坡电站', '水津关电站', '楼方电站', '大兴电站', '中咀电站', '佛山电站', '长石坝电站', '下村电站'],
          axisLabel: {
            formatter: function (params) {
              // params为x轴文字内容
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 1; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = "";
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            },
            textStyle: {
              color: "#fff"   //这里用参数代替了
            }
          },

        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: "#fff"   //这里用参数代替了
            }
          }

        },
        series: [
          {
            data: [10.76, 99.187, 13.221, 56.994, 10.131, 47.411, 2.177, 1.778, 1.924, 9.138],
            type: 'bar'
          }
        ]
      };
      // 4.传入数据
      this.chart.setOption(option);
    },
    setChart() {
      let option = {
        color: ['#73c0de'],
        title: {
          text: "瞬时泄放流量统计",
          textStyle: {
            color: "#FFF",
            fontSize: 20,
            height: 30
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'center',
          bottom: '5%',
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: '站点数量',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 1730, name: '正常泄放'},
              {value: 26, name: '流量预警'},
              {value: 40, name: '数据异常'},
            ]
          }
        ],
      };
      this.ringChart = this.$echarts.init(this.$refs.ringChart);

      this.ringChart.clear();
      this.ringChart.resize()
      this.ringChart.setOption(option);
    },
    initRightBar() {
      //2.初始化
      this.rightBar = this.$echarts.init(this.$refs.rightBar);
      //3.配置数据
      let option = {
        color: ['#91cc75'],
        title: {
          text: "设备在线率",
          textStyle: {
            color: "#FFF",
            fontSize: 20,
            height: 30
          }
        },
        xAxis: {
          type: 'category',
          data: ['10-22', '10-23', '10-24', '10-25', '10-26', '10-27',],
          axisLabel: {
            textStyle: {
              color: "#fff"   //这里用参数代替了
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: "#fff"   //这里用参数代替了
            }
          }
        },
        series: [
          {
            data: [98, 97, 98, 99, 91, 95],
            type: 'line',
            smooth: true
          }
        ]
      };
      // 4.传入数据
      this.rightBar.setOption(option);
    },
    initRightRing() {
      let graph1 = {
        "nodes": [
          {
            "id": "0",
            "name": "Myriel",
            "symbolSize": 19.12381,
            "x": -266.82776,
            "y": 299.6904,
            "value": 28.685715,
            "category": 0
          },
          {
            "id": "1",
            "name": "Napoleon",
            "symbolSize": 2.6666666666666665,
            "x": -418.08344,
            "y": 446.8853,
            "value": 4,
            "category": 0
          },
          {
            "id": "2",
            "name": "MlleBaptistine",
            "symbolSize": 6.323809333333333,
            "x": -212.76357,
            "y": 245.29176,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "3",
            "name": "MmeMagloire",
            "symbolSize": 6.323809333333333,
            "x": -242.82404,
            "y": 235.26283,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "4",
            "name": "CountessDeLo",
            "symbolSize": 2.6666666666666665,
            "x": -379.30386,
            "y": 429.06424,
            "value": 4,
            "category": 0
          },
          {
            "id": "5",
            "name": "Geborand",
            "symbolSize": 2.6666666666666665,
            "x": -417.26337,
            "y": 406.03506,
            "value": 4,
            "category": 0
          },
          {
            "id": "6",
            "name": "Champtercier",
            "symbolSize": 2.6666666666666665,
            "x": -332.6012,
            "y": 485.16974,
            "value": 4,
            "category": 0
          },
          {
            "id": "7",
            "name": "Cravatte",
            "symbolSize": 2.6666666666666665,
            "x": -382.69568,
            "y": 475.09113,
            "value": 4,
            "category": 0
          },
          {
            "id": "8",
            "name": "Count",
            "symbolSize": 2.6666666666666665,
            "x": -320.384,
            "y": 387.17325,
            "value": 4,
            "category": 0
          },
          {
            "id": "9",
            "name": "OldMan",
            "symbolSize": 2.6666666666666665,
            "x": -344.39832,
            "y": 451.16772,
            "value": 4,
            "category": 0
          },
          {
            "id": "10",
            "name": "Labarre",
            "symbolSize": 2.6666666666666665,
            "x": -89.34107,
            "y": 234.56128,
            "value": 4,
            "category": 1
          },
          {
            "id": "11",
            "name": "Valjean",
            "symbolSize": 66.66666666666667,
            "x": -87.93029,
            "y": -6.8120565,
            "value": 100,
            "category": 1
          },
          {
            "id": "12",
            "name": "Marguerite",
            "symbolSize": 4.495239333333333,
            "x": -339.77908,
            "y": -184.69139,
            "value": 6.742859,
            "category": 1
          },
          {
            "id": "13",
            "name": "MmeDeR",
            "symbolSize": 2.6666666666666665,
            "x": -194.31313,
            "y": 178.55301,
            "value": 4,
            "category": 1
          },
          {
            "id": "14",
            "name": "Isabeau",
            "symbolSize": 2.6666666666666665,
            "x": -158.05168,
            "y": 201.99768,
            "value": 4,
            "category": 1
          },
          {
            "id": "15",
            "name": "Gervais",
            "symbolSize": 2.6666666666666665,
            "x": -127.701546,
            "y": 242.55057,
            "value": 4,
            "category": 1
          },
          {
            "id": "16",
            "name": "Tholomyes",
            "symbolSize": 17.295237333333333,
            "x": -385.2226,
            "y": -393.5572,
            "value": 25.942856,
            "category": 2
          },
          {
            "id": "17",
            "name": "Listolier",
            "symbolSize": 13.638097333333334,
            "x": -516.55884,
            "y": -393.98975,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "18",
            "name": "Fameuil",
            "symbolSize": 13.638097333333334,
            "x": -464.79382,
            "y": -493.57944,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "19",
            "name": "Blacheville",
            "symbolSize": 13.638097333333334,
            "x": -515.1624,
            "y": -456.9891,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "20",
            "name": "Favourite",
            "symbolSize": 13.638097333333334,
            "x": -408.12122,
            "y": -464.5048,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "21",
            "name": "Dahlia",
            "symbolSize": 13.638097333333334,
            "x": -456.44113,
            "y": -425.13303,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "22",
            "name": "Zephine",
            "symbolSize": 13.638097333333334,
            "x": -459.1107,
            "y": -362.5133,
            "value": 20.457146,
            "category": 2
          },
          {
            "id": "23",
            "name": "Fantine",
            "symbolSize": 28.266666666666666,
            "x": -313.42786,
            "y": -289.44803,
            "value": 42.4,
            "category": 2
          },
          {
            "id": "24",
            "name": "MmeThenardier",
            "symbolSize": 20.95238266666667,
            "x": 4.6313396,
            "y": -273.8517,
            "value": 31.428574,
            "category": 7
          },
          {
            "id": "25",
            "name": "Thenardier",
            "symbolSize": 30.095235333333335,
            "x": 82.80825,
            "y": -203.1144,
            "value": 45.142853,
            "category": 7
          },
          {
            "id": "26",
            "name": "Cosette",
            "symbolSize": 20.95238266666667,
            "x": 78.64646,
            "y": -31.512747,
            "value": 31.428574,
            "category": 6
          },
          {
            "id": "27",
            "name": "Javert",
            "symbolSize": 31.923806666666668,
            "x": -81.46074,
            "y": -204.20204,
            "value": 47.88571,
            "category": 7
          },
          {
            "id": "28",
            "name": "Fauchelevent",
            "symbolSize": 8.152382000000001,
            "x": -225.73984,
            "y": 82.41631,
            "value": 12.228573,
            "category": 4
          },
          {
            "id": "29",
            "name": "Bamatabois",
            "symbolSize": 15.466666666666667,
            "x": -385.6842,
            "y": -20.206686,
            "value": 23.2,
            "category": 3
          },
          {
            "id": "30",
            "name": "Perpetue",
            "symbolSize": 4.495239333333333,
            "x": -403.92447,
            "y": -197.69823,
            "value": 6.742859,
            "category": 2
          },
          {
            "id": "31",
            "name": "Simplice",
            "symbolSize": 8.152382000000001,
            "x": -281.4253,
            "y": -158.45137,
            "value": 12.228573,
            "category": 2
          },
          {
            "id": "32",
            "name": "Scaufflaire",
            "symbolSize": 2.6666666666666665,
            "x": -122.41348,
            "y": 210.37503,
            "value": 4,
            "category": 1
          },
          {
            "id": "33",
            "name": "Woman1",
            "symbolSize": 4.495239333333333,
            "x": -234.6001,
            "y": -113.15067,
            "value": 6.742859,
            "category": 1
          },
          {
            "id": "34",
            "name": "Judge",
            "symbolSize": 11.809524666666666,
            "x": -387.84915,
            "y": 58.7059,
            "value": 17.714287,
            "category": 3
          },
          {
            "id": "35",
            "name": "Champmathieu",
            "symbolSize": 11.809524666666666,
            "x": -338.2307,
            "y": 87.48405,
            "value": 17.714287,
            "category": 3
          },
          {
            "id": "36",
            "name": "Brevet",
            "symbolSize": 11.809524666666666,
            "x": -453.26874,
            "y": 58.94648,
            "value": 17.714287,
            "category": 3
          },
          {
            "id": "37",
            "name": "Chenildieu",
            "symbolSize": 11.809524666666666,
            "x": -386.44904,
            "y": 140.05937,
            "value": 17.714287,
            "category": 3
          },
          {
            "id": "38",
            "name": "Cochepaille",
            "symbolSize": 11.809524666666666,
            "x": -446.7876,
            "y": 123.38005,
            "value": 17.714287,
            "category": 3
          },
          {
            "id": "39",
            "name": "Pontmercy",
            "symbolSize": 6.323809333333333,
            "x": 336.49738,
            "y": -269.55914,
            "value": 9.485714,
            "category": 6
          },
          {
            "id": "40",
            "name": "Boulatruelle",
            "symbolSize": 2.6666666666666665,
            "x": 29.187843,
            "y": -460.13132,
            "value": 4,
            "category": 7
          },
          {
            "id": "41",
            "name": "Eponine",
            "symbolSize": 20.95238266666667,
            "x": 238.36697,
            "y": -210.00926,
            "value": 31.428574,
            "category": 7
          },
          {
            "id": "42",
            "name": "Anzelma",
            "symbolSize": 6.323809333333333,
            "x": 189.69513,
            "y": -346.50662,
            "value": 9.485714,
            "category": 7
          },
          {
            "id": "43",
            "name": "Woman2",
            "symbolSize": 6.323809333333333,
            "x": -187.00418,
            "y": -145.02663,
            "value": 9.485714,
            "category": 6
          },
          {
            "id": "44",
            "name": "MotherInnocent",
            "symbolSize": 4.495239333333333,
            "x": -252.99521,
            "y": 129.87549,
            "value": 6.742859,
            "category": 4
          },
          {
            "id": "45",
            "name": "Gribier",
            "symbolSize": 2.6666666666666665,
            "x": -296.07935,
            "y": 163.11964,
            "value": 4,
            "category": 4
          },
          {
            "id": "46",
            "name": "Jondrette",
            "symbolSize": 2.6666666666666665,
            "x": 550.3201,
            "y": 522.4031,
            "value": 4,
            "category": 5
          },
          {
            "id": "47",
            "name": "MmeBurgon",
            "symbolSize": 4.495239333333333,
            "x": 488.13535,
            "y": 356.8573,
            "value": 6.742859,
            "category": 5
          },
          {
            "id": "48",
            "name": "Gavroche",
            "symbolSize": 41.06667066666667,
            "x": 387.89572,
            "y": 110.462326,
            "value": 61.600006,
            "category": 8
          },
          {
            "id": "49",
            "name": "Gillenormand",
            "symbolSize": 13.638097333333334,
            "x": 126.4831,
            "y": 68.10622,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "50",
            "name": "Magnon",
            "symbolSize": 4.495239333333333,
            "x": 127.07365,
            "y": -113.05923,
            "value": 6.742859,
            "category": 6
          },
          {
            "id": "51",
            "name": "MlleGillenormand",
            "symbolSize": 13.638097333333334,
            "x": 162.63559,
            "y": 117.6565,
            "value": 20.457146,
            "category": 6
          },
          {
            "id": "52",
            "name": "MmePontmercy",
            "symbolSize": 4.495239333333333,
            "x": 353.66415,
            "y": -205.89165,
            "value": 6.742859,
            "category": 6
          },
          {
            "id": "53",
            "name": "MlleVaubois",
            "symbolSize": 2.6666666666666665,
            "x": 165.43939,
            "y": 339.7736,
            "value": 4,
            "category": 6
          },
          {
            "id": "54",
            "name": "LtGillenormand",
            "symbolSize": 8.152382000000001,
            "x": 137.69348,
            "y": 196.1069,
            "value": 12.228573,
            "category": 6
          },
          {
            "id": "55",
            "name": "Marius",
            "symbolSize": 35.58095333333333,
            "x": 206.44687,
            "y": -13.805411,
            "value": 53.37143,
            "category": 6
          },
          {
            "id": "56",
            "name": "BaronessT",
            "symbolSize": 4.495239333333333,
            "x": 194.82993,
            "y": 224.78036,
            "value": 6.742859,
            "category": 6
          },
          {
            "id": "57",
            "name": "Mabeuf",
            "symbolSize": 20.95238266666667,
            "x": 597.6618,
            "y": 135.18481,
            "value": 31.428574,
            "category": 8
          },
          {
            "id": "58",
            "name": "Enjolras",
            "symbolSize": 28.266666666666666,
            "x": 355.78366,
            "y": -74.882454,
            "value": 42.4,
            "category": 8
          },
          {
            "id": "59",
            "name": "Combeferre",
            "symbolSize": 20.95238266666667,
            "x": 515.2961,
            "y": -46.167564,
            "value": 31.428574,
            "category": 8
          },
          {
            "id": "60",
            "name": "Prouvaire",
            "symbolSize": 17.295237333333333,
            "x": 614.29285,
            "y": -69.3104,
            "value": 25.942856,
            "category": 8
          },
          {
            "id": "61",
            "name": "Feuilly",
            "symbolSize": 20.95238266666667,
            "x": 550.1917,
            "y": -128.17537,
            "value": 31.428574,
            "category": 8
          },
          {
            "id": "62",
            "name": "Courfeyrac",
            "symbolSize": 24.609526666666667,
            "x": 436.17184,
            "y": -12.7286825,
            "value": 36.91429,
            "category": 8
          },
          {
            "id": "63",
            "name": "Bahorel",
            "symbolSize": 22.780953333333333,
            "x": 602.55225,
            "y": 16.421427,
            "value": 34.17143,
            "category": 8
          },
          {
            "id": "64",
            "name": "Bossuet",
            "symbolSize": 24.609526666666667,
            "x": 455.81955,
            "y": -115.45826,
            "value": 36.91429,
            "category": 8
          },
          {
            "id": "65",
            "name": "Joly",
            "symbolSize": 22.780953333333333,
            "x": 516.40784,
            "y": 47.242233,
            "value": 34.17143,
            "category": 8
          },
          {
            "id": "66",
            "name": "Grantaire",
            "symbolSize": 19.12381,
            "x": 646.4313,
            "y": -151.06331,
            "value": 28.685715,
            "category": 8
          },
          {
            "id": "67",
            "name": "MotherPlutarch",
            "symbolSize": 2.6666666666666665,
            "x": 668.9568,
            "y": 204.65488,
            "value": 4,
            "category": 8
          },
          {
            "id": "68",
            "name": "Gueulemer",
            "symbolSize": 19.12381,
            "x": 78.4799,
            "y": -347.15146,
            "value": 28.685715,
            "category": 7
          },
          {
            "id": "69",
            "name": "Babet",
            "symbolSize": 19.12381,
            "x": 150.35959,
            "y": -298.50797,
            "value": 28.685715,
            "category": 7
          },
          {
            "id": "70",
            "name": "Claquesous",
            "symbolSize": 19.12381,
            "x": 137.3717,
            "y": -410.2809,
            "value": 28.685715,
            "category": 7
          },
          {
            "id": "71",
            "name": "Montparnasse",
            "symbolSize": 17.295237333333333,
            "x": 234.87747,
            "y": -400.85983,
            "value": 25.942856,
            "category": 7
          },
          {
            "id": "72",
            "name": "Toussaint",
            "symbolSize": 6.323809333333333,
            "x": 40.942253,
            "y": 113.78272,
            "value": 9.485714,
            "category": 1
          },
          {
            "id": "73",
            "name": "Child1",
            "symbolSize": 4.495239333333333,
            "x": 437.939,
            "y": 291.58234,
            "value": 6.742859,
            "category": 8
          },
          {
            "id": "74",
            "name": "Child2",
            "symbolSize": 4.495239333333333,
            "x": 466.04922,
            "y": 283.3606,
            "value": 6.742859,
            "category": 8
          },
          {
            "id": "75",
            "name": "Brujon",
            "symbolSize": 13.638097333333334,
            "x": 238.79364,
            "y": -314.06345,
            "value": 20.457146,
            "category": 7
          },
          {
            "id": "76",
            "name": "MmeHucheloup",
            "symbolSize": 13.638097333333334,
            "x": 712.18353,
            "y": 4.8131495,
            "value": 20.457146,
            "category": 8
          }
        ],
        "links": [
          {
            "source": "1",
            "target": "0"
          },
          {
            "source": "2",
            "target": "0"
          },
          {
            "source": "3",
            "target": "0"
          },
          {
            "source": "3",
            "target": "2"
          },
          {
            "source": "4",
            "target": "0"
          },
          {
            "source": "5",
            "target": "0"
          },
          {
            "source": "6",
            "target": "0"
          },
          {
            "source": "7",
            "target": "0"
          },
          {
            "source": "8",
            "target": "0"
          },
          {
            "source": "9",
            "target": "0"
          },
          {
            "source": "11",
            "target": "0"
          },
          {
            "source": "11",
            "target": "2"
          },
          {
            "source": "11",
            "target": "3"
          },
          {
            "source": "11",
            "target": "10"
          },
          {
            "source": "12",
            "target": "11"
          },
          {
            "source": "13",
            "target": "11"
          },
          {
            "source": "14",
            "target": "11"
          },
          {
            "source": "15",
            "target": "11"
          },
          {
            "source": "17",
            "target": "16"
          },
          {
            "source": "18",
            "target": "16"
          },
          {
            "source": "18",
            "target": "17"
          },
          {
            "source": "19",
            "target": "16"
          },
          {
            "source": "19",
            "target": "17"
          },
          {
            "source": "19",
            "target": "18"
          },
          {
            "source": "20",
            "target": "16"
          },
          {
            "source": "20",
            "target": "17"
          },
          {
            "source": "20",
            "target": "18"
          },
          {
            "source": "20",
            "target": "19"
          },
          {
            "source": "21",
            "target": "16"
          },
          {
            "source": "21",
            "target": "17"
          },
          {
            "source": "21",
            "target": "18"
          },
          {
            "source": "21",
            "target": "19"
          },
          {
            "source": "21",
            "target": "20"
          },
          {
            "source": "22",
            "target": "16"
          },
          {
            "source": "22",
            "target": "17"
          },
          {
            "source": "22",
            "target": "18"
          },
          {
            "source": "22",
            "target": "19"
          },
          {
            "source": "22",
            "target": "20"
          },
          {
            "source": "22",
            "target": "21"
          },
          {
            "source": "23",
            "target": "11"
          },
          {
            "source": "23",
            "target": "12"
          },
          {
            "source": "23",
            "target": "16"
          },
          {
            "source": "23",
            "target": "17"
          },
          {
            "source": "23",
            "target": "18"
          },
          {
            "source": "23",
            "target": "19"
          },
          {
            "source": "23",
            "target": "20"
          },
          {
            "source": "23",
            "target": "21"
          },
          {
            "source": "23",
            "target": "22"
          },
          {
            "source": "24",
            "target": "11"
          },
          {
            "source": "24",
            "target": "23"
          },
          {
            "source": "25",
            "target": "11"
          },
          {
            "source": "25",
            "target": "23"
          },
          {
            "source": "25",
            "target": "24"
          },
          {
            "source": "26",
            "target": "11"
          },
          {
            "source": "26",
            "target": "16"
          },
          {
            "source": "26",
            "target": "24"
          },
          {
            "source": "26",
            "target": "25"
          },
          {
            "source": "27",
            "target": "11"
          },
          {
            "source": "27",
            "target": "23"
          },
          {
            "source": "27",
            "target": "24"
          },
          {
            "source": "27",
            "target": "25"
          },
          {
            "source": "27",
            "target": "26"
          },
          {
            "source": "28",
            "target": "11"
          },
          {
            "source": "28",
            "target": "27"
          },
          {
            "source": "29",
            "target": "11"
          },
          {
            "source": "29",
            "target": "23"
          },
          {
            "source": "29",
            "target": "27"
          },
          {
            "source": "30",
            "target": "23"
          },
          {
            "source": "31",
            "target": "11"
          },
          {
            "source": "31",
            "target": "23"
          },
          {
            "source": "31",
            "target": "27"
          },
          {
            "source": "31",
            "target": "30"
          },
          {
            "source": "32",
            "target": "11"
          },
          {
            "source": "33",
            "target": "11"
          },
          {
            "source": "33",
            "target": "27"
          },
          {
            "source": "34",
            "target": "11"
          },
          {
            "source": "34",
            "target": "29"
          },
          {
            "source": "35",
            "target": "11"
          },
          {
            "source": "35",
            "target": "29"
          },
          {
            "source": "35",
            "target": "34"
          },
          {
            "source": "36",
            "target": "11"
          },
          {
            "source": "36",
            "target": "29"
          },
          {
            "source": "36",
            "target": "34"
          },
          {
            "source": "36",
            "target": "35"
          },
          {
            "source": "37",
            "target": "11"
          },
          {
            "source": "37",
            "target": "29"
          },
          {
            "source": "37",
            "target": "34"
          },
          {
            "source": "37",
            "target": "35"
          },
          {
            "source": "37",
            "target": "36"
          },
          {
            "source": "38",
            "target": "11"
          },
          {
            "source": "38",
            "target": "29"
          },
          {
            "source": "38",
            "target": "34"
          },
          {
            "source": "38",
            "target": "35"
          },
          {
            "source": "38",
            "target": "36"
          },
          {
            "source": "38",
            "target": "37"
          },
          {
            "source": "39",
            "target": "25"
          },
          {
            "source": "40",
            "target": "25"
          },
          {
            "source": "41",
            "target": "24"
          },
          {
            "source": "41",
            "target": "25"
          },
          {
            "source": "42",
            "target": "24"
          },
          {
            "source": "42",
            "target": "25"
          },
          {
            "source": "42",
            "target": "41"
          },
          {
            "source": "43",
            "target": "11"
          },
          {
            "source": "43",
            "target": "26"
          },
          {
            "source": "43",
            "target": "27"
          },
          {
            "source": "44",
            "target": "11"
          },
          {
            "source": "44",
            "target": "28"
          },
          {
            "source": "45",
            "target": "28"
          },
          {
            "source": "47",
            "target": "46"
          },
          {
            "source": "48",
            "target": "11"
          },
          {
            "source": "48",
            "target": "25"
          },
          {
            "source": "48",
            "target": "27"
          },
          {
            "source": "48",
            "target": "47"
          },
          {
            "source": "49",
            "target": "11"
          },
          {
            "source": "49",
            "target": "26"
          },
          {
            "source": "50",
            "target": "24"
          },
          {
            "source": "50",
            "target": "49"
          },
          {
            "source": "51",
            "target": "11"
          },
          {
            "source": "51",
            "target": "26"
          },
          {
            "source": "51",
            "target": "49"
          },
          {
            "source": "52",
            "target": "39"
          },
          {
            "source": "52",
            "target": "51"
          },
          {
            "source": "53",
            "target": "51"
          },
          {
            "source": "54",
            "target": "26"
          },
          {
            "source": "54",
            "target": "49"
          },
          {
            "source": "54",
            "target": "51"
          },
          {
            "source": "55",
            "target": "11"
          },
          {
            "source": "55",
            "target": "16"
          },
          {
            "source": "55",
            "target": "25"
          },
          {
            "source": "55",
            "target": "26"
          },
          {
            "source": "55",
            "target": "39"
          },
          {
            "source": "55",
            "target": "41"
          },
          {
            "source": "55",
            "target": "48"
          },
          {
            "source": "55",
            "target": "49"
          },
          {
            "source": "55",
            "target": "51"
          },
          {
            "source": "55",
            "target": "54"
          },
          {
            "source": "56",
            "target": "49"
          },
          {
            "source": "56",
            "target": "55"
          },
          {
            "source": "57",
            "target": "41"
          },
          {
            "source": "57",
            "target": "48"
          },
          {
            "source": "57",
            "target": "55"
          },
          {
            "source": "58",
            "target": "11"
          },
          {
            "source": "58",
            "target": "27"
          },
          {
            "source": "58",
            "target": "48"
          },
          {
            "source": "58",
            "target": "55"
          },
          {
            "source": "58",
            "target": "57"
          },
          {
            "source": "59",
            "target": "48"
          },
          {
            "source": "59",
            "target": "55"
          },
          {
            "source": "59",
            "target": "57"
          },
          {
            "source": "59",
            "target": "58"
          },
          {
            "source": "60",
            "target": "48"
          },
          {
            "source": "60",
            "target": "58"
          },
          {
            "source": "60",
            "target": "59"
          },
          {
            "source": "61",
            "target": "48"
          },
          {
            "source": "61",
            "target": "55"
          },
          {
            "source": "61",
            "target": "57"
          },
          {
            "source": "61",
            "target": "58"
          },
          {
            "source": "61",
            "target": "59"
          },
          {
            "source": "61",
            "target": "60"
          },
          {
            "source": "62",
            "target": "41"
          },
          {
            "source": "62",
            "target": "48"
          },
          {
            "source": "62",
            "target": "55"
          },
          {
            "source": "62",
            "target": "57"
          },
          {
            "source": "62",
            "target": "58"
          },
          {
            "source": "62",
            "target": "59"
          },
          {
            "source": "62",
            "target": "60"
          },
          {
            "source": "62",
            "target": "61"
          },
          {
            "source": "63",
            "target": "48"
          },
          {
            "source": "63",
            "target": "55"
          },
          {
            "source": "63",
            "target": "57"
          },
          {
            "source": "63",
            "target": "58"
          },
          {
            "source": "63",
            "target": "59"
          },
          {
            "source": "63",
            "target": "60"
          },
          {
            "source": "63",
            "target": "61"
          },
          {
            "source": "63",
            "target": "62"
          },
          {
            "source": "64",
            "target": "11"
          },
          {
            "source": "64",
            "target": "48"
          },
          {
            "source": "64",
            "target": "55"
          },
          {
            "source": "64",
            "target": "57"
          },
          {
            "source": "64",
            "target": "58"
          },
          {
            "source": "64",
            "target": "59"
          },
          {
            "source": "64",
            "target": "60"
          },
          {
            "source": "64",
            "target": "61"
          },
          {
            "source": "64",
            "target": "62"
          },
          {
            "source": "64",
            "target": "63"
          },
          {
            "source": "65",
            "target": "48"
          },
          {
            "source": "65",
            "target": "55"
          },
          {
            "source": "65",
            "target": "57"
          },
          {
            "source": "65",
            "target": "58"
          },
          {
            "source": "65",
            "target": "59"
          },
          {
            "source": "65",
            "target": "60"
          },
          {
            "source": "65",
            "target": "61"
          },
          {
            "source": "65",
            "target": "62"
          },
          {
            "source": "65",
            "target": "63"
          },
          {
            "source": "65",
            "target": "64"
          },
          {
            "source": "66",
            "target": "48"
          },
          {
            "source": "66",
            "target": "58"
          },
          {
            "source": "66",
            "target": "59"
          },
          {
            "source": "66",
            "target": "60"
          },
          {
            "source": "66",
            "target": "61"
          },
          {
            "source": "66",
            "target": "62"
          },
          {
            "source": "66",
            "target": "63"
          },
          {
            "source": "66",
            "target": "64"
          },
          {
            "source": "66",
            "target": "65"
          },
          {
            "source": "67",
            "target": "57"
          },
          {
            "source": "68",
            "target": "11"
          },
          {
            "source": "68",
            "target": "24"
          },
          {
            "source": "68",
            "target": "25"
          },
          {
            "source": "68",
            "target": "27"
          },
          {
            "source": "68",
            "target": "41"
          },
          {
            "source": "68",
            "target": "48"
          },
          {
            "source": "69",
            "target": "11"
          },
          {
            "source": "69",
            "target": "24"
          },
          {
            "source": "69",
            "target": "25"
          },
          {
            "source": "69",
            "target": "27"
          },
          {
            "source": "69",
            "target": "41"
          },
          {
            "source": "69",
            "target": "48"
          },
          {
            "source": "69",
            "target": "68"
          },
          {
            "source": "70",
            "target": "11"
          },
          {
            "source": "70",
            "target": "24"
          },
          {
            "source": "70",
            "target": "25"
          },
          {
            "source": "70",
            "target": "27"
          },
          {
            "source": "70",
            "target": "41"
          },
          {
            "source": "70",
            "target": "58"
          },
          {
            "source": "70",
            "target": "68"
          },
          {
            "source": "70",
            "target": "69"
          },
          {
            "source": "71",
            "target": "11"
          },
          {
            "source": "71",
            "target": "25"
          },
          {
            "source": "71",
            "target": "27"
          },
          {
            "source": "71",
            "target": "41"
          },
          {
            "source": "71",
            "target": "48"
          },
          {
            "source": "71",
            "target": "68"
          },
          {
            "source": "71",
            "target": "69"
          },
          {
            "source": "71",
            "target": "70"
          },
          {
            "source": "72",
            "target": "11"
          },
          {
            "source": "72",
            "target": "26"
          },
          {
            "source": "72",
            "target": "27"
          },
          {
            "source": "73",
            "target": "48"
          },
          {
            "source": "74",
            "target": "48"
          },
          {
            "source": "74",
            "target": "73"
          },
          {
            "source": "75",
            "target": "25"
          },
          {
            "source": "75",
            "target": "41"
          },
          {
            "source": "75",
            "target": "48"
          },
          {
            "source": "75",
            "target": "68"
          },
          {
            "source": "75",
            "target": "69"
          },
          {
            "source": "75",
            "target": "70"
          },
          {
            "source": "75",
            "target": "71"
          },
          {
            "source": "76",
            "target": "48"
          },
          {
            "source": "76",
            "target": "58"
          },
          {
            "source": "76",
            "target": "62"
          },
          {
            "source": "76",
            "target": "63"
          },
          {
            "source": "76",
            "target": "64"
          },
          {
            "source": "76",
            "target": "65"
          },
          {
            "source": "76",
            "target": "66"
          }
        ],
        "categories": [
          {
            "name": "A"
          },
          {
            "name": "B"
          },
          {
            "name": "C"
          },
          {
            "name": "D"
          },
          {
            "name": "E"
          },
          {
            "name": "F"
          },
          {
            "name": "G"
          },
          {
            "name": "H"
          },
          {
            "name": "I"
          }
        ]
      }


      let graph = {
        "nodes": [
          {"id": "1", "category": 0, "value": "青衣江", "name": "青衣江", "symbolSize": 55},
          {"id": "2", "category": 0, "value": "花溪河", "name": "花溪河", "symbolSize": 40},
          {"id": "3", "category": 0, "value": "周公河", "name": "周公河", "symbolSize": 40},
          {"id": "4", "category": 0, "value": "荥经河", "name": "荥经河", "symbolSize": 40},
          {"id": "5", "category": 0, "value": "西河", "name": "西河", "symbolSize": 40},
          {"id": "6", "category": 0, "value": "大渡河", "name": "大渡河", "symbolSize": 40},
          {"id": "7", "category": 0, "value": "天全河", "name": "天全河", "symbolSize": 40},
          {"id": "8", "category": 0, "value": "玉溪河", "name": "玉溪河", "symbolSize": 40},
          {"id": "9", "category": 1, "value": "雨城区", "name": "雨城区", "symbolSize": 30},
          {"id": "10", "category": 1, "value": "洪雅县", "name": "洪雅县", "symbolSize": 30},
          {"id": "11", "category": 1, "value": "五通桥区", "name": "五通桥区", "symbolSize": 30},
          {"id": "12", "category": 1, "value": "天权县", "name": "天权县", "symbolSize": 30},
          {"id": "13", "category": 1, "value": "庐山县", "name": "庐山县", "symbolSize": 30},
          {"id": "14", "category": 1, "value": "宝兴县", "name": "宝兴县", "symbolSize": 30},
          {"id": "15", "category": 1, "value": "夹江县", "name": "夹江县", "symbolSize": 30},
          {"id": "16", "category": 2, "value": "夹江", "name": "夹江", "symbolSize": 25},
          {"id": "17", "category": 2, "value": "洪雅", "name": "洪雅", "symbolSize": 25},
          {"id": "18", "category": 2, "value": "多营坪", "name": "多营坪", "symbolSize": 25},

        ],
        "links": [
          {"source": "1", "target": "2"},
          {"source": "1", "target": "2"},
          {"source": "1", "target": "3"},
          {"source": "1", "target": "4"},
          {"source": "1", "target": "5"},
          {"source": "1", "target": "6"},
          {"source": "1", "target": "7"},
          {"source": "1", "target": "8"},
          {"source": "1", "target": "9"},
          {"source": "9", "target": "1"},
          {"source": "1", "target": "10"},
          {"source": "1", "target": "11"},
          {"source": "1", "target": "12"},
          {"source": "1", "target": "13"},
          {"source": "1", "target": "14"},
          {"source": "1", "target": "15"},
          {"source": "1", "target": "16"},
          {"source": "1", "target": "17"},
          {"source": "1", "target": "18"}
        ],
        "categories": [
          {"name": "区县",},
          {"name": "河流",},
          {"name": "观测站点",},
        ]
      }
      //2.初始化
      this.rightRing = this.$echarts.init(this.$refs.rightRing);

      // graph.nodes.forEach(function (node) {
      //   node.symbolSize = 5;
      // });
      let option = {
        color: ['#91cc75', '#73c0de', '#ee6666'],

        title: {
          text: '青衣江',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
              return a.name;
            }),

            textStyle: {
              color: "#fff"
            }
          }
        ],
        force: {
          repulsion: 1000,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
          gravity: 0.1, //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
        },
        label: {
          show: true,
          textStyle: {
            fontSize: 12,
            color: "black",
          },

          position: 'bottom',//标签位置
        },
        // edgeLabel: {
        //   show: true,
        //   fontSize: 12,
        //   formatter: "{c}"
        // },
        series: [
          {
            // name: '青衣江',
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: 'inside',
            },
            force: {
              repulsion: 100
            }
          }
        ]
      };
      // 4.传入数据
      this.rightRing.setOption(option);
    },
  },
  mounted() {
    ue.interface.click = (val) => {
      console.log(val)
      this.dialogVisible = true
      this.stationName = val
    }

    this.init()
    this.setChart()
    this.initRightBar()
    this.initRightRing()
    let ueHour = moment().format("HH")
    let ueMinute = moment().format("mm")
    let ueTime = ueHour * 100 + Number(ueMinute)
    console.log(ueTime)
    let afterMinutes = moment().diff(moment(moment().format("YYYY-MM-DD")), 'minutes')
    console.log(afterMinutes * 1.6);
    moment.duration()
    // ue5("changeTime", afterMinutes * 1.6)
    setInterval(() => {
      this.date = moment().format("YYYY-MM-DD")
      this.time = moment().format("HH:mm:ss")
      // let ueHour = moment().format("HH")
      // let ueMinute = moment().format("mm")
      // let ueTime = ueHour * 100 + Number(ueMinute)
      // console.log(ueTime)
    }, 1000)

    // setInterval(() => {
    //   let ueHour = moment().format("HH")
    //   let ueMinute = moment().format("mm")
    //   let ueTime = ueHour * 100 + Number(ueMinute)
    //   console.log(ueTime)
    //   let afterMinutes = moment().diff(moment(moment().format("YYYY-MM-DD")), 'minutes')
    //   console.log(afterMinutes * 1.6);
    //   moment.duration()
    //   ue5("changeTime", afterMinutes * 1.6)
    // }, 60000)

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
  /*width: 100vw;*/
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4));
  color: white;

}

.title-box {
  flex: 1;
  font-size: 38px;
  padding: 0 20px;
}

.station-box {
  flex: 1;
}

.weather-box {
  flex: 1;
}

.border-left-top {
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  position: absolute;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.border-left-down {
  left: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  position: absolute;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}

.border-right-top {
  right: 0;
  top: 0;
  width: 10px;
  height: 10px;
  position: absolute;
  border-right: 2px solid #02a6b5;
  border-top: 2px solid #02a6b5;
}

.border-right-down {
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  position: absolute;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}

.time-box {
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.left-box {
  /*margin: 20px;*/
}

.chart-box {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(0, 0, 0, 0.58);
  width: 500px;
  margin: 10px 0;

}

.ring-box {
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
  background: rgba(0, 0, 0, 0.58);
  width: 500px;
}

.line-chart {

}

.right-box {
  /*width: 100px;*/
  /*background-color: black;*/
}

.main-box {
  overflow: hidden;
}

.center-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}


.middle-box {
  position: relative;
}

.switch-box {
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 10px;
  justify-content: center;
  align-items: center;
}

.switch-item {
  display: flex;
  flex-direction: row;
}

.info-box {
  display: flex;
  flex-direction: column;
}

.info-item {
  display: flex;
  flex-direction: row;
}

.info-item div:first-child {
  font-weight: bold;
  flex: 1;
}

.info-item div:last-child {
  font-weight: bold;
  flex: 2;
}

</style>
