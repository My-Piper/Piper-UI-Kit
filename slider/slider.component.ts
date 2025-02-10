import {
  ChangeDetectorRef,
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from "@angular/core";
import {
  ControlValueAccessor,
  FormBuilder,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { UI } from "../consts";
import { UntilDestroyed } from "../helpers/until-destroyed";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ],
})
export class SliderComponent
  extends UntilDestroyed
  implements OnInit, ControlValueAccessor
{
  ui = UI;

  rangeControl = this.fb.control(null);
  numericControl = this.fb.control(null);
  form = this.fb.group({
    range: this.rangeControl,
    numeric: this.numericControl,
  });

  @HostBinding("attr.data-disabled")
  disabled = false;

  @Input()
  min!: number;

  @Input()
  max: number;

  @Input()
  step: number;

  onChange: (value: any) => void = () =>
    console.error("value accessor is not registered");
  onTouched: () => void = () =>
    console.error("value accessor is not registered");

  registerOnChange = (fn: any) => (this.onChange = fn);
  registerOnTouched = (fn: any) => (this.onTouched = fn);

  @HostListener("blur")
  onBlur = () => this.onTouched();

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.rangeControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.numericControl.setValue(value, { emitEvent: false });
        this.onChange(value);
      });

    this.numericControl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe((value) => {
        this.rangeControl.setValue(value, { emitEvent: false });
        this.onChange(value);
      });
  }

  writeValue(value: number) {
    this.form.setValue(
      { range: value || null, numeric: value || null },
      { emitEvent: false }
    );
    this.cd.detectChanges();
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
