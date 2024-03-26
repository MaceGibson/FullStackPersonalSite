package com.skilldistillery.personalsite.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.personalsite.entities.Job;
import com.skilldistillery.personalsite.entities.User;
import com.skilldistillery.personalsite.repositories.JobRepository;
import com.skilldistillery.personalsite.repositories.UserRepository;

@Service
public class JobServiceImpl implements JobService {
	
	@Autowired
	private JobRepository jobRepo;
	@Autowired
	private UserRepository userRepo;

	@Override
	public Job createJob(Job job) {
	    User user = userRepo.findById(1).orElse(null);
	    job.setUser(user);
	    return jobRepo.save(job);
	}

	@Override
	public List<Job> findAllJobs() {
		return jobRepo.findAll();
	}

	@Override
	public Job findJobById(int id) {
		return jobRepo.findById(id).orElse(null);
	}

	@Override
	public Job updateJob(int id, Job job) {
		Optional<Job> jobOpt = jobRepo.findById(id);
		if (jobOpt.isPresent()) {
			Job managedJob = jobOpt.get();
			managedJob.setCompany(job.getCompany());
			managedJob.setTitle(job.getTitle());
			managedJob.setDescription(job.getDescription());
			return jobRepo.save(managedJob);
		}
		return null;
	}

	@Override
	public boolean deleteJob(int id) {
		if (jobRepo.existsById(id)) {
			jobRepo.deleteById(id);
			return true;
		}
		return false;
	}

}
