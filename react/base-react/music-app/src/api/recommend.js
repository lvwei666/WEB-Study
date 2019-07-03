import jsonp from './jsonp';
import { URL, PARAM, OPTION } from './config';

export function getCarousel() {
  return jsonp(
    URL.carousel,
    {
      ...PARAM,
      _: new Date().getTime(),
      g_tk: 5381,
      uin: 0,
      platform: 'h5',
      needNewCode: 1,
    },
    OPTION
  )
}

export function getNewAlbum() {
  return jsonp(
    URL.newalbum,
    {
      ...PARAM,
      "-": 'getUCGI1694554007873501',
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      platform: 'yqq.json',
      needNewCode: 0,
      data: `{"new_album":{"module":"newalbum.NewAlbumServer","method":"get_new_album_info","param":{"area":1,"start":0,"num":20}},"new_album_tag":{"module":"newalbum.NewAlbumServer","method":"get_new_album_area","param":{}},"comm":{"ct":24,"cv":0}}`
    },
    OPTION
  )
}