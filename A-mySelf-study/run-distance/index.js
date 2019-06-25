// 进行经纬度转换为距离的计算
function rad(d) {
    // 经纬度转换成三角函数中度分表形式
    return d * Math.PI / 180.0;
  }
  // 计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function  getDistance(lat1,lng1,lat2,lng2) {
    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b/2),2)));
    // 地球半径
    s = s * 6378.137;
    // 输出为公里
    s = Math.round(s * 10000) / 10000;
    // s = s.toFixed(2);
    return s;
  }
  var point = [
      {latitude:39.908860,longitude:116.397390},
      {latitude:39.808860,longitude:116.398390},
      {latitude:39.818860,longitude:116.399390}
  ];
  let dis = 0,sum = 0;
  for (let i = 0; i < point.length-1; i++){
    dis = getDistance(point[i].latitude,point[i].longitude,point[i+1].latitude,point[i+1].longitude);
    sum += (+dis);
    console.log(dis)
  }
  console.log(sum.toFixed(4));

  
  