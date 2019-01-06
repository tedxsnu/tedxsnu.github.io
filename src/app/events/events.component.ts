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
      '2018 Fall TEDxSNU: 흑',
      `
      '보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.
      보이지 않는 것, 보지 않는 것에 대해서 이야기하고자 한다.'
      `,
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          'https://www.youtube.com/watch?v=QwBHz8y99UQ',
          'https://img.youtube.com/vi/QwBHz8y99UQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'https://img.youtube.com/vi/M0dz8lztdV4/mqdefault.jpg'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'https://img.youtube.com/vi/ii76P1ftD1o/mqdefault.jpg'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'https://img.youtube.com/vi/QwBHz8y99UQ/mqdefault.jpg'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'past events/of showa.png'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'past events/stop persuading.png'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          'past events/innovating.png'
        )
      ]
    ), 
    new Event(
      '11th TEDxSNU: 미치다',
      '다함께 미쳐봅시다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    ),
    new Event(
      '10th TEDxSNU: 무제',
      '주제가 없습니다.',
      [
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        ),
        new Thumbnail(
          'Soojeong Lee',
          'What black',
          '#',
          '#'
        )
      ]
    )
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
