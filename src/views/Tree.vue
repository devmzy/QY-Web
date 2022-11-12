<template>
  <div id="container" style="width: 100%;height: 100%" class="graph-box"></div>

</template>

<script>
import G6 from "@antv/g6";

export default {
  name: "Tree",
  methods: {
    data() {
      return {
        currentGraph: null
      }
    },
    initGraph() {
      const {
        Util
      } = G6;

      const colorArr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#6F5EF9',
        '#6DC8EC',
        '#D3EEF9',
        '#DECFEA',
        '#FFE0C7',
        '#1E9493',
        '#BBDEDE',
        '#FF99C3',
        '#FFE0ED',
        '#CDDDFD',
        '#CDF3E4',
        '#CED4DE',
        '#FCEBB9',
        '#D3CEFD',
        '#945FB9',
        '#FF9845',
      ];

      const rawData = {
        label: '一河一策',
        id: '0',
        children: [
          {
            label: '1、基本情况',
            id: '0-1',
            color: '#5AD8A6',
            children: [
              {
                label: '河流基本概况',
                children: [
                  {
                    label: '青衣江位于四川盆地西部边缘，系大渡河左岸一级支流，岷江右岸二级支流，干流长度 286.70 千米，主源宝兴河发源于雅安市宝兴县硗碛藏族乡，流经雅安市、眉山市及乐山市，在乐山市市中区草鞋渡汇入大渡河',
                  },
                ]
              },
              {
                label: '行政区划',
                children: [
                  {
                    label: '青衣江干流依次流经宝兴县、芦山县、天全县、雨城区、洪雅县、夹江县及乐山市市中区 7 个县（区），干流长度 286.70 千米',
                  },]
              },
              {
                label: '水质',
                children: [
                  {
                    label: '青衣江干流水质优良，近年来干流主要监测断面均能 100%达到水质目标，水质以Ⅱ类为主。',
                  },]
              },
              {
                label: '功能定位',
                children: [
                  {
                    label: '根据水功能区划定结果，青衣江干流被划分为 6 个一级水功能区，其中 2 个保护区，共计长 90 千米；2 个保留区，共计长 144 千米；2 个开发利用区，划分成 5 个二级水功能区，共计长 43.2 千米。',
                  },]
              }
            ]
          },
          {
            label: '2、回顾性评价',
            id: '0-2',
            color: '#F6BD16',
            children: [
              {
                label: '整体情况',
                children: [
                  {
                    label: '青衣江全面推行河长制目标中 17 项目标，均达到预期目标。 青衣江全面推行河长制目标分解目标中，（1）雅安市共有目标' +
                        '17 项，完成目标 17 项；（2）眉山市共有目标 15 项，完成目标 15 项；' +
                        '（3）乐山市共有目标 18 项，完成目标 18 项。',
                  },]
              },
              {
                label: '分段情况',
                id: '0-2-2'
              },
              {
                label: '分县情况',
                id: '0-2-3',
                children: [
                  {
                    label: '芦山县',
                    id: '0-2-3-1'
                  },
                  {
                    label: '天全县',
                    id: '0-2-3-2'
                  },
                  {
                    label: '宝兴县',
                    id: '0-2-3-3'
                  },
                  {
                    label: '雨城区',
                    id: '0-2-3-4'
                  }
                ]
              }
            ]
          },
          {
            label: '3、现状调查',
            id: '0-3',
            color: '#269A99',
            children: [
              {
                label: '水资源开发利用现状',
                id: '0-3-1',
                children: [
                  {
                    label: '水电资源开发',
                    children: [{
                      label: "根据《2020 年四川省水资源评价报告》，2020 年，青衣江降水总量 245.22 亿立方米，地表水资源量 187.07 亿立方米，地下水资源量40.76 亿立方米，水资源总量 187.07 亿立方米。"
                    }]
                  },
                  {
                    label: '水资源量利用',
                    children: [{
                      label: "2020 年，青衣江流域主要涉及的雅安市、眉山市、乐山市用水总量为 72462 万立方米，达到 2020 年用水总量控制红线目标。"
                    }]
                  },
                  {
                    label: '灌溉、生活、工业用水开发利用情况',
                    children: [{
                      label: "雅安市流域内用水 34462 万立方米，万元工业增加值用水量较 2015年下降 54.17%，万元地区生产总值用水量较 2015 年下降 35.86%；眉山市流域内用水 10600 万立方米，万元工业增加值用水量较 2015 年下降 85.29%，万元地区生产总值用水量较 2015 年下降 35.05%；乐山市流域内用水 27400 万立方米，万元工业增加值用水量较 2015 年下降 28.27%，万元地区生产总值用水量较 2015 年下降 30.47%。雅安市、眉山市、乐山市均达到 2020 年用水总量控制红线目标及用水效率目标"
                    }]
                  },
                  {
                    label: '入河排污口',
                    children: [{
                      label: "目前青衣江干流有入河排污口 57 处，其中雅安市 31 处、眉山市 11 处、乐山市 15 处。按排污口规模计，规模以上排污口 17 处，规模以下排污口 40 处；按污排口类型计，有工业排污口 11 处，生活排污口 41 处，混合排口 5 处。"
                    }]
                  },
                  {
                    label: '水源地',
                    children: [{
                      label: "目前青衣江流域内有县级及以上饮用水水源地 15 处，其中雅安市有 10 处（市级 1 处、县级 9 处），眉山市有 2 处（市级 1 处、县级 1 处），乐山市有 3 处（市级 1 处、县级 2 处）。按饮用水源类型分，地表水类型饮用水源 12 处，地下水类型 1 处。"
                    },
                      {
                        label: "青衣江流域内有乡镇饮用水源 84 处，其中雅安市 71 处，2020年供水量 3478 万 m3，眉山市 8 处，2019 年供水量 54.34万 m3，乐山市 5 处，年供水量 33.28 万m3。"
                      },
                    ]
                  },
                  {
                    label: '水功能区',
                    children: [
                      {
                        label: "根据水功能区划分结果，青衣江干流划分为 2 个保护区，2 个保留区，2 个开发利用区。青衣江干流水质良好，根据监测结果，2020年青衣江干流各水功能区水质达标率为 100%。"
                      }
                    ]
                  }
                ]
              },
              {
                label: '水域岸线管理保护现状',
                id: '0-3-2',
                children: [
                  {
                    label: '涉河建筑物',
                    children: [{
                      label: "青衣江干流有重要拦河闸 20 处，均为干流水电站拦河闸，其中雅安市 14 处，眉山市 4 处，乐山市 2 处。"
                    }, {
                      label: "青衣江干流有河堤 76 处，河堤长度 147.681 千米。按市（州）区分，雅安市 39 处，长 53.217 千米，眉山市 14 处，长 21.516 千米，乐山市 23 处，长 72.948 千米。按岸别分，左岸 35 处，长 72.432 千米，右岸 41 处，长 75.249 千米。"
                    }]
                  },
                  {
                    label: '河道采砂',
                    children: [
                      {
                        label: "落实河道采砂管理，雅安市已编制完成“十四五”期间采砂规划有《四川省雅安市青衣江干流水津关—龟都府河段采砂规划报告》《四川省雅安市天全县河道采砂规划报告（2019~2023 年）》《荥经县荥经河（荥河乡以上河段）采砂规划（2019 年~2024 年）》《荥经县荥经河\n" +
                            "（荥河乡以下河段）、经河采砂规划（2019~2024 年）》《四川省雅安市芦山县河道采砂规划报告（2020~2023 年）》，同时 2020 年依规发放流域采砂许可证 8 个，完成整改销号河道砂石问题 27 个；眉山市完成《青衣江洪雅段河道（2021-2025）采砂规划》编制，严格落实采砂管理“四个责任人”公示制度和砂石采运联单管理制度，印制下发\n" +
                            "《四川省砂石采运管理单》，对砂石的采运严格执行一车一票登记管理。"
                      }
                    ]
                  },
                  {
                    label: '码头航道',
                    children: [
                      {
                        label: "青衣江干流有港口、码头共 14 处，其中雅安市 6 处，眉山市 8处，码头共占用岸线 353 米，其中雅安市搭沟漩码头、茶地坎码头已启动渡改桥。"
                      }
                    ]
                  },
                  {
                    label: '城市规划',
                    children: [
                      {
                        label: "青衣江流域各市有县城及城市污水处理厂 9 座，雅安市 7 座，眉山市、乐山市各 1 座，污水处理总规模 11.95 万m3/d，2020 年污水实际处理量 3875.22 万m3。\n" +
                            "县城及城市污水处理厂配套管网 561.34 km，其中雅安市配套官\n" +
                            "网 315.24 km，眉山市配套管网 91 km，乐山市配套管网 155.1 km。\n" +
                            "污水处理厂排放标准方面，有 4 座污水处理厂执行《四川省岷江、\n" +
                            "沱江流域水污染物排放标准》，其余 5 座执行《城镇污水处理厂污染物排放标准》中一级标准A 标准。"
                      }
                    ]
                  },
                  {
                    label: '滩涂保护',
                    children: [
                      {
                        label: "青衣江流域有8 处市级以上自然保护区，自然保护区面积1405.12平方千米，其中国家级 1 处，省级 5 处，全部分布于流域内的雅安、眉山市，有 3 处保护区主要保护国家一级、二级重点保护水生野生动物"
                      }
                    ]
                  },
                  {
                    label: '渔业资源',
                    children: [
                      {
                        label: "青衣江鱼类资源较丰富，是四川盆地西部重要的渔区之一。根据有关资料统计，青衣江有鱼类 120 种和亚种，分隶于 8 目 18 科 79 属， 120 种鱼类中有 35 种为长江上游特有鱼类。\n" +
                            "120 种和亚种鱼类中主要是鲤科鱼类，有 66 种，占青衣江鱼类总种数的 55%；其次是鳅科 13 种占 11.0%，其余各科种类均较少。鲤科中以的鮈亚科、鲌亚科的种类居多，在中下游占优势。鳅科，尤 其是条鳅类和鲤科中的裂腹亚科鱼类，则在中游上段和上游分布较多。"
                      }
                    ]
                  }
                ]
              },
              {
                label: '水污染防治现状',
                id: '0-3-3',
                children: [
                  {
                    label: '工业污染',
                    children: [
                      {
                        label: "流域内各乡镇污水处理厂基本实现全覆盖，但仍存在配套管网相对滞后问题，污水收集率低，乡镇污水处理厂实际运行负荷率普遍不高，同时部分已建成污水处理设施存在未运行或运行不正常的问题。"
                      }
                    ]
                  },
                  {
                    label: '乡镇生活污染',
                    children: [
                      {
                        label: "流域内各乡镇污水处理厂基本实现全覆盖，但仍存在配套管网相对滞后问题，污水收集率低，乡镇污水处理厂实际运行负荷率普遍不高，同时部分已建成污水处理设施存在未运行或运行不正常的问题。"
                      }
                    ]
                  },
                  {
                    label: '农业、农村面源污染',
                    children: [
                      {
                        label: "畜禽养殖粪污资源化利用水平不高，存在个别畜禽养殖场粪污处理设施设备配套不完善，种养结合不紧密。个别养殖业主环保意识淡薄，治污主体责任落实不到位。畜禽养殖场粪便和废污水虽大部分用于农耕，但个别畜禽养殖场废污水直排情况仍偶有发生。"
                      }
                    ]
                  }
                ]
              },
              {
                label: '水环境治理现状',
                id: '0-3-4',
                children: [
                  {
                    label: '水环境质量',
                    children: [
                      {
                        label: "在城镇水环境基本得到治理改善的情况下，农村水环境质量问题凸显，主要表现为（1）部分支沟、支渠的农村小流域黑臭水体普遍存在；（2）农村生活污水处理率不高，农村居民聚居区配套污水收集、处理设施不完善，生活污水乱排乱放现象较多，污水处理设施后期运行维护不足；（3）农村生活垃圾乱堆乱放现象普遍，村民对开展“垃圾分类和垃圾不落地”工作认识不够，垃圾分类配套设施、分类运输和末端处置体系不完善。"
                      }
                    ]
                  },
                  {
                    label: '水面漂浮物'
                  }
                ]
              },
              {
                label: '水生态修复现状',
                id: '0-3-5',
                children: [
                  {
                    label: '水土保持',
                    children: [{
                      label: "流域上游生态系统脆弱，抵抗外界干扰能力低，自然保护区分布众多，分布较多珍稀野生动植物、鱼类等，河道水生态系统抵抗外界干扰能力低。"
                    }]
                  },
                  {
                    label: '生态红线',
                  },
                  {
                    label: '最小下泄流量'
                  }
                ]
              },
              {
                label: '流域执法监督情况',
                id: '0-3-6',
                children: [
                  {
                    label: '违法建筑查处',
                  },
                  {
                    label: '打击违法行为'
                  },
                  {
                    label: '河道巡查制度'
                  },
                  {
                    label: "执法监督保障不够，资金、队伍、设备等不足，监管责任有待加强，联动机制有待加强。"
                  }
                ]
              }
            ]
          },
          {
            id: '0-4',
            label: '4、问题分析',
            color: '#269A99',
            children: [
              {
                label: '水资源开发利用问题分析',
                children: [
                  {
                    label: '管理有待加强'
                  },
                  {
                    label: '监测设备未全覆盖'
                  },
                  {
                    label: '节水意识淡薄'
                  },
                  {
                    label: "农业、工业和城乡节水技术改造有待进一步推广，用水效率有待进一步提高。农业产业化规模化程度不高，高效节水灌溉模式难以大面积推广，节水灌溉和用水监测基础设施建设滞后，导致农业用水总量大。工业用水效率仍然不高，高耗水工业企业占一定比例，企业循环水利用率不高，“优水优用、劣水劣用，水尽其用”的梯级使用格局尚未形成。居民节水意识有待加强，节水激励机制尚未建立。"
                  }
                ]
              },
              {
                label: '水域岸线管理保护问题分析',
                children: [
                  {
                    label: '河道管理范围不明确'
                  },
                  {
                    label: '未编制岸线保护和利用规划'
                  },
                  {
                    label: '项目管理不到位'
                  },
                  {
                    label: '基础设施薄弱'
                  }, {
                    label: "部分水域岸线范围界定不明确，部分流域面积 50 平方千米及以上河道管理范围划定未完成。规模以上河湖岸线保护和利用规划编制尚未全面完成，岸线管控力度有待进一步加强。“四乱”现象个别地方仍然存在。部分地区采砂规划滞后，无法适应“十四五”新要求。"
                  }
                ]
              },
              {
                label: '水污染防治问题分析',
                children: [
                  {
                    label: '乱排偷排'
                  },
                  {
                    label: '无污水处理站'
                  },
                  {
                    label: '垃圾倾倒'
                  },
                  {
                    label: '过度使用化肥'
                  },
                  {
                    label: '责任意识淡薄'
                  }
                ]
              },
              {
                label: '水环境治理问题分析',
                children: [
                  {
                    label: '监测频次不够'
                  },
                  {
                    label: '责任意识淡薄'
                  }
                ]
              },
              {
                label: '水生态修复问题分析',
                children: [
                  {
                    label: '投入力度不够'
                  },
                  {
                    label: '未勘界定桩'
                  }
                ]
              },
              {
                label: '流域执法监督情况问题分析',
                children: [
                  {
                    label: '管理体系不完善'
                  },
                  {
                    label: '执法效果不明显'
                  },
                  {
                    label: '法制观念淡薄'
                  }
                ]
              }
            ]
          },
          {
            id: '0-5',
            label: '5、管理保护目标',
            color: '#269A99',
            children: [
              {
                label: '水资源保护',
                children: [
                  {
                    label: '用水总量控制目标'
                  },
                  {
                    label: '灌溉水利用系数'
                  },
                  {
                    label: '取水许可证办理率'
                  },
                  {
                    label: '万元工业增加值用水量'
                  },
                  {
                    label: '国内生产总值用水量'
                  },
                  {
                    label: '水功能区水质监测覆盖率'
                  },
                  {
                    label: '水功能区水质达标率'
                  },
                  {
                    label: '入河排污口设置登记率'
                  }
                ]
              },
              {
                label: '河湖水域岸线管理',
                children: [
                  {
                    label: '河湖管理范围划定率'
                  },
                  {
                    label: '岸线突出问题清理整治率'
                  },
                  {
                    label: '群众宣传知晓率'
                  }
                ]
              },
              {
                label: '水污染治理',
                children: [
                  {
                    label: '工业固废处理与综合利用率'
                  },
                  {
                    label: '县城污水处理率'
                  },
                  {
                    label: '建制镇污水处理率'
                  },
                  {
                    label: '测土配方施肥技术普及率'
                  },
                  {
                    label: '工业废水处理达标排放率'
                  }
                ]
              },
              {
                label: '水环境治理',
                children: [
                  {
                    label: '水面清洁率'
                  },
                  {
                    label: '流域水质达标'
                  }
                ]
              },
              {
                label: '水生态修复',
                children: [
                  {
                    label: '水土保持方案审批率'
                  },
                  {
                    label: '水电站最小下泄流量保证率'
                  }
                ]
              },
              {
                label: '执法监督',
                children: [
                  {
                    label: '涉河违法行为打击率'
                  }
                ]
              }
            ]
          },
          {
            id: '0-6',
            label: '6、管理保护任务',
            color: '#269A99',
            children: [
              {
                label: '水资源保护',
                children: [
                  {
                    label: '制定年度用水计划'
                  },
                  {
                    label: '提高灌溉水利用率'
                  },
                  {
                    label: '实施计划用水管理'
                  },
                  {
                    label: '严格取水许可审批'
                  },
                  {
                    label: '设立水质监测点'
                  },
                  {
                    label: '入河排污口登记'
                  },
                  {
                    label: '水源地达标建设'
                  }
                ]
              },
              {
                label: '水域岸线管理保护',
                children: [
                  {
                    label: '勘界定桩工作'
                  },
                  {
                    label: '规范取缔砂石加工点'
                  },
                  {
                    label: '加强群众宣传'
                  }
                ]
              },
              {
                label: '水污染防治',
                children: [
                  {
                    label: '增设农药处理配套设施'
                  },
                  {
                    label: '农村污水处理设施'
                  },
                  {
                    label: '科学精准施肥减量'
                  },
                  {
                    label: '加强企业执法检查'
                  }
                ]
              },
              {
                label: '水环境治理',
                children: [
                  {
                    label: '打捞垃圾漂浮物'
                  },
                  {
                    label: '定期发布水质监测报告'
                  }
                ]
              },
              {
                label: '水生态修复',
                children: [
                  {
                    label: '水土保持“三同时”制度'
                  },
                  {
                    label: '水电站生态流量监管'
                  }
                ]
              },
              {
                label: '执法监督',
                children: [
                  {
                    label: '建立部门联动机制'
                  }
                ]
              }
            ]
          },
          {
            id: '0-7',
            label: '7、管理保护措施',
            color: '#269A99',
            children: [
              {
                label: '水资源保护任务',
                children: [
                  {
                    label: '加强水资源“三条红线”管理'
                  },
                  {
                    label: '严格落实水环境保护条例'
                  },
                  {
                    label: '加大节水宣传'
                  },
                  {
                    label: '开展水质监测'
                  },
                  {
                    label: '加大农业节水改造'
                  },
                  {
                    label: '水源地达标建设'
                  },
                  {
                    label: '排污口普查'
                  },
                  {
                    label: '严格取水、排污许可证核发'
                  },
                  {
                    label: '水功能区标识牌设立'
                  },
                  {
                    label: '节水型社会建设'
                  }
                ]
              },
              {
                label: '水域岸线管理保护任务',
                children: [
                  {
                    label: '打击非法采砂'
                  },
                  {
                    label: '取缔砂石加工点堆放'
                  },
                  {
                    label: '实施河湖管理范围划定工作'
                  },
                  {
                    label: '砂石专项整治'
                  },
                  {
                    label: '堤防恢复重建'
                  },
                  {
                    label: '河流治理项目'
                  }
                ]
              },
              {
                label: '水污染防治',
                children: [
                  {
                    label: '增设农药处理配套设施'
                  },
                  {
                    label: '农村污水处理设施'
                  },
                  {
                    label: '科学精准施肥减量'
                  },
                  {
                    label: '加强企业执法检查'
                  }
                ]
              },
              {
                label: '水污染防治任务',
                children: [
                  {
                    label: '污水管网设施建设工程'
                  },
                  {
                    label: '新建微型污水处理设备'
                  },
                  {
                    label: '减少农业面源污染'
                  },
                  {
                    label: '推进科学精准施肥'
                  },
                  {
                    label: '养殖农户粪便干湿分离'
                  },
                  {
                    label: '多种方式加强培训'
                  },
                  {
                    label: '治理黑臭水体'
                  },
                  {
                    label: '农村生活污水治理'
                  },
                  {
                    label: '规范矿山开采行为'
                  }
                ]
              },
              {
                label: '水环境治理任务',
                children: [
                  {
                    label: '开展断面水质监测'
                  },
                  {
                    label: '打捞垃圾漂浮物'
                  },
                  {
                    label: '定期巡河'
                  }
                ]
              },
              {
                label: '水生态修复任务',
                children: [
                  {
                    label: '水土保持信息化'
                  },
                  {
                    label: '加大法律宣传'
                  },
                  {
                    label: '落实生态保护红线'
                  },
                  {
                    label: '落实水电站一站一策'
                  },
                  {
                    label: '编制水生生物多样性评价报告'
                  },
                  {
                    label: '增殖放流'
                  },
                  {
                    label: '制作渔业保护宣传单'
                  },
                  {
                    label: '完成水土保持规划'
                  },
                  {
                    label: '加强渔业资源保护'
                  },
                  {
                    label: '小流域治理工程'
                  }
                ]
              },
              {
                label: '执法监督任务',
                children: [
                  {
                    label: '建立部门联动机制'
                  },
                  {
                    label: '开展执法培训'
                  },
                  {
                    label: '加强群众法制宣传'
                  },
                  {
                    label: '开展执法巡查'
                  },
                  {
                    label: '加强水政监察队伍建设'
                  }
                ]
              }
            ]
          }
        ]
      };

      G6.registerNode(
          'dice-mind-map-root', {
            jsx: (cfg) => {
              const width = Util.getTextSize(cfg.label, 16)[0] + 24;
              const stroke = cfg.style.stroke || '#096dd9';
              const fill = cfg.style.fill;

              return `
      <group>
        <rect draggable="true" style={{width: ${width}, height: 42, stroke: ${stroke}, radius: 4}} keyshape>
          <text style={{ fontSize: 16, marginLeft: 12, marginTop: 12 }}>${cfg.label}</text>
          <text style={{ marginLeft: ${
                  width - 16
              }, marginTop: -20, stroke: '#66ccff', fill: '#000', cursor: 'pointer', opacity: ${
                  cfg.hover ? 0.75 : 0
              } }} action="add">+</text>
        </rect>
      </group>
    `;
            },
            getAnchorPoints() {
              return [
                [0, 0.5],
                [1, 0.5],
              ];
            },
          },
          'single-node',
      );
      G6.registerNode(
          'dice-mind-map-sub', {
            jsx: (cfg) => {
              const width = Util.getTextSize(cfg.label, 14)[0] + 24;
              const color = cfg.color || cfg.style.stroke;

              return `
      <group>
        <rect draggable="true" style={{width: ${width + 24}, height: 22}} keyshape>
          <text draggable="true" style={{ fontSize: 14, marginLeft: 12, marginTop: 6 }}>${
                  cfg.label
              }</text>
          <text style={{ marginLeft: ${
                  width - 8
              }, marginTop: -10, stroke: ${color}, fill: '#000', cursor: 'pointer', opacity: ${
                  cfg.hover ? 0.75 : 0
              }, next: 'inline' }} action="add">+</text>
          <text style={{ marginLeft: ${
                  width - 4
              }, marginTop: -10, stroke: ${color}, fill: '#000', cursor: 'pointer', opacity: ${
                  cfg.hover ? 0.75 : 0
              }, next: 'inline' }} action="delete">-</text>
        </rect>
        <rect style={{ fill: ${color}, width: ${width + 24}, height: 2, x: 0, y: 22 }} />

      </group>
    `;
            },
            getAnchorPoints() {
              return [
                [0, 0.965],
                [1, 0.965],
              ];
            },
          },
          'single-node',
      );
      G6.registerNode(
          'dice-mind-map-leaf', {
            jsx: (cfg) => {
              const width = Util.getTextSize(cfg.label, 12)[0] + 24;
              const color = cfg.color || cfg.style.stroke;

              return `
      <group>
        <rect draggable="true" style={{width: ${width + 20}, height: 26, fill: 'transparent' }}>
          <text style={{ fontSize: 12, marginLeft: 12, marginTop: 6 }}>${cfg.label}</text>
              <text style={{ marginLeft: ${
                  width - 8
              }, marginTop: -10, stroke: ${color}, fill: '#000', cursor: 'pointer', opacity: ${
                  cfg.hover ? 0.75 : 0
              }, next: 'inline' }} action="add">+</text>
              <text style={{ marginLeft: ${
                  width - 4
              }, marginTop: -10, stroke: ${color}, fill: '#000', cursor: 'pointer', opacity: ${
                  cfg.hover ? 0.75 : 0
              }, next: 'inline' }} action="delete">-</text>
        </rect>
        <rect style={{ fill: ${color}, width: ${width + 24}, height: 2, x: 0, y: 32 }} />

      </group>
    `;
            },
            getAnchorPoints() {
              return [
                [0, 0.965],
                [1, 0.965],
              ];
            },
          },
          'single-node',
      );
      G6.registerBehavior('dice-mindmap', {
        getEvents() {
          return {
            'node:click': 'clickNode',
            'node:dblclick': 'editNode',
            'node:mouseenter': 'hoverNode',
            'node:mouseleave': 'hoverNodeOut',
          };
        },
        clickNode(evt) {
          const model = evt.item.get('model');
          const name = evt.target.get('action');
          switch (name) {
            case 'add':
              const newId =
                  model.id +
                  '-' +
                  (((model.children || []).reduce((a, b) => {
                        const num = Number(b.id.split('-').pop());
                        return a < num ? num : a;
                      }, 0) || 0) +
                      1);
              evt.currentTarget.updateItem(evt.item, {
                children: (model.children || []).concat([{
                  id: newId,
                  direction: newId.charCodeAt(newId.length - 1) % 2 === 0 ? 'right' : 'left',
                  label: 'New',
                  type: 'dice-mind-map-leaf',
                  color: model.color || colorArr[Math.floor(Math.random() * colorArr.length)],
                },]),
              });
              evt.currentTarget.layout(false);
              break;
            case 'delete':
              const parent = evt.item.get('parent');
              evt.currentTarget.updateItem(parent, {
                children: (parent.get('model').children || []).filter((e) => e.id !== model.id),
              });
              evt.currentTarget.layout(false);
              break;
            case 'edit':
              break;
            default:
              return;
          }
        },
        editNode(evt) {
          const item = evt.item;
          const model = item.get('model');
          const {
            x,
            y
          } = item.calculateBBox();
          const graph = evt.currentTarget;
          const realPosition = evt.currentTarget.getClientByPoint(x, y);
          const el = document.createElement('div');
          const fontSizeMap = {
            'dice-mind-map-root': 24,
            'dice-mind-map-sub': 18,
            'dice-mind-map-leaf': 16,
          };
          el.style.fontSize = fontSizeMap[model.type] + 'px';
          el.style.position = 'fixed';
          el.style.top = realPosition.y + 'px';
          el.style.left = realPosition.x + 'px';
          el.style.paddingLeft = '12px';
          el.style.transformOrigin = 'top left';
          el.style.transform = `scale(${evt.currentTarget.getZoom()})`;
          const input = document.createElement('input');
          input.style.border = 'none';
          input.value = model.label;
          input.style.width = Util.getTextSize(model.label, fontSizeMap[model.type])[0] + 'px';
          input.className = 'dice-input';
          el.className = 'dice-input';
          el.appendChild(input);
          document.body.appendChild(el);
          const destroyEl = () => {
            document.body.removeChild(el);
          };
          const clickEvt = (event) => {
            if (!(event.target && event.target.className && event.target.className.includes('dice-input'))) {
              window.removeEventListener('mousedown', clickEvt);
              window.removeEventListener('scroll', clickEvt);
              graph.updateItem(item, {
                label: input.value,
              });
              graph.layout(false);
              graph.off('wheelZoom', clickEvt);
              destroyEl();
            }
          };
          graph.on('wheelZoom', clickEvt);
          window.addEventListener('mousedown', clickEvt);
          window.addEventListener('scroll', clickEvt);
          input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
              clickEvt({
                target: {},
              });
            }
          });
        },
        hoverNode(evt) {
          evt.currentTarget.updateItem(evt.item, {
            hover: true,
          });
        },
        hoverNodeOut(evt) {
          evt.currentTarget.updateItem(evt.item, {
            hover: false,
          });
        },
      });
      G6.registerBehavior('scroll-canvas', {
        getEvents: function getEvents() {
          return {
            wheel: 'onWheel',
          };
        },

        onWheel: function onWheel(ev) {
          const {
            graph
          } = this;
          if (!graph) {
            return;
          }
          if (ev.ctrlKey) {
            const canvas = graph.get('canvas');
            const point = canvas.getPointByClient(ev.clientX, ev.clientY);
            let ratio = graph.getZoom();
            if (ev.wheelDelta > 0) {
              ratio += ratio * 0.05;
            } else {
              ratio *= ratio * 0.05;
            }
            graph.zoomTo(ratio, {
              x: point.x,
              y: point.y,
            });
          } else {
            const x = ev.deltaX || ev.movementX;
            const y = ev.deltaY || ev.movementY || (-ev.wheelDelta * 125) / 3;
            graph.translate(-x, -y);
          }
          ev.preventDefault();
        },
      });

      const dataTransform = (data) => {
        const changeData = (d, level = 0, color) => {
          const data = {
            ...d,
          };
          switch (level) {
            case 0:
              data.type = 'dice-mind-map-root';
              break;
            case 1:
              data.type = 'dice-mind-map-sub';
              break;
            default:
              data.type = 'dice-mind-map-leaf';
              break;
          }

          data.hover = false;

          if (color) {
            data.color = color;
          }

          if (level === 1 && !d.direction) {
            if (!d.direction) {
              data.direction = d.id.charCodeAt(d.id.length - 1) % 2 === 0 ? 'right' : 'left';
            }
          }

          if (d.children) {
            data.children = d.children.map((child) => changeData(child, level + 1, data.color));
          }
          return data;
        };
        return changeData(data);
      };

      const container = document.getElementById('container');
      const el = document.createElement('pre');
      el.innerHTML =
          'Double click on node to change title, hover node to display ops buttons\n双击修改节点标题, hover节点显示操作按钮';

      container.appendChild(el);

      const width = container.scrollWidth;
      const height = (container.scrollHeight || 500) - 20;
      const tree = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        fitView: true,
        fitViewPadding: [10, 20],
        layout: {
          type: 'mindmap',
          direction: 'H',
          getHeight: () => {
            return 16;
          },
          getWidth: (node) => {
            return node.level === 0 ?
                Util.getTextSize(node.label, 16)[0] + 12 :
                Util.getTextSize(node.label, 12)[0];
          },
          getVGap: () => {
            return 10;
          },
          getHGap: () => {
            return 60;
          },
          getSide: (node) => {
            return node.data.direction;
          },
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            lineWidth: 2,
          },
        },
        minZoom: 0.5,
        modes: {
          default: ['drag-canvas', 'zoom-canvas', 'dice-mindmap'],
        },
      });

      tree.data(dataTransform(rawData));

      tree.render();
    },
  },
  mounted() {
    this.initGraph()

  }
}
</script>

<style scoped>

</style>
