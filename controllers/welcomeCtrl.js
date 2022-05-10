const welcomeCtrl = {
  rootMessage: async (req, res, next) => {
    try {
      return res.status(200).json({
        message: "Hello all members of the BAWES team !",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }
  
};

module.exports = welcomeCtrl;
