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
doc.text('DD/MM/', 69, 181); //ExpDate1Line1
doc.text('YYYY', 71, 184); //ExpDate1Line2
doc.text('DD/MM/', 69, 190); //ExpDate2Line1
doc.text('YYYY', 71, 193); //ExpDate2Line2
doc.text('DD/MM/', 69, 198.5); //ExpDate3Line1
doc.text('YYYY', 71, 201.5); //ExpDate3Line2
doc.text('DD/MM/', 69, 206.75); //ExpDate4Line1
doc.text('YYYY', 71, 209.75); //ExpDate4Line2
doc.text('DOSED', 85, 181); //Dose1Line1
doc.text('mg', 88, 184); //Dose1Line2
doc.text('DOSED', 85, 190); //Dose2Line1
doc.text('mg', 88, 193); //Dose2Line2
doc.text('DOSED', 85, 198.5); //Dose3Line1
doc.text('mg', 88, 201.5); //Dose3Line2
doc.text('DOSED', 85, 206.75); //Dose4Line1
doc.text('mg', 88, 209.75); //Dose4Line2
doc.text('ROUTE', 97.25, 181); //Route1Line1
doc.text('ROUTE', 97.25, 184); //Route1Line2
doc.text('ROUTE', 97.25, 190); //Route2Line1
doc.text('ROUTE', 97.25, 193); //Route2Line2
doc.text('ROUTE', 97.25, 198.5); //Route3Line1
doc.text('ROUTE', 97.25, 201.5); //Route3Line2
doc.text('ROUTE', 97.25, 206.75); //Route4Line1
doc.text('ROUTE', 97.25, 209.75); //Route4Line2
doc.text('FREQUEN', 109.5, 181); //Frequency1Line1
doc.text('FREQUEN', 109.5, 184); //Frequency1Line2
doc.text('FREQUEN', 109.5, 190); //Frequency2Line1
doc.text('FREQUEN', 109.5, 193); //Frequency2Line2
doc.text('FREQUEN', 109.5, 198.5); //Frequency3Line1
doc.text('FREQUEN', 109.5, 201.5); //Frequency3Line2
doc.text('FREQUEN', 109.5, 206.75); //Frequency4Line1
doc.text('FREQUEN', 109.5, 209.75); //Frequency4Line2
doc.text('DD/MM/', 129, 181); //TherapyStart1Line1
doc.text('YYYY', 131, 184); //TherapyStart1Line2
doc.text('DD/MM/', 129, 190); //TherapyStart2Line1
doc.text('YYYY', 131, 193); //TherapyStart2Line2
doc.text('DD/MM/', 129, 198.5); //TherapyStart3Line1
doc.text('YYYY', 131, 201.5); //TherapyStart3Line2
doc.text('DD/MM/', 129, 206.75); //TherapyStart4Line1
doc.text('YYYY', 131, 209.75); //TherapyStart4Line2
doc.text('DD/MM/', 149, 181); //TherapyEnd1Line1
doc.text('YYYY', 151, 184); //TherapyEnd1Line2
doc.text('DD/MM/', 149, 190); //TherapyEnd2Line1
doc.text('YYYY', 151, 193); //TherapyEnd2Line2
doc.text('DD/MM/', 149, 198.5); //TherapyEnd3Line1
doc.text('YYYY', 151, 201.5); //TherapyEnd3Line2
doc.text('DD/MM/', 149, 206.75); //TherapyEnd4Line1
doc.text('YYYY', 151, 209.75); //TherapyEnd4Line2
doc.text('REASONREASONREA', 167.5, 181); //Reason1Line1
doc.text('REASONREASONREA', 167.5, 184); //Reason1Line2
doc.text('REASONREASONREA', 167.5, 190); //Reason2Line1
doc.text('REASONREASONREA', 167.5, 193); //Reason2Line2
doc.text('REASONREASONREA', 167.5, 198.5); //Reason3Line1
doc.text('REASONREASONREA', 167.5, 201.5); //Reason3Line2
doc.text('REASONREASONREA', 167.5, 206.75); //Reason4Line1
doc.text('REASONREASONREA', 167.5, 209.75); //Reason4Line2
doc.addImage(tick, 'PNG', 31, 219.25, 4, 4); //ReactionAbated1Yes
doc.addImage(tick, 'PNG', 46, 219.25, 4, 4); //ReactionAbated1No
doc.addImage(tick, 'PNG', 62, 219.25, 4, 4); //ReactionAbated1Unknown
doc.addImage(tick, 'PNG', 77, 219.25, 4, 4); //ReactionAbated1NA
doc.text('REDCD mg', 91, 222.25); //ReactionAbated1ReducedDose
doc.addImage(tick, 'PNG', 31, 223.25, 4, 4); //ReactionAbated2Yes
doc.addImage(tick, 'PNG', 46, 223.25, 4, 4); //ReactionAbated2No
doc.addImage(tick, 'PNG', 62, 223.25, 4, 4); //ReactionAbated2Unknown
doc.addImage(tick, 'PNG', 77, 223.25, 4, 4); //ReactionAbated2NA
doc.text('REDCD mg', 91, 226.25); //ReactionAbated2ReducedDose
doc.addImage(tick, 'PNG', 31, 227.5, 4, 4); //ReactionAbated3Yes
doc.addImage(tick, 'PNG', 46, 227.5, 4, 4); //ReactionAbated3No
doc.addImage(tick, 'PNG', 62, 227.5, 4, 4); //ReactionAbated3Unknown
doc.addImage(tick, 'PNG', 77, 227.5, 4, 4); //ReactionAbated3NA
doc.text('REDCD mg', 91, 230.5); //ReactionAbated3ReducedDose
doc.addImage(tick, 'PNG', 31, 231.5, 4, 4); //ReactionAbated4Yes
doc.addImage(tick, 'PNG', 46, 231.5, 4, 4); //ReactionAbated4No
doc.addImage(tick, 'PNG', 62, 231.5, 4, 4); //ReactionAbated4Unknown
doc.addImage(tick, 'PNG', 77, 231.5, 4, 4); //ReactionAbated4NA
doc.text('REDCD mg', 91, 234.75); //ReactionAbated4ReducedDose
doc.text('-', 117.5, 222.25); //ReactionReappeared1Yes
doc.text('-', 117.5, 226.25); //ReactionReappeared2Yes
doc.text('-', 117.5, 230.5); //ReactionReappeared3Yes
doc.text('-', 117.5, 234.75); //ReactionReappeared4Yes
doc.text('-', 130.5, 222.25); //ReactionReappeared1No
doc.text('-', 130.5, 226.25); //ReactionReappeared2No
doc.text('-', 130.5, 230.5); //ReactionReappeared3No
doc.text('-', 130.5, 234.75); //ReactionReappeared4No
doc.text('-', 145, 222.25); //ReactionReappeared1Unknown
doc.text('-', 145, 226.25); //ReactionReappeared2Unknown
doc.text('-', 145, 230.5); //ReactionReappeared3Unknown
doc.text('-', 145, 234.75); //ReactionReappeared4Unknown
doc.text('-', 160, 222.25); //ReactionReappeared1NA
doc.text('-', 160, 226.25); //ReactionReappeared2NA
doc.text('-', 160, 230.5); //ReactionReappeared3NA
doc.text('-', 160, 234.75); //ReactionReappeared4NA
doc.text('-', 182, 222.25); //ReactionReappeared1ReintroducedDose
doc.text('-', 182, 226.25); //ReactionReappeared2ReintroducedDose
doc.text('-', 182, 230.5); //ReactionReappeared3ReintroducedDose
doc.text('-', 182, 234.75); //ReactionReappeared4ReintroducedDose
doc.save('temp.pdf');
