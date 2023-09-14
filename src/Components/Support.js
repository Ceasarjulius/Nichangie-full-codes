import React, { useState } from 'react';
import DashboardLayout from './layout/dashboardLayout';
import './SupportPage.css';

function Support() {
  const [faqData, setFaqData] = useState([
    {
      question: 'What does your organization do?',
      answer:
        'Our organization is a platform that enables people to make their health problems known to others despite geographical differences and get financial assistance that will cover wholly or partly the medical expenses. So it is a running place for any patient that feels hopeless and in need of help.',
      expanded: false,
    },
    {
      question: 'Why should I donate in your organization?',
      answer:
        "We're a trustworthy organization that ensures that the person in need is actually helped by the money raised for them even though it without having direct access to it.",
      expanded: false,
    },
    {
      question: 'How is your organization different?',
      answer:
        'Our organization majors on health problems only and works on openness and transparency both the donors and the donated ones as they are free to check on the progress of their funds.',
      expanded: false,
    },
    {
      question: 'How will you keep me updated?',
      answer:
        'We keep our clients updated by sending them numerous notifications by means of emails and also once they allow receiving notifications from us they will be receiving them from both the website and via emails.',
      expanded: false,
    },
    {
      question: "How is your organization's finances?",
      answer:
        'Our major finances are donations and grants. We have a number of costs like programming and operational costs, donor communications, and donor reports to maintain.',
      expanded: false,
    },
  ]);

  const toggleAnswer = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[index].expanded = !updatedFaqData[index].expanded;
    setFaqData(updatedFaqData);
  };

  return (
    <DashboardLayout>
      <div className="support-page">
        <h1>Ask us anything</h1>
        <p>Have any questions? We're here to assist you.</p>
        <div className="search-bar">
          <input type="text" placeholder="Search here" />
          <i className="fa fa-search"></i>
        </div>
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <div className={`faq-toggle ${item.expanded ? 'expanded' : ''}`}>
                {item.expanded ? '-' : '+'}
              </div>
            </div>
            {item.expanded && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}

        <div id="contact-us">
          <div className="contact-header">
            <h2>Contact Us</h2>
            <div className="green-line"></div>
          </div>
          <div className="dets">
            <div className="phone">
              <h3>
                <i className="fa fa-phone"></i> Phone
              </h3>
              <p>+255 742 101 300</p>
            </div>
            <div className="email">
              <h3>
                <i className="fa fa-envelope"></i> Email
              </h3>
              <p>nichangie@gmail.com</p>
            </div>
            <div className="address">
              <h3>
                <i className="fa fa-map-marker"></i> Our Address
              </h3>
              <p>
                123 Main Street,<br />Makumbusho, Dar es Salaam<br />Tanzania
              </p>
            </div>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src="facebook-icon.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="twitter-icon.png" alt="Twitter" />
                </a>
              </li>
              <li>
              <i class="fa fa-instagram" aria-hidden="true"></i>
                <a href="#" target="_blank">
                  <img src="Instagram-icon.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Support;
