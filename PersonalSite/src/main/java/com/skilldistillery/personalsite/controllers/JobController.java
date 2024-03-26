package com.skilldistillery.personalsite.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.personalsite.entities.Job;
import com.skilldistillery.personalsite.services.JobService;

@RestController
@CrossOrigin({ "*", "http://localhost/" })
@RequestMapping("/api/jobs")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	@PostMapping("/create")
	public ResponseEntity<Job> createJob(@RequestBody Job job) {
	    Job createdJob = jobService.createJob(job);
	    return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
	}
	
	// List all jobs
    @GetMapping
    public ResponseEntity<List<Job>> listJobs() {
        List<Job> jobs = jobService.findAllJobs();
        return new ResponseEntity<>(jobs, HttpStatus.OK);
    }
    
    // Find job by ID
    @GetMapping("/{id}")
    public ResponseEntity<Job> getJob(@PathVariable("id") int id) {
        Job job = jobService.findJobById(id);
        if(job != null) {
            return new ResponseEntity<>(job, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    // Update job
    @PutMapping("/{id}")
    public ResponseEntity<Job> updateJob(@PathVariable("id") int id, @RequestBody Job job) {
        Job updatedJob = jobService.updateJob(id, job);
        if(updatedJob != null) {
            return new ResponseEntity<>(updatedJob, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    // Delete job
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable("id") int id) {
        jobService.deleteJob(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
