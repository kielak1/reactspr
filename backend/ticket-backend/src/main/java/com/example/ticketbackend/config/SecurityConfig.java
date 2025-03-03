package com.example.ticketbackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Wyłączenie CSRF dla API REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/tickets/**").permitAll() // Zezwól na dostęp do endpointu /api/tickets bez autoryzacji
                .anyRequest().authenticated() // Pozostałe wymagają logowania
            )
            .httpBasic(httpBasic -> httpBasic.disable()) // Wyłączenie podstawowego uwierzytelniania
            .formLogin(formLogin -> formLogin.disable()); // Wyłączenie formularza logowania

        return http.build();
    }
}
