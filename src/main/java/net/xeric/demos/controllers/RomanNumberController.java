package net.xeric.demos.controllers;

import net.xeric.demos.services.RomanNumberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RomanNumberController {
    @Autowired
    RomanNumberService romanNumberService;

    @RequestMapping("/romanNumberConverter")
    public String romanNumberConverter(@RequestParam(value="number", defaultValue="0") int number) {
        return "\"" + romanNumberService.convertToRomanNumber(number) + "\"" ;
    }

}
