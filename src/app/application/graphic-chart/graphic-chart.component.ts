import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data.model';
import { GraphicsService } from 'src/app/services/graphics.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-graphic-chart',
  templateUrl: './graphic-chart.component.html',
  styleUrls: ['./graphic-chart.component.css']
})
export class GraphicChartComponent {

  dataSource: Data[];

    constructor(graphicsService: GraphicsService) {
        this.dataSource = graphicsService.getData();
    }

    generatePDF() {
      var data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas => {
        var imgWidth = 208;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jspdf('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('newPDF.pdf');
      });
    }
}
