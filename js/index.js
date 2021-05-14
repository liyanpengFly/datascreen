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
})();