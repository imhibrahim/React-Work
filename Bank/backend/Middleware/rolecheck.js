
function roleCheck(allowedRoles = []) {
  return (req, res, next) => {
    const { role } = req.body; // 👈 ya req.user.role if you’re using token

    // agar role missing hai
    if (!role) {
      return res.status(401).json({ message: "Role not provided" });
    }

    // agar allowed role list me nahi hai
    if (!allowedRoles.includes(role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    // warna proceed karo
    next();
  };
}

module.exports = roleCheck;
