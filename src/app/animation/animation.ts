import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  animation,
  useAnimation,
} from '@angular/animations';
export let bonusOutLeftAnimation = animation([
  animate(
    '1s ease-out',
    keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        backgroundColor: '#333',
        color: '#FFF',
        transform: 'translate3d(300px,0,0)',
      }),
      style({
        offset: 1,
        opacity: 1,
        transform: 'translate3d(-2000px,0,0)',
      }),
    ])
  ),
]);

export let fade = trigger('fade', [
  transition(':enter, :leave', [
    // void <=> *
    style({
      backgroundColor: 'greenYellow',
      opacity: 1,
    }),
    animate(1000, style({ opacity: 0 })),
  ]),
]);

export let slide = trigger('slide', [
  transition(':enter', [
    // void <=> *
    style({
      transform: 'translateX(-10px)',
    }),
    animate('1s 0.5s ease-in-out'),
  ]),
  transition(':leave', [
    // void <=> *
    // animate("3s 1s cubic-bezier(.99,.04,.9,.46)", style({transform: 'translateX(-100%)', backgroundColor:'#064'}))\
    useAnimation(bonusOutLeftAnimation),
  ]),
]);

export let fadeInAnimation = animation(
  [
    style({
      opacity: 0,
      backgroundColor: 'red',
    }),
    animate('{{duration}} {{easing}}'),
  ],
  {
    params: {
      duration: '3s',
      easing: 'eas-out',
    },
  }
);
