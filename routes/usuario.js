const { Router } = require("express");
const {
  usuarioGet,
  usuarioPut,
  usuarioPost,
  usuarioDelete,
} = require("../controllers/usuario");

function Hola (){

}

const router = Router();

router.get("/", usuarioGet);
router.put("/", usuarioPut);
router.post("/", usuarioPost);
router.delete("/", usuarioDelete);

module.exports = router;
