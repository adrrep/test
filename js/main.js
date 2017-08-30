var doc = new jsPDF();
doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
doc.setFont("courier");
doc.setFontSize(10);
doc.text('NAMENAMENAMENAME', 12, 66); //Name
doc.text('AGE', 60, 66); //Age
doc.text('DD/MM/YYYY', 54, 73); //DOB
doc.rect(86.35, 58, 2, 2, 'F'); //Male
doc.rect(95.5, 58, 2, 2, 'F'); //Female
doc.text('WTG', 89, 69); //Weight
doc.text('DD/MM/YYYY', 65, 83); //ReactionStart
doc.text('DD/MM/YYYY', 65, 88); //ReactionEnd
doc.text('D', 12, 97); //DescriptionLeftTopCorner
doc.text('D', 98, 97); //DescriptionRightTopCorner
doc.text('D', 12, 156); //DescriptionLeftBottomCorner
doc.text('D', 98, 156); //DescriptionRightBottomCorner
doc.text('NAME NAME', 17, 181); //MedicationName1Line1
doc.text('NAME NAME', 17, 184); //MedicationName1Line2
doc.text('NAME NAME', 17, 190); //MedicationName2Line1
doc.text('NAME NAME', 17, 193); //MedicationName2Line2
doc.text('NAME NAME', 17, 198.5); //MedicationName3Line1
doc.text('NAME NAME', 17, 201.5); //MedicationName3Line2
doc.text('NAME NAME', 17, 206.75); //MedicationName4Line1
doc.text('NAME NAME', 17, 209.75); //MedicationName4Line2
doc.text('MANUFA', 39, 181); //Manufacturer1Line1
doc.text('CTURER', 39, 184); //Manufacturer1Line2
doc.text('MANUFA', 39, 190); //Manufacturer2Line1
doc.text('CTURER', 39, 193); //Manufacturer2Line2
doc.text('MANUFA', 39, 198.5); //Manufacturer3Line1
doc.text('CTURER', 39, 201.5); //Manufacturer3Line2
doc.text('MANUFA', 39, 206.75); //Manufacturer4Line1
doc.text('CTURER', 39, 209.75); //Manufacturer4Line2
doc.text('BATCHB', 54, 181); //Batch1Line1
doc.text('ATCHBA', 54, 184); //Batch1Line2
doc.text('BATCHB', 54, 190); //Batch2Line1
doc.text('ATCHBA', 54, 193); //Batch2Line2
doc.text('BATCHB', 54, 198.5); //Batch3Line1
doc.text('ATCHBA', 54, 201.5); //Batch3Line2
doc.text('BATCHB', 54, 206.75); //Batch4Line1
doc.text('ATCHBA', 54, 209.75); //Batch4Line2
doc.save('temp.pdf');
