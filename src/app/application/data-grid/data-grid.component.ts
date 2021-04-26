import { Component, OnInit, ViewChild } from '@angular/core';
import { DataGridService } from 'src/app/services/data-grid.service';

import { DxDataGridComponent } from 'devextreme-angular';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Customer } from 'src/app/models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import DevExpress from 'devextreme';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  dataSource: DataSource;
  customers: Customer[];
  customerForm: FormGroup;

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  constructor(
    private dataGridService: DataGridService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initCustomerForm();
    this.getCustomerslist();
  }

  initCustomerForm() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      postCode: ['', Validators.pattern("^[0-9]*$")]
    })
  }

  onSubmitForm() {
    let customer = new Customer();
    
    customer.firstName = this.customerForm.value['firstName'];
    customer.lastName = this.customerForm.value['lastName'];
    customer.email = this.customerForm.value['email'];
    customer.city = this.customerForm.value['city'];
    customer.postCode = this.customerForm.value['postCode'];

    this.dataGridService.addCustomerService(customer).subscribe(() => {
      this.getCustomerslist();

      this.dataSource.store().insert(customer).then(() => this.dataSource.reload());
    });
    this.customerForm.reset();
  }

  getCustomerslist() {
    this.dataGridService.getCustomerListService().subscribe(
      list => {
        this.dataSource = new DataSource({
          store: list 
        });
      }
    );
    return this.dataSource;
  }

  convertIntoPDF() {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance
    }).then(() => {
      doc.save('customers_list.pdf')
    })
  }
}

