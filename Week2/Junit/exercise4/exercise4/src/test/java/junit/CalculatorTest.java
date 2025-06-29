package junit;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;
    @Before
    public void setUp() {
        System.out.println("Setting up Calculator instance...");
        calculator = new Calculator(); 
    }
    @After
    public void tearDown() {
        System.out.println("Cleaning up Calculator instance...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        int result = calculator.add(5, 10);
        assertEquals("Addition failed", 15, result);
    }

    @Test
    public void testDivision() {
        int result = calculator.divide(20, 4);
        assertEquals("Division failed", 5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivisionByZero() {
        calculator.divide(10, 0);
    }
}

