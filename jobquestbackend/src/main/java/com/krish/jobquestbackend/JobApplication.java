package com.krish.jobquestbackend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "jobApplications")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobApplication {
    @Id
    private ObjectId id;
    private String name;
    private String email;
    private String phone;
    private String qualification;
    private String resumeLink;
    private String status;
    private List<String> skills;
    @DocumentReference
    private Job jobId;
}
