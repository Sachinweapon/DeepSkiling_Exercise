package junit;
import org.junit.Test;
import static org.junit.Assert.*;
public class CalculatorTest 
{
  @Test
    public void testAdd() 
    {
        Calculator calc = new Calculator();
        assertEquals(15, calc.add(10, 5));
    }

    @Test
    public void testAddNegative() 
    {
        Calculator calc = new Calculator();
        assertEquals(-5, calc.add(-10, 5));
    }
}
