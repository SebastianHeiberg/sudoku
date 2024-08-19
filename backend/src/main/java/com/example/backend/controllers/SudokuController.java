package com.example.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/sudoku")
public class SudokuController {

@GetMapping("/sudoku")
public String hello() {
    return "Hello from SudokuControllers";
}


}

