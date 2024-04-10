package com.krish.jobquestbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class JobQuestBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobQuestBackendApplication.class, args);
	}

	@GetMapping("/")
	public String index() {
		return "Radhe Radhe";
	}
}
