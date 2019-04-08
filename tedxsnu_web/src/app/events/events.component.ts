import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from './event.model';
import { Thumbnail } from './thumbnail.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  event_id : number;
  paramsSubscription: Subscription;

  events : Event[] = [
    new Event(
      'TEDxSNU 2018 Fall Event: 흑 <보이지 않는 것, 보지 않았던 것>',
      `
      '우리 삶의 일부분이지만 익숙하지 않고 쉽게 이야기되지 않는 ‘흑’에 대한 아이디어들을 나누었습니다.'
      `,
      [
        new Thumbnail(
          'Song Young Hee',
          '다름의 재발견',
          'https://www.youtube.com/watch?v=NP6R1glCUhg',
          'https://img.youtube.com/vi/NP6R1glCUhg/mqdefault.jpg'
        ),
        new Thumbnail(
          'Russel. H. Park',
          '물 속에서 흑을 경험하다',
          'https://www.youtube.com/watch?v=r2knFEIKHF8',
          'https://img.youtube.com/vi/r2knFEIKHF8/mqdefault.jpg'
        ),
        new Thumbnail(
          'Christopher Shin Packard',
          'On the Blacklist',
          'https://www.youtube.com/watch?v=ONwL8fNO6uk',
          'https://img.youtube.com/vi/ONwL8fNO6uk/mqdefault.jpg'
        ),
        new Thumbnail(
          'Jung Yang Soo',
          '죽음이 던지는 질문',
          'https://www.youtube.com/watch?v=kkML8vWMzeg',
          'https://img.youtube.com/vi/kkML8vWMzeg/mqdefault.jpg'
        ),
        new Thumbnail(
          'Dong I-hyang',
          '연극의 어둠, 암전',
          'https://www.youtube.com/watch?v=ShascOp3UT4',
          'https://img.youtube.com/vi/ShascOp3UT4/mqdefault.jpg'
        ),
      ]
    ), 
    new Event(
      '제 11회 TEDxSNU: 美치다',
      `
      '美치다'를 컨셉으로 하여 '누구나 미친 잠재력을 갖고 있다'는 것에 주목하고자 한다. '
      `,
      [
        new Thumbnail(
          'Kim Young Uk',
          'Your mealworm pasta is ready to be served!',
          'https://www.youtube.com/watch?v=6rssJgvTREk',
          'https://img.youtube.com/vi/6rssJgvTREk/mqdefault.jpg'
        ),
        new Thumbnail(
          'Horan',
          'The qualification for sorrow',
          'https://www.youtube.com/watch?v=Rymz4gYYANA',
          'https://img.youtube.com/vi/Rymz4gYYANA/mqdefault.jpg'
        ),
        new Thumbnail(
          'Peter Park',
          'Angel wings swing! ',
          'https://www.youtube.com/watch?v=3f4mSvutuV8',
          'https://img.youtube.com/vi/3f4mSvutuV8/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kim Seo Gyeong',
          'The promise carved on an empty chair',
          'https://www.youtube.com/watch?v=ABoPWIyWucU',
          'https://img.youtube.com/vi/ABoPWIyWucU/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Soo Jung',
          'Judicial Justice : the story beyond prison bars',
          'https://www.youtube.com/watch?v=xNM8OFzlauQ',
          'https://img.youtube.com/vi/xNM8OFzlauQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Park Young Sook',
          'Mad Women-The Utterance ',
          'https://www.youtube.com/watch?v=mcblsjHDaS0',
          'https://img.youtube.com/vi/mcblsjHDaS0/mqdefault.jpg'
        ),
      ]
    ), 
    new Event(
      '제 10회 TEDxSNU:',
      '단일한 주제없이 진행되며, 특정 주제나 분야에 얽매이지 않는 다양한 분야의 연사님들이 자유롭게 아이디어를 나누고 청중과 소통할 수 있도록 한다.',
      [
        new Thumbnail(
          'Baek Ji Won',
          'Innovating housing for youth in Korea',
          'https://www.youtube.com/watch?v=M0dz8lztdV4',
          'https://img.youtube.com/vi/M0dz8lztdV4/mqdefault.jpg'
        ),
        new Thumbnail(
          'Gregor Konzack',
          'Of Showa and Shoah',
          'https://www.youtube.com/watch?v=ii76P1ftD1o',
          'https://img.youtube.com/vi/ii76P1ftD1o/mqdefault.jpg'
        ),
        new Thumbnail(
          'Coreyah',
          'I do not know Korean traditional music',
          'https://www.youtube.com/watch?v=Z77aTDWccdE',
          'https://img.youtube.com/vi/Z77aTDWccdE/mqdefault.jpg'
        ),
        new Thumbnail(
          'Austin Seungmin Lee',
          'How to design when things are no longer Sci-Fi?',
          'https://www.youtube.com/watch?v=QwBHz8y99UQ',
          'https://img.youtube.com/vi/QwBHz8y99UQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kim Seong Jun',
          'Stop persuading, Spark empathy',
          'https://www.youtube.com/watch?v=3JSJyd0MGcM',
          'https://img.youtube.com/vi/3JSJyd0MGcM/mqdefault.jpg'
        ),
        new Thumbnail(
          'Park Seong Hwan',
          'Time after death flies with flies',
          'https://www.youtube.com/watch?v=XOaHB7apteA',
          'https://img.youtube.com/vi/XOaHB7apteA/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 9회 TEDxSNU: #Hashtag',
      "세상을 연결하는 가장 간편하고도 강력한 도구, '#Hashtag'에 주목하여 행사안에서 모든 분들의 아이디어와 경험이 #TEDxSNU로 연결(Connecting)되고 확산(Spreading)되어 더 큰 움직임이 되고자 한다. ",
      [
        new Thumbnail(
          'Li Seok',
          'To draw the white universe',
          'https://www.youtube.com/watch?v=2j6K6vZsMmY',
          'https://img.youtube.com/vi/2j6K6vZsMmY/mqdefault.jpg'
        ),
        new Thumbnail(
          'Eom Soo Won',
          'Machine learning is changing finance',
          'https://www.youtube.com/watch?v=Mtfv3g-tZ8w',
          'https://img.youtube.com/vi/Mtfv3g-tZ8w/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Hyun Sook',
          'Equal medicine for all',
          'https://www.youtube.com/watch?v=JyL0FCVxKT0',
          'https://img.youtube.com/vi/JyL0FCVxKT0/mqdefault.jpg'
        ),
        new Thumbnail(
          'Noh Ella',
          'My dinner with Noella',
          'https://www.youtube.com/watch?v=8mf495cuW2A',
          'https://img.youtube.com/vi/8mf495cuW2A/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Ho Young',
          'Get to know Tenspoon',
          'https://www.youtube.com/watch?v=i802bQBvZ1o',
          'https://img.youtube.com/vi/i802bQBvZ1o/mqdefault.jpg'
        ),
        new Thumbnail(
          'Yoo Hyun Jun',
          'Why you want to walk on those streets',
          'https://www.youtube.com/watch?v=_bnsdI4ApzI',
          'https://img.youtube.com/vi/_bnsdI4ApzI/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 8회 TEDxSNU: 21.2세기',
      '21세기 중에서도 21.2세기에 대해 이야기하며, 빠르게 변하는 세상을 관찰하고자 한다. 현재와 가까운 미래에 대한 아이디어를 공유하며 21.2세기를 입체적으로 조명하고자 한다.',
      [
        new Thumbnail(
          'Anthony Paek',
          "Don't be evil, AI!",
          'https://www.youtube.com/watch?v=Av_ERJgKv1o',
          'https://img.youtube.com/vi/Av_ERJgKv1o/mqdefault.jpg'
        ),
        new Thumbnail(
          'Park Seong Ho',
          'Job crisis',
          'https://www.youtube.com/watch?v=OXyAeMi-eJk',
          'https://img.youtube.com/vi/OXyAeMi-eJk/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Jin Yeop',
          'Neighborhood artists',
          'https://www.youtube.com/watch?v=peRuUMosEWk',
          'https://img.youtube.com/vi/peRuUMosEWk/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lim Jong Jin',
          'What do you see in the photos?',
          'https://www.youtube.com/watch?v=4dOwISA__ck',
          'https://img.youtube.com/vi/4dOwISA__ck/mqdefault.jpg'
        ),
        new Thumbnail(
          'Han Ye Lol',
          'Follow your pure instinct',
          'https://www.youtube.com/watch?v=TZXyZMJEhFY&t=2s',
          'https://img.youtube.com/vi/TZXyZMJEhFY&t=2s/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kim Ki Hyun',
          'Happiness, do we know its destination?',
          'https://www.youtube.com/watch?v=BWC1pO7hHuA',
          'https://img.youtube.com/vi/BWC1pO7hHuA/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 7회 TEDxSNU: 몸',
      "우리의 '몸'을 재조명함으로, 우리 '몸'에 담긴무한한 잠재력을 확인하고, 이를 통해 새로운 영감을 일으키고자 한다. ",
      [
        new Thumbnail(
          'Kim Jong Bum',
          'The reason why online lectures are boring',
          'https://www.youtube.com/watch?v=WSoUBt1pi6A',
          'https://img.youtube.com/vi/WSoUBt1pi6A/mqdefault.jpg'
        ),
        new Thumbnail(
          'Bae Dal Lae',
          'Bae Dallae’s experiment, Body as a canvas',
          'https://www.youtube.com/watch?v=6XrSiMiDYuQ',
          'https://img.youtube.com/vi/6XrSiMiDYuQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Byun Jae Won',
          'How to train your crutches in the club',
          'https://www.youtube.com/watch?v=OdWOuzPntsg&t=3s',
          'https://img.youtube.com/OdWOuzPntsg&t=3s/mqdefault.jpg'
        ),
        new Thumbnail(
          'Yoo Jin Kyu',
          'Everything alive speaks through its body',
          'https://www.youtube.com/watch?v=uPUG76hEaCU',
          'https://img.youtube.com/vi/uPUG76hEaCU/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Eun Hee',
          'Human bodies displayed in show window',
          'https://www.youtube.com/watch?v=l05S7CNdAtQ',
          'https://img.youtube.com/vi/l05S7CNdAtQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Choi Won Ho',
          'Too much practice kills talent',
          'https://www.youtube.com/watch?v=S5R0UP_TDxU',
          'https://img.youtube.com/vi/S5R0UP_TDxU/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 6회 TEDxSNU: Coding',
      '연사분들이 각자의 방식으로 코딩한 가치들을 살펴보고, 이 가치들이 우리가 중요하다고 생각하는 가치들과 얼마나 닿아있는, 또 우리가 실현하고 싶은 가치를 스스로 어떤 방식으로 토딩할 수 있을 것인지를 생각해보는 시간을 갖고자 한다. ',
      [
        new Thumbnail(
          'Ji Yin Kook',
          'The answer is in the streets',
          'https://www.youtube.com/watch?v=vD2-1QCzfs8',
          'https://img.youtube.com/vi/vD2-1QCzfs8/mqdefault.jpg'
        ),
        new Thumbnail(
          'Egoing',
          'Explore the new through coding',
          'https://www.youtube.com/watch?v=xym0VYP1CPI',
          'https://img.youtube.com/vi/xym0VYP1CPI/mqdefault.jpg'
        ),
        new Thumbnail(
          'Myung Ei Jung',
          'Adding coding to thinking',
          'https://www.youtube.com/watch?v=7PlkQxocWOQ',
          'https://img.youtube.com/vi/7PlkQxocWOQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Han Jae Sun',
          'Data, the power to create',
          'https://www.youtube.com/watch?v=XLMO-7ILuc8',
          'https://img.youtube.com/vi/XLMO-7ILuc8/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Uk',
          'If you love Earth, take action!',
          'https://www.youtube.com/watch?v=Xj9MeDi-IqA',
          'https://img.youtube.com/vi/Xj9MeDi-IqA/mqdefault.jpg'
        ),
        new Thumbnail(
          'Yang Seok Jung',
          'Coding life into the language of trees',
          'https://www.youtube.com/watch?v=zp4Zi-DIyhE',
          'https://img.youtube.com/vi/zp4Zi-DIyhE/mqdefault.jpg'
        ),
        new Thumbnail(
          'Su Kyung Chung',
          "How Marcel Duchamp's 'Fountain' is coded in the language of art history",
          'https://www.youtube.com/watch?v=UGkPiH7d51M',
          'https://img.youtube.com/vi/UGkPiH7d51M/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 5회 TEDxSNU: Link, 세상을 잇다',
      '본 강연 자체가 하나의 링크가 되기를 바라며, 울타리에 갇히지 않고, 여러 분야, 문화, 아이디어를 넘나드는 연결을 통해 새로운 도약을 이루어내는 우리 사회의 링커(Linker)들의 이야기를 공유하고자 한다.',
      [
        new Thumbnail(
          'Kim Un Ho',
          'How will we live',
          'https://www.youtube.com/watch?v=yMrhHuS4adY',
          'https://img.youtube.com/vi/yMrhHuS4adY/mqdefault.jpg'
        ),
        new Thumbnail(
          'Song Han Na',
          "Curating is not just an exhibition, but it's context",
          'https://www.youtube.com/watch?v=CjK1e2RhDlA',
          'https://img.youtube.com/vi/CjK1e2RhDlA/mqdefault.jpg'
        ),
        new Thumbnail(
          'Park Ji Woong',
          'Software is eating the world!',
          'https://www.youtube.com/watch?v=EliI4PEX78s',
          'https://img.youtube.com/vi/EliI4PEX78s/mqdefault.jpg'
        ),
        new Thumbnail(
          'Yoon Seon Joo',
          'What is your dream?',
          'https://www.youtube.com/watch?v=_6MAu4ND_7I',
          'https://img.youtube.com/vi/_6MAu4ND_7I/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kwon Goo Yik',
          'just listen - what they truly need',
          'https://www.youtube.com/watch?v=VrejpCpibWc',
          'https://img.youtube.com/vi/VrejpCpibWc/mqdefault.jpg'
        ),
        new Thumbnail(
          'Choi Eun Young',
          'Sand art - a wonderful artpiece that emerges from fingertips',
          'https://www.youtube.com/watch?v=LBuJ1QRKsb0',
          'https://img.youtube.com/vi/LBuJ1QRKsb0/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kim A Ran',
          'Beyond the boundaries between donors and donees',
          'https://www.youtube.com/watch?v=w0mwB8eVa90',
          'https://img.youtube.com/vi/w0mwB8eVa90/mqdefault.jpg'
        ),
        new Thumbnail(
          'Han Dong Heon',
          'Let us all be speakers, right now! ',
          'https://www.youtube.com/watch?v=tOEDTT_doL0',
          'https://img.youtube.com/vi/tOEDTT_doL0/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 4회 TEDxSNU: Geek?',
      '외부의 환경에 굴하지 않고 자신의 뜻을 실현해 나가는 분들이 전하는 아이디어를 통해 그들의 삶과 열정을 체험하는 시간을 갖고자 한다. ',
      [
        new Thumbnail(
          'Choi Byung Chul',
          'Let us all be speakers, right now! ',
          'https://www.youtube.com/watch?v=tOEDTT_doL0',
          'https://img.youtube.com/vi/tOEDTT_doL0/mqdefault.jpg'
        ),
        new Thumbnail(
          'Beom Jun Kim',
          'Physicist who studies any or all subjects of interest around him',
          'https://www.youtube.com/watch?v=6sZRNYGSHN0',
          'https://img.youtube.com/vi/6sZRNYGSHN0/mqdefault.jpg'
        ),
        new Thumbnail(
          'Jo Eun',
          'A social activist who denied military service for his faith',
          'https://www.youtube.com/watch?v=H9s01As9fKQ',
          'https://img.youtube.com/vi/H9s01As9fKQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Koh Young',
          'Butterfly Person',
          'https://www.youtube.com/watch?v=mTZIasysHss',
          'https://img.youtube.com/vi/mTZIasysHss/mqdefault.jpg'
        ),
        new Thumbnail(
          'Moon Hoon',
          'Geek Architecture, An Impertivent Imagination against the Routine',
          'https://www.youtube.com/watch?v=QSXgZ34JV88',
          'https://img.youtube.com/vi/QSXgZ34JV88/mqdefault.jpg'
        ),
        new Thumbnail(
          'Ryu Jae Hyun',
          'The Way to Solve the Generation Gap through Festival',
          'https://www.youtube.com/watch?v=qSLPTU5Drs0',
          'https://img.youtube.com/vi/qSLPTU5Drs0/mqdefault.jpg'
        )
      ]
    ),
    new Event(
      '제 3회 TEDxSNU: Design',
      '디자인을 통해 발전을 이루어낸 연사들을 초청하여 디자인에 대한 그들의 시각을 공유하고, 우리 삶 속에서 디자인이 갖는 힘을 느끼고자 한다.',
      [
        new Thumbnail(
          'Park Mi Huyn',
          'Recycling design',
          'https://www.youtube.com/watch?v=6U3ARVPcp94',
          'https://img.youtube.com/vi/6U3ARVPcp94/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Sang Hyun',
          'Calligraphic design of Korea',
          'https://www.youtube.com/watch?v=UgPRVwqeCrc',
          'https://img.youtube.com/vi/UgPRVwqeCrc/mqdefault.jpg'
        ),
        new Thumbnail(
          'Bang Hyun Woo',
          'Technology and art, new media art',
          'https://www.youtube.com/watch?v=wNaOtdAr59I',
          'https://img.youtube.com/vi/wNaOtdAr59I/mqdefault.jpg'
        ),
        new Thumbnail(
          'Park Dong Chun',
          'Designing global community',
          'https://www.youtube.com/watch?v=UxCSq-fP5Aw',
          'https://img.youtube.com/vi/UxCSq-fP5Aw/mqdefault.jpg'
        ),
        new Thumbnail(
          'Cho Dong Sung',
          'Design management and management design ',
          'https://www.youtube.com/watch?v=xCkzMIK5z90',
          'https://img.youtube.com/vi/xCkzMIK5z90/mqdefault.jpg'
        ),
        new Thumbnail(
          'Jung Hae Jin',
          'Designing korean food ',
          'https://www.youtube.com/watch?v=W32iYcAScao',
          'https://img.youtube.com/vi/W32iYcAScao/mqdefault.jpg'
        ),
        new Thumbnail(
          'Song Ju Chul',
          'Design for public',
          'https://www.youtube.com/watch?v=pF094Ezgt7E',
          'https://img.youtube.com/vi/pF094Ezgt7E/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kim Young Se',
          'Design centric business',
          'https://www.youtube.com/watch?v=7Q5eGi_G3TY',
          'https://img.youtube.com/vi/7Q5eGi_G3TY/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 2회 TEDxSNU: Entertainment',
      '엔터테인먼트에 대한 색다른 시각들을 소개함으로써 우리 삶의 즐거움과 관련한 새로운 생각들을 공유하고자 한다.',
      [
        new Thumbnail(
          'Choi Ung Sik',
          'Flourish Your Life with Technology',
          'https://www.youtube.com/watch?v=4ikoJByVHDk',
          'https://img.youtube.com/vi/4ikoJByVHDk/mqdefault.jpg'
        ),
        new Thumbnail(
          'Eun Young Seo',
          'Open Your Life with Your Own "Style"',
          'https://www.youtube.com/watch?v=WOTDO7viLxw',
          'https://img.youtube.com/vi/WOTDO7viLxw/mqdefault.jpg'
        ),
        new Thumbnail(
          'Nam Moo Sung',
          'Jazz, Variation on Your Life.',
          'https://www.youtube.com/watch?v=kenKp_A7rAA',
          'https://img.youtube.com/vi/enKp_A7rAA/mqdefault.jpg'
        ),
        new Thumbnail(
          'Oh Ha Yeon',
          'Human Library : Books "Who" We Can Talk To',
          'https://www.youtube.com/watch?v=-LInNBFem8o',
          'https://img.youtube.com/vi/-LInNBFem8o/mqdefault.jpg'
        ),
        new Thumbnail(
          'Hilary V.',
          'Design centric business',
          'https://www.youtube.com/watch?v=7Q5eGi_G3TY',
          'https://img.youtube.com/vi/7Q5eGi_G3TY/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Min Young',
          'Rethink Our Travel',
          'https://www.youtube.com/watch?v=T-zN9r02W4w',
          'https://img.youtube.com/vi/T-zN9r02W4w/mqdefault.jpg'
        ),
        new Thumbnail(
          'Joo Chil Hwan',
          'Death and revival in us',
          'https://www.youtube.com/watch?v=u0zTHIjfcVY',
          'https://img.youtube.com/vi/u0zTHIjfcVY/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Eung Il',
          'DC inside and "ing-yeo" culture',
          'https://www.youtube.com/watch?v=v6sIqQhQDv4',
          'https://img.youtube.com/vi/v6sIqQhQDv4/mqdefault.jpg'
        ),
      ]
    ),
    new Event(
      '제 1회 TEDxSNU: Techonolgy',
      '기술의 올바른 발전 방향에 대한 생각과 실제 적용 사례에 대한 이야기를 공유하고자 한다.',
      [
        new Thumbnail(
          'Kwon Jung Hyuk',
          'Between Mobile and Web',
          'https://www.youtube.com/watch?v=vxVmFtQSSvw',
          'https://img.youtube.com/vi/vxVmFtQSSvw/mqdefault.jpg'
        ),
        new Thumbnail(
          'Kwon Do Kyun',
          'Two new approaches lead technology to quantum Jump',
          'https://www.youtube.com/watch?v=6rtqmHfJjP0',
          'https://img.youtube.com/vi/6rtqmHfJjP0/mqdefault.jpg'
        ),
        new Thumbnail(
          'Hwang Reagan',
          'Technology makes people happier',
          'https://www.youtube.com/watch?v=vj0p2_i9UNw',
          'https://img.youtube.com/vi/vj0p2_i9UNw/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Joon Hwan',
          'Design Situationally Appropriate Interfaces',
          'https://www.youtube.com/watch?v=HylMkTEUN9k',
          'https://img.youtube.com/vi/HylMkTEUN9k/mqdefault.jpg'
        ),
        new Thumbnail(
          'Jung Ji Hoon',
          'Quantum Jump into the Social Responsibility of the Technology',
          'https://www.youtube.com/watch?v=YiewgbnHHjs',
          'https://img.youtube.com/vi/YiewgbnHHjs/mqdefault.jpg'
        ),
        new Thumbnail(
          'Shin Hyun Uk',
          'Petty Loan as a Web Service',
          'https://www.youtube.com/watch?v=GPaU1XEFzTA',
          'https://img.youtube.com/vi/GPaU1XEFzTA/mqdefault.jpg'
        ),
        new Thumbnail(
          'Jeon Seung Min',
          'The Facebook Era',
          'https://www.youtube.com/watch?v=gsGMm2yhYc0&t=7s',
          'https://img.youtube.com/vi/gsGMm2yhYc0&t=7s/mqdefault.jpg'
        ),
        new Thumbnail(
          'Lee Jae Seok',
          'How to Enhance Creativity through Technology and Humanities',
          'https://www.youtube.com/watch?v=n_qmSuOP04E',
          'https://img.youtube.com/vi/n_qmSuOP04E/mqdefault.jpg'
        ),
      ]
    ),
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.event_id = this.route.snapshot.params['id'] - 1;

    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params)=>{
        this.event_id = params['id'] - 1;
      }
    )

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  

}
