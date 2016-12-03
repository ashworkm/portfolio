var pdf = new PDFObject({
  url: "ashWorkman2016.pdf",
  id: "pdfRenderer",
  pdfOpenParams: {
    view: "FitH"
  }
}).embed("pdfRenderer");

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}
