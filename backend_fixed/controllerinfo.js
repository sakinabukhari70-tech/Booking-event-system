const InfoPage = require('./infopage');

exports.getPage = async (req, res) => {
  try {
    const page = await InfoPage.findOne({ slug: req.params.slug });
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.json(page);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrUpdatePage = async (req, res) => {
  try {
    const { slug, title, content } = req.body;
    let page = await InfoPage.findOne({ slug });

    if (page) {
      page.title = title;
      page.content = content;
      page.updatedAt = Date.now();
      await page.save();
      return res.json({ message: 'Page updated', page });
    } else {
      const newPage = new InfoPage({ slug, title, content });
      await newPage.save();
      res.status(201).json({ message: 'Page created', newPage });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.listPages = async (req, res) => {
  try {
    const pages = await InfoPage.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// test route
exports.test = (req, res) => {
  res.json({ message: "Info API working fine ✅" });
};
