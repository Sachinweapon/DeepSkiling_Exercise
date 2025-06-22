public class WordFactory extends DocumentFactory 
{
   @Override
    public document createDocument() 
    {
        return new WordDocument();
    }  
}
