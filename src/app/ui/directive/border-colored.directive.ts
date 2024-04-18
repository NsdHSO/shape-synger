import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBorderColored]',
  standalone: true,
})
export class BorderColoredDirective implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private renderer2 = inject(Renderer2);

  private positionBorder = 'left';

  @Input()
  color!: string;

  ngAfterViewInit(): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement.childNodes[0],
      'border-color',
      `var(${this.color})`,
    );

    this.renderer2.setStyle(
      this.elementRef.nativeElement.childNodes[0],
      `border-${this.positionBorder}-width`,
      `.2rem`,
    );
  }
}
