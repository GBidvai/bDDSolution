package net.xeric.demos.controllers;

import net.xeric.demos.DemoApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = DemoApplication.class)
@WebAppConfiguration
public class RomanNumberControllerIT {

    @Autowired
    RomanNumberController romanNumberController;

    @Test
    public void testRomanNumberConverter() throws Exception {
        assertEquals("\"XXXII\"", romanNumberController.romanNumberConverter(32));
    }
}
