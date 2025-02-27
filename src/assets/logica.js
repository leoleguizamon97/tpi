import router from "@/main";
import axios from "axios";

function cambiarTitulo(titulo) {
  document.getElementById("tituloGeneral").innerHTML = titulo;
}

async function ingreso() {
  let usuario = document.getElementById("InputEmail1").value;
  let contraseña = document.getElementById("InputPassword1").value;

  try {
    const response = await axios.post("http://localhost:5000/auth/login", {
      email: usuario,
      password: contraseña,
    });
    console.log("Logged in:");
    router.push("/");
  } catch (error) {
    console.error("Login error:", error);
  }
  //Logica de back
}

async function buscarECBE(query) {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/search",
      {
        query: query,
        threshold: 0.7, // optional
        limit: 5, // optional
      },
      {
        headers: {
          Authorization: "Bearer token",
        },
      },
    );
    let results = response.data["results"][0];
    return {
      id: results["id"],
      content: results["content"],
      filename: results["filename"],
      similarity: results["similarity"],
    };
  } catch (error) {
    console.error("Search error:", error);
  }
}

export default {
  cambiarTitulo,
  ingreso,
  buscarECBE,
};
