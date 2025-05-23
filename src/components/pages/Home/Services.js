import React from "react";

const Services = () => {
return (
            <div id="services">
                <div className="container">
                    <div className="services-carousel owl-theme">
                        <div className="services-block">
                            <i className="ion-ios-cog-outline"></i>
                            <span>Infrastructure Architecture</span>
                            <p className="separator">
                                Proficient in architecting, building, and deploying scalable infrastructure from the ground up, from concept to production-ready environments.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-cloud-outline"></i>
                            <span>AWS Cloud Services</span>
                            <p className="separator">
                                Primary expertise in AWS with hands-on experience using ECS, CloudFormation, CloudWatch, S3, RDS, and Lambda to deliver secure, scalable, and cost-effective systems.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-arrow-graph-up-right"></i>
                            <span>DevOps & CI/CD</span>
                            <p className="separator">
                                Skilled in implementing automated pipelines for building, testing, and deploying applications using tools like Gitlab CI, GitHub Actions, Jenkins, and Docker.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-world-outline"></i>
                            <span>Full Stack Engineering</span>
                            <p className="separator">
                                Experienced in building end-to-end applications with modern front-end frameworks (React, Typescript, Angular), robust APIs (Java, Kotlin, Node.js, .NET), and scalable databases (Mysql, MongoDB, PostgreSQL).
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-eye-outline"></i>
                            <span>Observability & Monitoring</span>
                            <p className="separator">
                                Experienced with implementing secure cloud infrastructure, monitoring tools (New Relic, Dynatrace, AWS CloudWatch, SUMO Logic, and best practices for logging and observability.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-locked-outline"></i>
                            <span>Security</span>
                            <p className="separator">
                                Secure authentication and authorization with OIDC, OAuth2, Cognito, Auth0, HMAC, SAML, SSO, and Keycloak. Experienced in secrets management (AWS Secrets), AES-256 encryption, and JWT for protecting sensitive data and ensuring compliance.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-medkit-outline"></i>
                            <span>Healthcare</span>
                            <p className="separator">
                                Proficient in building healthcare solutions using FHIR, HL7, C-CDA, SOAP, and HIPAA standards. Skilled with SMART on FHIR, eRX, EPCS, Direct Messaging, Carequality, and patient portals for secure, interoperable digital health systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default Services;