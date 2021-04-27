import { Component, OnInit, ViewChild } from '@angular/core';


import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Customer } from 'src/app/models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DataSource from 'devextreme/data/data_source';
import { ApiCustomerService } from 'src/app/services/api-customer.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  dataSource: DataSource;
  customers: Customer[];
  customerForm: FormGroup;
  events: Array<string> = [];

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(
    private apiCustomer: ApiCustomerService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.apiCustomer.getCustomersService().subscribe((customers: Customer[]) => {
      this.customers = customers;
      this.initializeDatatable(customers);
    });
    this.initCustomerForm();
  }

  initializeDatatable(customers: Customer[]): void {
    this.dataSource = new DataSource(
      { store: customers }
    )
  }

  initCustomerForm(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      postCode: ['', Validators.pattern("^[0-9]*$")]
    })
  }

  addCustomer() {
    let customer = {
      firstName: this.customerForm.value['firstName'],
      lastName: this.customerForm.value['lastName'],
      email: this.customerForm.value['email'],
      city: this.customerForm.value['city'],
      postCode: this.customerForm.value['postCode']
    }
    this.addToDatatable(customer);
    this.customerForm.reset();
  }

  addToDatatable(customer: Customer): void {
    this.apiCustomer.addCustomerService(customer).subscribe(() => {
      this.dataSource.store().insert(customer).then(() => this.dataSource.reload());
    });
  }

  convertIntoPDF(): void {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance
    }).then(() => {
      doc.save('customers_list.pdf');
    })
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }
}
