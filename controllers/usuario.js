const usuarioGet = (req, res) => {
  // const params = req.query;
  const { nombre = "Nombre por default" } = req.query;
  res.json({ mensaje: "get API", nombre });
};
const usuarioPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({ mensaje: "post API", nombre, edad });
};
const usuarioPut = (req, res) => {
  res.json({ mensaje: "put API" });
};
const usuarioDelete = (req, res) => {
  res.json({ mensaje: "delete API" });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};
