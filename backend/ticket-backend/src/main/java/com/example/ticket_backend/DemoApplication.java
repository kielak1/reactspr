package com.example.ticket_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "com.example.ticketbackend")
@EnableJpaRepositories(basePackages = "com.example.ticketbackend.repository")
@EntityScan(basePackages = "com.example.ticketbackend.model") // <-- Wymuszenie skanowania encji
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
