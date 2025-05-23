import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Chip, Box, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      marginBottom: '2rem',
    },
    h5: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          margin: '4px',
        },
      },
    },
  },
});

const projects = [
  {
    title: "FHIR API & Interoperability Platform",
    description: "Led expansion of a fully compliant FHIR R4 API platform serving over 6 million daily requests. Expansion of supported resources from 10 to 35+ and integrated with 12+ third-party vendors. Optimized API performance to sub-200ms using Spring Boot, Kotlin, and HAPI FHIR, with real-time observability via Dynatrace.",
    skills: ["FHIR R4", "Interoperability", "Spring Boot", "Kotlin", "API Performance", "Healthcare Integration", "Dynatrace"]
  },
  {
    title: "Carequality Integration Microservice",
    description: "Designed and delivered a production-ready Carequality integration service for secure exchange of healthcare documents with national networks in collaboration with a third-party vendor. Implemented with a microservice architecture using Spring Boot, Java, and AWS ECS, integrated with a third-party vendor's REST API.",
    skills: ["Carequality", "Secure Document Exchange", "AWS ECS", "Spring Boot", "Java", "Healthcare Compliance"]
  },
  {
    title: "eFax & Direct Messaging System",
    description: "Led architecture and development of a high-throughput messaging microservice system for eFax and Direct Messaging. Built with Apache Kafka, Spring Boot, and AWS ECS, the service processed over 4.4 million secure messages since deployement in 2023, with webhook authentication via a custom HMAC-SHA256 gateway.",
    skills: ["Kafka", "Messaging Microservices", "eFax", "Direct Messaging", "Security", "HMAC", "Java"]
  },
  {
    title: "FHIR ETL & Real-Time Change Data Capture",
    description: "Actively designing a real-time ETL pipeline using Debezium, Kafka, and a dedicated AWS ECS service to extract changes from internal systems and transform them into FHIR resources. Output stored in a NoSQL FHIR-compliant datastore (AWS DocumentDB), enabling near-instant interoperability.",
    skills: ["Change Data Capture (CDC)", "Kafka", "Debezium", "AWS ECS", "ETL", "DocumentDB", "FHIR"]
  },
  {
    title: "SSO & SMART on FHIR Integration",
    description: "Actively architecting a secure Single Sign-On (SSO) using Keycloak, OAuth2, and JWT, supporting ambient AI documentation through integration with an AI Scribe assistant. Aligned with SMART on FHIR standards for seamless and secure data access across applications.",
    skills: ["SSO", "OAuth2", "Keycloak", "SMART on FHIR", "JWT", "AI Integration", "Healthcare Security"]
  },
  {
    title: "Patient Portal, Intake & Messaging Automation",
    description: "Led architecture and documentation of a pre-visit patient intake system, integrated with automated messaging tools. Enabled clinics to collect surveys and forms securely before a visit, improving operational efficiency and patient experience.",
    skills: ["Messaging Systems", "Intake Workflows", "Form Automation", "HIPAA", "API Integration"]
  },
  {
    title: "Public FHIR Developer Portal",
    description: "Designed and developed a public-facing FHIR documentation site using ReactJS, Spring API Gateway, reCAPTCHA, and EmailJS. Allowed secure external developer access and webhook submission into internal FHIR systems. https://fhir-documentation.patientmedrecords.com/",
    skills: ["Developer Portals", "React", "Spring Gateway", "Webhooks", "Security", "FHIR"]
  },
  {
    title: "Custom Lab Integration Platform",
    description: "Built a custom document automation platform for a healthcare provider, enabling lab result integration with LabCorp and AEL using the HL7 standard. Delivered via on-premise deployment on IIS, using React, ASP.NET, and SQL Server in collaboration with ELLKAY.",
    skills: ["HL7", "Lab Integration", "ELLKAY", "React", "ASP.NET", "SQL Server", "On-Premise Solutions"]
  }
];

const Projects = () => (
  <ThemeProvider theme={theme}>
    <Box id="projects" sx={{ py: { xs: 4, md: 10 }, px: { xs: 1, sm: 2, md: 8, lg: 20 } }}>
      <Typography variant="h2" align="center" sx={{ mb: 8, color: '#111', fontWeight: 700, fontSize: '2.25rem', letterSpacing: '0.01em' }} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <Card sx={{
              width: '100%',
              maxWidth: { xs: '100%', sm: 400, md: 500, lg: 600 },
              flexDirection: 'column',
              height: '100%',
              borderRadius: 4,
              border: '1px solid #999999',
              boxShadow: '0 4px 24px rgba(25, 118, 210, 0.10)',
              background: '#f9fbfd',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-3px) scale(1.015)',
                boxShadow: '0 10px 28px rgba(15, 17, 19, 0.16)',
              },
              mx: { xs: 0, sm: 'auto' }
            }}>
              <CardContent sx={{ 
                  p: 3,
                  borderRadius: 4
                }}>
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 700, fontSize: '16px', color: '#222', pb: 2, fontFamily: 'Poppins, helvetica, Arial, sans-serif' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" paragraph sx={{ minHeight: 80, fontSize: '15px', color: '#444', fontFamily: 'Poppins, helvetica, Arial, sans-serif', fontWeight: 300 }}>
                  {project.title === "Public FHIR Developer Portal" ? (
                    <>
                      Designed and developed a public-facing FHIR documentation site using ReactJS, Spring API Gateway, reCAPTCHA, and EmailJS. Allowed secure external developer access and webhook submission into internal FHIR systems. <a href="https://fhir-documentation.patientmedrecords.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline' }}>Visit Site</a>
                    </>
                  ) : (
                    project.description
                  )}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.skills.map((skill, i) => (
                    <Chip key={i} label={skill} variant="filled" size="small" sx={{ background: 'rgba(194, 194, 194, 0.46)', fontWeight: 600 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </ThemeProvider>
);

export default Projects;