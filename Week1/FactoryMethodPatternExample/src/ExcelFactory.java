public class ExcelFactory extends DocumentFactory
{
     @Override
    public document createDocument() {
        return new ExcelDocument();
    }
}
