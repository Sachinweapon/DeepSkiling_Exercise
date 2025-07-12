package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws Exception{
        return countryService.getCountry(code);
    }

    @ExceptionHandler(Exception.class)
public ResponseEntity<String> handleException(Exception e) {
    return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
}

}
