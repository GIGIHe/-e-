<template>
    <div class="mt">
        <Header></Header>
        <div id="container">

        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  methods: {
    initMap() {
      //    const  BMap = window.BMap
      var map = new BMap.Map("container"); // 创建地图实例
      var point = new BMap.Point(116.404, 39.915); // 创建点坐标
      var Startpoint = new BMap.Point(116.404, 39.915); // 创建点坐标
      var Endpoint = new BMap.Point(116.504, 39.995); // 创建点坐标
      map.centerAndZoom(point, 11); // 初始化地图，设置中心点坐标和地图级别
      //添加控件
      map.addControl(new BMap.NavigationControl()); //平移缩放控件
      map.addControl(new BMap.ScaleControl()); //比例尺
      map.addControl(new BMap.OverviewMapControl()); //缩略地图
      map.addControl(new BMap.MapTypeControl()); //地图类型
      map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
      //   添加标注
      var startMarker = new BMap.Marker(Startpoint);
      var endMarker = new BMap.Marker(Endpoint);

      //添加label
      var ltext1 = "信息工程学院学生流动党支部 支部书记 : 高洋 电话 : 11111";
      var ltext2 = "信息工程学院学生流动党支部 支部书记 : 杨鑫 电话 : 22222";
      var ltext3 = "信息工程学院学生流动党支部 支部书记 : 柳晓阳 电话 : 33333";
      var opt = {
        offset: new BMap.Size(-144, 34)
      };
      var opt1 = {
          position:Endpoint,
          offset: new BMap.Size(-204, -54)
      };
      var label1 = new BMap.Label(ltext1, opt);
      var label2 = new BMap.Label(ltext2, opt);
      var label3 = new BMap.Label(ltext3,opt1);
      //设置label的样式
       label1.setStyle({
          color:"#f00"
      })
      startMarker.setLabel(label1);
      endMarker.setLabel(label2);
      map.addOverlay(startMarker);
      map.addOverlay(endMarker);
      map.addOverlay(label3);
    }
  },
  //   mouted() {
  //     this.initMap();
  //   },
  mounted() {
    this.initMap();
    // console.log(document.documentElement.clientHeight);
  }
};
</script>

<style scoped lang = "scss">
#container {
  width: 7.5rem;
  height: 600px;
  /* border: 1px solid #f00; */
}
</style>