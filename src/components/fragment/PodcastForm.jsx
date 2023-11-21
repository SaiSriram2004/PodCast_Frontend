import React, { useState } from 'react';
import axios from 'axios';
import "../assets/scss/PodcastForm.scss"; // Import the CSS file

const PodcastForm = () => {
  const initialFormData = {
    id: '',
    name: '',
    author_name: '',
    imageUrl: '',
    lang: '',
    timesplayed: '',
    type: '',
    musicName: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backedn-7pmw.onrender.com/api/podcasts', formData);
      console.log('Podcast created/updated:', response.data);
      window.alert('Podcast Created/Updated');

      // Reset the form fields
      resetForm();
    } catch (error) {
      console.error('Error creating/updating podcast:', error);
      window.alert('Error creating/updating podcast. Please try again.');
    }
  };

  return (
    <div className="PodcastFormContainer">
      <h2>Create/Update Podcast</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} />

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Author Name:</label>
        <input type="text" name="author_name" value={formData.author_name} onChange={handleChange} />

        <label>Image URL:</label>
        <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />

        <label>Language:</label>
        <input type="text" name="lang" value={formData.lang} onChange={handleChange} />

        <label>Times Played:</label>
        <input type="text" name="timesplayed" value={formData.timesplayed} onChange={handleChange} />

        <label>Type:</label>
        <input type="text" name="type" value={formData.type} onChange={handleChange} />

        <label>Music Name:</label>
        <input type="text" name="musicName" value={formData.musicName} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PodcastForm;