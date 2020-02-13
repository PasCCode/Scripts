function onEdit() {
  var sheet = SpreadsheetApp.getActiveSheet();
      checkBox = sheet.getActiveCell(),
      checkBoxRow = checkBox.getRow(),
      checkBoxColumn = checkBox.getColumn();

  if(checkBox.getValue() == true){
    var answersRange = sheet.getRange(checkBoxRow,checkBoxColumn-1),
        answersValue = answersRange.getValue();
    answersRange.setValue(answersValue+1);
    checkBox.setValue(false)
  }
}
