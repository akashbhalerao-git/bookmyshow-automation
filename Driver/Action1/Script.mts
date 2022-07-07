'executeTest("TC_012")
On Error Resume Next
Dim path
path="C:\Users\user259\Documents\BookMyshow\Test data\Test Data.xlsx"
DataTable.AddSheet "Test Data"
DataTable.ImportSheet path,"BMS","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Execution_flag","Test Data")="Y" Then
executeTest (DataTable.Value("TestCaseID","Test Data")) @@ script infofile_;_ZIP::ssf98.xml_;_
DataTable.Value("Result","Test Data") = Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"Test Data","BMS" @@ script infofile_;_ZIP::ssf64.xml_;_
 @@ script infofile_;_ZIP::ssf81.xml_;_
 @@ script infofile_;_ZIP::ssf110.xml_;_
 @@ script infofile_;_ZIP::ssf102.xml_;_
