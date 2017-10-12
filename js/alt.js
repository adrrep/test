var doc;

function chunkSubstr(str, size) {
  var numChunks = Math.ceil(str.length / size);
  var chunks = new Array(numChunks);
  for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  return chunks;
}

function setupRender() {
  doc = new jsPDF('p', 'mm', 'a4');
  doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
  doc.setFont("courier");
  doc.setFontSize(10);
}

function renderText(data, xCord, yCord, charLimit, lineLimit, lineSpacing, fontSize = 10) {
  var chunks = new Array();
  chunks = chunkSubstr(data, charLimit);
  if (fontSize != 10) doc.setFontSize(fontSize);
  for (var i = 0; i < lineLimit; i++) {
    doc.text(chunks[i], xCord, yCord + (i * lineSpacing));
  }
  if (fontSize != 10) doc.setFontSize(10);
}

function renderImage(img, format, xCord, yCord, xSize, ySize) {
  doc.addImage(img, format, xCord, yCord, xSize, ySize);
}

function renderLine(xStart, yStart, xEnd, yEnd) {
  doc.setDrawColor(255);
  doc.line(xStart, yStart, xEnd, yEnd);
}

function renderBox(xCord, yCord) {
  doc.rect(xCord, yCord, 2, 2, 'F');
}

function render() {
  doc.save('final.pdf');
}

setupRender();
renderText('NAMENAMENAMENAME', 12, 66, 16, 1, 0); //Name
renderText('AGE', 60, 66, 3, 1, 0); //Age
renderText('DD/MM/YYYY', 55, 73.5, 10, 1, 0, 9); //DOB
renderBox(86.35, 58); //Male
renderBox(95.5, 58); //Female
renderText('WTG', 89, 69, 3, 1, 0); //Weight
renderText('DD/MM/YYYY', 65, 83, 10, 1, 0); //ReactionStart
renderText('DD/MM/YYYY', 65, 88, 10, 1, 0); //ReactionEnd
render();
