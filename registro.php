<?php
require 'conexion/database.php'; 
$db = new Database();
$con = $db->conectar();

// Recibe los datos del formulario
$documento = $_POST['documento'];
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$edad = $_POST['edad'];
$correo = $_POST['correo'];
$id_eps = $_POST['id_eps'];
$fecha = $_POST['fecha'];
$id_med = $_POST['id_med'];
$id_enfer = $_POST['id_enfer'];
$observa = $_POST['observa'];
   
// Consulta SQL para insertar los datos en la tabla 'user'
$sql = "INSERT INTO urgencias(documento, nombres, apellidos, edad, correo, id_eps, fecha, id_med, id_enfer, observa) 
        VALUES ('$documento', '$nombres', '$apellidos', '$edad', '$correo', '$id_eps', $fecha, $id_med, $id_enfer, $observa)";

// Ejecuta la consulta
if ($con->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}


$con->close();



?>