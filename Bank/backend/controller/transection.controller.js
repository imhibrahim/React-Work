const transectionFunc = async (req, res, UsersSchema) => {
  try {
    const { email, amount, type, refrence } = req.body;

    // step 1: user find kro
    const user = await UsersSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // step 2: check kro balance kafi hy ya nahi
    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance!" });
    }

    // step 3: balance minus kro
    user.balance -= Number(amount);

    // step 4: transaction add kro
    user.transections.push({
      type,
      refrence,
      amount,
      date: new Date(),
    });

    // step 5: save kro updated user
    await user.save();

    // step 6: response
    res.status(200).json({
      message: "Transaction successful!",
      remainingBalance: user.balance,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error!", error: err.message });
  }
};

module.exports = { transectionFunc };
