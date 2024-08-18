package com.example.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/sudoku")
public class SudokuController {

@GetMapping("/sudoku")
public String hello() {
    //hello
    //hello
    //hello
    //hello
    //hello
    //hello
    return "Hello from SudokuController, and reload 2 2 2 4";
}


}
