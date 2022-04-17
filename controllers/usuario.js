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
  const { id } = req.params;
  res.json({ mensaje: "put API" , id});
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
