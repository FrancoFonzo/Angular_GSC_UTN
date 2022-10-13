import { Directive, ElementRef, HostListener, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hide]'
})
export class HideDirective implements OnInit, OnDestroy {

  /*
    Los eventos mouseenter y mouseleave no funcionan correctamente con visibility hidden,
    ya que al perder la visibilidad, cualquier movimiento del mouse en el elemento oculto lo toma como "mouseleave",
    volviendo la visibilidad, al volver la visibilidad, cualquier movimiento lo toma como "mouseenter".
    Esto genera un bucle de eventos ante cualquier movimiento del mouse, y por lo tanto un parpadeo del objeto.
    Utilizo estilo opacity: 0; en su defecto.
  */

  private unlisteners: Function[] | null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.unlisteners = null;
   }

  public ngOnInit() : void {
    this.unlisteners = [
      this.renderer.listen( this.elementRef.nativeElement, "mouseenter", this.handleMouseEnter ),
      this.renderer.listen( this.elementRef.nativeElement, "mouseleave", this.handleMouseLeave )
    ];
    
  }

  ngOnDestroy(): void {
  this.unlisteners?.forEach(unlistener => unlistener());
  }

  private handleMouseEnter = ( event: MouseEvent ) : void => {
		this.elementRef.nativeElement.classList.add('hidden');
    console.log("enter");
	};

  private handleMouseLeave = ( event: MouseEvent ) : void => {
		this.elementRef.nativeElement.classList.remove('hidden');
    console.log("leave");
	};

}
