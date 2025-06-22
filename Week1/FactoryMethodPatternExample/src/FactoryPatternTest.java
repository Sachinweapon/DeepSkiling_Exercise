public class FactoryPatternTest 
{
  public static void main(String[] args) 
  {
        DocumentFactory wordFactory = new WordFactory();
        document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfFactory();
        document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelFactory();
        document excel = excelFactory.createDocument();
        excel.open();
    }  
}
