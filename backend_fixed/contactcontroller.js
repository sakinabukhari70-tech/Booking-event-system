const ContactMessage = require('./contactmsg');

exports.createMessage = async (req, res) => {
  try {
    const msg = await ContactMessage.create(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.listMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// test route
exports.test = (req, res) => {
  res.json({ message: "Contact API working fine ✅" });
};
