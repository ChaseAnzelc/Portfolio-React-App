import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Chip, Box } from "@mui/material";

const projects = [
  {
    title: "RB Marketplace",
    image: "images/portfolio/rbmarketplace.jpg",
    description: "A full-featured web marketplace for buying and selling goods.",
    skills: ["React", "Node.js", "MongoDB", "Express", "AWS"]
  },
  {
    title: "KidsPlay Mobile App",
    image: "images/portfolio/kidsplay.jpg",
    description: "A mobile app for kids to play educational games and track progress.",
    skills: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "Luigi's Pizzeria",
    image: "images/portfolio/luigipizzaria.jpg",
    description: "A web ordering system for a local pizzeria, including menu and delivery management.",
    skills: ["React", "Redux", "Node.js", "PostgreSQL"]
  },
  {
    title: "Issue Ticketing System",
    image: "images/portfolio/issuetic.jpg",
    description: "A ticketing and issue tracking system for IT support teams.",
    skills: ["React", "Django", "REST API", "PostgreSQL"]
  },
  {
    title: "Banking Ledger Console App",
    image: "images/portfolio/banking.jpg",
    description: "A console application for managing banking transactions and ledgers.",
    skills: ["Python", "SQLite", "CLI"]
  },
  {
    title: "Maze Solver",
    image: "images/portfolio/maze.jpg",
    description: "A console app that solves mazes using various algorithms.",
    skills: ["C++", "Algorithms", "Data Structures"]
  },
  {
    title: "Hangman Game",
    image: "images/portfolio/hangman.jpg",
    description: "A classic hangman game implemented as a console application.",
    skills: ["Java", "OOP", "CLI"]
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