깃 액션을 사용한 블로그를 목표로 합니다.

깃 액션 설정 및 블로그 등록 이후, 사용방법에 대해서 설명합니다.

== build 폴더 구조 ==

- build

  - post
    - categoty
      - topic
        - postFolder
          - img
            - bg.jpg
          - index.json
          - post.md
      - index.json
    - index.json
  - profile
    - background
      - {number}.jpg
    - porfile_bg_img.jpg
    - profile_img.jpg
    - index.json

- profile\
  프로필에 들어갈 내용과 배경화면이 존재합니다. 모든 변경사항은
  index.json에서 수정 해주셔야합니다.

- post\
  개시물을 등록하기 전에 현 블로그에서는 category -> topic 별로 구분되기 때문에 개시물의 위치는 topic폴더 안입니다.

- category, topic\
  카테고리와 토픽을 추가하면 상위 폴더의 index.json에 카테고리의 폴더 생성과 함께 이름을 수정해주셔야합니다.

- postFolder\
  하나의 개시물이 저장되는 폴더입니다. 개시물 폴더의 이름은 title과 일치해야하며 상위 폴더의 index.json에 수정 되어야합니다.\
  폴더 안에 .md 파일을 생성하여 개시물을 작성하고 img폴더에 개시물 작성 중에 필요한 이미지를 저장합니다.\
  postFolder(개시물 폴더)내의 index.json파일은 파일의 요약 정보를 담고 있습니다.

== index.json 형식 ==

- category\
   {\
   "category": ["Daily", "Dev"]\
   }

- topic\
  {\
   "topics": ["topic1", "topic2", "topic3"]\
  }\

- postFolder\
  {\
   "list": ["post2", "post1"]\
  }

- postFolder/index.json\
  {\
   "title": "테스트1",\
   "writeData": "2023-11-15",\
   "titleImgSrc": "/img/bg.jpeg",\
   "summary": "드디어 전역했다~~"\
  }

== 사용된 기술 ==

- axios
- redux
- redux-thunk(middleware)
- sass
- react-router-dom
- styled-component
- @uiw/react-md-editor (markdown reader)
