<%@ Page Title="DocIO-Header and Footer-ASP.NET-SYNCFUSION"   MasterPageFile="~/samplebrowser.master" Language="C#" AutoEventWireup="true" CodeBehind="HeaderandFooter.aspx.cs" Inherits="WebSampleBrowser.DocIO.HeaderandFooter" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ControlsSection" runat="server">
    <p>
    This sample illustrates inserting headers and footers into the Word document with all possible header and footer types like first page header and footer, different odd and even page header and footer using Essential DocIO.
        </p>
   <div>
        <table width="850px" id="PanelTable" cellspacing="0" cellpadding="0" border="0"> 
            <tr>
                        <td height="10px">
                        </td>
                            </tr>          
          <tr>
                <td>  <b>Header and Footer</b>    <div ><br style="line-height:10px"/> </div>                             
                  
                    <div>
                        <asp:CheckBox ID="CheckBox2" runat="server" AutoPostBack="True" Checked="True" Text="Header and Footer For First Page" />
                        <br /><br />
                        <asp:CheckBox ID="CheckBox3" runat="server" AutoPostBack="True" Checked="True" Text="Header and Footer For All Pages" />
                    </div>
                    <br />
                    <b>Page Number</b> <div ><br style="line-height:10px"/> </div>          
                    <div>
                        <asp:Label ID="Label3" runat="server" Text="Number Format" Width="125px"></asp:Label>
                        <asp:DropDownList ID="DropDownList1" runat="server" Width="105px">
                            <asp:ListItem>Arabic</asp:ListItem>
                            <asp:ListItem>RomanUpper</asp:ListItem>
                            <asp:ListItem>RomanLower</asp:ListItem>
                            <asp:ListItem>LetterUpper</asp:ListItem>
                            <asp:ListItem>LetterLower</asp:ListItem>
                        </asp:DropDownList>
                        <br /><br />
                        <asp:Label ID="Label4" runat="server" Text="Start at" Width="125px"></asp:Label>
                        <asp:DropDownList ID="DropDownList2" Width="105px" runat="server">
                            <asp:ListItem>1</asp:ListItem>
                            <asp:ListItem>2</asp:ListItem>
                            <asp:ListItem>3</asp:ListItem>
                            <asp:ListItem>4</asp:ListItem>
                            <asp:ListItem>5</asp:ListItem>
                            <asp:ListItem>6</asp:ListItem>
                            <asp:ListItem>7</asp:ListItem>
                            <asp:ListItem>8</asp:ListItem>
                            <asp:ListItem>9</asp:ListItem>
                            <asp:ListItem>10</asp:ListItem>
                        </asp:DropDownList>
                    </div>
                    <br />
                   <!-- <div style="border: none 1px transparent; background-color: transparent;">
                        <asp:Label Width="100%" Style="text-align: justify;" ID="label6" runat="server"
                            Text="Click the button below to view the Word document generated by Essential DocIO. 
                            Please note that Microsoft Word Viewer or Microsoft Word is required to view the resultant document."></asp:Label>
                    </div>-->
                    <p>
Click the button to view the generated Word document or PDF. Please note that Microsoft Word Viewer or Microsoft Word is required to view the resultant Word document and PDF viewer is required to view the resultant PDF.
                    </p>
                    <div>                                   
                        <table width="100%">
                        <tr>
                        <td height="10px">
                        </td>
                            </tr>
                        <tr>
                        
                                <td valign="middle" align="left">    
                                    <asp:Label Width="65px" runat="server" ID="label1" Text="Save As :"></asp:Label>
                                     <asp:RadioButton Style="font-size:13px;text-align:match-parent" ID="rdButtonDoc" runat="server" GroupName="Group1" Text="DOC" ToolTip="Saves the resultant document as Word Doc format" />
                                    <asp:RadioButton Style="margin-left: 9px;font-size:13px;text-align:match-parent" ID="rdButtonDocx" runat="server" GroupName="Group1"
                                        Text="DOCX" Checked="True" ToolTip="Saves the resultant document as Word Docx format" />
                                    <asp:RadioButton Style="margin-left: 9px;font-size:13px;text-align:match-parent" ID="rdButtonWordML" runat="server" GroupName="Group1"
                                        Text="WordML" ToolTip="Saves the resultant document as WordML format" />
                                    <asp:RadioButton Style="margin-left: 9px;font-size:13px;text-align:match-parent" ID="rdButtonPdf" runat="server" GroupName="Group1"
                                        Text="PDF" ToolTip="Saves the resultant document as PDF" />
                                </td>
                        </tr>
                             <tr>
                        <td height="10px">
                        </td>
                            </tr>
                        <tr>
                                <td align="left">
                                    <asp:Button Width="150px" ID="Button1" Height="27px" runat="server" OnClick="Button1_Click"
                                        Text="Generate Document" />
                                </td>
                        </tr>
                            <tr>
                                <td height="10px">
                                </td>
                            </tr>    
                        </table>
                    </div>                   
            </tr>           
        </table>
        
    </div>
</asp:Content>

