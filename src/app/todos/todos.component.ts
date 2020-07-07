import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation,
  query,
  animateChild,
  stagger,
} from '@angular/animations';
import { fadeInAnimation } from '../animation/animation';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('todoSSSAnimation', [
      transition(':enter', [
        //  @* = all elements
        query('h1', [
          style({
            transform: 'translateY(-20px)',
          }),
          animate(1000),
        ]),
        query('@toDoAnimation',stagger(200, animateChild()))
      ]),
    ]),
    trigger('toDoAnimation', [
      transition(
        ':enter',
        useAnimation(fadeInAnimation, {
          params: {
            duration: '250ms',
            easing: 'ease-in-out',
          },
        })
      ),
      transition(
        ':leave',
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1s',
            easing: 'ease-in-out',
          },
        })
      ),
    ]),
  ],
})
export class TodosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items: string[] = [
    'ITShare C++',
    'ITShare PHP',
    'ITShare C#',
    'ITShare JAVA',
    'ITShare JAVASCRIPT',
  ];

  addItem(item) {
    this.items.splice(0, 0, item.value);
    item.value = '';
    console.log(item.value);
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    // this.items.indexOf(item).splice(item,1);
  }
}
