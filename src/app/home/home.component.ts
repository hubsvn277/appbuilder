import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { RevenueType } from '../models/e-commerce/revenue-type';
import { CustomersType } from '../models/northwind/customers-type';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks-type';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppDataService } from '../services/crmapp-data.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxCategoryChartModule, IgxAvatarComponent, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public eCommerceRevenue: RevenueType[] = [];
  public northwindCustomers: CustomersType[] = [];
  public cRMAppDataMeetingsTasks: MeetingsTasksType[] = [];

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppDataService: CRMAppDataService,
  ) {}

  ngOnInit() {
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.eCommerceRevenue = data,
      error: (_err: any) => this.eCommerceRevenue = []
    });
    this.northwindService.getData('CustomersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCustomers = data,
      error: (_err: any) => this.northwindCustomers = []
    });
    this.cRMAppDataService.getMeetingsTasksList().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.cRMAppDataMeetingsTasks = data,
      error: (_err: any) => this.cRMAppDataMeetingsTasks = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
