import { useState } from "react";

function useSubmitContactForm() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const finalFormEndpoint = e.target.action;
    const data = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        phoneNumber: e.target[3].value,
        address: e.target[4].value,
        street: e.target[5].value,
        city: e.target[6].value,
        district: e.target[7].value,
        postalCode: e.target[9].value,
    }
    
    fetch(finalFormEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.body;
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };

  return { handleSubmit, status, message };
}

export default useSubmitContactForm;