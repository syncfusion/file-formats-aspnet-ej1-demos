﻿<%@ Page MasterPageFile="~/samplebrowser.master" Language="C#" AutoEventWireup="true"
    CodeFile="RangeManipulation.aspx.cs" Inherits="WebSampleBrowser.XlsIO.RangeManipulation" %>

<asp:content id="Content2" contentplaceholderid="ControlsSection" runat="server">
   
    <p>
        This sample demonstrates Essential XlsIO's support for manipulating a range of cells.
    </p>
    <p>
        A range is a group or block of cells in a worksheet that have been selected or highlighted.
        Normally, there is only one cell in a worksheet with a black outline. Ranges are
        identified by cell references or addresses of the cells in the upper-left and lower-right
        corners of the range. These two references are separated by a colon (:), which tells
        Excel to include all the cells between these start and end points. An adjacent cell's
        range can be depicted as &quot;A5:F10.&quot;
    </p>
    <br />
    <p>
        Essential XlsIO provides various ways to manipulate ranges.
    </p>
    <br />
    <p>
        Click the button to view an Excel spreadsheet generated by Essential XlsIO. 
        Please note that Microsoft Excel Viewer or Microsoft Excel is required to view the resultant document.
    </p>
    <div>
        <table id="PanelTable" width="650px" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td>                   
                    <div>
                        <table width="80%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td>
                                    <asp:label runat="server" id="label1" text="Save As:"></asp:label>
                                    <asp:radiobutton style="margin-left: 10px" id="rBtnXls" runat="server" groupname="formatgrp" text="XLS" />
                                    <asp:radiobutton style="margin-left: 10px" id="rBtnXlsx" runat="server" groupname="formatgrp" text="XLSX" checked="true" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Create Document"
                                        Width="200px" />
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</asp:content>
