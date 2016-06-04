package net.xeric.demos.services;


import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class RomanNumberServiceTest {

    RomanNumberService romanNumberService = new RomanNumberService();
    static final String ERROR_MESSAGE = "Please enter a postive number that is greater than zero";

    @Test
    public void testRomanNumberConversionWithPositiveSingleDigitInt(){
        assertEquals("V" , romanNumberService.convertToRomanNumber(5));
    }

    @Test
    public void testomanNumberConversionWithTwoDigitInt(){
        assertEquals("XX" , romanNumberService.convertToRomanNumber(20));
    }

    @Test
    public void testRomanNumberConversionWithNegativeInt(){
        assertEquals(ERROR_MESSAGE, romanNumberService.convertToRomanNumber(-5));
    }
}
