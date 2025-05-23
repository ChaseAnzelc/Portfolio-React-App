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
                                Proficient in architecting, building, and deploying scalable infrastructure from the ground up, transforming concepts into resilient, production-ready environments using cloud-native tools and automation.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-cloud-outline"></i>
                            <span>AWS Cloud Services</span>
                            <p className="separator">
                                Deep hands-on expertise in AWS, delivering secure and cost-efficient systems using ECS, Lambda, RDS, S3, CloudWatch, and CloudFormation.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-arrow-graph-up-right"></i>
                            <span>DevOps & CI/CD</span>
                            <p className="separator">
                                Skilled in implementing automated pipelines for building, testing, and deploying applications using tools like Gitlab CI, GitHub Actions, Jenkins, and Docker; enabling rapid, reliable deployments across environments.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-world-outline"></i>
                            <span>Software Engineering</span>
                            <p className="separator">
                                Experienced in building end-to-end applications with modern front-end frameworks (React, Typescript, Angular), robust APIs (Java, Kotlin, Node.js, .NET), and scalable databases (Mysql, MongoDB, PostgreSQL).
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-eye-outline"></i>
                            <span>Observability & Monitoring</span>
                            <p className="separator">
                                Implement robust observability using tools like New Relic, Dynatrace, AWS CloudWatch, and Sumo Logic, alongside secure cloud infrastructure and best practices for logging, alerting, and metrics.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-locked-outline"></i>
                            <span>Security</span>
                            <p className="separator">
                                Design secure authentication and authorization using OIDC, OAuth2, SSO, Keycloak, Cognito, Auth0, and HMAC. Experienced with secrets management (AWS Secrets), AES-256 encryption, and JWT to protect sensitive data and support HIPAA and SOC 2 compliance.
                            </p>
                        </div>

                        <div className="services-block">
                            <i className="ion-ios-medkit-outline"></i>
                            <span>Healthcare</span>
                            <p className="separator">
                                Build secure, standards-compliant healthcare solutions using FHIR, HL7, C-CDA, SMART on FHIR, and SOAP. Experienced in Direct Messaging, eRX, EPCS, Carequality, and patient portals to enable interoperable digital health ecosystems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};
export default Services;