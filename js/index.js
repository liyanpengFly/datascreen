// 柱状图1
(function(){
    // （2）准备一个具备大小的DOM容器
    var box = document.querySelector('.bar .chart')
    // （3）初始化echarts实例对象
    // （4）指定配置项和数据（option）
    var myChart = echarts.init(box)
    var option = {
        color:["#2f89cf"],  //修改图标颜色
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {             //修改图表大小
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['旅游行业', '培训行业', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{ //x轴文字颜色和大小
                    color:'rgba(255,255,255,.6)',
                    fontSize:'12'
                },
                axisLine: {
                    show:false,
                    // 如果想要设置单独的线条样式 
                    // lineStyle:{
                    //     color:"rgba(255,255,255,1)",
                    //     width:1,
                    //     type:'solid'
                    // }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: { //y轴文字颜色和大小
                    color:'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                axisLine: {
                    // 如果想要设置单独的线条样式 
                    lineStyle:{
                        color:"rgba(255,255,255,.1)",
                        // width:1,
                        // type:'solid'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color:"rgba(255,255,255,.1)",
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',    //修改柱子宽度
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5,     //修改柱子圆角
                }
            }
        ]
    };
    // （5）将配置项设置给echarts实例对象
    myChart.setOption(option)
    // 让图表跟随屏幕自动适配
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

// 柱状图2
(function(){
    var myColor = ["#1089e7","#f57474","#56D0e3","#f8b448","#8b78f6"]
    // 1.实例化图表
    var box = document.querySelector('.bar2 .chart')
    var myChart = echarts.init(box)
    // 2.指定配置和数据 
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
           show: false
        },
        yAxis: [
            {
                type: 'category',
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                inverse: true,
                axisLine: { //不显示y轴的线
                    show: false
                },
                axisTick: { //不显示y轴的刻度
                    show: false
                },
                axisLabel: { //把刻度 标签里边的文字颜色设置为白色
                    color: '#fff'
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                axisLine: { //不显示y轴的线
                    show: false
                },
                axisTick: { //不显示y轴的刻度
                    show: false
                },
                axisLabel: { //把刻度 标签里边的文字颜色设置为白色
                    color: '#fff'
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                // 修改第一组柱子的圆角
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    // 此处color可以修改柱子的颜色
                    color: function(params) {
                        // params是传入进来的柱子的对象
                        // dataIndex是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                // 柱子的宽度
                barWidth: 10,
                // 显示柱子上的文字
                label: {
                    show: true,
                    position:"inside",
                    // {c}会自动的解析为 数据 data里的数据
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap:50,
                barWidth: 15,
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };
    // 3.把配置给实例对象 
    myChart.setOption(option)
    // 让图表跟随屏幕自动适配
    window.addEventListener('resize',function(){
        myChart.resize()
    })
})();

// 折线图1
(function(){
    var yearData = [
        {
          year: "2020", // 年份
          data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: "2021", // 年份
          data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ];
    // 1.实例化对象
    var box = document.querySelector('.line .chart')
    var myChart = echarts.init(box)
    // 2.指定配置
    var option = {
        color: ["#00f2f1","#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // 如果series对象中有name值，则legend可以不用写data
            // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle: {
                color: '#4c9bfd'
            },
            // 10%必须加引号
            right: '10%'
        },
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,//显示边框
            borderColor: '#012f4a',//边框颜色
            containLabel: true  //包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false     //去除刻度线
            },
            axisLabel: {
                color:'#4c9bfd' //文本颜色
            },
            axisLine: {
                show: false //去除轴线
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false     //去除刻度线
            },
            axisLabel: {
                color:'#4c9bfd' //文本颜色
            },
            axisLine: {
                show: false //去除轴线
            },
            splitLine: {
                lineStyle: {
                    color:'#012f4a' //分割线颜色
                }
            }
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    };
    // 3.把配置给实例对象
    myChart.setOption(option)
    // 让图表跟随屏幕自动适配
    window.addEventListener('resize',function(){
        myChart.resize()
    })

    // 点击切换tab
    $('.line h2').on('click','a',function()  {
        // 点击a之后根据当前a的索引号找到对应的yearData的相关对象
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0]
        option.series[1].data = obj.data[1]
        // 需要重新渲染
        myChart.setOption(option)
    })
})();

// 折线图2
(function(){
    // 1.实例化对象
    var box = document.querySelector('.line2 .chart')
    var myChart = echarts.init(box)
    // 2.指定配置
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top:'0%',
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            textStyle: {
                color:'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        },
        grid: {
            left: '10',
            top:'30',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLabel: {
                    textStyle: {
                        color:'rgba(255,255,255,.6)',
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color:'rgba(255,255,255,.2)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'rgba(255,255,255,.6)',
                        fontSize: '12'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
    // 3.把配置给实例对象
    myChart.setOption(option)
})()