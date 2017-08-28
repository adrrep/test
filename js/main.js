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
doc.save('temp.pdf');
