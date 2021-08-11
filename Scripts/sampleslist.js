window.GroupingList = ["GRIDS", "VISUALIZATION", "LAYOUT", "EDITORS", "NAVIGATION","REPORTING", "NOTIFICATION", "BUSINESSINTELLIGENCE", "DATASCIENCE", "FILE FORMATS"];

//Controls List
window.SampleControls = [{ "name": "PDF" },{ "name": "PDFViewer" }, { "name": "XlsIO" }, { "name": "DocIO" } , { "name": "Presentation" }
];
//Samples List
window.SamplesList = [

    {
        "name": "PDF",
        "id": "PDF",
		"Group":"FILE FORMATS",
        "childcount": "1",		
        "action": "JobApplication",         
        "samples": [

               { "id": "1", "name": "Job Application", "action": "JobApplication", "childcount": "0" },
               {
                   "id": "2", "name": "Product Showcase", "action": "Invoice", "childcount": "2", samples: [
                   //second hierarchy
                         { "id": "21", "name": "Invoice Sample", "action": "Invoice", "childcount": "0" },
						 { "id": "22", "name": "ZUGFeRD Invoice", "action": "ZugFerd", "childcount": "0" }
						 ]
               },
               {
                   "id": "3", "name": "Getting Started", "action": "HelloWorld", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "31", "name": "Hello World", "action": "HelloWorld", "childcount": "0" }
                         ]
               },
			   {
                   "id": "4", "name": "Compression", "action": "PDFCompression", "childcount": "1", samples: [
                   //second hierarchy
                    { "id": "41", "name": "PDF Compression Level", "action": "PDFCompression", "childcount": "0" },
                    { "id": "42", "name": "Compress Existing PDF", "action": "CompressExistingPDF", "childcount": "0" }]
               },
               {
                   "id": "5", "name": "Drawing Text", "action": "TextFlow", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "51", "name": "Text Flow", "action": "TextFlow", "childcount": "0" },
                         { "id": "52", "name": "RTL Support", "action": "RTLSupport", "childcount": "0" },
                         { "id": "53", "name": "Bullets and Lists", "action": "BulletsAndLists", "childcount": "0" },
                         { "id": "54", "name": "Multi Column Text", "action": "MultiColumnText", "childcount": "0" },
						 { "id": "55", "name": "Complex Script", "action": "ComplexScript", "childcount": "0" },
						 { "id": "56", "name": "OpenType Font", "action": "OpenTypeFont", "childcount": "0" }]
               },
               {
                   "id": "6", "name": "Graphics", "action": "Barcode", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "61", "name": "Barcode", "action": "Barcode", "childcount": "0" },
                         { "id": "62", "name": "Drawing Shapes", "action": "DrawingShapes", "childcount": "0" },
                         { "id": "63", "name": "Drawing Graphics", "action": "DrawingGraphics", "childcount": "0" },
                         { "id": "64", "name": "Inserting Images", "action": "InsertingImages", "childcount": "0" },
                         { "id": "65", "name": "Layers", "action": "Layers", "childcount": "0" }]
               },
               {
                   "id": "7", "name": "Tables", "action": "NorthwindReport", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "71", "name": "Northwind Report", "action": "NorthwindReport", "childcount": "0"},
						 { "id": "72", "name": "Adventure Cycle", "action": "AdventureCycle", "childcount": "0" },
                         { "id": "73", "name": "Table Features", "action": "TableFeatures", "childcount": "0" }]
               },
               {
                   "id": "8", "name": "Settings", "action": "DocumentProperties", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "81", "name": "Document Properties", "action": "DocumentProperties", "childcount": "0" },
                         { "id": "82", "name": "Page Settings", "action": "PrintSettings", "childcount": "0" },
                         { "id": "83", "name": "Header and Footer", "action": "HeaderFooter", "childcount": "0" },
                         { "id": "84", "name": "Encryption Support", "action": "EncryptionSupport", "childcount": "0" },
                         { "id": "85", "name": "Redaction", "action": "Redaction", "childcount": "0" }]
               },
               {
                   "id": "9", "name": "User Interaction", "action": "InteractiveFeatures", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "91", "name": "Interactive Features", "action": "InteractiveFeatures", "childcount": "0" },
                         { "id": "92", "name": "Digital Signature", "action": "DigitalSignature", "childcount": "0" },
                         { "id": "93", "name": "Portfolio", "action": "Portfolio", "childcount": "0" },
						 { "id": "94", "name": "AnnotationFlatten", "action": "AnnotationFlatten", "childcount": "0" },
                         { "id": "95", "name": "Named Destination", "action": "NamedDestination", "childcount": "0" },
                         { "id": "96", "name": "Bookmarks", "action": "Bookmarks", "childcount": "0" },
						 { "id": "97", "name": "File Attachments", "action": "Attachments", "childcount": "0"},
                         { "id": "98", "name": "XFA Form Creation", "action": "XFAFormCreation", "childcount": "0" },
                         { "id": "99", "name": "XFA Form Filling", "action": "XFAFormFilling", "childcount": "0" }]
               },
               {
                   "id": "10", "name": "Import and Export", "action": "TextExtraction", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "101", "name": "Text Extraction", "action": "TextExtraction", "childcount": "0" },
                         { "id": "102", "name": "Word to PDF", "action": "WordToPdf", "childcount": "0" },
                         { "id": "103", "name": "Excel to PDF", "action": "ExceltoPDF", "childcount": "0" },
                         { "id": "104", "name": "XPS to PDF", "action": "XPStoPDF", "childcount": "0" },
                         { "id": "105", "name": "RTF Support", "action": "RTFSupport", "childcount": "0" },
                         { "id": "106", "name": "TIFF to PDF", "action": "TIFFtoPDF", "childcount": "0"},
                         { "id": "107", "name": "Image Extraction", "action": "ImageExtraction", "childcount": "0"},
                         { "id": "108", "name": "Export as Image", "action": "ExportasImage", "childcount": "0"}]
               },
               {
                   "id": "11", "name": "Conformance", "action": "PDFA", "childcount": "2", samples: [
                   //second hierarchy
                         { "id": "111", "name": "PDF-A Sample", "action": "PDFA", "childcount": "0" },
                         { "id": "112", "name": "PDF To PDFA1b", "action": "PDFA1bConverter", "childcount": "0" }						 
                         ]
               },
               {
                   "id": "12", "name": "Modify Documents", "action": "MergeDocuments", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "121", "name": "Merge Documents", "action": "MergeDocuments", "childcount": "0" },
                         { "id": "122", "name": "Split PDF", "action": "SplitPDF", "childcount": "0" },
                         { "id": "123", "name": "Overlay Documents", "action": "OverlayDocuments", "childcount": "0" },
                         { "id": "124", "name": "Booklet", "action": "Booklet", "childcount": "0" },
                         { "id": "125", "name": "Form Filling", "action": "FormFilling", "childcount": "0" },
                         { "id": "126", "name": "Import and Stamp", "action": "ImportAndStamp", "childcount": "0" },
                         { "id": "127", "name": "Replace Images", "action": "ReplaceImages", "childcount": "0"},
                         { "id": "128", "name": "Replace Fonts ", "action": "ReplaceFont", "childcount": "0" },
                         { "id": "129", "name": "Rearrange Pages", "action": "RearrangePages", "childcount": "0" }]
               },               
			   {
                   "id": "13", "name": "Accessibility", "action": "AutoTag", "childcount": "1", samples: [
                   //second hierarchy
                         { "id": "131", "name": "Autotag", "action": "AutoTag", "childcount": "0"  },
						 { "id": "132", "name": "Customtag", "action": "CustomTag", "childcount": "0"  }]
               }]
    },
    {
           "name": "PDF Viewer",
           "id": "PdfViewer",
           "childcount": "1",
           "Group": "FILE FORMATS",
           "action": "Default",
           "isResponsive": "true",
	       "ugurl": "http://help.syncfusion.com/aspnet/pdfviewer/overview",
           "forumurl": "https://www.syncfusion.com/forums/aspnet/pdfviewer",
           "kburl": "https://www.syncfusion.com/kb/aspnet/pdfviewer",
           "samples": [
               { "id": "1", "name": "Getting Started", "action": "Default", "childcount": "0" },
               { "id": "2", "name": "Localization", "action": "Localization", "childcount": "0" },
               { "id": "3", "name": "Form Filling", "action": "FormFilling", "childcount": "0" }

           ]
       },
      {
          "name": "DocIO",
          "id": "DocIO",
          "Group":"FILE FORMATS",
          "childcount": "1",
		  "type": "update",
          "action": "DefaultFunctionalities",
          "samples": [
           { "id": "1", "name": "Default", "action": "DefaultFunctionalities", "childcount": "0" },
                          {
                              "id": "2", "name": "Product Showcase", "action": "SalesInvoice", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Sales Invoice", "action": "SalesInvoice", "childcount": "0" },
                                       { "id": "2", "name": "Update Fields", "action": "UpdateFields", "childcount": "0"}
                              ]
                          },
                          {
                              "id": "3", "name": "Getting Started", "action": "HelloWorld", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Hello World", "action": "HelloWorld", "childcount": "0" }
                              ]
                          },
                         {
                             "id": "4", "name": "Editing", "action": "ReplaceWithFormating", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Advanced Replace", "action": "ReplaceWithFormating", "childcount": "0" },
                                      { "id": "2", "name": "Bookmark Navigation", "action": "BookmarkNavigation","childcount": "0" },
                                      { "id": "3", "name": "Forms", "action": "Forms", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "5", "name": "Content Control", "action": "Form Filling and Protection","childcount": "1", "samples": [
                                      { "id": "1", "name": "Form Filling and Protection", "controller": "DocIO", "action": "FormFillingAndProtection", "childcount": "0" },
                                      { "id": "2", "name": "XML Mapping", "controller": "DocIO", "action": "XMLMapping", "childcount": "0" }
                             ]
                         },
                          {
                             "id": "6", "name": "Mathematical Equation", "action": "Create Equation","childcount": "1", "samples": [
                                      { "id": "1", "name": "Create Equation", "controller": "DocIO", "action": "CreateEquation", "childcount": "0"},
                                      { "id": "2", "name": "Edit Equation", "controller": "DocIO", "action": "EditEquation", "childcount": "0"}
                             ]
                         },
                         {
                             "id": "7", "name": "Formatting", "action": "FormatTable", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Format Table", "action": "FormatTable", "childcount": "0" },
                                      { "id": "2", "name": "Format Text", "action": "FormatText", "childcount": "0" },
                                      { "id": "3", "name": "RTL Support", "action": "RTLSupport", "childcount": "0" },
                                      { "id": "4", "name": "Styles", "action": "Styles", "childcount": "0" },
                                      { "id": "5", "name": "Table Styles", "action": "TableStyles", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "8", "name": "Insert Content", "action": "Bookmarks", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Bookmarks", "action": "Bookmarks", "childcount": "0" },
                                      { "id": "2", "name": "Clone and Merge", "action": "CloneandMerge", "childcount": "0" },
                                      { "id": "3", "name": "Header and Footer", "action": "HeaderandFooter", "childcount": "0" },
                                      { "id": "4", "name": "Image Insertion", "action": "ImageInsertion", "childcount": "0" },
                                      { "id": "5", "name": "Insert OLE Object", "action": "InsertOLEObject", "childcount": "0" }
                             ]
                         },
                         {
                             "id": "9", "name": "Mail Merge", "action": "EmployeeReport", "childcount": "1","samples": [
                                      { "id": "1", "name": "Employee Report", "action": "EmployeeReport", "childcount": "0" },
                                      { "id": "2", "name": "Mail Merge Event", "action": "MailMergeEvent", "childcount": "0" },
                                      { "id": "3", "name": "Nested Mail Merge", "action": "NestedMailMerge", "childcount": "0"}
                             ]
                         },
                         {
                             "id": "10", "name": "Page Layout", "action": "InsertBreak", "childcount": "1", "samples": [
                                      { "id": "1", "name": "Insert Break", "action": "InsertBreak", "childcount": "0" },
                                      { "id": "2", "name": "Watermark", "action": "Watermark", "childcount": "0" }
                             ]
                         },
                          {
                              "id": "11", "name": "View", "action": "DocumentSettings", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Document Settings", "action": "DocumentSettings", "childcount": "0" },
                                       { "id": "2", "name": "Macro Preservation", "action": "MacroPreservation", "childcount": "0" }
                              ]
                          },
                          {
                              "id": "12", "name": "Security", "action": "DocumentProtection", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Document Protection", "action": "DocumentProtection", "childcount": "0" },
                                       { "id": "2", "name": "Encrypt and Decrypt", "action": "EncryptandDecrypt", "childcount": "0" }
                              ]
                          },
                          {
                              "id": "13", "name": "References", "action": "FootnotesandEndnotes", "childcount": "1", "samples": [
                                       { "id": "1", "name": "Footnotes and Endnotes", "action": "FootnotesandEndnotes", "childcount": "0" },
                                       { "id": "2", "name": "Table of Contents", "action": "TableofContents", "childcount": "0" }
                                ]
                            },
                            {
                                "id": "14", "name": "Import and Export", "action": "WordMLToWord", "childcount": "1", "samples": [
                                         { "id": "1", "name": "Word to HTML", "action": "DocToHTML", "childcount": "0" },
                                         { "id": "2", "name": "Word to ODT", "action": "DocToODT", "childcount": "0" },
                                         { "id": "3", "name": "Word to RTF", "action": "DocToRTF", "childcount": "0" },
                                         { "id": "4", "name": "Word to Image", "action": "WordtoImage", "childcount": "0" },
                                         { "id": "5", "name": "Word to PDF", "action": "DOCtoPDF", "childcount": "0","type": "update"},
                                         { "id": "6", "name": "HTML to Word", "action": "HTMLtoDOC", "childcount": "0" },
                                         { "id": "7", "name": "RTF to Word", "action": "RTFToDoc", "childcount": "0"},
                                         { "id": "8", "name": "Word to EPub", "action": "DOCToEPub", "childcount": "0" },
                                         { "id": "9", "name": "Word to WordML", "action": "WordToWordML", "childcount": "0" },
                                         { "id": "10", "name": "WordML to Word", "action": "WordMLToWord", "childcount": "0" }
                                ]
                            },
                             {
                               "id": "15", "name": "Shapes", "action": "AutoShapes", "childcount": "1", "samples": [
                                        { "id": "1", "name": "AutoShapes", "action": "AutoShapes", "childcount": "0" },
										{ "id": "2", "name": "Group Shapes", "action": "GroupShapes", "childcount": "0" }
                               ]
                           },
                             {
                                 "id": "16", "name": "Chart", "action": "Pie Chart", "childcount": "1", "samples": [
                                          { "id": "1", "name": "Pie Chart", "action": "PieChart","childcount": "0" },
                                          { "id": "2", "name": "Bar Chart", "action": "BarChart","childcount": "0" }
                                 ]
                             },
                             {
                               "id": "17", "name": "Review", "action": "Track Changes", "childcount": "1", "samples": [                                        
                                        { "id": "1", "name": "Track Changes", "action": "TrackChanges", "childcount": "0" },
                               ]
                           }
          ]
      },

        {
          "name": "XlsIO",
          "id": "XlsIO",          
          "childcount": "1",
		  "type": "update",
          "Group": "FILE FORMATS",
		  "type": "update",
          "action": "DefaultFunctionalities",
          "samples": [
          { "id": "1", "name": "Default", "action": "DefaultFunctionalities", "childcount": "0" },
                      {
                          "id": "2", "name": "Product Showcase", "action": "BudgetPlanner", "childcount": "1", "samples": [
                              { "id": "1", "name": "Budget Planner", "action": "BudgetPlanner", "childcount": "0" },
                               { "id": "2", "name": "Stock Portfolio", "action": "StockPortFolio", "childcount": "0" },    
                                { "id": "3", "name": "Attendance Tracker", "action": "AttendanceTracker", "childcount": "0"}							   
                          ]
                      },
                      {
                          "id": "3", "name": "Getting Started", "action": "CreateSpreadsheet", "childcount": "1", "samples": [
                              { "id": "1", "name": "Create", "action": "CreateSpreadsheet", "childcount": "0" },
                              { "id": "2", "name": "Find And Extract", "action": "FindAndExtract", "childcount": "0" },
			      { "id": "3", "name": "Replace Options", "action": "ReplaceOptions", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "4", "name": "Formatting", "action": "FormatCells", "childcount": "1", "samples": [
                              { "id": "1", "name": "Format Cells", "action": "FormatCells", "childcount": "0" },
                              { "id": "2", "name": "Styles And Formatting", "action": "StylesAndFormatting", "childcount": "0" },
                              { "id": "3", "name": "Conditional Formatting", "action": "ConditionalFormatting", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "5", "name": "Charts", "action": "ChartWorksheet", "childcount": "1", "samples": [
                              { "id": "1", "name": "Chart Worksheet", "action": "ChartWorksheet", "childcount": "0" },
                              { "id": "2", "name": "Embedded Chart", "action": "EmbeddedChart", "childcount": "0" },
                              { "id": "3", "name": "Sparklines", "action": "Sparklines", "childcount": "0" },
                               { "id": "4", "name": "Box and Whisker", "action": "BoxAndWhisker",  "childcount": "0" },
							  { "id": "5", "name": "Funnel", "action": "FunnelChart",  "childcount": "0" },
							  { "id": "6", "name": "Sunburst", "action": "Sunburst",  "childcount": "0" },
							  { "id": "7", "name": "Treemap", "action": "Treemap", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "6", "name": "Formulas", "action": "Formulas", "childcount": "1", "samples": [                              
                              { "id": "1", "name": "Formulas", "action": "Formulas", "childcount": "0" },
                              { "id": "2", "name": "Compute All formulas", "action": "ComputeAllformulas", "childcount": "0" },
                              { "id": "3", "name": "Table Formula", "action": "TableFormula", "childcount": "0" },
                              { "id": "4", "name": "External Formula", "action": "ExternalFormula", "childcount": "0" }
                          ]

                      },
                      {
                          "id": "7", "name": "Data Management", "action": "RangeManipulation", "childcount": "1", "samples": [
                              { "id": "1", "name": "Range Manipulation", "action": "RangeManipulation", "childcount": "0" },
                              { "id": "2", "name": "Data Validation", "action": "DataValidation", "childcount": "0" },
                              { "id": "3", "name": "Performance", "action": "Performance", "childcount": "0" },
                              { "id": "4", "name": "Interactive Features", "action": "InteractiveFeatures", "childcount": "0" },
                              { "id": "5", "name": "Form Controls", "action": "FormControls", "childcount": "0" },
                              { "id": "6", "name": "Data Sorting", "action": "Sorting", "childcount": "0" },
							  { "id": "7", "name": "Filters", "action": "Filters" , "childcount": "0" }
                          ]

                      },
                      {
                          "id": "8", "name": "Data Binding", "action": "ExternalConnection", "childcount": "1", "samples": [
                              { "id": "1", "name": "External Connection", "action": "ExternalConnection", "childcount": "0" },
                              { "id": "2", "name": "Template Marker", "action": "TemplateMarker", "childcount": "0" },
                              { "id": "3", "name": "Collection Objects", "action": "CollectionObjects", "childcount": "0" },
                              { "id": "4", "name": "Import Nested Collection", "action": "ImportNestedCollection", "childcount": "0" },
                              { "id": "5", "name": "Sales Invoice", "action": "SalesInvoice", "childcount": "0" },
                              { "id": "6", "name": "Import JSON",  "action": "ImportJSON", "childcount": "0" },
                              { "id": "7", "name": "Import From Grid",  "action": "ImportFromGrid", "childcount": "0" },
                              { "id": "8", "name": "Import HTML Table", "action": "HTMLToWorksheet", "childcount": "0" },
							  { "id": "9", "name": "Import Export DataTable", "action": "ImportExportDataTable", "childcount": "0", "type": "update" }
                          ]
                      },
                      {
                          "id": "9", "name": "Sheet Management", "action": "RowColumnManipulations", "childcount": "1", "samples": [
                              { "id": "1", "name": "Row-Column Manipulation", "action": "RowColumnManipulations", "childcount": "0" },
                              { "id": "2", "name": "Worksheet Management", "action": "WorksheetManagement", "childcount": "0" }                              
                          ]
                      },
					  {
                          "id": "10", "name": "Export", "action": "ExcelToODS", "childcount": "1", "samples": [
                              { "id": "1", "name": "Excel To PDF", "action": "ExcelToPDF", "childcount": "0" },
                              { "id": "2", "name": "Worksheet To HTML", "action": "WorksheetToHTML", "childcount": "0" },
                              { "id": "3", "name": "Worksheet To Image", "action": "WorksheetToImage", "childcount": "0" },
                              { "id": "4", "name": "Excel To ODS", "action": "ExcelToODS",  "childcount": "0" },
							  { "id": "5", "name": "Excel To JSON", "action": "ExcelToJSON",  "childcount": "0" }
                          ]
                      },
                      {
                          "id": "11", "name": "Settings", "action": "DocumentProperties", "childcount": "1", "samples": [
                              { "id": "1", "name": "Document Settings", "action": "DocumentProperties", "childcount": "0" },
                              { "id": "2", "name": "Worksheet Protection", "action": "WorksheetProtection", "childcount": "0" },
                              { "id": "3", "name": "Workbook Protection", "action": "WorkbookProtection", "childcount": "0" },
                              { "id": "4", "name": "Encrypt and Decrypt", "action": "EncryptionDecryption", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "12", "name": "Business Intelligence", "action": "Tables", "childcount": "1", "samples": [
                              { "id": "1", "name": "Tables", "action": "Tables", "childcount": "0" },
                              { "id": "2", "name": "Pivot Table", "action": "PivotTable", "childcount": "0" },
                              { "id": "3", "name": "Pivot Chart", "action": "PivotChart", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "13", "name": "Shapes", "action": "AutoShapes", "childcount": "1", "samples": [
                              { "id": "1", "name": "AutoShapes", "action": "AutoShapes", "childcount": "0" },
							  { "id": "2", "name": "Group Shapes", "action": "GroupShapes", "childcount": "0" }
                          ]
                      },
                      {
                          "id": "14", "name": "Macros", "action": "Macros", "childcount": "1", "samples": [
                              { "id": "1", "name": "Create Macro", "action": "CreateMacro", "childcount": "0"},
							  { "id": "2", "name": "Edit Macro", "action": "EditMacro", "childcount": "0"}
                          ]
                      }
            ]
        },
		{
         "name": "Presentation",
         "id": "Presentation",
         "childcount": "1",
         "Group": "FILE FORMATS",
         "action": "DefaultFunctionality",
         "samples": [
              { "id": "1", "name": "Default", "action": "DefaultFunctionality", "childcount": "0" },
              {
                  "id": "2", "name": "Product Showcase", "action": "PresentationViewer", "childcount": "1", samples: [
                    //first hierarchy
                          { "id": "21", "name": "Presentation Viewer", "action": "PresentationViewer", "childcount": "0" }]
              },
              {
                  "id": "3", "name": "Getting Started", "action": "HelloWorld", "childcount": "1", samples: [
                  //second hierarchy
                        { "id": "31", "name": "Hello World", "action": "HelloWorld", "childcount": "0" }]
              },
               {
                   "id": "4", "name": "Slide Elements", "action": "Images", "childcount": "1", samples: [
                  //third hierarchy
                        { "id": "41", "name": "Images", "action": "Images", "childcount": "0" },
                        { "id": "42", "name": "Slides", "action": "Slides", "childcount": "0" },
                        { "id": "43", "name": "Tables", "action": "Tables", "childcount": "0" },
						{ "id": "44", "name": "Notes", "action": "Notes","childcount": "0" },
						{ "id": "45", "name": "OLE Object","action": "InsertOLEObject", "childcount": "0"},
						{ "id": "46", "name": "Comments", "action": "Comments", "childcount": "0"},
						{ "id": "47", "name": "Connectors", "action": "Connectors", "childcount": "0"},
						{ "id": "48", "name": "Header And Footer", "action": "HeaderAndFooter", "childcount": "0"}]
               },
			   {
					"id": "5", "name": "Animation", "action": "Animation", "childcount": "1", samples: [
					//fourth hierarchy
					{ "id": "51", "name": " Create Animation", "action": "Animation", "childcount": "0" },
                    { "id": "52", "name": " Modify Animation", "action": "ModifyingAnimation", "childcount": "0" }]
			   },
                {
                    "id": "6", "name": "Conversion", "action": "PPTXToImage", "childcount": "1", samples: [
                   //fifth hierarchy
                         { "id": "61", "name": "PPTX To Image", "action": "PPTXToImage", "childcount": "0" },
                         { "id": "62", "name": "PPTX To PDF", "action": "PPTXToPdf", "childcount": "0" }]
                },
                {
                    "id": "7", "name": "Clone and Merge", "action": "Cloning Slides", "childcount": "1", samples: [
                    //sixth hierarchy
                          {"id": "71", "name": "Cloning Slide", "action": "CloningSlides", "childcount": "0" },
                          { "id": "72", "name": "Merging Presentations", "action": "MergingPresentation", "childcount": "0"}]
                },
                {
                    "id": "8", "name": "Security", "action": "EncryptAndDecrypt", "childcount": "1", samples: [
                    //seventh hierarchy
                           {"id": "81", "name": "Write Protection", "action": "WriteProtection", "childcount": "0"},
						   {"id": "82", "name": "Encryption and Decryption", "action": "EncryptAndDecrypt", "childcount": "0"}]

                   },
                   {
                       "id": "9", "name": "SmartArt", "action": "SmartArt Creation", "childcount": "1", samples: [
                      //eighth hierarchy
                            { "id": "91", "name": "SmartArt Creation", "action": "SmartArtCreation", "childcount": "0" },
                            { "id": "92", "name": "Manipulating SmartArt", "action": "ManipulatingSmartArt", "childcount": "0" },
                            { "id": "93", "name": "Customizing Appearance", "action": "CustomizingAppearance", "childcount": "0" }]
                   },
                   {
                       "id": "10", "name": "Chart", "action": "Creating Chart", "childcount": "1", samples: [
                       //nineth hierarchy
                            {"id": "101", "name": "Creating Chart", "action": "CreatingChart", "childcount": "0" },
                            {"id": "102", "name": "Chart from Excel Data", "action": "ExcelDataToChart", "childcount": "0" },
                            {"id": "103", "name": "Modifying Chart", "action": "ModifyingChart", "childcount": "0"}]
                   },
				   {
                       "id": "11", "name": "Transition", "action": "SlideTransition", "childcount": "1", samples: [
                       //nineth hierarchy
                            {"id": "111", "name": "Slide Transition", "action": "SlideTransition", "childcount": "0" }]
                   }
				   ]

		}
];
