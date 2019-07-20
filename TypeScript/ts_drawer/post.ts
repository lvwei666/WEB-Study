'use strict';
enum PostStatus {
  Unpublished,
  Published,
  Draft
}

interface Post {
  title: string;
  status: PostStatus;
  content: string;
}

let post: Post = {
  title: '相信猪会上树',
  status: PostStatus.Unpublished,
  content: '----'
}