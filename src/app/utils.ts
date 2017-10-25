import * as jsPDF from 'jspdf'

export default class Utils {
    static CrearPdf() {


      let doc = new jsPDF();

      doc.setFontSize(15);
      doc.setFontType("bold");
      doc.text(20, 20, 'Recibo Pago');
      doc.setFontSize(10);
      doc.setFontType("bold");
      doc.text(20, 30, 'Nit de comercio operador de información');
      doc.text(20, 40, 'Razón social del operador de información');
      doc.text(20, 50, 'Descripción');
      doc.text(20, 60, 'Fecha');
      doc.text(120, 60, 'Hora');
      doc.text(20, 70, 'Período de cotización otros riesgos');
      doc.text(20, 80, 'Período de cotización para salud');
      doc.text(20, 90, 'Empresa');
      doc.text(120, 90, 'ID');
      doc.text(20, 100, 'Nombre aportante');
      doc.text(20, 110, 'Dirección IP de origen');
      doc.text(20, 120, 'Datos Valores pagados');
      doc.text(20, 160, 'Subtotales');
      doc.text(20, 165, 'Valor sin mora');
      doc.text(120, 165, 'Valor mora');

      doc.text(25, 195, 'Tipo de planilla');
      doc.text(25, 205, 'Número transacción bancaria / CUS');
      doc.text(25, 215, 'Banco');
      doc.text(25, 225, 'Total pagado');

    doc.setFillColor(215,215,215);

      doc.rect(20, 125, 40, 10,'FD');
      doc.rect(60, 125, 40, 10,'FD');
      doc.rect(100, 125, 40, 10,'FD');
      doc.rect(140, 125, 40, 10,'FD');

      doc.text(23,133, 'Administradora');
      doc.text(63,133, 'Valor sin Mora');
      doc.text(103,133, 'Valor Mora');
      doc.text(143,133, 'Total');

      doc.setFontType("normal");
      doc.text(20, 35, '900089104-5');
      doc.text(20, 45, 'ARUS (antes Enlace Operativo)');
      doc.text(20, 55, 'Pago de Seguridad Social');
      doc.text(20, 65, '2017/07/25');
      doc.text(120, 65, '09:48:24 AM');
      doc.text(20, 75, 'Septiembre de 2017');
      doc.text(20, 85, 'Septiembre de 2017');
      doc.text(20, 95, 'Independiente');
      doc.text(120,95, '1017178054');
      doc.text(20,105, 'Juan Camilo Buendia');
      doc.text(20,115, 'pruebas.suaporte.com.co');

      doc.rect(20, 135, 40, 10);
      doc.rect(60, 135, 40, 10);
      doc.rect(100, 135, 40, 10);
      doc.rect(140, 135, 40, 10);

      doc.text(23,143, 'COLFONDOS');
      doc.text(63,143, '$160.000');
      doc.text(103,143, '$1.800');
      doc.text(143,143, '$161.000');


      doc.rect(20, 145, 40, 10);
      doc.rect(60, 145, 40, 10);
      doc.rect(100, 145, 40, 10);
      doc.rect(140, 145, 40, 10);

      doc.text(23,153, 'CAFESALUD EPS');
      doc.text(63,153, '$125.000');
      doc.text(103,153, '$1.400');
      doc.text(143,153, '$126.400');
      doc.text(20, 170, '$285.000');
      doc.text(120, 170, '$3.200');

      doc.setFillColor(215,215,215);
      doc.rect(20, 175, 160, 15,'FD');
      doc.setDrawColor(0);
      doc.setFontType("bold");
      doc.text(25, 180, 'Referencia de pago / N° planilla');
      doc.setFontType("normal");
      doc.text(25, 185, '19827805');
      doc.rect(20, 190, 160, 60);

      doc.text(25, 200, 'Independiente');
      doc.text(25, 210, '276678229');
      doc.text(25, 220, '(1054) - ABDUL HELMFINANTIAL BANK');
      doc.text(25, 230, '$ 288.200.00');



    // Save the PDF
    doc.save('Test.pdf');

     }

}
