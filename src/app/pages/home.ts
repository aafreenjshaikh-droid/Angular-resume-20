import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      <!-- Navigation -->
      <nav class="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AS
          </h1>
          <div class="flex gap-6">
            <a href="#skills" class="text-slate-300 hover:text-white transition">Skills</a>
            <a href="#experience" class="text-slate-300 hover:text-white transition">Experience</a>
            <button (click)="downloadResume()" class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
              Resume
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="pt-32 pb-20 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div>
              <h2 class="text-sm font-semibold text-blue-400 mb-2">Welcome to my portfolio</h2>
              <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
                Aafreen
                <span class="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Shaikh
                </span>
              </h1>
            </div>
            <p class="text-xl text-slate-300">
              Senior Frontend Engineer with 6 years of expertise in building enterprise web applications. Specialized in Angular and React with a proven track record of delivering high-performance, scalable solutions.
            </p>
            <div class="flex gap-4">
              <button (click)="downloadResume()" class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105">
                Download Resume
              </button>
              <a href="#experience" class="border border-slate-500 hover:border-slate-300 px-8 py-3 rounded-lg font-semibold transition">
                View Work
              </a>
            </div>
            <div class="flex gap-4 pt-4">
              <a href="mailto:aafreenjshaikh@gmail.com" class="text-slate-300 hover:text-blue-400 transition">Email</a>
              <span class="text-slate-600">•</span>
              <span class="text-slate-300">+91 9765859676</span>
              <span class="text-slate-600">•</span>
              <span class="text-slate-300">Pune, India</span>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
            <div class="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div class="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-20 px-6 bg-slate-900/50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12">Technical Skills</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-blue-400 mb-3">Frontend Frameworks</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Angular v4-13</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">React</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">ES6+</span>
              </div>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-purple-400 mb-3">Web Technologies</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">HTML5</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">CSS3</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">RxJS</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">NgRx</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-pink-400 mb-3">Architecture & Tools</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">ASP.NET Core</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">REST APIs</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">SOAP</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">OAuth</span>
              </div>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-blue-400 mb-3">AI & Workflow</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">GitHub Copilot</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">AI Assistants</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Git</span>
              </div>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-purple-400 mb-3">Project Management</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Scrum</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Agile</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">Jira</span>
              </div>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-semibold text-pink-400 mb-3">Databases</h3>
              <div class="flex flex-wrap gap-2">
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">SQL Server</span>
                <span class="bg-slate-700/50 px-3 py-1 rounded-full text-sm">DBMS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-20 px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12">Professional Experience</h2>
          
          <div class="space-y-8">
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-500 hover:bg-slate-800 transition">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-blue-400">Senior Application Developer</h3>
                  <p class="text-slate-300">IBM • Pune, Maharashtra</p>
                </div>
                <span class="text-slate-400 text-sm">Jan 2026 – Present</span>
              </div>
              <ul class="space-y-2 text-slate-300 text-sm">
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Architect and scale high-performance user interfaces utilizing modern React, establishing modular component structures and state-management practices</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Incorporate GitHub Copilot and advanced AI-assisted engineering practices, accelerating codebase generation by 20%</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Drive agile delivery as an active practitioner of Agile workflows, fostering rapid iterative deployments and strict code quality governance</span>
                </li>
              </ul>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-500 hover:bg-slate-800 transition">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-purple-400">Angular Developer</h3>
                  <p class="text-slate-300">Tata Consultancy Services (TCS) • Pune, Maharashtra</p>
                </div>
                <span class="text-slate-400 text-sm">Jul 2021 – Jan 2026</span>
              </div>
              <ul class="space-y-2 text-slate-300 text-sm">
                <li class="flex gap-3">
                  <span class="text-purple-400">▸</span>
                  <span>Successfully orchestrated end-to-end migration of mission-critical legacy application to Angular 13, improving code maintainability</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">▸</span>
                  <span>Collaborated with design specialists using Angular Material, accelerating user satisfaction scores by 25%</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">▸</span>
                  <span>Designed and integrated enterprise-grade OAuth security processes across 3 high-traffic corporate applications, enhancing compliance by 40%</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">▸</span>
                  <span>Championed Agile SCRUM ceremonies and pioneered Jira adoption, decreasing time-to-market cycles by 15%</span>
                </li>
              </ul>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-500 hover:bg-slate-800 transition">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-pink-400">Application Developer & Project Lead</h3>
                  <p class="text-slate-300">Nitor Pvt. Ltd. • Pune, Maharashtra</p>
                </div>
                <span class="text-slate-400 text-sm">Oct 2019 – Jul 2021</span>
              </div>
              <ul class="space-y-2 text-slate-300 text-sm">
                <li class="flex gap-3">
                  <span class="text-pink-400">▸</span>
                  <span>Served as Technical Project Lead, coordinating cross-functional developer tracks and monitoring sprint milestones</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-pink-400">▸</span>
                  <span>Engineered highly responsive, multi-device layouts utilizing Bootstrap 4, delivering exceptional web performance</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-pink-400">▸</span>
                  <span>Designed efficient Git and GitHub strategies, enabling seamless code collaboration for 20+ concurrent developers</span>
                </li>
              </ul>
            </div>

            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-slate-500 hover:bg-slate-800 transition">
              <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-blue-400">Angular Developer</h3>
                  <p class="text-slate-300">Enthralltech Pvt. Ltd. • Pune, Maharashtra</p>
                </div>
                <span class="text-slate-400 text-sm">Aug 2018 – Oct 2019</span>
              </div>
              <ul class="space-y-2 text-slate-300 text-sm">
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Spearheaded technical framework migration of Learning Management System (LMS) product to Angular 5+</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Optimized browser performance indices by 20% through refactoring JavaScript structures and cleaning legacy code</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-400">▸</span>
                  <span>Designed and deployed gamification widgets, dynamic assessment modules, and personalized learning pathways</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="py-20 px-6 bg-slate-900/50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12">Education</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Master of Computer Science</h3>
              <p class="text-slate-300 mb-2">Modern College, Shivajinagar</p>
              <p class="text-slate-400 text-sm">Pune University | 2015 – 2017</p>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-bold text-purple-400 mb-2">Bachelor of Computer Science</h3>
              <p class="text-slate-300 mb-2">V.P.A.S.C. College, Baramati</p>
              <p class="text-slate-400 text-sm">Pune University | 2013 – 2015</p>
            </div>
            <div class="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-slate-500 hover:bg-slate-800 transition">
              <h3 class="text-lg font-bold text-pink-400 mb-2">Certifications</h3>
              <p class="text-slate-300 text-sm mb-2">Certified Scrum Master</p>
              <p class="text-slate-300 text-sm">Professional Agile Foundations</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 px-6 border-t border-slate-800">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-400">© 2026 Aafreen Shaikh. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="mailto:aafreenjshaikh@gmail.com" class="text-slate-400 hover:text-white transition">Email</a>
            <a href="tel:+919765859676" class="text-slate-400 hover:text-white transition">Phone</a>
            <span class="text-slate-600">Pune, India</span>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: ``
})
export class HomePage {
  downloadResume() {
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

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'Aafreen_Shaikh_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
