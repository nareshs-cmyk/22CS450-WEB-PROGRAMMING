<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>
<%
    List<Map<String, String>> destinationsList = (List<Map<String, String>>) request.getAttribute("destinations");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Destinations - Wanderlust Escapes</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="logo">🌍 Wanderlust Escapes</div>
        <ul class="nav-links">
            <li><a href="index.jsp">Home</a></li>
            <li><a href="destinations" class="active">Destinations</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <main class="page-container">
        <h2 class="section-title">Our Premier Destinations</h2>
        
        <div class="destinations-grid">
            <% if (destinationsList != null && !destinationsList.isEmpty()) { 
                for (Map<String, String> dest : destinationsList) { 
            %>
                <div class="destination-card">
                    <div class="card-img-wrapper">
                        <img src="<%= dest.get("image") %>" alt="<%= dest.get("name") %>">
                        <div class="price-tag">$<%= dest.get("price") %></div>
                    </div>
                    <div class="card-content">
                        <h3><%= dest.get("name") %></h3>
                        <p class="duration">⏱ <%= dest.get("duration") %></p>
                        <p class="description"><%= dest.get("description") %></p>
                        <button class="book-btn">Book Now</button>
                    </div>
                </div>
            <%  }
               } else { 
            %>
               <div class="error-msg">No destinations found or failed to load data. Please make sure you are accessing this page via the Servlet.</div>
            <% } %>
        </div>
    </main>
    
    <footer class="footer">
        <p>&copy; 2026 Wanderlust Escapes. All Rights Reserved.</p>
    </footer>
</body>
</html>
