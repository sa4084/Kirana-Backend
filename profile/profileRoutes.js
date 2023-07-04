const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get profile information
router.get('/:emailId', async (req, res) => {
    try {
      const profile = await Profile.findOne({ emailId: req.params.emailId });
      if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
      }
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
// Create profile or update if already exists
router.post('/', async (req, res) => {
    try {
      const { emailId, name, phoneNumber, address } = req.body;
  
      // Find the profile by emailId
      let profile = await Profile.findOne({ emailId });
  
      if (profile) {
        // Profile exists, update it with the new details
        profile.name = name;
        profile.phoneNumber = phoneNumber;
        profile.address = address;
      } else {
        // Profile does not exist, create a new one
        profile = new Profile({
          emailId,
          name,
          phoneNumber,
          address,
        });
      }
  
      // Save the updated or new profile to the database
      const updatedProfile = await profile.save();
      res.json(updatedProfile);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
