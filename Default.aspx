<%@ Page Title="" Language="C#" MasterPageFile="~/Layout.Master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="WebSampleBrowser.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="LayoutSection" runat="server">
<div class="control-panel cols-content-fluid">
                    <div class="row">
                        <div class="productpage showpage">
                            <div class="controlText-section">
                                <div class="controlSamples-section">
                                    <ul class="featuredsamples">
                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="Pdf/NorthwindReport.aspx" target="_blank">
                                                    <div class="imgstyle pdf1">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">PDF NorthwindReport</a>
                                                <p>
                                                    Essential PDF supports inserting tables into PDF pages.
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="Pdf/NorthwindReport.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>

                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="Pdf/FormFilling.aspx" target="_blank">
                                                    <div class="imgstyle pdf2">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">PDF FormFilling</a>
                                                <p>
                                                    Essential PDF can read and update form fields from a PDF document.
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="Pdf/FormFilling.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>

                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="DocIO/EmployeeReport.aspx" target="_blank">
                                                    <div class="imgstyle doc1">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">Word Mail Merge</a>
                                                <p>
                                                    Perform mail merge operations to create an employee report.
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="DocIO/EmployeeReport.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>


                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="DocIO/DOCtoPDF.aspx" target="_blank">
                                                    <div class="imgstyle doc2">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">Word to PDF</a>
                                                <p>
                                                    Essential DocIO support for conversion from MS Word document to PDF document.
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="DocIO/DOCtoPDF.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>

                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="XlsIO/SalesInvoice.aspx" target="_blank">
                                                    <div class="imgstyle xls1">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">Excel Invoice</a>
                                                <p>
                                                    Creating rich reports with styles, ADO .NET connectivity, Formulas
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="XlsIO/SalesInvoice.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>

                                        <li class="dashlistsampleimage">
                                            <div class="lisampleimage">
                                                <a href="XlsIO/Performance.aspx" target="_blank">
                                                    <div class="imgstyle xls2">
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="dashlitext">
                                                <a class="anchorclass aclass">Excel Performance</a>
                                                <p>
                                                   IMigrant Range performance Improvement.
                                                </p>
                                            </div>
                                            <div class="samplebutton">
                                                <a class="anchorclass" href="XlsIO/Performance.aspx" target="_blank">
                                                    <div>
                                                        <span>VIEW SAMPLE</span></div>
                                                </a>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="cols-iframe" style="display: none;">
                            <div>
                                <div class="sampleheadingtext">
                                </div>
                            </div>
                        </div>
                        <div id="sbloadingcontent" class="waiting">
                        </div>
                        <div id="sbwaitingTemplate" class="sbloadingtemplate" style="display: none">
                            <span class="sbloadingtext">Loading... </span><span class="sbloadingimg"></span>
                        </div>
                    </div>
                </div>
</asp:Content>
