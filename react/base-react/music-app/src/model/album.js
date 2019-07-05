class Album {
  constructor(id, mId, name, img, singer, publicTime) {
    this.id = id;
    this.mId = mId;
    this.name = name;
    this.img = img;
    this.singer = singer;
    this.publicTime = publicTime;
  }
}
export function createAlbumByItem(item) {
  return new Album(
    item.album_id,
    item.album_mid,
    item.album_name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`,
    item.singers.map(sing => sing.singer_name).join('/'),
    item.public_time
  )
}
export function createAlbumByDetail(detail) {
  return new Album(
    detail.id,
    detail.mid,
    detail.name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${detail.mid}.jpg?max_age=2592000`,
    detail.singername,
    detail.aData
  )
}