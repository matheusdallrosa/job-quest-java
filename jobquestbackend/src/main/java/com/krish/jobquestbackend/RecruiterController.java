package com.krish.jobquestbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/recruiters")
@CrossOrigin(origins = "http://localhost:5173")
public class RecruiterController {
    @Autowired
    private RecruiterService recruiterService;

    @GetMapping
    public ResponseEntity<List<Recruiter>> getAllRecruiters() {
        return new ResponseEntity<List<Recruiter>>(recruiterService.allRecruiters(), HttpStatus.OK);
    }

//    TO BE REMOVED LATER, USING JUST FOR TESTING PURPOSES
    @GetMapping("/{email}")
    public ResponseEntity<Optional<Recruiter>> getSingleRecruiter(@PathVariable String email) {
        return new ResponseEntity<Optional<Recruiter>>(recruiterService.singleRecruiter(email), HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<Recruiter> signup(@RequestBody Recruiter recruiter) {
        return new ResponseEntity<Recruiter>(recruiterService.createRecruiter(recruiter), HttpStatus.CREATED);
    }
}
