package com.mosenithproject.Controller;

import com.mosenithproject.Service.ApplicantService;
import com.mosenithproject.model.Applicant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/applicant")
public class ApplicantController {
    @Autowired
    private ApplicantService applicantService;

    @PostMapping("/add")
    public String add(@RequestBody Applicant applicant) {
        applicantService.saveApplicant(applicant);
        return "New Applicant is added!";
    }

    @GetMapping("getAll")
    public List<Applicant> getAllApplicants() {
        return applicantService.getAllApplicants();
    }
}
