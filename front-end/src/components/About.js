import React from "react";
import "./About.css";

export default function About() {
  return (
    <body>
      <header className="about-header">
        <h1 className="title">About</h1>
        <p>
        <h2><strong><em> To provide the best quality, at the lowest cost to every home in Canada! </em></strong></h2> 
        </p>
      </header>
      <main>
        <section className="about-info">
          <p>
            We offer the best quality blinds at the lowest retail price. We have a variety
            of beautiful blinds which cater to all customers. We also allow our customers
            to customize our blinds that fit their need the best. <br/>
            We provide free samples to our customers to make sure they feel good about their
            choices and provide a lifetime warranty with a 30 day money back guarantee.
          </p>
        </section>
        <h3 className="contact-title">Contact Us!</h3>
        <section className="contact-info">
          <section>
            <h4>Calgary Office: </h4> <br/>
            Name: (Client Name) <br/>
            Title: (Client Title) <br/>
            Phone: (Client Phone) <br/>
            Email: (Client Email) <br/>
            Address: (Client Office) <br/>
            </section>
            <br/>
            <section>
            <h4>Vancouver Office: </h4> <br/>
            Name: (Client Name) <br/>
            Title: (Client Title) <br/>
            Phone: (Client Phone) <br/>
            Email: (Client Email) <br/>
            Address: (Client Office) <br/>
            </section>          
        </section>
      </main>
    </body>
  );
}
