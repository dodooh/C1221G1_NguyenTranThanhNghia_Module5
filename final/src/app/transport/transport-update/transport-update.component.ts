import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransportService} from '../../service/transport.service';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector   : 'app-transport-update',
  templateUrl: './transport-update.component.html',
  styleUrls  : ['./transport-update.component.css']
})
export class TransportUpdateComponent implements OnInit {
  transportForm: FormGroup;
  successStatus = false;
  submitted = false;
fromList = ['Đà Nẵng', 'Huế', 'Quảng Nam', 'Quảng Ngãi', 'Bình Định'];
  toList = ['Quảng Trị', 'Quảng Bình', 'Hà Nội', 'Thanh Hóa', 'Nha Trang'];
  constructor(
    private route: Router,
    private transportService: TransportService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const idFromRoute = this.activatedRoute.snapshot.paramMap.get('id');
    this.transportService.findById(idFromRoute).subscribe(
      data => {
        this.transportForm = new FormGroup({
          id         : new FormControl(data.id),
          type       : new FormControl(data.type, [Validators.required]),
          company    : new FormControl(data.company, [Validators.required]),
          from       : new FormControl(data.from, [Validators.required]),
          to         : new FormControl(data.to, [Validators.required]),
          phone      : new FormControl(data.phone,
            [Validators.required, Validators.pattern(/^09[037]\d{7}$/)]),
          email      : new FormControl(data.email,
            [Validators.required, Validators.email]),
          startTime  : new FormControl(data.startTime,
            [Validators.required, Validators.pattern(/^\d\d:\d\d$/), this.timeValidate]),
          arrivalTime: new FormControl(data.arrivalTime,
            [Validators.required, Validators.pattern(/^\d\d:\d\d$/), this.timeValidate])
        });
      }, error => {
        this.route.navigateByUrl('/404');
      }
    );
  }

  timeValidate(controls: AbstractControl): ValidationErrors {
    const time = controls.value;
    const h = time.split(':')[0];
    const m = time.split(':')[1];
    const inputTime = new Date(2022, 5, 20, h, m);
    const fromCompared = new Date(2022, 5, 20, 5, 0);
    const toCompared = new Date(2022, 5, 20, 23, 0);

    if (inputTime < fromCompared || inputTime >= toCompared) {
      return {timeInvalid: true};
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.transportForm.valid) {
      this.transportService.update(this.transportForm.value).subscribe(
        () => {
          this.route.navigateByUrl('/');
        }
      );
    }
  }
}
