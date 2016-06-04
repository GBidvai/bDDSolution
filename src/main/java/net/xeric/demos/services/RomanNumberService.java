package net.xeric.demos.services;

import org.springframework.stereotype.Service;

import java.util.TreeMap;


@Service
public class RomanNumberService {

    static final String ERROR_MESSAGE = "Please enter a postive number that is greater than zero";
    static TreeMap<Integer, String> map = new TreeMap<Integer, String>();
    static{
        map.put(1000, "M");
        map.put(900, "CM");
        map.put(500, "D");
        map.put(400, "CD");
        map.put(100, "C");
        map.put(90, "XC");
        map.put(50, "L");
        map.put(40, "XL");
        map.put(10, "X");
        map.put(9, "IX");
        map.put(5, "V");
        map.put(4, "IV");
        map.put(1, "I");
    }
    public String convertToRomanNumber(int number){
        if(number <=0){
            return ERROR_MESSAGE;
        }
        int l = map.floorKey(number);
        if ( number == l ) {
            return map.get(number);
        }
        return map.get(l) + convertToRomanNumber(number-l);

    }

}
