import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-download',
  standalone: true,
  template: ''
})
export class ResumeDownloadComponent {
  static downloadAsText() {
    const resumeContent = `AAFREEN SHAIKH
SENIOR FRONTEND ENGINEER

Email: aafreenjshaikh@gmail.com
Phone: +91 9765859676
Location: Pune, Maharashtra, India

PROFESSIONAL SUMMARY
Accomplished Senior UI/Frontend Developer with 6 years of comprehensive experience architecting, designing, and optimizing dynamic enterprise web applications. Highly proficient across the modern frontend spectrum, specializing in large-scale ecosystem architectures utilizing Angular (v4–13) and modern React. Proven track record in multi-national corporations accelerating time-to-market using Agile SCRUM processes, integrating AI toolchains (GitHub Copilot), and coordinating continuous cross-functional integrations. Expert in building secure, highly scalable architectures for enterprise domains across Banking, Aviation, E-learning, and Healthcare.

CORE COMPETENCIES & TECHNICAL SKILLS

Frontend Frameworks: Angular (v4 to v13), React, Modern JavaScript (ES6+), TypeScript
Web Technologies & UI: HTML5, CSS3, RxJS, NgRx, Angular Material, Bootstrap 4, Tailwind CSS
Architectural Frameworks: ASP.NET Core, RESTful APIs Integration, SOAP Web Services
AI Tools & Workflow Integration: GitHub Copilot, Generative AI Coding Assistants, Git
Project Management & Security: Scrum Framework, Agile Methodologies, Jira, OAuth Security Protocols
Database Systems: Microsoft SQL Server, Database Management Systems

PROFESSIONAL EXPERIENCE

IBM Pune, Maharashtra
Senior Application Developer (React & Agile Projects) | Jan 2026 – Present
• Architect and scale high-performance user interfaces utilizing modern React, establishing modular component structures and state-management practices to support enterprise business logic.
• Incorporate GitHub Copilot and advanced AI-assisted engineering practices into the daily development lifecycle, accelerating codebase generation, optimization, and unit test provisioning by 20%.
• Drive agile delivery as an active practitioner of Agile workflows, fostering rapid iterative deployments and strict code quality governance across project epics.

Tata Consultancy Services (TCS) Pune, Maharashtra
Angular Developer | Jul 2021 – Jan 2026
• Successfully orchestrated the end-to-end migration of a mission-critical legacy enterprise application to Angular 13, improving modern modular code maintainability and application performance.
• Collaborated with design specialists to embed UX and human-factors principles utilizing Angular Material for screen development, accelerating targeted user satisfaction scores by 25%.
• Designed and integrated enterprise-grade OAuth security processes across 3 high-traffic corporate applications, enhancing system-wide security framework compliance by 40%.
• Partnered with backend engineers to consume microservices-driven RESTful APIs within an ASP.NET Core & MS SQL Server infrastructure, optimizing structural client-side data streaming and scalability.
• Championed Agile SCRUM ceremonies and pioneered widespread Jira adoption, decreasing product time-to-market cycles by 15% and improving inter-team project visualization and tracking by 50%.

Nitor Pvt. Ltd. Pune, Maharashtra
Application Developer & Project Lead | Oct 2019 – Jul 2021
• Served as a Technical Project Lead, coordinating cross-functional developer tracks, monitoring sprint milestones, and ensuring exact alignment with business goals.
• Engineered highly responsive, multi-device layouts utilizing Bootstrap 4, implementing clean components that delivered exceptional web performance profiles.
• Designed and executed efficient, structured Git and GitHub branching/merge strategies, enabling seamless code collaboration for more than 20 concurrent platform developers without merge conflicts.
• Collaborated with backend teams on RESTful API alignment to construct modular system architectures, implementing delivery modules, real-time analytics dashboards, and state progress metrics tracking.

Enthralltech Pvt. Ltd. Pune, Maharashtra
Angular Developer | Aug 2018 – Oct 2019
• Spearheaded the technical framework migration of a core Learning Management System (LMS) product to Angular 5+, streamlining application layout flows.
• Optimized browser performance indices by 20% by refactoring JavaScript structures, cleaning legacy Angular codebases, and enforcing modern framework standardizations.
• Integrated seamless data communication layers by utilizing custom SOAP and REST APIs for immediate server-to-client data synchronization.
• Designed and deployed localized gamification widgets, dynamic assessment modules, and user-personalized learning pathways.

EDUCATION & CERTIFICATIONS
Certified Scrum Master Course & Agile Workflow Training
Professional Agile Foundations
Master of Computer Science (MCS) | Modern College, Shivajinagar (Pune University) | 2015 – 2017
Bachelor of Computer Science (BCS) | V.P.A.S.C. College (Pune University), Baramati | 2013 – 2015

LANGUAGES
English — Advanced
Hindi — Advanced
Marathi — Advanced
German — Elementary

INDUSTRY VERTICALS SERVED
Banking | Aviation | E-Learning | Healthcare`;

    return resumeContent;
  }
}
