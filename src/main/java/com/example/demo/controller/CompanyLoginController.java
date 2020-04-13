package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/company")
public class CompanyLoginController {

    @RequestMapping("/login")
    public String login(){
        return "authentication/company/login";
    }

    @RequestMapping("/insert")
    public String insert(){
        return "authentication/company/insert";
    }

}
