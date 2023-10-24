package com.mosenithproject.Service;

import com.mosenithproject.model.Applicant;

import java.util.List;

public interface ApplicantService {
    public Applicant saveApplicant(Applicant applicant);

    public List<Applicant> getAllApplicants();
}
