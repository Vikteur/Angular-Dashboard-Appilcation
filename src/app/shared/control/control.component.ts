import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',

  }
})
export class ControlComponent implements AfterContentInit{
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  constructor() {
   afterRender( () => {
     console.log('AFTER RENDER');
   });

   afterNextRender(() => {
     console.log('AFTER NEXT RENDER');

   });
  }

  ngAfterContentInit(): void {
  }

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick(){
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }


}
