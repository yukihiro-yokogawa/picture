package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/album")
public class AlbumController {

    @RequestMapping("list")
    public String list(){
        return "main_content/top";
    }

    @RequestMapping("creator")
    public String creator(){
        return "main_content/album";
    }

}
