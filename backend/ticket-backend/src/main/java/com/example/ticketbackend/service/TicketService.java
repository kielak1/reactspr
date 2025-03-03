package com.example.ticketbackend.service;

import com.example.ticketbackend.model.Ticket;
import com.example.ticketbackend.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public Ticket updateTicket(Long id, Ticket updatedTicket) {
        return ticketRepository.findById(id)
                .map(ticket -> {
                    ticket.setTitle(updatedTicket.getTitle());
                    ticket.setDescription(updatedTicket.getDescription());
                    ticket.setStatus(updatedTicket.getStatus());
                    return ticketRepository.save(ticket);
                })
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }

    public void deleteTicket(Long id) {
        ticketRepository.deleteById(id);
    }
}
