package com.example.ticketbackend.controller;

import com.example.ticketbackend.model.Ticket;
import com.example.ticketbackend.service.TicketService;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.List;
import java.util.Optional;

//CrossOrigin(origins = "http://localhost:5173")  // Zezwolenie na połączenie z Reactem
@RestController
@RequestMapping("/api/tickets")
@CrossOrigin(origins = "*")
public class TicketController {
    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @GetMapping("/{id}")
    public Optional<Ticket> getTicketById(@PathVariable Long id) {
        return ticketService.getTicketById(id);
    }

    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    @PutMapping("/{id}")
    public Ticket updateTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        return ticketService.updateTicket(id, ticket);
    }

    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable Long id) {
        ticketService.deleteTicket(id);
    }
}
