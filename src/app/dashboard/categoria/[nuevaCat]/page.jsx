// Esto es el codigo para el formulario de creacion de categoria

'use client';
import React, { useEffect, useState } from "react";
import { postCategory } from "@/app/services/itemService";
import style from "./nuevaCategoria.module.css";

const CategoryForm = (params) => {
  const id = params.params.nuevaCat;
  const [formData, setFormData] = useState({
    nombreCategoria: ""
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postCategory(formData);
      console.log("Categoría creada", response);
      setFormData({ nombreCategoria: "" });
    } catch (error) {
      console.error("Error al crear la categoría", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    
      <div className={style.c_container}>
        <form className={style.c_form} onSubmit={handleFormSubmit}>
          <div className={style.card}>
            <div className={style.c_title}>CREAR NUEVA CATEGORIA</div>
              <div className={style.c_form}>
                <input 
                    className={style.c_input}
                      id="nuevacat"
                      type="text"
                      name="nombreCategoria"
                      value={formData.nombreCategoria}
                      onChange={handleInputChange}
                      />
                      <label className={style.c_label} htmlFor="nuevacat">
                      Nombre de la categoría: 
                      </label>
                      <div className={style.c_action}>
                     <button className={style.button} type="submit">Guardar</button>
                  </div>
               </div>
            </div>
        </form>
     </div>
  );
};
 
export default CategoryForm;