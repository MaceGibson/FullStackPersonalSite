package com.skilldistillery.personalsite.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class JobTest {

	private static EntityManagerFactory emf;
    private EntityManager em;
    private Job job;

    @BeforeAll
    static void setUpBeforeAll() throws Exception {
        emf = Persistence.createEntityManagerFactory("PersonalSiteJPA");
    }

    @AfterAll
    static void tearDownAfterClass() throws Exception {
        emf.close();
    }

    @BeforeEach
    void setUp() throws Exception {
        em = emf.createEntityManager();
        job = em.find(Job.class, 1);
    }

    @AfterEach
    void tearDown() throws Exception {
        job = null;
        em.close();
    }

    @Test
    void test_Job_mappings() {
        assertNotNull(job);
        assertEquals("Flexion", job.getCompany());
        assertEquals("Recruiting Manager", job.getTitle());
        assertEquals("Chris", job.getFirstName());
        assertEquals("Giese", job.getLastName());
        assertEquals("cgiese@flexion.us", job.getEmail());
        assertEquals("6082058868", job.getPhoneNumber());
        assertEquals("90-Day Internship Program with Flexion.  This starts early May.", job.getDescription());
        assertEquals("TBD", job.getTechnologies());
    }

     @Test
     void test_Job_Users_ManyToMany() {
         assertNotNull(job.getUsers());
         assertTrue(job.getUsers().size() > 0);
         assertEquals("MaceDuwin", job.getUsers().get(0).getUsername());
     }
}