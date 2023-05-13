import { useState, useEffect } from "react";

function Faq(props) {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const newFaqs = props.data.map((result) => {
      return {
        question: result.title,
        answer: result.activities,
      };
    });
    setFaqs(newFaqs);
  }, [props.data]);

  return (
    <div>
      <section className="mb-10">
        <h2 className="fw-bold mb-4 ps-4">{props.title}</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`flush-heading-${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target={`#flush-collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-${index}`}
                >
                  <strong>{faq.question}</strong>
                </button>
              </h2>
              <div
                id={`flush-collapse-${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading-${index}`}
                data-mdb-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Faq;
