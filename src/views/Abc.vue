<template>
  <div class="main">
    <!--左侧列表-->
    <!--    <div class="list" [ngStyle]="{'width': leftWidth + 'px'}">-->
      <div class="list" style="width: 200px">
        <div class="list-total">
          <div class="river-num">{{ eleArr.length }}</div>
          <div class="river-words">
            个水电站
          </div>
        </div>
        <div class="list-area">
          <!--        <div class="list-row" *ngFor="let l of eleArr" [class.list-row-selected]="l.WRPCD == details.WRPCD" (click)="eleClick(l)">-->
          <div class="list-row" v-for="l of eleArr">
            <div class="row-left">
              <div class="row-icon">
                <!--              <img src="ds.baseUrl + 'images/local.png'">-->
              </div>
              <div class="row-name">{{ l.name }}</div>
            </div>
            <!-- <div class="row-right">
                <div class="row-childNum">123</div>
            </div> -->
          </div>
        </div>
        <!-- <div class="list-pagination">
            <nz-pagination class="myMiniPagination" [(nzPageIndex)]="pageIndex" [(nzPageSize)]="pageSize"
                [nzTotal]="totalSize" [nzSize]="'small'" (nzPageIndexChange)="getEleList(pageIndex)">
            </nz-pagination>
        </div> -->
      </div>
      <!--    <div class="details" *ngIf="detalisShow">-->
      <!--      <div class="details-title">电站详情</div>-->
      <!--      <div class="details-list">-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">名称：</div>-->
      <!--          <div class="details-value">{{details.name}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">经度：</div>-->
      <!--          <div class="details-value">{{details.lng}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">纬度：</div>-->
      <!--          <div class="details-value">{{details.lat}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">编码：</div>-->
      <!--          <div class="details-value">{{details.WRPCD}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">视频：</div>-->
      <!--          <div class="details-value">-->
      <!--            <button nz-button nzType="primary" (click)="showVideo()">查看</button>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">开发方式：</div>-->
      <!--          <div class="details-value">{{details['开发方式']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">所属行政区划：</div>-->
      <!--          <div class="details-value">{{details['所属行政区划']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">厂房地点：</div>-->
      <!--          <div class="details-value">{{details['厂房地点']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">取水口地址：</div>-->
      <!--          <div class="details-value">{{details['取水口地址']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">取水河流：</div>-->
      <!--          <div class="details-value">{{details['取水河流']}}</div>-->
      <!--        </div>-->
      <!--/*        <div class="details-row">*/-->
      <!--/*          <div class="details-label">装机容量（万kw）：</div>*/-->
      <!--/*          <div class="details-value">{{details['装机容量（万kw）']}}</div>*/-->
      <!--/*        </div>*/-->
      <!--/*        <div class="details-row">*/-->
      <!--/*          <div class="details-label">平均发电量（万kw）：</div>*/-->
      <!--/*          <div class="details-value">{{details['平均发电量（万kw）']}}</div>*/-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">建站日期：</div>-->
      <!--          <div class="details-value">{{details['建站日期']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">投产年份：</div>-->
      <!--          <div class="details-value">{{details['投产年份']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">业主名称：</div>-->
      <!--          <div class="details-value">{{details['业主名称']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">管理单位：</div>-->
      <!--          <div class="details-value">{{details['管理单位']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">主要负责人：</div>-->
      <!--          <div class="details-value">{{details['主要负责人']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">职务：</div>-->
      <!--          <div class="details-value">{{details['职务']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">电话：</div>-->
      <!--          <div class="details-value">{{details['电话']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">核准生态流量值（m³/s）：</div>-->
      <!--          <div class="details-value">{{details['核准生态流量值（m³/s）']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">生态流量下泄模式：</div>-->
      <!--          <div class="details-value">{{details['生态流量下泄模式']}}</div>-->
      <!--        </div>-->
      <!--        <div class="details-row">-->
      <!--          <div class="details-label">简介：</div>-->
      <!--          <div class="details-value">{{details['简介']}}</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--视频-->
      <!--    <div class="videoIframe" *ngIf="videoShow" [ngStyle]="{'left': leftWidth + 20 + 'px'}">-->
      <!--      <div class="videoClose" (click)="videoShow = false">-->
      <!--        <span nz-icon nzType="close" nzTheme="outline"></span>-->
      <!--      </div>-->
      <!--      <div class="v-container">-->
      <!--        <video style="width: 100%;max-height: 600px;" id="player1" muted autoplay="autoplay" preload="auto"-->
      <!--               controls="controls"></video>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--地图-->
      <div class="map">
        <!--      <app-map [mapId]="'mapHypo'" [fRouter]="'/layout/hydropower/'" [leftWidth]="leftWidth" [loadControls]="false" (mapLoaded)="mapLoaded()"></app-map>-->
      </div>
    </div>
</template>

<script>
export default {
  name: "Abc",
  data() {
    return {
      eleArr: [
        {
          name: "小花电站"
        }
      ]
    }
  },
}
</script>

<style scoped lang="less">

.main {
  width: 100%;
  height: 100%;
  position: relative;

  .list {
    display: flex;
    flex-direction: column;
    padding: 10px 5px 0 0;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 2;
    height: calc(100% - 20px);
    background-color: rgba(0, 21, 41, 0.4);
    border-radius: 5px;

    .list-total {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: flex-start;
      padding-left: 10px;

      .river-num {
        color: rgb(242, 196, 31);
        font-size: 22px;
        font-style: italic;
        font-weight: bolder;
      }

      .river-words {
        color: white;
        font-size: 20px;
        margin: 2px 0 0 10px;
      }
    }

    .list-area {
      width: 100%;
      height: calc(100% - 80px);
      overflow: auto;

      .list-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        height: 40px;
        cursor: pointer;
        margin-right: 5px;

        &:hover {
          background-color: rgb(34, 63, 105);
          border-left: 4px solid rgb(67, 122, 218);
        }

        .row-left {
          display: flex;

          .row-icon {
            display: flex;
            align-items: center;
            margin: 0 10px 0 15px;
          }

          .row-level {
            margin: 0 10px;
            background-color: rgb(46, 134, 255);
            border-radius: 5px;
            padding: 2px 8px;
            font-size: 12px;
          }
        }

        .row-right {
          .row-childNum {
            margin-right: 10px;
            color: rgb(96, 131, 204);
          }
        }
      }

      .list-row-selected {
        background-color: rgba(34, 63, 105, 0.5);
        border-left: 4px solid rgb(67, 122, 218);
      }
    }

    /*滚动条样式*/

    .list-area::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px !important;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px !important;
    }

    .list-area::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 5px !important;
      background: rgb(74, 80, 116) !important;
    }

    .list-area::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      border-radius: 0 !important;
      background: rgb(42, 46, 72) !important;
    }


    .list-pagination {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }

  .details {
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 2;
    height: calc(100% - 20px);
    background-color: rgba(0, 21, 41, 0.4);
    border-radius: 5px;
    color: white;

    .details-title {
      font-size: 20px;
      height: 40px;
    }

    .details-list {
      height: calc(100% - 40px);
      overflow: auto;
      width: 100%;

      .details-row {
        display: flex;
        width: 100%;
        font-size: 17px;
        margin-bottom: 10px;

        .details-label {
          width: 40%;
        }

        .details-value {
          width: 60%;
        }
      }
    }

    /*滚动条样式*/

    .details-list::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 4px !important;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 4px !important;
    }

    .details-list::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 5px !important;
      background: rgb(74, 80, 116) !important;
    }

    .details-list::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      border-radius: 0 !important;
      background: rgb(42, 46, 72) !important;
    }
  }

  .videoIframe {
    position: absolute;
    width: 1000px;
    // height: 600px;
    // left: calc(50% - 500px);
    top: 100px;
    z-index: 2;

    .videoClose {
      position: absolute;
      background-color: darkgrey;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -15px;
      right: -15px;
      border-radius: 50%;
      color: white;
      font-size: 18px;
      cursor: pointer;
      z-index: 2;
    }
  }


  .map {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

</style>
