import React, { useState } from 'react';

const ContactMe
 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    setSuccess('');
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccess('');
      return;
    }

    setLoading(true);
    setErrors({});
    setApiError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Extract error message from response if available
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      setSuccess('Thank you for contacting me! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-orange-600 mb-4">Contact Me</h2>
      <p className="text-gray-800 mb-10 max-w-lg">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 font-semibold text-gray-700"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.subject}
            onChange={handleChange}
            disabled={loading}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-700"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
          } transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-md shadow-md`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {/* API error message */}
        {apiError && (
          <p className="text-red-600 font-medium mt-4 text-center">{apiError}</p>
        )}

        {/* Success message */}
        {success && (
          <p className="text-green-600 font-medium mt-4 text-center">{success}</p>
        )}
      </form>
    </section>
  );
};

export default ContactMe;