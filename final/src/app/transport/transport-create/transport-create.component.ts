import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {PlaceService} from '../../service/place.service';
import {Place} from '../../model/place.model';
import {TransportService} from '../../service/transport.service';
import {Router} from '@angular/router';

@Component({
  selector   : 'app-transport-create',
  templateUrl: './transport-create.component.html',
  styleUrls  : ['./transport-create.component.css']
})
export class TransportCreateComponent implements OnInit {
  successStatus = false;
  transportForm: FormGroup;
  places: Place[];
  submitted = false;

  constructor(private placeService: PlaceService,
              private transportService: TransportService,
              private route: Router
  ) {
  }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(
      data => {
        this.places = data;
        console.log(data);
        this.transportForm = new FormGroup({
          type       : new FormControl('', [Validators.required]),
          company    : new FormControl('', [Validators.required]),
          fromPlace  : new FormControl(null, [Validators.required]),
          toPlace    : new FormControl(null, [Validators.required]),
          phone      : new FormControl('',
            [Validators.required, Validators.pattern(/^09[037]\d{7}$/)]),
          email      : new FormControl('',
            [Validators.required, Validators.email]),
          startTime  : new FormControl('',
            [Validators.required, Validators.pattern(/^\d\d:\d\d$/), this.timeValidate]),
          arrivalTime: new FormControl('',
            [Validators.required, Validators.pattern(/^\d\d:\d\d$/), this.timeValidate])
        });
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
      this.transportService.save(this.transportForm.value).subscribe(
        () => {
          this.route.navigateByUrl('/');
        }
      );
    }
  }
}
