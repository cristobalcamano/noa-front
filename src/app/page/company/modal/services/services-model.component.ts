import { Component, OnInit, Input } from '@angular/core';
import { ServiceDto } from 'src/app/model/service/service-dto.model';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesModelComponent implements OnInit {

  servicios: ServiceDto[] = [];
  @Input() category: number;

  constructor() {
    this.category = 0;
  }

  ngOnInit(): void {
    
  }

}
