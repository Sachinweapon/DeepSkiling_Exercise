package exercise3;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that 2 + 3 equals 5
        assertEquals("Expected sum is incorrect", 5, 2 + 3);

        // Assert that the condition is true
        assertTrue("Expected true condition", 5 > 3);

        // Assert that the condition is false
        assertFalse("Expected false condition", 5 < 3);

        // Assert that value is null
        assertNull("Expected null value", null);

        // Assert that object is not null
        assertNotNull("Expected non-null object", new Object());
    }
}


