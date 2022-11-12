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
          id: '0-1-1',

        },
        {
          label: '行政区划',
          id: '0-1-2'
        },
        {
          label: '水质',
          id: '0-1-3'
        },
        {
          label: '功能定位',
          id: '0-1-4'
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
          id: '0-2-1'
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
              label: '水电资源开发'
            },
            {
              label: '水资源量利用'
            },
            {
              label: '灌溉、生活、工业用水开发利用情况'
            },
            {
              label: '入河排污口'
            },
            {
              label: '水源地'
            },
            {
              label: '水功能区'
            }
          ]
        },
        {
          label: '水域岸线管理保护现状',
          id: '0-3-2',
          children: [
            {
              label: '涉河建筑物'
            },
            {
              label: '河道采砂'
            },
            {
              label: '码头航道'
            },
            {
              label: '城市规划'
            },
            {
              label: '滩涂保护'
            },
            {
              label: '渔业资源'
            }
          ]
        },
        {
          label: '水污染防治现状',
          id: '0-3-3',
          children: [
            {
              label: '工业污染'
            },
            {
              label: '乡镇生活污染'
            },
            {
              label: '农业、农村面源污染'
            }
          ]
        },
        {
          label: '水环境治理现状',
          id: '0-3-4',
          children: [
            {
              label: '水环境质量'
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
              label: '水土保持'
            },
            {
              label: '生态红线'
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
              label: '违法建筑查处'
            },
            {
              label: '打击违法行为'
            },
            {
              label: '河道巡查制度'
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
