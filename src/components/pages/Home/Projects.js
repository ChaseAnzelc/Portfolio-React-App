import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Chip, Box } from "@mui/material";

const projects = [
  {
    title: "FHIR API & Interoperability Platform",
    image: "images/portfolio/placeholder.jpg",
    description: "Built and scaled a fully compliant FHIR R4 API platform serving over 6 million daily requests. Expanded supported resources from 10 to 35+ and integrated with 12+ third-party vendors. Optimized API performance to <200ms using Spring Boot, Kotlin, and HAPI FHIR, with real-time observability via Dynatrace.",
    skills: ["FHIR R4", "Interoperability", "Spring Boot", "Kotlin", "API Performance", "Healthcare Integration", "Dynatrace"]
  },
  {
    title: "Carequality Integration Microservice",
    image: "images/portfolio/placeholder.jpg",
    description: "Designed and delivered a production-ready Carequality integration service for secure exchange of healthcare documents with national networks. Implemented with a microservice architecture using Spring Boot, Java, and AWS ECS, integrated with a third-party vendor's REST API.",
    skills: ["Carequality", "Secure Document Exchange", "AWS ECS", "Spring Boot", "Java", "Healthcare Compliance"]
  },
  {
    title: "eFax & Direct Messaging System",
    image: "images/portfolio/placeholder.jpg",
    description: "Led architecture and development of a high-throughput messaging system for eFax and Direct Messaging. Built with Apache Kafka, Spring Boot, and AWS ECS, the service processed over 4.4 million secure messages, with webhook authentication via a custom HMAC-SHA256 gateway.",
    skills: ["Kafka", "Messaging Microservices", "eFax", "Direct Messaging", "Security", "HMAC", "Java"]
  },
  {
    title: "FHIR ETL & Real-Time Change Data Capture",
    image: "images/portfolio/placeholder.jpg",
    description: "Designed a real-time ETL pipeline using Debezium, Kafka, and a dedicated AWS ECS service to extract changes from internal systems and transform them into FHIR resources. Output stored in a NoSQL FHIR-compliant datastore (AWS DocumentDB), enabling near-instant interoperability.",
    skills: ["Change Data Capture (CDC)", "Kafka", "Debezium", "AWS ECS", "ETL", "DocumentDB", "FHIR"]
  },
  {
    title: "SSO & SMART on FHIR Integration",
    image: "images/portfolio/placeholder.jpg",
    description: "Architected secure Single Sign-On (SSO) using Keycloak, OAuth2, and JWT, supporting ambient AI documentation through integration with an OPIE AI Scribe assistant. Aligned with SMART on FHIR standards for seamless and secure data access across applications.",
    skills: ["SSO", "OAuth2", "Keycloak", "SMART on FHIR", "JWT", "AI Integration", "Healthcare Security"]
  },
  {
    title: "Patient Intake & Messaging Automation",
    image: "images/portfolio/placeholder.jpg",
    description: "Led architecture and documentation of a pre-visit patient intake system, integrated with automated messaging tools. Enabled clinics to collect surveys and forms securely before a visit, improving operational efficiency and patient experience.",
    skills: ["Messaging Systems", "Intake Workflows", "Form Automation", "HIPAA", "API Integration"]
  },
  {
    title: "Public FHIR Developer Portal",
    image: "images/portfolio/placeholder.jpg",
    description: "Designed and developed a public-facing FHIR documentation site using ReactJS, Spring API Gateway, reCAPTCHA, and EmailJS. Allowed secure external developer access and webhook submission into internal FHIR systems.",
    skills: ["Developer Portals", "React", "Spring Gateway", "Webhooks", "Security", "FHIR"]
  },
  {
    title: "Custom Lab Integration Platform",
    image: "images/portfolio/placeholder.jpg",
    description: "Built a custom document automation platform for a healthcare provider, enabling lab result integration with LabCorp and AEL using the HL7 standard. Delivered via on-premise deployment on IIS, using React, ASP.NET, and SQL Server in collaboration with ELLKAY.",
    skills: ["HL7", "Lab Integration", "ELLKAY", "React", "ASP.NET", "SQL Server", "On-Premise Solutions"]
  }
];

const Projects = () => (
  <Box id="projects" sx={{ py: 6 }}>
    <Typography variant="h3" align="center" gutterBottom>
      My Projects
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              height="180"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {project.description}
              </Typography>
              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.skills.map((skill, i) => (
                  <Chip key={i} label={skill} variant="outlined" size="small" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;