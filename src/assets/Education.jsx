import React, { useState } from 'react';
import './Education.css';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "Diploma in Information Technology",
      institution: "Nelson Mandela University",
      location: "Port Elizabeth, South Africa",
      period: "2023 - 2026",
      status: "Graduated",     
      description: "Focused on software Development, Data Management, Security, Web Technologies and System Analysis & Design.\
       Completed final year project on developing a FullStack ward management system.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Best Final Year Project Award",
        "Member of Computer Science Society"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Network Security",
        "Data Sciences"
      ],
      color: "purple"
    },
    {
      id: 2,
      degree: "Higher Certificate in Information Technology",
      institution: "Nelson Mandela University",
      location: "Port Elizabeth, South Africa",
      period: "2022 - 2023",
      status: "Graduated",     
      description: "Completed high school with a focus on mathematics and physical sciences, laying a strong foundation for tertiary education in technology.",
      achievements: [
        "",
        "",
        ""
      ],
      courses: [
        "Technical Support",
        "User Support",
        "Network Configuration Introduction",
        "Infomation Systems",
        "Life Orientation"
      ],
      color: "pink"
    },
     {
      id: 3,
      degree: "National Senior Certificate",
      institution: "Ribane-laka Secondary School",
      location: "Pretoria, South Africa",
      period: "2015 - 2019",
      status: "Completed",     
      description: "Completed high school with a focus on the sciences stream, laying a strong foundation for tertiary education in technology.",
      achievements: [
        "",
        "",
        ""
      ],
      courses: [
        "Mathematics",
        "Physical Sciences",
        "Life Sciences",
        "English",
        "Life Orientation"
      ],
      color: "pink"
    }
  ];

  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      icon: "🏆"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "☁️"
    },
    {
      title: "Python for Data Science",
      issuer: "Coursera",
      date: "2022",
      icon: "🐍"
    },
    {
      title: "Agile Project Management",
      issuer: "Scrum Alliance",
      date: "2024",
      icon: "📊"
    }
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="education-section" id="education">
      <div className="education-container">
        {/* Header */}
        <div className="education-header">
          <div className="header-icon-wrapper">
            <GraduationCap className="header-icon" />
          </div>
          <h2 className="section-title-edu">Education & Certifications</h2>
          <p className="section-subtitle-edu">My Academic Journey & Professional Qualifications</p>
          <div className="title-divider-edu"></div>
        </div>

        {/* Education Timeline */}
        <div className="timeline-container">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`timeline-item ${edu.color}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              
              <div className="education-card">
                <div className="card-header-edu">
                  <div className="card-icon-wrapper">
                    <GraduationCap className="card-icon" />
                  </div>
                  <div className="card-header-content">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <div className="institution-info">
                      <MapPin className="info-icon" />
                      <span className="institution-name">{edu.institution}</span>
                    </div>
                  </div>
                  <span className={`status-badge ${edu.status.toLowerCase()}`}>
                    {edu.status}
                  </span>
                </div>

                <div className="card-meta">
                  <div className="meta-item">
                    <Calendar className="meta-icon" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin className="meta-icon" />
                    <span>{edu.location}</span>
                  </div>
                  
                </div>

                <p className="education-description">{edu.description}</p>

                {/* Expandable Section */}
                <button 
                  className="expand-button"
                  onClick={() => toggleExpand(edu.id)}
                >
                  {expandedId === edu.id ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="chevron-icon" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="chevron-icon" />
                    </>
                  )}
                </button>

                {expandedId === edu.id && (
                  <div className="expanded-content">
                   

                    <div className="courses-section">
                      <h4 className="subsection-title">
                        <BookOpen className="subsection-icon" />
                        Key Courses
                      </h4>
                      <div className="courses-grid">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="course-tag">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="certifications-container">
          <h3 className="certifications-title">
            <Award className="cert-title-icon" />
            Professional Certifications
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="certification-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-date">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; // This is at the bottom of your file