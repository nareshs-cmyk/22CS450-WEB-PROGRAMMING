# MVC Lab Experiment: Java JSP & XML Travel Booking

**Subject/Course:** Web Technologies / Advanced Java Lab
**Topic:** Implementation of MVC Architecture Using Java Servlets, JSP, and XML

---

## 1. Objective
To design and develop a dynamic web application applying the Model-View-Controller (MVC) architecture. The application should demonstrate data parsing mechanisms by utilizing **Java Servlets** as the controller, **JSP** for presentation views, and **XML** functioning as the lightweight database model.

## 2. Architecture & Design
The **Wanderlust Escapes** application integrates the following:
- **Model (XML & Handler):** `destinations.xml` holds data (image, price, strings), and `XMLHandler.java` dynamically parses it using built-in standard `org.w3c.dom` libraries into collections.
- **View (JSP & CSS):** `index.jsp` creates a landing page with a modern Glassmorphism visual design. `destinations.jsp` processes the Java Lists and maps card interfaces iteratively.
- **Controller (Servlet):** `DestinationServlet.java` handles `GET /destinations` mappings, initializes the Model logic, creates Request Attributes, and strictly dispatches forwarding to the view.

## 3. Project Configuration

### Application Deployment Descriptor (`web.xml`)
The `web.xml` controls the initialization context and servlet map pointing strings to the Java Controller classes.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" version="4.0">
    <servlet>
        <servlet-name>DestinationServlet</servlet-name>
        <servlet-class>com.travel.DestinationServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>DestinationServlet</servlet-name>
        <url-pattern>/destinations</url-pattern>
    </servlet-mapping>
    <welcome-file-list>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
</web-app>
```

### Data Layer (`destinations.xml`)
A structured XML format that eliminates the need for heavyweight relational databases for simple configurations.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<destinations>
    <destination>
        <id>1</id>
        <name>Paris, France</name>
        <description>Experience the romance of the Eiffel Tower.</description>
        <price>1200.00</price>
        <duration>5 Days, 4 Nights</duration>
        <image>https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;w=800&amp;q=80</image>
    </destination>
    <!-- Snippet truncated to conserve space -->
</destinations>
```

## 4. Backend Source Code

### The Backend Controller (`DestinationServlet.java`)
```java
package com.travel;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DestinationServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String xmlFilePath = getServletContext().getRealPath("/WEB-INF/data/destinations.xml");
        List<Map<String, String>> destinationsList = XMLHandler.parseDestinations(xmlFilePath);
        request.setAttribute("destinations", destinationsList);
        request.getRequestDispatcher("/destinations.jsp").forward(request, response);
    }
}
```

### The XML Parser Logic (`XMLHandler.java`)
```java
package com.travel;
import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.File;
import java.util.*;

public class XMLHandler {
    public static List<Map<String, String>> parseDestinations(String filePath) {
        List<Map<String, String>> destinationsList = new ArrayList<>();
        try {
            File xmlFile = new File(filePath);
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            Document doc = dbFactory.newDocumentBuilder().parse(xmlFile);
            doc.getDocumentElement().normalize();

            NodeList nList = doc.getElementsByTagName("destination");
            for (int i = 0; i < nList.getLength(); i++) {
                Node nNode = nList.item(i);
                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element eElement = (Element) nNode;
                    Map<String, String> destMap = new HashMap<>();
                    destMap.put("id", eElement.getElementsByTagName("id").item(0).getTextContent());
                    destMap.put("name", eElement.getElementsByTagName("name").item(0).getTextContent());
                    destMap.put("price", eElement.getElementsByTagName("price").item(0).getTextContent());
                    /* ... */
                    destinationsList.add(destMap);
                }
            }
        } catch (Exception e) { e.printStackTrace(); }
        return destinationsList;
    }
}
```

## 5. Output Results

The system outputs the highly appealing user interface constructed completely via Java/JSP dynamic injection and vanilla CSS configurations.

### Landing / Index Page Output
*Accessed directly via Tomcat directory route*
![Landing Home Page](assets/index_output.png)

### Destinations Route Controller Output
*Java Backend renders `destinations.jsp` from memory after successfully pulling the XML node files from standard libraries.*
![Destinations Data Display](assets/destinations_output.png)
