public class PdfFactory extends DocumentFactory 
{
   @Override
    public document createDocument() {
        return new PdfDocument();
    }  
}
