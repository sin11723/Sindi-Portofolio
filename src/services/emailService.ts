import emailjs from '@emailjs/browser';

emailjs.init("Q0SRkUqSpLl34T5GX"); 

export const sendEmail = async (formData: {
    name: string;
    email: string; 
    message: string;
  }) => {
    try {
      const response = await emailjs.send(
        'service_7c5cayh',
        'template_lwgl7im',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sinhndyni@gmail.com',
        }
      );
      console.log('SUCCESS!', response.status, response.text);
      return response;
    } catch (error) {
      console.log('FAILED...', error);
      throw error;
    }
  };