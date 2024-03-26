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

class UserTest {

	private static EntityManagerFactory emf;
    private EntityManager em;
    private User user;

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
        user = em.find(User.class, 1);
    }

    @AfterEach
    void tearDown() throws Exception {
        user = null;
        em.close();
    }

    @Test
    void test_User_mappings() {
        assertNotNull(user);
        assertEquals("MaceDuwin", user.getUsername());
        assertEquals("Mace", user.getFirstName());
        assertEquals("Gibson", user.getLastName());
        assertEquals("mace_gibson@yahoo.com", user.getEmail());
    }

     @Test
     void test_User_Jobs_ManyToMany() {
         assertNotNull(user.getJobs());
         assertTrue(user.getJobs().size() > 0);
         assertEquals("Flexion", user.getJobs().get(0).getCompany());
     }
}
