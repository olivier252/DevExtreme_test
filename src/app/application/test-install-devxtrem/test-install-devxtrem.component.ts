import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-install-devxtrem',
  templateUrl: './test-install-devxtrem.component.html',
  styleUrls: ['./test-install-devxtrem.component.css']
})
export class TestInstallDevxtremComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  helloWorld() {
    alert('Hello world!');
}

}
