package com.skilldistillery.personalsite.services;

import java.util.List;
import com.skilldistillery.personalsite.entities.Job;

public interface JobService {
	
	Job createJob(Job job);
	List<Job> findAllJobs();
	Job findJobById(int id);
	Job updateJob(int id, Job job);
	boolean deleteJob(int id);

}
