import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Question = () => (
  <div>
    <Accordion atomic={true}>

      <AccordionItem title="Where are products made?">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="How to purchase our products">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="How to purchase our products">
        <DummyContent />
      </AccordionItem>

    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
   Made with natural best ingredients. Made with natural best ingredients. Made with natural best ingredients. Made with natural best ingredients.
   Made with natural best ingredients. Made with natural best ingredients. Made with natural best ingredients. Made with natural best ingredients.
  </p>
);

export default Question;