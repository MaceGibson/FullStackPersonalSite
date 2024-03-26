package com.skilldistillery.personalsite.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skilldistillery.personalsite.entities.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {

}
