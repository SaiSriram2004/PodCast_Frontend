import React, { useState } from 'react';
import axios from 'axios';
import '../assets/scss/PodcastForm.scss'; // Import the CSS file

const DeletePodcastForm = () => {
  const [id, setId] = useState('');
  const [message] = useState('');

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(`https://backedn-7pmw.onrender.com/api/podcasts/${id}`);
      console.log('Podcast Deleted:', response.data);

      // Reset the form fields
      setId('');

      // Display a success alert
      window.alert('Podcast deleted successfully!');
    } catch (error) {
      console.error('Error deleting podcast:', error);

      // Log the entire error object for more details
      console.error('Full error object:', error);

      // Display an error alert
      window.alert('Error deleting podcast. Please try again.');
    }
  };

  return (
    <div className="PodcastFormContainer">
      <h2>Delete Podcast</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={id} onChange={handleChange} />

        <button type="submit">Submit</button>

        {/* Display success or error message */}
        {message && (
          <p className={message.includes('Error') ? 'error-message' : 'success-message'}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default DeletePodcastForm;
